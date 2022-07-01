// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=r,l=function(t,n,r){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=c):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,n,r.get),p&&i&&i.call(t,n,r.set),t},y=n()?c:l,p=y,m=function(t,n,r){p(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})},N=y,b=function(t,n,r){N(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},s=function(t){return t!=t},d=s,v=function(t){return function(){return t}},h=v,g=s,w=function(t,n){return d(t)||d(n)?NaN:t<n?0:1};b(w,"factory",(function(t){return g(t)?h(NaN):function(n){return g(n)?NaN:n<t?0:1}}));var A=w,_=y,U=function(t,n,r){_(t,n,{configurable:!1,enumerable:!1,get:r})},j=function(t){return"number"==typeof t},I="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),O=function(){return I&&"symbol"==typeof Symbol.toStringTag},S=Object.prototype.toString,E=S,T=function(t){return E.call(t)},F=Object.prototype.hasOwnProperty,H=function(t,n){return null!=t&&F.call(t,n)},G="function"==typeof Symbol?Symbol.toStringTag:"",P=H,V=G,M=S,L=T,W=function(t){var n,r,e;if(null==t)return M.call(t);r=t[V],n=P(t,V);try{t[V]=void 0}catch(n){return M.call(t)}return e=M.call(t),n?t[V]=r:delete t[V],e},x=O()?W:L,k=Number,q=k.prototype.toString,Y=x,C=k,D=function(t){try{return q.call(t),!0}catch(t){return!1}},z=O(),B=function(t){return"object"==typeof t&&(t instanceof C||(z?D(t):"[object Number]"===Y(t)))},J=j,K=B,Q=b,R=function(t){return J(t)||K(t)},X=B;Q(R,"isPrimitive",j),Q(R,"isObject",X);var Z,$=R,tt=s,nt=function(t){return tt(t)?NaN:0},rt=function(t){return t},et=function(t){return t},ot=function(t){return t},ut=s,it=function(t){return ut(t)?NaN:0},ft=s,at=function(t){return ft(t)?NaN:0},ct=Math.floor,lt=Math.ceil,yt=ct,pt=lt,mt=function(t){return t<0?pt(t):yt(t)},Nt=k.NEGATIVE_INFINITY,bt=Number.POSITIVE_INFINITY,st=bt,dt=Nt,vt=function(t){return t===st||t===dt},ht=x,gt="function"==typeof Uint32Array,wt="function"==typeof Uint32Array?Uint32Array:null,At=function(t){return gt&&t instanceof Uint32Array||"[object Uint32Array]"===ht(t)},_t=wt,Ut=function(){var t,n;if("function"!=typeof _t)return!1;try{n=new _t(n=[1,3.14,-3.14,4294967296,4294967297]),t=At(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},jt="function"==typeof Uint32Array?Uint32Array:void 0,It=function(){throw new Error("not implemented")},Ot=Ut()?jt:It,St=x,Et="function"==typeof Float64Array,Tt="function"==typeof Float64Array?Float64Array:null,Ft=function(t){return Et&&t instanceof Float64Array||"[object Float64Array]"===St(t)},Ht=Tt,Gt=function(){var t,n;if("function"!=typeof Ht)return!1;try{n=new Ht([1,3.14,-3.14,NaN]),t=Ft(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t},Pt="function"==typeof Float64Array?Float64Array:void 0,Vt=function(){throw new Error("not implemented")},Mt=Gt()?Pt:Vt,Lt=x,Wt="function"==typeof Uint8Array,xt="function"==typeof Uint8Array?Uint8Array:null,kt=function(t){return Wt&&t instanceof Uint8Array||"[object Uint8Array]"===Lt(t)},qt=xt,Yt=function(){var t,n;if("function"!=typeof qt)return!1;try{n=new qt(n=[1,3.14,-3.14,256,257]),t=kt(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},Ct="function"==typeof Uint8Array?Uint8Array:void 0,Dt=function(){throw new Error("not implemented")},zt=Yt()?Ct:Dt,Bt=x,Jt="function"==typeof Uint16Array,Kt="function"==typeof Uint16Array?Uint16Array:null,Qt=function(t){return Jt&&t instanceof Uint16Array||"[object Uint16Array]"===Bt(t)},Rt=Kt,Xt=function(){var t,n;if("function"!=typeof Rt)return!1;try{n=new Rt(n=[1,3.14,-3.14,65536,65537]),t=Qt(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},Zt="function"==typeof Uint16Array?Uint16Array:void 0,$t=function(){throw new Error("not implemented")},tn={uint16:Xt()?Zt:$t,uint8:zt};(Z=new tn.uint16(1))[0]=4660;var nn,rn,en=52===new tn.uint8(Z.buffer)[0];!0===en?(nn=1,rn=0):(nn=0,rn=1);var on,un,fn=Ot,an={HIGH:nn,LOW:rn},cn=new Mt(1),ln=new fn(cn.buffer),yn=an.HIGH,pn=an.LOW,mn=function(t,n){return cn[0]=n,t[0]=ln[yn],t[1]=ln[pn],t},Nn=function(t,n){return 1===arguments.length?mn([0,0],t):mn(t,n)},bn=Nn,sn=Ot,dn=!0===en?1:0,vn=new Mt(1),hn=new sn(vn.buffer),gn=function(t){return vn[0]=t,hn[dn]};!0===en?(on=1,un=0):(on=0,un=1);var wn=Ot,An={HIGH:on,LOW:un},_n=new Mt(1),Un=new wn(_n.buffer),jn=An.HIGH,In=An.LOW,On=function(t,n){return Un[jn]=t,Un[In]=n,_n[0]},Sn=bn,En=gn,Tn=On,Fn=[0,0],Hn=vt,Gn=s,Pn=function(t){return Math.abs(t)},Vn=function(t,n){return Gn(n)||Hn(n)?(t[0]=n,t[1]=0,t):0!==n&&Pn(n)<22250738585072014e-324?(t[0]=4503599627370496*n,t[1]=-52,t):(t[0]=n,t[1]=0,t)},Mn=function(t,n){return 1===arguments.length?Vn([0,0],t):Vn(t,n)},Ln=gn,Wn=function(t){var n=Ln(t);return(n=(2146435072&n)>>>20)-1023|0},xn=bt,kn=Nt,qn=s,Yn=vt,Cn=function(t,n){var r,e;return Sn(Fn,t),r=Fn[0],r&=2147483647,e=En(n),Tn(r|=e&=2147483648,Fn[1])},Dn=Mn,zn=Wn,Bn=bn,Jn=On,Kn=[0,0],Qn=[0,0],Rn=function(t,n){var r,e;return 0===n||0===t||qn(t)||Yn(t)?t:(Dn(Kn,t),n+=Kn[1],(n+=zn(t=Kn[0]))<-1074?Cn(0,t):n>1023?t<0?kn:xn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Bn(Qn,t),r=Qn[0],r&=2148532223,e*Jn(r|=n+1023<<20,Qn[1])))},Xn=Rn,Zn=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)},$n=s,tr=mt,nr=Nt,rr=bt,er=function(t,n,r){var e,o,u;return u=(e=t-n)-(o=e*e)*Zn(o),Xn(1-(n-e*u/(2-u)-t),r)},or=1.4426950408889634,ur=1/(1<<28),ir=function(t){var n;return $n(t)||t===rr?t:t===nr?0:t>709.782712893384?rr:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<ur?1+t:(n=tr(t<0?or*t-.5:or*t+.5),er(t-.6931471803691238*n,1.9082149292705877e-10*n,n))},fr=s,ar=ir,cr=v,lr=s,yr=ir,pr=function(t,n){return fr(t)||fr(n)?NaN:ar(n*t)};b(pr,"factory",(function(t){return lr(t)?cr(NaN):function(n){return lr(n)?NaN:yr(t*n)}}));var mr=pr,Nr=bt,br=s,sr=v,dr=bt,vr=s,hr=function(t,n){return br(t)||br(n)?NaN:t===n?Nr:0};b(hr,"factory",(function(t){return vr(t)?sr(NaN):function(n){return vr(n)?NaN:n===t?dr:0}}));var gr=hr,wr=s,Ar=v,_r=s,Ur=function(t,n){return wr(t)||wr(n)?NaN:t===n?1:0};b(Ur,"factory",(function(t){return _r(t)?Ar(NaN):function(n){return _r(n)?NaN:n===t?1:0}}));var jr=Ur,Ir=s,Or=Nt,Sr=v,Er=s,Tr=Nt,Fr=function(t,n){return Ir(t)||Ir(n)?NaN:t<n?Or:0};b(Fr,"factory",(function(t){return Er(t)?Sr(NaN):function(n){return Er(n)?NaN:n<t?Tr:0}}));var Hr=Fr,Gr=bt,Pr=Nt,Vr=s,Mr=v,Lr=bt,Wr=Nt,xr=s,kr=function(t,n){return Vr(t)||Vr(n)?NaN:t===n?Gr:Pr};b(kr,"factory",(function(t){return xr(t)?Mr(NaN):function(n){return xr(n)?NaN:n===t?Lr:Wr}}));var qr=kr,Yr=s,Cr=Nt,Dr=v,zr=s,Br=Nt,Jr=function(t,n){return Yr(t)||Yr(n)?NaN:t===n?0:Cr};b(Jr,"factory",(function(t){return zr(t)?Dr(NaN):function(n){return zr(n)?NaN:n===t?0:Br}}));var Kr=Jr,Qr=s,Rr=v,Xr=s,Zr=function(t,n){return Qr(t)||t<0||t>1?NaN:n};b(Zr,"factory",(function(t){return Xr(t)?Rr(NaN):function(n){return Xr(n)||n<0||n>1?NaN:t}}));var $r=Zr,te=y,ne=b,re=U,ee=$,oe=s,ue=nt,ie=rt,fe=et,ae=ot,ce=it,le=at,ye=A,pe=mr,me=gr,Ne=jr,be=Hr,se=qr,de=Kr,ve=$r;function he(){var t;if(!(this instanceof he))return 0===arguments.length?new he:new he(arguments[0]);if(arguments.length){if(!ee(t=arguments[0])||oe(t))throw new TypeError("invalid argument. Mean parameter `mu` must be a number. Value: `"+t+"`")}else t=0;return te(this,"mu",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!ee(n)||oe(n))throw new TypeError("invalid value. Must be a number. Value: `"+n+"`");t=n}}),this}re(he.prototype,"entropy",(function(){return ue(this.mu)})),re(he.prototype,"mean",(function(){return ie(this.mu)})),re(he.prototype,"mode",(function(){return fe(this.mu)})),re(he.prototype,"median",(function(){return ae(this.mu)})),re(he.prototype,"stdev",(function(){return ce(this.mu)})),re(he.prototype,"variance",(function(){return le(this.mu)})),ne(he.prototype,"cdf",(function(t){return ye(t,this.mu)})),ne(he.prototype,"logcdf",(function(t){return be(t,this.mu)})),ne(he.prototype,"logpdf",(function(t){return se(t,this.mu)})),ne(he.prototype,"logpmf",(function(t){return de(t,this.mu)})),ne(he.prototype,"mgf",(function(t){return pe(t,this.mu)})),ne(he.prototype,"pdf",(function(t){return me(t,this.mu)})),ne(he.prototype,"pmf",(function(t){return Ne(t,this.mu)})),ne(he.prototype,"quantile",(function(t){return ve(t,this.mu)}));var ge=he,we={};return m(we,"cdf",A),m(we,"Degenerate",ge),m(we,"entropy",nt),m(we,"logcdf",Hr),m(we,"logpdf",qr),m(we,"logpmf",Kr),m(we,"mean",rt),m(we,"median",ot),m(we,"mgf",mr),m(we,"mode",et),m(we,"pdf",gr),m(we,"pmf",jr),m(we,"quantile",$r),m(we,"stdev",it),m(we,"variance",at),we},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).degenerate=n();
//# sourceMappingURL=browser.js.map
