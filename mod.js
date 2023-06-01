// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,o=n.__lookupGetter__,u=n.__lookupSetter__;var c=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,c){var f,p,s,l;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof c||null===c||"[object Array]"===e.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((p="value"in c)&&(o.call(r,t)||u.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=c.value,r.__proto__=f):r[t]=c.value),s="get"in c,l="set"in c,p&&(s||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,c.get),l&&a&&a.call(r,t,c.set),r};function f(r,t,n){c(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function p(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r){return r!=r}function l(r,t){return s(r)||s(t)?NaN:r<t?0:1}function y(r){return function(){return r}}function g(r,t,n){c(r,t,{configurable:!1,enumerable:!1,get:n})}function d(r){return"number"==typeof r}p(l,"factory",(function(r){return s(r)?y(NaN):function(t){if(s(t))return NaN;return t<r?0:1}}));var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return h&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var N=v()?function(r){var t,n,e,i,a;if(null==r)return m.call(r);n=r[w],a=w,t=null!=(i=r)&&b.call(i,a);try{r[w]=void 0}catch(t){return m.call(r)}return e=m.call(r),t?r[w]=n:delete r[w],e}:function(r){return m.call(r)},A=Number,_=A.prototype.toString;var E=v();function U(r){return"object"==typeof r&&(r instanceof A||(E?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Number]"===N(r)))}function S(r){return d(r)||U(r)}function I(r){return s(r)?NaN:0}function j(r){return r}function k(r){return r}function x(r){return r}function F(r){return s(r)?NaN:0}function T(r){return s(r)?NaN:0}p(S,"isPrimitive",d),p(S,"isObject",U);var V=Math.floor,O=Math.ceil;function $(r){return r<0?O(r):V(r)}var G=A.NEGATIVE_INFINITY,H=Number.POSITIVE_INFINITY;function P(r){return r===H||r===G}var W="function"==typeof Uint32Array;var C="function"==typeof Uint32Array?Uint32Array:null;var L,M="function"==typeof Uint32Array?Uint32Array:void 0;L=function(){var r,t,n;if("function"!=typeof C)return!1;try{t=new C(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(W&&n instanceof Uint32Array||"[object Uint32Array]"===N(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?M:function(){throw new Error("not implemented")};var R=L,Z="function"==typeof Float64Array;var q="function"==typeof Float64Array?Float64Array:null;var X,Y="function"==typeof Float64Array?Float64Array:void 0;X=function(){var r,t,n;if("function"!=typeof q)return!1;try{t=new q([1,3.14,-3.14,NaN]),n=t,r=(Z&&n instanceof Float64Array||"[object Float64Array]"===N(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var z=X,D="function"==typeof Uint8Array;var B="function"==typeof Uint8Array?Uint8Array:null;var J,K="function"==typeof Uint8Array?Uint8Array:void 0;J=function(){var r,t,n;if("function"!=typeof B)return!1;try{t=new B(t=[1,3.14,-3.14,256,257]),n=t,r=(D&&n instanceof Uint8Array||"[object Uint8Array]"===N(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q=J,rr="function"==typeof Uint16Array;var tr="function"==typeof Uint16Array?Uint16Array:null;var nr,er="function"==typeof Uint16Array?Uint16Array:void 0;nr=function(){var r,t,n;if("function"!=typeof tr)return!1;try{t=new tr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(rr&&n instanceof Uint16Array||"[object Uint16Array]"===N(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ir,ar={uint16:nr,uint8:Q};(ir=new ar.uint16(1))[0]=4660;var or,ur,cr=52===new ar.uint8(ir.buffer)[0];!0===cr?(or=1,ur=0):(or=0,ur=1);var fr={HIGH:or,LOW:ur},pr=new z(1),sr=new R(pr.buffer),lr=fr.HIGH,yr=fr.LOW;function gr(r,t,n,e){return pr[0]=r,t[e]=sr[lr],t[e+n]=sr[yr],t}function dr(r){return gr(r,[0,0],1,0)}p(dr,"assign",gr);var hr,vr,mr=!0===cr?1:0,br=new z(1),wr=new R(br.buffer);function Nr(r){return br[0]=r,wr[mr]}!0===cr?(hr=1,vr=0):(hr=0,vr=1);var Ar={HIGH:hr,LOW:vr},_r=new z(1),Er=new R(_r.buffer),Ur=Ar.HIGH,Sr=Ar.LOW;function Ir(r,t){return Er[Ur]=r,Er[Sr]=t,_r[0]}var jr=[0,0];function kr(r,t,n,e){return s(r)||P(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}p((function(r){return kr(r,[0,0],1,0)}),"assign",kr);var xr=[0,0],Fr=[0,0];function Tr(r,t){var n,e,i,a,o,u;return 0===t||0===r||s(r)||P(r)?r:(kr(r,xr,1,0),t+=xr[1],t+=function(r){var t=Nr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=xr[0]),t<-1074?(i=0,a=r,dr.assign(i,jr,1,0),o=jr[0],o&=2147483647,u=Nr(a),Ir(o|=u&=2147483648,jr[1])):t>1023?r<0?G:H:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,dr.assign(r,Fr,1,0),n=Fr[0],n&=2148532223,e*Ir(n|=t+1023<<20,Fr[1])))}function Vr(r){var t;return s(r)||r===H?r:r===G?0:r>709.782712893384?H:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,i,a,o;return Tr(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=$(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function Or(r,t){return s(r)||s(t)?NaN:Vr(t*r)}function $r(r,t){return s(r)||s(t)?NaN:r===t?H:0}function Gr(r,t){return s(r)||s(t)?NaN:r===t?1:0}function Hr(r,t){return s(r)||s(t)?NaN:r<t?G:0}function Pr(r,t){return s(r)||s(t)?NaN:r===t?H:G}function Wr(r,t){return s(r)||s(t)?NaN:r===t?0:G}function Cr(r,t){return s(r)||r<0||r>1?NaN:t}function Lr(r){return"number"==typeof r}function Mr(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function Rr(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+Mr(i):Mr(i)+r,e&&(r="-"+r)),r}p(Or,"factory",(function(r){return s(r)?y(NaN):function(t){if(s(t))return NaN;return Vr(r*t)}})),p($r,"factory",(function(r){return s(r)?y(NaN):function(t){if(s(t))return NaN;return t===r?H:0}})),p(Gr,"factory",(function(r){return s(r)?y(NaN):function(t){if(s(t))return NaN;return t===r?1:0}})),p(Hr,"factory",(function(r){return s(r)?y(NaN):function(t){if(s(t))return NaN;return t<r?G:0}})),p(Pr,"factory",(function(r){return s(r)?y(NaN):function(t){if(s(t))return NaN;return t===r?H:G}})),p(Wr,"factory",(function(r){return s(r)?y(NaN):function(t){if(s(t))return NaN;return t===r?0:G}})),p(Cr,"factory",(function(r){return s(r)?y(NaN):function(t){if(s(t)||t<0||t>1)return NaN;return r}}));var Zr=String.prototype.toLowerCase,qr=String.prototype.toUpperCase;function Xr(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!Lr(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=Rr(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=Rr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===qr.call(r.specifier)?qr.call(n):Zr.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function Yr(r){return"string"==typeof r}var zr=Math.abs,Dr=String.prototype.toLowerCase,Br=String.prototype.toUpperCase,Jr=String.prototype.replace,Kr=/e\+(\d)$/,Qr=/e-(\d)$/,rt=/^(\d+)$/,tt=/^(\d+)e/,nt=/\.0$/,et=/\.0*e/,it=/(\..*[^0])0*e/;function at(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!Lr(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":zr(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=Jr.call(n,it,"$1e"),n=Jr.call(n,et,"e"),n=Jr.call(n,nt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Jr.call(n,Kr,"e+0$1"),n=Jr.call(n,Qr,"e-0$1"),r.alternate&&(n=Jr.call(n,rt,"$1."),n=Jr.call(n,tt,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Br.call(r.specifier)?Br.call(n):Dr.call(n)}function ot(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function ut(r,t,n){var e=t-r.length;return e<0?r:r=n?r+ot(e):ot(e)+r}var ct=String.fromCharCode,ft=isNaN,pt=Array.isArray;function st(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function lt(r){var t,n,e,i,a,o,u,c,f;if(!pt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(Yr(e=r[c]))o+=e;else{if(t=void 0!==e.precision,!(e=st(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,ft(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,ft(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=Xr(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!ft(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=ft(a)?String(e.arg):ct(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=at(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Rr(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=ut(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var yt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function gt(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function dt(r){var t,n,e,i;for(n=[],i=0,e=yt.exec(r);e;)(t=r.slice(i,yt.lastIndex-e[0].length)).length&&n.push(t),n.push(gt(e)),i=yt.lastIndex,e=yt.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function ht(r){return"string"==typeof r}function vt(r){var t,n,e;if(!ht(r))throw new TypeError(vt("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=dt(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return lt.apply(null,n)}function mt(){var r;if(!(this instanceof mt))return 0===arguments.length?new mt:new mt(arguments[0]);if(arguments.length){if(!S(r=arguments[0])||s(r))throw new TypeError(vt("invalid argument. Mean parameter `%s` must be a number. Value: `%s`.","mu",r))}else r=0;return c(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!S(t)||s(t))throw new TypeError(vt("invalid assignment. Must be a number. Value: `%s`.",t));r=t}}),this}g(mt.prototype,"entropy",(function(){return I(this.mu)})),g(mt.prototype,"mean",(function(){return this.mu})),g(mt.prototype,"mode",(function(){return this.mu})),g(mt.prototype,"median",(function(){return this.mu})),g(mt.prototype,"stdev",(function(){return F(this.mu)})),g(mt.prototype,"variance",(function(){return T(this.mu)})),p(mt.prototype,"cdf",(function(r){return l(r,this.mu)})),p(mt.prototype,"logcdf",(function(r){return Hr(r,this.mu)})),p(mt.prototype,"logpdf",(function(r){return Pr(r,this.mu)})),p(mt.prototype,"logpmf",(function(r){return Wr(r,this.mu)})),p(mt.prototype,"mgf",(function(r){return Or(r,this.mu)})),p(mt.prototype,"pdf",(function(r){return $r(r,this.mu)})),p(mt.prototype,"pmf",(function(r){return Gr(r,this.mu)})),p(mt.prototype,"quantile",(function(r){return Cr(r,this.mu)}));var bt={};f(bt,"cdf",l),f(bt,"Degenerate",mt),f(bt,"entropy",I),f(bt,"logcdf",Hr),f(bt,"logpdf",Pr),f(bt,"logpmf",Wr),f(bt,"mean",j),f(bt,"median",x),f(bt,"mgf",Or),f(bt,"mode",k),f(bt,"pdf",$r),f(bt,"pmf",Gr),f(bt,"quantile",Cr),f(bt,"stdev",F),f(bt,"variance",T);export{mt as Degenerate,l as cdf,bt as default,I as entropy,Hr as logcdf,Pr as logpdf,Wr as logpmf,j as mean,x as median,Or as mgf,k as mode,$r as pdf,Gr as pmf,Cr as quantile,F as stdev,T as variance};
//# sourceMappingURL=mod.js.map
