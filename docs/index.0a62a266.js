var t,r,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequired120;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var r=o[t];delete o[t];var e={id:t,exports:{}};return n[t]=e,r.call(e.exports,e,e.exports),e.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,r){o[t]=r},e.parcelRequired120=a),a.register("9gBlp",function(t,r){var e=a("1DySm"),n=a("1Wbuo"),o=r&&!r.nodeType&&r,i=o&&t&&!t.nodeType&&t,u=i&&i.exports===o?e.Buffer:void 0,c=u?u.isBuffer:void 0;t.exports=c||n}),a.register("1DySm",function(t,r){var e=a("8X2yT"),n="object"==typeof self&&self&&self.Object===Object&&self,o=e||n||Function("return this")();t.exports=o}),a.register("8X2yT",function(t,r){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}),a.register("1Wbuo",function(t,r){t.exports=function(){return!1}}),a.register("iU8uW",function(t,r){var e=a("8X2yT"),n=r&&!r.nodeType&&r,o=n&&t&&!t.nodeType&&t,i=o&&o.exports===n&&e.process,u=function(){try{var t=o&&o.require&&o.require("util").types;if(t)return t;return i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=u}),a.register("gw5oW",function(t,r){var e=a("1DySm"),n=r&&!r.nodeType&&r,o=n&&t&&!t.nodeType&&t,i=o&&o.exports===n?e.Buffer:void 0,u=i?i.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var e=t.length,n=u?u(e):new t.constructor(e);return t.copy(n),n}}),a.register("bwTS6",function(t,r){t.exports={StazioneHeader:a("3Gahr")}}),a.register("3Gahr",function(t,r){t.exports=class extends HTMLElement{connectedCallback(){let t=this.attachShadow({mode:"open"}),r=document.createElement("style");t.appendChild(r),r.innerHTML=`
header {
    padding: 1rem;
    background-color: rgb(28, 52, 144);
}`;let e=document.createElement("header"),n=document.createElement("img");n.src="https://caffestazione.com.au/logo-white-on-blue.jpg",n.alt="Caffe Stazione",e.appendChild(n),t.appendChild(e)}constructor(){super()}}});var i={},u={},c={},s={},f={},l={},p={},v={},b={};b=function(){this.__data__=[],this.size=0};var y={},h={},d={};d=function(t,r){return t===r||t!=t&&r!=r},h=function(t,r){for(var e=t.length;e--;)if(d(t[e][0],r))return e;return -1};var _=Array.prototype.splice;y=function(t){var r=this.__data__,e=h(r,t);return!(e<0)&&(e==r.length-1?r.pop():_.call(r,e,1),--this.size,!0)};var j={};j=function(t){var r=this.__data__,e=h(r,t);return e<0?void 0:r[e][1]};var g={};g=function(t){return h(this.__data__,t)>-1};var m={};function w(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}m=function(t,r){var e=this.__data__,n=h(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this},w.prototype.clear=b,w.prototype.delete=y,w.prototype.get=j,w.prototype.has=g,w.prototype.set=m,v=w;var O={};O=function(){this.__data__=new v,this.size=0};var A={};A=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var S={};S=function(t){return this.__data__.get(t)};var x={};x=function(t){return this.__data__.has(t)};var P={},E={},z={},k={},C={},D={},T={},F=a("1DySm");T=F.Symbol;var M={},U=Object.prototype,B=U.hasOwnProperty,$=U.toString,I=T?T.toStringTag:void 0;M=function(t){var r=B.call(t,I),e=t[I];try{t[I]=void 0;var n=!0}catch(t){}var o=$.call(t);return n&&(r?t[I]=e:delete t[I]),o};var W={},L=Object.prototype.toString;W=function(t){return L.call(t)};var N=T?T.toStringTag:void 0;D=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":N&&N in Object(t)?M(t):W(t)};var R={};R=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},C=function(t){if(!R(t))return!1;var r=D(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r};var V={},q={},F=a("1DySm");q=F["__core-js_shared__"];var G=function(){var t=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();V=function(t){return!!G&&G in t};var H={},X=Function.prototype.toString;H=function(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var K=/^\[object .+?Constructor\]$/,J=Object.prototype,Q=Function.prototype.toString,Y=J.hasOwnProperty,Z=RegExp("^"+Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");k=function(t){return!(!R(t)||V(t))&&(C(t)?Z:K).test(H(t))};var tt={};tt=function(t,r){return null==t?void 0:t[r]},z=function(t,r){var e=tt(t,r);return k(e)?e:void 0};var F=a("1DySm");E=z(F,"Map");var tr={},te={},tn={},to={},ta={};ta=z(Object,"create"),to=function(){this.__data__=ta?ta(null):{},this.size=0};var ti={};ti=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r};var tu={},tc=Object.prototype.hasOwnProperty;tu=function(t){var r=this.__data__;if(ta){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return tc.call(r,t)?r[t]:void 0};var ts={},tf=Object.prototype.hasOwnProperty;ts=function(t){var r=this.__data__;return ta?void 0!==r[t]:tf.call(r,t)};var tl={};function tp(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}tl=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=ta&&void 0===r?"__lodash_hash_undefined__":r,this},tp.prototype.clear=to,tp.prototype.delete=ti,tp.prototype.get=tu,tp.prototype.has=ts,tp.prototype.set=tl,tn=tp,te=function(){this.size=0,this.__data__={hash:new tn,map:new(E||v),string:new tn}};var tv={},tb={},ty={};ty=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t},tb=function(t,r){var e=t.__data__;return ty(r)?e["string"==typeof r?"string":"hash"]:e.map},tv=function(t){var r=tb(this,t).delete(t);return this.size-=r?1:0,r};var th={};th=function(t){return tb(this,t).get(t)};var td={};td=function(t){return tb(this,t).has(t)};var t_={};function tj(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function tg(t){var r=this.__data__=new v(t);this.size=r.size}t_=function(t,r){var e=tb(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this},tj.prototype.clear=te,tj.prototype.delete=tv,tj.prototype.get=th,tj.prototype.has=td,tj.prototype.set=t_,tr=tj,P=function(t,r){var e=this.__data__;if(e instanceof v){var n=e.__data__;if(!E||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new tr(n)}return e.set(t,r),this.size=e.size,this},tg.prototype.clear=O,tg.prototype.delete=A,tg.prototype.get=S,tg.prototype.has=x,tg.prototype.set=P,p=tg;var tm={};tm=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n&&!1!==r(t[e],e,t););return t};var tw={},tO={},tA={};tA=function(){try{var t=z(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),tO=function(t,r,e){"__proto__"==r&&tA?tA(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e};var tS=Object.prototype.hasOwnProperty;tw=function(t,r,e){var n=t[r];tS.call(t,r)&&d(n,e)&&(void 0!==e||r in t)||tO(t,r,e)};var tx={},tP={};tP=function(t,r,e,n){var o=!e;e||(e={});for(var a=-1,i=r.length;++a<i;){var u=r[a],c=n?n(e[u],t[u],u,e,t):void 0;void 0===c&&(c=t[u]),o?tO(e,u,c):tw(e,u,c)}return e};var tE={},tz={},tk={};tk=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n};var tC={},tD={},tT={};tT=function(t){return null!=t&&"object"==typeof t},tD=function(t){return tT(t)&&"[object Arguments]"==D(t)};var tF=Object.prototype,tM=tF.hasOwnProperty,tU=tF.propertyIsEnumerable;tC=tD(function(){return arguments}())?tD:function(t){return tT(t)&&tM.call(t,"callee")&&!tU.call(t,"callee")};var tB={};tB=Array.isArray;var t$=a("9gBlp"),tI={},tW=/^(?:0|[1-9]\d*)$/;tI=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&tW.test(t))&&t>-1&&t%1==0&&t<r};var tL={},tN={},tR={};tR=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var tV={};tV["[object Float32Array]"]=tV["[object Float64Array]"]=tV["[object Int8Array]"]=tV["[object Int16Array]"]=tV["[object Int32Array]"]=tV["[object Uint8Array]"]=tV["[object Uint8ClampedArray]"]=tV["[object Uint16Array]"]=tV["[object Uint32Array]"]=!0,tV["[object Arguments]"]=tV["[object Array]"]=tV["[object ArrayBuffer]"]=tV["[object Boolean]"]=tV["[object DataView]"]=tV["[object Date]"]=tV["[object Error]"]=tV["[object Function]"]=tV["[object Map]"]=tV["[object Number]"]=tV["[object Object]"]=tV["[object RegExp]"]=tV["[object Set]"]=tV["[object String]"]=tV["[object WeakMap]"]=!1,tN=function(t){return tT(t)&&tR(t.length)&&!!tV[D(t)]};var tq={};tq=function(t){return function(r){return t(r)}};var tG=a("iU8uW"),tH=tG&&tG.isTypedArray;tL=tH?tq(tH):tN;var tX=Object.prototype.hasOwnProperty;tz=function(t,r){var e=tB(t),n=!e&&tC(t),o=!e&&!n&&t$(t),a=!e&&!n&&!o&&tL(t),i=e||n||o||a,u=i?tk(t.length,String):[],c=u.length;for(var s in t)(r||tX.call(t,s))&&!(i&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||tI(s,c)))&&u.push(s);return u};var tK={},tJ={},tQ=Object.prototype;tJ=function(t){var r=t&&t.constructor,e="function"==typeof r&&r.prototype||tQ;return t===e};var tY={},tZ={};tY=(tZ=function(t,r){return function(e){return t(r(e))}})(Object.keys,Object);var t0=Object.prototype.hasOwnProperty;tK=function(t){if(!tJ(t))return tY(t);var r=[];for(var e in Object(t))t0.call(t,e)&&"constructor"!=e&&r.push(e);return r};var t1={};t1=function(t){return null!=t&&tR(t.length)&&!C(t)},tE=function(t){return t1(t)?tz(t):tK(t)},tx=function(t,r){return t&&tP(r,tE(r),t)};var t2={},t9={},t8={},t3={};t3=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r};var t4=Object.prototype.hasOwnProperty;t8=function(t){if(!R(t))return t3(t);var r=tJ(t),e=[];for(var n in t)"constructor"==n&&(r||!t4.call(t,n))||e.push(n);return e},t9=function(t){return t1(t)?tz(t,!0):t8(t)},t2=function(t,r){return t&&tP(r,t9(r),t)};var t6=a("gw5oW"),t5={};t5=function(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r};var t7={},rt={},rr={};rr=function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,a=[];++e<n;){var i=t[e];r(i,e,t)&&(a[o++]=i)}return a};var re={};re=function(){return[]};var rn=Object.prototype.propertyIsEnumerable,ro=Object.getOwnPropertySymbols;rt=ro?function(t){return null==t?[]:rr(ro(t=Object(t)),function(r){return rn.call(t,r)})}:re,t7=function(t,r){return tP(t,rt(t),r)};var ra={},ri={},ru={};ru=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t};var rc={};rc=tZ(Object.getPrototypeOf,Object),ri=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)ru(r,rt(t)),t=rc(t);return r}:re,ra=function(t,r){return tP(t,ri(t),r)};var rs={},rf={};rf=function(t,r,e){var n=r(t);return tB(t)?n:ru(n,e(t))},rs=function(t){return rf(t,tE,rt)};var rl={};rl=function(t){return rf(t,t9,ri)};var rp={},rv={},F=a("1DySm");rv=z(F,"DataView");var rb={},F=a("1DySm");rb=z(F,"Promise");var ry={},F=a("1DySm");ry=z(F,"Set");var rh={},F=a("1DySm");rh=z(F,"WeakMap");var rd="[object Map]",r_="[object Promise]",rj="[object Set]",rg="[object WeakMap]",rm="[object DataView]",rw=H(rv),rO=H(E),rA=H(rb),rS=H(ry),rx=H(rh),rP=D;(rv&&rP(new rv(new ArrayBuffer(1)))!=rm||E&&rP(new E)!=rd||rb&&rP(rb.resolve())!=r_||ry&&rP(new ry)!=rj||rh&&rP(new rh)!=rg)&&(rP=function(t){var r=D(t),e="[object Object]"==r?t.constructor:void 0,n=e?H(e):"";if(n)switch(n){case rw:return rm;case rO:return rd;case rA:return r_;case rS:return rj;case rx:return rg}return r}),rp=rP;var rE={},rz=Object.prototype.hasOwnProperty;rE=function(t){var r=t.length,e=new t.constructor(r);return r&&"string"==typeof t[0]&&rz.call(t,"index")&&(e.index=t.index,e.input=t.input),e};var rk={},rC={},rD={},F=a("1DySm");rD=F.Uint8Array,rC=function(t){var r=new t.constructor(t.byteLength);return new rD(r).set(new rD(t)),r};var rT={};rT=function(t,r){var e=r?rC(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)};var rF={},rM=/\w*$/;rF=function(t){var r=new t.constructor(t.source,rM.exec(t));return r.lastIndex=t.lastIndex,r};var rU={},rB=T?T.prototype:void 0,r$=rB?rB.valueOf:void 0;rU=function(t){return r$?Object(r$.call(t)):{}};var rI={};rI=function(t,r){var e=r?rC(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)},rk=function(t,r,e){var n=t.constructor;switch(r){case"[object ArrayBuffer]":return rC(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return rT(t,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return rI(t,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return rF(t);case"[object Symbol]":return rU(t)}};var rW={},rL={},rN=Object.create;rL=function(){function t(){}return function(r){if(!R(r))return{};if(rN)return rN(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}(),rW=function(t){return"function"!=typeof t.constructor||tJ(t)?{}:rL(rc(t))};var t$=a("9gBlp"),rR={},rV={};rV=function(t){return tT(t)&&"[object Map]"==rp(t)};var tG=a("iU8uW"),rq=tG&&tG.isMap;rR=rq?tq(rq):rV;var rG={},rH={};rH=function(t){return tT(t)&&"[object Set]"==rp(t)};var tG=a("iU8uW"),rX=tG&&tG.isSet;rG=rX?tq(rX):rH;var rK="[object Arguments]",rJ="[object Function]",rQ="[object Object]",rY={};rY[rK]=rY["[object Array]"]=rY["[object ArrayBuffer]"]=rY["[object DataView]"]=rY["[object Boolean]"]=rY["[object Date]"]=rY["[object Float32Array]"]=rY["[object Float64Array]"]=rY["[object Int8Array]"]=rY["[object Int16Array]"]=rY["[object Int32Array]"]=rY["[object Map]"]=rY["[object Number]"]=rY[rQ]=rY["[object RegExp]"]=rY["[object Set]"]=rY["[object String]"]=rY["[object Symbol]"]=rY["[object Uint8Array]"]=rY["[object Uint8ClampedArray]"]=rY["[object Uint16Array]"]=rY["[object Uint32Array]"]=!0,rY["[object Error]"]=rY[rJ]=rY["[object WeakMap]"]=!1,l=function t(r,e,n,o,a,i){var u,c=1&e,s=2&e,f=4&e;if(n&&(u=a?n(r,o,a,i):n(r)),void 0!==u)return u;if(!R(r))return r;var l=tB(r);if(l){if(u=rE(r),!c)return t5(r,u)}else{var v=rp(r),b=v==rJ||"[object GeneratorFunction]"==v;if(t$(r))return t6(r,c);if(v==rQ||v==rK||b&&!a){if(u=s||b?{}:rW(r),!c)return s?ra(r,t2(u,r)):t7(r,tx(u,r))}else{if(!rY[v])return a?r:{};u=rk(r,v,c)}}i||(i=new p);var y=i.get(r);if(y)return y;i.set(r,u),rG(r)?r.forEach(function(o){u.add(t(o,e,n,o,r,i))}):rR(r)&&r.forEach(function(o,a){u.set(a,t(o,e,n,a,r,i))});var h=f?s?rl:rs:s?t9:tE,d=l?void 0:h(r);return tm(d||r,function(o,a){d&&(o=r[a=o]),tw(u,a,t(o,e,n,a,r,i))}),u},f=function(t){return l(t,5)};var rZ={},r0={},r1={},r2={},r9={};r9=function(t){return"symbol"==typeof t||tT(t)&&"[object Symbol]"==D(t)};var r8=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r3=/^\w*$/;r2=function(t,r){if(tB(t))return!1;var e=typeof t;return!!("number"==e||"symbol"==e||"boolean"==e||null==t||r9(t))||r3.test(t)||!r8.test(t)||null!=r&&t in Object(r)};var r4={},r6={};function r5(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return e.cache=a.set(o,i)||a,i};return e.cache=new(r5.Cache||tr),e}r5.Cache=tr,r6=r5;var r7=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g;r4=function(t){var r=r6(t,function(t){return 500===e.size&&e.clear(),t}),e=r.cache;return r}(function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(r7,function(t,e,n,o){r.push(n?o.replace(et,"$1"):e||t)}),r});var er={},ee={},en={};en=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o};var eo=1/0,ea=T?T.prototype:void 0,ei=ea?ea.toString:void 0;ee=function t(r){if("string"==typeof r)return r;if(tB(r))return en(r,t)+"";if(r9(r))return ei?ei.call(r):"";var e=r+"";return"0"==e&&1/r==-eo?"-0":e},er=function(t){return null==t?"":ee(t)},r1=function(t,r){return tB(t)?t:r2(t,r)?[t]:r4(er(t))};var eu={},ec=1/0;eu=function(t){if("string"==typeof t||r9(t))return t;var r=t+"";return"0"==r&&1/t==-ec?"-0":r},r0=function(t,r){r=r1(r,t);for(var e=0,n=r.length;null!=t&&e<n;)t=t[eu(r[e++])];return e&&e==n?t:void 0},rZ=function(t,r,e){var n=null==t?void 0:r0(t,r);return void 0===n?e:n};var es={},ef={},el=Object.prototype.hasOwnProperty;ef=function(t,r){return null!=t&&el.call(t,r)};var ep={};ep=function(t,r,e){r=r1(r,t);for(var n=-1,o=r.length,a=!1;++n<o;){var i=eu(r[n]);if(!(a=null!=t&&e(t,i)))break;t=t[i]}return a||++n!=o?a:!!(o=null==t?0:t.length)&&tR(o)&&tI(i,o)&&(tB(t)||tC(t))},es=function(t,r){return null!=t&&ep(t,r,ef)};var ev={},eb={},ey={};ey=function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)};var eh={};eh=function(t){var r=null==t?0:t.length;return r?t[r-1]:void 0};var ed={},e_={};e_=function(t,r,e){var n=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(e=e>o?o:e)<0&&(e+=o),o=r>e?0:e-r>>>0,r>>>=0;for(var a=Array(o);++n<o;)a[n]=t[n+r];return a},ed=function(t,r){return r.length<2?t:r0(t,e_(r,0,-1))},eb=function(t,r,e){r=r1(r,t);var n=null==(t=ed(t,r))?t:t[eu(eh(r))];return null==n?void 0:ey(n,t,e)};var ej={},eg={};eg=function(t){return t};var em={},ew=Math.max;em=function(t,r,e){return r=ew(void 0===r?t.length-1:r,0),function(){for(var n=arguments,o=-1,a=ew(n.length-r,0),i=Array(a);++o<a;)i[o]=n[r+o];o=-1;for(var u=Array(r+1);++o<r;)u[o]=n[o];return u[r]=e(i),ey(t,this,u)}};var eO={},eA={},eS={};eS=function(t){return function(){return t}};var ex=Date.now;eO=function(t){var r=0,e=0;return function(){var n=ex(),o=16-(n-e);if(e=n,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}(tA?function(t,r){return tA(t,"toString",{configurable:!0,enumerable:!1,value:eS(r),writable:!0})}:eg),ev=(ej=function(t,r){return eO(em(t,r,eg),t+"")})(eb);var eP={},eE=Object.prototype,ez=Function.prototype.toString,ek=eE.hasOwnProperty,eC=ez.call(Object);eP=function(t){if(!tT(t)||"[object Object]"!=D(t))return!1;var r=rc(t);if(null===r)return!0;var e=ek.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&ez.call(e)==eC};var eD={},eT={},eF={};eF=function(t,r,e){for(var n=-1,o=Object(t),a=e(t),i=a.length;i--;){var u=a[++n];if(!1===r(o[u],u,o))break}return t},eT=function(t,r){return t&&eF(t,r,tE)};var eM={},eU={},eB={},e$={},eI={},eW={},eL={},eN={};eN=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var eR={};function eV(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new tr;++r<e;)this.add(t[r])}eR=function(t){return this.__data__.has(t)},eV.prototype.add=eV.prototype.push=eN,eV.prototype.has=eR,eL=eV;var eq={};eq=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1};var eG={};eG=function(t,r){return t.has(r)},eW=function(t,r,e,n,o,a){var i=1&e,u=t.length,c=r.length;if(u!=c&&!(i&&c>u))return!1;var s=a.get(t),f=a.get(r);if(s&&f)return s==r&&f==t;var l=-1,p=!0,v=2&e?new eL:void 0;for(a.set(t,r),a.set(r,t);++l<u;){var b=t[l],y=r[l];if(n)var h=i?n(y,b,l,r,t,a):n(b,y,l,t,r,a);if(void 0!==h){if(h)continue;p=!1;break}if(v){if(!eq(r,function(t,r){if(!eG(v,r)&&(b===t||o(b,t,e,n,a)))return v.push(r)})){p=!1;break}}else if(!(b===y||o(b,y,e,n,a))){p=!1;break}}return a.delete(t),a.delete(r),p};var eH={},eX={};eX=function(t){var r=-1,e=Array(t.size);return t.forEach(function(t,n){e[++r]=[n,t]}),e};var eK={};eK=function(t){var r=-1,e=Array(t.size);return t.forEach(function(t){e[++r]=t}),e};var eJ=T?T.prototype:void 0,eQ=eJ?eJ.valueOf:void 0;eH=function(t,r,e,n,o,a,i){switch(e){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)break;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":if(t.byteLength!=r.byteLength||!a(new rD(t),new rD(r)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return d(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var u=eX;case"[object Set]":var c=1&n;if(u||(u=eK),t.size!=r.size&&!c)break;var s=i.get(t);if(s)return s==r;n|=2,i.set(t,r);var f=eW(u(t),u(r),n,o,a,i);return i.delete(t),f;case"[object Symbol]":if(eQ)return eQ.call(t)==eQ.call(r)}return!1};var eY={},eZ=Object.prototype.hasOwnProperty;eY=function(t,r,e,n,o,a){var i=1&e,u=rs(t),c=u.length;if(c!=rs(r).length&&!i)return!1;for(var s=c;s--;){var f=u[s];if(!(i?f in r:eZ.call(r,f)))return!1}var l=a.get(t),p=a.get(r);if(l&&p)return l==r&&p==t;var v=!0;a.set(t,r),a.set(r,t);for(var b=i;++s<c;){var y=t[f=u[s]],h=r[f];if(n)var d=i?n(h,y,f,r,t,a):n(y,h,f,t,r,a);if(!(void 0===d?y===h||o(y,h,e,n,a):d)){v=!1;break}b||(b="constructor"==f)}if(v&&!b){var _=t.constructor,j=r.constructor;_!=j&&"constructor"in t&&"constructor"in r&&!("function"==typeof _&&_ instanceof _&&"function"==typeof j&&j instanceof j)&&(v=!1)}return a.delete(t),a.delete(r),v};var t$=a("9gBlp"),e0="[object Arguments]",e1="[object Array]",e2="[object Object]",e9=Object.prototype.hasOwnProperty;eI=function(t,r,e,n,o,a){var i=tB(t),u=tB(r),c=i?e1:rp(t),s=u?e1:rp(r);c=c==e0?e2:c,s=s==e0?e2:s;var f=c==e2,l=s==e2,v=c==s;if(v&&t$(t)){if(!t$(r))return!1;i=!0,f=!1}if(v&&!f)return a||(a=new p),i||tL(t)?eW(t,r,e,n,o,a):eH(t,r,c,e,n,o,a);if(!(1&e)){var b=f&&e9.call(t,"__wrapped__"),y=l&&e9.call(r,"__wrapped__");if(b||y){var h=b?t.value():t,d=y?r.value():r;return a||(a=new p),o(h,d,e,n,a)}}return!!v&&(a||(a=new p),eY(t,r,e,n,o,a))},e$=function t(r,e,n,o,a){return r===e||(null!=r&&null!=e&&(tT(r)||tT(e))?eI(r,e,n,o,t,a):r!=r&&e!=e)},eB=function(t,r,e,n){var o=e.length,a=o,i=!n;if(null==t)return!a;for(t=Object(t);o--;){var u=e[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=e[o])[0],s=t[c],f=u[1];if(i&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new p;if(n)var v=n(s,f,c,t,r,l);if(!(void 0===v?e$(f,s,3,n,l):v))return!1}}return!0};var e8={},e3={};e3=function(t){return t==t&&!R(t)},e8=function(t){for(var r=tE(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,e3(o)]}return r};var e4={};e4=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},eU=function(t){var r=e8(t);return 1==r.length&&r[0][2]?e4(r[0][0],r[0][1]):function(e){return e===t||eB(e,t,r)}};var e6={},e5={},e7={};e7=function(t,r){return null!=t&&r in Object(t)},e5=function(t,r){return null!=t&&ep(t,r,e7)},e6=function(t,r){return r2(t)&&e3(r)?e4(eu(t),r):function(e){var n=rZ(e,t);return void 0===n&&n===r?e5(e,t):e$(r,n,3)}};var nt={},nr={};nr=function(t){return function(r){return null==r?void 0:r[t]}};var ne={};ne=function(t){return function(r){return r0(r,t)}},nt=function(t){return r2(t)?nr(eu(t)):ne(t)},eM=function(t){return"function"==typeof t?t:null==t?eg:"object"==typeof t?tB(t)?e6(t[0],t[1]):eU(t):nt(t)},eD=function(t,r){var e={};return r=eM(r,3),eT(t,function(t,n,o){tO(e,n,r(t,n,o))}),e};var nn={},no={},na={};na=function(t,r,e){(void 0===e||d(t[r],e))&&(void 0!==e||r in t)||tO(t,r,e)};var ni={},t6=a("gw5oW"),nu={};nu=function(t){return tT(t)&&t1(t)};var t$=a("9gBlp"),nc={};nc=function(t,r){if(("constructor"!==r||"function"!=typeof t[r])&&"__proto__"!=r)return t[r]};var ns={};ns=function(t){return tP(t,t9(t))},ni=function(t,r,e,n,o,a,i){var u=nc(t,e),c=nc(r,e),s=i.get(c);if(s){na(t,e,s);return}var f=a?a(u,c,e+"",t,r,i):void 0,l=void 0===f;if(l){var p=tB(c),v=!p&&t$(c),b=!p&&!v&&tL(c);f=c,p||v||b?tB(u)?f=u:nu(u)?f=t5(u):v?(l=!1,f=t6(c,!0)):b?(l=!1,f=rI(c,!0)):f=[]:eP(c)||tC(c)?(f=u,tC(u)?f=ns(u):(!R(u)||C(u))&&(f=rW(c))):l=!1}l&&(i.set(c,f),o(f,c,n,a,i),i.delete(c)),na(t,e,f)},no=function t(r,e,n,o,a){r!==e&&eF(e,function(i,u){if(a||(a=new p),R(i))ni(r,e,u,n,t,o,a);else{var c=o?o(nc(r,u),i,u+"",r,e,a):void 0;void 0===c&&(c=i),na(r,u,c)}},t9)};var nf={};nf=function(t,r,e){if(!R(e))return!1;var n=typeof r;return("number"==n?!!(t1(e)&&tI(r,e.length)):"string"==n&&r in e)&&d(e[r],t)},nn=function(t){return ej(function(r,e){var n=-1,o=e.length,a=o>1?e[o-1]:void 0,i=o>2?e[2]:void 0;for(a=t.length>3&&"function"==typeof a?(o--,a):void 0,i&&nf(e[0],e[1],i)&&(a=o<3?void 0:a,o=1),r=Object(r);++n<o;){var u=e[n];u&&t(r,u,n,a)}return r})}(function(t,r,e){no(t,r,e)});var nl={},np={},nv={},nb={};nb=function(t,r,e,n){if(!R(t))return t;r=r1(r,t);for(var o=-1,a=r.length,i=a-1,u=t;null!=u&&++o<a;){var c=eu(r[o]),s=e;if("__proto__"===c||"constructor"===c||"prototype"===c)break;if(o!=i){var f=u[c];void 0===(s=n?n(f,c,u):void 0)&&(s=R(f)?f:tI(r[o+1])?[]:{})}tw(u,c,s),u=u[c]}return t},nv=function(t,r,e){for(var n=-1,o=r.length,a={};++n<o;){var i=r[n],u=r0(t,i);e(u,i)&&nb(a,r1(i,t),u)}return a},np=function(t,r){return nv(t,r,function(r,e){return e5(t,e)})};var ny={},nh={},nd={},n_={},nj=T?T.isConcatSpreadable:void 0;n_=function(t){return tB(t)||tC(t)||!!(nj&&t&&t[nj])},nd=function t(r,e,n,o,a){var i=-1,u=r.length;for(n||(n=n_),a||(a=[]);++i<u;){var c=r[i];e>0&&n(c)?e>1?t(c,e-1,n,o,a):ru(a,c):o||(a[a.length]=c)}return a},nh=function(t){return(null==t?0:t.length)?nd(t,1):[]},nl=(ny=function(t){return eO(em(t,void 0,nh),t+"")})(function(t,r){return null==t?{}:np(t,r)});var ng={};ng=function(t,r){if(null==t)return{};var e=en(rl(t),function(t){return[t]});return r=eM(r),nv(t,e,function(t,e){return r(t,e[0])})};var nm={};nm=function(t,r,e){return null==t?t:nb(t,r,e)};var nw={},nO={};nO=function(t,r){return r=r1(r,t),null==(t=ed(t,r))||delete t[eu(eh(r))]},nw=function(t,r){return null==t||nO(t,r)};var nA={},nS={},nx={};function nP(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=void 0}nx=function(){},nP.prototype=rL(nx.prototype),nP.prototype.constructor=nP,nS=nP;var nE={},nz={};nz=rh&&new rh;var nk={};nk=function(){},nE=nz?function(t){return nz.get(t)}:nk;var nC={},nD={};nD={};var nT=Object.prototype.hasOwnProperty;nC=function(t){for(var r=t.name+"",e=nD[r],n=nT.call(nD,r)?e.length:0;n--;){var o=e[n],a=o.func;if(null==a||a==t)return o.name}return r};var nF={},nM={};function nU(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}nU.prototype=rL(nx.prototype),nU.prototype.constructor=nU,nM=nU;var nB={},n$={};n$=function(t){if(t instanceof nM)return t.clone();var r=new nS(t.__wrapped__,t.__chain__);return r.__actions__=t5(t.__actions__),r.__index__=t.__index__,r.__values__=t.__values__,r};var nI=Object.prototype.hasOwnProperty;function nW(t){if(tT(t)&&!tB(t)&&!(t instanceof nM)){if(t instanceof nS)return t;if(nI.call(t,"__wrapped__"))return n$(t)}return new nS(t)}nW.prototype=nx.prototype,nW.prototype.constructor=nW,nB=nW,nF=function(t){var r=nC(t),e=nB[r];if("function"!=typeof e||!(r in nM.prototype))return!1;if(t===e)return!0;var n=nE(e);return!!n&&t===n[0]},nA=ny(function(t){for(var r=t.length,e=r,n=nS.prototype.thru;e--;){var o=t[e];if("function"!=typeof o)throw TypeError("Expected a function");if(n&&!a&&"wrapper"==nC(o))var a=new nS([],!0)}for(e=a?e:r;++e<r;){var i=nC(o=t[e]),u="wrapper"==i?nE(o):void 0;a=u&&nF(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?a[nC(u[0])].apply(a,u[3]):1==o.length&&nF(o)?a[i]():a.thru(o)}return function(){var e=arguments,n=e[0];if(a&&1==e.length&&tB(n))return a.plant(n).value();for(var o=0,i=r?t[o].apply(this,e):n;++o<r;)i=t[o].call(this,i);return i}});const nL=(t,r,e,n=0,o=[])=>Object.entries(t).flatMap(([t,a])=>{let i=[...o,t],u=!eP(a)&&r(t)?[i]:[],c=eP(a)?nL(a,r,e,n+1,i):[];return[...u,...c]}),nN=t=>{let r=Reflect.ownKeys(t);for(let e of r){let r=t[e];(r&&"object"==typeof r||"function"==typeof r)&&nN(r)}return Object.freeze(t)};s={cloneDeep:f,deepFreeze:nN,flow:nA,get:rZ,has:es,invoke:ev,isPlainFunction:t=>C(t)&&!t.hasOwnProperty("prototype"),isPlainObject:eP,isPromise:t=>t&&"function"==typeof t.then,mapValues:eD,matchPaths:nL,merge:nn,pick:nl,pickBy:ng,removePaths:(t,r)=>{let e=f(t);return r.forEach(t=>nw(e,t)),e},replacePaths:(t,r,e)=>{let n=f(t);r.forEach((r,o)=>{let a=rZ(t,r);nw(n,r),nm(n,e[o],a)});let o=e.map(t=>t.join("."));return nl(n,...o)},set:nm},c=t=>(...r)=>{let e=r.filter(t=>!!t).flatMap(t=>Array.isArray(t)?t:[t]),n=e.reduce((t,r)=>{let e=s.isPlainFunction(r)?r(t):r;return s.merge(t,e)},{});return t(n)};var nR={},nV={};nV=t=>(r,e,n,o)=>{let{constants:a}=t,i=s.merge({},t.options,o),{depth:u,customiser:c,overrides:f}=i,l=(t,r,e,o=0)=>{if(o===u||!s.isPlainObject(t))return t;let i={},c=s.set({self:i,constants:a,...e},r,i),f={constants:a,...n};return Object.assign(i,s.mapValues(t,(t,e)=>s.isPlainFunction(t)?t(c,f):l(t,[r,e].join("."),c,o+1)))};if(!r)throw Error("key is required");if(!s.has(t.target,r))throw Error(`${r} not found`);let p=s.get(t.target,r);if(!s.isPlainObject(p))throw Error(`${r} must be a plain object`);if(t.state.composedDependencies[r])throw Error(`${r} is already composed`);let v=s.flow([...t.precomposers.map(t=>e=>t(r,e,i)),t=>l(t,r,e),t=>s.has(t,c)?s.invoke(t,c,n):t])(p),b=n=>{if(c&&!s.isPlainObject(n))throw Error(`${r}.${c} must return a plain object`);return s.flow([t=>s.merge(t,s.get(f,r)),...t.postcomposers.map(t=>e=>t(r,e,i)),n=>t.registerModule(r,n,e)])(n)};return s.isPromise(v)?v.then(b):b(v)};var nq={};nq=()=>({depth:1,customiser:"setup",publicPrefix:"$",privatePrefix:"_",overrides:{},extensions:!0});var nG={},nH={};const nX={key:null,enabled:"enabled"};nH=(t,r,e={})=>{let n={...nX,...e},o=Array.isArray(r)?Object.fromEntries(r.map(t=>[t,{}])):r,a={any:t=>t?Array.isArray(t)?a.arr(t):t.constructor===Object?a.obj(t):a.any(Object.keys(o)):a.any([],r),arr:t=>a.any(Object.fromEntries(t.map(t=>{if(t.constructor===String)return[t,!0];if(Array.isArray(t)){let[r,e]=t;return e?e.constructor===Object?[r,e]:[r,!0]:[r,!1]}}))),obj:t=>{let r=t=>n.key?{[n.key]:t}:{};return Object.fromEntries(Object.entries(o).map(([e,o])=>{var a;let i=t[e];return a=!!i&&(i.constructor!==Object||!(n.enabled in i)||!!i[n.enabled]),[e,{...o,...i,[n.enabled]:a,...r(e)}]}))}};return a.any(t)};const nK=globalThis;nK.moduleComposer||(nK.moduleComposer={extensions:{}}),nG={register:(t,r)=>Object.assign(nK.moduleComposer.extensions,{[t]:r}),setup:(t,r)=>{let e=Object.keys(nK.moduleComposer.extensions),n=nH(t.options.extensions,e);return Object.entries(n).reduce((r,[e,n])=>{if(!n.enabled)return r;let o=nK.moduleComposer.extensions[e],a=()=>t.state.extensions[e],i={...t,getState:a,setState:r=>s.set(t.state.extensions,e,{...a(),...r})},{compose:u,precompose:c,postcompose:f,...l}=s.mapValues(o,t=>t(i,n));return u&&(r.compose=u(r.compose)),c&&r.precomposers.push(c),f&&r.postcomposers.push(f),{...r,...l}},{compose:r,precomposers:[],postcomposers:[]})}},nR=(t,r={},e={})=>{if(!s.isPlainObject(t))throw Error("target must be a plain object");let n=s.pickBy(t,s.isPlainObject),o=nq(),a={...o,...e},i={ended:!1,dependencies:s.mapValues(n,()=>[]),composedDependencies:{},modules:{...n},extensions:{}},u={defaultOptions:o,clientOptions:e,options:a,target:t,targetModules:n,constants:r},c={external:{...i,...u},state:i,...u},{compose:f,precomposers:l,postcomposers:p,...v}=nG.setup(c,nV(c));return Object.assign(c.external,v),Object.assign(c,{compose:f,registerModule:(t,r,e)=>{s.set(i.modules,t,r);let n=Object.keys(e).filter(r=>r!==t);return i.dependencies[t]=i.composedDependencies[t]=n,i.modules},precomposers:l,postcomposers:p})},u=(t,r={})=>{let e=(e={})=>{let n=s.deepFreeze(e),o=nR(t,n,r),a=(t,r={},e={},n={})=>{if(o.state.ended)throw Error("Composition has ended");return o.compose(t,r,e,n)};return Object.assign(a,o.external,{deep:(t,r={},e={},n={})=>{let o=s.merge({depth:1/0},n);return a(t,r,e,o)},end:()=>{if(o.state.ended)throw Error("Composition has already ended");return o.state.ended=!0,o.external}}),{compose:a,constants:n}},n=e(r.config),o=c(e);return{...n,configure:o}};var nJ={};nJ={webComponents:a("bwTS6")},i=({compositionName:t,configs:r})=>{let{compose:e}=u(nJ,{compositionName:t,configs:r});return e.end()};const nQ=i({compositionName:"Caffe Stazione Web Components"}),{webComponents:nY}=nQ.modules;customElements.define("stazione-header",nY.StazioneHeader);const nZ=document.createElement("link");nZ.href="https://fonts.googleapis.com/css?family=Roboto+Condensed",nZ.rel="stylesheet",document.head.appendChild(nZ);
//# sourceMappingURL=index.0a62a266.js.map
