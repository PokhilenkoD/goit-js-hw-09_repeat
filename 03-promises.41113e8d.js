var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");function i(e,t){return new Promise(((n,o)=>{l=setTimeout((()=>{Math.random()>.3?n({pos:e,time:t}):o({pos:e,time:t})}),t)}))}const s=document.querySelector(".js-form");s.addEventListener("submit",(function(e){e.preventDefault();const{amount:t,delay:n,step:o}=function(e){const t={},n=e.target.elements;for(const e in n)if(n.hasOwnProperty(e)&&e.length>1){const o=n[e].name,r=Number(n[e].value);t[o]=r}return t}(e);for(let e=1,s=0;e<=t;e+=1,s+=o)i(e,n+s).then((({pos:e,time:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({pos:e,time:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}));s.reset()}));let l=0;
//# sourceMappingURL=03-promises.41113e8d.js.map
