(window.webpackJsonp=window.webpackJsonp||[]).push([["common~create-throttled-function"],{"22WI":function(n,t,i){"use strict";var r=function(n){var t=typeof n;return null!=n&&("object"===t||"function"===t)},o=window;t.a=function(n,t,i){var e,u,a,c,f,v,d=0,m=!1,l=!1,p=!0,w=!t&&0!==t&&"function"==typeof o.requestAnimationFrame;if("function"!=typeof n)throw new TypeError("Expected a function");function s(t){var i=e,r=u;return e=u=void 0,d=t,c=n.apply(r,i)}function h(n,t){return w?(o.cancelAnimationFrame(f),o.requestAnimationFrame(n)):setTimeout(n,t)}function g(n){var i=n-v;return void 0===v||i>=t||i<0||l&&n-d>=a}function y(){var n=Date.now();if(g(n))return x(n);f=h(y,function(n){var i=n-d,r=t-(n-v);return l?Math.min(r,a-i):r}(n))}function x(n){return f=void 0,p&&e?s(n):(e=u=void 0,c)}function A(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=Date.now(),o=g(r);if(e=n,u=this,v=r,o){if(void 0===f)return function(n){return d=n,f=h(y,t),m?s(n):c}(v);if(l)return f=h(y,t),s(v)}return void 0===f&&(f=h(y,t)),c}return t=+t||0,r(i)&&(m=!!i.leading,a=(l="maxWait"in i)?Math.max(+i.maxWait||0,t):a,p="trailing"in i?!!i.trailing:p),A.cancel=function(){void 0!==f&&function(n){if(w)return o.cancelAnimationFrame(n);clearTimeout(n)}(f),d=0,e=v=u=f=void 0},A.flush=function(){return void 0===f?c:x(Date.now())},A.pending=function(){return void 0!==f},A}}}]);