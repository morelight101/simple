goog.provide('simple.game');
/**
 * Converts a string to an array of chars.
 */
simple.game.word__GT_letters = (function simple$game$word__GT_letters(word){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,word);
});
/**
 * Liefert true, wenn der Spieler das Spiel `game` gewonnen hat,
 *   andernfalls false.
 *   See also [[game-over?]]
 */
simple.game.game_won_QMARK_ = (function simple$game$game_won_QMARK_(p__38816){
var map__38817 = p__38816;
var map__38817__$1 = cljs.core.__destructure_map(map__38817);
var word_to_guess = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38817__$1,new cljs.core.Keyword(null,"word-to-guess","word-to-guess",-1587724870));
var correct_guesses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38817__$1,new cljs.core.Keyword(null,"correct-guesses","correct-guesses",-339869575));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(simple.game.word__GT_letters(word_to_guess)),correct_guesses);
});
/**
 * Returns true if player lost, otherwise false.
 *   See also [[game-over?]]
 */
simple.game.game_lost_QMARK_ = (function simple$game$game_lost_QMARK_(p__38818){
var map__38819 = p__38818;
var map__38819__$1 = cljs.core.__destructure_map(map__38819);
var tries_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38819__$1,new cljs.core.Keyword(null,"tries-left","tries-left",-900351353));
return (tries_left === (0));
});
/**
 * Returns true if user guessed the word or has no tries-left,
 *   otherwise false. See also [[game-won?]] and [[game-lost?]].
 */
simple.game.game_over_QMARK_ = (function simple$game$game_over_QMARK_(game){
return ((simple.game.game_won_QMARK_(game)) || (simple.game.game_lost_QMARK_(game)));
});
/**
 * Creates a new `game`, parameter is a string.
 */
simple.game.new_game = (function simple$game$new_game(word_to_guess){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"word-to-guess","word-to-guess",-1587724870),word_to_guess,new cljs.core.Keyword(null,"correct-guesses","correct-guesses",-339869575),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"tries-left","tries-left",-900351353),(5)], null);
});
/**
 * Returns an updated `game` reflecting whether the `letter`
 *   the user guessed was contained in the `word-to-guess`;
 *   is the `game` over, the function returns the `game`
 *   without change.
 */
simple.game.guess_letter = (function simple$game$guess_letter(p__38820,letter){
var map__38821 = p__38820;
var map__38821__$1 = cljs.core.__destructure_map(map__38821);
var game = map__38821__$1;
var word_to_guess = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38821__$1,new cljs.core.Keyword(null,"word-to-guess","word-to-guess",-1587724870));
if(simple.game.game_over_QMARK_(game)){
return game;
} else {
if(clojure.string.includes_QMARK_(word_to_guess,letter)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.Keyword(null,"correct-guesses","correct-guesses",-339869575),cljs.core.conj,letter);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"tries-left","tries-left",-900351353),cljs.core.dec);

}
}
});
/**
 * Returns the current `score`.
 */
simple.game.score = (function simple$game$score(p__38822){
var map__38823 = p__38822;
var map__38823__$1 = cljs.core.__destructure_map(map__38823);
var correct_guesses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38823__$1,new cljs.core.Keyword(null,"correct-guesses","correct-guesses",-339869575));
return (cljs.core.count(correct_guesses) * (8));
});
/**
 * Returns a vector of `correct-guesses` in correct position;
 *   incorrectly guessed letters are indicated by nil.
 */
simple.game.hint = (function simple$game$hint(p__38824){
var map__38825 = p__38824;
var map__38825__$1 = cljs.core.__destructure_map(map__38825);
var word_to_guess = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38825__$1,new cljs.core.Keyword(null,"word-to-guess","word-to-guess",-1587724870));
var correct_guesses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38825__$1,new cljs.core.Keyword(null,"correct-guesses","correct-guesses",-339869575));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(correct_guesses,simple.game.word__GT_letters(word_to_guess));
});

//# sourceMappingURL=simple.game.js.map
