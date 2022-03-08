(ns simple.core
  (:require [reagent.dom]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [simple.game :as game]
            ))

;; A detailed walk-through of this source code is provided in the docs:
;; https://day8.github.io/re-frame/dominoes-live/

;; -- Domino 1 - Event Dispatch -----------------------------------------------

(defn dispatch-user-event
  []
  (let [now (js/Date.)]
    (rf/dispatch [:timer now])))  ;; <-- dispatch used

;; Call the dispatching function every second.
;; `defonce` is like `def` but it ensures only one instance is ever
;; created in the face of figwheel hot-reloading of this file.
(defonce do-timer (js/setInterval dispatch-user-event 1000))


;; -- Domino 2 - Event Handlers -----------------------------------------------

(rf/reg-event-db              ;; sets up initial application state
 :initialize                 ;; usage:  (dispatch [:initialize])
 (fn [_ _]                   ;; the two parameters are not important here, so use _
   {:time (js/Date.)         ;; What it returns becomes the new application state
    :time-color "#f88"}))    ;; so the application state will initially be a map with two keys


(rf/reg-event-db                ;; usage:  (dispatch [:time-color-change 34562])
 ;;:time-color-change            ;; dispatched when the user enters a new colour into the UI text field
 :user-event-click
 (fn [db [_ new-color-value]]  ;; -db event handlers given 2 parameters:  current application state and event (a vector)
   (assoc db :time-color new-color-value)))   ;; compute and return the new application state


(rf/reg-event-db                 ;; usage:  (dispatch [:timer a-js-Date])
 :timer                         ;; every second an event of this kind will be dispatched
 (fn [db [_ new-time]]          ;; note how the 2nd parameter is destructured to obtain the data value
   (assoc db :time new-time)))  ;; compute and return the new application state


;; -- Domino 4 - Query  -------------------------------------------------------

(rf/reg-sub
 :time
 (fn [db _]     ;; db is current app state. 2nd unused param is query vector
   (:time db))) ;; return a query computation over the application state

(rf/reg-sub
 :time-color
 (fn [db _]
   (:time-color db)))


;; -- Domino 5 - View Functions ----------------------------------------------

(defn word-to-guess
  []
  ;;[:div.example-clock
  [:div.word-to-guess
   "Word to guess"

   ;;{:style {:color @(rf/subscribe [:time-color])}}
   ;; (-> @(rf/subscribe [:time])
   ;;     .toTimeString
   ;;     (str/split " ")
   ;;     first)]
   [:p (->> (game/new-game "test")
            (game/hint)
            (map #(if (nil? %) " _ " %)))]])




(defn letter-input
  []
  [:div.letter-input
   "Letter Input"
   [:p
   [:input
     {:type "button"
          ;;:value @(rf/subscribe [:time-color])
            :value "x"
            ;;:on-change #(rf/dispatch [:time-color-change (-> % .-target .-value)])}]])  ;; <---
            :on-change #(rf/dispatch [])}]]])

;;TODO
;; connect letter input
;; show game hint !!
;; new-game
;; gameflow from event dispatch -> view

(defn new-game
  []
  [:div.new-game
   [:p
   [:input
     {:type "button"
          ;;:value @(rf/subscribe [:time-color])
            :value "I want a new game"
            :on-change #(rf/dispatch [:div.word-to-guess
                                      (game/hint (game/new-game "doctronic"))])}]]])


(defn ui
  []
  [:div
   [:h1 "Let's play Hangman"]
   [:h4 (word-to-guess)]
   [:h4 (letter-input)]
   [:h4 (new-game)]]
  )

;; -- Entry Point -------------------------------------------------------------

(defn render
  []
  (reagent.dom/render [ui]
                      (js/document.getElementById "app")))

(defn ^:dev/after-load clear-cache-and-render!
  []
  ;; The `:dev/after-load` metadata causes this function to be called
  ;; after shadow-cljs hot-reloads code. We force a UI update by clearing
  ;; the Reframe subscription cache.
  (rf/clear-subscription-cache!)
  (render))

(defn run
  []
  (rf/dispatch-sync [:initialize]) ;; put a value into application state
  (render))                         ;; mount the application's ui into '<div id="app" />'
