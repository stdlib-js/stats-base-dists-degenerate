// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,p=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,m=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,v,"$1e"),e=l.call(e,b,"e"),e=l.call(e,m,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,y,"e+0$1"),e=l.call(e,g,"e-0$1"),r.alternate&&(e=l.call(e,d,"$1."),e=l.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):p.call(e)}function N(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+N(e):N(e)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function I(r){var t,n,e,o,a,f,p,s,l;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",p=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(p=e.mapping),n=e.flags,l=0;l<n.length;l++)switch(o=n.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[p],10),p+=1,E(e.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[p],10),p+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[p],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",p+=1}return f}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function k(r){var t,n,e,i;for(n=[],i=0,e=j.exec(r);e;)(t=r.slice(i,j.lastIndex-e[0].length)).length&&n.push(t),n.push(x(e)),i=j.lastIndex,e=j.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function F(r){return"string"==typeof r}function T(r){var t,n,e;if(!F(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=k(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return I.apply(null,n)}var V=Object.prototype,O=V.toString,$=V.__defineGetter__,G=V.__defineSetter__,H=V.__lookupGetter__,P=V.__lookupSetter__,W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===O.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,t)||P.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,t,n.get),a&&G&&G.call(r,t,n.set),r};function C(r,t,n){W(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function L(r,t,n){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function M(r){return r!=r}function R(r,t){return M(r)||M(t)?NaN:r<t?0:1}function Z(r){return function(){return r}}function q(r,t,n){W(r,t,{configurable:!1,enumerable:!1,get:n})}function X(r){return"number"==typeof r}L(R,"factory",(function(r){return M(r)?Z(NaN):function(t){return M(t)?NaN:t<r?0:1}}));var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Y&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString,B=Object.prototype.hasOwnProperty,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=z()?function(r){var t,n,e,i,o;if(null==r)return D.call(r);n=r[K],o=K,t=null!=(i=r)&&B.call(i,o);try{r[K]=void 0}catch(t){return D.call(r)}return e=D.call(r),t?r[K]=n:delete r[K],e}:function(r){return D.call(r)},rr=Number,tr=rr.prototype.toString,nr=z();function er(r){return"object"==typeof r&&(r instanceof rr||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function ir(r){return X(r)||er(r)}function or(r){return M(r)?NaN:0}function ar(r){return r}function ur(r){return r}function cr(r){return r}function fr(r){return M(r)?NaN:0}function pr(r){return M(r)?NaN:0}L(ir,"isPrimitive",X),L(ir,"isObject",er);var sr=Math.floor,lr=Math.ceil;function yr(r){return r<0?lr(r):sr(r)}var gr=rr.NEGATIVE_INFINITY,dr=Number.POSITIVE_INFINITY;function hr(r){return r===dr||r===gr}var mr,br="function"==typeof Uint32Array,vr="function"==typeof Uint32Array?Uint32Array:null,wr="function"==typeof Uint32Array?Uint32Array:void 0;mr=function(){var r,t,n;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(br&&n instanceof Uint32Array||"[object Uint32Array]"===Q(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var Nr,Ar=mr,_r="function"==typeof Float64Array,Er="function"==typeof Float64Array?Float64Array:null,Ur="function"==typeof Float64Array?Float64Array:void 0;Nr=function(){var r,t,n;if("function"!=typeof Er)return!1;try{t=new Er([1,3.14,-3.14,NaN]),n=t,r=(_r&&n instanceof Float64Array||"[object Float64Array]"===Q(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Sr,Ir=Nr,jr="function"==typeof Uint8Array,xr="function"==typeof Uint8Array?Uint8Array:null,kr="function"==typeof Uint8Array?Uint8Array:void 0;Sr=function(){var r,t,n;if("function"!=typeof xr)return!1;try{t=new xr(t=[1,3.14,-3.14,256,257]),n=t,r=(jr&&n instanceof Uint8Array||"[object Uint8Array]"===Q(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Fr,Tr=Sr,Vr="function"==typeof Uint16Array,Or="function"==typeof Uint16Array?Uint16Array:null,$r="function"==typeof Uint16Array?Uint16Array:void 0;Fr=function(){var r,t,n;if("function"!=typeof Or)return!1;try{t=new Or(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Vr&&n instanceof Uint16Array||"[object Uint16Array]"===Q(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Gr,Hr={uint16:Fr,uint8:Tr};(Gr=new Hr.uint16(1))[0]=4660;var Pr,Wr,Cr=52===new Hr.uint8(Gr.buffer)[0];!0===Cr?(Pr=1,Wr=0):(Pr=0,Wr=1);var Lr={HIGH:Pr,LOW:Wr},Mr=new Ir(1),Rr=new Ar(Mr.buffer),Zr=Lr.HIGH,qr=Lr.LOW;function Xr(r,t,n,e){return Mr[0]=r,t[e]=Rr[Zr],t[e+n]=Rr[qr],t}function Yr(r){return Xr(r,[0,0],1,0)}L(Yr,"assign",Xr);var zr,Dr,Br=!0===Cr?1:0,Jr=new Ir(1),Kr=new Ar(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Br]}!0===Cr?(zr=1,Dr=0):(zr=0,Dr=1);var rt={HIGH:zr,LOW:Dr},tt=new Ir(1),nt=new Ar(tt.buffer),et=rt.HIGH,it=rt.LOW;function ot(r,t){return nt[et]=r,nt[it]=t,tt[0]}var at=[0,0];function ut(r,t,n,e){return M(r)||hr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}L((function(r){return ut(r,[0,0],1,0)}),"assign",ut);var ct=[0,0],ft=[0,0];function pt(r,t){var n,e,i,o,a,u;return 0===t||0===r||M(r)||hr(r)?r:(ut(r,ct,1,0),t+=ct[1],t+=function(r){var t=Qr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=ct[0]),t<-1074?(i=0,o=r,Yr.assign(i,at,1,0),a=at[0],a&=2147483647,u=Qr(o),ot(a|=u&=2147483648,at[1])):t>1023?r<0?gr:dr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Yr.assign(r,ft,1,0),n=ft[0],n&=2148532223,e*ot(n|=t+1023<<20,ft[1])))}var st=1.4426950408889634,lt=1/(1<<28);function yt(r){var t;return M(r)||r===dr?r:r===gr?0:r>709.782712893384?dr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<lt?1+r:function(r,t,n){var e,i,o,a;return pt(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(t=yr(r<0?st*r-.5:st*r+.5)),1.9082149292705877e-10*t,t)}function gt(r,t){return M(r)||M(t)?NaN:yt(t*r)}function dt(r,t){return M(r)||M(t)?NaN:r===t?dr:0}function ht(r,t){return M(r)||M(t)?NaN:r===t?1:0}function mt(r,t){return M(r)||M(t)?NaN:r<t?gr:0}function bt(r,t){return M(r)||M(t)?NaN:r===t?dr:gr}function vt(r,t){return M(r)||M(t)?NaN:r===t?0:gr}function wt(r,t){return M(r)||r<0||r>1?NaN:t}function Nt(){var r;if(!(this instanceof Nt))return 0===arguments.length?new Nt:new Nt(arguments[0]);if(arguments.length){if(!ir(r=arguments[0])||M(r))throw new TypeError(T("invalid argument. Mean parameter `%s` must be a number. Value: `%s`.","mu",r))}else r=0;return W(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!ir(t)||M(t))throw new TypeError(T("invalid assignment. Must be a number. Value: `%s`.",t));r=t}}),this}L(gt,"factory",(function(r){return M(r)?Z(NaN):function(t){return M(t)?NaN:yt(r*t)}})),L(dt,"factory",(function(r){return M(r)?Z(NaN):function(t){return M(t)?NaN:t===r?dr:0}})),L(ht,"factory",(function(r){return M(r)?Z(NaN):function(t){return M(t)?NaN:t===r?1:0}})),L(mt,"factory",(function(r){return M(r)?Z(NaN):function(t){return M(t)?NaN:t<r?gr:0}})),L(bt,"factory",(function(r){return M(r)?Z(NaN):function(t){return M(t)?NaN:t===r?dr:gr}})),L(vt,"factory",(function(r){return M(r)?Z(NaN):function(t){return M(t)?NaN:t===r?0:gr}})),L(wt,"factory",(function(r){return M(r)?Z(NaN):function(t){return M(t)||t<0||t>1?NaN:r}})),q(Nt.prototype,"entropy",(function(){return or(this.mu)})),q(Nt.prototype,"mean",(function(){return this.mu})),q(Nt.prototype,"mode",(function(){return this.mu})),q(Nt.prototype,"median",(function(){return this.mu})),q(Nt.prototype,"stdev",(function(){return fr(this.mu)})),q(Nt.prototype,"variance",(function(){return pr(this.mu)})),L(Nt.prototype,"cdf",(function(r){return R(r,this.mu)})),L(Nt.prototype,"logcdf",(function(r){return mt(r,this.mu)})),L(Nt.prototype,"logpdf",(function(r){return bt(r,this.mu)})),L(Nt.prototype,"logpmf",(function(r){return vt(r,this.mu)})),L(Nt.prototype,"mgf",(function(r){return gt(r,this.mu)})),L(Nt.prototype,"pdf",(function(r){return dt(r,this.mu)})),L(Nt.prototype,"pmf",(function(r){return ht(r,this.mu)})),L(Nt.prototype,"quantile",(function(r){return wt(r,this.mu)}));var At={};return C(At,"cdf",R),C(At,"Degenerate",Nt),C(At,"entropy",or),C(At,"logcdf",mt),C(At,"logpdf",bt),C(At,"logpmf",vt),C(At,"mean",ar),C(At,"median",cr),C(At,"mgf",gt),C(At,"mode",ur),C(At,"pdf",dt),C(At,"pmf",ht),C(At,"quantile",wt),C(At,"stdev",fr),C(At,"variance",pr),At},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).degenerate=t();
//# sourceMappingURL=index.js.map
