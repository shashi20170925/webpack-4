!function(e){function n(n){for(var t,u,i=n[0],l=n[1],c=n[2],s=0,d=[];s<i.length;s++)u=i[s],o[u]&&d.push(o[u][0]),o[u]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);for(f&&f(n);d.length;)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(t=!1)}t&&(a.splice(n--,1),e=u(u.s=r[0]))}return e}var t={},o={1:0},a=[];function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=t,u.d=function(e,n,r){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(r,t,function(n){return e[n]}.bind(null,t));return r},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var f=l;a.push([10,0]),r()}([function(e,n,r){"use strict";r(2);function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,o;return n=e,(r=[{key:"render",value:function(e){var n=document.createElement("h1"),r=document.querySelector("body");n.innerHTML="Webpack is awesome. This is Page "+e,r.appendChild(n)}}])&&t(n.prototype,r),o&&t(n,o),e}();n.a=o},,function(e,n,r){},,function(e,n,r){e.exports=r.p+"96de2058085b9166de7dafbbd3e6068d.jpg"},,function(e,n,r){},,,,function(e,n,r){"use strict";r.r(n);r(6);function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.buttonClass="hello-world-button"}var n,r,o;return n=e,(r=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello World",e.classList.add(this.buttonClass),e.click=function(){var e=document.createElement("p");e.innerHTML="Hello World",e.classList.add("hello-world-text"),n.appendChild(e)};var n=document.querySelector("body");n.appendChild(e)}}])&&t(n.prototype,r),o&&t(n,o),e}(),a=r(0),u=r(1),i=r.n(u);r(4);(new a.a).render(i.a.upperFirst("Hello World page")),(new o).render(),console.log(" production build")}]);