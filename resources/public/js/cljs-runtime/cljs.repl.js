goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34362){
var map__34364 = p__34362;
var map__34364__$1 = cljs.core.__destructure_map(map__34364);
var m = map__34364__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34364__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34364__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34377_34584 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34378_34585 = null;
var count__34379_34586 = (0);
var i__34380_34587 = (0);
while(true){
if((i__34380_34587 < count__34379_34586)){
var f_34588 = chunk__34378_34585.cljs$core$IIndexed$_nth$arity$2(null,i__34380_34587);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34588], 0));


var G__34589 = seq__34377_34584;
var G__34590 = chunk__34378_34585;
var G__34591 = count__34379_34586;
var G__34592 = (i__34380_34587 + (1));
seq__34377_34584 = G__34589;
chunk__34378_34585 = G__34590;
count__34379_34586 = G__34591;
i__34380_34587 = G__34592;
continue;
} else {
var temp__5753__auto___34593 = cljs.core.seq(seq__34377_34584);
if(temp__5753__auto___34593){
var seq__34377_34594__$1 = temp__5753__auto___34593;
if(cljs.core.chunked_seq_QMARK_(seq__34377_34594__$1)){
var c__4638__auto___34595 = cljs.core.chunk_first(seq__34377_34594__$1);
var G__34596 = cljs.core.chunk_rest(seq__34377_34594__$1);
var G__34597 = c__4638__auto___34595;
var G__34598 = cljs.core.count(c__4638__auto___34595);
var G__34599 = (0);
seq__34377_34584 = G__34596;
chunk__34378_34585 = G__34597;
count__34379_34586 = G__34598;
i__34380_34587 = G__34599;
continue;
} else {
var f_34600 = cljs.core.first(seq__34377_34594__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34600], 0));


var G__34601 = cljs.core.next(seq__34377_34594__$1);
var G__34602 = null;
var G__34603 = (0);
var G__34604 = (0);
seq__34377_34584 = G__34601;
chunk__34378_34585 = G__34602;
count__34379_34586 = G__34603;
i__34380_34587 = G__34604;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34605 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34605], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34605)))?cljs.core.second(arglists_34605):arglists_34605)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34407_34608 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34408_34609 = null;
var count__34409_34610 = (0);
var i__34410_34611 = (0);
while(true){
if((i__34410_34611 < count__34409_34610)){
var vec__34434_34613 = chunk__34408_34609.cljs$core$IIndexed$_nth$arity$2(null,i__34410_34611);
var name_34614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34434_34613,(0),null);
var map__34437_34615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34434_34613,(1),null);
var map__34437_34616__$1 = cljs.core.__destructure_map(map__34437_34615);
var doc_34617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34437_34616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34437_34616__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34614], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34618], 0));

if(cljs.core.truth_(doc_34617)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34617], 0));
} else {
}


var G__34619 = seq__34407_34608;
var G__34620 = chunk__34408_34609;
var G__34621 = count__34409_34610;
var G__34622 = (i__34410_34611 + (1));
seq__34407_34608 = G__34619;
chunk__34408_34609 = G__34620;
count__34409_34610 = G__34621;
i__34410_34611 = G__34622;
continue;
} else {
var temp__5753__auto___34623 = cljs.core.seq(seq__34407_34608);
if(temp__5753__auto___34623){
var seq__34407_34624__$1 = temp__5753__auto___34623;
if(cljs.core.chunked_seq_QMARK_(seq__34407_34624__$1)){
var c__4638__auto___34625 = cljs.core.chunk_first(seq__34407_34624__$1);
var G__34626 = cljs.core.chunk_rest(seq__34407_34624__$1);
var G__34627 = c__4638__auto___34625;
var G__34628 = cljs.core.count(c__4638__auto___34625);
var G__34629 = (0);
seq__34407_34608 = G__34626;
chunk__34408_34609 = G__34627;
count__34409_34610 = G__34628;
i__34410_34611 = G__34629;
continue;
} else {
var vec__34448_34630 = cljs.core.first(seq__34407_34624__$1);
var name_34631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34448_34630,(0),null);
var map__34451_34632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34448_34630,(1),null);
var map__34451_34633__$1 = cljs.core.__destructure_map(map__34451_34632);
var doc_34634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34451_34633__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34451_34633__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34631], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34635], 0));

if(cljs.core.truth_(doc_34634)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34634], 0));
} else {
}


var G__34636 = cljs.core.next(seq__34407_34624__$1);
var G__34637 = null;
var G__34638 = (0);
var G__34639 = (0);
seq__34407_34608 = G__34636;
chunk__34408_34609 = G__34637;
count__34409_34610 = G__34638;
i__34410_34611 = G__34639;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34453 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34454 = null;
var count__34455 = (0);
var i__34456 = (0);
while(true){
if((i__34456 < count__34455)){
var role = chunk__34454.cljs$core$IIndexed$_nth$arity$2(null,i__34456);
var temp__5753__auto___34640__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34640__$1)){
var spec_34641 = temp__5753__auto___34640__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34641)], 0));
} else {
}


var G__34642 = seq__34453;
var G__34643 = chunk__34454;
var G__34644 = count__34455;
var G__34645 = (i__34456 + (1));
seq__34453 = G__34642;
chunk__34454 = G__34643;
count__34455 = G__34644;
i__34456 = G__34645;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34453);
if(temp__5753__auto____$1){
var seq__34453__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34453__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34453__$1);
var G__34646 = cljs.core.chunk_rest(seq__34453__$1);
var G__34647 = c__4638__auto__;
var G__34648 = cljs.core.count(c__4638__auto__);
var G__34649 = (0);
seq__34453 = G__34646;
chunk__34454 = G__34647;
count__34455 = G__34648;
i__34456 = G__34649;
continue;
} else {
var role = cljs.core.first(seq__34453__$1);
var temp__5753__auto___34654__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34654__$2)){
var spec_34655 = temp__5753__auto___34654__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34655)], 0));
} else {
}


var G__34656 = cljs.core.next(seq__34453__$1);
var G__34657 = null;
var G__34658 = (0);
var G__34659 = (0);
seq__34453 = G__34656;
chunk__34454 = G__34657;
count__34455 = G__34658;
i__34456 = G__34659;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34666 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34667 = cljs.core.ex_cause(t);
via = G__34666;
t = G__34667;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34475 = datafied_throwable;
var map__34475__$1 = cljs.core.__destructure_map(map__34475);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34475__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34475__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34475__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34476 = cljs.core.last(via);
var map__34476__$1 = cljs.core.__destructure_map(map__34476);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34477 = data;
var map__34477__$1 = cljs.core.__destructure_map(map__34477);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34478 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34478__$1 = cljs.core.__destructure_map(map__34478);
var top_data = map__34478__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34478__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34480 = phase;
var G__34480__$1 = (((G__34480 instanceof cljs.core.Keyword))?G__34480.fqn:null);
switch (G__34480__$1) {
case "read-source":
var map__34484 = data;
var map__34484__$1 = cljs.core.__destructure_map(map__34484);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34484__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34484__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34485 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34485__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34485,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34485);
var G__34485__$2 = (cljs.core.truth_((function (){var fexpr__34491 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34491.cljs$core$IFn$_invoke$arity$1 ? fexpr__34491.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34491.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34485__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34485__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34485__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34485__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34494 = top_data;
var G__34494__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34494,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34494);
var G__34494__$2 = (cljs.core.truth_((function (){var fexpr__34496 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34496.cljs$core$IFn$_invoke$arity$1 ? fexpr__34496.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34496.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34494__$1);
var G__34494__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34494__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34494__$2);
var G__34494__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34494__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34494__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34494__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34494__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34503 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34503,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34503,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34503,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34503,(3),null);
var G__34506 = top_data;
var G__34506__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34506,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34506);
var G__34506__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34506__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34506__$1);
var G__34506__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34506__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34506__$2);
var G__34506__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34506__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34506__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34506__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34506__$4;
}

break;
case "execution":
var vec__34513 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34513,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34513,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34513,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34513,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34471_SHARP_){
var or__4212__auto__ = (p1__34471_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__34517 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34517.cljs$core$IFn$_invoke$arity$1 ? fexpr__34517.cljs$core$IFn$_invoke$arity$1(p1__34471_SHARP_) : fexpr__34517.call(null,p1__34471_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__34518 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34518__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34518,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34518);
var G__34518__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34518__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34518__$1);
var G__34518__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34518__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34518__$2);
var G__34518__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34518__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34518__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34518__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34518__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34480__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34525){
var map__34527 = p__34525;
var map__34527__$1 = cljs.core.__destructure_map(map__34527);
var triage_data = map__34527__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34527__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34527__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34527__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34527__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34527__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34527__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34527__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34527__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34532 = phase;
var G__34532__$1 = (((G__34532 instanceof cljs.core.Keyword))?G__34532.fqn:null);
switch (G__34532__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34533 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34534 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34535 = loc;
var G__34536 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34540_34693 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34541_34694 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34542_34695 = true;
var _STAR_print_fn_STAR__temp_val__34543_34696 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34542_34695);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34543_34696);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34523_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34523_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34541_34694);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34540_34693);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34533,G__34534,G__34535,G__34536) : format.call(null,G__34533,G__34534,G__34535,G__34536));

break;
case "macroexpansion":
var G__34547 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34548 = cause_type;
var G__34549 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34550 = loc;
var G__34551 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34547,G__34548,G__34549,G__34550,G__34551) : format.call(null,G__34547,G__34548,G__34549,G__34550,G__34551));

break;
case "compile-syntax-check":
var G__34552 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34553 = cause_type;
var G__34554 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34555 = loc;
var G__34556 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34552,G__34553,G__34554,G__34555,G__34556) : format.call(null,G__34552,G__34553,G__34554,G__34555,G__34556));

break;
case "compilation":
var G__34557 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34558 = cause_type;
var G__34559 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34560 = loc;
var G__34561 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34557,G__34558,G__34559,G__34560,G__34561) : format.call(null,G__34557,G__34558,G__34559,G__34560,G__34561));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34562 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34563 = symbol;
var G__34564 = loc;
var G__34565 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34566_34702 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34567_34703 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34568_34704 = true;
var _STAR_print_fn_STAR__temp_val__34569_34705 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34568_34704);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34569_34705);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34524_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34524_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34567_34703);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34566_34702);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34562,G__34563,G__34564,G__34565) : format.call(null,G__34562,G__34563,G__34564,G__34565));
} else {
var G__34570 = "Execution error%s at %s(%s).\n%s\n";
var G__34571 = cause_type;
var G__34572 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34573 = loc;
var G__34574 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34570,G__34571,G__34572,G__34573,G__34574) : format.call(null,G__34570,G__34571,G__34572,G__34573,G__34574));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34532__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
