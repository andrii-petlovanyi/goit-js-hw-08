function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(h,t),l?y(e):f}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function h(){var e=m();if(T(e))return O(e);a=setTimeout(h,function(e){var n=t-(e-u);return s?v(n,i-(e-c)):n}(e))}function O(e){return a=void 0,p&&o?y(e):(o=r=void 0,f)}function w(){var e=m(),n=T(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},w.flush=function(){return void 0===a?f:O(m())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");y.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),y.addEventListener("submit",(function(e){e.preventDefault();for(const e of j)if(!e.value)return alert("Заповніть, будь ласка, всі поля форми!");console.table(T),localStorage.removeItem("feedback-form-state"),y.reset()}));let j=[];for(const e of y.elements)"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName||j.push(e);const T=JSON.parse(localStorage.getItem("feedback-form-state"))||{};if(Object.values(T).length)for(const[e,t]of Object.entries(T))t&&(y.elements[e].value=t);
//# sourceMappingURL=03-feedback.00ef1fee.js.map
