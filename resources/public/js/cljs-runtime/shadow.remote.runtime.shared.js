goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31476,res){
var map__31478 = p__31476;
var map__31478__$1 = cljs.core.__destructure_map(map__31478);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31478__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31478__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31480 = res;
var G__31480__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31480,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31480);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31480__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31480__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31489 = arguments.length;
switch (G__31489) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31498,msg,handlers,timeout_after_ms){
var map__31499 = p__31498;
var map__31499__$1 = cljs.core.__destructure_map(map__31499);
var runtime = map__31499__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___31947 = arguments.length;
var i__4819__auto___31948 = (0);
while(true){
if((i__4819__auto___31948 < len__4818__auto___31947)){
args__4824__auto__.push((arguments[i__4819__auto___31948]));

var G__31949 = (i__4819__auto___31948 + (1));
i__4819__auto___31948 = G__31949;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31535,ev,args){
var map__31537 = p__31535;
var map__31537__$1 = cljs.core.__destructure_map(map__31537);
var runtime = map__31537__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31537__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31539 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31542 = null;
var count__31543 = (0);
var i__31544 = (0);
while(true){
if((i__31544 < count__31543)){
var ext = chunk__31542.cljs$core$IIndexed$_nth$arity$2(null,i__31544);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31956 = seq__31539;
var G__31957 = chunk__31542;
var G__31958 = count__31543;
var G__31959 = (i__31544 + (1));
seq__31539 = G__31956;
chunk__31542 = G__31957;
count__31543 = G__31958;
i__31544 = G__31959;
continue;
} else {
var G__31960 = seq__31539;
var G__31961 = chunk__31542;
var G__31962 = count__31543;
var G__31963 = (i__31544 + (1));
seq__31539 = G__31960;
chunk__31542 = G__31961;
count__31543 = G__31962;
i__31544 = G__31963;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31539);
if(temp__5753__auto__){
var seq__31539__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31539__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31539__$1);
var G__31965 = cljs.core.chunk_rest(seq__31539__$1);
var G__31966 = c__4638__auto__;
var G__31967 = cljs.core.count(c__4638__auto__);
var G__31968 = (0);
seq__31539 = G__31965;
chunk__31542 = G__31966;
count__31543 = G__31967;
i__31544 = G__31968;
continue;
} else {
var ext = cljs.core.first(seq__31539__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31969 = cljs.core.next(seq__31539__$1);
var G__31970 = null;
var G__31971 = (0);
var G__31972 = (0);
seq__31539 = G__31969;
chunk__31542 = G__31970;
count__31543 = G__31971;
i__31544 = G__31972;
continue;
} else {
var G__31973 = cljs.core.next(seq__31539__$1);
var G__31974 = null;
var G__31975 = (0);
var G__31976 = (0);
seq__31539 = G__31973;
chunk__31542 = G__31974;
count__31543 = G__31975;
i__31544 = G__31976;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31519){
var G__31521 = cljs.core.first(seq31519);
var seq31519__$1 = cljs.core.next(seq31519);
var G__31522 = cljs.core.first(seq31519__$1);
var seq31519__$2 = cljs.core.next(seq31519__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31521,G__31522,seq31519__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31642,p__31643){
var map__31645 = p__31642;
var map__31645__$1 = cljs.core.__destructure_map(map__31645);
var runtime = map__31645__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31645__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31646 = p__31643;
var map__31646__$1 = cljs.core.__destructure_map(map__31646);
var msg = map__31646__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31646__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31652 = cljs.core.deref(state_ref);
var map__31652__$1 = cljs.core.__destructure_map(map__31652);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31652__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31652__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31683){
var map__31684 = p__31683;
var map__31684__$1 = cljs.core.__destructure_map(map__31684);
var runtime = map__31684__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31684__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31691,msg){
var map__31692 = p__31691;
var map__31692__$1 = cljs.core.__destructure_map(map__31692);
var runtime = map__31692__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31692__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31723,key,p__31724){
var map__31726 = p__31723;
var map__31726__$1 = cljs.core.__destructure_map(map__31726);
var state = map__31726__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31726__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31727 = p__31724;
var map__31727__$1 = cljs.core.__destructure_map(map__31727);
var spec = map__31727__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31727__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31741,key,spec){
var map__31744 = p__31741;
var map__31744__$1 = cljs.core.__destructure_map(map__31744);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31744__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31762_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31762_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31764_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31764_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31765_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31765_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31766_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31766_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31770_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31770_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31834,key){
var map__31836 = p__31834;
var map__31836__$1 = cljs.core.__destructure_map(map__31836);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31836__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31854,msg){
var map__31856 = p__31854;
var map__31856__$1 = cljs.core.__destructure_map(map__31856);
var runtime = map__31856__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31856__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31870,p__31871){
var map__31872 = p__31870;
var map__31872__$1 = cljs.core.__destructure_map(map__31872);
var runtime = map__31872__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31872__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31873 = p__31871;
var map__31873__$1 = cljs.core.__destructure_map(map__31873);
var msg = map__31873__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31873__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31873__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31881 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31883 = null;
var count__31884 = (0);
var i__31885 = (0);
while(true){
if((i__31885 < count__31884)){
var map__31909 = chunk__31883.cljs$core$IIndexed$_nth$arity$2(null,i__31885);
var map__31909__$1 = cljs.core.__destructure_map(map__31909);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31909__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31997 = seq__31881;
var G__31998 = chunk__31883;
var G__31999 = count__31884;
var G__32000 = (i__31885 + (1));
seq__31881 = G__31997;
chunk__31883 = G__31998;
count__31884 = G__31999;
i__31885 = G__32000;
continue;
} else {
var G__32001 = seq__31881;
var G__32002 = chunk__31883;
var G__32003 = count__31884;
var G__32004 = (i__31885 + (1));
seq__31881 = G__32001;
chunk__31883 = G__32002;
count__31884 = G__32003;
i__31885 = G__32004;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31881);
if(temp__5753__auto__){
var seq__31881__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31881__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31881__$1);
var G__32005 = cljs.core.chunk_rest(seq__31881__$1);
var G__32006 = c__4638__auto__;
var G__32007 = cljs.core.count(c__4638__auto__);
var G__32008 = (0);
seq__31881 = G__32005;
chunk__31883 = G__32006;
count__31884 = G__32007;
i__31885 = G__32008;
continue;
} else {
var map__31924 = cljs.core.first(seq__31881__$1);
var map__31924__$1 = cljs.core.__destructure_map(map__31924);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31924__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32011 = cljs.core.next(seq__31881__$1);
var G__32012 = null;
var G__32013 = (0);
var G__32014 = (0);
seq__31881 = G__32011;
chunk__31883 = G__32012;
count__31884 = G__32013;
i__31885 = G__32014;
continue;
} else {
var G__32015 = cljs.core.next(seq__31881__$1);
var G__32016 = null;
var G__32017 = (0);
var G__32018 = (0);
seq__31881 = G__32015;
chunk__31883 = G__32016;
count__31884 = G__32017;
i__31885 = G__32018;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
