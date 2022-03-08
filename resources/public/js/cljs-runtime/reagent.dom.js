goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__35735 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__35736 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__35736);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__35740 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__35741 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__35741);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__35740);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__35735);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__35750 = arguments.length;
switch (G__35750) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__35759 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35759,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35759,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__35772_35818 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__35773_35819 = null;
var count__35774_35820 = (0);
var i__35775_35821 = (0);
while(true){
if((i__35775_35821 < count__35774_35820)){
var vec__35796_35822 = chunk__35773_35819.cljs$core$IIndexed$_nth$arity$2(null,i__35775_35821);
var container_35823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35796_35822,(0),null);
var comp_35824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35796_35822,(1),null);
reagent.dom.re_render_component(comp_35824,container_35823);


var G__35826 = seq__35772_35818;
var G__35827 = chunk__35773_35819;
var G__35828 = count__35774_35820;
var G__35829 = (i__35775_35821 + (1));
seq__35772_35818 = G__35826;
chunk__35773_35819 = G__35827;
count__35774_35820 = G__35828;
i__35775_35821 = G__35829;
continue;
} else {
var temp__5753__auto___35830 = cljs.core.seq(seq__35772_35818);
if(temp__5753__auto___35830){
var seq__35772_35831__$1 = temp__5753__auto___35830;
if(cljs.core.chunked_seq_QMARK_(seq__35772_35831__$1)){
var c__4638__auto___35832 = cljs.core.chunk_first(seq__35772_35831__$1);
var G__35833 = cljs.core.chunk_rest(seq__35772_35831__$1);
var G__35834 = c__4638__auto___35832;
var G__35835 = cljs.core.count(c__4638__auto___35832);
var G__35836 = (0);
seq__35772_35818 = G__35833;
chunk__35773_35819 = G__35834;
count__35774_35820 = G__35835;
i__35775_35821 = G__35836;
continue;
} else {
var vec__35802_35837 = cljs.core.first(seq__35772_35831__$1);
var container_35838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35802_35837,(0),null);
var comp_35839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35802_35837,(1),null);
reagent.dom.re_render_component(comp_35839,container_35838);


var G__35840 = cljs.core.next(seq__35772_35831__$1);
var G__35841 = null;
var G__35842 = (0);
var G__35843 = (0);
seq__35772_35818 = G__35840;
chunk__35773_35819 = G__35841;
count__35774_35820 = G__35842;
i__35775_35821 = G__35843;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
