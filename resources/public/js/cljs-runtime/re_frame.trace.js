goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__36888){
var map__36890 = p__36888;
var map__36890__$1 = cljs.core.__destructure_map(map__36890);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36890__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36890__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36890__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36890__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__36892_36937 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__36893_36938 = null;
var count__36894_36939 = (0);
var i__36895_36940 = (0);
while(true){
if((i__36895_36940 < count__36894_36939)){
var vec__36908_36941 = chunk__36893_36938.cljs$core$IIndexed$_nth$arity$2(null,i__36895_36940);
var k_36942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36908_36941,(0),null);
var cb_36943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36908_36941,(1),null);
try{var G__36912_36944 = cljs.core.deref(re_frame.trace.traces);
(cb_36943.cljs$core$IFn$_invoke$arity$1 ? cb_36943.cljs$core$IFn$_invoke$arity$1(G__36912_36944) : cb_36943.call(null,G__36912_36944));
}catch (e36911){var e_36945 = e36911;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36942,"while storing",cljs.core.deref(re_frame.trace.traces),e_36945], 0));
}

var G__36946 = seq__36892_36937;
var G__36947 = chunk__36893_36938;
var G__36948 = count__36894_36939;
var G__36949 = (i__36895_36940 + (1));
seq__36892_36937 = G__36946;
chunk__36893_36938 = G__36947;
count__36894_36939 = G__36948;
i__36895_36940 = G__36949;
continue;
} else {
var temp__5753__auto___36950 = cljs.core.seq(seq__36892_36937);
if(temp__5753__auto___36950){
var seq__36892_36951__$1 = temp__5753__auto___36950;
if(cljs.core.chunked_seq_QMARK_(seq__36892_36951__$1)){
var c__4638__auto___36952 = cljs.core.chunk_first(seq__36892_36951__$1);
var G__36953 = cljs.core.chunk_rest(seq__36892_36951__$1);
var G__36954 = c__4638__auto___36952;
var G__36955 = cljs.core.count(c__4638__auto___36952);
var G__36956 = (0);
seq__36892_36937 = G__36953;
chunk__36893_36938 = G__36954;
count__36894_36939 = G__36955;
i__36895_36940 = G__36956;
continue;
} else {
var vec__36913_36957 = cljs.core.first(seq__36892_36951__$1);
var k_36958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36913_36957,(0),null);
var cb_36959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36913_36957,(1),null);
try{var G__36917_36960 = cljs.core.deref(re_frame.trace.traces);
(cb_36959.cljs$core$IFn$_invoke$arity$1 ? cb_36959.cljs$core$IFn$_invoke$arity$1(G__36917_36960) : cb_36959.call(null,G__36917_36960));
}catch (e36916){var e_36961 = e36916;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36958,"while storing",cljs.core.deref(re_frame.trace.traces),e_36961], 0));
}

var G__36962 = cljs.core.next(seq__36892_36951__$1);
var G__36963 = null;
var G__36964 = (0);
var G__36965 = (0);
seq__36892_36937 = G__36962;
chunk__36893_36938 = G__36963;
count__36894_36939 = G__36964;
i__36895_36940 = G__36965;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
