
shadow.cljs.devtools.client.env.module_loaded('client');

try { simple.core.run(); } catch (e) { console.error("An error occurred when calling (simple.core/run)"); throw(e); }