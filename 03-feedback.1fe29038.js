!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,d=c||v||Function("return this")(),y=Object.prototype.toString,s=Math.max,m=Math.min,b=function(){return d.Date.now()};function p(t,e,n){var r,o,a,u,f,l,c=0,v=!1,d=!1,y=!0;if("function"!=typeof t)throw new TypeError(i);function p(e){var n=r,i=o;return r=o=void 0,c=e,u=t.apply(i,n)}function w(t){return c=t,f=setTimeout(j,e),v?p(t):u}function S(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-c>=a}function j(){var t=b();if(S(t))return T(t);f=setTimeout(j,function(t){var n=e-(t-l);return d?m(n,a-(t-c)):n}(t))}function T(t){return f=void 0,y&&r?p(t):(r=o=void 0,u)}function O(){var t=b(),n=S(t);if(r=arguments,o=this,l=t,n){if(void 0===f)return w(l);if(d)return f=setTimeout(j,e),p(l)}return void 0===f&&(f=setTimeout(j,e)),u}return e=h(e)||0,g(n)&&(v=!!n.leading,a=(d="maxWait"in n)?s(h(n.maxWait)||0,e):a,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},O.flush=function(){return void 0===f?u:T(b())},O}function g(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):a.test(e)?NaN:+e}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(t,e,{leading:r,maxWait:e,trailing:o})};var w="feedback-form-state",S=document.querySelector(".feedback-form");S.addEventListener("input",t(e)((function(t){var e=!0,n=!1,r=void 0;try{for(var i,o=j[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value;t.target===a&&(M[a.name]=t.target.value.trim())}}catch(t){n=!0,r=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}localStorage.setItem(w,JSON.stringify(M))}),500)),S.addEventListener("submit",(function(t){t.preventDefault();var e=!0,n=!1,r=void 0;try{for(var i,o=j[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){if(!i.value.value)return alert("Заповніть, будь ласка, всі поля форми!")}}catch(t){n=!0,r=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}console.table(M),localStorage.removeItem(w),S.reset()}));var j=[],T=!0,O=!1,x=void 0;try{for(var N,E=S.elements[Symbol.iterator]();!(T=(N=E.next()).done);T=!0){var I=N.value;"INPUT"!==I.tagName&&"TEXTAREA"!==I.tagName||j.push(I)}}catch(t){O=!0,x=t}finally{try{T||null==E.return||E.return()}finally{if(O)throw x}}var M=JSON.parse(localStorage.getItem(w))||{};if(Object.values(M).length){var $=!0,_=!1,W=void 0;try{for(var k,A=j[Symbol.iterator]();!($=(k=A.next()).done);$=!0){var D=k.value;M[D.name]&&(D.value=M[D.name])}}catch(t){_=!0,W=t}finally{try{$||null==A.return||A.return()}finally{if(_)throw W}}}}();
//# sourceMappingURL=03-feedback.1fe29038.js.map