!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({pos:e,time:n}):o({pos:e,time:n})}),n)}))}var a=document.querySelector(".js-form");a.addEventListener("submit",(function(e){e.preventDefault();for(var n=function(e){var n={},t=e.target.elements;for(var o in t)if(t.hasOwnProperty(o)&&o.length>1){var r=t[o].name,i=Number(t[o].value);n[r]=i}return n}(e),t=n.amount,o=n.delay,u=n.step,c=1,f=0;c<=t;c+=1,f+=u)i(c,o+f).then((function(e){var n=e.pos,t=e.time;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.pos,t=e.time;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}));a.reset()}))}();
//# sourceMappingURL=03-promises.26699623.js.map
