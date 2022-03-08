goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35003 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35003(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35005 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35005(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33583 = coll;
var G__33584 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33583,G__33584) : shadow.dom.lazy_native_coll_seq.call(null,G__33583,G__33584));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33684 = arguments.length;
switch (G__33684) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33709 = arguments.length;
switch (G__33709) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33723 = arguments.length;
switch (G__33723) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33743 = arguments.length;
switch (G__33743) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33772 = arguments.length;
switch (G__33772) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33797 = arguments.length;
switch (G__33797) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33807){if((e33807 instanceof Object)){
var e = e33807;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33807;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33831 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33832 = null;
var count__33833 = (0);
var i__33834 = (0);
while(true){
if((i__33834 < count__33833)){
var el = chunk__33832.cljs$core$IIndexed$_nth$arity$2(null,i__33834);
var handler_35095__$1 = ((function (seq__33831,chunk__33832,count__33833,i__33834,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33831,chunk__33832,count__33833,i__33834,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35095__$1);


var G__35101 = seq__33831;
var G__35102 = chunk__33832;
var G__35103 = count__33833;
var G__35104 = (i__33834 + (1));
seq__33831 = G__35101;
chunk__33832 = G__35102;
count__33833 = G__35103;
i__33834 = G__35104;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33831);
if(temp__5753__auto__){
var seq__33831__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33831__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33831__$1);
var G__35107 = cljs.core.chunk_rest(seq__33831__$1);
var G__35108 = c__4638__auto__;
var G__35109 = cljs.core.count(c__4638__auto__);
var G__35110 = (0);
seq__33831 = G__35107;
chunk__33832 = G__35108;
count__33833 = G__35109;
i__33834 = G__35110;
continue;
} else {
var el = cljs.core.first(seq__33831__$1);
var handler_35112__$1 = ((function (seq__33831,chunk__33832,count__33833,i__33834,el,seq__33831__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33831,chunk__33832,count__33833,i__33834,el,seq__33831__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35112__$1);


var G__35113 = cljs.core.next(seq__33831__$1);
var G__35114 = null;
var G__35115 = (0);
var G__35116 = (0);
seq__33831 = G__35113;
chunk__33832 = G__35114;
count__33833 = G__35115;
i__33834 = G__35116;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33885 = arguments.length;
switch (G__33885) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33893 = cljs.core.seq(events);
var chunk__33895 = null;
var count__33896 = (0);
var i__33897 = (0);
while(true){
if((i__33897 < count__33896)){
var vec__33911 = chunk__33895.cljs$core$IIndexed$_nth$arity$2(null,i__33897);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33911,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33911,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35121 = seq__33893;
var G__35122 = chunk__33895;
var G__35123 = count__33896;
var G__35124 = (i__33897 + (1));
seq__33893 = G__35121;
chunk__33895 = G__35122;
count__33896 = G__35123;
i__33897 = G__35124;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33893);
if(temp__5753__auto__){
var seq__33893__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33893__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33893__$1);
var G__35126 = cljs.core.chunk_rest(seq__33893__$1);
var G__35127 = c__4638__auto__;
var G__35128 = cljs.core.count(c__4638__auto__);
var G__35129 = (0);
seq__33893 = G__35126;
chunk__33895 = G__35127;
count__33896 = G__35128;
i__33897 = G__35129;
continue;
} else {
var vec__33914 = cljs.core.first(seq__33893__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33914,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35131 = cljs.core.next(seq__33893__$1);
var G__35132 = null;
var G__35133 = (0);
var G__35134 = (0);
seq__33893 = G__35131;
chunk__33895 = G__35132;
count__33896 = G__35133;
i__33897 = G__35134;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33917 = cljs.core.seq(styles);
var chunk__33918 = null;
var count__33919 = (0);
var i__33920 = (0);
while(true){
if((i__33920 < count__33919)){
var vec__33930 = chunk__33918.cljs$core$IIndexed$_nth$arity$2(null,i__33920);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33930,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33930,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35138 = seq__33917;
var G__35139 = chunk__33918;
var G__35140 = count__33919;
var G__35141 = (i__33920 + (1));
seq__33917 = G__35138;
chunk__33918 = G__35139;
count__33919 = G__35140;
i__33920 = G__35141;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33917);
if(temp__5753__auto__){
var seq__33917__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33917__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33917__$1);
var G__35143 = cljs.core.chunk_rest(seq__33917__$1);
var G__35144 = c__4638__auto__;
var G__35145 = cljs.core.count(c__4638__auto__);
var G__35146 = (0);
seq__33917 = G__35143;
chunk__33918 = G__35144;
count__33919 = G__35145;
i__33920 = G__35146;
continue;
} else {
var vec__33936 = cljs.core.first(seq__33917__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33936,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35147 = cljs.core.next(seq__33917__$1);
var G__35148 = null;
var G__35149 = (0);
var G__35150 = (0);
seq__33917 = G__35147;
chunk__33918 = G__35148;
count__33919 = G__35149;
i__33920 = G__35150;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33951_35151 = key;
var G__33951_35152__$1 = (((G__33951_35151 instanceof cljs.core.Keyword))?G__33951_35151.fqn:null);
switch (G__33951_35152__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35163 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_35163,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_35163,"aria-");
}
})())){
el.setAttribute(ks_35163,value);
} else {
(el[ks_35163] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33987){
var map__33988 = p__33987;
var map__33988__$1 = cljs.core.__destructure_map(map__33988);
var props = map__33988__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33988__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33990 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33990,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33990,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33990,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33994 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33994,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33994;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34001 = arguments.length;
switch (G__34001) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34022){
var vec__34023 = p__34022;
var seq__34024 = cljs.core.seq(vec__34023);
var first__34025 = cljs.core.first(seq__34024);
var seq__34024__$1 = cljs.core.next(seq__34024);
var nn = first__34025;
var first__34025__$1 = cljs.core.first(seq__34024__$1);
var seq__34024__$2 = cljs.core.next(seq__34024__$1);
var np = first__34025__$1;
var nc = seq__34024__$2;
var node = vec__34023;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34033 = nn;
var G__34034 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34033,G__34034) : create_fn.call(null,G__34033,G__34034));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34038 = nn;
var G__34039 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34038,G__34039) : create_fn.call(null,G__34038,G__34039));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34042 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34042,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34042,(1),null);
var seq__34046_35166 = cljs.core.seq(node_children);
var chunk__34047_35167 = null;
var count__34048_35168 = (0);
var i__34049_35169 = (0);
while(true){
if((i__34049_35169 < count__34048_35168)){
var child_struct_35170 = chunk__34047_35167.cljs$core$IIndexed$_nth$arity$2(null,i__34049_35169);
var children_35171 = shadow.dom.dom_node(child_struct_35170);
if(cljs.core.seq_QMARK_(children_35171)){
var seq__34131_35172 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35171));
var chunk__34133_35173 = null;
var count__34134_35174 = (0);
var i__34135_35175 = (0);
while(true){
if((i__34135_35175 < count__34134_35174)){
var child_35176 = chunk__34133_35173.cljs$core$IIndexed$_nth$arity$2(null,i__34135_35175);
if(cljs.core.truth_(child_35176)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35176);


var G__35177 = seq__34131_35172;
var G__35178 = chunk__34133_35173;
var G__35179 = count__34134_35174;
var G__35180 = (i__34135_35175 + (1));
seq__34131_35172 = G__35177;
chunk__34133_35173 = G__35178;
count__34134_35174 = G__35179;
i__34135_35175 = G__35180;
continue;
} else {
var G__35181 = seq__34131_35172;
var G__35182 = chunk__34133_35173;
var G__35183 = count__34134_35174;
var G__35184 = (i__34135_35175 + (1));
seq__34131_35172 = G__35181;
chunk__34133_35173 = G__35182;
count__34134_35174 = G__35183;
i__34135_35175 = G__35184;
continue;
}
} else {
var temp__5753__auto___35185 = cljs.core.seq(seq__34131_35172);
if(temp__5753__auto___35185){
var seq__34131_35186__$1 = temp__5753__auto___35185;
if(cljs.core.chunked_seq_QMARK_(seq__34131_35186__$1)){
var c__4638__auto___35187 = cljs.core.chunk_first(seq__34131_35186__$1);
var G__35188 = cljs.core.chunk_rest(seq__34131_35186__$1);
var G__35189 = c__4638__auto___35187;
var G__35190 = cljs.core.count(c__4638__auto___35187);
var G__35191 = (0);
seq__34131_35172 = G__35188;
chunk__34133_35173 = G__35189;
count__34134_35174 = G__35190;
i__34135_35175 = G__35191;
continue;
} else {
var child_35192 = cljs.core.first(seq__34131_35186__$1);
if(cljs.core.truth_(child_35192)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35192);


var G__35193 = cljs.core.next(seq__34131_35186__$1);
var G__35194 = null;
var G__35195 = (0);
var G__35196 = (0);
seq__34131_35172 = G__35193;
chunk__34133_35173 = G__35194;
count__34134_35174 = G__35195;
i__34135_35175 = G__35196;
continue;
} else {
var G__35197 = cljs.core.next(seq__34131_35186__$1);
var G__35198 = null;
var G__35199 = (0);
var G__35200 = (0);
seq__34131_35172 = G__35197;
chunk__34133_35173 = G__35198;
count__34134_35174 = G__35199;
i__34135_35175 = G__35200;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35171);
}


var G__35201 = seq__34046_35166;
var G__35202 = chunk__34047_35167;
var G__35203 = count__34048_35168;
var G__35204 = (i__34049_35169 + (1));
seq__34046_35166 = G__35201;
chunk__34047_35167 = G__35202;
count__34048_35168 = G__35203;
i__34049_35169 = G__35204;
continue;
} else {
var temp__5753__auto___35205 = cljs.core.seq(seq__34046_35166);
if(temp__5753__auto___35205){
var seq__34046_35206__$1 = temp__5753__auto___35205;
if(cljs.core.chunked_seq_QMARK_(seq__34046_35206__$1)){
var c__4638__auto___35207 = cljs.core.chunk_first(seq__34046_35206__$1);
var G__35208 = cljs.core.chunk_rest(seq__34046_35206__$1);
var G__35209 = c__4638__auto___35207;
var G__35210 = cljs.core.count(c__4638__auto___35207);
var G__35211 = (0);
seq__34046_35166 = G__35208;
chunk__34047_35167 = G__35209;
count__34048_35168 = G__35210;
i__34049_35169 = G__35211;
continue;
} else {
var child_struct_35212 = cljs.core.first(seq__34046_35206__$1);
var children_35213 = shadow.dom.dom_node(child_struct_35212);
if(cljs.core.seq_QMARK_(children_35213)){
var seq__34148_35214 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35213));
var chunk__34150_35215 = null;
var count__34151_35216 = (0);
var i__34152_35217 = (0);
while(true){
if((i__34152_35217 < count__34151_35216)){
var child_35218 = chunk__34150_35215.cljs$core$IIndexed$_nth$arity$2(null,i__34152_35217);
if(cljs.core.truth_(child_35218)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35218);


var G__35219 = seq__34148_35214;
var G__35220 = chunk__34150_35215;
var G__35221 = count__34151_35216;
var G__35222 = (i__34152_35217 + (1));
seq__34148_35214 = G__35219;
chunk__34150_35215 = G__35220;
count__34151_35216 = G__35221;
i__34152_35217 = G__35222;
continue;
} else {
var G__35223 = seq__34148_35214;
var G__35224 = chunk__34150_35215;
var G__35225 = count__34151_35216;
var G__35226 = (i__34152_35217 + (1));
seq__34148_35214 = G__35223;
chunk__34150_35215 = G__35224;
count__34151_35216 = G__35225;
i__34152_35217 = G__35226;
continue;
}
} else {
var temp__5753__auto___35227__$1 = cljs.core.seq(seq__34148_35214);
if(temp__5753__auto___35227__$1){
var seq__34148_35228__$1 = temp__5753__auto___35227__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34148_35228__$1)){
var c__4638__auto___35229 = cljs.core.chunk_first(seq__34148_35228__$1);
var G__35230 = cljs.core.chunk_rest(seq__34148_35228__$1);
var G__35231 = c__4638__auto___35229;
var G__35232 = cljs.core.count(c__4638__auto___35229);
var G__35233 = (0);
seq__34148_35214 = G__35230;
chunk__34150_35215 = G__35231;
count__34151_35216 = G__35232;
i__34152_35217 = G__35233;
continue;
} else {
var child_35235 = cljs.core.first(seq__34148_35228__$1);
if(cljs.core.truth_(child_35235)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35235);


var G__35236 = cljs.core.next(seq__34148_35228__$1);
var G__35237 = null;
var G__35238 = (0);
var G__35239 = (0);
seq__34148_35214 = G__35236;
chunk__34150_35215 = G__35237;
count__34151_35216 = G__35238;
i__34152_35217 = G__35239;
continue;
} else {
var G__35240 = cljs.core.next(seq__34148_35228__$1);
var G__35241 = null;
var G__35242 = (0);
var G__35243 = (0);
seq__34148_35214 = G__35240;
chunk__34150_35215 = G__35241;
count__34151_35216 = G__35242;
i__34152_35217 = G__35243;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35213);
}


var G__35244 = cljs.core.next(seq__34046_35206__$1);
var G__35245 = null;
var G__35246 = (0);
var G__35247 = (0);
seq__34046_35166 = G__35244;
chunk__34047_35167 = G__35245;
count__34048_35168 = G__35246;
i__34049_35169 = G__35247;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34232 = cljs.core.seq(node);
var chunk__34233 = null;
var count__34234 = (0);
var i__34235 = (0);
while(true){
if((i__34235 < count__34234)){
var n = chunk__34233.cljs$core$IIndexed$_nth$arity$2(null,i__34235);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35248 = seq__34232;
var G__35249 = chunk__34233;
var G__35250 = count__34234;
var G__35251 = (i__34235 + (1));
seq__34232 = G__35248;
chunk__34233 = G__35249;
count__34234 = G__35250;
i__34235 = G__35251;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34232);
if(temp__5753__auto__){
var seq__34232__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34232__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34232__$1);
var G__35252 = cljs.core.chunk_rest(seq__34232__$1);
var G__35253 = c__4638__auto__;
var G__35254 = cljs.core.count(c__4638__auto__);
var G__35255 = (0);
seq__34232 = G__35252;
chunk__34233 = G__35253;
count__34234 = G__35254;
i__34235 = G__35255;
continue;
} else {
var n = cljs.core.first(seq__34232__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35256 = cljs.core.next(seq__34232__$1);
var G__35257 = null;
var G__35258 = (0);
var G__35259 = (0);
seq__34232 = G__35256;
chunk__34233 = G__35257;
count__34234 = G__35258;
i__34235 = G__35259;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34331 = arguments.length;
switch (G__34331) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34370 = arguments.length;
switch (G__34370) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34411 = arguments.length;
switch (G__34411) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35263 = arguments.length;
var i__4819__auto___35268 = (0);
while(true){
if((i__4819__auto___35268 < len__4818__auto___35263)){
args__4824__auto__.push((arguments[i__4819__auto___35268]));

var G__35269 = (i__4819__auto___35268 + (1));
i__4819__auto___35268 = G__35269;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34461_35274 = cljs.core.seq(nodes);
var chunk__34462_35275 = null;
var count__34463_35276 = (0);
var i__34464_35277 = (0);
while(true){
if((i__34464_35277 < count__34463_35276)){
var node_35278 = chunk__34462_35275.cljs$core$IIndexed$_nth$arity$2(null,i__34464_35277);
fragment.appendChild(shadow.dom._to_dom(node_35278));


var G__35279 = seq__34461_35274;
var G__35280 = chunk__34462_35275;
var G__35281 = count__34463_35276;
var G__35282 = (i__34464_35277 + (1));
seq__34461_35274 = G__35279;
chunk__34462_35275 = G__35280;
count__34463_35276 = G__35281;
i__34464_35277 = G__35282;
continue;
} else {
var temp__5753__auto___35287 = cljs.core.seq(seq__34461_35274);
if(temp__5753__auto___35287){
var seq__34461_35288__$1 = temp__5753__auto___35287;
if(cljs.core.chunked_seq_QMARK_(seq__34461_35288__$1)){
var c__4638__auto___35289 = cljs.core.chunk_first(seq__34461_35288__$1);
var G__35290 = cljs.core.chunk_rest(seq__34461_35288__$1);
var G__35291 = c__4638__auto___35289;
var G__35292 = cljs.core.count(c__4638__auto___35289);
var G__35293 = (0);
seq__34461_35274 = G__35290;
chunk__34462_35275 = G__35291;
count__34463_35276 = G__35292;
i__34464_35277 = G__35293;
continue;
} else {
var node_35294 = cljs.core.first(seq__34461_35288__$1);
fragment.appendChild(shadow.dom._to_dom(node_35294));


var G__35295 = cljs.core.next(seq__34461_35288__$1);
var G__35296 = null;
var G__35297 = (0);
var G__35298 = (0);
seq__34461_35274 = G__35295;
chunk__34462_35275 = G__35296;
count__34463_35276 = G__35297;
i__34464_35277 = G__35298;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34459){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34459));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34467_35299 = cljs.core.seq(scripts);
var chunk__34468_35300 = null;
var count__34469_35301 = (0);
var i__34470_35302 = (0);
while(true){
if((i__34470_35302 < count__34469_35301)){
var vec__34488_35303 = chunk__34468_35300.cljs$core$IIndexed$_nth$arity$2(null,i__34470_35302);
var script_tag_35304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34488_35303,(0),null);
var script_body_35305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34488_35303,(1),null);
eval(script_body_35305);


var G__35306 = seq__34467_35299;
var G__35307 = chunk__34468_35300;
var G__35308 = count__34469_35301;
var G__35309 = (i__34470_35302 + (1));
seq__34467_35299 = G__35306;
chunk__34468_35300 = G__35307;
count__34469_35301 = G__35308;
i__34470_35302 = G__35309;
continue;
} else {
var temp__5753__auto___35310 = cljs.core.seq(seq__34467_35299);
if(temp__5753__auto___35310){
var seq__34467_35311__$1 = temp__5753__auto___35310;
if(cljs.core.chunked_seq_QMARK_(seq__34467_35311__$1)){
var c__4638__auto___35312 = cljs.core.chunk_first(seq__34467_35311__$1);
var G__35313 = cljs.core.chunk_rest(seq__34467_35311__$1);
var G__35314 = c__4638__auto___35312;
var G__35315 = cljs.core.count(c__4638__auto___35312);
var G__35316 = (0);
seq__34467_35299 = G__35313;
chunk__34468_35300 = G__35314;
count__34469_35301 = G__35315;
i__34470_35302 = G__35316;
continue;
} else {
var vec__34500_35317 = cljs.core.first(seq__34467_35311__$1);
var script_tag_35318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34500_35317,(0),null);
var script_body_35319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34500_35317,(1),null);
eval(script_body_35319);


var G__35320 = cljs.core.next(seq__34467_35311__$1);
var G__35321 = null;
var G__35322 = (0);
var G__35323 = (0);
seq__34467_35299 = G__35320;
chunk__34468_35300 = G__35321;
count__34469_35301 = G__35322;
i__34470_35302 = G__35323;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34507){
var vec__34508 = p__34507;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34508,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34508,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34528 = arguments.length;
switch (G__34528) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34580 = cljs.core.seq(style_keys);
var chunk__34581 = null;
var count__34582 = (0);
var i__34583 = (0);
while(true){
if((i__34583 < count__34582)){
var it = chunk__34581.cljs$core$IIndexed$_nth$arity$2(null,i__34583);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35325 = seq__34580;
var G__35326 = chunk__34581;
var G__35327 = count__34582;
var G__35328 = (i__34583 + (1));
seq__34580 = G__35325;
chunk__34581 = G__35326;
count__34582 = G__35327;
i__34583 = G__35328;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34580);
if(temp__5753__auto__){
var seq__34580__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34580__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34580__$1);
var G__35329 = cljs.core.chunk_rest(seq__34580__$1);
var G__35330 = c__4638__auto__;
var G__35331 = cljs.core.count(c__4638__auto__);
var G__35332 = (0);
seq__34580 = G__35329;
chunk__34581 = G__35330;
count__34582 = G__35331;
i__34583 = G__35332;
continue;
} else {
var it = cljs.core.first(seq__34580__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35334 = cljs.core.next(seq__34580__$1);
var G__35335 = null;
var G__35336 = (0);
var G__35337 = (0);
seq__34580 = G__35334;
chunk__34581 = G__35335;
count__34582 = G__35336;
i__34583 = G__35337;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k34651,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__34673 = k34651;
var G__34673__$1 = (((G__34673 instanceof cljs.core.Keyword))?G__34673.fqn:null);
switch (G__34673__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34651,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__34682){
var vec__34684 = p__34682;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34684,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34684,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34650){
var self__ = this;
var G__34650__$1 = this;
return (new cljs.core.RecordIter((0),G__34650__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34652,other34653){
var self__ = this;
var this34652__$1 = this;
return (((!((other34653 == null)))) && ((((this34652__$1.constructor === other34653.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34652__$1.x,other34653.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34652__$1.y,other34653.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34652__$1.__extmap,other34653.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k34651){
var self__ = this;
var this__4468__auto____$1 = this;
var G__34711 = k34651;
var G__34711__$1 = (((G__34711 instanceof cljs.core.Keyword))?G__34711.fqn:null);
switch (G__34711__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34651);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__34650){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__34715 = cljs.core.keyword_identical_QMARK_;
var expr__34716 = k__4470__auto__;
if(cljs.core.truth_((pred__34715.cljs$core$IFn$_invoke$arity$2 ? pred__34715.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34716) : pred__34715.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34716)))){
return (new shadow.dom.Coordinate(G__34650,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34715.cljs$core$IFn$_invoke$arity$2 ? pred__34715.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34716) : pred__34715.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34716)))){
return (new shadow.dom.Coordinate(self__.x,G__34650,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__34650),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__34650){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34650,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34664){
var extmap__4501__auto__ = (function (){var G__34722 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34664,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34664)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34722);
} else {
return G__34722;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34664),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34664),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k34725,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__34729 = k34725;
var G__34729__$1 = (((G__34729 instanceof cljs.core.Keyword))?G__34729.fqn:null);
switch (G__34729__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34725,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__34731){
var vec__34733 = p__34731;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34733,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34733,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34724){
var self__ = this;
var G__34724__$1 = this;
return (new cljs.core.RecordIter((0),G__34724__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34726,other34727){
var self__ = this;
var this34726__$1 = this;
return (((!((other34727 == null)))) && ((((this34726__$1.constructor === other34727.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34726__$1.w,other34727.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34726__$1.h,other34727.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34726__$1.__extmap,other34727.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k34725){
var self__ = this;
var this__4468__auto____$1 = this;
var G__34745 = k34725;
var G__34745__$1 = (((G__34745 instanceof cljs.core.Keyword))?G__34745.fqn:null);
switch (G__34745__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34725);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__34724){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__34746 = cljs.core.keyword_identical_QMARK_;
var expr__34747 = k__4470__auto__;
if(cljs.core.truth_((pred__34746.cljs$core$IFn$_invoke$arity$2 ? pred__34746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34747) : pred__34746.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34747)))){
return (new shadow.dom.Size(G__34724,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34746.cljs$core$IFn$_invoke$arity$2 ? pred__34746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34747) : pred__34746.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34747)))){
return (new shadow.dom.Size(self__.w,G__34724,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__34724),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__34724){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34724,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34728){
var extmap__4501__auto__ = (function (){var G__34766 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34728,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34728)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34766);
} else {
return G__34766;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34728),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34728),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__35358 = (i + (1));
var G__35359 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35358;
ret = G__35359;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34797){
var vec__34798 = p__34797;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34798,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34798,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34805 = arguments.length;
switch (G__34805) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35362 = ps;
var G__35363 = (i + (1));
el__$1 = G__35362;
i = G__35363;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34834 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34834,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34834,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34834,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34837_35367 = cljs.core.seq(props);
var chunk__34838_35368 = null;
var count__34839_35369 = (0);
var i__34840_35370 = (0);
while(true){
if((i__34840_35370 < count__34839_35369)){
var vec__34851_35372 = chunk__34838_35368.cljs$core$IIndexed$_nth$arity$2(null,i__34840_35370);
var k_35373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851_35372,(0),null);
var v_35374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851_35372,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_35373);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35373),v_35374);


var G__35380 = seq__34837_35367;
var G__35381 = chunk__34838_35368;
var G__35382 = count__34839_35369;
var G__35383 = (i__34840_35370 + (1));
seq__34837_35367 = G__35380;
chunk__34838_35368 = G__35381;
count__34839_35369 = G__35382;
i__34840_35370 = G__35383;
continue;
} else {
var temp__5753__auto___35384 = cljs.core.seq(seq__34837_35367);
if(temp__5753__auto___35384){
var seq__34837_35385__$1 = temp__5753__auto___35384;
if(cljs.core.chunked_seq_QMARK_(seq__34837_35385__$1)){
var c__4638__auto___35386 = cljs.core.chunk_first(seq__34837_35385__$1);
var G__35387 = cljs.core.chunk_rest(seq__34837_35385__$1);
var G__35388 = c__4638__auto___35386;
var G__35389 = cljs.core.count(c__4638__auto___35386);
var G__35390 = (0);
seq__34837_35367 = G__35387;
chunk__34838_35368 = G__35388;
count__34839_35369 = G__35389;
i__34840_35370 = G__35390;
continue;
} else {
var vec__34854_35391 = cljs.core.first(seq__34837_35385__$1);
var k_35392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34854_35391,(0),null);
var v_35393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34854_35391,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_35392);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35392),v_35393);


var G__35394 = cljs.core.next(seq__34837_35385__$1);
var G__35395 = null;
var G__35396 = (0);
var G__35397 = (0);
seq__34837_35367 = G__35394;
chunk__34838_35368 = G__35395;
count__34839_35369 = G__35396;
i__34840_35370 = G__35397;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34867 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(1),null);
var seq__34871_35399 = cljs.core.seq(node_children);
var chunk__34873_35400 = null;
var count__34874_35401 = (0);
var i__34875_35402 = (0);
while(true){
if((i__34875_35402 < count__34874_35401)){
var child_struct_35403 = chunk__34873_35400.cljs$core$IIndexed$_nth$arity$2(null,i__34875_35402);
if((!((child_struct_35403 == null)))){
if(typeof child_struct_35403 === 'string'){
var text_35404 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35404),child_struct_35403].join(''));
} else {
var children_35405 = shadow.dom.svg_node(child_struct_35403);
if(cljs.core.seq_QMARK_(children_35405)){
var seq__34899_35406 = cljs.core.seq(children_35405);
var chunk__34901_35407 = null;
var count__34902_35408 = (0);
var i__34903_35409 = (0);
while(true){
if((i__34903_35409 < count__34902_35408)){
var child_35411 = chunk__34901_35407.cljs$core$IIndexed$_nth$arity$2(null,i__34903_35409);
if(cljs.core.truth_(child_35411)){
node.appendChild(child_35411);


var G__35413 = seq__34899_35406;
var G__35414 = chunk__34901_35407;
var G__35415 = count__34902_35408;
var G__35416 = (i__34903_35409 + (1));
seq__34899_35406 = G__35413;
chunk__34901_35407 = G__35414;
count__34902_35408 = G__35415;
i__34903_35409 = G__35416;
continue;
} else {
var G__35417 = seq__34899_35406;
var G__35418 = chunk__34901_35407;
var G__35419 = count__34902_35408;
var G__35420 = (i__34903_35409 + (1));
seq__34899_35406 = G__35417;
chunk__34901_35407 = G__35418;
count__34902_35408 = G__35419;
i__34903_35409 = G__35420;
continue;
}
} else {
var temp__5753__auto___35421 = cljs.core.seq(seq__34899_35406);
if(temp__5753__auto___35421){
var seq__34899_35422__$1 = temp__5753__auto___35421;
if(cljs.core.chunked_seq_QMARK_(seq__34899_35422__$1)){
var c__4638__auto___35424 = cljs.core.chunk_first(seq__34899_35422__$1);
var G__35425 = cljs.core.chunk_rest(seq__34899_35422__$1);
var G__35426 = c__4638__auto___35424;
var G__35427 = cljs.core.count(c__4638__auto___35424);
var G__35428 = (0);
seq__34899_35406 = G__35425;
chunk__34901_35407 = G__35426;
count__34902_35408 = G__35427;
i__34903_35409 = G__35428;
continue;
} else {
var child_35429 = cljs.core.first(seq__34899_35422__$1);
if(cljs.core.truth_(child_35429)){
node.appendChild(child_35429);


var G__35430 = cljs.core.next(seq__34899_35422__$1);
var G__35431 = null;
var G__35432 = (0);
var G__35433 = (0);
seq__34899_35406 = G__35430;
chunk__34901_35407 = G__35431;
count__34902_35408 = G__35432;
i__34903_35409 = G__35433;
continue;
} else {
var G__35434 = cljs.core.next(seq__34899_35422__$1);
var G__35435 = null;
var G__35436 = (0);
var G__35437 = (0);
seq__34899_35406 = G__35434;
chunk__34901_35407 = G__35435;
count__34902_35408 = G__35436;
i__34903_35409 = G__35437;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35405);
}
}


var G__35439 = seq__34871_35399;
var G__35440 = chunk__34873_35400;
var G__35441 = count__34874_35401;
var G__35442 = (i__34875_35402 + (1));
seq__34871_35399 = G__35439;
chunk__34873_35400 = G__35440;
count__34874_35401 = G__35441;
i__34875_35402 = G__35442;
continue;
} else {
var G__35443 = seq__34871_35399;
var G__35444 = chunk__34873_35400;
var G__35445 = count__34874_35401;
var G__35446 = (i__34875_35402 + (1));
seq__34871_35399 = G__35443;
chunk__34873_35400 = G__35444;
count__34874_35401 = G__35445;
i__34875_35402 = G__35446;
continue;
}
} else {
var temp__5753__auto___35447 = cljs.core.seq(seq__34871_35399);
if(temp__5753__auto___35447){
var seq__34871_35448__$1 = temp__5753__auto___35447;
if(cljs.core.chunked_seq_QMARK_(seq__34871_35448__$1)){
var c__4638__auto___35449 = cljs.core.chunk_first(seq__34871_35448__$1);
var G__35450 = cljs.core.chunk_rest(seq__34871_35448__$1);
var G__35451 = c__4638__auto___35449;
var G__35452 = cljs.core.count(c__4638__auto___35449);
var G__35453 = (0);
seq__34871_35399 = G__35450;
chunk__34873_35400 = G__35451;
count__34874_35401 = G__35452;
i__34875_35402 = G__35453;
continue;
} else {
var child_struct_35454 = cljs.core.first(seq__34871_35448__$1);
if((!((child_struct_35454 == null)))){
if(typeof child_struct_35454 === 'string'){
var text_35455 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35455),child_struct_35454].join(''));
} else {
var children_35456 = shadow.dom.svg_node(child_struct_35454);
if(cljs.core.seq_QMARK_(children_35456)){
var seq__34913_35457 = cljs.core.seq(children_35456);
var chunk__34915_35458 = null;
var count__34916_35459 = (0);
var i__34917_35460 = (0);
while(true){
if((i__34917_35460 < count__34916_35459)){
var child_35461 = chunk__34915_35458.cljs$core$IIndexed$_nth$arity$2(null,i__34917_35460);
if(cljs.core.truth_(child_35461)){
node.appendChild(child_35461);


var G__35462 = seq__34913_35457;
var G__35463 = chunk__34915_35458;
var G__35464 = count__34916_35459;
var G__35465 = (i__34917_35460 + (1));
seq__34913_35457 = G__35462;
chunk__34915_35458 = G__35463;
count__34916_35459 = G__35464;
i__34917_35460 = G__35465;
continue;
} else {
var G__35466 = seq__34913_35457;
var G__35467 = chunk__34915_35458;
var G__35468 = count__34916_35459;
var G__35469 = (i__34917_35460 + (1));
seq__34913_35457 = G__35466;
chunk__34915_35458 = G__35467;
count__34916_35459 = G__35468;
i__34917_35460 = G__35469;
continue;
}
} else {
var temp__5753__auto___35470__$1 = cljs.core.seq(seq__34913_35457);
if(temp__5753__auto___35470__$1){
var seq__34913_35471__$1 = temp__5753__auto___35470__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34913_35471__$1)){
var c__4638__auto___35472 = cljs.core.chunk_first(seq__34913_35471__$1);
var G__35474 = cljs.core.chunk_rest(seq__34913_35471__$1);
var G__35475 = c__4638__auto___35472;
var G__35476 = cljs.core.count(c__4638__auto___35472);
var G__35477 = (0);
seq__34913_35457 = G__35474;
chunk__34915_35458 = G__35475;
count__34916_35459 = G__35476;
i__34917_35460 = G__35477;
continue;
} else {
var child_35478 = cljs.core.first(seq__34913_35471__$1);
if(cljs.core.truth_(child_35478)){
node.appendChild(child_35478);


var G__35480 = cljs.core.next(seq__34913_35471__$1);
var G__35481 = null;
var G__35482 = (0);
var G__35483 = (0);
seq__34913_35457 = G__35480;
chunk__34915_35458 = G__35481;
count__34916_35459 = G__35482;
i__34917_35460 = G__35483;
continue;
} else {
var G__35484 = cljs.core.next(seq__34913_35471__$1);
var G__35485 = null;
var G__35486 = (0);
var G__35487 = (0);
seq__34913_35457 = G__35484;
chunk__34915_35458 = G__35485;
count__34916_35459 = G__35486;
i__34917_35460 = G__35487;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35456);
}
}


var G__35491 = cljs.core.next(seq__34871_35448__$1);
var G__35492 = null;
var G__35493 = (0);
var G__35494 = (0);
seq__34871_35399 = G__35491;
chunk__34873_35400 = G__35492;
count__34874_35401 = G__35493;
i__34875_35402 = G__35494;
continue;
} else {
var G__35495 = cljs.core.next(seq__34871_35448__$1);
var G__35496 = null;
var G__35497 = (0);
var G__35498 = (0);
seq__34871_35399 = G__35495;
chunk__34873_35400 = G__35496;
count__34874_35401 = G__35497;
i__34875_35402 = G__35498;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35503 = arguments.length;
var i__4819__auto___35504 = (0);
while(true){
if((i__4819__auto___35504 < len__4818__auto___35503)){
args__4824__auto__.push((arguments[i__4819__auto___35504]));

var G__35505 = (i__4819__auto___35504 + (1));
i__4819__auto___35504 = G__35505;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34938){
var G__34939 = cljs.core.first(seq34938);
var seq34938__$1 = cljs.core.next(seq34938);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34939,seq34938__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34947 = arguments.length;
switch (G__34947) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__29490__auto___35513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_34960){
var state_val_34961 = (state_34960[(1)]);
if((state_val_34961 === (1))){
var state_34960__$1 = state_34960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34960__$1,(2),once_or_cleanup);
} else {
if((state_val_34961 === (2))){
var inst_34957 = (state_34960[(2)]);
var inst_34958 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34960__$1 = (function (){var statearr_34967 = state_34960;
(statearr_34967[(7)] = inst_34957);

return statearr_34967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34960__$1,inst_34958);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28919__auto__ = null;
var shadow$dom$state_machine__28919__auto____0 = (function (){
var statearr_34970 = [null,null,null,null,null,null,null,null];
(statearr_34970[(0)] = shadow$dom$state_machine__28919__auto__);

(statearr_34970[(1)] = (1));

return statearr_34970;
});
var shadow$dom$state_machine__28919__auto____1 = (function (state_34960){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_34960);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e34971){var ex__28922__auto__ = e34971;
var statearr_34972_35517 = state_34960;
(statearr_34972_35517[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_34960[(4)]))){
var statearr_34973_35520 = state_34960;
(statearr_34973_35520[(1)] = cljs.core.first((state_34960[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35521 = state_34960;
state_34960 = G__35521;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
shadow$dom$state_machine__28919__auto__ = function(state_34960){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28919__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28919__auto____1.call(this,state_34960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28919__auto____0;
shadow$dom$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28919__auto____1;
return shadow$dom$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_34974 = f__29491__auto__();
(statearr_34974[(6)] = c__29490__auto___35513);

return statearr_34974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
