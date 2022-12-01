// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,o=n.__defineSetter__,a=n.__lookupGetter__,u=n.__lookupSetter__,c=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,c){var f,p,s,l;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof c||null===c||"[object Array]"===e.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((p="value"in c)&&(a.call(r,t)||u.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=c.value,r.__proto__=f):r[t]=c.value),s="get"in c,l="set"in c,p&&(s||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,c.get),l&&o&&o.call(r,t,c.set),r};function f(r,t,n){c(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function p(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r){return r!=r}function l(r,t){return s(r)||s(t)?NaN:r<t?0:1}function y(r){return function(){return r}}function g(r,t,n){c(r,t,{configurable:!1,enumerable:!1,get:n})}function d(r){return"number"==typeof r}p(l,"factory",(function(r){return s(r)?y(NaN):function(t){return s(t)?NaN:t<r?0:1}}));var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return h&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,v=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"",N=m()?function(r){var t,n,e,i,o;if(null==r)return b.call(r);n=r[w],o=w,t=null!=(i=r)&&v.call(i,o);try{r[w]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[w]=n:delete r[w],e}:function(r){return b.call(r)},A=Number,_=A.prototype.toString,E=m();function U(r){return"object"==typeof r&&(r instanceof A||(E?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Number]"===N(r)))}function S(r){return d(r)||U(r)}function I(r){return s(r)?NaN:0}function j(r){return r}function x(r){return r}function k(r){return r}function F(r){return s(r)?NaN:0}function T(r){return s(r)?NaN:0}p(S,"isPrimitive",d),p(S,"isObject",U);var V=Math.floor,O=Math.ceil;function $(r){return r<0?O(r):V(r)}var G=A.NEGATIVE_INFINITY,H=Number.POSITIVE_INFINITY;function P(r){return r===H||r===G}var W,C="function"==typeof Uint32Array,L="function"==typeof Uint32Array?Uint32Array:null,M="function"==typeof Uint32Array?Uint32Array:void 0;W=function(){var r,t,n;if("function"!=typeof L)return!1;try{t=new L(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(C&&n instanceof Uint32Array||"[object Uint32Array]"===N(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?M:function(){throw new Error("not implemented")};var R,Z=W,q="function"==typeof Float64Array,X="function"==typeof Float64Array?Float64Array:null,Y="function"==typeof Float64Array?Float64Array:void 0;R=function(){var r,t,n;if("function"!=typeof X)return!1;try{t=new X([1,3.14,-3.14,NaN]),n=t,r=(q&&n instanceof Float64Array||"[object Float64Array]"===N(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var z,D=R,B="function"==typeof Uint8Array,J="function"==typeof Uint8Array?Uint8Array:null,K="function"==typeof Uint8Array?Uint8Array:void 0;z=function(){var r,t,n;if("function"!=typeof J)return!1;try{t=new J(t=[1,3.14,-3.14,256,257]),n=t,r=(B&&n instanceof Uint8Array||"[object Uint8Array]"===N(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,rr=z,tr="function"==typeof Uint16Array,nr="function"==typeof Uint16Array?Uint16Array:null,er="function"==typeof Uint16Array?Uint16Array:void 0;Q=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(tr&&n instanceof Uint16Array||"[object Uint16Array]"===N(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ir,or={uint16:Q,uint8:rr};(ir=new or.uint16(1))[0]=4660;var ar,ur,cr=52===new or.uint8(ir.buffer)[0];!0===cr?(ar=1,ur=0):(ar=0,ur=1);var fr={HIGH:ar,LOW:ur},pr=new D(1),sr=new Z(pr.buffer),lr=fr.HIGH,yr=fr.LOW;function gr(r,t,n,e){return pr[0]=r,t[e]=sr[lr],t[e+n]=sr[yr],t}function dr(r){return gr(r,[0,0],1,0)}p(dr,"assign",gr);var hr,mr,br=!0===cr?1:0,vr=new D(1),wr=new Z(vr.buffer);function Nr(r){return vr[0]=r,wr[br]}!0===cr?(hr=1,mr=0):(hr=0,mr=1);var Ar={HIGH:hr,LOW:mr},_r=new D(1),Er=new Z(_r.buffer),Ur=Ar.HIGH,Sr=Ar.LOW;function Ir(r,t){return Er[Ur]=r,Er[Sr]=t,_r[0]}var jr=[0,0];function xr(r,t,n,e){return s(r)||P(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}p((function(r){return xr(r,[0,0],1,0)}),"assign",xr);var kr=[0,0],Fr=[0,0];function Tr(r,t){var n,e,i,o,a,u;return 0===t||0===r||s(r)||P(r)?r:(xr(r,kr,1,0),t+=kr[1],t+=function(r){var t=Nr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=kr[0]),t<-1074?(i=0,o=r,dr.assign(i,jr,1,0),a=jr[0],a&=2147483647,u=Nr(o),Ir(a|=u&=2147483648,jr[1])):t>1023?r<0?G:H:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,dr.assign(r,Fr,1,0),n=Fr[0],n&=2148532223,e*Ir(n|=t+1023<<20,Fr[1])))}var Vr=1.4426950408889634,Or=1/(1<<28);function $r(r){var t;return s(r)||r===H?r:r===G?0:r>709.782712893384?H:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Or?1+r:function(r,t,n){var e,i,o,a;return Tr(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(t=$(r<0?Vr*r-.5:Vr*r+.5)),1.9082149292705877e-10*t,t)}function Gr(r,t){return s(r)||s(t)?NaN:$r(t*r)}function Hr(r,t){return s(r)||s(t)?NaN:r===t?H:0}function Pr(r,t){return s(r)||s(t)?NaN:r===t?1:0}function Wr(r,t){return s(r)||s(t)?NaN:r<t?G:0}function Cr(r,t){return s(r)||s(t)?NaN:r===t?H:G}function Lr(r,t){return s(r)||s(t)?NaN:r===t?0:G}function Mr(r,t){return s(r)||r<0||r>1?NaN:t}function Rr(r){return"number"==typeof r}function Zr(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function qr(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+Zr(i):Zr(i)+r,e&&(r="-"+r)),r}p(Gr,"factory",(function(r){return s(r)?y(NaN):function(t){return s(t)?NaN:$r(r*t)}})),p(Hr,"factory",(function(r){return s(r)?y(NaN):function(t){return s(t)?NaN:t===r?H:0}})),p(Pr,"factory",(function(r){return s(r)?y(NaN):function(t){return s(t)?NaN:t===r?1:0}})),p(Wr,"factory",(function(r){return s(r)?y(NaN):function(t){return s(t)?NaN:t<r?G:0}})),p(Cr,"factory",(function(r){return s(r)?y(NaN):function(t){return s(t)?NaN:t===r?H:G}})),p(Lr,"factory",(function(r){return s(r)?y(NaN):function(t){return s(t)?NaN:t===r?0:G}})),p(Mr,"factory",(function(r){return s(r)?y(NaN):function(t){return s(t)||t<0||t>1?NaN:r}}));var Xr=String.prototype.toLowerCase,Yr=String.prototype.toUpperCase;function zr(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!Rr(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=qr(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=qr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===Yr.call(r.specifier)?Yr.call(n):Xr.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function Dr(r){return"string"==typeof r}var Br=Math.abs,Jr=String.prototype.toLowerCase,Kr=String.prototype.toUpperCase,Qr=String.prototype.replace,rt=/e\+(\d)$/,tt=/e-(\d)$/,nt=/^(\d+)$/,et=/^(\d+)e/,it=/\.0$/,ot=/\.0*e/,at=/(\..*[^0])0*e/;function ut(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!Rr(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":Br(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=Qr.call(n,at,"$1e"),n=Qr.call(n,ot,"e"),n=Qr.call(n,it,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Qr.call(n,rt,"e+0$1"),n=Qr.call(n,tt,"e-0$1"),r.alternate&&(n=Qr.call(n,nt,"$1."),n=Qr.call(n,et,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Kr.call(r.specifier)?Kr.call(n):Jr.call(n)}function ct(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function ft(r,t,n){var e=t-r.length;return e<0?r:r=n?r+ct(e):ct(e)+r}var pt=String.fromCharCode,st=isNaN,lt=Array.isArray;function yt(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function gt(r){var t,n,e,i,o,a,u,c,f;if(!lt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(Dr(e=r[c]))a+=e;else{if(t=void 0!==e.precision,!(e=yt(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,st(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,st(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=zr(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!st(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=st(o)?String(e.arg):pt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=ut(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=qr(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=ft(e.arg,e.width,e.padRight)),a+=e.arg||"",u+=1}return a}var dt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ht(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function mt(r){var t,n,e,i;for(n=[],i=0,e=dt.exec(r);e;)(t=r.slice(i,dt.lastIndex-e[0].length)).length&&n.push(t),n.push(ht(e)),i=dt.lastIndex,e=dt.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function bt(r){return"string"==typeof r}function vt(r){var t,n,e;if(!bt(r))throw new TypeError(vt("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=mt(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return gt.apply(null,n)}function wt(){var r;if(!(this instanceof wt))return 0===arguments.length?new wt:new wt(arguments[0]);if(arguments.length){if(!S(r=arguments[0])||s(r))throw new TypeError(vt("invalid argument. Mean parameter `%s` must be a number. Value: `%s`.","mu",r))}else r=0;return c(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!S(t)||s(t))throw new TypeError(vt("invalid assignment. Must be a number. Value: `%s`.",t));r=t}}),this}g(wt.prototype,"entropy",(function(){return I(this.mu)})),g(wt.prototype,"mean",(function(){return this.mu})),g(wt.prototype,"mode",(function(){return this.mu})),g(wt.prototype,"median",(function(){return this.mu})),g(wt.prototype,"stdev",(function(){return F(this.mu)})),g(wt.prototype,"variance",(function(){return T(this.mu)})),p(wt.prototype,"cdf",(function(r){return l(r,this.mu)})),p(wt.prototype,"logcdf",(function(r){return Wr(r,this.mu)})),p(wt.prototype,"logpdf",(function(r){return Cr(r,this.mu)})),p(wt.prototype,"logpmf",(function(r){return Lr(r,this.mu)})),p(wt.prototype,"mgf",(function(r){return Gr(r,this.mu)})),p(wt.prototype,"pdf",(function(r){return Hr(r,this.mu)})),p(wt.prototype,"pmf",(function(r){return Pr(r,this.mu)})),p(wt.prototype,"quantile",(function(r){return Mr(r,this.mu)}));var Nt={};return f(Nt,"cdf",l),f(Nt,"Degenerate",wt),f(Nt,"entropy",I),f(Nt,"logcdf",Wr),f(Nt,"logpdf",Cr),f(Nt,"logpmf",Lr),f(Nt,"mean",j),f(Nt,"median",k),f(Nt,"mgf",Gr),f(Nt,"mode",x),f(Nt,"pdf",Hr),f(Nt,"pmf",Pr),f(Nt,"quantile",Mr),f(Nt,"stdev",F),f(Nt,"variance",T),Nt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).degenerate=t();
//# sourceMappingURL=index.js.map
