goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__37360 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37362 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37362);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___37641 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___37641)){
var new_db_37642 = temp__5753__auto___37641;
var fexpr__37368_37643 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37368_37643.cljs$core$IFn$_invoke$arity$1 ? fexpr__37368_37643.cljs$core$IFn$_invoke$arity$1(new_db_37642) : fexpr__37368_37643.call(null,new_db_37642));
} else {
}

var seq__37371 = cljs.core.seq(effects_without_db);
var chunk__37373 = null;
var count__37374 = (0);
var i__37375 = (0);
while(true){
if((i__37375 < count__37374)){
var vec__37391 = chunk__37373.cljs$core$IIndexed$_nth$arity$2(null,i__37375);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37391,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37391,(1),null);
var temp__5751__auto___37644 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37644)){
var effect_fn_37645 = temp__5751__auto___37644;
(effect_fn_37645.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37645.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37645.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37646 = seq__37371;
var G__37647 = chunk__37373;
var G__37648 = count__37374;
var G__37649 = (i__37375 + (1));
seq__37371 = G__37646;
chunk__37373 = G__37647;
count__37374 = G__37648;
i__37375 = G__37649;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37371);
if(temp__5753__auto__){
var seq__37371__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37371__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37371__$1);
var G__37650 = cljs.core.chunk_rest(seq__37371__$1);
var G__37651 = c__4638__auto__;
var G__37652 = cljs.core.count(c__4638__auto__);
var G__37653 = (0);
seq__37371 = G__37650;
chunk__37373 = G__37651;
count__37374 = G__37652;
i__37375 = G__37653;
continue;
} else {
var vec__37397 = cljs.core.first(seq__37371__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37397,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37397,(1),null);
var temp__5751__auto___37654 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37654)){
var effect_fn_37655 = temp__5751__auto___37654;
(effect_fn_37655.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37655.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37655.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37656 = cljs.core.next(seq__37371__$1);
var G__37657 = null;
var G__37658 = (0);
var G__37659 = (0);
seq__37371 = G__37656;
chunk__37373 = G__37657;
count__37374 = G__37658;
i__37375 = G__37659;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36865__auto___37660 = re_frame.interop.now();
var duration__36866__auto___37661 = (end__36865__auto___37660 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36866__auto___37661,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36865__auto___37660);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37360);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___37662 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___37662)){
var new_db_37663 = temp__5753__auto___37662;
var fexpr__37402_37664 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37402_37664.cljs$core$IFn$_invoke$arity$1 ? fexpr__37402_37664.cljs$core$IFn$_invoke$arity$1(new_db_37663) : fexpr__37402_37664.call(null,new_db_37663));
} else {
}

var seq__37405 = cljs.core.seq(effects_without_db);
var chunk__37406 = null;
var count__37407 = (0);
var i__37408 = (0);
while(true){
if((i__37408 < count__37407)){
var vec__37419 = chunk__37406.cljs$core$IIndexed$_nth$arity$2(null,i__37408);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37419,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37419,(1),null);
var temp__5751__auto___37665 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37665)){
var effect_fn_37666 = temp__5751__auto___37665;
(effect_fn_37666.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37666.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37666.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37667 = seq__37405;
var G__37668 = chunk__37406;
var G__37669 = count__37407;
var G__37670 = (i__37408 + (1));
seq__37405 = G__37667;
chunk__37406 = G__37668;
count__37407 = G__37669;
i__37408 = G__37670;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37405);
if(temp__5753__auto__){
var seq__37405__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37405__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37405__$1);
var G__37671 = cljs.core.chunk_rest(seq__37405__$1);
var G__37672 = c__4638__auto__;
var G__37673 = cljs.core.count(c__4638__auto__);
var G__37674 = (0);
seq__37405 = G__37671;
chunk__37406 = G__37672;
count__37407 = G__37673;
i__37408 = G__37674;
continue;
} else {
var vec__37426 = cljs.core.first(seq__37405__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37426,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37426,(1),null);
var temp__5751__auto___37675 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37675)){
var effect_fn_37676 = temp__5751__auto___37675;
(effect_fn_37676.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37676.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37676.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37677 = cljs.core.next(seq__37405__$1);
var G__37678 = null;
var G__37679 = (0);
var G__37680 = (0);
seq__37405 = G__37677;
chunk__37406 = G__37678;
count__37407 = G__37679;
i__37408 = G__37680;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37439){
var map__37444 = p__37439;
var map__37444__$1 = cljs.core.__destructure_map(map__37444);
var effect = map__37444__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37444__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37444__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__37460 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37461 = null;
var count__37462 = (0);
var i__37463 = (0);
while(true){
if((i__37463 < count__37462)){
var effect = chunk__37461.cljs$core$IIndexed$_nth$arity$2(null,i__37463);
re_frame.fx.dispatch_later(effect);


var G__37681 = seq__37460;
var G__37682 = chunk__37461;
var G__37683 = count__37462;
var G__37684 = (i__37463 + (1));
seq__37460 = G__37681;
chunk__37461 = G__37682;
count__37462 = G__37683;
i__37463 = G__37684;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37460);
if(temp__5753__auto__){
var seq__37460__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37460__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37460__$1);
var G__37685 = cljs.core.chunk_rest(seq__37460__$1);
var G__37686 = c__4638__auto__;
var G__37687 = cljs.core.count(c__4638__auto__);
var G__37688 = (0);
seq__37460 = G__37685;
chunk__37461 = G__37686;
count__37462 = G__37687;
i__37463 = G__37688;
continue;
} else {
var effect = cljs.core.first(seq__37460__$1);
re_frame.fx.dispatch_later(effect);


var G__37689 = cljs.core.next(seq__37460__$1);
var G__37690 = null;
var G__37691 = (0);
var G__37692 = (0);
seq__37460 = G__37689;
chunk__37461 = G__37690;
count__37462 = G__37691;
i__37463 = G__37692;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__37503 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37504 = null;
var count__37505 = (0);
var i__37506 = (0);
while(true){
if((i__37506 < count__37505)){
var vec__37605 = chunk__37504.cljs$core$IIndexed$_nth$arity$2(null,i__37506);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37605,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37605,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___37693 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37693)){
var effect_fn_37694 = temp__5751__auto___37693;
(effect_fn_37694.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37694.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37694.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37695 = seq__37503;
var G__37696 = chunk__37504;
var G__37697 = count__37505;
var G__37698 = (i__37506 + (1));
seq__37503 = G__37695;
chunk__37504 = G__37696;
count__37505 = G__37697;
i__37506 = G__37698;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37503);
if(temp__5753__auto__){
var seq__37503__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37503__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37503__$1);
var G__37699 = cljs.core.chunk_rest(seq__37503__$1);
var G__37700 = c__4638__auto__;
var G__37701 = cljs.core.count(c__4638__auto__);
var G__37702 = (0);
seq__37503 = G__37699;
chunk__37504 = G__37700;
count__37505 = G__37701;
i__37506 = G__37702;
continue;
} else {
var vec__37630 = cljs.core.first(seq__37503__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37630,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37630,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___37703 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37703)){
var effect_fn_37704 = temp__5751__auto___37703;
(effect_fn_37704.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37704.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37704.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37705 = cljs.core.next(seq__37503__$1);
var G__37706 = null;
var G__37707 = (0);
var G__37708 = (0);
seq__37503 = G__37705;
chunk__37504 = G__37706;
count__37505 = G__37707;
i__37506 = G__37708;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__37633 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37634 = null;
var count__37635 = (0);
var i__37636 = (0);
while(true){
if((i__37636 < count__37635)){
var event = chunk__37634.cljs$core$IIndexed$_nth$arity$2(null,i__37636);
re_frame.router.dispatch(event);


var G__37709 = seq__37633;
var G__37710 = chunk__37634;
var G__37711 = count__37635;
var G__37712 = (i__37636 + (1));
seq__37633 = G__37709;
chunk__37634 = G__37710;
count__37635 = G__37711;
i__37636 = G__37712;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37633);
if(temp__5753__auto__){
var seq__37633__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37633__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37633__$1);
var G__37713 = cljs.core.chunk_rest(seq__37633__$1);
var G__37714 = c__4638__auto__;
var G__37715 = cljs.core.count(c__4638__auto__);
var G__37716 = (0);
seq__37633 = G__37713;
chunk__37634 = G__37714;
count__37635 = G__37715;
i__37636 = G__37716;
continue;
} else {
var event = cljs.core.first(seq__37633__$1);
re_frame.router.dispatch(event);


var G__37717 = cljs.core.next(seq__37633__$1);
var G__37718 = null;
var G__37719 = (0);
var G__37720 = (0);
seq__37633 = G__37717;
chunk__37634 = G__37718;
count__37635 = G__37719;
i__37636 = G__37720;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__37637 = cljs.core.seq(value);
var chunk__37638 = null;
var count__37639 = (0);
var i__37640 = (0);
while(true){
if((i__37640 < count__37639)){
var event = chunk__37638.cljs$core$IIndexed$_nth$arity$2(null,i__37640);
clear_event(event);


var G__37721 = seq__37637;
var G__37722 = chunk__37638;
var G__37723 = count__37639;
var G__37724 = (i__37640 + (1));
seq__37637 = G__37721;
chunk__37638 = G__37722;
count__37639 = G__37723;
i__37640 = G__37724;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37637);
if(temp__5753__auto__){
var seq__37637__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37637__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37637__$1);
var G__37725 = cljs.core.chunk_rest(seq__37637__$1);
var G__37726 = c__4638__auto__;
var G__37727 = cljs.core.count(c__4638__auto__);
var G__37728 = (0);
seq__37637 = G__37725;
chunk__37638 = G__37726;
count__37639 = G__37727;
i__37640 = G__37728;
continue;
} else {
var event = cljs.core.first(seq__37637__$1);
clear_event(event);


var G__37730 = cljs.core.next(seq__37637__$1);
var G__37731 = null;
var G__37732 = (0);
var G__37733 = (0);
seq__37637 = G__37730;
chunk__37638 = G__37731;
count__37639 = G__37732;
i__37640 = G__37733;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
