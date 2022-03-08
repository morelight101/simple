goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29702 = arguments.length;
switch (G__29702) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29713 = (function (f,blockable,meta29714){
this.f = f;
this.blockable = blockable;
this.meta29714 = meta29714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29715,meta29714__$1){
var self__ = this;
var _29715__$1 = this;
return (new cljs.core.async.t_cljs$core$async29713(self__.f,self__.blockable,meta29714__$1));
}));

(cljs.core.async.t_cljs$core$async29713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29715){
var self__ = this;
var _29715__$1 = this;
return self__.meta29714;
}));

(cljs.core.async.t_cljs$core$async29713.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29714","meta29714",1356687145,null)], null);
}));

(cljs.core.async.t_cljs$core$async29713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29713");

(cljs.core.async.t_cljs$core$async29713.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29713.
 */
cljs.core.async.__GT_t_cljs$core$async29713 = (function cljs$core$async$__GT_t_cljs$core$async29713(f__$1,blockable__$1,meta29714){
return (new cljs.core.async.t_cljs$core$async29713(f__$1,blockable__$1,meta29714));
});

}

return (new cljs.core.async.t_cljs$core$async29713(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29758 = arguments.length;
switch (G__29758) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29770 = arguments.length;
switch (G__29770) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29778 = arguments.length;
switch (G__29778) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33433 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33433) : fn1.call(null,val_33433));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33433) : fn1.call(null,val_33433));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29799 = arguments.length;
switch (G__29799) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___33456 = n;
var x_33458 = (0);
while(true){
if((x_33458 < n__4695__auto___33456)){
(a[x_33458] = x_33458);

var G__33460 = (x_33458 + (1));
x_33458 = G__33460;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29860 = (function (flag,meta29861){
this.flag = flag;
this.meta29861 = meta29861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29862,meta29861__$1){
var self__ = this;
var _29862__$1 = this;
return (new cljs.core.async.t_cljs$core$async29860(self__.flag,meta29861__$1));
}));

(cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29862){
var self__ = this;
var _29862__$1 = this;
return self__.meta29861;
}));

(cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29861","meta29861",-158627289,null)], null);
}));

(cljs.core.async.t_cljs$core$async29860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29860");

(cljs.core.async.t_cljs$core$async29860.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29860.
 */
cljs.core.async.__GT_t_cljs$core$async29860 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29860(flag__$1,meta29861){
return (new cljs.core.async.t_cljs$core$async29860(flag__$1,meta29861));
});

}

return (new cljs.core.async.t_cljs$core$async29860(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29896 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29896 = (function (flag,cb,meta29897){
this.flag = flag;
this.cb = cb;
this.meta29897 = meta29897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29898,meta29897__$1){
var self__ = this;
var _29898__$1 = this;
return (new cljs.core.async.t_cljs$core$async29896(self__.flag,self__.cb,meta29897__$1));
}));

(cljs.core.async.t_cljs$core$async29896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29898){
var self__ = this;
var _29898__$1 = this;
return self__.meta29897;
}));

(cljs.core.async.t_cljs$core$async29896.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29896.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29896.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29896.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29897","meta29897",1373244762,null)], null);
}));

(cljs.core.async.t_cljs$core$async29896.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29896");

(cljs.core.async.t_cljs$core$async29896.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29896");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29896.
 */
cljs.core.async.__GT_t_cljs$core$async29896 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29896(flag__$1,cb__$1,meta29897){
return (new cljs.core.async.t_cljs$core$async29896(flag__$1,cb__$1,meta29897));
});

}

return (new cljs.core.async.t_cljs$core$async29896(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29915_SHARP_){
var G__29924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29915_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29924) : fret.call(null,G__29924));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29916_SHARP_){
var G__29925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29916_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29925) : fret.call(null,G__29925));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33504 = (i + (1));
i = G__33504;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33515 = arguments.length;
var i__4819__auto___33516 = (0);
while(true){
if((i__4819__auto___33516 < len__4818__auto___33515)){
args__4824__auto__.push((arguments[i__4819__auto___33516]));

var G__33517 = (i__4819__auto___33516 + (1));
i__4819__auto___33516 = G__33517;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29936){
var map__29937 = p__29936;
var map__29937__$1 = cljs.core.__destructure_map(map__29937);
var opts = map__29937__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29928){
var G__29929 = cljs.core.first(seq29928);
var seq29928__$1 = cljs.core.next(seq29928);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29929,seq29928__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29951 = arguments.length;
switch (G__29951) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29490__auto___33537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_30004){
var state_val_30005 = (state_30004[(1)]);
if((state_val_30005 === (7))){
var inst_30000 = (state_30004[(2)]);
var state_30004__$1 = state_30004;
var statearr_30008_33538 = state_30004__$1;
(statearr_30008_33538[(2)] = inst_30000);

(statearr_30008_33538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30005 === (1))){
var state_30004__$1 = state_30004;
var statearr_30009_33540 = state_30004__$1;
(statearr_30009_33540[(2)] = null);

(statearr_30009_33540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30005 === (4))){
var inst_29978 = (state_30004[(7)]);
var inst_29978__$1 = (state_30004[(2)]);
var inst_29983 = (inst_29978__$1 == null);
var state_30004__$1 = (function (){var statearr_30017 = state_30004;
(statearr_30017[(7)] = inst_29978__$1);

return statearr_30017;
})();
if(cljs.core.truth_(inst_29983)){
var statearr_30018_33545 = state_30004__$1;
(statearr_30018_33545[(1)] = (5));

} else {
var statearr_30019_33550 = state_30004__$1;
(statearr_30019_33550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30005 === (13))){
var state_30004__$1 = state_30004;
var statearr_30024_33553 = state_30004__$1;
(statearr_30024_33553[(2)] = null);

(statearr_30024_33553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30005 === (6))){
var inst_29978 = (state_30004[(7)]);
var state_30004__$1 = state_30004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30004__$1,(11),to,inst_29978);
} else {
if((state_val_30005 === (3))){
var inst_30002 = (state_30004[(2)]);
var state_30004__$1 = state_30004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30004__$1,inst_30002);
} else {
if((state_val_30005 === (12))){
var state_30004__$1 = state_30004;
var statearr_30031_33554 = state_30004__$1;
(statearr_30031_33554[(2)] = null);

(statearr_30031_33554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30005 === (2))){
var state_30004__$1 = state_30004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30004__$1,(4),from);
} else {
if((state_val_30005 === (11))){
var inst_29992 = (state_30004[(2)]);
var state_30004__$1 = state_30004;
if(cljs.core.truth_(inst_29992)){
var statearr_30033_33557 = state_30004__$1;
(statearr_30033_33557[(1)] = (12));

} else {
var statearr_30035_33558 = state_30004__$1;
(statearr_30035_33558[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30005 === (9))){
var state_30004__$1 = state_30004;
var statearr_30037_33559 = state_30004__$1;
(statearr_30037_33559[(2)] = null);

(statearr_30037_33559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30005 === (5))){
var state_30004__$1 = state_30004;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30038_33560 = state_30004__$1;
(statearr_30038_33560[(1)] = (8));

} else {
var statearr_30039_33561 = state_30004__$1;
(statearr_30039_33561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30005 === (14))){
var inst_29998 = (state_30004[(2)]);
var state_30004__$1 = state_30004;
var statearr_30041_33562 = state_30004__$1;
(statearr_30041_33562[(2)] = inst_29998);

(statearr_30041_33562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30005 === (10))){
var inst_29989 = (state_30004[(2)]);
var state_30004__$1 = state_30004;
var statearr_30052_33563 = state_30004__$1;
(statearr_30052_33563[(2)] = inst_29989);

(statearr_30052_33563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30005 === (8))){
var inst_29986 = cljs.core.async.close_BANG_(to);
var state_30004__$1 = state_30004;
var statearr_30053_33565 = state_30004__$1;
(statearr_30053_33565[(2)] = inst_29986);

(statearr_30053_33565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28919__auto__ = null;
var cljs$core$async$state_machine__28919__auto____0 = (function (){
var statearr_30054 = [null,null,null,null,null,null,null,null];
(statearr_30054[(0)] = cljs$core$async$state_machine__28919__auto__);

(statearr_30054[(1)] = (1));

return statearr_30054;
});
var cljs$core$async$state_machine__28919__auto____1 = (function (state_30004){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_30004);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e30055){var ex__28922__auto__ = e30055;
var statearr_30056_33573 = state_30004;
(statearr_30056_33573[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_30004[(4)]))){
var statearr_30058_33576 = state_30004;
(statearr_30058_33576[(1)] = cljs.core.first((state_30004[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33577 = state_30004;
state_30004 = G__33577;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$state_machine__28919__auto__ = function(state_30004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28919__auto____1.call(this,state_30004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28919__auto____0;
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28919__auto____1;
return cljs$core$async$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_30061 = f__29491__auto__();
(statearr_30061[(6)] = c__29490__auto___33537);

return statearr_30061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30071){
var vec__30072 = p__30071;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30072,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30072,(1),null);
var job = vec__30072;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29490__auto___33581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_30083){
var state_val_30084 = (state_30083[(1)]);
if((state_val_30084 === (1))){
var state_30083__$1 = state_30083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30083__$1,(2),res,v);
} else {
if((state_val_30084 === (2))){
var inst_30080 = (state_30083[(2)]);
var inst_30081 = cljs.core.async.close_BANG_(res);
var state_30083__$1 = (function (){var statearr_30089 = state_30083;
(statearr_30089[(7)] = inst_30080);

return statearr_30089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30083__$1,inst_30081);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0 = (function (){
var statearr_30090 = [null,null,null,null,null,null,null,null];
(statearr_30090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__);

(statearr_30090[(1)] = (1));

return statearr_30090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1 = (function (state_30083){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_30083);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e30091){var ex__28922__auto__ = e30091;
var statearr_30092_33585 = state_30083;
(statearr_30092_33585[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_30083[(4)]))){
var statearr_30093_33586 = state_30083;
(statearr_30093_33586[(1)] = cljs.core.first((state_30083[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33587 = state_30083;
state_30083 = G__33587;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__ = function(state_30083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1.call(this,state_30083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_30094 = f__29491__auto__();
(statearr_30094[(6)] = c__29490__auto___33581);

return statearr_30094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30096){
var vec__30099 = p__30096;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30099,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30099,(1),null);
var job = vec__30099;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___33588 = n;
var __33589 = (0);
while(true){
if((__33589 < n__4695__auto___33588)){
var G__30117_33590 = type;
var G__30117_33591__$1 = (((G__30117_33590 instanceof cljs.core.Keyword))?G__30117_33590.fqn:null);
switch (G__30117_33591__$1) {
case "compute":
var c__29490__auto___33593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33589,c__29490__auto___33593,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async){
return (function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = ((function (__33589,c__29490__auto___33593,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async){
return (function (state_30138){
var state_val_30139 = (state_30138[(1)]);
if((state_val_30139 === (1))){
var state_30138__$1 = state_30138;
var statearr_30145_33594 = state_30138__$1;
(statearr_30145_33594[(2)] = null);

(statearr_30145_33594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (2))){
var state_30138__$1 = state_30138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30138__$1,(4),jobs);
} else {
if((state_val_30139 === (3))){
var inst_30136 = (state_30138[(2)]);
var state_30138__$1 = state_30138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30138__$1,inst_30136);
} else {
if((state_val_30139 === (4))){
var inst_30128 = (state_30138[(2)]);
var inst_30129 = process(inst_30128);
var state_30138__$1 = state_30138;
if(cljs.core.truth_(inst_30129)){
var statearr_30146_33595 = state_30138__$1;
(statearr_30146_33595[(1)] = (5));

} else {
var statearr_30150_33596 = state_30138__$1;
(statearr_30150_33596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (5))){
var state_30138__$1 = state_30138;
var statearr_30160_33597 = state_30138__$1;
(statearr_30160_33597[(2)] = null);

(statearr_30160_33597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (6))){
var state_30138__$1 = state_30138;
var statearr_30161_33602 = state_30138__$1;
(statearr_30161_33602[(2)] = null);

(statearr_30161_33602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (7))){
var inst_30134 = (state_30138[(2)]);
var state_30138__$1 = state_30138;
var statearr_30177_33603 = state_30138__$1;
(statearr_30177_33603[(2)] = inst_30134);

(statearr_30177_33603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33589,c__29490__auto___33593,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async))
;
return ((function (__33589,switch__28918__auto__,c__29490__auto___33593,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0 = (function (){
var statearr_30179 = [null,null,null,null,null,null,null];
(statearr_30179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__);

(statearr_30179[(1)] = (1));

return statearr_30179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1 = (function (state_30138){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_30138);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e30180){var ex__28922__auto__ = e30180;
var statearr_30181_33605 = state_30138;
(statearr_30181_33605[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_30138[(4)]))){
var statearr_30183_33606 = state_30138;
(statearr_30183_33606[(1)] = cljs.core.first((state_30138[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33607 = state_30138;
state_30138 = G__33607;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__ = function(state_30138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1.call(this,state_30138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__;
})()
;})(__33589,switch__28918__auto__,c__29490__auto___33593,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async))
})();
var state__29492__auto__ = (function (){var statearr_30186 = f__29491__auto__();
(statearr_30186[(6)] = c__29490__auto___33593);

return statearr_30186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
});})(__33589,c__29490__auto___33593,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async))
);


break;
case "async":
var c__29490__auto___33608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33589,c__29490__auto___33608,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async){
return (function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = ((function (__33589,c__29490__auto___33608,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async){
return (function (state_30215){
var state_val_30216 = (state_30215[(1)]);
if((state_val_30216 === (1))){
var state_30215__$1 = state_30215;
var statearr_30220_33611 = state_30215__$1;
(statearr_30220_33611[(2)] = null);

(statearr_30220_33611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (2))){
var state_30215__$1 = state_30215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30215__$1,(4),jobs);
} else {
if((state_val_30216 === (3))){
var inst_30213 = (state_30215[(2)]);
var state_30215__$1 = state_30215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30215__$1,inst_30213);
} else {
if((state_val_30216 === (4))){
var inst_30204 = (state_30215[(2)]);
var inst_30205 = async(inst_30204);
var state_30215__$1 = state_30215;
if(cljs.core.truth_(inst_30205)){
var statearr_30223_33612 = state_30215__$1;
(statearr_30223_33612[(1)] = (5));

} else {
var statearr_30224_33613 = state_30215__$1;
(statearr_30224_33613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (5))){
var state_30215__$1 = state_30215;
var statearr_30225_33614 = state_30215__$1;
(statearr_30225_33614[(2)] = null);

(statearr_30225_33614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (6))){
var state_30215__$1 = state_30215;
var statearr_30226_33615 = state_30215__$1;
(statearr_30226_33615[(2)] = null);

(statearr_30226_33615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (7))){
var inst_30210 = (state_30215[(2)]);
var state_30215__$1 = state_30215;
var statearr_30227_33620 = state_30215__$1;
(statearr_30227_33620[(2)] = inst_30210);

(statearr_30227_33620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33589,c__29490__auto___33608,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async))
;
return ((function (__33589,switch__28918__auto__,c__29490__auto___33608,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0 = (function (){
var statearr_30231 = [null,null,null,null,null,null,null];
(statearr_30231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__);

(statearr_30231[(1)] = (1));

return statearr_30231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1 = (function (state_30215){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_30215);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e30232){var ex__28922__auto__ = e30232;
var statearr_30233_33635 = state_30215;
(statearr_30233_33635[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_30215[(4)]))){
var statearr_30234_33636 = state_30215;
(statearr_30234_33636[(1)] = cljs.core.first((state_30215[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33638 = state_30215;
state_30215 = G__33638;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__ = function(state_30215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1.call(this,state_30215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__;
})()
;})(__33589,switch__28918__auto__,c__29490__auto___33608,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async))
})();
var state__29492__auto__ = (function (){var statearr_30240 = f__29491__auto__();
(statearr_30240[(6)] = c__29490__auto___33608);

return statearr_30240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
});})(__33589,c__29490__auto___33608,G__30117_33590,G__30117_33591__$1,n__4695__auto___33588,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30117_33591__$1)].join('')));

}

var G__33641 = (__33589 + (1));
__33589 = G__33641;
continue;
} else {
}
break;
}

var c__29490__auto___33642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_30267){
var state_val_30268 = (state_30267[(1)]);
if((state_val_30268 === (7))){
var inst_30263 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30272_33643 = state_30267__$1;
(statearr_30272_33643[(2)] = inst_30263);

(statearr_30272_33643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (1))){
var state_30267__$1 = state_30267;
var statearr_30279_33644 = state_30267__$1;
(statearr_30279_33644[(2)] = null);

(statearr_30279_33644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (4))){
var inst_30248 = (state_30267[(7)]);
var inst_30248__$1 = (state_30267[(2)]);
var inst_30249 = (inst_30248__$1 == null);
var state_30267__$1 = (function (){var statearr_30284 = state_30267;
(statearr_30284[(7)] = inst_30248__$1);

return statearr_30284;
})();
if(cljs.core.truth_(inst_30249)){
var statearr_30291_33649 = state_30267__$1;
(statearr_30291_33649[(1)] = (5));

} else {
var statearr_30292_33650 = state_30267__$1;
(statearr_30292_33650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (6))){
var inst_30253 = (state_30267[(8)]);
var inst_30248 = (state_30267[(7)]);
var inst_30253__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30255 = [inst_30248,inst_30253__$1];
var inst_30256 = (new cljs.core.PersistentVector(null,2,(5),inst_30254,inst_30255,null));
var state_30267__$1 = (function (){var statearr_30293 = state_30267;
(statearr_30293[(8)] = inst_30253__$1);

return statearr_30293;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30267__$1,(8),jobs,inst_30256);
} else {
if((state_val_30268 === (3))){
var inst_30265 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30267__$1,inst_30265);
} else {
if((state_val_30268 === (2))){
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30267__$1,(4),from);
} else {
if((state_val_30268 === (9))){
var inst_30260 = (state_30267[(2)]);
var state_30267__$1 = (function (){var statearr_30298 = state_30267;
(statearr_30298[(9)] = inst_30260);

return statearr_30298;
})();
var statearr_30299_33651 = state_30267__$1;
(statearr_30299_33651[(2)] = null);

(statearr_30299_33651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (5))){
var inst_30251 = cljs.core.async.close_BANG_(jobs);
var state_30267__$1 = state_30267;
var statearr_30300_33652 = state_30267__$1;
(statearr_30300_33652[(2)] = inst_30251);

(statearr_30300_33652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (8))){
var inst_30253 = (state_30267[(8)]);
var inst_30258 = (state_30267[(2)]);
var state_30267__$1 = (function (){var statearr_30301 = state_30267;
(statearr_30301[(10)] = inst_30258);

return statearr_30301;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30267__$1,(9),results,inst_30253);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0 = (function (){
var statearr_30302 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30302[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__);

(statearr_30302[(1)] = (1));

return statearr_30302;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1 = (function (state_30267){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_30267);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e30303){var ex__28922__auto__ = e30303;
var statearr_30304_33659 = state_30267;
(statearr_30304_33659[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_30267[(4)]))){
var statearr_30305_33660 = state_30267;
(statearr_30305_33660[(1)] = cljs.core.first((state_30267[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33661 = state_30267;
state_30267 = G__33661;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__ = function(state_30267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1.call(this,state_30267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_30309 = f__29491__auto__();
(statearr_30309[(6)] = c__29490__auto___33642);

return statearr_30309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


var c__29490__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_30352){
var state_val_30353 = (state_30352[(1)]);
if((state_val_30353 === (7))){
var inst_30348 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
var statearr_30359_33662 = state_30352__$1;
(statearr_30359_33662[(2)] = inst_30348);

(statearr_30359_33662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (20))){
var state_30352__$1 = state_30352;
var statearr_30360_33664 = state_30352__$1;
(statearr_30360_33664[(2)] = null);

(statearr_30360_33664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (1))){
var state_30352__$1 = state_30352;
var statearr_30361_33665 = state_30352__$1;
(statearr_30361_33665[(2)] = null);

(statearr_30361_33665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (4))){
var inst_30316 = (state_30352[(7)]);
var inst_30316__$1 = (state_30352[(2)]);
var inst_30317 = (inst_30316__$1 == null);
var state_30352__$1 = (function (){var statearr_30362 = state_30352;
(statearr_30362[(7)] = inst_30316__$1);

return statearr_30362;
})();
if(cljs.core.truth_(inst_30317)){
var statearr_30363_33672 = state_30352__$1;
(statearr_30363_33672[(1)] = (5));

} else {
var statearr_30364_33673 = state_30352__$1;
(statearr_30364_33673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (15))){
var inst_30330 = (state_30352[(8)]);
var state_30352__$1 = state_30352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30352__$1,(18),to,inst_30330);
} else {
if((state_val_30353 === (21))){
var inst_30343 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
var statearr_30367_33674 = state_30352__$1;
(statearr_30367_33674[(2)] = inst_30343);

(statearr_30367_33674[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (13))){
var inst_30345 = (state_30352[(2)]);
var state_30352__$1 = (function (){var statearr_30368 = state_30352;
(statearr_30368[(9)] = inst_30345);

return statearr_30368;
})();
var statearr_30369_33675 = state_30352__$1;
(statearr_30369_33675[(2)] = null);

(statearr_30369_33675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (6))){
var inst_30316 = (state_30352[(7)]);
var state_30352__$1 = state_30352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30352__$1,(11),inst_30316);
} else {
if((state_val_30353 === (17))){
var inst_30338 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
if(cljs.core.truth_(inst_30338)){
var statearr_30370_33676 = state_30352__$1;
(statearr_30370_33676[(1)] = (19));

} else {
var statearr_30374_33677 = state_30352__$1;
(statearr_30374_33677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (3))){
var inst_30350 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30352__$1,inst_30350);
} else {
if((state_val_30353 === (12))){
var inst_30326 = (state_30352[(10)]);
var state_30352__$1 = state_30352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30352__$1,(14),inst_30326);
} else {
if((state_val_30353 === (2))){
var state_30352__$1 = state_30352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30352__$1,(4),results);
} else {
if((state_val_30353 === (19))){
var state_30352__$1 = state_30352;
var statearr_30375_33679 = state_30352__$1;
(statearr_30375_33679[(2)] = null);

(statearr_30375_33679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (11))){
var inst_30326 = (state_30352[(2)]);
var state_30352__$1 = (function (){var statearr_30376 = state_30352;
(statearr_30376[(10)] = inst_30326);

return statearr_30376;
})();
var statearr_30383_33681 = state_30352__$1;
(statearr_30383_33681[(2)] = null);

(statearr_30383_33681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (9))){
var state_30352__$1 = state_30352;
var statearr_30384_33682 = state_30352__$1;
(statearr_30384_33682[(2)] = null);

(statearr_30384_33682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (5))){
var state_30352__$1 = state_30352;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30386_33683 = state_30352__$1;
(statearr_30386_33683[(1)] = (8));

} else {
var statearr_30387_33685 = state_30352__$1;
(statearr_30387_33685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (14))){
var inst_30330 = (state_30352[(8)]);
var inst_30332 = (state_30352[(11)]);
var inst_30330__$1 = (state_30352[(2)]);
var inst_30331 = (inst_30330__$1 == null);
var inst_30332__$1 = cljs.core.not(inst_30331);
var state_30352__$1 = (function (){var statearr_30389 = state_30352;
(statearr_30389[(8)] = inst_30330__$1);

(statearr_30389[(11)] = inst_30332__$1);

return statearr_30389;
})();
if(inst_30332__$1){
var statearr_30390_33686 = state_30352__$1;
(statearr_30390_33686[(1)] = (15));

} else {
var statearr_30391_33687 = state_30352__$1;
(statearr_30391_33687[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (16))){
var inst_30332 = (state_30352[(11)]);
var state_30352__$1 = state_30352;
var statearr_30392_33689 = state_30352__$1;
(statearr_30392_33689[(2)] = inst_30332);

(statearr_30392_33689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (10))){
var inst_30323 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
var statearr_30394_33690 = state_30352__$1;
(statearr_30394_33690[(2)] = inst_30323);

(statearr_30394_33690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (18))){
var inst_30335 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
var statearr_30395_33691 = state_30352__$1;
(statearr_30395_33691[(2)] = inst_30335);

(statearr_30395_33691[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (8))){
var inst_30320 = cljs.core.async.close_BANG_(to);
var state_30352__$1 = state_30352;
var statearr_30396_33692 = state_30352__$1;
(statearr_30396_33692[(2)] = inst_30320);

(statearr_30396_33692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0 = (function (){
var statearr_30398 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__);

(statearr_30398[(1)] = (1));

return statearr_30398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1 = (function (state_30352){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_30352);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e30404){var ex__28922__auto__ = e30404;
var statearr_30405_33693 = state_30352;
(statearr_30405_33693[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_30352[(4)]))){
var statearr_30407_33694 = state_30352;
(statearr_30407_33694[(1)] = cljs.core.first((state_30352[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33695 = state_30352;
state_30352 = G__33695;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__ = function(state_30352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1.call(this,state_30352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_30409 = f__29491__auto__();
(statearr_30409[(6)] = c__29490__auto__);

return statearr_30409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));

return c__29490__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30411 = arguments.length;
switch (G__30411) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30433 = arguments.length;
switch (G__30433) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30447 = arguments.length;
switch (G__30447) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29490__auto___33711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_30491){
var state_val_30492 = (state_30491[(1)]);
if((state_val_30492 === (7))){
var inst_30487 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30502_33712 = state_30491__$1;
(statearr_30502_33712[(2)] = inst_30487);

(statearr_30502_33712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (1))){
var state_30491__$1 = state_30491;
var statearr_30505_33713 = state_30491__$1;
(statearr_30505_33713[(2)] = null);

(statearr_30505_33713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (4))){
var inst_30462 = (state_30491[(7)]);
var inst_30462__$1 = (state_30491[(2)]);
var inst_30464 = (inst_30462__$1 == null);
var state_30491__$1 = (function (){var statearr_30512 = state_30491;
(statearr_30512[(7)] = inst_30462__$1);

return statearr_30512;
})();
if(cljs.core.truth_(inst_30464)){
var statearr_30515_33715 = state_30491__$1;
(statearr_30515_33715[(1)] = (5));

} else {
var statearr_30517_33716 = state_30491__$1;
(statearr_30517_33716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (13))){
var state_30491__$1 = state_30491;
var statearr_30518_33717 = state_30491__$1;
(statearr_30518_33717[(2)] = null);

(statearr_30518_33717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (6))){
var inst_30462 = (state_30491[(7)]);
var inst_30470 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30462) : p.call(null,inst_30462));
var state_30491__$1 = state_30491;
if(cljs.core.truth_(inst_30470)){
var statearr_30524_33718 = state_30491__$1;
(statearr_30524_33718[(1)] = (9));

} else {
var statearr_30525_33720 = state_30491__$1;
(statearr_30525_33720[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (3))){
var inst_30489 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30491__$1,inst_30489);
} else {
if((state_val_30492 === (12))){
var state_30491__$1 = state_30491;
var statearr_30529_33722 = state_30491__$1;
(statearr_30529_33722[(2)] = null);

(statearr_30529_33722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (2))){
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30491__$1,(4),ch);
} else {
if((state_val_30492 === (11))){
var inst_30462 = (state_30491[(7)]);
var inst_30478 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30491__$1,(8),inst_30478,inst_30462);
} else {
if((state_val_30492 === (9))){
var state_30491__$1 = state_30491;
var statearr_30532_33724 = state_30491__$1;
(statearr_30532_33724[(2)] = tc);

(statearr_30532_33724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (5))){
var inst_30467 = cljs.core.async.close_BANG_(tc);
var inst_30468 = cljs.core.async.close_BANG_(fc);
var state_30491__$1 = (function (){var statearr_30536 = state_30491;
(statearr_30536[(8)] = inst_30467);

return statearr_30536;
})();
var statearr_30537_33725 = state_30491__$1;
(statearr_30537_33725[(2)] = inst_30468);

(statearr_30537_33725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (14))){
var inst_30485 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30538_33731 = state_30491__$1;
(statearr_30538_33731[(2)] = inst_30485);

(statearr_30538_33731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (10))){
var state_30491__$1 = state_30491;
var statearr_30539_33732 = state_30491__$1;
(statearr_30539_33732[(2)] = fc);

(statearr_30539_33732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (8))){
var inst_30480 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
if(cljs.core.truth_(inst_30480)){
var statearr_30540_33733 = state_30491__$1;
(statearr_30540_33733[(1)] = (12));

} else {
var statearr_30541_33734 = state_30491__$1;
(statearr_30541_33734[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28919__auto__ = null;
var cljs$core$async$state_machine__28919__auto____0 = (function (){
var statearr_30547 = [null,null,null,null,null,null,null,null,null];
(statearr_30547[(0)] = cljs$core$async$state_machine__28919__auto__);

(statearr_30547[(1)] = (1));

return statearr_30547;
});
var cljs$core$async$state_machine__28919__auto____1 = (function (state_30491){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_30491);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e30551){var ex__28922__auto__ = e30551;
var statearr_30553_33735 = state_30491;
(statearr_30553_33735[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_30491[(4)]))){
var statearr_30554_33736 = state_30491;
(statearr_30554_33736[(1)] = cljs.core.first((state_30491[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33737 = state_30491;
state_30491 = G__33737;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$state_machine__28919__auto__ = function(state_30491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28919__auto____1.call(this,state_30491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28919__auto____0;
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28919__auto____1;
return cljs$core$async$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_30555 = f__29491__auto__();
(statearr_30555[(6)] = c__29490__auto___33711);

return statearr_30555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29490__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_30584){
var state_val_30585 = (state_30584[(1)]);
if((state_val_30585 === (7))){
var inst_30579 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30592_33738 = state_30584__$1;
(statearr_30592_33738[(2)] = inst_30579);

(statearr_30592_33738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (1))){
var inst_30557 = init;
var inst_30559 = inst_30557;
var state_30584__$1 = (function (){var statearr_30593 = state_30584;
(statearr_30593[(7)] = inst_30559);

return statearr_30593;
})();
var statearr_30594_33739 = state_30584__$1;
(statearr_30594_33739[(2)] = null);

(statearr_30594_33739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (4))){
var inst_30563 = (state_30584[(8)]);
var inst_30563__$1 = (state_30584[(2)]);
var inst_30564 = (inst_30563__$1 == null);
var state_30584__$1 = (function (){var statearr_30597 = state_30584;
(statearr_30597[(8)] = inst_30563__$1);

return statearr_30597;
})();
if(cljs.core.truth_(inst_30564)){
var statearr_30599_33741 = state_30584__$1;
(statearr_30599_33741[(1)] = (5));

} else {
var statearr_30600_33742 = state_30584__$1;
(statearr_30600_33742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (6))){
var inst_30567 = (state_30584[(9)]);
var inst_30563 = (state_30584[(8)]);
var inst_30559 = (state_30584[(7)]);
var inst_30567__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30559,inst_30563) : f.call(null,inst_30559,inst_30563));
var inst_30568 = cljs.core.reduced_QMARK_(inst_30567__$1);
var state_30584__$1 = (function (){var statearr_30601 = state_30584;
(statearr_30601[(9)] = inst_30567__$1);

return statearr_30601;
})();
if(inst_30568){
var statearr_30602_33744 = state_30584__$1;
(statearr_30602_33744[(1)] = (8));

} else {
var statearr_30603_33745 = state_30584__$1;
(statearr_30603_33745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (3))){
var inst_30582 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30584__$1,inst_30582);
} else {
if((state_val_30585 === (2))){
var state_30584__$1 = state_30584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30584__$1,(4),ch);
} else {
if((state_val_30585 === (9))){
var inst_30567 = (state_30584[(9)]);
var inst_30559 = inst_30567;
var state_30584__$1 = (function (){var statearr_30612 = state_30584;
(statearr_30612[(7)] = inst_30559);

return statearr_30612;
})();
var statearr_30623_33750 = state_30584__$1;
(statearr_30623_33750[(2)] = null);

(statearr_30623_33750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (5))){
var inst_30559 = (state_30584[(7)]);
var state_30584__$1 = state_30584;
var statearr_30628_33751 = state_30584__$1;
(statearr_30628_33751[(2)] = inst_30559);

(statearr_30628_33751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (10))){
var inst_30577 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30630_33752 = state_30584__$1;
(statearr_30630_33752[(2)] = inst_30577);

(statearr_30630_33752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (8))){
var inst_30567 = (state_30584[(9)]);
var inst_30572 = cljs.core.deref(inst_30567);
var state_30584__$1 = state_30584;
var statearr_30631_33753 = state_30584__$1;
(statearr_30631_33753[(2)] = inst_30572);

(statearr_30631_33753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28919__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28919__auto____0 = (function (){
var statearr_30632 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30632[(0)] = cljs$core$async$reduce_$_state_machine__28919__auto__);

(statearr_30632[(1)] = (1));

return statearr_30632;
});
var cljs$core$async$reduce_$_state_machine__28919__auto____1 = (function (state_30584){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_30584);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e30634){var ex__28922__auto__ = e30634;
var statearr_30635_33754 = state_30584;
(statearr_30635_33754[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_30584[(4)]))){
var statearr_30636_33755 = state_30584;
(statearr_30636_33755[(1)] = cljs.core.first((state_30584[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33756 = state_30584;
state_30584 = G__33756;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28919__auto__ = function(state_30584){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28919__auto____1.call(this,state_30584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28919__auto____0;
cljs$core$async$reduce_$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28919__auto____1;
return cljs$core$async$reduce_$_state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_30646 = f__29491__auto__();
(statearr_30646[(6)] = c__29490__auto__);

return statearr_30646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));

return c__29490__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29490__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_30667){
var state_val_30668 = (state_30667[(1)]);
if((state_val_30668 === (1))){
var inst_30662 = cljs.core.async.reduce(f__$1,init,ch);
var state_30667__$1 = state_30667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30667__$1,(2),inst_30662);
} else {
if((state_val_30668 === (2))){
var inst_30664 = (state_30667[(2)]);
var inst_30665 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30664) : f__$1.call(null,inst_30664));
var state_30667__$1 = state_30667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30667__$1,inst_30665);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28919__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28919__auto____0 = (function (){
var statearr_30671 = [null,null,null,null,null,null,null];
(statearr_30671[(0)] = cljs$core$async$transduce_$_state_machine__28919__auto__);

(statearr_30671[(1)] = (1));

return statearr_30671;
});
var cljs$core$async$transduce_$_state_machine__28919__auto____1 = (function (state_30667){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_30667);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e30673){var ex__28922__auto__ = e30673;
var statearr_30674_33767 = state_30667;
(statearr_30674_33767[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_30667[(4)]))){
var statearr_30676_33768 = state_30667;
(statearr_30676_33768[(1)] = cljs.core.first((state_30667[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33769 = state_30667;
state_30667 = G__33769;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28919__auto__ = function(state_30667){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28919__auto____1.call(this,state_30667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28919__auto____0;
cljs$core$async$transduce_$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28919__auto____1;
return cljs$core$async$transduce_$_state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_30677 = f__29491__auto__();
(statearr_30677[(6)] = c__29490__auto__);

return statearr_30677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));

return c__29490__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30693 = arguments.length;
switch (G__30693) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29490__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_30735){
var state_val_30736 = (state_30735[(1)]);
if((state_val_30736 === (7))){
var inst_30717 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30740_33773 = state_30735__$1;
(statearr_30740_33773[(2)] = inst_30717);

(statearr_30740_33773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (1))){
var inst_30711 = cljs.core.seq(coll);
var inst_30712 = inst_30711;
var state_30735__$1 = (function (){var statearr_30743 = state_30735;
(statearr_30743[(7)] = inst_30712);

return statearr_30743;
})();
var statearr_30744_33774 = state_30735__$1;
(statearr_30744_33774[(2)] = null);

(statearr_30744_33774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (4))){
var inst_30712 = (state_30735[(7)]);
var inst_30715 = cljs.core.first(inst_30712);
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30735__$1,(7),ch,inst_30715);
} else {
if((state_val_30736 === (13))){
var inst_30729 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30753_33775 = state_30735__$1;
(statearr_30753_33775[(2)] = inst_30729);

(statearr_30753_33775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (6))){
var inst_30720 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30720)){
var statearr_30757_33779 = state_30735__$1;
(statearr_30757_33779[(1)] = (8));

} else {
var statearr_30758_33780 = state_30735__$1;
(statearr_30758_33780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (3))){
var inst_30733 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30735__$1,inst_30733);
} else {
if((state_val_30736 === (12))){
var state_30735__$1 = state_30735;
var statearr_30761_33781 = state_30735__$1;
(statearr_30761_33781[(2)] = null);

(statearr_30761_33781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (2))){
var inst_30712 = (state_30735[(7)]);
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30712)){
var statearr_30763_33782 = state_30735__$1;
(statearr_30763_33782[(1)] = (4));

} else {
var statearr_30765_33783 = state_30735__$1;
(statearr_30765_33783[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (11))){
var inst_30726 = cljs.core.async.close_BANG_(ch);
var state_30735__$1 = state_30735;
var statearr_30766_33784 = state_30735__$1;
(statearr_30766_33784[(2)] = inst_30726);

(statearr_30766_33784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (9))){
var state_30735__$1 = state_30735;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30767_33785 = state_30735__$1;
(statearr_30767_33785[(1)] = (11));

} else {
var statearr_30768_33786 = state_30735__$1;
(statearr_30768_33786[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (5))){
var inst_30712 = (state_30735[(7)]);
var state_30735__$1 = state_30735;
var statearr_30773_33787 = state_30735__$1;
(statearr_30773_33787[(2)] = inst_30712);

(statearr_30773_33787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (10))){
var inst_30731 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30774_33788 = state_30735__$1;
(statearr_30774_33788[(2)] = inst_30731);

(statearr_30774_33788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (8))){
var inst_30712 = (state_30735[(7)]);
var inst_30722 = cljs.core.next(inst_30712);
var inst_30712__$1 = inst_30722;
var state_30735__$1 = (function (){var statearr_30777 = state_30735;
(statearr_30777[(7)] = inst_30712__$1);

return statearr_30777;
})();
var statearr_30778_33789 = state_30735__$1;
(statearr_30778_33789[(2)] = null);

(statearr_30778_33789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28919__auto__ = null;
var cljs$core$async$state_machine__28919__auto____0 = (function (){
var statearr_30781 = [null,null,null,null,null,null,null,null];
(statearr_30781[(0)] = cljs$core$async$state_machine__28919__auto__);

(statearr_30781[(1)] = (1));

return statearr_30781;
});
var cljs$core$async$state_machine__28919__auto____1 = (function (state_30735){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_30735);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e30785){var ex__28922__auto__ = e30785;
var statearr_30786_33791 = state_30735;
(statearr_30786_33791[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_30735[(4)]))){
var statearr_30788_33792 = state_30735;
(statearr_30788_33792[(1)] = cljs.core.first((state_30735[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33793 = state_30735;
state_30735 = G__33793;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$state_machine__28919__auto__ = function(state_30735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28919__auto____1.call(this,state_30735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28919__auto____0;
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28919__auto____1;
return cljs$core$async$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_30793 = f__29491__auto__();
(statearr_30793[(6)] = c__29490__auto__);

return statearr_30793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));

return c__29490__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30813 = arguments.length;
switch (G__30813) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33795 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33795(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33798 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33798(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33799 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33799(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33800 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33800(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30893 = (function (ch,cs,meta30894){
this.ch = ch;
this.cs = cs;
this.meta30894 = meta30894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30895,meta30894__$1){
var self__ = this;
var _30895__$1 = this;
return (new cljs.core.async.t_cljs$core$async30893(self__.ch,self__.cs,meta30894__$1));
}));

(cljs.core.async.t_cljs$core$async30893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30895){
var self__ = this;
var _30895__$1 = this;
return self__.meta30894;
}));

(cljs.core.async.t_cljs$core$async30893.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30893.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30893.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30893.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30893.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30894","meta30894",1280866694,null)], null);
}));

(cljs.core.async.t_cljs$core$async30893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30893");

(cljs.core.async.t_cljs$core$async30893.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30893.
 */
cljs.core.async.__GT_t_cljs$core$async30893 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30893(ch__$1,cs__$1,meta30894){
return (new cljs.core.async.t_cljs$core$async30893(ch__$1,cs__$1,meta30894));
});

}

return (new cljs.core.async.t_cljs$core$async30893(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29490__auto___33802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_31186){
var state_val_31189 = (state_31186[(1)]);
if((state_val_31189 === (7))){
var inst_31177 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
var statearr_31210_33803 = state_31186__$1;
(statearr_31210_33803[(2)] = inst_31177);

(statearr_31210_33803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (20))){
var inst_31018 = (state_31186[(7)]);
var inst_31038 = cljs.core.first(inst_31018);
var inst_31039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31038,(0),null);
var inst_31041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31038,(1),null);
var state_31186__$1 = (function (){var statearr_31218 = state_31186;
(statearr_31218[(8)] = inst_31039);

return statearr_31218;
})();
if(cljs.core.truth_(inst_31041)){
var statearr_31219_33804 = state_31186__$1;
(statearr_31219_33804[(1)] = (22));

} else {
var statearr_31224_33805 = state_31186__$1;
(statearr_31224_33805[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (27))){
var inst_31091 = (state_31186[(9)]);
var inst_31081 = (state_31186[(10)]);
var inst_31083 = (state_31186[(11)]);
var inst_30960 = (state_31186[(12)]);
var inst_31091__$1 = cljs.core._nth(inst_31081,inst_31083);
var inst_31095 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31091__$1,inst_30960,done);
var state_31186__$1 = (function (){var statearr_31238 = state_31186;
(statearr_31238[(9)] = inst_31091__$1);

return statearr_31238;
})();
if(cljs.core.truth_(inst_31095)){
var statearr_31241_33808 = state_31186__$1;
(statearr_31241_33808[(1)] = (30));

} else {
var statearr_31242_33809 = state_31186__$1;
(statearr_31242_33809[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (1))){
var state_31186__$1 = state_31186;
var statearr_31249_33810 = state_31186__$1;
(statearr_31249_33810[(2)] = null);

(statearr_31249_33810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (24))){
var inst_31018 = (state_31186[(7)]);
var inst_31053 = (state_31186[(2)]);
var inst_31055 = cljs.core.next(inst_31018);
var inst_30973 = inst_31055;
var inst_30974 = null;
var inst_30975 = (0);
var inst_30976 = (0);
var state_31186__$1 = (function (){var statearr_31255 = state_31186;
(statearr_31255[(13)] = inst_31053);

(statearr_31255[(14)] = inst_30976);

(statearr_31255[(15)] = inst_30973);

(statearr_31255[(16)] = inst_30974);

(statearr_31255[(17)] = inst_30975);

return statearr_31255;
})();
var statearr_31263_33811 = state_31186__$1;
(statearr_31263_33811[(2)] = null);

(statearr_31263_33811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (39))){
var state_31186__$1 = state_31186;
var statearr_31275_33812 = state_31186__$1;
(statearr_31275_33812[(2)] = null);

(statearr_31275_33812[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (4))){
var inst_30960 = (state_31186[(12)]);
var inst_30960__$1 = (state_31186[(2)]);
var inst_30963 = (inst_30960__$1 == null);
var state_31186__$1 = (function (){var statearr_31280 = state_31186;
(statearr_31280[(12)] = inst_30960__$1);

return statearr_31280;
})();
if(cljs.core.truth_(inst_30963)){
var statearr_31281_33813 = state_31186__$1;
(statearr_31281_33813[(1)] = (5));

} else {
var statearr_31282_33814 = state_31186__$1;
(statearr_31282_33814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (15))){
var inst_30976 = (state_31186[(14)]);
var inst_30973 = (state_31186[(15)]);
var inst_30974 = (state_31186[(16)]);
var inst_30975 = (state_31186[(17)]);
var inst_31006 = (state_31186[(2)]);
var inst_31008 = (inst_30976 + (1));
var tmp31265 = inst_30973;
var tmp31266 = inst_30974;
var tmp31267 = inst_30975;
var inst_30973__$1 = tmp31265;
var inst_30974__$1 = tmp31266;
var inst_30975__$1 = tmp31267;
var inst_30976__$1 = inst_31008;
var state_31186__$1 = (function (){var statearr_31291 = state_31186;
(statearr_31291[(14)] = inst_30976__$1);

(statearr_31291[(18)] = inst_31006);

(statearr_31291[(15)] = inst_30973__$1);

(statearr_31291[(16)] = inst_30974__$1);

(statearr_31291[(17)] = inst_30975__$1);

return statearr_31291;
})();
var statearr_31301_33818 = state_31186__$1;
(statearr_31301_33818[(2)] = null);

(statearr_31301_33818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (21))){
var inst_31058 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
var statearr_31310_33819 = state_31186__$1;
(statearr_31310_33819[(2)] = inst_31058);

(statearr_31310_33819[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (31))){
var inst_31091 = (state_31186[(9)]);
var inst_31102 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31091);
var state_31186__$1 = state_31186;
var statearr_31316_33820 = state_31186__$1;
(statearr_31316_33820[(2)] = inst_31102);

(statearr_31316_33820[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (32))){
var inst_31081 = (state_31186[(10)]);
var inst_31083 = (state_31186[(11)]);
var inst_31082 = (state_31186[(19)]);
var inst_31080 = (state_31186[(20)]);
var inst_31104 = (state_31186[(2)]);
var inst_31108 = (inst_31083 + (1));
var tmp31306 = inst_31081;
var tmp31307 = inst_31082;
var tmp31308 = inst_31080;
var inst_31080__$1 = tmp31308;
var inst_31081__$1 = tmp31306;
var inst_31082__$1 = tmp31307;
var inst_31083__$1 = inst_31108;
var state_31186__$1 = (function (){var statearr_31329 = state_31186;
(statearr_31329[(10)] = inst_31081__$1);

(statearr_31329[(11)] = inst_31083__$1);

(statearr_31329[(21)] = inst_31104);

(statearr_31329[(19)] = inst_31082__$1);

(statearr_31329[(20)] = inst_31080__$1);

return statearr_31329;
})();
var statearr_31333_33821 = state_31186__$1;
(statearr_31333_33821[(2)] = null);

(statearr_31333_33821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (40))){
var inst_31133 = (state_31186[(22)]);
var inst_31140 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31133);
var state_31186__$1 = state_31186;
var statearr_31341_33822 = state_31186__$1;
(statearr_31341_33822[(2)] = inst_31140);

(statearr_31341_33822[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (33))){
var inst_31111 = (state_31186[(23)]);
var inst_31119 = cljs.core.chunked_seq_QMARK_(inst_31111);
var state_31186__$1 = state_31186;
if(inst_31119){
var statearr_31351_33826 = state_31186__$1;
(statearr_31351_33826[(1)] = (36));

} else {
var statearr_31352_33827 = state_31186__$1;
(statearr_31352_33827[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (13))){
var inst_30998 = (state_31186[(24)]);
var inst_31003 = cljs.core.async.close_BANG_(inst_30998);
var state_31186__$1 = state_31186;
var statearr_31360_33828 = state_31186__$1;
(statearr_31360_33828[(2)] = inst_31003);

(statearr_31360_33828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (22))){
var inst_31039 = (state_31186[(8)]);
var inst_31047 = cljs.core.async.close_BANG_(inst_31039);
var state_31186__$1 = state_31186;
var statearr_31367_33829 = state_31186__$1;
(statearr_31367_33829[(2)] = inst_31047);

(statearr_31367_33829[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (36))){
var inst_31111 = (state_31186[(23)]);
var inst_31124 = cljs.core.chunk_first(inst_31111);
var inst_31128 = cljs.core.chunk_rest(inst_31111);
var inst_31129 = cljs.core.count(inst_31124);
var inst_31080 = inst_31128;
var inst_31081 = inst_31124;
var inst_31082 = inst_31129;
var inst_31083 = (0);
var state_31186__$1 = (function (){var statearr_31371 = state_31186;
(statearr_31371[(10)] = inst_31081);

(statearr_31371[(11)] = inst_31083);

(statearr_31371[(19)] = inst_31082);

(statearr_31371[(20)] = inst_31080);

return statearr_31371;
})();
var statearr_31375_33830 = state_31186__$1;
(statearr_31375_33830[(2)] = null);

(statearr_31375_33830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (41))){
var inst_31111 = (state_31186[(23)]);
var inst_31142 = (state_31186[(2)]);
var inst_31143 = cljs.core.next(inst_31111);
var inst_31080 = inst_31143;
var inst_31081 = null;
var inst_31082 = (0);
var inst_31083 = (0);
var state_31186__$1 = (function (){var statearr_31378 = state_31186;
(statearr_31378[(10)] = inst_31081);

(statearr_31378[(11)] = inst_31083);

(statearr_31378[(25)] = inst_31142);

(statearr_31378[(19)] = inst_31082);

(statearr_31378[(20)] = inst_31080);

return statearr_31378;
})();
var statearr_31385_33835 = state_31186__$1;
(statearr_31385_33835[(2)] = null);

(statearr_31385_33835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (43))){
var state_31186__$1 = state_31186;
var statearr_31389_33836 = state_31186__$1;
(statearr_31389_33836[(2)] = null);

(statearr_31389_33836[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (29))){
var inst_31163 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
var statearr_31390_33837 = state_31186__$1;
(statearr_31390_33837[(2)] = inst_31163);

(statearr_31390_33837[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (44))){
var inst_31173 = (state_31186[(2)]);
var state_31186__$1 = (function (){var statearr_31391 = state_31186;
(statearr_31391[(26)] = inst_31173);

return statearr_31391;
})();
var statearr_31392_33838 = state_31186__$1;
(statearr_31392_33838[(2)] = null);

(statearr_31392_33838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (6))){
var inst_31071 = (state_31186[(27)]);
var inst_31070 = cljs.core.deref(cs);
var inst_31071__$1 = cljs.core.keys(inst_31070);
var inst_31072 = cljs.core.count(inst_31071__$1);
var inst_31073 = cljs.core.reset_BANG_(dctr,inst_31072);
var inst_31079 = cljs.core.seq(inst_31071__$1);
var inst_31080 = inst_31079;
var inst_31081 = null;
var inst_31082 = (0);
var inst_31083 = (0);
var state_31186__$1 = (function (){var statearr_31397 = state_31186;
(statearr_31397[(10)] = inst_31081);

(statearr_31397[(27)] = inst_31071__$1);

(statearr_31397[(11)] = inst_31083);

(statearr_31397[(28)] = inst_31073);

(statearr_31397[(19)] = inst_31082);

(statearr_31397[(20)] = inst_31080);

return statearr_31397;
})();
var statearr_31398_33839 = state_31186__$1;
(statearr_31398_33839[(2)] = null);

(statearr_31398_33839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (28))){
var inst_31111 = (state_31186[(23)]);
var inst_31080 = (state_31186[(20)]);
var inst_31111__$1 = cljs.core.seq(inst_31080);
var state_31186__$1 = (function (){var statearr_31402 = state_31186;
(statearr_31402[(23)] = inst_31111__$1);

return statearr_31402;
})();
if(inst_31111__$1){
var statearr_31403_33840 = state_31186__$1;
(statearr_31403_33840[(1)] = (33));

} else {
var statearr_31404_33841 = state_31186__$1;
(statearr_31404_33841[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (25))){
var inst_31083 = (state_31186[(11)]);
var inst_31082 = (state_31186[(19)]);
var inst_31087 = (inst_31083 < inst_31082);
var inst_31088 = inst_31087;
var state_31186__$1 = state_31186;
if(cljs.core.truth_(inst_31088)){
var statearr_31408_33842 = state_31186__$1;
(statearr_31408_33842[(1)] = (27));

} else {
var statearr_31409_33843 = state_31186__$1;
(statearr_31409_33843[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (34))){
var state_31186__$1 = state_31186;
var statearr_31410_33844 = state_31186__$1;
(statearr_31410_33844[(2)] = null);

(statearr_31410_33844[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (17))){
var state_31186__$1 = state_31186;
var statearr_31413_33845 = state_31186__$1;
(statearr_31413_33845[(2)] = null);

(statearr_31413_33845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (3))){
var inst_31179 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31186__$1,inst_31179);
} else {
if((state_val_31189 === (12))){
var inst_31064 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
var statearr_31418_33846 = state_31186__$1;
(statearr_31418_33846[(2)] = inst_31064);

(statearr_31418_33846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (2))){
var state_31186__$1 = state_31186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31186__$1,(4),ch);
} else {
if((state_val_31189 === (23))){
var state_31186__$1 = state_31186;
var statearr_31422_33847 = state_31186__$1;
(statearr_31422_33847[(2)] = null);

(statearr_31422_33847[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (35))){
var inst_31150 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
var statearr_31426_33848 = state_31186__$1;
(statearr_31426_33848[(2)] = inst_31150);

(statearr_31426_33848[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (19))){
var inst_31018 = (state_31186[(7)]);
var inst_31027 = cljs.core.chunk_first(inst_31018);
var inst_31028 = cljs.core.chunk_rest(inst_31018);
var inst_31029 = cljs.core.count(inst_31027);
var inst_30973 = inst_31028;
var inst_30974 = inst_31027;
var inst_30975 = inst_31029;
var inst_30976 = (0);
var state_31186__$1 = (function (){var statearr_31427 = state_31186;
(statearr_31427[(14)] = inst_30976);

(statearr_31427[(15)] = inst_30973);

(statearr_31427[(16)] = inst_30974);

(statearr_31427[(17)] = inst_30975);

return statearr_31427;
})();
var statearr_31428_33850 = state_31186__$1;
(statearr_31428_33850[(2)] = null);

(statearr_31428_33850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (11))){
var inst_31018 = (state_31186[(7)]);
var inst_30973 = (state_31186[(15)]);
var inst_31018__$1 = cljs.core.seq(inst_30973);
var state_31186__$1 = (function (){var statearr_31433 = state_31186;
(statearr_31433[(7)] = inst_31018__$1);

return statearr_31433;
})();
if(inst_31018__$1){
var statearr_31434_33851 = state_31186__$1;
(statearr_31434_33851[(1)] = (16));

} else {
var statearr_31435_33852 = state_31186__$1;
(statearr_31435_33852[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (9))){
var inst_31066 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
var statearr_31436_33853 = state_31186__$1;
(statearr_31436_33853[(2)] = inst_31066);

(statearr_31436_33853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (5))){
var inst_30971 = cljs.core.deref(cs);
var inst_30972 = cljs.core.seq(inst_30971);
var inst_30973 = inst_30972;
var inst_30974 = null;
var inst_30975 = (0);
var inst_30976 = (0);
var state_31186__$1 = (function (){var statearr_31437 = state_31186;
(statearr_31437[(14)] = inst_30976);

(statearr_31437[(15)] = inst_30973);

(statearr_31437[(16)] = inst_30974);

(statearr_31437[(17)] = inst_30975);

return statearr_31437;
})();
var statearr_31438_33856 = state_31186__$1;
(statearr_31438_33856[(2)] = null);

(statearr_31438_33856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (14))){
var state_31186__$1 = state_31186;
var statearr_31439_33857 = state_31186__$1;
(statearr_31439_33857[(2)] = null);

(statearr_31439_33857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (45))){
var inst_31170 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
var statearr_31440_33860 = state_31186__$1;
(statearr_31440_33860[(2)] = inst_31170);

(statearr_31440_33860[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (26))){
var inst_31071 = (state_31186[(27)]);
var inst_31165 = (state_31186[(2)]);
var inst_31166 = cljs.core.seq(inst_31071);
var state_31186__$1 = (function (){var statearr_31441 = state_31186;
(statearr_31441[(29)] = inst_31165);

return statearr_31441;
})();
if(inst_31166){
var statearr_31442_33861 = state_31186__$1;
(statearr_31442_33861[(1)] = (42));

} else {
var statearr_31443_33862 = state_31186__$1;
(statearr_31443_33862[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (16))){
var inst_31018 = (state_31186[(7)]);
var inst_31024 = cljs.core.chunked_seq_QMARK_(inst_31018);
var state_31186__$1 = state_31186;
if(inst_31024){
var statearr_31444_33863 = state_31186__$1;
(statearr_31444_33863[(1)] = (19));

} else {
var statearr_31445_33864 = state_31186__$1;
(statearr_31445_33864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (38))){
var inst_31147 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
var statearr_31446_33865 = state_31186__$1;
(statearr_31446_33865[(2)] = inst_31147);

(statearr_31446_33865[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (30))){
var state_31186__$1 = state_31186;
var statearr_31447_33866 = state_31186__$1;
(statearr_31447_33866[(2)] = null);

(statearr_31447_33866[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (10))){
var inst_30976 = (state_31186[(14)]);
var inst_30974 = (state_31186[(16)]);
var inst_30996 = cljs.core._nth(inst_30974,inst_30976);
var inst_30998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30996,(0),null);
var inst_30999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30996,(1),null);
var state_31186__$1 = (function (){var statearr_31448 = state_31186;
(statearr_31448[(24)] = inst_30998);

return statearr_31448;
})();
if(cljs.core.truth_(inst_30999)){
var statearr_31449_33867 = state_31186__$1;
(statearr_31449_33867[(1)] = (13));

} else {
var statearr_31450_33868 = state_31186__$1;
(statearr_31450_33868[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (18))){
var inst_31062 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
var statearr_31454_33873 = state_31186__$1;
(statearr_31454_33873[(2)] = inst_31062);

(statearr_31454_33873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (42))){
var state_31186__$1 = state_31186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31186__$1,(45),dchan);
} else {
if((state_val_31189 === (37))){
var inst_31133 = (state_31186[(22)]);
var inst_31111 = (state_31186[(23)]);
var inst_30960 = (state_31186[(12)]);
var inst_31133__$1 = cljs.core.first(inst_31111);
var inst_31136 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31133__$1,inst_30960,done);
var state_31186__$1 = (function (){var statearr_31455 = state_31186;
(statearr_31455[(22)] = inst_31133__$1);

return statearr_31455;
})();
if(cljs.core.truth_(inst_31136)){
var statearr_31457_33874 = state_31186__$1;
(statearr_31457_33874[(1)] = (39));

} else {
var statearr_31458_33875 = state_31186__$1;
(statearr_31458_33875[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (8))){
var inst_30976 = (state_31186[(14)]);
var inst_30975 = (state_31186[(17)]);
var inst_30979 = (inst_30976 < inst_30975);
var inst_30980 = inst_30979;
var state_31186__$1 = state_31186;
if(cljs.core.truth_(inst_30980)){
var statearr_31459_33876 = state_31186__$1;
(statearr_31459_33876[(1)] = (10));

} else {
var statearr_31462_33877 = state_31186__$1;
(statearr_31462_33877[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28919__auto__ = null;
var cljs$core$async$mult_$_state_machine__28919__auto____0 = (function (){
var statearr_31463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31463[(0)] = cljs$core$async$mult_$_state_machine__28919__auto__);

(statearr_31463[(1)] = (1));

return statearr_31463;
});
var cljs$core$async$mult_$_state_machine__28919__auto____1 = (function (state_31186){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_31186);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e31468){var ex__28922__auto__ = e31468;
var statearr_31473_33883 = state_31186;
(statearr_31473_33883[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_31186[(4)]))){
var statearr_31477_33884 = state_31186;
(statearr_31477_33884[(1)] = cljs.core.first((state_31186[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33886 = state_31186;
state_31186 = G__33886;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28919__auto__ = function(state_31186){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28919__auto____1.call(this,state_31186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28919__auto____0;
cljs$core$async$mult_$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28919__auto____1;
return cljs$core$async$mult_$_state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_31481 = f__29491__auto__();
(statearr_31481[(6)] = c__29490__auto___33802);

return statearr_31481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31490 = arguments.length;
switch (G__31490) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33888 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33888(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33889 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33889(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33890 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33890(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33891 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33891(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33898 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33898(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33902 = arguments.length;
var i__4819__auto___33903 = (0);
while(true){
if((i__4819__auto___33903 < len__4818__auto___33902)){
args__4824__auto__.push((arguments[i__4819__auto___33903]));

var G__33904 = (i__4819__auto___33903 + (1));
i__4819__auto___33903 = G__33904;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31649){
var map__31650 = p__31649;
var map__31650__$1 = cljs.core.__destructure_map(map__31650);
var opts = map__31650__$1;
var statearr_31651_33905 = state;
(statearr_31651_33905[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31656_33906 = state;
(statearr_31656_33906[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31663_33907 = state;
(statearr_31663_33907[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31630){
var G__31632 = cljs.core.first(seq31630);
var seq31630__$1 = cljs.core.next(seq31630);
var G__31633 = cljs.core.first(seq31630__$1);
var seq31630__$2 = cljs.core.next(seq31630__$1);
var G__31634 = cljs.core.first(seq31630__$2);
var seq31630__$3 = cljs.core.next(seq31630__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31632,G__31633,G__31634,seq31630__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31696 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31697){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31697 = meta31697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31698,meta31697__$1){
var self__ = this;
var _31698__$1 = this;
return (new cljs.core.async.t_cljs$core$async31696(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31697__$1));
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31698){
var self__ = this;
var _31698__$1 = this;
return self__.meta31697;
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31697","meta31697",1976950617,null)], null);
}));

(cljs.core.async.t_cljs$core$async31696.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31696");

(cljs.core.async.t_cljs$core$async31696.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31696");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31696.
 */
cljs.core.async.__GT_t_cljs$core$async31696 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31696(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31697){
return (new cljs.core.async.t_cljs$core$async31696(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31697));
});

}

return (new cljs.core.async.t_cljs$core$async31696(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29490__auto___33927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_31825){
var state_val_31826 = (state_31825[(1)]);
if((state_val_31826 === (7))){
var inst_31776 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
if(cljs.core.truth_(inst_31776)){
var statearr_31830_33928 = state_31825__$1;
(statearr_31830_33928[(1)] = (8));

} else {
var statearr_31832_33929 = state_31825__$1;
(statearr_31832_33929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (20))){
var inst_31761 = (state_31825[(7)]);
var state_31825__$1 = state_31825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31825__$1,(23),out,inst_31761);
} else {
if((state_val_31826 === (1))){
var inst_31742 = calc_state();
var inst_31743 = cljs.core.__destructure_map(inst_31742);
var inst_31745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31743,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31743,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31743,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31748 = inst_31742;
var state_31825__$1 = (function (){var statearr_31835 = state_31825;
(statearr_31835[(8)] = inst_31745);

(statearr_31835[(9)] = inst_31748);

(statearr_31835[(10)] = inst_31746);

(statearr_31835[(11)] = inst_31747);

return statearr_31835;
})();
var statearr_31837_33933 = state_31825__$1;
(statearr_31837_33933[(2)] = null);

(statearr_31837_33933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (24))){
var inst_31751 = (state_31825[(12)]);
var inst_31748 = inst_31751;
var state_31825__$1 = (function (){var statearr_31839 = state_31825;
(statearr_31839[(9)] = inst_31748);

return statearr_31839;
})();
var statearr_31840_33934 = state_31825__$1;
(statearr_31840_33934[(2)] = null);

(statearr_31840_33934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (4))){
var inst_31761 = (state_31825[(7)]);
var inst_31771 = (state_31825[(13)]);
var inst_31759 = (state_31825[(2)]);
var inst_31761__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31759,(0),null);
var inst_31763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31759,(1),null);
var inst_31771__$1 = (inst_31761__$1 == null);
var state_31825__$1 = (function (){var statearr_31845 = state_31825;
(statearr_31845[(7)] = inst_31761__$1);

(statearr_31845[(13)] = inst_31771__$1);

(statearr_31845[(14)] = inst_31763);

return statearr_31845;
})();
if(cljs.core.truth_(inst_31771__$1)){
var statearr_31847_33935 = state_31825__$1;
(statearr_31847_33935[(1)] = (5));

} else {
var statearr_31848_33939 = state_31825__$1;
(statearr_31848_33939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (15))){
var inst_31797 = (state_31825[(15)]);
var inst_31752 = (state_31825[(16)]);
var inst_31797__$1 = cljs.core.empty_QMARK_(inst_31752);
var state_31825__$1 = (function (){var statearr_31850 = state_31825;
(statearr_31850[(15)] = inst_31797__$1);

return statearr_31850;
})();
if(inst_31797__$1){
var statearr_31851_33940 = state_31825__$1;
(statearr_31851_33940[(1)] = (17));

} else {
var statearr_31852_33941 = state_31825__$1;
(statearr_31852_33941[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (21))){
var inst_31751 = (state_31825[(12)]);
var inst_31748 = inst_31751;
var state_31825__$1 = (function (){var statearr_31855 = state_31825;
(statearr_31855[(9)] = inst_31748);

return statearr_31855;
})();
var statearr_31857_33942 = state_31825__$1;
(statearr_31857_33942[(2)] = null);

(statearr_31857_33942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (13))){
var inst_31785 = (state_31825[(2)]);
var inst_31786 = calc_state();
var inst_31748 = inst_31786;
var state_31825__$1 = (function (){var statearr_31860 = state_31825;
(statearr_31860[(9)] = inst_31748);

(statearr_31860[(17)] = inst_31785);

return statearr_31860;
})();
var statearr_31861_33947 = state_31825__$1;
(statearr_31861_33947[(2)] = null);

(statearr_31861_33947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (22))){
var inst_31817 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
var statearr_31866_33948 = state_31825__$1;
(statearr_31866_33948[(2)] = inst_31817);

(statearr_31866_33948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (6))){
var inst_31763 = (state_31825[(14)]);
var inst_31774 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31763,change);
var state_31825__$1 = state_31825;
var statearr_31867_33949 = state_31825__$1;
(statearr_31867_33949[(2)] = inst_31774);

(statearr_31867_33949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (25))){
var state_31825__$1 = state_31825;
var statearr_31868_33950 = state_31825__$1;
(statearr_31868_33950[(2)] = null);

(statearr_31868_33950[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (17))){
var inst_31763 = (state_31825[(14)]);
var inst_31753 = (state_31825[(18)]);
var inst_31799 = (inst_31753.cljs$core$IFn$_invoke$arity$1 ? inst_31753.cljs$core$IFn$_invoke$arity$1(inst_31763) : inst_31753.call(null,inst_31763));
var inst_31800 = cljs.core.not(inst_31799);
var state_31825__$1 = state_31825;
var statearr_31874_33952 = state_31825__$1;
(statearr_31874_33952[(2)] = inst_31800);

(statearr_31874_33952[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (3))){
var inst_31821 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31825__$1,inst_31821);
} else {
if((state_val_31826 === (12))){
var state_31825__$1 = state_31825;
var statearr_31876_33953 = state_31825__$1;
(statearr_31876_33953[(2)] = null);

(statearr_31876_33953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (2))){
var inst_31751 = (state_31825[(12)]);
var inst_31748 = (state_31825[(9)]);
var inst_31751__$1 = cljs.core.__destructure_map(inst_31748);
var inst_31752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31751__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31751__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31751__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31825__$1 = (function (){var statearr_31879 = state_31825;
(statearr_31879[(16)] = inst_31752);

(statearr_31879[(12)] = inst_31751__$1);

(statearr_31879[(18)] = inst_31753);

return statearr_31879;
})();
return cljs.core.async.ioc_alts_BANG_(state_31825__$1,(4),inst_31754);
} else {
if((state_val_31826 === (23))){
var inst_31808 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
if(cljs.core.truth_(inst_31808)){
var statearr_31888_33957 = state_31825__$1;
(statearr_31888_33957[(1)] = (24));

} else {
var statearr_31889_33958 = state_31825__$1;
(statearr_31889_33958[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (19))){
var inst_31803 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
var statearr_31891_33959 = state_31825__$1;
(statearr_31891_33959[(2)] = inst_31803);

(statearr_31891_33959[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (11))){
var inst_31763 = (state_31825[(14)]);
var inst_31782 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31763);
var state_31825__$1 = state_31825;
var statearr_31895_33960 = state_31825__$1;
(statearr_31895_33960[(2)] = inst_31782);

(statearr_31895_33960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (9))){
var inst_31752 = (state_31825[(16)]);
var inst_31763 = (state_31825[(14)]);
var inst_31790 = (state_31825[(19)]);
var inst_31790__$1 = (inst_31752.cljs$core$IFn$_invoke$arity$1 ? inst_31752.cljs$core$IFn$_invoke$arity$1(inst_31763) : inst_31752.call(null,inst_31763));
var state_31825__$1 = (function (){var statearr_31898 = state_31825;
(statearr_31898[(19)] = inst_31790__$1);

return statearr_31898;
})();
if(cljs.core.truth_(inst_31790__$1)){
var statearr_31902_33961 = state_31825__$1;
(statearr_31902_33961[(1)] = (14));

} else {
var statearr_31903_33962 = state_31825__$1;
(statearr_31903_33962[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (5))){
var inst_31771 = (state_31825[(13)]);
var state_31825__$1 = state_31825;
var statearr_31905_33963 = state_31825__$1;
(statearr_31905_33963[(2)] = inst_31771);

(statearr_31905_33963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (14))){
var inst_31790 = (state_31825[(19)]);
var state_31825__$1 = state_31825;
var statearr_31906_33964 = state_31825__$1;
(statearr_31906_33964[(2)] = inst_31790);

(statearr_31906_33964[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (26))){
var inst_31813 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
var statearr_31910_33965 = state_31825__$1;
(statearr_31910_33965[(2)] = inst_31813);

(statearr_31910_33965[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (16))){
var inst_31805 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
if(cljs.core.truth_(inst_31805)){
var statearr_31912_33966 = state_31825__$1;
(statearr_31912_33966[(1)] = (20));

} else {
var statearr_31914_33967 = state_31825__$1;
(statearr_31914_33967[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (10))){
var inst_31819 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
var statearr_31920_33968 = state_31825__$1;
(statearr_31920_33968[(2)] = inst_31819);

(statearr_31920_33968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (18))){
var inst_31797 = (state_31825[(15)]);
var state_31825__$1 = state_31825;
var statearr_31921_33969 = state_31825__$1;
(statearr_31921_33969[(2)] = inst_31797);

(statearr_31921_33969[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (8))){
var inst_31761 = (state_31825[(7)]);
var inst_31780 = (inst_31761 == null);
var state_31825__$1 = state_31825;
if(cljs.core.truth_(inst_31780)){
var statearr_31922_33970 = state_31825__$1;
(statearr_31922_33970[(1)] = (11));

} else {
var statearr_31923_33971 = state_31825__$1;
(statearr_31923_33971[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28919__auto__ = null;
var cljs$core$async$mix_$_state_machine__28919__auto____0 = (function (){
var statearr_31925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31925[(0)] = cljs$core$async$mix_$_state_machine__28919__auto__);

(statearr_31925[(1)] = (1));

return statearr_31925;
});
var cljs$core$async$mix_$_state_machine__28919__auto____1 = (function (state_31825){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_31825);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e31926){var ex__28922__auto__ = e31926;
var statearr_31928_33972 = state_31825;
(statearr_31928_33972[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_31825[(4)]))){
var statearr_31930_33973 = state_31825;
(statearr_31930_33973[(1)] = cljs.core.first((state_31825[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33974 = state_31825;
state_31825 = G__33974;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28919__auto__ = function(state_31825){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28919__auto____1.call(this,state_31825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28919__auto____0;
cljs$core$async$mix_$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28919__auto____1;
return cljs$core$async$mix_$_state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_31939 = f__29491__auto__();
(statearr_31939[(6)] = c__29490__auto___33927);

return statearr_31939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33976 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33976(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33977 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33977(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33978 = (function() {
var G__33979 = null;
var G__33979__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33979__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33979 = function(p,v){
switch(arguments.length){
case 1:
return G__33979__1.call(this,p);
case 2:
return G__33979__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33979.cljs$core$IFn$_invoke$arity$1 = G__33979__1;
G__33979.cljs$core$IFn$_invoke$arity$2 = G__33979__2;
return G__33979;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31982 = arguments.length;
switch (G__31982) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33978(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33978(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31994 = arguments.length;
switch (G__31994) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31989_SHARP_){
if(cljs.core.truth_((p1__31989_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31989_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31989_SHARP_.call(null,topic)))){
return p1__31989_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31989_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32022 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32023){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32023 = meta32023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32024,meta32023__$1){
var self__ = this;
var _32024__$1 = this;
return (new cljs.core.async.t_cljs$core$async32022(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32023__$1));
}));

(cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32024){
var self__ = this;
var _32024__$1 = this;
return self__.meta32023;
}));

(cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32023","meta32023",-1340640022,null)], null);
}));

(cljs.core.async.t_cljs$core$async32022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32022");

(cljs.core.async.t_cljs$core$async32022.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32022.
 */
cljs.core.async.__GT_t_cljs$core$async32022 = (function cljs$core$async$__GT_t_cljs$core$async32022(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32023){
return (new cljs.core.async.t_cljs$core$async32022(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32023));
});

}

return (new cljs.core.async.t_cljs$core$async32022(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29490__auto___33995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_32150){
var state_val_32151 = (state_32150[(1)]);
if((state_val_32151 === (7))){
var inst_32138 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32160_33996 = state_32150__$1;
(statearr_32160_33996[(2)] = inst_32138);

(statearr_32160_33996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (20))){
var state_32150__$1 = state_32150;
var statearr_32161_33998 = state_32150__$1;
(statearr_32161_33998[(2)] = null);

(statearr_32161_33998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (1))){
var state_32150__$1 = state_32150;
var statearr_32163_33999 = state_32150__$1;
(statearr_32163_33999[(2)] = null);

(statearr_32163_33999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (24))){
var inst_32121 = (state_32150[(7)]);
var inst_32130 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32121);
var state_32150__$1 = state_32150;
var statearr_32164_34000 = state_32150__$1;
(statearr_32164_34000[(2)] = inst_32130);

(statearr_32164_34000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (4))){
var inst_32070 = (state_32150[(8)]);
var inst_32070__$1 = (state_32150[(2)]);
var inst_32071 = (inst_32070__$1 == null);
var state_32150__$1 = (function (){var statearr_32167 = state_32150;
(statearr_32167[(8)] = inst_32070__$1);

return statearr_32167;
})();
if(cljs.core.truth_(inst_32071)){
var statearr_32168_34002 = state_32150__$1;
(statearr_32168_34002[(1)] = (5));

} else {
var statearr_32169_34003 = state_32150__$1;
(statearr_32169_34003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (15))){
var inst_32115 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32173_34004 = state_32150__$1;
(statearr_32173_34004[(2)] = inst_32115);

(statearr_32173_34004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (21))){
var inst_32135 = (state_32150[(2)]);
var state_32150__$1 = (function (){var statearr_32178 = state_32150;
(statearr_32178[(9)] = inst_32135);

return statearr_32178;
})();
var statearr_32179_34005 = state_32150__$1;
(statearr_32179_34005[(2)] = null);

(statearr_32179_34005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (13))){
var inst_32097 = (state_32150[(10)]);
var inst_32099 = cljs.core.chunked_seq_QMARK_(inst_32097);
var state_32150__$1 = state_32150;
if(inst_32099){
var statearr_32190_34006 = state_32150__$1;
(statearr_32190_34006[(1)] = (16));

} else {
var statearr_32192_34007 = state_32150__$1;
(statearr_32192_34007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (22))){
var inst_32127 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
if(cljs.core.truth_(inst_32127)){
var statearr_32197_34008 = state_32150__$1;
(statearr_32197_34008[(1)] = (23));

} else {
var statearr_32198_34009 = state_32150__$1;
(statearr_32198_34009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (6))){
var inst_32070 = (state_32150[(8)]);
var inst_32121 = (state_32150[(7)]);
var inst_32123 = (state_32150[(11)]);
var inst_32121__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32070) : topic_fn.call(null,inst_32070));
var inst_32122 = cljs.core.deref(mults);
var inst_32123__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32122,inst_32121__$1);
var state_32150__$1 = (function (){var statearr_32201 = state_32150;
(statearr_32201[(7)] = inst_32121__$1);

(statearr_32201[(11)] = inst_32123__$1);

return statearr_32201;
})();
if(cljs.core.truth_(inst_32123__$1)){
var statearr_32202_34010 = state_32150__$1;
(statearr_32202_34010[(1)] = (19));

} else {
var statearr_32203_34011 = state_32150__$1;
(statearr_32203_34011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (25))){
var inst_32132 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32205_34012 = state_32150__$1;
(statearr_32205_34012[(2)] = inst_32132);

(statearr_32205_34012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (17))){
var inst_32097 = (state_32150[(10)]);
var inst_32106 = cljs.core.first(inst_32097);
var inst_32107 = cljs.core.async.muxch_STAR_(inst_32106);
var inst_32108 = cljs.core.async.close_BANG_(inst_32107);
var inst_32109 = cljs.core.next(inst_32097);
var inst_32080 = inst_32109;
var inst_32081 = null;
var inst_32082 = (0);
var inst_32083 = (0);
var state_32150__$1 = (function (){var statearr_32207 = state_32150;
(statearr_32207[(12)] = inst_32082);

(statearr_32207[(13)] = inst_32081);

(statearr_32207[(14)] = inst_32108);

(statearr_32207[(15)] = inst_32080);

(statearr_32207[(16)] = inst_32083);

return statearr_32207;
})();
var statearr_32208_34013 = state_32150__$1;
(statearr_32208_34013[(2)] = null);

(statearr_32208_34013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (3))){
var inst_32140 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32150__$1,inst_32140);
} else {
if((state_val_32151 === (12))){
var inst_32117 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32209_34014 = state_32150__$1;
(statearr_32209_34014[(2)] = inst_32117);

(statearr_32209_34014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (2))){
var state_32150__$1 = state_32150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32150__$1,(4),ch);
} else {
if((state_val_32151 === (23))){
var state_32150__$1 = state_32150;
var statearr_32211_34015 = state_32150__$1;
(statearr_32211_34015[(2)] = null);

(statearr_32211_34015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (19))){
var inst_32070 = (state_32150[(8)]);
var inst_32123 = (state_32150[(11)]);
var inst_32125 = cljs.core.async.muxch_STAR_(inst_32123);
var state_32150__$1 = state_32150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32150__$1,(22),inst_32125,inst_32070);
} else {
if((state_val_32151 === (11))){
var inst_32097 = (state_32150[(10)]);
var inst_32080 = (state_32150[(15)]);
var inst_32097__$1 = cljs.core.seq(inst_32080);
var state_32150__$1 = (function (){var statearr_32212 = state_32150;
(statearr_32212[(10)] = inst_32097__$1);

return statearr_32212;
})();
if(inst_32097__$1){
var statearr_32213_34016 = state_32150__$1;
(statearr_32213_34016[(1)] = (13));

} else {
var statearr_32214_34017 = state_32150__$1;
(statearr_32214_34017[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (9))){
var inst_32119 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32215_34018 = state_32150__$1;
(statearr_32215_34018[(2)] = inst_32119);

(statearr_32215_34018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (5))){
var inst_32077 = cljs.core.deref(mults);
var inst_32078 = cljs.core.vals(inst_32077);
var inst_32079 = cljs.core.seq(inst_32078);
var inst_32080 = inst_32079;
var inst_32081 = null;
var inst_32082 = (0);
var inst_32083 = (0);
var state_32150__$1 = (function (){var statearr_32216 = state_32150;
(statearr_32216[(12)] = inst_32082);

(statearr_32216[(13)] = inst_32081);

(statearr_32216[(15)] = inst_32080);

(statearr_32216[(16)] = inst_32083);

return statearr_32216;
})();
var statearr_32218_34019 = state_32150__$1;
(statearr_32218_34019[(2)] = null);

(statearr_32218_34019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (14))){
var state_32150__$1 = state_32150;
var statearr_32224_34020 = state_32150__$1;
(statearr_32224_34020[(2)] = null);

(statearr_32224_34020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (16))){
var inst_32097 = (state_32150[(10)]);
var inst_32101 = cljs.core.chunk_first(inst_32097);
var inst_32102 = cljs.core.chunk_rest(inst_32097);
var inst_32103 = cljs.core.count(inst_32101);
var inst_32080 = inst_32102;
var inst_32081 = inst_32101;
var inst_32082 = inst_32103;
var inst_32083 = (0);
var state_32150__$1 = (function (){var statearr_32232 = state_32150;
(statearr_32232[(12)] = inst_32082);

(statearr_32232[(13)] = inst_32081);

(statearr_32232[(15)] = inst_32080);

(statearr_32232[(16)] = inst_32083);

return statearr_32232;
})();
var statearr_32233_34021 = state_32150__$1;
(statearr_32233_34021[(2)] = null);

(statearr_32233_34021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (10))){
var inst_32082 = (state_32150[(12)]);
var inst_32081 = (state_32150[(13)]);
var inst_32080 = (state_32150[(15)]);
var inst_32083 = (state_32150[(16)]);
var inst_32088 = cljs.core._nth(inst_32081,inst_32083);
var inst_32092 = cljs.core.async.muxch_STAR_(inst_32088);
var inst_32093 = cljs.core.async.close_BANG_(inst_32092);
var inst_32094 = (inst_32083 + (1));
var tmp32221 = inst_32082;
var tmp32222 = inst_32081;
var tmp32223 = inst_32080;
var inst_32080__$1 = tmp32223;
var inst_32081__$1 = tmp32222;
var inst_32082__$1 = tmp32221;
var inst_32083__$1 = inst_32094;
var state_32150__$1 = (function (){var statearr_32236 = state_32150;
(statearr_32236[(12)] = inst_32082__$1);

(statearr_32236[(13)] = inst_32081__$1);

(statearr_32236[(15)] = inst_32080__$1);

(statearr_32236[(17)] = inst_32093);

(statearr_32236[(16)] = inst_32083__$1);

return statearr_32236;
})();
var statearr_32237_34027 = state_32150__$1;
(statearr_32237_34027[(2)] = null);

(statearr_32237_34027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (18))){
var inst_32112 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32239_34028 = state_32150__$1;
(statearr_32239_34028[(2)] = inst_32112);

(statearr_32239_34028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (8))){
var inst_32082 = (state_32150[(12)]);
var inst_32083 = (state_32150[(16)]);
var inst_32085 = (inst_32083 < inst_32082);
var inst_32086 = inst_32085;
var state_32150__$1 = state_32150;
if(cljs.core.truth_(inst_32086)){
var statearr_32240_34030 = state_32150__$1;
(statearr_32240_34030[(1)] = (10));

} else {
var statearr_32242_34031 = state_32150__$1;
(statearr_32242_34031[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28919__auto__ = null;
var cljs$core$async$state_machine__28919__auto____0 = (function (){
var statearr_32247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32247[(0)] = cljs$core$async$state_machine__28919__auto__);

(statearr_32247[(1)] = (1));

return statearr_32247;
});
var cljs$core$async$state_machine__28919__auto____1 = (function (state_32150){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_32150);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e32253){var ex__28922__auto__ = e32253;
var statearr_32258_34035 = state_32150;
(statearr_32258_34035[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_32150[(4)]))){
var statearr_32259_34036 = state_32150;
(statearr_32259_34036[(1)] = cljs.core.first((state_32150[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34037 = state_32150;
state_32150 = G__34037;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$state_machine__28919__auto__ = function(state_32150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28919__auto____1.call(this,state_32150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28919__auto____0;
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28919__auto____1;
return cljs$core$async$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_32265 = f__29491__auto__();
(statearr_32265[(6)] = c__29490__auto___33995);

return statearr_32265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32274 = arguments.length;
switch (G__32274) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32295 = arguments.length;
switch (G__32295) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32297 = arguments.length;
switch (G__32297) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29490__auto___34052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_32365){
var state_val_32366 = (state_32365[(1)]);
if((state_val_32366 === (7))){
var state_32365__$1 = state_32365;
var statearr_32367_34057 = state_32365__$1;
(statearr_32367_34057[(2)] = null);

(statearr_32367_34057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (1))){
var state_32365__$1 = state_32365;
var statearr_32368_34058 = state_32365__$1;
(statearr_32368_34058[(2)] = null);

(statearr_32368_34058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (4))){
var inst_32308 = (state_32365[(7)]);
var inst_32310 = (state_32365[(8)]);
var inst_32313 = (inst_32310 < inst_32308);
var state_32365__$1 = state_32365;
if(cljs.core.truth_(inst_32313)){
var statearr_32370_34059 = state_32365__$1;
(statearr_32370_34059[(1)] = (6));

} else {
var statearr_32371_34060 = state_32365__$1;
(statearr_32371_34060[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (15))){
var inst_32347 = (state_32365[(9)]);
var inst_32352 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32347);
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32365__$1,(17),out,inst_32352);
} else {
if((state_val_32366 === (13))){
var inst_32347 = (state_32365[(9)]);
var inst_32347__$1 = (state_32365[(2)]);
var inst_32348 = cljs.core.some(cljs.core.nil_QMARK_,inst_32347__$1);
var state_32365__$1 = (function (){var statearr_32375 = state_32365;
(statearr_32375[(9)] = inst_32347__$1);

return statearr_32375;
})();
if(cljs.core.truth_(inst_32348)){
var statearr_32376_34061 = state_32365__$1;
(statearr_32376_34061[(1)] = (14));

} else {
var statearr_32377_34062 = state_32365__$1;
(statearr_32377_34062[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (6))){
var state_32365__$1 = state_32365;
var statearr_32378_34063 = state_32365__$1;
(statearr_32378_34063[(2)] = null);

(statearr_32378_34063[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (17))){
var inst_32354 = (state_32365[(2)]);
var state_32365__$1 = (function (){var statearr_32384 = state_32365;
(statearr_32384[(10)] = inst_32354);

return statearr_32384;
})();
var statearr_32385_34064 = state_32365__$1;
(statearr_32385_34064[(2)] = null);

(statearr_32385_34064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (3))){
var inst_32359 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32365__$1,inst_32359);
} else {
if((state_val_32366 === (12))){
var _ = (function (){var statearr_32388 = state_32365;
(statearr_32388[(4)] = cljs.core.rest((state_32365[(4)])));

return statearr_32388;
})();
var state_32365__$1 = state_32365;
var ex32383 = (state_32365__$1[(2)]);
var statearr_32390_34065 = state_32365__$1;
(statearr_32390_34065[(5)] = ex32383);


if((ex32383 instanceof Object)){
var statearr_32396_34066 = state_32365__$1;
(statearr_32396_34066[(1)] = (11));

(statearr_32396_34066[(5)] = null);

} else {
throw ex32383;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (2))){
var inst_32307 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32308 = cnt;
var inst_32310 = (0);
var state_32365__$1 = (function (){var statearr_32404 = state_32365;
(statearr_32404[(7)] = inst_32308);

(statearr_32404[(8)] = inst_32310);

(statearr_32404[(11)] = inst_32307);

return statearr_32404;
})();
var statearr_32405_34069 = state_32365__$1;
(statearr_32405_34069[(2)] = null);

(statearr_32405_34069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (11))){
var inst_32322 = (state_32365[(2)]);
var inst_32325 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32365__$1 = (function (){var statearr_32413 = state_32365;
(statearr_32413[(12)] = inst_32322);

return statearr_32413;
})();
var statearr_32414_34070 = state_32365__$1;
(statearr_32414_34070[(2)] = inst_32325);

(statearr_32414_34070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (9))){
var inst_32310 = (state_32365[(8)]);
var _ = (function (){var statearr_32415 = state_32365;
(statearr_32415[(4)] = cljs.core.cons((12),(state_32365[(4)])));

return statearr_32415;
})();
var inst_32332 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32310) : chs__$1.call(null,inst_32310));
var inst_32333 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32310) : done.call(null,inst_32310));
var inst_32334 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32332,inst_32333);
var ___$1 = (function (){var statearr_32420 = state_32365;
(statearr_32420[(4)] = cljs.core.rest((state_32365[(4)])));

return statearr_32420;
})();
var state_32365__$1 = state_32365;
var statearr_32421_34072 = state_32365__$1;
(statearr_32421_34072[(2)] = inst_32334);

(statearr_32421_34072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (5))){
var inst_32345 = (state_32365[(2)]);
var state_32365__$1 = (function (){var statearr_32422 = state_32365;
(statearr_32422[(13)] = inst_32345);

return statearr_32422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32365__$1,(13),dchan);
} else {
if((state_val_32366 === (14))){
var inst_32350 = cljs.core.async.close_BANG_(out);
var state_32365__$1 = state_32365;
var statearr_32424_34074 = state_32365__$1;
(statearr_32424_34074[(2)] = inst_32350);

(statearr_32424_34074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (16))){
var inst_32357 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32425_34075 = state_32365__$1;
(statearr_32425_34075[(2)] = inst_32357);

(statearr_32425_34075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (10))){
var inst_32310 = (state_32365[(8)]);
var inst_32337 = (state_32365[(2)]);
var inst_32339 = (inst_32310 + (1));
var inst_32310__$1 = inst_32339;
var state_32365__$1 = (function (){var statearr_32426 = state_32365;
(statearr_32426[(14)] = inst_32337);

(statearr_32426[(8)] = inst_32310__$1);

return statearr_32426;
})();
var statearr_32427_34077 = state_32365__$1;
(statearr_32427_34077[(2)] = null);

(statearr_32427_34077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (8))){
var inst_32343 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32429_34078 = state_32365__$1;
(statearr_32429_34078[(2)] = inst_32343);

(statearr_32429_34078[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28919__auto__ = null;
var cljs$core$async$state_machine__28919__auto____0 = (function (){
var statearr_32431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32431[(0)] = cljs$core$async$state_machine__28919__auto__);

(statearr_32431[(1)] = (1));

return statearr_32431;
});
var cljs$core$async$state_machine__28919__auto____1 = (function (state_32365){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_32365);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e32434){var ex__28922__auto__ = e32434;
var statearr_32435_34080 = state_32365;
(statearr_32435_34080[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_32365[(4)]))){
var statearr_32436_34081 = state_32365;
(statearr_32436_34081[(1)] = cljs.core.first((state_32365[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34082 = state_32365;
state_32365 = G__34082;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$state_machine__28919__auto__ = function(state_32365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28919__auto____1.call(this,state_32365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28919__auto____0;
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28919__auto____1;
return cljs$core$async$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_32440 = f__29491__auto__();
(statearr_32440[(6)] = c__29490__auto___34052);

return statearr_32440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32448 = arguments.length;
switch (G__32448) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29490__auto___34084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_32489){
var state_val_32490 = (state_32489[(1)]);
if((state_val_32490 === (7))){
var inst_32465 = (state_32489[(7)]);
var inst_32467 = (state_32489[(8)]);
var inst_32465__$1 = (state_32489[(2)]);
var inst_32467__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32465__$1,(0),null);
var inst_32468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32465__$1,(1),null);
var inst_32469 = (inst_32467__$1 == null);
var state_32489__$1 = (function (){var statearr_32494 = state_32489;
(statearr_32494[(7)] = inst_32465__$1);

(statearr_32494[(9)] = inst_32468);

(statearr_32494[(8)] = inst_32467__$1);

return statearr_32494;
})();
if(cljs.core.truth_(inst_32469)){
var statearr_32495_34089 = state_32489__$1;
(statearr_32495_34089[(1)] = (8));

} else {
var statearr_32496_34092 = state_32489__$1;
(statearr_32496_34092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (1))){
var inst_32455 = cljs.core.vec(chs);
var inst_32456 = inst_32455;
var state_32489__$1 = (function (){var statearr_32497 = state_32489;
(statearr_32497[(10)] = inst_32456);

return statearr_32497;
})();
var statearr_32499_34097 = state_32489__$1;
(statearr_32499_34097[(2)] = null);

(statearr_32499_34097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (4))){
var inst_32456 = (state_32489[(10)]);
var state_32489__$1 = state_32489;
return cljs.core.async.ioc_alts_BANG_(state_32489__$1,(7),inst_32456);
} else {
if((state_val_32490 === (6))){
var inst_32483 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32500_34098 = state_32489__$1;
(statearr_32500_34098[(2)] = inst_32483);

(statearr_32500_34098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (3))){
var inst_32486 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32489__$1,inst_32486);
} else {
if((state_val_32490 === (2))){
var inst_32456 = (state_32489[(10)]);
var inst_32458 = cljs.core.count(inst_32456);
var inst_32459 = (inst_32458 > (0));
var state_32489__$1 = state_32489;
if(cljs.core.truth_(inst_32459)){
var statearr_32504_34099 = state_32489__$1;
(statearr_32504_34099[(1)] = (4));

} else {
var statearr_32505_34100 = state_32489__$1;
(statearr_32505_34100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (11))){
var inst_32456 = (state_32489[(10)]);
var inst_32476 = (state_32489[(2)]);
var tmp32502 = inst_32456;
var inst_32456__$1 = tmp32502;
var state_32489__$1 = (function (){var statearr_32508 = state_32489;
(statearr_32508[(11)] = inst_32476);

(statearr_32508[(10)] = inst_32456__$1);

return statearr_32508;
})();
var statearr_32509_34105 = state_32489__$1;
(statearr_32509_34105[(2)] = null);

(statearr_32509_34105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (9))){
var inst_32467 = (state_32489[(8)]);
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32489__$1,(11),out,inst_32467);
} else {
if((state_val_32490 === (5))){
var inst_32481 = cljs.core.async.close_BANG_(out);
var state_32489__$1 = state_32489;
var statearr_32512_34108 = state_32489__$1;
(statearr_32512_34108[(2)] = inst_32481);

(statearr_32512_34108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (10))){
var inst_32479 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32513_34109 = state_32489__$1;
(statearr_32513_34109[(2)] = inst_32479);

(statearr_32513_34109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (8))){
var inst_32465 = (state_32489[(7)]);
var inst_32468 = (state_32489[(9)]);
var inst_32467 = (state_32489[(8)]);
var inst_32456 = (state_32489[(10)]);
var inst_32471 = (function (){var cs = inst_32456;
var vec__32461 = inst_32465;
var v = inst_32467;
var c = inst_32468;
return (function (p1__32444_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32444_SHARP_);
});
})();
var inst_32472 = cljs.core.filterv(inst_32471,inst_32456);
var inst_32456__$1 = inst_32472;
var state_32489__$1 = (function (){var statearr_32514 = state_32489;
(statearr_32514[(10)] = inst_32456__$1);

return statearr_32514;
})();
var statearr_32516_34111 = state_32489__$1;
(statearr_32516_34111[(2)] = null);

(statearr_32516_34111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28919__auto__ = null;
var cljs$core$async$state_machine__28919__auto____0 = (function (){
var statearr_32518 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32518[(0)] = cljs$core$async$state_machine__28919__auto__);

(statearr_32518[(1)] = (1));

return statearr_32518;
});
var cljs$core$async$state_machine__28919__auto____1 = (function (state_32489){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_32489);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e32522){var ex__28922__auto__ = e32522;
var statearr_32523_34114 = state_32489;
(statearr_32523_34114[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_32489[(4)]))){
var statearr_32524_34115 = state_32489;
(statearr_32524_34115[(1)] = cljs.core.first((state_32489[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34116 = state_32489;
state_32489 = G__34116;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$state_machine__28919__auto__ = function(state_32489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28919__auto____1.call(this,state_32489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28919__auto____0;
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28919__auto____1;
return cljs$core$async$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_32526 = f__29491__auto__();
(statearr_32526[(6)] = c__29490__auto___34084);

return statearr_32526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32532 = arguments.length;
switch (G__32532) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29490__auto___34119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_32560){
var state_val_32561 = (state_32560[(1)]);
if((state_val_32561 === (7))){
var inst_32542 = (state_32560[(7)]);
var inst_32542__$1 = (state_32560[(2)]);
var inst_32543 = (inst_32542__$1 == null);
var inst_32544 = cljs.core.not(inst_32543);
var state_32560__$1 = (function (){var statearr_32566 = state_32560;
(statearr_32566[(7)] = inst_32542__$1);

return statearr_32566;
})();
if(inst_32544){
var statearr_32568_34120 = state_32560__$1;
(statearr_32568_34120[(1)] = (8));

} else {
var statearr_32569_34121 = state_32560__$1;
(statearr_32569_34121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (1))){
var inst_32537 = (0);
var state_32560__$1 = (function (){var statearr_32570 = state_32560;
(statearr_32570[(8)] = inst_32537);

return statearr_32570;
})();
var statearr_32571_34123 = state_32560__$1;
(statearr_32571_34123[(2)] = null);

(statearr_32571_34123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (4))){
var state_32560__$1 = state_32560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32560__$1,(7),ch);
} else {
if((state_val_32561 === (6))){
var inst_32555 = (state_32560[(2)]);
var state_32560__$1 = state_32560;
var statearr_32573_34124 = state_32560__$1;
(statearr_32573_34124[(2)] = inst_32555);

(statearr_32573_34124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (3))){
var inst_32557 = (state_32560[(2)]);
var inst_32558 = cljs.core.async.close_BANG_(out);
var state_32560__$1 = (function (){var statearr_32574 = state_32560;
(statearr_32574[(9)] = inst_32557);

return statearr_32574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32560__$1,inst_32558);
} else {
if((state_val_32561 === (2))){
var inst_32537 = (state_32560[(8)]);
var inst_32539 = (inst_32537 < n);
var state_32560__$1 = state_32560;
if(cljs.core.truth_(inst_32539)){
var statearr_32577_34127 = state_32560__$1;
(statearr_32577_34127[(1)] = (4));

} else {
var statearr_32578_34128 = state_32560__$1;
(statearr_32578_34128[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (11))){
var inst_32537 = (state_32560[(8)]);
var inst_32547 = (state_32560[(2)]);
var inst_32548 = (inst_32537 + (1));
var inst_32537__$1 = inst_32548;
var state_32560__$1 = (function (){var statearr_32579 = state_32560;
(statearr_32579[(8)] = inst_32537__$1);

(statearr_32579[(10)] = inst_32547);

return statearr_32579;
})();
var statearr_32582_34130 = state_32560__$1;
(statearr_32582_34130[(2)] = null);

(statearr_32582_34130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (9))){
var state_32560__$1 = state_32560;
var statearr_32583_34137 = state_32560__$1;
(statearr_32583_34137[(2)] = null);

(statearr_32583_34137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (5))){
var state_32560__$1 = state_32560;
var statearr_32584_34138 = state_32560__$1;
(statearr_32584_34138[(2)] = null);

(statearr_32584_34138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (10))){
var inst_32552 = (state_32560[(2)]);
var state_32560__$1 = state_32560;
var statearr_32588_34139 = state_32560__$1;
(statearr_32588_34139[(2)] = inst_32552);

(statearr_32588_34139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (8))){
var inst_32542 = (state_32560[(7)]);
var state_32560__$1 = state_32560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32560__$1,(11),out,inst_32542);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28919__auto__ = null;
var cljs$core$async$state_machine__28919__auto____0 = (function (){
var statearr_32590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32590[(0)] = cljs$core$async$state_machine__28919__auto__);

(statearr_32590[(1)] = (1));

return statearr_32590;
});
var cljs$core$async$state_machine__28919__auto____1 = (function (state_32560){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_32560);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e32591){var ex__28922__auto__ = e32591;
var statearr_32592_34140 = state_32560;
(statearr_32592_34140[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_32560[(4)]))){
var statearr_32594_34141 = state_32560;
(statearr_32594_34141[(1)] = cljs.core.first((state_32560[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34142 = state_32560;
state_32560 = G__34142;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$state_machine__28919__auto__ = function(state_32560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28919__auto____1.call(this,state_32560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28919__auto____0;
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28919__auto____1;
return cljs$core$async$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_32602 = f__29491__auto__();
(statearr_32602[(6)] = c__29490__auto___34119);

return statearr_32602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32607 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32607 = (function (f,ch,meta32608){
this.f = f;
this.ch = ch;
this.meta32608 = meta32608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32609,meta32608__$1){
var self__ = this;
var _32609__$1 = this;
return (new cljs.core.async.t_cljs$core$async32607(self__.f,self__.ch,meta32608__$1));
}));

(cljs.core.async.t_cljs$core$async32607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32609){
var self__ = this;
var _32609__$1 = this;
return self__.meta32608;
}));

(cljs.core.async.t_cljs$core$async32607.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32607.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32607.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32622 = (function (f,ch,meta32608,_,fn1,meta32623){
this.f = f;
this.ch = ch;
this.meta32608 = meta32608;
this._ = _;
this.fn1 = fn1;
this.meta32623 = meta32623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32624,meta32623__$1){
var self__ = this;
var _32624__$1 = this;
return (new cljs.core.async.t_cljs$core$async32622(self__.f,self__.ch,self__.meta32608,self__._,self__.fn1,meta32623__$1));
}));

(cljs.core.async.t_cljs$core$async32622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32624){
var self__ = this;
var _32624__$1 = this;
return self__.meta32623;
}));

(cljs.core.async.t_cljs$core$async32622.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32622.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32605_SHARP_){
var G__32634 = (((p1__32605_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32605_SHARP_) : self__.f.call(null,p1__32605_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32634) : f1.call(null,G__32634));
});
}));

(cljs.core.async.t_cljs$core$async32622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32608","meta32608",-1684422424,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32607","cljs.core.async/t_cljs$core$async32607",-1491030617,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32623","meta32623",47260468,null)], null);
}));

(cljs.core.async.t_cljs$core$async32622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32622");

(cljs.core.async.t_cljs$core$async32622.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32622.
 */
cljs.core.async.__GT_t_cljs$core$async32622 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32622(f__$1,ch__$1,meta32608__$1,___$2,fn1__$1,meta32623){
return (new cljs.core.async.t_cljs$core$async32622(f__$1,ch__$1,meta32608__$1,___$2,fn1__$1,meta32623));
});

}

return (new cljs.core.async.t_cljs$core$async32622(self__.f,self__.ch,self__.meta32608,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32644 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32644) : self__.f.call(null,G__32644));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32607.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32608","meta32608",-1684422424,null)], null);
}));

(cljs.core.async.t_cljs$core$async32607.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32607");

(cljs.core.async.t_cljs$core$async32607.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32607");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32607.
 */
cljs.core.async.__GT_t_cljs$core$async32607 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32607(f__$1,ch__$1,meta32608){
return (new cljs.core.async.t_cljs$core$async32607(f__$1,ch__$1,meta32608));
});

}

return (new cljs.core.async.t_cljs$core$async32607(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32677 = (function (f,ch,meta32678){
this.f = f;
this.ch = ch;
this.meta32678 = meta32678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32679,meta32678__$1){
var self__ = this;
var _32679__$1 = this;
return (new cljs.core.async.t_cljs$core$async32677(self__.f,self__.ch,meta32678__$1));
}));

(cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32679){
var self__ = this;
var _32679__$1 = this;
return self__.meta32678;
}));

(cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32678","meta32678",696878259,null)], null);
}));

(cljs.core.async.t_cljs$core$async32677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32677");

(cljs.core.async.t_cljs$core$async32677.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32677.
 */
cljs.core.async.__GT_t_cljs$core$async32677 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32677(f__$1,ch__$1,meta32678){
return (new cljs.core.async.t_cljs$core$async32677(f__$1,ch__$1,meta32678));
});

}

return (new cljs.core.async.t_cljs$core$async32677(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32709 = (function (p,ch,meta32710){
this.p = p;
this.ch = ch;
this.meta32710 = meta32710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32711,meta32710__$1){
var self__ = this;
var _32711__$1 = this;
return (new cljs.core.async.t_cljs$core$async32709(self__.p,self__.ch,meta32710__$1));
}));

(cljs.core.async.t_cljs$core$async32709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32711){
var self__ = this;
var _32711__$1 = this;
return self__.meta32710;
}));

(cljs.core.async.t_cljs$core$async32709.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32709.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32709.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32709.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32710","meta32710",-1973178686,null)], null);
}));

(cljs.core.async.t_cljs$core$async32709.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32709");

(cljs.core.async.t_cljs$core$async32709.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32709");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32709.
 */
cljs.core.async.__GT_t_cljs$core$async32709 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32709(p__$1,ch__$1,meta32710){
return (new cljs.core.async.t_cljs$core$async32709(p__$1,ch__$1,meta32710));
});

}

return (new cljs.core.async.t_cljs$core$async32709(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32719 = arguments.length;
switch (G__32719) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29490__auto___34169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_32740){
var state_val_32741 = (state_32740[(1)]);
if((state_val_32741 === (7))){
var inst_32736 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
var statearr_32747_34171 = state_32740__$1;
(statearr_32747_34171[(2)] = inst_32736);

(statearr_32747_34171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (1))){
var state_32740__$1 = state_32740;
var statearr_32748_34172 = state_32740__$1;
(statearr_32748_34172[(2)] = null);

(statearr_32748_34172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (4))){
var inst_32722 = (state_32740[(7)]);
var inst_32722__$1 = (state_32740[(2)]);
var inst_32723 = (inst_32722__$1 == null);
var state_32740__$1 = (function (){var statearr_32749 = state_32740;
(statearr_32749[(7)] = inst_32722__$1);

return statearr_32749;
})();
if(cljs.core.truth_(inst_32723)){
var statearr_32750_34173 = state_32740__$1;
(statearr_32750_34173[(1)] = (5));

} else {
var statearr_32751_34174 = state_32740__$1;
(statearr_32751_34174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (6))){
var inst_32722 = (state_32740[(7)]);
var inst_32727 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32722) : p.call(null,inst_32722));
var state_32740__$1 = state_32740;
if(cljs.core.truth_(inst_32727)){
var statearr_32756_34176 = state_32740__$1;
(statearr_32756_34176[(1)] = (8));

} else {
var statearr_32760_34177 = state_32740__$1;
(statearr_32760_34177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (3))){
var inst_32738 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32740__$1,inst_32738);
} else {
if((state_val_32741 === (2))){
var state_32740__$1 = state_32740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32740__$1,(4),ch);
} else {
if((state_val_32741 === (11))){
var inst_32730 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
var statearr_32782_34179 = state_32740__$1;
(statearr_32782_34179[(2)] = inst_32730);

(statearr_32782_34179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (9))){
var state_32740__$1 = state_32740;
var statearr_32783_34180 = state_32740__$1;
(statearr_32783_34180[(2)] = null);

(statearr_32783_34180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (5))){
var inst_32725 = cljs.core.async.close_BANG_(out);
var state_32740__$1 = state_32740;
var statearr_32784_34181 = state_32740__$1;
(statearr_32784_34181[(2)] = inst_32725);

(statearr_32784_34181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (10))){
var inst_32733 = (state_32740[(2)]);
var state_32740__$1 = (function (){var statearr_32785 = state_32740;
(statearr_32785[(8)] = inst_32733);

return statearr_32785;
})();
var statearr_32786_34182 = state_32740__$1;
(statearr_32786_34182[(2)] = null);

(statearr_32786_34182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (8))){
var inst_32722 = (state_32740[(7)]);
var state_32740__$1 = state_32740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32740__$1,(11),out,inst_32722);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28919__auto__ = null;
var cljs$core$async$state_machine__28919__auto____0 = (function (){
var statearr_32792 = [null,null,null,null,null,null,null,null,null];
(statearr_32792[(0)] = cljs$core$async$state_machine__28919__auto__);

(statearr_32792[(1)] = (1));

return statearr_32792;
});
var cljs$core$async$state_machine__28919__auto____1 = (function (state_32740){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_32740);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e32793){var ex__28922__auto__ = e32793;
var statearr_32794_34185 = state_32740;
(statearr_32794_34185[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_32740[(4)]))){
var statearr_32795_34186 = state_32740;
(statearr_32795_34186[(1)] = cljs.core.first((state_32740[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34189 = state_32740;
state_32740 = G__34189;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$state_machine__28919__auto__ = function(state_32740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28919__auto____1.call(this,state_32740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28919__auto____0;
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28919__auto____1;
return cljs$core$async$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_32797 = f__29491__auto__();
(statearr_32797[(6)] = c__29490__auto___34169);

return statearr_32797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32799 = arguments.length;
switch (G__32799) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29490__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_32878){
var state_val_32879 = (state_32878[(1)]);
if((state_val_32879 === (7))){
var inst_32874 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32880_34195 = state_32878__$1;
(statearr_32880_34195[(2)] = inst_32874);

(statearr_32880_34195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (20))){
var inst_32841 = (state_32878[(7)]);
var inst_32855 = (state_32878[(2)]);
var inst_32856 = cljs.core.next(inst_32841);
var inst_32827 = inst_32856;
var inst_32828 = null;
var inst_32829 = (0);
var inst_32830 = (0);
var state_32878__$1 = (function (){var statearr_32881 = state_32878;
(statearr_32881[(8)] = inst_32827);

(statearr_32881[(9)] = inst_32830);

(statearr_32881[(10)] = inst_32828);

(statearr_32881[(11)] = inst_32829);

(statearr_32881[(12)] = inst_32855);

return statearr_32881;
})();
var statearr_32885_34197 = state_32878__$1;
(statearr_32885_34197[(2)] = null);

(statearr_32885_34197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (1))){
var state_32878__$1 = state_32878;
var statearr_32887_34198 = state_32878__$1;
(statearr_32887_34198[(2)] = null);

(statearr_32887_34198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (4))){
var inst_32816 = (state_32878[(13)]);
var inst_32816__$1 = (state_32878[(2)]);
var inst_32817 = (inst_32816__$1 == null);
var state_32878__$1 = (function (){var statearr_32888 = state_32878;
(statearr_32888[(13)] = inst_32816__$1);

return statearr_32888;
})();
if(cljs.core.truth_(inst_32817)){
var statearr_32889_34199 = state_32878__$1;
(statearr_32889_34199[(1)] = (5));

} else {
var statearr_32890_34201 = state_32878__$1;
(statearr_32890_34201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (15))){
var state_32878__$1 = state_32878;
var statearr_32896_34203 = state_32878__$1;
(statearr_32896_34203[(2)] = null);

(statearr_32896_34203[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (21))){
var state_32878__$1 = state_32878;
var statearr_32897_34204 = state_32878__$1;
(statearr_32897_34204[(2)] = null);

(statearr_32897_34204[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (13))){
var inst_32827 = (state_32878[(8)]);
var inst_32830 = (state_32878[(9)]);
var inst_32828 = (state_32878[(10)]);
var inst_32829 = (state_32878[(11)]);
var inst_32837 = (state_32878[(2)]);
var inst_32838 = (inst_32830 + (1));
var tmp32891 = inst_32827;
var tmp32892 = inst_32828;
var tmp32893 = inst_32829;
var inst_32827__$1 = tmp32891;
var inst_32828__$1 = tmp32892;
var inst_32829__$1 = tmp32893;
var inst_32830__$1 = inst_32838;
var state_32878__$1 = (function (){var statearr_32898 = state_32878;
(statearr_32898[(8)] = inst_32827__$1);

(statearr_32898[(9)] = inst_32830__$1);

(statearr_32898[(14)] = inst_32837);

(statearr_32898[(10)] = inst_32828__$1);

(statearr_32898[(11)] = inst_32829__$1);

return statearr_32898;
})();
var statearr_32902_34207 = state_32878__$1;
(statearr_32902_34207[(2)] = null);

(statearr_32902_34207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (22))){
var state_32878__$1 = state_32878;
var statearr_32903_34209 = state_32878__$1;
(statearr_32903_34209[(2)] = null);

(statearr_32903_34209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (6))){
var inst_32816 = (state_32878[(13)]);
var inst_32825 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32816) : f.call(null,inst_32816));
var inst_32826 = cljs.core.seq(inst_32825);
var inst_32827 = inst_32826;
var inst_32828 = null;
var inst_32829 = (0);
var inst_32830 = (0);
var state_32878__$1 = (function (){var statearr_32907 = state_32878;
(statearr_32907[(8)] = inst_32827);

(statearr_32907[(9)] = inst_32830);

(statearr_32907[(10)] = inst_32828);

(statearr_32907[(11)] = inst_32829);

return statearr_32907;
})();
var statearr_32909_34212 = state_32878__$1;
(statearr_32909_34212[(2)] = null);

(statearr_32909_34212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (17))){
var inst_32841 = (state_32878[(7)]);
var inst_32845 = cljs.core.chunk_first(inst_32841);
var inst_32846 = cljs.core.chunk_rest(inst_32841);
var inst_32847 = cljs.core.count(inst_32845);
var inst_32827 = inst_32846;
var inst_32828 = inst_32845;
var inst_32829 = inst_32847;
var inst_32830 = (0);
var state_32878__$1 = (function (){var statearr_32910 = state_32878;
(statearr_32910[(8)] = inst_32827);

(statearr_32910[(9)] = inst_32830);

(statearr_32910[(10)] = inst_32828);

(statearr_32910[(11)] = inst_32829);

return statearr_32910;
})();
var statearr_32914_34214 = state_32878__$1;
(statearr_32914_34214[(2)] = null);

(statearr_32914_34214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (3))){
var inst_32876 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32878__$1,inst_32876);
} else {
if((state_val_32879 === (12))){
var inst_32864 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32916_34215 = state_32878__$1;
(statearr_32916_34215[(2)] = inst_32864);

(statearr_32916_34215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (2))){
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32878__$1,(4),in$);
} else {
if((state_val_32879 === (23))){
var inst_32872 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32918_34216 = state_32878__$1;
(statearr_32918_34216[(2)] = inst_32872);

(statearr_32918_34216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (19))){
var inst_32859 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32921_34220 = state_32878__$1;
(statearr_32921_34220[(2)] = inst_32859);

(statearr_32921_34220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (11))){
var inst_32827 = (state_32878[(8)]);
var inst_32841 = (state_32878[(7)]);
var inst_32841__$1 = cljs.core.seq(inst_32827);
var state_32878__$1 = (function (){var statearr_32922 = state_32878;
(statearr_32922[(7)] = inst_32841__$1);

return statearr_32922;
})();
if(inst_32841__$1){
var statearr_32923_34222 = state_32878__$1;
(statearr_32923_34222[(1)] = (14));

} else {
var statearr_32929_34223 = state_32878__$1;
(statearr_32929_34223[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (9))){
var inst_32866 = (state_32878[(2)]);
var inst_32867 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32878__$1 = (function (){var statearr_32931 = state_32878;
(statearr_32931[(15)] = inst_32866);

return statearr_32931;
})();
if(cljs.core.truth_(inst_32867)){
var statearr_32932_34226 = state_32878__$1;
(statearr_32932_34226[(1)] = (21));

} else {
var statearr_32937_34227 = state_32878__$1;
(statearr_32937_34227[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (5))){
var inst_32819 = cljs.core.async.close_BANG_(out);
var state_32878__$1 = state_32878;
var statearr_32938_34228 = state_32878__$1;
(statearr_32938_34228[(2)] = inst_32819);

(statearr_32938_34228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (14))){
var inst_32841 = (state_32878[(7)]);
var inst_32843 = cljs.core.chunked_seq_QMARK_(inst_32841);
var state_32878__$1 = state_32878;
if(inst_32843){
var statearr_32939_34229 = state_32878__$1;
(statearr_32939_34229[(1)] = (17));

} else {
var statearr_32940_34230 = state_32878__$1;
(statearr_32940_34230[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (16))){
var inst_32862 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32942_34231 = state_32878__$1;
(statearr_32942_34231[(2)] = inst_32862);

(statearr_32942_34231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (10))){
var inst_32830 = (state_32878[(9)]);
var inst_32828 = (state_32878[(10)]);
var inst_32835 = cljs.core._nth(inst_32828,inst_32830);
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32878__$1,(13),out,inst_32835);
} else {
if((state_val_32879 === (18))){
var inst_32841 = (state_32878[(7)]);
var inst_32850 = cljs.core.first(inst_32841);
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32878__$1,(20),out,inst_32850);
} else {
if((state_val_32879 === (8))){
var inst_32830 = (state_32878[(9)]);
var inst_32829 = (state_32878[(11)]);
var inst_32832 = (inst_32830 < inst_32829);
var inst_32833 = inst_32832;
var state_32878__$1 = state_32878;
if(cljs.core.truth_(inst_32833)){
var statearr_32944_34236 = state_32878__$1;
(statearr_32944_34236[(1)] = (10));

} else {
var statearr_32945_34237 = state_32878__$1;
(statearr_32945_34237[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28919__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28919__auto____0 = (function (){
var statearr_32946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32946[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28919__auto__);

(statearr_32946[(1)] = (1));

return statearr_32946;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28919__auto____1 = (function (state_32878){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_32878);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e32947){var ex__28922__auto__ = e32947;
var statearr_32948_34239 = state_32878;
(statearr_32948_34239[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_32878[(4)]))){
var statearr_32949_34243 = state_32878;
(statearr_32949_34243[(1)] = cljs.core.first((state_32878[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34249 = state_32878;
state_32878 = G__34249;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28919__auto__ = function(state_32878){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28919__auto____1.call(this,state_32878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28919__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28919__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_32950 = f__29491__auto__();
(statearr_32950[(6)] = c__29490__auto__);

return statearr_32950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));

return c__29490__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32952 = arguments.length;
switch (G__32952) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32954 = arguments.length;
switch (G__32954) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32959 = arguments.length;
switch (G__32959) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29490__auto___34272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_32993){
var state_val_32994 = (state_32993[(1)]);
if((state_val_32994 === (7))){
var inst_32988 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_32998_34284 = state_32993__$1;
(statearr_32998_34284[(2)] = inst_32988);

(statearr_32998_34284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (1))){
var inst_32963 = null;
var state_32993__$1 = (function (){var statearr_32999 = state_32993;
(statearr_32999[(7)] = inst_32963);

return statearr_32999;
})();
var statearr_33000_34288 = state_32993__$1;
(statearr_33000_34288[(2)] = null);

(statearr_33000_34288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (4))){
var inst_32966 = (state_32993[(8)]);
var inst_32966__$1 = (state_32993[(2)]);
var inst_32971 = (inst_32966__$1 == null);
var inst_32972 = cljs.core.not(inst_32971);
var state_32993__$1 = (function (){var statearr_33005 = state_32993;
(statearr_33005[(8)] = inst_32966__$1);

return statearr_33005;
})();
if(inst_32972){
var statearr_33009_34294 = state_32993__$1;
(statearr_33009_34294[(1)] = (5));

} else {
var statearr_33010_34296 = state_32993__$1;
(statearr_33010_34296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (6))){
var state_32993__$1 = state_32993;
var statearr_33011_34302 = state_32993__$1;
(statearr_33011_34302[(2)] = null);

(statearr_33011_34302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (3))){
var inst_32990 = (state_32993[(2)]);
var inst_32991 = cljs.core.async.close_BANG_(out);
var state_32993__$1 = (function (){var statearr_33019 = state_32993;
(statearr_33019[(9)] = inst_32990);

return statearr_33019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32993__$1,inst_32991);
} else {
if((state_val_32994 === (2))){
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32993__$1,(4),ch);
} else {
if((state_val_32994 === (11))){
var inst_32966 = (state_32993[(8)]);
var inst_32982 = (state_32993[(2)]);
var inst_32963 = inst_32966;
var state_32993__$1 = (function (){var statearr_33025 = state_32993;
(statearr_33025[(10)] = inst_32982);

(statearr_33025[(7)] = inst_32963);

return statearr_33025;
})();
var statearr_33026_34318 = state_32993__$1;
(statearr_33026_34318[(2)] = null);

(statearr_33026_34318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (9))){
var inst_32966 = (state_32993[(8)]);
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32993__$1,(11),out,inst_32966);
} else {
if((state_val_32994 === (5))){
var inst_32963 = (state_32993[(7)]);
var inst_32966 = (state_32993[(8)]);
var inst_32974 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32966,inst_32963);
var state_32993__$1 = state_32993;
if(inst_32974){
var statearr_33034_34323 = state_32993__$1;
(statearr_33034_34323[(1)] = (8));

} else {
var statearr_33036_34325 = state_32993__$1;
(statearr_33036_34325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (10))){
var inst_32985 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33040_34329 = state_32993__$1;
(statearr_33040_34329[(2)] = inst_32985);

(statearr_33040_34329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (8))){
var inst_32963 = (state_32993[(7)]);
var tmp33030 = inst_32963;
var inst_32963__$1 = tmp33030;
var state_32993__$1 = (function (){var statearr_33045 = state_32993;
(statearr_33045[(7)] = inst_32963__$1);

return statearr_33045;
})();
var statearr_33049_34330 = state_32993__$1;
(statearr_33049_34330[(2)] = null);

(statearr_33049_34330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28919__auto__ = null;
var cljs$core$async$state_machine__28919__auto____0 = (function (){
var statearr_33054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33054[(0)] = cljs$core$async$state_machine__28919__auto__);

(statearr_33054[(1)] = (1));

return statearr_33054;
});
var cljs$core$async$state_machine__28919__auto____1 = (function (state_32993){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_32993);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e33055){var ex__28922__auto__ = e33055;
var statearr_33056_34346 = state_32993;
(statearr_33056_34346[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_32993[(4)]))){
var statearr_33057_34347 = state_32993;
(statearr_33057_34347[(1)] = cljs.core.first((state_32993[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34348 = state_32993;
state_32993 = G__34348;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$state_machine__28919__auto__ = function(state_32993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28919__auto____1.call(this,state_32993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28919__auto____0;
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28919__auto____1;
return cljs$core$async$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_33058 = f__29491__auto__();
(statearr_33058[(6)] = c__29490__auto___34272);

return statearr_33058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33062 = arguments.length;
switch (G__33062) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29490__auto___34363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_33100){
var state_val_33101 = (state_33100[(1)]);
if((state_val_33101 === (7))){
var inst_33096 = (state_33100[(2)]);
var state_33100__$1 = state_33100;
var statearr_33102_34365 = state_33100__$1;
(statearr_33102_34365[(2)] = inst_33096);

(statearr_33102_34365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (1))){
var inst_33063 = (new Array(n));
var inst_33064 = inst_33063;
var inst_33065 = (0);
var state_33100__$1 = (function (){var statearr_33103 = state_33100;
(statearr_33103[(7)] = inst_33065);

(statearr_33103[(8)] = inst_33064);

return statearr_33103;
})();
var statearr_33104_34367 = state_33100__$1;
(statearr_33104_34367[(2)] = null);

(statearr_33104_34367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (4))){
var inst_33068 = (state_33100[(9)]);
var inst_33068__$1 = (state_33100[(2)]);
var inst_33069 = (inst_33068__$1 == null);
var inst_33070 = cljs.core.not(inst_33069);
var state_33100__$1 = (function (){var statearr_33109 = state_33100;
(statearr_33109[(9)] = inst_33068__$1);

return statearr_33109;
})();
if(inst_33070){
var statearr_33111_34368 = state_33100__$1;
(statearr_33111_34368[(1)] = (5));

} else {
var statearr_33112_34369 = state_33100__$1;
(statearr_33112_34369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (15))){
var inst_33090 = (state_33100[(2)]);
var state_33100__$1 = state_33100;
var statearr_33113_34372 = state_33100__$1;
(statearr_33113_34372[(2)] = inst_33090);

(statearr_33113_34372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (13))){
var state_33100__$1 = state_33100;
var statearr_33114_34373 = state_33100__$1;
(statearr_33114_34373[(2)] = null);

(statearr_33114_34373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (6))){
var inst_33065 = (state_33100[(7)]);
var inst_33086 = (inst_33065 > (0));
var state_33100__$1 = state_33100;
if(cljs.core.truth_(inst_33086)){
var statearr_33115_34374 = state_33100__$1;
(statearr_33115_34374[(1)] = (12));

} else {
var statearr_33116_34375 = state_33100__$1;
(statearr_33116_34375[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (3))){
var inst_33098 = (state_33100[(2)]);
var state_33100__$1 = state_33100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33100__$1,inst_33098);
} else {
if((state_val_33101 === (12))){
var inst_33064 = (state_33100[(8)]);
var inst_33088 = cljs.core.vec(inst_33064);
var state_33100__$1 = state_33100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33100__$1,(15),out,inst_33088);
} else {
if((state_val_33101 === (2))){
var state_33100__$1 = state_33100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33100__$1,(4),ch);
} else {
if((state_val_33101 === (11))){
var inst_33080 = (state_33100[(2)]);
var inst_33081 = (new Array(n));
var inst_33064 = inst_33081;
var inst_33065 = (0);
var state_33100__$1 = (function (){var statearr_33120 = state_33100;
(statearr_33120[(7)] = inst_33065);

(statearr_33120[(8)] = inst_33064);

(statearr_33120[(10)] = inst_33080);

return statearr_33120;
})();
var statearr_33121_34381 = state_33100__$1;
(statearr_33121_34381[(2)] = null);

(statearr_33121_34381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (9))){
var inst_33064 = (state_33100[(8)]);
var inst_33078 = cljs.core.vec(inst_33064);
var state_33100__$1 = state_33100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33100__$1,(11),out,inst_33078);
} else {
if((state_val_33101 === (5))){
var inst_33065 = (state_33100[(7)]);
var inst_33073 = (state_33100[(11)]);
var inst_33068 = (state_33100[(9)]);
var inst_33064 = (state_33100[(8)]);
var inst_33072 = (inst_33064[inst_33065] = inst_33068);
var inst_33073__$1 = (inst_33065 + (1));
var inst_33074 = (inst_33073__$1 < n);
var state_33100__$1 = (function (){var statearr_33128 = state_33100;
(statearr_33128[(11)] = inst_33073__$1);

(statearr_33128[(12)] = inst_33072);

return statearr_33128;
})();
if(cljs.core.truth_(inst_33074)){
var statearr_33130_34382 = state_33100__$1;
(statearr_33130_34382[(1)] = (8));

} else {
var statearr_33131_34383 = state_33100__$1;
(statearr_33131_34383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (14))){
var inst_33093 = (state_33100[(2)]);
var inst_33094 = cljs.core.async.close_BANG_(out);
var state_33100__$1 = (function (){var statearr_33133 = state_33100;
(statearr_33133[(13)] = inst_33093);

return statearr_33133;
})();
var statearr_33134_34384 = state_33100__$1;
(statearr_33134_34384[(2)] = inst_33094);

(statearr_33134_34384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (10))){
var inst_33084 = (state_33100[(2)]);
var state_33100__$1 = state_33100;
var statearr_33136_34385 = state_33100__$1;
(statearr_33136_34385[(2)] = inst_33084);

(statearr_33136_34385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (8))){
var inst_33073 = (state_33100[(11)]);
var inst_33064 = (state_33100[(8)]);
var tmp33132 = inst_33064;
var inst_33064__$1 = tmp33132;
var inst_33065 = inst_33073;
var state_33100__$1 = (function (){var statearr_33138 = state_33100;
(statearr_33138[(7)] = inst_33065);

(statearr_33138[(8)] = inst_33064__$1);

return statearr_33138;
})();
var statearr_33139_34387 = state_33100__$1;
(statearr_33139_34387[(2)] = null);

(statearr_33139_34387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28919__auto__ = null;
var cljs$core$async$state_machine__28919__auto____0 = (function (){
var statearr_33140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33140[(0)] = cljs$core$async$state_machine__28919__auto__);

(statearr_33140[(1)] = (1));

return statearr_33140;
});
var cljs$core$async$state_machine__28919__auto____1 = (function (state_33100){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_33100);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e33141){var ex__28922__auto__ = e33141;
var statearr_33142_34390 = state_33100;
(statearr_33142_34390[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_33100[(4)]))){
var statearr_33143_34391 = state_33100;
(statearr_33143_34391[(1)] = cljs.core.first((state_33100[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34393 = state_33100;
state_33100 = G__34393;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$state_machine__28919__auto__ = function(state_33100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28919__auto____1.call(this,state_33100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28919__auto____0;
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28919__auto____1;
return cljs$core$async$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_33155 = f__29491__auto__();
(statearr_33155[(6)] = c__29490__auto___34363);

return statearr_33155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33163 = arguments.length;
switch (G__33163) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29490__auto___34396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29491__auto__ = (function (){var switch__28918__auto__ = (function (state_33209){
var state_val_33210 = (state_33209[(1)]);
if((state_val_33210 === (7))){
var inst_33205 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33211_34397 = state_33209__$1;
(statearr_33211_34397[(2)] = inst_33205);

(statearr_33211_34397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (1))){
var inst_33165 = [];
var inst_33166 = inst_33165;
var inst_33167 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33209__$1 = (function (){var statearr_33212 = state_33209;
(statearr_33212[(7)] = inst_33167);

(statearr_33212[(8)] = inst_33166);

return statearr_33212;
})();
var statearr_33213_34398 = state_33209__$1;
(statearr_33213_34398[(2)] = null);

(statearr_33213_34398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (4))){
var inst_33170 = (state_33209[(9)]);
var inst_33170__$1 = (state_33209[(2)]);
var inst_33171 = (inst_33170__$1 == null);
var inst_33172 = cljs.core.not(inst_33171);
var state_33209__$1 = (function (){var statearr_33219 = state_33209;
(statearr_33219[(9)] = inst_33170__$1);

return statearr_33219;
})();
if(inst_33172){
var statearr_33220_34399 = state_33209__$1;
(statearr_33220_34399[(1)] = (5));

} else {
var statearr_33221_34400 = state_33209__$1;
(statearr_33221_34400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (15))){
var inst_33166 = (state_33209[(8)]);
var inst_33197 = cljs.core.vec(inst_33166);
var state_33209__$1 = state_33209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33209__$1,(18),out,inst_33197);
} else {
if((state_val_33210 === (13))){
var inst_33192 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33223_34402 = state_33209__$1;
(statearr_33223_34402[(2)] = inst_33192);

(statearr_33223_34402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (6))){
var inst_33166 = (state_33209[(8)]);
var inst_33194 = inst_33166.length;
var inst_33195 = (inst_33194 > (0));
var state_33209__$1 = state_33209;
if(cljs.core.truth_(inst_33195)){
var statearr_33224_34403 = state_33209__$1;
(statearr_33224_34403[(1)] = (15));

} else {
var statearr_33225_34404 = state_33209__$1;
(statearr_33225_34404[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (17))){
var inst_33202 = (state_33209[(2)]);
var inst_33203 = cljs.core.async.close_BANG_(out);
var state_33209__$1 = (function (){var statearr_33226 = state_33209;
(statearr_33226[(10)] = inst_33202);

return statearr_33226;
})();
var statearr_33227_34406 = state_33209__$1;
(statearr_33227_34406[(2)] = inst_33203);

(statearr_33227_34406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (3))){
var inst_33207 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33209__$1,inst_33207);
} else {
if((state_val_33210 === (12))){
var inst_33166 = (state_33209[(8)]);
var inst_33185 = cljs.core.vec(inst_33166);
var state_33209__$1 = state_33209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33209__$1,(14),out,inst_33185);
} else {
if((state_val_33210 === (2))){
var state_33209__$1 = state_33209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33209__$1,(4),ch);
} else {
if((state_val_33210 === (11))){
var inst_33170 = (state_33209[(9)]);
var inst_33174 = (state_33209[(11)]);
var inst_33166 = (state_33209[(8)]);
var inst_33182 = inst_33166.push(inst_33170);
var tmp33237 = inst_33166;
var inst_33166__$1 = tmp33237;
var inst_33167 = inst_33174;
var state_33209__$1 = (function (){var statearr_33239 = state_33209;
(statearr_33239[(7)] = inst_33167);

(statearr_33239[(12)] = inst_33182);

(statearr_33239[(8)] = inst_33166__$1);

return statearr_33239;
})();
var statearr_33240_34416 = state_33209__$1;
(statearr_33240_34416[(2)] = null);

(statearr_33240_34416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (9))){
var inst_33167 = (state_33209[(7)]);
var inst_33178 = cljs.core.keyword_identical_QMARK_(inst_33167,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33209__$1 = state_33209;
var statearr_33242_34417 = state_33209__$1;
(statearr_33242_34417[(2)] = inst_33178);

(statearr_33242_34417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (5))){
var inst_33167 = (state_33209[(7)]);
var inst_33170 = (state_33209[(9)]);
var inst_33174 = (state_33209[(11)]);
var inst_33175 = (state_33209[(13)]);
var inst_33174__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33170) : f.call(null,inst_33170));
var inst_33175__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33174__$1,inst_33167);
var state_33209__$1 = (function (){var statearr_33243 = state_33209;
(statearr_33243[(11)] = inst_33174__$1);

(statearr_33243[(13)] = inst_33175__$1);

return statearr_33243;
})();
if(inst_33175__$1){
var statearr_33244_34418 = state_33209__$1;
(statearr_33244_34418[(1)] = (8));

} else {
var statearr_33246_34419 = state_33209__$1;
(statearr_33246_34419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (14))){
var inst_33170 = (state_33209[(9)]);
var inst_33174 = (state_33209[(11)]);
var inst_33187 = (state_33209[(2)]);
var inst_33188 = [];
var inst_33189 = inst_33188.push(inst_33170);
var inst_33166 = inst_33188;
var inst_33167 = inst_33174;
var state_33209__$1 = (function (){var statearr_33247 = state_33209;
(statearr_33247[(14)] = inst_33189);

(statearr_33247[(7)] = inst_33167);

(statearr_33247[(15)] = inst_33187);

(statearr_33247[(8)] = inst_33166);

return statearr_33247;
})();
var statearr_33249_34420 = state_33209__$1;
(statearr_33249_34420[(2)] = null);

(statearr_33249_34420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (16))){
var state_33209__$1 = state_33209;
var statearr_33250_34425 = state_33209__$1;
(statearr_33250_34425[(2)] = null);

(statearr_33250_34425[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (10))){
var inst_33180 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
if(cljs.core.truth_(inst_33180)){
var statearr_33251_34426 = state_33209__$1;
(statearr_33251_34426[(1)] = (11));

} else {
var statearr_33252_34427 = state_33209__$1;
(statearr_33252_34427[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (18))){
var inst_33199 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33253_34428 = state_33209__$1;
(statearr_33253_34428[(2)] = inst_33199);

(statearr_33253_34428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (8))){
var inst_33175 = (state_33209[(13)]);
var state_33209__$1 = state_33209;
var statearr_33255_34431 = state_33209__$1;
(statearr_33255_34431[(2)] = inst_33175);

(statearr_33255_34431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28919__auto__ = null;
var cljs$core$async$state_machine__28919__auto____0 = (function (){
var statearr_33258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33258[(0)] = cljs$core$async$state_machine__28919__auto__);

(statearr_33258[(1)] = (1));

return statearr_33258;
});
var cljs$core$async$state_machine__28919__auto____1 = (function (state_33209){
while(true){
var ret_value__28920__auto__ = (function (){try{while(true){
var result__28921__auto__ = switch__28918__auto__(state_33209);
if(cljs.core.keyword_identical_QMARK_(result__28921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28921__auto__;
}
break;
}
}catch (e33260){var ex__28922__auto__ = e33260;
var statearr_33261_34438 = state_33209;
(statearr_33261_34438[(2)] = ex__28922__auto__);


if(cljs.core.seq((state_33209[(4)]))){
var statearr_33262_34439 = state_33209;
(statearr_33262_34439[(1)] = cljs.core.first((state_33209[(4)])));

} else {
throw ex__28922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34440 = state_33209;
state_33209 = G__34440;
continue;
} else {
return ret_value__28920__auto__;
}
break;
}
});
cljs$core$async$state_machine__28919__auto__ = function(state_33209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28919__auto____1.call(this,state_33209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28919__auto____0;
cljs$core$async$state_machine__28919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28919__auto____1;
return cljs$core$async$state_machine__28919__auto__;
})()
})();
var state__29492__auto__ = (function (){var statearr_33266 = f__29491__auto__();
(statearr_33266[(6)] = c__29490__auto___34396);

return statearr_33266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29492__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
