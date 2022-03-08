goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37423 = arguments.length;
var i__4819__auto___37424 = (0);
while(true){
if((i__4819__auto___37424 < len__4818__auto___37423)){
args__4824__auto__.push((arguments[i__4819__auto___37424]));

var G__37425 = (i__4819__auto___37424 + (1));
i__4819__auto___37424 = G__37425;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37073){
var G__37074 = cljs.core.first(seq37073);
var seq37073__$1 = cljs.core.next(seq37073);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37074,seq37073__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37084 = cljs.core.seq(sources);
var chunk__37085 = null;
var count__37086 = (0);
var i__37087 = (0);
while(true){
if((i__37087 < count__37086)){
var map__37107 = chunk__37085.cljs$core$IIndexed$_nth$arity$2(null,i__37087);
var map__37107__$1 = cljs.core.__destructure_map(map__37107);
var src = map__37107__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37107__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37107__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37107__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37107__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37112){var e_37429 = e37112;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37429);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37429.message)].join('')));
}

var G__37430 = seq__37084;
var G__37431 = chunk__37085;
var G__37432 = count__37086;
var G__37433 = (i__37087 + (1));
seq__37084 = G__37430;
chunk__37085 = G__37431;
count__37086 = G__37432;
i__37087 = G__37433;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37084);
if(temp__5753__auto__){
var seq__37084__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37084__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37084__$1);
var G__37434 = cljs.core.chunk_rest(seq__37084__$1);
var G__37435 = c__4638__auto__;
var G__37436 = cljs.core.count(c__4638__auto__);
var G__37437 = (0);
seq__37084 = G__37434;
chunk__37085 = G__37435;
count__37086 = G__37436;
i__37087 = G__37437;
continue;
} else {
var map__37119 = cljs.core.first(seq__37084__$1);
var map__37119__$1 = cljs.core.__destructure_map(map__37119);
var src = map__37119__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37119__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37119__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37119__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37119__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37122){var e_37438 = e37122;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37438);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37438.message)].join('')));
}

var G__37440 = cljs.core.next(seq__37084__$1);
var G__37441 = null;
var G__37442 = (0);
var G__37443 = (0);
seq__37084 = G__37440;
chunk__37085 = G__37441;
count__37086 = G__37442;
i__37087 = G__37443;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37137 = cljs.core.seq(js_requires);
var chunk__37138 = null;
var count__37139 = (0);
var i__37140 = (0);
while(true){
if((i__37140 < count__37139)){
var js_ns = chunk__37138.cljs$core$IIndexed$_nth$arity$2(null,i__37140);
var require_str_37446 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37446);


var G__37447 = seq__37137;
var G__37448 = chunk__37138;
var G__37449 = count__37139;
var G__37450 = (i__37140 + (1));
seq__37137 = G__37447;
chunk__37138 = G__37448;
count__37139 = G__37449;
i__37140 = G__37450;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37137);
if(temp__5753__auto__){
var seq__37137__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37137__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37137__$1);
var G__37451 = cljs.core.chunk_rest(seq__37137__$1);
var G__37452 = c__4638__auto__;
var G__37453 = cljs.core.count(c__4638__auto__);
var G__37454 = (0);
seq__37137 = G__37451;
chunk__37138 = G__37452;
count__37139 = G__37453;
i__37140 = G__37454;
continue;
} else {
var js_ns = cljs.core.first(seq__37137__$1);
var require_str_37455 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37455);


var G__37456 = cljs.core.next(seq__37137__$1);
var G__37457 = null;
var G__37458 = (0);
var G__37459 = (0);
seq__37137 = G__37456;
chunk__37138 = G__37457;
count__37139 = G__37458;
i__37140 = G__37459;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37155){
var map__37156 = p__37155;
var map__37156__$1 = cljs.core.__destructure_map(map__37156);
var msg = map__37156__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37156__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37156__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37157(s__37158){
return (new cljs.core.LazySeq(null,(function (){
var s__37158__$1 = s__37158;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37158__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37163 = cljs.core.first(xs__6308__auto__);
var map__37163__$1 = cljs.core.__destructure_map(map__37163);
var src = map__37163__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37163__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37163__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__37158__$1,map__37163,map__37163__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37156,map__37156__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37157_$_iter__37159(s__37160){
return (new cljs.core.LazySeq(null,((function (s__37158__$1,map__37163,map__37163__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37156,map__37156__$1,msg,info,reload_info){
return (function (){
var s__37160__$1 = s__37160;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37160__$1);
if(temp__5753__auto____$1){
var s__37160__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37160__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__37160__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__37162 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__37161 = (0);
while(true){
if((i__37161 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__37161);
cljs.core.chunk_append(b__37162,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37466 = (i__37161 + (1));
i__37161 = G__37466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37162),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37157_$_iter__37159(cljs.core.chunk_rest(s__37160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37162),null);
}
} else {
var warning = cljs.core.first(s__37160__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37157_$_iter__37159(cljs.core.rest(s__37160__$2)));
}
} else {
return null;
}
break;
}
});})(s__37158__$1,map__37163,map__37163__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37156,map__37156__$1,msg,info,reload_info))
,null,null));
});})(s__37158__$1,map__37163,map__37163__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37156,map__37156__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37157(cljs.core.rest(s__37158__$1)));
} else {
var G__37467 = cljs.core.rest(s__37158__$1);
s__37158__$1 = G__37467;
continue;
}
} else {
var G__37468 = cljs.core.rest(s__37158__$1);
s__37158__$1 = G__37468;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37189_37469 = cljs.core.seq(warnings);
var chunk__37190_37470 = null;
var count__37191_37471 = (0);
var i__37192_37472 = (0);
while(true){
if((i__37192_37472 < count__37191_37471)){
var map__37203_37473 = chunk__37190_37470.cljs$core$IIndexed$_nth$arity$2(null,i__37192_37472);
var map__37203_37474__$1 = cljs.core.__destructure_map(map__37203_37473);
var w_37475 = map__37203_37474__$1;
var msg_37476__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203_37474__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203_37474__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203_37474__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203_37474__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37479)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37477),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37478),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37476__$1)].join(''));


var G__37480 = seq__37189_37469;
var G__37481 = chunk__37190_37470;
var G__37482 = count__37191_37471;
var G__37483 = (i__37192_37472 + (1));
seq__37189_37469 = G__37480;
chunk__37190_37470 = G__37481;
count__37191_37471 = G__37482;
i__37192_37472 = G__37483;
continue;
} else {
var temp__5753__auto___37484 = cljs.core.seq(seq__37189_37469);
if(temp__5753__auto___37484){
var seq__37189_37485__$1 = temp__5753__auto___37484;
if(cljs.core.chunked_seq_QMARK_(seq__37189_37485__$1)){
var c__4638__auto___37486 = cljs.core.chunk_first(seq__37189_37485__$1);
var G__37487 = cljs.core.chunk_rest(seq__37189_37485__$1);
var G__37488 = c__4638__auto___37486;
var G__37489 = cljs.core.count(c__4638__auto___37486);
var G__37490 = (0);
seq__37189_37469 = G__37487;
chunk__37190_37470 = G__37488;
count__37191_37471 = G__37489;
i__37192_37472 = G__37490;
continue;
} else {
var map__37208_37491 = cljs.core.first(seq__37189_37485__$1);
var map__37208_37492__$1 = cljs.core.__destructure_map(map__37208_37491);
var w_37493 = map__37208_37492__$1;
var msg_37494__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37208_37492__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37208_37492__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37208_37492__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37208_37492__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37497)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37495),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37496),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37494__$1)].join(''));


var G__37498 = cljs.core.next(seq__37189_37485__$1);
var G__37499 = null;
var G__37500 = (0);
var G__37501 = (0);
seq__37189_37469 = G__37498;
chunk__37190_37470 = G__37499;
count__37191_37471 = G__37500;
i__37192_37472 = G__37501;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37151_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37151_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37228){
var map__37229 = p__37228;
var map__37229__$1 = cljs.core.__destructure_map(map__37229);
var msg = map__37229__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37229__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37232 = cljs.core.seq(updates);
var chunk__37234 = null;
var count__37235 = (0);
var i__37236 = (0);
while(true){
if((i__37236 < count__37235)){
var path = chunk__37234.cljs$core$IIndexed$_nth$arity$2(null,i__37236);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37309_37507 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37313_37508 = null;
var count__37314_37509 = (0);
var i__37315_37510 = (0);
while(true){
if((i__37315_37510 < count__37314_37509)){
var node_37511 = chunk__37313_37508.cljs$core$IIndexed$_nth$arity$2(null,i__37315_37510);
if(cljs.core.not(node_37511.shadow$old)){
var path_match_37512 = shadow.cljs.devtools.client.browser.match_paths(node_37511.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37512)){
var new_link_37513 = (function (){var G__37328 = node_37511.cloneNode(true);
G__37328.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37512),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37328;
})();
(node_37511.shadow$old = true);

(new_link_37513.onload = ((function (seq__37309_37507,chunk__37313_37508,count__37314_37509,i__37315_37510,seq__37232,chunk__37234,count__37235,i__37236,new_link_37513,path_match_37512,node_37511,path,map__37229,map__37229__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37511);
});})(seq__37309_37507,chunk__37313_37508,count__37314_37509,i__37315_37510,seq__37232,chunk__37234,count__37235,i__37236,new_link_37513,path_match_37512,node_37511,path,map__37229,map__37229__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37512], 0));

goog.dom.insertSiblingAfter(new_link_37513,node_37511);


var G__37517 = seq__37309_37507;
var G__37518 = chunk__37313_37508;
var G__37519 = count__37314_37509;
var G__37520 = (i__37315_37510 + (1));
seq__37309_37507 = G__37517;
chunk__37313_37508 = G__37518;
count__37314_37509 = G__37519;
i__37315_37510 = G__37520;
continue;
} else {
var G__37521 = seq__37309_37507;
var G__37522 = chunk__37313_37508;
var G__37523 = count__37314_37509;
var G__37524 = (i__37315_37510 + (1));
seq__37309_37507 = G__37521;
chunk__37313_37508 = G__37522;
count__37314_37509 = G__37523;
i__37315_37510 = G__37524;
continue;
}
} else {
var G__37525 = seq__37309_37507;
var G__37526 = chunk__37313_37508;
var G__37527 = count__37314_37509;
var G__37528 = (i__37315_37510 + (1));
seq__37309_37507 = G__37525;
chunk__37313_37508 = G__37526;
count__37314_37509 = G__37527;
i__37315_37510 = G__37528;
continue;
}
} else {
var temp__5753__auto___37529 = cljs.core.seq(seq__37309_37507);
if(temp__5753__auto___37529){
var seq__37309_37530__$1 = temp__5753__auto___37529;
if(cljs.core.chunked_seq_QMARK_(seq__37309_37530__$1)){
var c__4638__auto___37531 = cljs.core.chunk_first(seq__37309_37530__$1);
var G__37532 = cljs.core.chunk_rest(seq__37309_37530__$1);
var G__37533 = c__4638__auto___37531;
var G__37534 = cljs.core.count(c__4638__auto___37531);
var G__37535 = (0);
seq__37309_37507 = G__37532;
chunk__37313_37508 = G__37533;
count__37314_37509 = G__37534;
i__37315_37510 = G__37535;
continue;
} else {
var node_37536 = cljs.core.first(seq__37309_37530__$1);
if(cljs.core.not(node_37536.shadow$old)){
var path_match_37537 = shadow.cljs.devtools.client.browser.match_paths(node_37536.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37537)){
var new_link_37538 = (function (){var G__37329 = node_37536.cloneNode(true);
G__37329.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37537),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37329;
})();
(node_37536.shadow$old = true);

(new_link_37538.onload = ((function (seq__37309_37507,chunk__37313_37508,count__37314_37509,i__37315_37510,seq__37232,chunk__37234,count__37235,i__37236,new_link_37538,path_match_37537,node_37536,seq__37309_37530__$1,temp__5753__auto___37529,path,map__37229,map__37229__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37536);
});})(seq__37309_37507,chunk__37313_37508,count__37314_37509,i__37315_37510,seq__37232,chunk__37234,count__37235,i__37236,new_link_37538,path_match_37537,node_37536,seq__37309_37530__$1,temp__5753__auto___37529,path,map__37229,map__37229__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37537], 0));

goog.dom.insertSiblingAfter(new_link_37538,node_37536);


var G__37539 = cljs.core.next(seq__37309_37530__$1);
var G__37540 = null;
var G__37541 = (0);
var G__37542 = (0);
seq__37309_37507 = G__37539;
chunk__37313_37508 = G__37540;
count__37314_37509 = G__37541;
i__37315_37510 = G__37542;
continue;
} else {
var G__37543 = cljs.core.next(seq__37309_37530__$1);
var G__37544 = null;
var G__37545 = (0);
var G__37546 = (0);
seq__37309_37507 = G__37543;
chunk__37313_37508 = G__37544;
count__37314_37509 = G__37545;
i__37315_37510 = G__37546;
continue;
}
} else {
var G__37551 = cljs.core.next(seq__37309_37530__$1);
var G__37552 = null;
var G__37553 = (0);
var G__37554 = (0);
seq__37309_37507 = G__37551;
chunk__37313_37508 = G__37552;
count__37314_37509 = G__37553;
i__37315_37510 = G__37554;
continue;
}
}
} else {
}
}
break;
}


var G__37555 = seq__37232;
var G__37556 = chunk__37234;
var G__37557 = count__37235;
var G__37558 = (i__37236 + (1));
seq__37232 = G__37555;
chunk__37234 = G__37556;
count__37235 = G__37557;
i__37236 = G__37558;
continue;
} else {
var G__37559 = seq__37232;
var G__37560 = chunk__37234;
var G__37561 = count__37235;
var G__37562 = (i__37236 + (1));
seq__37232 = G__37559;
chunk__37234 = G__37560;
count__37235 = G__37561;
i__37236 = G__37562;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37232);
if(temp__5753__auto__){
var seq__37232__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37232__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37232__$1);
var G__37570 = cljs.core.chunk_rest(seq__37232__$1);
var G__37571 = c__4638__auto__;
var G__37572 = cljs.core.count(c__4638__auto__);
var G__37573 = (0);
seq__37232 = G__37570;
chunk__37234 = G__37571;
count__37235 = G__37572;
i__37236 = G__37573;
continue;
} else {
var path = cljs.core.first(seq__37232__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37334_37574 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37338_37575 = null;
var count__37339_37576 = (0);
var i__37340_37577 = (0);
while(true){
if((i__37340_37577 < count__37339_37576)){
var node_37582 = chunk__37338_37575.cljs$core$IIndexed$_nth$arity$2(null,i__37340_37577);
if(cljs.core.not(node_37582.shadow$old)){
var path_match_37583 = shadow.cljs.devtools.client.browser.match_paths(node_37582.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37583)){
var new_link_37584 = (function (){var G__37352 = node_37582.cloneNode(true);
G__37352.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37583),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37352;
})();
(node_37582.shadow$old = true);

(new_link_37584.onload = ((function (seq__37334_37574,chunk__37338_37575,count__37339_37576,i__37340_37577,seq__37232,chunk__37234,count__37235,i__37236,new_link_37584,path_match_37583,node_37582,path,seq__37232__$1,temp__5753__auto__,map__37229,map__37229__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37582);
});})(seq__37334_37574,chunk__37338_37575,count__37339_37576,i__37340_37577,seq__37232,chunk__37234,count__37235,i__37236,new_link_37584,path_match_37583,node_37582,path,seq__37232__$1,temp__5753__auto__,map__37229,map__37229__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37583], 0));

goog.dom.insertSiblingAfter(new_link_37584,node_37582);


var G__37585 = seq__37334_37574;
var G__37586 = chunk__37338_37575;
var G__37587 = count__37339_37576;
var G__37588 = (i__37340_37577 + (1));
seq__37334_37574 = G__37585;
chunk__37338_37575 = G__37586;
count__37339_37576 = G__37587;
i__37340_37577 = G__37588;
continue;
} else {
var G__37589 = seq__37334_37574;
var G__37590 = chunk__37338_37575;
var G__37591 = count__37339_37576;
var G__37592 = (i__37340_37577 + (1));
seq__37334_37574 = G__37589;
chunk__37338_37575 = G__37590;
count__37339_37576 = G__37591;
i__37340_37577 = G__37592;
continue;
}
} else {
var G__37593 = seq__37334_37574;
var G__37594 = chunk__37338_37575;
var G__37595 = count__37339_37576;
var G__37596 = (i__37340_37577 + (1));
seq__37334_37574 = G__37593;
chunk__37338_37575 = G__37594;
count__37339_37576 = G__37595;
i__37340_37577 = G__37596;
continue;
}
} else {
var temp__5753__auto___37597__$1 = cljs.core.seq(seq__37334_37574);
if(temp__5753__auto___37597__$1){
var seq__37334_37598__$1 = temp__5753__auto___37597__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37334_37598__$1)){
var c__4638__auto___37599 = cljs.core.chunk_first(seq__37334_37598__$1);
var G__37600 = cljs.core.chunk_rest(seq__37334_37598__$1);
var G__37601 = c__4638__auto___37599;
var G__37602 = cljs.core.count(c__4638__auto___37599);
var G__37603 = (0);
seq__37334_37574 = G__37600;
chunk__37338_37575 = G__37601;
count__37339_37576 = G__37602;
i__37340_37577 = G__37603;
continue;
} else {
var node_37604 = cljs.core.first(seq__37334_37598__$1);
if(cljs.core.not(node_37604.shadow$old)){
var path_match_37608 = shadow.cljs.devtools.client.browser.match_paths(node_37604.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37608)){
var new_link_37609 = (function (){var G__37353 = node_37604.cloneNode(true);
G__37353.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37608),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37353;
})();
(node_37604.shadow$old = true);

(new_link_37609.onload = ((function (seq__37334_37574,chunk__37338_37575,count__37339_37576,i__37340_37577,seq__37232,chunk__37234,count__37235,i__37236,new_link_37609,path_match_37608,node_37604,seq__37334_37598__$1,temp__5753__auto___37597__$1,path,seq__37232__$1,temp__5753__auto__,map__37229,map__37229__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37604);
});})(seq__37334_37574,chunk__37338_37575,count__37339_37576,i__37340_37577,seq__37232,chunk__37234,count__37235,i__37236,new_link_37609,path_match_37608,node_37604,seq__37334_37598__$1,temp__5753__auto___37597__$1,path,seq__37232__$1,temp__5753__auto__,map__37229,map__37229__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37608], 0));

goog.dom.insertSiblingAfter(new_link_37609,node_37604);


var G__37610 = cljs.core.next(seq__37334_37598__$1);
var G__37611 = null;
var G__37612 = (0);
var G__37613 = (0);
seq__37334_37574 = G__37610;
chunk__37338_37575 = G__37611;
count__37339_37576 = G__37612;
i__37340_37577 = G__37613;
continue;
} else {
var G__37614 = cljs.core.next(seq__37334_37598__$1);
var G__37615 = null;
var G__37616 = (0);
var G__37617 = (0);
seq__37334_37574 = G__37614;
chunk__37338_37575 = G__37615;
count__37339_37576 = G__37616;
i__37340_37577 = G__37617;
continue;
}
} else {
var G__37618 = cljs.core.next(seq__37334_37598__$1);
var G__37619 = null;
var G__37620 = (0);
var G__37621 = (0);
seq__37334_37574 = G__37618;
chunk__37338_37575 = G__37619;
count__37339_37576 = G__37620;
i__37340_37577 = G__37621;
continue;
}
}
} else {
}
}
break;
}


var G__37622 = cljs.core.next(seq__37232__$1);
var G__37623 = null;
var G__37624 = (0);
var G__37625 = (0);
seq__37232 = G__37622;
chunk__37234 = G__37623;
count__37235 = G__37624;
i__37236 = G__37625;
continue;
} else {
var G__37626 = cljs.core.next(seq__37232__$1);
var G__37627 = null;
var G__37628 = (0);
var G__37629 = (0);
seq__37232 = G__37626;
chunk__37234 = G__37627;
count__37235 = G__37628;
i__37236 = G__37629;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37354){
var map__37355 = p__37354;
var map__37355__$1 = cljs.core.__destructure_map(map__37355);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37355__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37357){
var map__37358 = p__37357;
var map__37358__$1 = cljs.core.__destructure_map(map__37358);
var _ = map__37358__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37361,done,error){
var map__37363 = p__37361;
var map__37363__$1 = cljs.core.__destructure_map(map__37363);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37363__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37365,done,error){
var map__37366 = p__37365;
var map__37366__$1 = cljs.core.__destructure_map(map__37366);
var msg = map__37366__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37366__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37366__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37366__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37369){
var map__37370 = p__37369;
var map__37370__$1 = cljs.core.__destructure_map(map__37370);
var src = map__37370__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37370__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37376 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37376) : done.call(null,G__37376));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37380){
var map__37381 = p__37380;
var map__37381__$1 = cljs.core.__destructure_map(map__37381);
var msg__$1 = map__37381__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37383){var ex = e37383;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37388){
var map__37389 = p__37388;
var map__37389__$1 = cljs.core.__destructure_map(map__37389);
var env = map__37389__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37389__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37395){
var map__37396 = p__37395;
var map__37396__$1 = cljs.core.__destructure_map(map__37396);
var msg = map__37396__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37396__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37403){
var map__37404 = p__37403;
var map__37404__$1 = cljs.core.__destructure_map(map__37404);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37413){
var map__37414 = p__37413;
var map__37414__$1 = cljs.core.__destructure_map(map__37414);
var svc = map__37414__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37414__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
