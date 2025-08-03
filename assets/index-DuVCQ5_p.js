const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-CQM-BNTe.js","assets/HomeView-HMI4RJN7.css","assets/CoursesView-hhc9rXup.js","assets/CoursesView-M9qKBZF9.css","assets/CourseDetailView-QM_0xn0Q.js","assets/CourseDetailView-DXthxMly.css","assets/BlogView-DVBcS45R.js","assets/BlogView-CyTX2mUY.css","assets/SinglePostView-DYaetFlN.js","assets/SinglePostView-BYlalDsB.css","assets/WhyNexusView-D1NRpHvy.js","assets/WhyNexusView-DyyFeLql.css","assets/AboutView-2ryUUzDV.js","assets/AboutView-CHOGONw0.css","assets/ContactView-DB_r1qh5.js","assets/ContactView-Cv9fVwjM.css","assets/TermsView-c1078_wW.js","assets/TermsView-Bhi_REvG.css","assets/PrivacyView-3rkF--2D.js","assets/PrivacyView-DekBH_-h.css","assets/LoginView-ZOJeFoEK.js","assets/LoginView-BMsBPcUF.css","assets/SignupView-D0gchMOB.js","assets/SignupView--RFAIwPo.css","assets/MyLearning-DOgTdRdE.js","assets/MyLearning-DhCyMvyj.css","assets/ProfilePage-cOygKeF-.js","assets/ProfilePage-CuHy5QgV.css","assets/SettingsPage-DCzvS_LU.js","assets/SettingsPage-lNm7cFpX.css","assets/AdminDashboard-BUF8dA6-.js","assets/AdminDashboard-CLKp_XcE.css","assets/AdminCourses-lf5V2khY.js","assets/AdminCourses-BgX4hIuJ.css","assets/CourseEditorView-l9HTRa5K.js","assets/CourseEditorView-Dmgxh3K2.css","assets/AdminBlog-eaFJwf_m.js","assets/AdminBlog-BYOATwVi.css","assets/BlogPostEditorView-V-780Svx.js","assets/BlogPostEditorView-C0IU1X5-.css","assets/AdminEnrollments-D4jtw9a5.js","assets/AdminEnrollments-vykV2Yua.css","assets/AdminUsers-CxQbi6t2.js","assets/AdminUsers-Nd9Jckzl.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},ms=[],gn=()=>{},Qy=()=>!1,Na=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wl=t=>t.startsWith("onUpdate:"),At=Object.assign,zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yy=Object.prototype.hasOwnProperty,De=(t,e)=>Yy.call(t,e),ie=Array.isArray,gs=t=>Yi(t)==="[object Map]",Ls=t=>Yi(t)==="[object Set]",nf=t=>Yi(t)==="[object Date]",de=t=>typeof t=="function",et=t=>typeof t=="string",wn=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",kp=t=>(Ue(t)||de(t))&&de(t.then)&&de(t.catch),Vp=Object.prototype.toString,Yi=t=>Vp.call(t),Jy=t=>Yi(t).slice(8,-1),Dp=t=>Yi(t)==="[object Object]",Kl=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_i=Hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xy=/-(\w)/g,tn=Oa(t=>t.replace(Xy,(e,n)=>n?n.toUpperCase():"")),Zy=/\B([A-Z])/g,Xr=Oa(t=>t.replace(Zy,"-$1").toLowerCase()),xa=Oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nc=Oa(t=>t?`on${xa(t)}`:""),hr=(t,e)=>!Object.is(t,e),$o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},sl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},sa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rf;const Ma=()=>rf||(rf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?rv(r):Gl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||Ue(t))return t}const ev=/;(?![^(]*\))/g,tv=/:([^]+)/,nv=/\/\*[^]*?\*\//g;function rv(t){const e={};return t.replace(nv,"").split(ev).forEach(n=>{if(n){const r=n.split(tv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jt(t){let e="";if(et(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Jt(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iv=Hl(sv);function Np(t){return!!t||t===""}function ov(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Hr(t[r],e[r]);return n}function Hr(t,e){if(t===e)return!0;let n=nf(t),r=nf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=wn(t),r=wn(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?ov(t,e):!1;if(n=Ue(t),r=Ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Hr(t[o],e[o]))return!1}}return String(t)===String(e)}function Ql(t,e){return t.findIndex(n=>Hr(n,e))}const Op=t=>!!(t&&t.__v_isRef===!0),Mt=t=>et(t)?t:t==null?"":ie(t)||Ue(t)&&(t.toString===Vp||!de(t.toString))?Op(t)?Mt(t.value):JSON.stringify(t,xp,2):String(t),xp=(t,e)=>Op(e)?xp(t,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Oc(r,i)+" =>"]=s,n),{})}:Ls(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Oc(n))}:wn(e)?Oc(e):Ue(e)&&!ie(e)&&!Dp(e)?String(e):e,Oc=(t,e="")=>{var n;return wn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class av{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){++this._on===1&&(this.prevScope=Dt,Dt=this)}off(){this._on>0&&--this._on===0&&(Dt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cv(){return Dt}let Me;const xc=new WeakSet;class Mp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dt&&Dt.active&&Dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xc.has(this)&&(xc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Up(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sf(this),Fp(this);const e=Me,n=an;Me=this,an=!0;try{return this.fn()}finally{Bp(this),Me=e,an=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xl(e);this.deps=this.depsTail=void 0,sf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){il(this)&&this.run()}get dirty(){return il(this)}}let Lp=0,yi,vi;function Up(t,e=!1){if(t.flags|=8,e){t.next=vi,vi=t;return}t.next=yi,yi=t}function Yl(){Lp++}function Jl(){if(--Lp>0)return;if(vi){let e=vi;for(vi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;yi;){let e=yi;for(yi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Fp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Xl(r),lv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function il(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($p(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $p(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ni)||(t.globalVersion=Ni,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!il(t))))return;t.flags|=2;const e=t.dep,n=Me,r=an;Me=t,an=!0;try{Fp(t);const s=t.fn(t._value);(e.version===0||hr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,an=r,Bp(t),t.flags&=-3}}function Xl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Xl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function lv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let an=!0;const jp=[];function Bn(){jp.push(an),an=!1}function $n(){const t=jp.pop();an=t===void 0?!0:t}function sf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Ni=0;class uv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!an||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new uv(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,qp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Ni++,this.notify(e)}notify(e){Yl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jl()}}}function qp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)qp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ol=new WeakMap,jr=Symbol(""),al=Symbol(""),Oi=Symbol("");function Et(t,e,n){if(an&&Me){let r=ol.get(t);r||ol.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Zl),s.map=r,s.key=n),s.track()}}function Nn(t,e,n,r,s,i){const o=ol.get(t);if(!o){Ni++;return}const c=l=>{l&&l.trigger()};if(Yl(),e==="clear")o.forEach(c);else{const l=ie(t),h=l&&Kl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Oi||!wn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(Oi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(jr)),gs(t)&&c(o.get(al)));break;case"delete":l||(c(o.get(jr)),gs(t)&&c(o.get(al)));break;case"set":gs(t)&&c(o.get(jr));break}}Jl()}function ls(t){const e=Ve(t);return e===t?e:(Et(e,"iterate",Oi),Xt(t)?e:e.map(ut))}function La(t){return Et(t=Ve(t),"iterate",Oi),t}const hv={__proto__:null,[Symbol.iterator](){return Mc(this,Symbol.iterator,ut)},concat(...t){return ls(this).concat(...t.map(e=>ie(e)?ls(e):e))},entries(){return Mc(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return kn(this,"every",t,e,void 0,arguments)},filter(t,e){return kn(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return kn(this,"find",t,e,ut,arguments)},findIndex(t,e){return kn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return kn(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return kn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return kn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Lc(this,"includes",t)},indexOf(...t){return Lc(this,"indexOf",t)},join(t){return ls(this).join(t)},lastIndexOf(...t){return Lc(this,"lastIndexOf",t)},map(t,e){return kn(this,"map",t,e,void 0,arguments)},pop(){return ai(this,"pop")},push(...t){return ai(this,"push",t)},reduce(t,...e){return of(this,"reduce",t,e)},reduceRight(t,...e){return of(this,"reduceRight",t,e)},shift(){return ai(this,"shift")},some(t,e){return kn(this,"some",t,e,void 0,arguments)},splice(...t){return ai(this,"splice",t)},toReversed(){return ls(this).toReversed()},toSorted(t){return ls(this).toSorted(t)},toSpliced(...t){return ls(this).toSpliced(...t)},unshift(...t){return ai(this,"unshift",t)},values(){return Mc(this,"values",ut)}};function Mc(t,e,n){const r=La(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const fv=Array.prototype;function kn(t,e,n,r,s,i){const o=La(t),c=o!==t&&!Xt(t),l=o[e];if(l!==fv[e]){const p=l.apply(t,i);return c?ut(p):p}let h=n;o!==t&&(c?h=function(p,m){return n.call(this,ut(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function of(t,e,n,r){const s=La(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ut(c),l,t)}),s[e](i,...r)}function Lc(t,e,n){const r=Ve(t);Et(r,"iterate",Oi);const s=r[e](...n);return(s===-1||s===!1)&&nu(n[0])?(n[0]=Ve(n[0]),r[e](...n)):s}function ai(t,e,n=[]){Bn(),Yl();const r=Ve(t)[e].apply(t,n);return Jl(),$n(),r}const dv=Hl("__proto__,__v_isRef,__isVue"),Hp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wn));function pv(t){wn(t)||(t=String(t));const e=Ve(this);return Et(e,"has",t),e.hasOwnProperty(t)}class Wp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Av:Qp:i?Gp:Kp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let l;if(o&&(l=hv[n]))return l;if(n==="hasOwnProperty")return pv}const c=Reflect.get(e,n,wt(e)?e:r);return(wn(n)?Hp.has(n):dv(n))||(s||Et(e,"get",n),i)?c:wt(c)?o&&Kl(n)?c:c.value:Ue(c)?s?Jp(c):Ua(c):c}}class zp extends Wp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=yr(i);if(!Xt(r)&&!yr(r)&&(i=Ve(i),r=Ve(r)),!ie(e)&&wt(i)&&!wt(r))return l?!1:(i.value=r,!0)}const o=ie(e)&&Kl(n)?Number(n)<e.length:De(e,n),c=Reflect.set(e,n,r,wt(e)?e:s);return e===Ve(s)&&(o?hr(r,i)&&Nn(e,"set",n,r):Nn(e,"add",n,r)),c}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Nn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!wn(n)||!Hp.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ie(e)?"length":jr),Reflect.ownKeys(e)}}class mv extends Wp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gv=new zp,_v=new mv,yv=new zp(!0);const cl=t=>t,ko=t=>Reflect.getPrototypeOf(t);function vv(t,e,n){return function(...r){const s=this.__v_raw,i=Ve(s),o=gs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?cl:e?ia:ut;return!e&&Et(i,"iterate",l?al:jr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Vo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ev(t,e){const n={get(s){const i=this.__v_raw,o=Ve(i),c=Ve(s);t||(hr(s,c)&&Et(o,"get",s),Et(o,"get",c));const{has:l}=ko(o),h=e?cl:t?ia:ut;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Ve(s),"iterate",jr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ve(i),c=Ve(s);return t||(hr(s,c)&&Et(o,"has",s),Et(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ve(c),h=e?cl:t?ia:ut;return!t&&Et(l,"iterate",jr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return At(n,t?{add:Vo("add"),set:Vo("set"),delete:Vo("delete"),clear:Vo("clear")}:{add(s){!e&&!Xt(s)&&!yr(s)&&(s=Ve(s));const i=Ve(this);return ko(i).has.call(i,s)||(i.add(s),Nn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!yr(i)&&(i=Ve(i));const o=Ve(this),{has:c,get:l}=ko(o);let h=c.call(o,s);h||(s=Ve(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?hr(i,f)&&Nn(o,"set",s,i):Nn(o,"add",s,i),this},delete(s){const i=Ve(this),{has:o,get:c}=ko(i);let l=o.call(i,s);l||(s=Ve(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&Nn(i,"delete",s,void 0),h},clear(){const s=Ve(this),i=s.size!==0,o=s.clear();return i&&Nn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=vv(s,t,e)}),n}function eu(t,e){const n=Ev(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const Tv={get:eu(!1,!1)},Iv={get:eu(!1,!0)},wv={get:eu(!0,!1)};const Kp=new WeakMap,Gp=new WeakMap,Qp=new WeakMap,Av=new WeakMap;function Rv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bv(t){return t.__v_skip||!Object.isExtensible(t)?0:Rv(Jy(t))}function Ua(t){return yr(t)?t:tu(t,!1,gv,Tv,Kp)}function Yp(t){return tu(t,!1,yv,Iv,Gp)}function Jp(t){return tu(t,!0,_v,wv,Qp)}function tu(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=bv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function _s(t){return yr(t)?_s(t.__v_raw):!!(t&&t.__v_isReactive)}function yr(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function nu(t){return t?!!t.__v_raw:!1}function Ve(t){const e=t&&t.__v_raw;return e?Ve(e):t}function Sv(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&sl(t,"__v_skip",!0),t}const ut=t=>Ue(t)?Ua(t):t,ia=t=>Ue(t)?Jp(t):t;function wt(t){return t?t.__v_isRef===!0:!1}function kt(t){return Xp(t,!1)}function Pv(t){return Xp(t,!0)}function Xp(t,e){return wt(t)?t:new Cv(t,e)}class Cv{constructor(e,n){this.dep=new Zl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ve(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||yr(e);e=r?e:Ve(e),hr(e,n)&&(this._rawValue=e,this._value=r?e:ut(e),this.dep.trigger())}}function fe(t){return wt(t)?t.value:t}const kv={get:(t,e,n)=>e==="__v_raw"?t:fe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return wt(s)&&!wt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zp(t){return _s(t)?t:new Proxy(t,kv)}class Vv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Zl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ni-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Up(this,!0),!0}get value(){const e=this.dep.track();return $p(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Dv(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new Vv(r,s,n)}const Do={},oa=new WeakMap;let Fr;function Nv(t,e=!1,n=Fr){if(n){let r=oa.get(n);r||oa.set(n,r=[]),r.push(t)}}function Ov(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=Q=>s?Q:Xt(Q)||s===!1||s===0?On(Q,1):On(Q);let f,p,m,_,k=!1,C=!1;if(wt(t)?(p=()=>t.value,k=Xt(t)):_s(t)?(p=()=>h(t),k=!0):ie(t)?(C=!0,k=t.some(Q=>_s(Q)||Xt(Q)),p=()=>t.map(Q=>{if(wt(Q))return Q.value;if(_s(Q))return h(Q);if(de(Q))return l?l(Q,2):Q()})):de(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Bn();try{m()}finally{$n()}}const Q=Fr;Fr=f;try{return l?l(t,3,[_]):t(_)}finally{Fr=Q}}:p=gn,e&&s){const Q=p,me=s===!0?1/0:s;p=()=>On(Q(),me)}const N=cv(),j=()=>{f.stop(),N&&N.active&&zl(N.effects,f)};if(i&&e){const Q=e;e=(...me)=>{Q(...me),j()}}let B=C?new Array(t.length).fill(Do):Do;const q=Q=>{if(!(!(f.flags&1)||!f.dirty&&!Q))if(e){const me=f.run();if(s||k||(C?me.some((Ee,w)=>hr(Ee,B[w])):hr(me,B))){m&&m();const Ee=Fr;Fr=f;try{const w=[me,B===Do?void 0:C&&B[0]===Do?[]:B,_];B=me,l?l(e,3,w):e(...w)}finally{Fr=Ee}}}else f.run()};return c&&c(q),f=new Mp(p),f.scheduler=o?()=>o(q,!1):q,_=Q=>Nv(Q,!1,f),m=f.onStop=()=>{const Q=oa.get(f);if(Q){if(l)l(Q,4);else for(const me of Q)me();oa.delete(f)}},e?r?q(!0):B=f.run():o?o(q.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function On(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,wt(t))On(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)On(t[r],e,n);else if(Ls(t)||gs(t))t.forEach(r=>{On(r,e,n)});else if(Dp(t)){for(const r in t)On(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&On(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ji(t,e,n,r){try{return r?t(...r):t()}catch(s){Fa(s,e,n)}}function An(t,e,n,r){if(de(t)){const s=Ji(t,e,n,r);return s&&kp(s)&&s.catch(i=>{Fa(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(An(t[i],e,n,r));return s}}function Fa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){Bn(),Ji(i,null,10,[t,l,h]),$n();return}}xv(t,n,s,r,o)}function xv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ct=[];let dn=-1;const ys=[];let nr=null,us=0;const em=Promise.resolve();let aa=null;function Ba(t){const e=aa||em;return t?e.then(this?t.bind(this):t):e}function Mv(t){let e=dn+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=xi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ru(t){if(!(t.flags&1)){const e=xi(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=xi(n)?Ct.push(t):Ct.splice(Mv(e),0,t),t.flags|=1,tm()}}function tm(){aa||(aa=em.then(rm))}function Lv(t){ie(t)?ys.push(...t):nr&&t.id===-1?nr.splice(us+1,0,t):t.flags&1||(ys.push(t),t.flags|=1),tm()}function af(t,e,n=dn+1){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nm(t){if(ys.length){const e=[...new Set(ys)].sort((n,r)=>xi(n)-xi(r));if(ys.length=0,nr){nr.push(...e);return}for(nr=e,us=0;us<nr.length;us++){const n=nr[us];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nr=null,us=0}}const xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function rm(t){try{for(dn=0;dn<Ct.length;dn++){const e=Ct[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ji(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<Ct.length;dn++){const e=Ct[dn];e&&(e.flags&=-2)}dn=-1,Ct.length=0,nm(),aa=null,(Ct.length||ys.length)&&rm()}}let $t=null,sm=null;function ca(t){const e=$t;return $t=t,sm=t&&t.type.__scopeId||null,e}function Ae(t,e=$t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&yf(-1);const i=ca(e);let o;try{o=t(...s)}finally{ca(i),r._d&&yf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function T1(t,e){if($t===null)return t;const n=Wa($t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=xe]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&On(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Bn(),An(l,n,8,[t.el,c,t,e]),$n())}}const Uv=Symbol("_vte"),Fv=t=>t.__isTeleport;function su(t,e){t.shapeFlag&6&&t.component?(t.transition=e,su(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function im(t,e){return de(t)?At({name:t.name},e,{setup:t}):t}function om(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ei(t,e,n,r,s=!1){if(ie(t)){t.forEach((k,C)=>Ei(k,e&&(ie(e)?e[C]:e),n,r,s));return}if(Ti(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ei(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Wa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===xe?c.refs={}:c.refs,p=c.setupState,m=Ve(p),_=p===xe?()=>!1:k=>De(m,k);if(h!=null&&h!==l&&(et(h)?(f[h]=null,_(h)&&(p[h]=null)):wt(h)&&(h.value=null)),de(l))Ji(l,c,12,[o,f]);else{const k=et(l),C=wt(l);if(k||C){const N=()=>{if(t.f){const j=k?_(l)?p[l]:f[l]:l.value;s?ie(j)&&zl(j,i):ie(j)?j.includes(i)||j.push(i):k?(f[l]=[i],_(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else k?(f[l]=o,_(l)&&(p[l]=o)):C&&(l.value=o,t.k&&(f[t.k]=o))};o?(N.id=-1,Bt(N,n)):N()}}}Ma().requestIdleCallback;Ma().cancelIdleCallback;const Ti=t=>!!t.type.__asyncLoader,am=t=>t.type.__isKeepAlive;function Bv(t,e){cm(t,"a",e)}function $v(t,e){cm(t,"da",e)}function cm(t,e,n=It){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($a(e,r,n),n){let s=n.parent;for(;s&&s.parent;)am(s.parent.vnode)&&jv(r,e,n,s),s=s.parent}}function jv(t,e,n,r){const s=$a(e,t,r,!0);ja(()=>{zl(r[e],s)},n)}function $a(t,e,n=It,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Bn();const c=Zi(n),l=An(e,n,t,o);return c(),$n(),l});return r?s.unshift(i):s.push(i),i}}const zn=t=>(e,n=It)=>{(!Li||t==="sp")&&$a(t,(...r)=>e(...r),n)},qv=zn("bm"),Xi=zn("m"),Hv=zn("bu"),Wv=zn("u"),zv=zn("bum"),ja=zn("um"),Kv=zn("sp"),Gv=zn("rtg"),Qv=zn("rtc");function Yv(t,e=It){$a("ec",t,e)}const Jv="components";function I1(t,e){return Zv(Jv,t,!0,e)||t}const Xv=Symbol.for("v-ndc");function Zv(t,e,n=!0,r=!1){const s=$t||It;if(s){const i=s.type;{const c=$E(i,!1);if(c&&(c===e||c===tn(e)||c===xa(tn(e))))return i}const o=cf(s[t]||i[t],e)||cf(s.appContext[t],e);return!o&&r?i:o}}function cf(t,e){return t&&(t[e]||t[tn(e)]||t[xa(tn(e))])}function lf(t,e,n,r){let s;const i=n,o=ie(t);if(o||et(t)){const c=o&&_s(t);let l=!1,h=!1;c&&(l=!Xt(t),h=yr(t),t=La(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?ia(ut(t[f])):ut(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const ll=t=>t?Pm(t)?Wa(t):ll(t.parent):null,Ii=At(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ll(t.parent),$root:t=>ll(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>um(t),$forceUpdate:t=>t.f||(t.f=()=>{ru(t.update)}),$nextTick:t=>t.n||(t.n=Ba.bind(t.proxy)),$watch:t=>EE.bind(t)}),Uc=(t,e)=>t!==xe&&!t.__isScriptSetup&&De(t,e),eE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Uc(r,e))return o[e]=1,r[e];if(s!==xe&&De(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&De(h,e))return o[e]=3,i[e];if(n!==xe&&De(n,e))return o[e]=4,n[e];ul&&(o[e]=0)}}const f=Ii[e];let p,m;if(f)return e==="$attrs"&&Et(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==xe&&De(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,De(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Uc(s,e)?(s[e]=n,!0):r!==xe&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==xe&&De(t,o)||Uc(e,o)||(c=i[0])&&De(c,o)||De(r,o)||De(Ii,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function uf(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ul=!0;function tE(t){const e=um(t),n=t.proxy,r=t.ctx;ul=!1,e.beforeCreate&&hf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:k,activated:C,deactivated:N,beforeDestroy:j,beforeUnmount:B,destroyed:q,unmounted:Q,render:me,renderTracked:Ee,renderTriggered:w,errorCaptured:v,serverPrefetch:I,expose:A,inheritAttrs:R,components:S,directives:T,filters:bt}=e;if(h&&nE(h,r,null),o)for(const Te in o){const ge=o[Te];de(ge)&&(r[Te]=ge.bind(n))}if(s){const Te=s.call(n,n);Ue(Te)&&(t.data=Ua(Te))}if(ul=!0,i)for(const Te in i){const ge=i[Te],Ut=de(ge)?ge.bind(n,n):de(ge.get)?ge.get.bind(n,n):gn,rn=!de(ge)&&de(ge.set)?ge.set.bind(n):gn,zt=ht({get:Ut,set:rn});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>zt.value,set:qe=>zt.value=qe})}if(c)for(const Te in c)lm(c[Te],r,n,Te);if(l){const Te=de(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(ge=>{jo(ge,Te[ge])})}f&&hf(f,t,"c");function Qe(Te,ge){ie(ge)?ge.forEach(Ut=>Te(Ut.bind(n))):ge&&Te(ge.bind(n))}if(Qe(qv,p),Qe(Xi,m),Qe(Hv,_),Qe(Wv,k),Qe(Bv,C),Qe($v,N),Qe(Yv,v),Qe(Qv,Ee),Qe(Gv,w),Qe(zv,B),Qe(ja,Q),Qe(Kv,I),ie(A))if(A.length){const Te=t.exposed||(t.exposed={});A.forEach(ge=>{Object.defineProperty(Te,ge,{get:()=>n[ge],set:Ut=>n[ge]=Ut,enumerable:!0})})}else t.exposed||(t.exposed={});me&&t.render===gn&&(t.render=me),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),T&&(t.directives=T),I&&om(t)}function nE(t,e,n=gn){ie(t)&&(t=hl(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=cn(s.from||r,s.default,!0):i=cn(s.from||r):i=cn(s),wt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function hf(t,e,n){An(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function lm(t,e,n,r){let s=r.includes(".")?wm(n,r):()=>n[r];if(et(t)){const i=e[t];de(i)&&qo(s,i)}else if(de(t))qo(s,t.bind(n));else if(Ue(t))if(ie(t))t.forEach(i=>lm(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&qo(s,i,t)}}function um(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>la(l,h,o,!0)),la(l,e,o)),Ue(e)&&i.set(e,l),l}function la(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&la(t,i,n,!0),s&&s.forEach(o=>la(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=rE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const rE={data:ff,props:df,emits:df,methods:ui,computed:ui,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:ui,directives:ui,watch:iE,provide:ff,inject:sE};function ff(t,e){return e?t?function(){return At(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function sE(t,e){return ui(hl(t),hl(e))}function hl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function ui(t,e){return t?At(Object.create(null),t,e):e}function df(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:At(Object.create(null),uf(t),uf(e??{})):e}function iE(t,e){if(!t)return e;if(!e)return t;const n=At(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function hm(){return{app:null,config:{isNativeTag:Qy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oE=0;function aE(t,e){return function(r,s=null){de(r)||(r=At({},r)),s!=null&&!Ue(s)&&(s=null);const i=hm(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:oE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:qE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&de(f.install)?(o.add(f),f.install(h,...p)):de(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!l){const _=h._ceVNode||oe(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,h._container=f,f.__vue_app__=h,Wa(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(An(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=vs;vs=h;try{return f()}finally{vs=p}}};return h}}let vs=null;function jo(t,e){if(It){let n=It.provides;const r=It.parent&&It.parent.provides;r===n&&(n=It.provides=Object.create(r)),n[t]=e}}function cn(t,e,n=!1){const r=ME();if(r||vs){let s=vs?vs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}const fm={},dm=()=>Object.create(fm),pm=t=>Object.getPrototypeOf(t)===fm;function cE(t,e,n,r=!1){const s={},i=dm();t.propsDefaults=Object.create(null),mm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function lE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ve(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(qa(t.emitsOptions,m))continue;const _=e[m];if(l)if(De(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const k=tn(m);s[k]=fl(l,c,k,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{mm(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!De(e,p)&&((f=Xr(p))===p||!De(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=fl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!De(e,p))&&(delete i[p],h=!0)}h&&Nn(t.attrs,"set","")}function mm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(_i(l))continue;const h=e[l];let f;s&&De(s,f=tn(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:qa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ve(n),h=c||xe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=fl(s,l,p,h[p],t,!De(h,p))}}return o}function fl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=De(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Zi(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Xr(n))&&(r=!0))}return r}const uE=new WeakMap;function gm(t,e,n=!1){const r=n?uE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const f=p=>{l=!0;const[m,_]=gm(p,e,!0);At(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ue(t)&&r.set(t,ms),ms;if(ie(i))for(let f=0;f<i.length;f++){const p=tn(i[f]);pf(p)&&(o[p]=xe)}else if(i)for(const f in i){const p=tn(f);if(pf(p)){const m=i[f],_=o[p]=ie(m)||de(m)?{type:m}:At({},m),k=_.type;let C=!1,N=!0;if(ie(k))for(let j=0;j<k.length;++j){const B=k[j],q=de(B)&&B.name;if(q==="Boolean"){C=!0;break}else q==="String"&&(N=!1)}else C=de(k)&&k.name==="Boolean";_[0]=C,_[1]=N,(C||De(_,"default"))&&c.push(p)}}const h=[o,c];return Ue(t)&&r.set(t,h),h}function pf(t){return t[0]!=="$"&&!_i(t)}const iu=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",ou=t=>ie(t)?t.map(mn):[mn(t)],hE=(t,e,n)=>{if(e._n)return e;const r=Ae((...s)=>ou(e(...s)),n);return r._c=!1,r},_m=(t,e,n)=>{const r=t._ctx;for(const s in t){if(iu(s))continue;const i=t[s];if(de(i))e[s]=hE(s,i,r);else if(i!=null){const o=ou(i);e[s]=()=>o}}},ym=(t,e)=>{const n=ou(e);t.slots.default=()=>n},vm=(t,e,n)=>{for(const r in e)(n||!iu(r))&&(t[r]=e[r])},fE=(t,e,n)=>{const r=t.slots=dm();if(t.vnode.shapeFlag&32){const s=e.__;s&&sl(r,"__",s,!0);const i=e._;i?(vm(r,e,n),n&&sl(r,"_",i,!0)):_m(e,r)}else e&&ym(t,e)},dE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:vm(s,e,n):(i=!e.$stable,_m(e,s)),o=e}else e&&(ym(t,e),o={default:1});if(i)for(const c in s)!iu(c)&&o[c]==null&&delete s[c]},Bt=SE;function pE(t){return mE(t)}function mE(t,e){const n=Ma();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=gn,insertStaticContent:k}=t,C=(y,E,b,x=null,U=null,M=null,Y=void 0,W=null,H=!!E.dynamicChildren)=>{if(y===E)return;y&&!ci(y,E)&&(x=O(y),qe(y,U,M,!0),y=null),E.patchFlag===-2&&(H=!1,E.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:K}=E;switch(F){case Ha:N(y,E,b,x);break;case vr:j(y,E,b,x);break;case Ho:y==null&&B(E,b,x,Y);break;case Qt:S(y,E,b,x,U,M,Y,W,H);break;default:K&1?me(y,E,b,x,U,M,Y,W,H):K&6?T(y,E,b,x,U,M,Y,W,H):(K&64||K&128)&&F.process(y,E,b,x,U,M,Y,W,H,ee)}ne!=null&&U?Ei(ne,y&&y.ref,M,E||y,!E):ne==null&&y&&y.ref!=null&&Ei(y.ref,null,M,y,!0)},N=(y,E,b,x)=>{if(y==null)r(E.el=c(E.children),b,x);else{const U=E.el=y.el;E.children!==y.children&&h(U,E.children)}},j=(y,E,b,x)=>{y==null?r(E.el=l(E.children||""),b,x):E.el=y.el},B=(y,E,b,x)=>{[y.el,y.anchor]=k(y.children,E,b,x,y.el,y.anchor)},q=({el:y,anchor:E},b,x)=>{let U;for(;y&&y!==E;)U=m(y),r(y,b,x),y=U;r(E,b,x)},Q=({el:y,anchor:E})=>{let b;for(;y&&y!==E;)b=m(y),s(y),y=b;s(E)},me=(y,E,b,x,U,M,Y,W,H)=>{E.type==="svg"?Y="svg":E.type==="math"&&(Y="mathml"),y==null?Ee(E,b,x,U,M,Y,W,H):I(y,E,U,M,Y,W,H)},Ee=(y,E,b,x,U,M,Y,W)=>{let H,F;const{props:ne,shapeFlag:K,transition:te,dirs:le}=y;if(H=y.el=o(y.type,M,ne&&ne.is,ne),K&8?f(H,y.children):K&16&&v(y.children,H,null,x,U,Fc(y,M),Y,W),le&&Lr(y,null,x,"created"),w(H,y,y.scopeId,Y,x),ne){for(const pe in ne)pe!=="value"&&!_i(pe)&&i(H,pe,null,ne[pe],M,x);"value"in ne&&i(H,"value",null,ne.value,M),(F=ne.onVnodeBeforeMount)&&fn(F,x,y)}le&&Lr(y,null,x,"beforeMount");const se=gE(U,te);se&&te.beforeEnter(H),r(H,E,b),((F=ne&&ne.onVnodeMounted)||se||le)&&Bt(()=>{F&&fn(F,x,y),se&&te.enter(H),le&&Lr(y,null,x,"mounted")},U)},w=(y,E,b,x,U)=>{if(b&&_(y,b),x)for(let M=0;M<x.length;M++)_(y,x[M]);if(U){let M=U.subTree;if(E===M||Rm(M.type)&&(M.ssContent===E||M.ssFallback===E)){const Y=U.vnode;w(y,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},v=(y,E,b,x,U,M,Y,W,H=0)=>{for(let F=H;F<y.length;F++){const ne=y[F]=W?rr(y[F]):mn(y[F]);C(null,ne,E,b,x,U,M,Y,W)}},I=(y,E,b,x,U,M,Y)=>{const W=E.el=y.el;let{patchFlag:H,dynamicChildren:F,dirs:ne}=E;H|=y.patchFlag&16;const K=y.props||xe,te=E.props||xe;let le;if(b&&Ur(b,!1),(le=te.onVnodeBeforeUpdate)&&fn(le,b,E,y),ne&&Lr(E,y,b,"beforeUpdate"),b&&Ur(b,!0),(K.innerHTML&&te.innerHTML==null||K.textContent&&te.textContent==null)&&f(W,""),F?A(y.dynamicChildren,F,W,b,x,Fc(E,U),M):Y||ge(y,E,W,null,b,x,Fc(E,U),M,!1),H>0){if(H&16)R(W,K,te,b,U);else if(H&2&&K.class!==te.class&&i(W,"class",null,te.class,U),H&4&&i(W,"style",K.style,te.style,U),H&8){const se=E.dynamicProps;for(let pe=0;pe<se.length;pe++){const Ie=se[pe],it=K[Ie],ot=te[Ie];(ot!==it||Ie==="value")&&i(W,Ie,it,ot,U,b)}}H&1&&y.children!==E.children&&f(W,E.children)}else!Y&&F==null&&R(W,K,te,b,U);((le=te.onVnodeUpdated)||ne)&&Bt(()=>{le&&fn(le,b,E,y),ne&&Lr(E,y,b,"updated")},x)},A=(y,E,b,x,U,M,Y)=>{for(let W=0;W<E.length;W++){const H=y[W],F=E[W],ne=H.el&&(H.type===Qt||!ci(H,F)||H.shapeFlag&198)?p(H.el):b;C(H,F,ne,null,x,U,M,Y,!0)}},R=(y,E,b,x,U)=>{if(E!==b){if(E!==xe)for(const M in E)!_i(M)&&!(M in b)&&i(y,M,E[M],null,U,x);for(const M in b){if(_i(M))continue;const Y=b[M],W=E[M];Y!==W&&M!=="value"&&i(y,M,W,Y,U,x)}"value"in b&&i(y,"value",E.value,b.value,U)}},S=(y,E,b,x,U,M,Y,W,H)=>{const F=E.el=y?y.el:c(""),ne=E.anchor=y?y.anchor:c("");let{patchFlag:K,dynamicChildren:te,slotScopeIds:le}=E;le&&(W=W?W.concat(le):le),y==null?(r(F,b,x),r(ne,b,x),v(E.children||[],b,ne,U,M,Y,W,H)):K>0&&K&64&&te&&y.dynamicChildren?(A(y.dynamicChildren,te,b,U,M,Y,W),(E.key!=null||U&&E===U.subTree)&&Em(y,E,!0)):ge(y,E,b,ne,U,M,Y,W,H)},T=(y,E,b,x,U,M,Y,W,H)=>{E.slotScopeIds=W,y==null?E.shapeFlag&512?U.ctx.activate(E,b,x,Y,H):bt(E,b,x,U,M,Y,H):Wt(y,E,H)},bt=(y,E,b,x,U,M,Y)=>{const W=y.component=xE(y,x,U);if(am(y)&&(W.ctx.renderer=ee),LE(W,!1,Y),W.asyncDep){if(U&&U.registerDep(W,Qe,Y),!y.el){const H=W.subTree=oe(vr);j(null,H,E,b),y.placeholder=H.el}}else Qe(W,y,E,b,U,M,Y)},Wt=(y,E,b)=>{const x=E.component=y.component;if(RE(y,E,b))if(x.asyncDep&&!x.asyncResolved){Te(x,E,b);return}else x.next=E,x.update();else E.el=y.el,x.vnode=E},Qe=(y,E,b,x,U,M,Y)=>{const W=()=>{if(y.isMounted){let{next:K,bu:te,u:le,parent:se,vnode:pe}=y;{const mt=Tm(y);if(mt){K&&(K.el=pe.el,Te(y,K,Y)),mt.asyncDep.then(()=>{y.isUnmounted||W()});return}}let Ie=K,it;Ur(y,!1),K?(K.el=pe.el,Te(y,K,Y)):K=pe,te&&$o(te),(it=K.props&&K.props.onVnodeBeforeUpdate)&&fn(it,se,K,pe),Ur(y,!0);const ot=gf(y),Kt=y.subTree;y.subTree=ot,C(Kt,ot,p(Kt.el),O(Kt),y,U,M),K.el=ot.el,Ie===null&&bE(y,ot.el),le&&Bt(le,U),(it=K.props&&K.props.onVnodeUpdated)&&Bt(()=>fn(it,se,K,pe),U)}else{let K;const{el:te,props:le}=E,{bm:se,m:pe,parent:Ie,root:it,type:ot}=y,Kt=Ti(E);Ur(y,!1),se&&$o(se),!Kt&&(K=le&&le.onVnodeBeforeMount)&&fn(K,Ie,E),Ur(y,!0);{it.ce&&it.ce._def.shadowRoot!==!1&&it.ce._injectChildStyle(ot);const mt=y.subTree=gf(y);C(null,mt,b,x,y,U,M),E.el=mt.el}if(pe&&Bt(pe,U),!Kt&&(K=le&&le.onVnodeMounted)){const mt=E;Bt(()=>fn(K,Ie,mt),U)}(E.shapeFlag&256||Ie&&Ti(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&y.a&&Bt(y.a,U),y.isMounted=!0,E=b=x=null}};y.scope.on();const H=y.effect=new Mp(W);y.scope.off();const F=y.update=H.run.bind(H),ne=y.job=H.runIfDirty.bind(H);ne.i=y,ne.id=y.uid,H.scheduler=()=>ru(ne),Ur(y,!0),F()},Te=(y,E,b)=>{E.component=y;const x=y.vnode.props;y.vnode=E,y.next=null,lE(y,E.props,x,b),dE(y,E.children,b),Bn(),af(y),$n()},ge=(y,E,b,x,U,M,Y,W,H=!1)=>{const F=y&&y.children,ne=y?y.shapeFlag:0,K=E.children,{patchFlag:te,shapeFlag:le}=E;if(te>0){if(te&128){rn(F,K,b,x,U,M,Y,W,H);return}else if(te&256){Ut(F,K,b,x,U,M,Y,W,H);return}}le&8?(ne&16&&Vt(F,U,M),K!==F&&f(b,K)):ne&16?le&16?rn(F,K,b,x,U,M,Y,W,H):Vt(F,U,M,!0):(ne&8&&f(b,""),le&16&&v(K,b,x,U,M,Y,W,H))},Ut=(y,E,b,x,U,M,Y,W,H)=>{y=y||ms,E=E||ms;const F=y.length,ne=E.length,K=Math.min(F,ne);let te;for(te=0;te<K;te++){const le=E[te]=H?rr(E[te]):mn(E[te]);C(y[te],le,b,null,U,M,Y,W,H)}F>ne?Vt(y,U,M,!0,!1,K):v(E,b,x,U,M,Y,W,H,K)},rn=(y,E,b,x,U,M,Y,W,H)=>{let F=0;const ne=E.length;let K=y.length-1,te=ne-1;for(;F<=K&&F<=te;){const le=y[F],se=E[F]=H?rr(E[F]):mn(E[F]);if(ci(le,se))C(le,se,b,null,U,M,Y,W,H);else break;F++}for(;F<=K&&F<=te;){const le=y[K],se=E[te]=H?rr(E[te]):mn(E[te]);if(ci(le,se))C(le,se,b,null,U,M,Y,W,H);else break;K--,te--}if(F>K){if(F<=te){const le=te+1,se=le<ne?E[le].el:x;for(;F<=te;)C(null,E[F]=H?rr(E[F]):mn(E[F]),b,se,U,M,Y,W,H),F++}}else if(F>te)for(;F<=K;)qe(y[F],U,M,!0),F++;else{const le=F,se=F,pe=new Map;for(F=se;F<=te;F++){const at=E[F]=H?rr(E[F]):mn(E[F]);at.key!=null&&pe.set(at.key,F)}let Ie,it=0;const ot=te-se+1;let Kt=!1,mt=0;const Yn=new Array(ot);for(F=0;F<ot;F++)Yn[F]=0;for(F=le;F<=K;F++){const at=y[F];if(it>=ot){qe(at,U,M,!0);continue}let Gt;if(at.key!=null)Gt=pe.get(at.key);else for(Ie=se;Ie<=te;Ie++)if(Yn[Ie-se]===0&&ci(at,E[Ie])){Gt=Ie;break}Gt===void 0?qe(at,U,M,!0):(Yn[Gt-se]=F+1,Gt>=mt?mt=Gt:Kt=!0,C(at,E[Gt],b,null,U,M,Y,W,H),it++)}const Gs=Kt?_E(Yn):ms;for(Ie=Gs.length-1,F=ot-1;F>=0;F--){const at=se+F,Gt=E[at],po=E[at+1],ss=at+1<ne?po.el||po.placeholder:x;Yn[F]===0?C(null,Gt,b,ss,U,M,Y,W,H):Kt&&(Ie<0||F!==Gs[Ie]?zt(Gt,b,ss,2):Ie--)}}},zt=(y,E,b,x,U=null)=>{const{el:M,type:Y,transition:W,children:H,shapeFlag:F}=y;if(F&6){zt(y.component.subTree,E,b,x);return}if(F&128){y.suspense.move(E,b,x);return}if(F&64){Y.move(y,E,b,ee);return}if(Y===Qt){r(M,E,b);for(let K=0;K<H.length;K++)zt(H[K],E,b,x);r(y.anchor,E,b);return}if(Y===Ho){q(y,E,b);return}if(x!==2&&F&1&&W)if(x===0)W.beforeEnter(M),r(M,E,b),Bt(()=>W.enter(M),U);else{const{leave:K,delayLeave:te,afterLeave:le}=W,se=()=>{y.ctx.isUnmounted?s(M):r(M,E,b)},pe=()=>{K(M,()=>{se(),le&&le()})};te?te(M,se,pe):pe()}else r(M,E,b)},qe=(y,E,b,x=!1,U=!1)=>{const{type:M,props:Y,ref:W,children:H,dynamicChildren:F,shapeFlag:ne,patchFlag:K,dirs:te,cacheIndex:le}=y;if(K===-2&&(U=!1),W!=null&&(Bn(),Ei(W,null,b,y,!0),$n()),le!=null&&(E.renderCache[le]=void 0),ne&256){E.ctx.deactivate(y);return}const se=ne&1&&te,pe=!Ti(y);let Ie;if(pe&&(Ie=Y&&Y.onVnodeBeforeUnmount)&&fn(Ie,E,y),ne&6)hn(y.component,b,x);else{if(ne&128){y.suspense.unmount(b,x);return}se&&Lr(y,null,E,"beforeUnmount"),ne&64?y.type.remove(y,E,b,ee,x):F&&!F.hasOnce&&(M!==Qt||K>0&&K&64)?Vt(F,E,b,!1,!0):(M===Qt&&K&384||!U&&ne&16)&&Vt(H,E,b),x&&He(y)}(pe&&(Ie=Y&&Y.onVnodeUnmounted)||se)&&Bt(()=>{Ie&&fn(Ie,E,y),se&&Lr(y,null,E,"unmounted")},b)},He=y=>{const{type:E,el:b,anchor:x,transition:U}=y;if(E===Qt){Qn(b,x);return}if(E===Ho){Q(y);return}const M=()=>{s(b),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(y.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:W}=U,H=()=>Y(b,M);W?W(y.el,M,H):H()}else M()},Qn=(y,E)=>{let b;for(;y!==E;)b=m(y),s(y),y=b;s(E)},hn=(y,E,b)=>{const{bum:x,scope:U,job:M,subTree:Y,um:W,m:H,a:F,parent:ne,slots:{__:K}}=y;mf(H),mf(F),x&&$o(x),ne&&ie(K)&&K.forEach(te=>{ne.renderCache[te]=void 0}),U.stop(),M&&(M.flags|=8,qe(Y,y,E,b)),W&&Bt(W,E),Bt(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Vt=(y,E,b,x=!1,U=!1,M=0)=>{for(let Y=M;Y<y.length;Y++)qe(y[Y],E,b,x,U)},O=y=>{if(y.shapeFlag&6)return O(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=m(y.anchor||y.el),b=E&&E[Uv];return b?m(b):E};let X=!1;const J=(y,E,b)=>{y==null?E._vnode&&qe(E._vnode,null,null,!0):C(E._vnode||null,y,E,null,null,null,b),E._vnode=y,X||(X=!0,af(),nm(),X=!1)},ee={p:C,um:qe,m:zt,r:He,mt:bt,mc:v,pc:ge,pbc:A,n:O,o:t};return{render:J,hydrate:void 0,createApp:aE(J)}}function Fc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Em(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=rr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Em(o,c)),c.type===Ha&&(c.el=o.el),c.type===vr&&!c.el&&(c.el=o.el)}}function _E(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Tm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tm(e)}function mf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const yE=Symbol.for("v-scx"),vE=()=>cn(yE);function qo(t,e,n){return Im(t,e,n)}function Im(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,c=At({},n),l=e&&r||!e&&i!=="post";let h;if(Li){if(i==="sync"){const _=vE();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=gn,_.resume=gn,_.pause=gn,_}}const f=It;c.call=(_,k,C)=>An(_,f,k,C);let p=!1;i==="post"?c.scheduler=_=>{Bt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,k)=>{k?_():ru(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=Ov(t,e,c);return Li&&(h?h.push(m):l&&m()),m}function EE(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?wm(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Zi(this),c=Im(s,i.bind(r),n);return o(),c}function wm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const TE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${tn(e)}Modifiers`]||t[`${Xr(e)}Modifiers`];function IE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&TE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>et(f)?f.trim():f)),o.number&&(s=n.map(sa)));let c,l=r[c=Nc(e)]||r[c=Nc(tn(e))];!l&&i&&(l=r[c=Nc(Xr(e))]),l&&An(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,An(h,t,6,s)}}function Am(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=h=>{const f=Am(h,e,!0);f&&(c=!0,At(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ue(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>o[l]=null):At(o,i),Ue(t)&&r.set(t,o),o)}function qa(t,e){return!t||!Na(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,Xr(e))||De(t,e))}function gf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:m,setupState:_,ctx:k,inheritAttrs:C}=t,N=ca(t);let j,B;try{if(n.shapeFlag&4){const Q=s||r,me=Q;j=mn(h.call(me,Q,f,p,_,m,k)),B=c}else{const Q=e;j=mn(Q.length>1?Q(p,{attrs:c,slots:o,emit:l}):Q(p,null)),B=e.props?c:wE(c)}}catch(Q){wi.length=0,Fa(Q,t,1),j=oe(vr)}let q=j;if(B&&C!==!1){const Q=Object.keys(B),{shapeFlag:me}=q;Q.length&&me&7&&(i&&Q.some(Wl)&&(B=AE(B,i)),q=Rs(q,B,!1,!0))}return n.dirs&&(q=Rs(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&su(q,n.transition),j=q,ca(N),j}const wE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Na(n))&&((e||(e={}))[n]=t[n]);return e},AE=(t,e)=>{const n={};for(const r in t)(!Wl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function RE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?_f(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!qa(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?_f(r,o,h):!0:!!o;return!1}function _f(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!qa(n,i))return!0}return!1}function bE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Rm=t=>t.__isSuspense;function SE(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):Lv(t)}const Qt=Symbol.for("v-fgt"),Ha=Symbol.for("v-txt"),vr=Symbol.for("v-cmt"),Ho=Symbol.for("v-stc"),wi=[];let jt=null;function We(t=!1){wi.push(jt=t?null:[])}function PE(){wi.pop(),jt=wi[wi.length-1]||null}let Mi=1;function yf(t,e=!1){Mi+=t,t<0&&jt&&e&&(jt.hasOnce=!0)}function bm(t){return t.dynamicChildren=Mi>0?jt||ms:null,PE(),Mi>0&&jt&&jt.push(t),t}function rt(t,e,n,r,s,i){return bm($(t,e,n,r,s,i,!0))}function Ai(t,e,n,r,s){return bm(oe(t,e,n,r,s,!0))}function ua(t){return t?t.__v_isVNode===!0:!1}function ci(t,e){return t.type===e.type&&t.key===e.key}const Sm=({key:t})=>t??null,Wo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||wt(t)||de(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,r=0,s=null,i=t===Qt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sm(e),ref:e&&Wo(e),scopeId:sm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$t};return c?(au(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=et(n)?8:16),Mi>0&&!o&&jt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&jt.push(l),l}const oe=CE;function CE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Xv)&&(t=vr),ua(t)){const c=Rs(t,e,!0);return n&&au(c,n),Mi>0&&!i&&jt&&(c.shapeFlag&6?jt[jt.indexOf(t)]=c:jt.push(c)),c.patchFlag=-2,c}if(jE(t)&&(t=t.__vccOpts),e){e=kE(e);let{class:c,style:l}=e;c&&!et(c)&&(e.class=Jt(c)),Ue(l)&&(nu(l)&&!ie(l)&&(l=At({},l)),e.style=Gl(l))}const o=et(t)?1:Rm(t)?128:Fv(t)?64:Ue(t)?4:de(t)?2:0;return $(t,e,n,r,s,o,i,!0)}function kE(t){return t?nu(t)||pm(t)?At({},t):t:null}function Rs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?DE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Sm(h),ref:e&&e.ref?n&&i?ie(i)?i.concat(Wo(e)):[i,Wo(e)]:Wo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rs(t.ssContent),ssFallback:t.ssFallback&&Rs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&su(f,l.clone(f)),f}function Pe(t=" ",e=0){return oe(Ha,null,t,e)}function VE(t,e){const n=oe(Ho,null,t);return n.staticCount=e,n}function zo(t="",e=!1){return e?(We(),Ai(vr,null,t)):oe(vr,null,t)}function mn(t){return t==null||typeof t=="boolean"?oe(vr):ie(t)?oe(Qt,null,t.slice()):ua(t)?rr(t):oe(Ha,null,String(t))}function rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rs(t)}function au(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),au(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!pm(e)?e._ctx=$t:s===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),r&64?(n=16,e=[Pe(e)]):n=8);t.children=e,t.shapeFlag|=n}function DE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Jt([e.class,r.class]));else if(s==="style")e.style=Gl([e.style,r.style]);else if(Na(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function fn(t,e,n,r=null){An(t,e,7,[n,r])}const NE=hm();let OE=0;function xE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||NE,i={uid:OE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new av(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gm(r,s),emitsOptions:Am(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=IE.bind(null,i),t.ce&&t.ce(i),i}let It=null;const ME=()=>It||$t;let ha,dl;{const t=Ma(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ha=e("__VUE_INSTANCE_SETTERS__",n=>It=n),dl=e("__VUE_SSR_SETTERS__",n=>Li=n)}const Zi=t=>{const e=It;return ha(t),t.scope.on(),()=>{t.scope.off(),ha(e)}},vf=()=>{It&&It.scope.off(),ha(null)};function Pm(t){return t.vnode.shapeFlag&4}let Li=!1;function LE(t,e=!1,n=!1){e&&dl(e);const{props:r,children:s}=t.vnode,i=Pm(t);cE(t,r,i,e),fE(t,s,n||e);const o=i?UE(t,e):void 0;return e&&dl(!1),o}function UE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,eE);const{setup:r}=n;if(r){Bn();const s=t.setupContext=r.length>1?BE(t):null,i=Zi(t),o=Ji(r,t,0,[t.props,s]),c=kp(o);if($n(),i(),(c||t.sp)&&!Ti(t)&&om(t),c){if(o.then(vf,vf),e)return o.then(l=>{Ef(t,l)}).catch(l=>{Fa(l,t,0)});t.asyncDep=o}else Ef(t,o)}else Cm(t)}function Ef(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=Zp(e)),Cm(t)}function Cm(t,e,n){const r=t.type;t.render||(t.render=r.render||gn);{const s=Zi(t);Bn();try{tE(t)}finally{$n(),s()}}}const FE={get(t,e){return Et(t,"get",""),t[e]}};function BE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,FE),slots:t.slots,emit:t.emit,expose:e}}function Wa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Zp(Sv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ii)return Ii[n](t)},has(e,n){return n in e||n in Ii}})):t.proxy}function $E(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function jE(t){return de(t)&&"__vccOpts"in t}const ht=(t,e)=>Dv(t,e,Li);function km(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!ie(e)?ua(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ua(n)&&(n=[n]),oe(t,e,n))}const qE="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pl;const Tf=typeof window<"u"&&window.trustedTypes;if(Tf)try{pl=Tf.createPolicy("vue",{createHTML:t=>t})}catch{}const Vm=pl?t=>pl.createHTML(t):t=>t,HE="http://www.w3.org/2000/svg",WE="http://www.w3.org/1998/Math/MathML",Dn=typeof document<"u"?document:null,If=Dn&&Dn.createElement("template"),zE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Dn.createElementNS(HE,t):e==="mathml"?Dn.createElementNS(WE,t):n?Dn.createElement(t,{is:n}):Dn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dn.createTextNode(t),createComment:t=>Dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{If.innerHTML=Vm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=If.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},KE=Symbol("_vtc");function GE(t,e,n){const r=t[KE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wf=Symbol("_vod"),QE=Symbol("_vsh"),YE=Symbol(""),JE=/(^|;)\s*display\s*:/;function XE(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ko(r,c,"")}else for(const o in e)n[o]==null&&Ko(r,o,"");for(const o in n)o==="display"&&(i=!0),Ko(r,o,n[o])}else if(s){if(e!==n){const o=r[YE];o&&(n+=";"+o),r.cssText=n,i=JE.test(n)}}else e&&t.removeAttribute("style");wf in t&&(t[wf]=i?r.display:"",t[QE]&&(r.display="none"))}const Af=/\s*!important$/;function Ko(t,e,n){if(ie(n))n.forEach(r=>Ko(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ZE(t,e);Af.test(n)?t.setProperty(Xr(r),n.replace(Af,""),"important"):t[r]=n}}const Rf=["Webkit","Moz","ms"],Bc={};function ZE(t,e){const n=Bc[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return Bc[e]=r;r=xa(r);for(let s=0;s<Rf.length;s++){const i=Rf[s]+r;if(i in t)return Bc[e]=i}return e}const bf="http://www.w3.org/1999/xlink";function Sf(t,e,n,r,s,i=iv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(bf,e.slice(6,e.length)):t.setAttributeNS(bf,e,n):n==null||i&&!Np(n)?t.removeAttribute(e):t.setAttribute(e,i?"":wn(n)?String(n):n)}function Pf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Vm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Np(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function xn(t,e,n,r){t.addEventListener(e,n,r)}function eT(t,e,n,r){t.removeEventListener(e,n,r)}const Cf=Symbol("_vei");function tT(t,e,n,r,s=null){const i=t[Cf]||(t[Cf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=nT(e);if(r){const h=i[e]=iT(r,s);xn(t,c,h,l)}else o&&(eT(t,c,o,l),i[e]=void 0)}}const kf=/(?:Once|Passive|Capture)$/;function nT(t){let e;if(kf.test(t)){e={};let r;for(;r=t.match(kf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xr(t.slice(2)),e]}let $c=0;const rT=Promise.resolve(),sT=()=>$c||(rT.then(()=>$c=0),$c=Date.now());function iT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;An(oT(r,n.value),e,5,[r])};return n.value=t,n.attached=sT(),n}function oT(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Vf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,aT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?GE(t,r,o):e==="style"?XE(t,n,r):Na(e)?Wl(e)||tT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cT(t,e,r,o))?(Pf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!et(r))?Pf(t,tn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Sf(t,e,r,o))};function cT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vf(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vf(e)&&et(n)?!1:e in t}const Er=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>$o(e,n):e};function lT(t){t.target.composing=!0}function Df(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zt=Symbol("_assign"),Nf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Zt]=Er(s);const i=r||s.props&&s.props.type==="number";xn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=sa(c)),t[Zt](c)}),n&&xn(t,"change",()=>{t.value=t.value.trim()}),e||(xn(t,"compositionstart",lT),xn(t,"compositionend",Df),xn(t,"change",Df))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Zt]=Er(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?sa(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},uT={deep:!0,created(t,e,n){t[Zt]=Er(n),xn(t,"change",()=>{const r=t._modelValue,s=bs(t),i=t.checked,o=t[Zt];if(ie(r)){const c=Ql(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),o(h)}}else if(Ls(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Dm(t,i))})},mounted:Of,beforeUpdate(t,e,n){t[Zt]=Er(n),Of(t,e,n)}};function Of(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ie(e))s=Ql(e,r.props.value)>-1;else if(Ls(e))s=e.has(r.props.value);else{if(e===n)return;s=Hr(e,Dm(t,!0))}t.checked!==s&&(t.checked=s)}const hT={created(t,{value:e},n){t.checked=Hr(e,n.props.value),t[Zt]=Er(n),xn(t,"change",()=>{t[Zt](bs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Zt]=Er(r),e!==n&&(t.checked=Hr(e,r.props.value))}},fT={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ls(e);xn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?sa(bs(o)):bs(o));t[Zt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Ba(()=>{t._assigning=!1})}),t[Zt]=Er(r)},mounted(t,{value:e}){xf(t,e)},beforeUpdate(t,e,n){t[Zt]=Er(n)},updated(t,{value:e}){t._assigning||xf(t,e)}};function xf(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!Ls(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=bs(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=Ql(e,c)>-1}else o.selected=e.has(c);else if(Hr(bs(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function bs(t){return"_value"in t?t._value:t.value}function Dm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const w1={created(t,e,n){No(t,e,n,null,"created")},mounted(t,e,n){No(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){No(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){No(t,e,n,r,"updated")}};function dT(t,e){switch(t){case"SELECT":return fT;case"TEXTAREA":return Nf;default:switch(e){case"checkbox":return uT;case"radio":return hT;default:return Nf}}}function No(t,e,n,r,s){const o=dT(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const pT=["ctrl","shift","alt","meta"],mT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>pT.some(n=>t[`${n}Key`]&&!e.includes(n))},fa=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=mT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},gT=At({patchProp:aT},zE);let Mf;function _T(){return Mf||(Mf=pE(gT))}const yT=(...t)=>{const e=_T().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ET(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,vT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function vT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ET(t){return et(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof document<"u";function Nm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function TT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Nm(t.default)}const ke=Object.assign;function jc(t,e){const n={};for(const r in e){const s=e[r];n[r]=ln(s)?s.map(t):t(s)}return n}const Ri=()=>{},ln=Array.isArray,Om=/#/g,IT=/&/g,wT=/\//g,AT=/=/g,RT=/\?/g,xm=/\+/g,bT=/%5B/g,ST=/%5D/g,Mm=/%5E/g,PT=/%60/g,Lm=/%7B/g,CT=/%7C/g,Um=/%7D/g,kT=/%20/g;function cu(t){return encodeURI(""+t).replace(CT,"|").replace(bT,"[").replace(ST,"]")}function VT(t){return cu(t).replace(Lm,"{").replace(Um,"}").replace(Mm,"^")}function ml(t){return cu(t).replace(xm,"%2B").replace(kT,"+").replace(Om,"%23").replace(IT,"%26").replace(PT,"`").replace(Lm,"{").replace(Um,"}").replace(Mm,"^")}function DT(t){return ml(t).replace(AT,"%3D")}function NT(t){return cu(t).replace(Om,"%23").replace(RT,"%3F")}function OT(t){return t==null?"":NT(t).replace(wT,"%2F")}function Ui(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const xT=/\/$/,MT=t=>t.replace(xT,"");function qc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=BT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ui(o)}}function LT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ss(e.matched[r],n.matched[s])&&Fm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FT(t[n],e[n]))return!1;return!0}function FT(t,e){return ln(t)?Uf(t,e):ln(e)?Uf(e,t):t===e}function Uf(t,e){return ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function BT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const er={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fi;(function(t){t.pop="pop",t.push="push"})(Fi||(Fi={}));var bi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bi||(bi={}));function $T(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),MT(t)}const jT=/^[^#]+#/;function qT(t,e){return t.replace(jT,"#")+e}function HT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function WT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=HT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ff(t,e){return(history.state?history.state.position-e:-1)+t}const gl=new Map;function zT(t,e){gl.set(t,e)}function KT(t){const e=gl.get(t);return gl.delete(t),e}let GT=()=>location.protocol+"//"+location.host;function Bm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Lf(l,"")}return Lf(n,t)+r+s}function QT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=Bm(t,location),k=n.value,C=e.value;let N=0;if(m){if(n.value=_,e.value=m,o&&o===k){o=null;return}N=C?m.position-C.position:0}else r(_);s.forEach(j=>{j(n.value,k,{delta:N,type:Fi.pop,direction:N?N>0?bi.forward:bi.back:bi.unknown})})};function l(){o=n.value}function h(m){s.push(m);const _=()=>{const k=s.indexOf(m);k>-1&&s.splice(k,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(ke({},m.state,{scroll:za()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Bf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?za():null}}function YT(t){const{history:e,location:n}=window,r={value:Bm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:GT()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,h){const f=ke({},e.state,Bf(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=ke({},s.value,e.state,{forward:l,scroll:za()});i(f.current,f,!0);const p=ke({},Bf(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function JT(t){t=$T(t);const e=YT(t),n=QT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:qT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function XT(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),JT(t)}function ZT(t){return typeof t=="string"||t&&typeof t=="object"}function $m(t){return typeof t=="string"||typeof t=="symbol"}const jm=Symbol("");var $f;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($f||($f={}));function Ps(t,e){return ke(new Error,{type:t,[jm]:!0},e)}function Vn(t,e){return t instanceof Error&&jm in t&&(e==null||!!(t.type&e))}const jf="[^/]+?",eI={sensitive:!1,strict:!1,start:!0,end:!0},tI=/[.+*?^${}()[\]/\\]/g;function nI(t,e){const n=ke({},eI,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(tI,"\\$&"),_+=40;else if(m.type===1){const{value:k,repeatable:C,optional:N,regexp:j}=m;i.push({name:k,repeatable:C,optional:N});const B=j||jf;if(B!==jf){_+=10;try{new RegExp(`(${B})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${k}" (${B}): `+Q.message)}}let q=C?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(q=N&&h.length<2?`(?:/${q})`:"/"+q),N&&(q+="?"),s+=q,_+=20,N&&(_+=-8),C&&(_+=-20),B===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",k=i[m-1];p[k.name]=_&&k.repeatable?_.split("/"):_}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:k,repeatable:C,optional:N}=_,j=k in h?h[k]:"";if(ln(j)&&!C)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const B=ln(j)?j.join("/"):j;if(!B)if(N)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function rI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(qf(r))return 1;if(qf(s))return-1}return s.length-r.length}function qf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sI={type:0,value:""},iI=/[a-zA-Z0-9_]/;function oI(t){if(!t)return[[]];if(t==="/")return[[sI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:iI.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function aI(t,e,n){const r=nI(oI(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function cI(t,e){const n=[],r=new Map;e=Kf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const k=!_,C=Wf(p);C.aliasOf=_&&_.record;const N=Kf(e,p),j=[C];if("alias"in p){const Q=typeof p.alias=="string"?[p.alias]:p.alias;for(const me of Q)j.push(Wf(ke({},C,{components:_?_.record.components:C.components,path:me,aliasOf:_?_.record:C})))}let B,q;for(const Q of j){const{path:me}=Q;if(m&&me[0]!=="/"){const Ee=m.record.path,w=Ee[Ee.length-1]==="/"?"":"/";Q.path=m.record.path+(me&&w+me)}if(B=aI(Q,m,N),_?_.alias.push(B):(q=q||B,q!==B&&q.alias.push(B),k&&p.name&&!zf(B)&&o(p.name)),Hm(B)&&l(B),C.children){const Ee=C.children;for(let w=0;w<Ee.length;w++)i(Ee[w],B,_&&_.children[w])}_=_||B}return q?()=>{o(q)}:Ri}function o(p){if($m(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=hI(p,n);n.splice(m,0,p),p.record.name&&!zf(p)&&r.set(p.record.name,p)}function h(p,m){let _,k={},C,N;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Ps(1,{location:p});N=_.record.name,k=ke(Hf(m.params,_.keys.filter(q=>!q.optional).concat(_.parent?_.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Hf(p.params,_.keys.map(q=>q.name))),C=_.stringify(k)}else if(p.path!=null)C=p.path,_=n.find(q=>q.re.test(C)),_&&(k=_.parse(C),N=_.record.name);else{if(_=m.name?r.get(m.name):n.find(q=>q.re.test(m.path)),!_)throw Ps(1,{location:p,currentLocation:m});N=_.record.name,k=ke({},m.params,p.params),C=_.stringify(k)}const j=[];let B=_;for(;B;)j.unshift(B.record),B=B.parent;return{name:N,path:C,params:k,matched:j,meta:uI(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Hf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Wf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:lI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function lI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function zf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uI(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Kf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function hI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;qm(t,e[i])<0?r=i:n=i+1}const s=fI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function fI(t){let e=t;for(;e=e.parent;)if(Hm(e)&&qm(t,e)===0)return e}function Hm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function dI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xm," "),o=i.indexOf("="),c=Ui(o<0?i:i.slice(0,o)),l=o<0?null:Ui(i.slice(o+1));if(c in e){let h=e[c];ln(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Gf(t){let e="";for(let n in t){const r=t[n];if(n=DT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(r)?r.map(i=>i&&ml(i)):[r&&ml(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function pI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const mI=Symbol(""),Qf=Symbol(""),Ka=Symbol(""),lu=Symbol(""),_l=Symbol("");function li(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(Ps(4,{from:n,to:e})):m instanceof Error?l(m):ZT(m)?l(Ps(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function Hc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Nm(l)){const f=(l.__vccOpts||l)[e];f&&i.push(sr(f,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=TT(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&sr(_,n,r,o,c,s)()}))}}return i}function Yf(t){const e=cn(Ka),n=cn(lu),r=ht(()=>{const l=fe(t.to);return e.resolve(l)}),s=ht(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Ss.bind(null,f));if(m>-1)return m;const _=Jf(l[h-2]);return h>1&&Jf(f)===_&&p[p.length-1].path!==_?p.findIndex(Ss.bind(null,l[h-2])):m}),i=ht(()=>s.value>-1&&vI(n.params,r.value.params)),o=ht(()=>s.value>-1&&s.value===n.matched.length-1&&Fm(n.params,r.value.params));function c(l={}){if(yI(l)){const h=e[fe(t.replace)?"replace":"push"](fe(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:ht(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function gI(t){return t.length===1?t[0]:t}const _I=im({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Yf,setup(t,{slots:e}){const n=Ua(Yf(t)),{options:r}=cn(Ka),s=ht(()=>({[Xf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&gI(e.default(n));return t.custom?i:km("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Re=_I;function yI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ln(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Jf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xf=(t,e,n)=>t??e??n,EI=im({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=cn(_l),s=ht(()=>t.route||r.value),i=cn(Qf,0),o=ht(()=>{let h=fe(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=ht(()=>s.value.matched[o.value]);jo(Qf,ht(()=>o.value+1)),jo(mI,c),jo(_l,s);const l=kt();return qo(()=>[l.value,c.value,t.name],([h,f,p],[m,_,k])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!Ss(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(C=>C(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Zf(n.default,{Component:m,route:h});const _=p.props[f],k=_?_===!0?h.params:typeof _=="function"?_(h):_:null,N=km(m,ke({},k,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Zf(n.default,{Component:N,route:h})||N}}});function Zf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Us=EI;function TI(t){const e=cI(t.routes,t),n=t.parseQuery||dI,r=t.stringifyQuery||Gf,s=t.history,i=li(),o=li(),c=li(),l=Pv(er);let h=er;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=jc.bind(null,O=>""+O),p=jc.bind(null,OT),m=jc.bind(null,Ui);function _(O,X){let J,ee;return $m(O)?(J=e.getRecordMatcher(O),ee=X):ee=O,e.addRoute(ee,J)}function k(O){const X=e.getRecordMatcher(O);X&&e.removeRoute(X)}function C(){return e.getRoutes().map(O=>O.record)}function N(O){return!!e.getRecordMatcher(O)}function j(O,X){if(X=ke({},X||l.value),typeof O=="string"){const b=qc(n,O,X.path),x=e.resolve({path:b.path},X),U=s.createHref(b.fullPath);return ke(b,x,{params:m(x.params),hash:Ui(b.hash),redirectedFrom:void 0,href:U})}let J;if(O.path!=null)J=ke({},O,{path:qc(n,O.path,X.path).path});else{const b=ke({},O.params);for(const x in b)b[x]==null&&delete b[x];J=ke({},O,{params:p(b)}),X.params=p(X.params)}const ee=e.resolve(J,X),be=O.hash||"";ee.params=f(m(ee.params));const y=LT(r,ke({},O,{hash:VT(be),path:ee.path})),E=s.createHref(y);return ke({fullPath:y,hash:be,query:r===Gf?pI(O.query):O.query||{}},ee,{redirectedFrom:void 0,href:E})}function B(O){return typeof O=="string"?qc(n,O,l.value.path):ke({},O)}function q(O,X){if(h!==O)return Ps(8,{from:X,to:O})}function Q(O){return w(O)}function me(O){return Q(ke(B(O),{replace:!0}))}function Ee(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let ee=typeof J=="function"?J(O):J;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=B(ee):{path:ee},ee.params={}),ke({query:O.query,hash:O.hash,params:ee.path!=null?{}:O.params},ee)}}function w(O,X){const J=h=j(O),ee=l.value,be=O.state,y=O.force,E=O.replace===!0,b=Ee(J);if(b)return w(ke(B(b),{state:typeof b=="object"?ke({},be,b.state):be,force:y,replace:E}),X||J);const x=J;x.redirectedFrom=X;let U;return!y&&UT(r,ee,J)&&(U=Ps(16,{to:x,from:ee}),zt(ee,ee,!0,!1)),(U?Promise.resolve(U):A(x,ee)).catch(M=>Vn(M)?Vn(M,2)?M:rn(M):ge(M,x,ee)).then(M=>{if(M){if(Vn(M,2))return w(ke({replace:E},B(M.to),{state:typeof M.to=="object"?ke({},be,M.to.state):be,force:y}),X||x)}else M=S(x,ee,!0,E,be);return R(x,ee,M),M})}function v(O,X){const J=q(O,X);return J?Promise.reject(J):Promise.resolve()}function I(O){const X=Qn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function A(O,X){let J;const[ee,be,y]=II(O,X);J=Hc(ee.reverse(),"beforeRouteLeave",O,X);for(const b of ee)b.leaveGuards.forEach(x=>{J.push(sr(x,O,X))});const E=v.bind(null,O,X);return J.push(E),Vt(J).then(()=>{J=[];for(const b of i.list())J.push(sr(b,O,X));return J.push(E),Vt(J)}).then(()=>{J=Hc(be,"beforeRouteUpdate",O,X);for(const b of be)b.updateGuards.forEach(x=>{J.push(sr(x,O,X))});return J.push(E),Vt(J)}).then(()=>{J=[];for(const b of y)if(b.beforeEnter)if(ln(b.beforeEnter))for(const x of b.beforeEnter)J.push(sr(x,O,X));else J.push(sr(b.beforeEnter,O,X));return J.push(E),Vt(J)}).then(()=>(O.matched.forEach(b=>b.enterCallbacks={}),J=Hc(y,"beforeRouteEnter",O,X,I),J.push(E),Vt(J))).then(()=>{J=[];for(const b of o.list())J.push(sr(b,O,X));return J.push(E),Vt(J)}).catch(b=>Vn(b,8)?b:Promise.reject(b))}function R(O,X,J){c.list().forEach(ee=>I(()=>ee(O,X,J)))}function S(O,X,J,ee,be){const y=q(O,X);if(y)return y;const E=X===er,b=hs?history.state:{};J&&(ee||E?s.replace(O.fullPath,ke({scroll:E&&b&&b.scroll},be)):s.push(O.fullPath,be)),l.value=O,zt(O,X,J,E),rn()}let T;function bt(){T||(T=s.listen((O,X,J)=>{if(!hn.listening)return;const ee=j(O),be=Ee(ee);if(be){w(ke(be,{replace:!0,force:!0}),ee).catch(Ri);return}h=ee;const y=l.value;hs&&zT(Ff(y.fullPath,J.delta),za()),A(ee,y).catch(E=>Vn(E,12)?E:Vn(E,2)?(w(ke(B(E.to),{force:!0}),ee).then(b=>{Vn(b,20)&&!J.delta&&J.type===Fi.pop&&s.go(-1,!1)}).catch(Ri),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ge(E,ee,y))).then(E=>{E=E||S(ee,y,!1),E&&(J.delta&&!Vn(E,8)?s.go(-J.delta,!1):J.type===Fi.pop&&Vn(E,20)&&s.go(-1,!1)),R(ee,y,E)}).catch(Ri)}))}let Wt=li(),Qe=li(),Te;function ge(O,X,J){rn(O);const ee=Qe.list();return ee.length?ee.forEach(be=>be(O,X,J)):console.error(O),Promise.reject(O)}function Ut(){return Te&&l.value!==er?Promise.resolve():new Promise((O,X)=>{Wt.add([O,X])})}function rn(O){return Te||(Te=!O,bt(),Wt.list().forEach(([X,J])=>O?J(O):X()),Wt.reset()),O}function zt(O,X,J,ee){const{scrollBehavior:be}=t;if(!hs||!be)return Promise.resolve();const y=!J&&KT(Ff(O.fullPath,0))||(ee||!J)&&history.state&&history.state.scroll||null;return Ba().then(()=>be(O,X,y)).then(E=>E&&WT(E)).catch(E=>ge(E,O,X))}const qe=O=>s.go(O);let He;const Qn=new Set,hn={currentRoute:l,listening:!0,addRoute:_,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:C,resolve:j,options:t,push:Q,replace:me,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Qe.add,isReady:Ut,install(O){const X=this;O.component("RouterLink",Re),O.component("RouterView",Us),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>fe(l)}),hs&&!He&&l.value===er&&(He=!0,Q(s.location).catch(be=>{}));const J={};for(const be in er)Object.defineProperty(J,be,{get:()=>l.value[be],enumerable:!0});O.provide(Ka,X),O.provide(lu,Yp(J)),O.provide(_l,l);const ee=O.unmount;Qn.add(O),O.unmount=function(){Qn.delete(O),Qn.size<1&&(h=er,T&&T(),T=null,l.value=er,He=!1,Te=!1),ee()}}};function Vt(O){return O.reduce((X,J)=>X.then(()=>I(J)),Promise.resolve())}return hn}function II(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>Ss(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>Ss(h,l))||s.push(l))}return[n,r,s]}function uu(){return cn(Ka)}function wI(t){return cn(lu)}const AI={__name:"App",setup(t){return(e,n)=>(We(),Ai(fe(Us)))}},RI="modulepreload",bI=function(t){return"/nexus-academy-prod/"+t},ed={},$e=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let l=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(n.map(h=>{if(h=bI(h),h in ed)return;ed[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":RI,f||(m.as="script"),m.crossOrigin="",m.href=h,c&&m.setAttribute("nonce",c),document.head.appendChild(m),f)return new Promise((_,k)=>{m.addEventListener("load",_),m.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},SI=()=>{};var td={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},PI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new CI;const m=i<<2|c>>4;if(r.push(m),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kI=function(t){const e=Wm(t);return zm.encodeByteArray(e,!0)},da=function(t){return kI(t).replace(/\./g,"")},Km=function(t){try{return zm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=()=>VI().__FIREBASE_DEFAULTS__,NI=()=>{if(typeof process>"u"||typeof td>"u")return;const t=td.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Km(t[1]);return e&&JSON.parse(e)},Ga=()=>{try{return SI()||DI()||NI()||OI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gm=t=>Ga()?.emulatorHosts?.[t],xI=t=>{const e=Gm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qm=()=>Ga()?.config,Ym=t=>Ga()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jm(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[da(JSON.stringify(n)),da(JSON.stringify(o)),""].join(".")}const Si={};function UI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Si))Si[e]?t.emulator.push(e):t.prod.push(e);return t}function FI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let nd=!1;function Xm(t,e){if(typeof window>"u"||typeof document>"u"||!Fs(window.location.host)||Si[t]===e||Si[t]||nd)return;Si[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=UI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{nd=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=FI(r),_=n("text"),k=document.getElementById(_)||document.createElement("span"),C=n("learnmore"),N=document.getElementById(C)||document.createElement("a"),j=n("preprendIcon"),B=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const q=m.element;c(q),f(N,C);const Q=h();l(B,j),q.append(B,k,N,Q),document.body.appendChild(q)}i?(k.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function $I(){const t=Ga()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WI(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zI(){return!$I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function KI(){try{return typeof indexedDB=="object"}catch{return!1}}function GI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="FirebaseError";class Kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QI,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?YI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Kn(s,c,r)}}function YI(t,e){return t.replace(JI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const JI=/\{\$([^}]+)}/g;function XI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(rd(i)&&rd(o)){if(!Wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function rd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ZI(t,e){const n=new ew(t,e);return n.subscribe.bind(n)}class ew{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wc),s.error===void 0&&(s.error=Wc),s.complete===void 0&&(s.complete=Wc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new MI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sw(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rw(t){return t===Br?void 0:t}function sw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const ow={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},aw=_e.INFO,cw={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},lw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hu{constructor(e){this.name=e,this._logLevel=aw,this._logHandler=lw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ow[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const uw=(t,e)=>e.some(n=>t instanceof n);let sd,id;function hw(){return sd||(sd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fw(){return id||(id=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zm=new WeakMap,yl=new WeakMap,eg=new WeakMap,zc=new WeakMap,fu=new WeakMap;function dw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(fr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zm.set(n,t)}).catch(()=>{}),fu.set(e,t),e}function pw(t){if(yl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yl.set(t,e)}let vl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mw(t){vl=t(vl)}function gw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kc(this),e,...n);return eg.set(r,e.sort?e.sort():[e]),fr(r)}:fw().includes(t)?function(...e){return t.apply(Kc(this),e),fr(Zm.get(this))}:function(...e){return fr(t.apply(Kc(this),e))}}function _w(t){return typeof t=="function"?gw(t):(t instanceof IDBTransaction&&pw(t),uw(t,hw())?new Proxy(t,vl):t)}function fr(t){if(t instanceof IDBRequest)return dw(t);if(zc.has(t))return zc.get(t);const e=_w(t);return e!==t&&(zc.set(t,e),fu.set(e,t)),e}const Kc=t=>fu.get(t);function yw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fr(o.result),l.oldVersion,l.newVersion,fr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const vw=["get","getKey","getAll","getAllKeys","count"],Ew=["put","add","delete","clear"],Gc=new Map;function od(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gc.get(e))return Gc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ew.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Gc.set(e,i),i}mw(t=>({...t,get:(e,n,r)=>od(e,n)||t.get(e,n,r),has:(e,n)=>!!od(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Iw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Iw(t){return t.getComponent()?.type==="VERSION"}const El="@firebase/app",ad="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new hu("@firebase/app"),ww="@firebase/app-compat",Aw="@firebase/analytics-compat",Rw="@firebase/analytics",bw="@firebase/app-check-compat",Sw="@firebase/app-check",Pw="@firebase/auth",Cw="@firebase/auth-compat",kw="@firebase/database",Vw="@firebase/data-connect",Dw="@firebase/database-compat",Nw="@firebase/functions",Ow="@firebase/functions-compat",xw="@firebase/installations",Mw="@firebase/installations-compat",Lw="@firebase/messaging",Uw="@firebase/messaging-compat",Fw="@firebase/performance",Bw="@firebase/performance-compat",$w="@firebase/remote-config",jw="@firebase/remote-config-compat",qw="@firebase/storage",Hw="@firebase/storage-compat",Ww="@firebase/firestore",zw="@firebase/ai",Kw="@firebase/firestore-compat",Gw="firebase",Qw="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="[DEFAULT]",Yw={[El]:"fire-core",[ww]:"fire-core-compat",[Rw]:"fire-analytics",[Aw]:"fire-analytics-compat",[Sw]:"fire-app-check",[bw]:"fire-app-check-compat",[Pw]:"fire-auth",[Cw]:"fire-auth-compat",[kw]:"fire-rtdb",[Vw]:"fire-data-connect",[Dw]:"fire-rtdb-compat",[Nw]:"fire-fn",[Ow]:"fire-fn-compat",[xw]:"fire-iid",[Mw]:"fire-iid-compat",[Lw]:"fire-fcm",[Uw]:"fire-fcm-compat",[Fw]:"fire-perf",[Bw]:"fire-perf-compat",[$w]:"fire-rc",[jw]:"fire-rc-compat",[qw]:"fire-gcs",[Hw]:"fire-gcs-compat",[Ww]:"fire-fst",[Kw]:"fire-fst-compat",[zw]:"fire-vertex","fire-js":"fire-js",[Gw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Map,Jw=new Map,Il=new Map;function cd(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cs(t){const e=t.name;if(Il.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;Il.set(e,t);for(const n of pa.values())cd(n,t);for(const n of Jw.values())cd(n,t);return!0}function du(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new eo("app","Firebase",Xw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=Qw;function tg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Tl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw dr.create("bad-app-name",{appName:String(s)});if(n||(n=Qm()),!n)throw dr.create("no-options");const i=pa.get(s);if(i){if(Wr(n,i.options)&&Wr(r,i.config))return i;throw dr.create("duplicate-app",{appName:s})}const o=new iw(s);for(const l of Il.values())o.addComponent(l);const c=new Zw(n,r,o);return pa.set(s,c),c}function ng(t=Tl){const e=pa.get(t);if(!e&&t===Tl&&Qm())return tg();if(!e)throw dr.create("no-app",{appName:t});return e}function pr(t,e,n){let r=Yw[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(o.join(" "));return}Cs(new zr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="firebase-heartbeat-database",tA=1,Bi="firebase-heartbeat-store";let Qc=null;function rg(){return Qc||(Qc=yw(eA,tA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),Qc}async function nA(t){try{const n=(await rg()).transaction(Bi),r=await n.objectStore(Bi).get(sg(t));return await n.done,r}catch(e){if(e instanceof Kn)jn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e?.message});jn.warn(n.message)}}}async function ld(t,e){try{const r=(await rg()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,sg(t)),await r.done}catch(n){if(n instanceof Kn)jn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n?.message});jn.warn(r.message)}}}function sg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=1024,sA=30;class iA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ud();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>sA){const s=cA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){jn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ud(),{heartbeatsToSend:n,unsentEntries:r}=oA(this._heartbeatsCache.heartbeats),s=da(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return jn.warn(e),""}}}function ud(){return new Date().toISOString().substring(0,10)}function oA(t,e=rA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KI()?GI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ld(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ld(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hd(t){return da(JSON.stringify({version:2,heartbeats:t})).length}function cA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t){Cs(new zr("platform-logger",e=>new Tw(e),"PRIVATE")),Cs(new zr("heartbeat",e=>new iA(e),"PRIVATE")),pr(El,ad,t),pr(El,ad,"esm2020"),pr("fire-js","")}lA("");var uA="firebase",hA="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr(uA,hA,"app");function ig(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fA=ig,og=new eo("auth","Firebase",ig());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new hu("@firebase/auth");function dA(t,...e){ma.logLevel<=_e.WARN&&ma.warn(`Auth (${Bs}): ${t}`,...e)}function Go(t,...e){ma.logLevel<=_e.ERROR&&ma.error(`Auth (${Bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw mu(t,...e)}function en(t,...e){return mu(t,...e)}function pu(t,e,n){const r={...fA(),[e]:n};return new eo("auth","Firebase",r).create(e,{appName:t.name})}function Fn(t){return pu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ag(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),pu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return og.create(t,...e)}function ae(t,e,...n){if(!t)throw mu(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Go(e),new Error(e)}function qn(t,e){t||Ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(){return typeof self<"u"&&self.location?.href||""}function pA(){return fd()==="http:"||fd()==="https:"}function fd(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pA()||qI()||"connection"in navigator)?navigator.onLine:!0}function gA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=BI()||HI()}get(){return mA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vA=new no(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Sn(t,e,n,r,s={}){return lg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=to({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return jI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Fs(t.emulatorConfig.host)&&(h.credentials="include"),cg.fetch()(await ug(t,t.config.apiHost,n,c),h)})}async function lg(t,e,n){t._canInitEmulator=!1;const r={..._A,...e};try{const s=new TA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw pu(t,f,h);nn(t,f)}}catch(s){if(s instanceof Kn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function ro(t,e,n,r,s={}){const i=await Sn(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ug(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?gu(t.config,s):`${t.config.apiScheme}://${s}`;return yA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function EA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),vA.get())})}}function Oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=en(t,e,r);return s.customData._tokenResponse=n,s}function dd(t){return t!==void 0&&t.enterprise!==void 0}class IA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return EA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wA(t,e){return Sn(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function ga(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RA(t,e=!1){const n=je(t),r=await n.getIdToken(e),s=_u(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Pi(Yc(s.auth_time)),issuedAtTime:Pi(Yc(s.iat)),expirationTime:Pi(Yc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Yc(t){return Number(t)*1e3}function _u(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Go("JWT malformed, contained fewer than 3 sections"),null;try{const s=Km(n);return s?JSON.parse(s):(Go("Failed to decode base64 JWT payload"),null)}catch(s){return Go("Caught error parsing JWT payload as JSON",s?.toString()),null}}function pd(t){const e=_u(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kn&&bA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t){const e=t.auth,n=await t.getIdToken(),r=await Kr(t,ga(e,{idToken:n}));ae(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?hg(s.providerUserInfo):[],o=CA(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Al(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function PA(t){const e=je(t);await _a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(t,e){const n=await lg(t,{},async()=>{const r=to({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ug(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Fs(t.emulatorConfig.host)&&(l.credentials="include"),cg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VA(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=pd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await kA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Es;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Es,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new SA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Al(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Kr(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RA(this,e)}reload(){return PA(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await Kr(this,AA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:k,stsTokenManager:C}=n;ae(p&&C,e,"internal-error");const N=Es.fromJSON(this.name,C);ae(typeof p=="string",e,"internal-error"),tr(r,e.name),tr(s,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof _=="boolean",e,"internal-error"),tr(i,e.name),tr(o,e.name),tr(c,e.name),tr(l,e.name),tr(h,e.name),tr(f,e.name);const j=new on({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:h,lastLoginAt:f});return k&&Array.isArray(k)&&(j.providerData=k.map(B=>({...B}))),l&&(j._redirectEventId=l),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new Es;s.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _a(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?hg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new Es;c.updateFromIdToken(r);const l=new on({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Al(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=new Map;function Un(t){qn(t instanceof Function,"Expected a class definition");let e=md.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,md.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fg.type="NONE";const gd=fg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ga(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(Un(gd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Un(gd);const o=Qo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await ga(e,{idToken:f}).catch(()=>{});if(!m)break;p=await on._fromGetAccountInfoResponse(e,m,f)}else p=on._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ts(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Ts(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yg(e))return"Blackberry";if(vg(e))return"Webos";if(pg(e))return"Safari";if((e.includes("chrome/")||mg(e))&&!e.includes("edge/"))return"Chrome";if(_g(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function dg(t=Rt()){return/firefox\//i.test(t)}function pg(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mg(t=Rt()){return/crios\//i.test(t)}function gg(t=Rt()){return/iemobile/i.test(t)}function _g(t=Rt()){return/android/i.test(t)}function yg(t=Rt()){return/blackberry/i.test(t)}function vg(t=Rt()){return/webos/i.test(t)}function yu(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DA(t=Rt()){return yu(t)&&!!window.navigator?.standalone}function NA(){return WI()&&document.documentMode===10}function Eg(t=Rt()){return yu(t)||_g(t)||vg(t)||yg(t)||/windows phone/i.test(t)||gg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e=[]){let n;switch(t){case"Browser":n=_d(Rt());break;case"Worker":n=`${_d(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=6;class LA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??MA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yd(this),this.idTokenSubscription=new yd(this),this.beforeStateQueue=new OA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ga(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ot(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _a(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Fn(this));const n=e?je(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xA(this),n=new LA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VA(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&dA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Pr(t){return je(t)}class yd{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZI(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FA(t){Qa=t}function Ig(t){return Qa.loadJS(t)}function BA(){return Qa.recaptchaEnterpriseScript}function $A(){return Qa.gapiScript}function jA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class qA{constructor(){this.enterprise=new HA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class HA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const WA="recaptcha-enterprise",wg="NO_RECAPTCHA";class zA{constructor(e){this.type=WA,this.auth=Pr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{wA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new IA(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;dd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(wg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&dd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=BA();l.length!==0&&(l+=c),Ig(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function vd(t,e,n,r=!1,s=!1){const i=new zA(t);let o;if(s)o=wg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Rl(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await vd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t,e){const n=du(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wr(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function GA(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Un);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function QA(t,e,n){const r=Pr(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ag(e),{host:o,port:c}=YA(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(Wr(h,r.config.emulator)&&Wr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Fs(o)?(Jm(`${i}//${o}${l}`),Xm("Auth",!0)):JA()}function Ag(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YA(t){const e=Ag(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ed(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ed(o)}}}function Ed(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function XA(t,e){return Sn(t,"POST","/v1/accounts:update",e)}async function ZA(t,e){return Sn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,e){return ro(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(t,e){return ro(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function nR(t,e){return ro(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends vu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,n,"signInWithPassword",eR);case"emailLink":return tR(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,r,"signUpPassword",ZA);case"emailLink":return nR(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e){return ro(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="http://localhost";class Gr extends vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Gr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:rR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=to(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iR(t){const e=hi(fi(t)).link,n=e?hi(fi(e)).deep_link_id:null,r=hi(fi(t)).deep_link_id;return(r?hi(fi(r)).link:null)||r||n||e||t}class Eu{constructor(e){const n=hi(fi(e)),r=n.apiKey??null,s=n.oobCode??null,i=sR(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=iR(e);try{return new Eu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.providerId=Zr.PROVIDER_ID}static credential(e,n){return $i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Eu.parseLink(n);return ae(r,"argument-error"),$i._fromEmailAndCode(e,r.code,r.tenantId)}}Zr.PROVIDER_ID="password";Zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends Ya{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends so{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends so{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends so{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(t,e){return ro(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await on._fromIdTokenResponse(e,r,s),o=Td(r);return new Qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Td(r);return new Qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Td(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends Kn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ya.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ya(e,n,r,s)}}function Rg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ya._fromErrorAndOperation(t,i,e,r):i})}async function aR(t,e,n=!1){const r=await Kr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(Fn(r));const s="reauthenticate";try{const i=await Kr(t,Rg(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=_u(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Qr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(t,e,n=!1){if(Ot(t.app))return Promise.reject(Fn(t));const r="signIn",s=await Rg(t,r,e),i=await Qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function cR(t,e){return Sg(Pr(t),e)}async function lR(t,e){return bg(je(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(t){const e=Pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uR(t,e,n){if(Ot(t.app))return Promise.reject(Fn(t));const r=Pr(t),o=await Rl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Pg(t),l}),c=await Qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function hR(t,e,n){return Ot(t.app)?Promise.reject(Fn(t)):cR(je(t),Zr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(t,e){return Sn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=je(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Kr(r,fR(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function pR(t,e){return mR(je(t),null,e)}async function mR(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(i.password=n);const o=await Kr(t,XA(r,i));await t._updateTokensIfNecessary(o,!0)}function gR(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function _R(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function yR(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function vR(t){return je(t).signOut()}async function ER(t){return je(t).delete()}const va="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(va,"1"),this.storage.removeItem(va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=1e3,IR=10;class kg extends Cg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kg.type="LOCAL";const wR=kg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg extends Cg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vg.type="SESSION";const Dg=Vg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ja(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await AR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ja.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Tu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function bR(t){_n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function SR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PR(){return navigator?.serviceWorker?.controller||null}function CR(){return Ng()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="firebaseLocalStorageDb",kR=1,Ea="firebaseLocalStorage",xg="fbase_key";class io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xa(t,e){return t.transaction([Ea],e?"readwrite":"readonly").objectStore(Ea)}function VR(){const t=indexedDB.deleteDatabase(Og);return new io(t).toPromise()}function bl(){const t=indexedDB.open(Og,kR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ea,{keyPath:xg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ea)?e(r):(r.close(),await VR(),e(await bl()))})})}async function Id(t,e,n){const r=Xa(t,!0).put({[xg]:e,value:n});return new io(r).toPromise()}async function DR(t,e){const n=Xa(t,!1).get(e),r=await new io(n).toPromise();return r===void 0?null:r.value}function wd(t,e){const n=Xa(t,!0).delete(e);return new io(n).toPromise()}const NR=800,OR=3;class Mg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ng()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ja._getInstance(CR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await SR(),!this.activeServiceWorker)return;this.sender=new RR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await Id(e,va,"1"),await wd(e,va),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Id(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xa(s,!1).getAll();return new io(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mg.type="LOCAL";const xR=Mg;new no(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t,e){return e?Un(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends vu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MR(t){return Sg(t.auth,new wu(t),t.bypassAuthState)}function LR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),bg(n,new wu(t),t.bypassAuthState)}async function UR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),aR(n,new wu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MR;case"linkViaPopup":case"linkViaRedirect":return UR;case"reauthViaPopup":case"reauthViaRedirect":return LR;default:nn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new no(2e3,1e4);async function BR(t,e,n){if(Ot(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const r=Pr(t);ag(t,e,Ya);const s=Iu(r,n);return new lr(r,"signInViaPopup",e,s).executeNotNull()}async function $R(t,e,n){const r=je(t);if(Ot(r.auth.app))return Promise.reject(en(r.auth,"operation-not-supported-in-this-environment"));ag(r.auth,e,Ya);const s=Iu(r.auth,n);return new lr(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}class lr extends Lg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FR.get())};e()}}lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="pendingRedirect",Yo=new Map;class qR extends Lg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const r=await HR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HR(t,e){const n=KR(e),r=zR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function WR(t,e){Yo.set(t._key(),e)}function zR(t){return Un(t._redirectPersistence)}function KR(t){return Qo(jR,t.config.apiKey,t.name)}async function GR(t,e,n=!1){if(Ot(t.app))return Promise.reject(Fn(t));const r=Pr(t),s=Iu(r,e),o=await new qR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=600*1e3;class YR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Ug(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(en(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ad(e))}saveEventToCache(e){this.cachedEventUids.add(Ad(e)),this.lastProcessedEventTime=Date.now()}}function Ad(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ug({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function JR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ug(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eb=/^https?/;async function tb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XR(t);for(const n of e)try{if(nb(n))return}catch{}nn(t,"unauthorized-domain")}function nb(t){const e=wl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eb.test(n))return!1;if(ZR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=new no(3e4,6e4);function Rd(){const t=_n().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sb(t){return new Promise((e,n)=>{function r(){Rd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rd(),n(en(t,"network-request-failed"))},timeout:rb.get()})}if(_n().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(_n().gapi?.load)r();else{const s=jA("iframefcb");return _n()[s]=()=>{gapi.load?r():n(en(t,"network-request-failed"))},Ig(`${$A()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Jo=null,e})}let Jo=null;function ib(t){return Jo=Jo||sb(t),Jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=new no(5e3,15e3),ab="__/auth/iframe",cb="emulator/auth/iframe",lb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ub=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hb(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gu(e,cb):`https://${t.config.authDomain}/${ab}`,r={apiKey:e.apiKey,appName:t.name,v:Bs},s=ub.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${to(r).slice(1)}`}async function fb(t){const e=await ib(t),n=_n().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:hb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),c=_n().setTimeout(()=>{i(o)},ob.get());function l(){_n().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pb=500,mb=600,gb="_blank",_b="http://localhost";class bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yb(t,e,n,r=pb,s=mb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...db,width:r.toString(),height:s.toString(),top:i,left:o},h=Rt().toLowerCase();n&&(c=mg(h)?gb:n),dg(h)&&(e=e||_b,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,k])=>`${m}${_}=${k},`,"");if(DA(h)&&c!=="_self")return vb(e||"",c),new bd(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new bd(p)}function vb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="__/auth/handler",Tb="emulator/auth/handler",Ib=encodeURIComponent("fac");async function Sd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bs,eventId:s};if(e instanceof Ya){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof so){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${Ib}=${encodeURIComponent(l)}`:"";return`${wb(t)}?${to(c).slice(1)}${h}`}function wb({config:t}){return t.emulator?gu(t,Tb):`https://${t.authDomain}/${Eb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="webStorageSupport";class Ab{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dg,this._completeRedirectFn=GR,this._overrideRedirectResult=WR}async _openPopup(e,n,r,s){qn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Sd(e,n,r,wl(),s);return yb(e,i,Tu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sd(e,n,r,wl(),s);return bR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fb(e),r=new YR(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jc,{type:Jc},s=>{const i=s?.[0]?.[Jc];i!==void 0&&n(!!i),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Eg()||pg()||yu()}}const Rb=Ab;var Pd="@firebase/auth",Cd="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pb(t){Cs(new zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tg(t)},h=new UA(r,s,i,l);return GA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cs(new zr("auth-internal",e=>{const n=Pr(e.getProvider("auth").getImmediate());return(r=>new bb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(Pd,Cd,Sb(t)),pr(Pd,Cd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=300,kb=Ym("authIdTokenMaxAge")||Cb;let kd=null;const Vb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kb)return;const s=n?.token;kd!==s&&(kd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Db(t=ng()){const e=du(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KA(t,{popupRedirectResolver:Rb,persistence:[xR,wR,Dg]}),r=Ym("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Vb(i.toString());_R(n,o,()=>o(n.currentUser)),gR(n,c=>o(c))}}const s=Gm("auth");return s&&QA(n,`http://${s}`),n}function Nb(){return document.getElementsByTagName("head")?.[0]??document}FA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Nb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pb("Browser");var Vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,Fg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function I(){}I.prototype=v.prototype,w.D=v.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(A,R,S){for(var T=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)T[bt-2]=arguments[bt];return v.prototype[R].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)A[R]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(R=0;16>R;++R)A[R]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=w.g[0],I=w.g[1],R=w.g[2];var S=w.g[3],T=v+(S^I&(R^S))+A[0]+3614090360&4294967295;v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[2]+606105819&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[3]+3250441966&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(S^I&(R^S))+A[4]+4118548399&4294967295,v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[6]+2821735955&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[7]+4249261313&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(S^I&(R^S))+A[8]+1770035416&4294967295,v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[10]+4294925233&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[11]+2304563134&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(S^I&(R^S))+A[12]+1804603682&4294967295,v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[14]+2792965006&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[15]+1236535329&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(R^S&(I^R))+A[1]+4129170786&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[11]+643717713&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[0]+3921069994&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(I^R))+A[5]+3593408605&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[15]+3634488961&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[4]+3889429448&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(I^R))+A[9]+568446438&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[3]+4107603335&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[8]+1163531501&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(I^R))+A[13]+2850285829&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[7]+1735328473&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[12]+2368359562&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(I^R^S)+A[5]+4294588738&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[11]+1839030562&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[14]+4259657740&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(I^R^S)+A[1]+2763975236&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[7]+4139469664&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[10]+3200236656&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(I^R^S)+A[13]+681279174&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[3]+3572445317&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[6]+76029189&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(I^R^S)+A[9]+3654602809&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[15]+530742520&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[2]+3299628645&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(R^(I|~S))+A[0]+4096336452&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[14]+2878612391&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[5]+4237533241&4294967295,I=R+(T<<21&4294967295|T>>>11),T=v+(R^(I|~S))+A[12]+1700485571&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[10]+4293915773&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[1]+2240044497&4294967295,I=R+(T<<21&4294967295|T>>>11),T=v+(R^(I|~S))+A[8]+1873313359&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[6]+2734768916&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[13]+1309151649&4294967295,I=R+(T<<21&4294967295|T>>>11),T=v+(R^(I|~S))+A[4]+4149444226&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[2]+718787259&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var I=v-this.blockSize,A=this.B,R=this.h,S=0;S<v;){if(R==0)for(;S<=I;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<v;)if(A[R++]=w.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<v;)if(A[R++]=w[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var I=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=I&255,I/=256;for(this.u(w),w=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)w[I++]=this.g[v]>>>A&255;return w};function i(w,v){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=v(w)}function o(w,v){this.h=v;for(var I=[],A=!0,R=w.length-1;0<=R;R--){var S=w[R]|0;A&&S==v||(I[R]=S,A=!1)}this.g=I}var c={};function l(w){return-128<=w&&128>w?i(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return N(h(-w));for(var v=[],I=1,A=0;w>=I;A++)v[A]=w/I|0,I*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return N(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(v,8)),A=p,R=0;R<w.length;R+=8){var S=Math.min(8,w.length-R),T=parseInt(w.substring(R,R+S),v);8>S?(S=h(Math.pow(v,S)),A=A.j(S).add(h(T))):(A=A.j(I),A=A.add(h(T)))}return A}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(C(this))return-N(this).m();for(var w=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);w+=(0<=A?A:4294967296+A)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(C(this))return"-"+N(this).toString(w);for(var v=h(Math.pow(w,6)),I=this,A="";;){var R=Q(I,v).g;I=j(I,R.j(v));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=R,k(I))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function C(w){return w.h==-1}t.l=function(w){return w=j(this,w),C(w)?-1:k(w)?0:1};function N(w){for(var v=w.g.length,I=[],A=0;A<v;A++)I[A]=~w.g[A];return new o(I,~w.h).add(m)}t.abs=function(){return C(this)?N(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0,R=0;R<=v;R++){var S=A+(this.i(R)&65535)+(w.i(R)&65535),T=(S>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=T>>>16,S&=65535,T&=65535,I[R]=T<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function j(w,v){return w.add(N(v))}t.j=function(w){if(k(this)||k(w))return p;if(C(this))return C(w)?N(this).j(N(w)):N(N(this).j(w));if(C(w))return N(this.j(N(w)));if(0>this.l(_)&&0>w.l(_))return h(this.m()*w.m());for(var v=this.g.length+w.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var S=this.i(A)>>>16,T=this.i(A)&65535,bt=w.i(R)>>>16,Wt=w.i(R)&65535;I[2*A+2*R]+=T*Wt,B(I,2*A+2*R),I[2*A+2*R+1]+=S*Wt,B(I,2*A+2*R+1),I[2*A+2*R+1]+=T*bt,B(I,2*A+2*R+1),I[2*A+2*R+2]+=S*bt,B(I,2*A+2*R+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new o(I,0)};function B(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function q(w,v){this.g=w,this.h=v}function Q(w,v){if(k(v))throw Error("division by zero");if(k(w))return new q(p,p);if(C(w))return v=Q(N(w),v),new q(N(v.g),N(v.h));if(C(v))return v=Q(w,N(v)),new q(N(v.g),v.h);if(30<w.g.length){if(C(w)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=v;0>=A.l(w);)I=me(I),A=me(A);var R=Ee(I,1),S=Ee(A,1);for(A=Ee(A,2),I=Ee(I,2);!k(A);){var T=S.add(A);0>=T.l(w)&&(R=R.add(I),S=T),A=Ee(A,1),I=Ee(I,1)}return v=j(w,R.j(v)),new q(R,v)}for(R=p;0<=w.l(v);){for(I=Math.max(1,Math.floor(w.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(I),T=S.j(v);C(T)||0<T.l(w);)I-=A,S=h(I),T=S.j(v);k(S)&&(S=m),R=R.add(S),w=j(w,T)}return new q(R,w)}t.A=function(w){return Q(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function me(w){for(var v=w.g.length+1,I=[],A=0;A<v;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function Ee(w,v){var I=v>>5;v%=32;for(var A=w.g.length-I,R=[],S=0;S<A;S++)R[S]=0<v?w.i(S+I)>>>v|w.i(S+I+1)<<32-v:w.i(S+I);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Fg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,mr=o}).apply(typeof Vd<"u"?Vd:typeof self<"u"?self:typeof window<"u"?window:{});var xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bg,di,$g,Xo,Sl,jg,qg,Hg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xo=="object"&&xo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var V=d++;return{value:u(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function m(a,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function k(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,V){for(var z=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)z[Oe-2]=arguments[Oe];return u.prototype[P].apply(g,z)}}function C(a){const u=a.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function N(a,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const P=a.length||0,V=g.length||0;a.length=P+V;for(let z=0;z<V;z++)a[P+z]=g[z]}else a.push(g)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var me=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function Ee(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let V=0;V<I.length;V++)d=I[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Ut;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class bt{constructor(){this.h=this.g=null}add(u,d){const g=Wt.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Wt=new j(()=>new Qe,a=>a.reset());class Qe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ge=!1,Ut=new bt,rn=()=>{const a=c.Promise.resolve(void 0);Te=()=>{a.then(zt)}};var zt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){S(d)}var u=Wt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ge=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var Qn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function hn(a,u){if(He.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(me){e:{try{Q(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&hn.aa.h.call(this)}}k(hn,He);var Vt={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(a,u,d,g,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=P,this.key=++X,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a){this.src=a,this.g={},this.h=0}be.prototype.add=function(a,u,d,g,P){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var z=E(a,u,g,P);return-1<z?(u=a[z],d||(u.fa=!1)):(u=new J(u,this.src,V,!!g,P),u.fa=d,a.push(u)),u};function y(a,u){var d=u.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,u,void 0),V;(V=0<=P)&&Array.prototype.splice.call(g,P,1),V&&(ee(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function E(a,u,d,g){for(var P=0;P<a.length;++P){var V=a[P];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==g)return P}return-1}var b="closure_lm_"+(1e6*Math.random()|0),x={};function U(a,u,d,g,P){if(Array.isArray(u)){for(var V=0;V<u.length;V++)U(a,u[V],d,g,P);return null}return d=le(d),a&&a[O]?a.K(u,d,h(g)?!!g.capture:!1,P):M(a,u,d,!1,g,P)}function M(a,u,d,g,P,V){if(!u)throw Error("Invalid event type");var z=h(P)?!!P.capture:!!P,Oe=K(a);if(Oe||(a[b]=Oe=new be(a)),d=Oe.add(u,d,g,z,V),d.proxy)return d;if(g=Y(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Qn||(P=z),P===void 0&&(P=!1),a.addEventListener(u.toString(),g,P);else if(a.attachEvent)a.attachEvent(F(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Y(){function a(d){return u.call(a.src,a.listener,d)}const u=ne;return a}function W(a,u,d,g,P){if(Array.isArray(u))for(var V=0;V<u.length;V++)W(a,u[V],d,g,P);else g=h(g)?!!g.capture:!!g,d=le(d),a&&a[O]?(a=a.i,u=String(u).toString(),u in a.g&&(V=a.g[u],d=E(V,d,g,P),-1<d&&(ee(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[u],a.h--)))):a&&(a=K(a))&&(u=a.g[u.toString()],a=-1,u&&(a=E(u,d,g,P)),(d=-1<a?u[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[O])y(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(F(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=K(u))?(y(d,a),d.h==0&&(d.src=null,u[b]=null)):ee(a)}}}function F(a){return a in x?x[a]:x[a]="on"+a}function ne(a,u){if(a.da)a=!0;else{u=new hn(u,this);var d=a.listener,g=a.ha||a.src;a.fa&&H(a),a=d.call(g,u)}return a}function K(a){return a=a[b],a instanceof be?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[te]||(a[te]=function(u){return a.handleEvent(u)}),a[te])}function se(){qe.call(this),this.i=new be(this),this.M=this,this.F=null}k(se,qe),se.prototype[O]=!0,se.prototype.removeEventListener=function(a,u,d,g){W(this,a,u,d,g)};function pe(a,u){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new He(u,a);else if(u instanceof He)u.target=u.target||a;else{var P=u;u=new He(g,a),A(u,P)}if(P=!0,d)for(var V=d.length-1;0<=V;V--){var z=u.g=d[V];P=Ie(z,g,!0,u)&&P}if(z=u.g=a,P=Ie(z,g,!0,u)&&P,P=Ie(z,g,!1,u)&&P,d)for(V=0;V<d.length;V++)z=u.g=d[V],P=Ie(z,g,!1,u)&&P}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],g=0;g<d.length;g++)ee(d[g]);delete a.g[u],a.h--}}this.F=null},se.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},se.prototype.L=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function Ie(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,V=0;V<u.length;++V){var z=u[V];if(z&&!z.da&&z.capture==d){var Oe=z.listener,ct=z.ha||z.src;z.fa&&y(a.i,z),P=Oe.call(ct,g)!==!1&&P}}return P&&!g.defaultPrevented}function it(a,u,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function ot(a){a.g=it(()=>{a.g=null,a.i&&(a.i=!1,ot(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Kt extends qe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ot(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(a){qe.call(this),this.h=a,this.g={}}k(mt,qe);var Yn=[];function Gs(a){Ee(a.g,function(u,d){this.g.hasOwnProperty(d)&&H(u)},a),a.g={}}mt.prototype.N=function(){mt.aa.N.call(this),Gs(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var at=c.JSON.stringify,Gt=c.JSON.parse,po=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ss(){}ss.prototype.h=null;function hh(a){return a.h||(a.h=a.i())}function fh(){}var Qs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vc(){He.call(this,"d")}k(vc,He);function Ec(){He.call(this,"c")}k(Ec,He);var Nr={},dh=null;function mo(){return dh=dh||new se}Nr.La="serverreachability";function ph(a){He.call(this,Nr.La,a)}k(ph,He);function Ys(a){const u=mo();pe(u,new ph(u))}Nr.STAT_EVENT="statevent";function mh(a,u){He.call(this,Nr.STAT_EVENT,a),this.stat=u}k(mh,He);function St(a){const u=mo();pe(u,new mh(u,a))}Nr.Ma="timingevent";function gh(a,u){He.call(this,Nr.Ma,a),this.size=u}k(gh,He);function Js(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Xs(){this.g=!0}Xs.prototype.xa=function(){this.g=!1};function by(a,u,d,g,P,V){a.info(function(){if(a.g)if(V)for(var z="",Oe=V.split("&"),ct=0;ct<Oe.length;ct++){var Se=Oe[ct].split("=");if(1<Se.length){var gt=Se[0];Se=Se[1];var _t=gt.split("_");z=2<=_t.length&&_t[1]=="type"?z+(gt+"="+Se+"&"):z+(gt+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+d+`
`+z})}function Sy(a,u,d,g,P,V,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+d+`
`+V+" "+z})}function is(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Cy(a,d)+(g?" "+g:"")})}function Py(a,u){a.info(function(){return"TIMEOUT: "+u})}Xs.prototype.info=function(){};function Cy(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var V=P[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return at(d)}catch{return u}}var go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_h={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tc;function _o(){}k(_o,ss),_o.prototype.g=function(){return new XMLHttpRequest},_o.prototype.i=function(){return{}},Tc=new _o;function Jn(a,u,d,g){this.j=a,this.i=u,this.l=d,this.R=g||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yh}function yh(){this.i=null,this.g="",this.h=!1}var vh={},Ic={};function wc(a,u,d){a.L=1,a.v=To(Pn(u)),a.m=d,a.P=!0,Eh(a,null)}function Eh(a,u){a.F=Date.now(),yo(a),a.A=Pn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Oh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new yh,a.g=Xh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Kt(m(a.Y,a,a.g),a.O)),u=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Yn[0]=P.toString()),P=Yn);for(var V=0;V<P.length;V++){var z=U(d,P[V],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ys(),by(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const u=this.M;u&&Cn(a)==3?u.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const _t=Cn(this.g);var u=this.g.Ba();const cs=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||$h(this.g)))){this.J||_t!=4||u==7||(u==8||0>=cs?Ys(3):Ys(2)),Ac(this);var d=this.g.Z();this.X=d;t:if(Th(this)){var g=$h(this.g);a="";var P=g.length,V=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),Zs(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(V&&u==P-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Sy(this.i,this.u,this.A,this.l,this.R,_t,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,ct=this.g;if((Oe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Oe)){var Se=Oe;break t}}Se=null}if(d=Se)is(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rc(this,d);else{this.o=!1,this.s=3,St(12),Or(this),Zs(this);break e}}if(this.P){d=!0;let sn;for(;!this.J&&this.C<z.length;)if(sn=ky(this,z),sn==Ic){_t==4&&(this.s=4,St(14),d=!1),is(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==vh){this.s=4,St(15),is(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else is(this.i,this.l,sn,null),Rc(this,sn);if(Th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||z.length!=0||this.h.h||(this.s=1,St(16),d=!1),this.o=this.o&&d,!d)is(this.i,this.l,z,"[Invalid Chunked Response]"),Or(this),Zs(this);else if(0<z.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Vc(gt),gt.M=!0,St(11))}}else is(this.i,this.l,z,null),Rc(this,z);_t==4&&Or(this),this.o&&!this.J&&(_t==4?Gh(this.j,this):(this.o=!1,yo(this)))}else Ky(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Or(this),Zs(this)}}}catch{}finally{}};function Th(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ky(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?Ic:(d=Number(u.substring(d,g)),isNaN(d)?vh:(g+=1,g+d>u.length?Ic:(u=u.slice(g,g+d),a.C=g+d,u)))}Jn.prototype.cancel=function(){this.J=!0,Or(this)};function yo(a){a.S=Date.now()+a.I,Ih(a,a.I)}function Ih(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Js(m(a.ba,a),u)}function Ac(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Py(this.i,this.A),this.L!=2&&(Ys(),St(17)),Or(this),this.s=2,Zs(this)):Ih(this,this.S-a)};function Zs(a){a.j.G==0||a.J||Gh(a.j,a)}function Or(a){Ac(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Gs(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Rc(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||bc(d.h,a))){if(!a.K&&bc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)So(d),Ro(d);else break e;kc(d),St(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Js(m(d.Za,d),6e3));if(1>=Rh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Mr(d,11)}else if((a.K||d.g==a)&&So(d),!B(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Se=P[u];if(d.T=Se[0],Se=Se[1],d.G==2)if(Se[0]=="c"){d.K=Se[1],d.ia=Se[2];const gt=Se[3];gt!=null&&(d.la=gt,d.j.info("VER="+d.la));const _t=Se[4];_t!=null&&(d.Aa=_t,d.j.info("SVER="+d.Aa));const cs=Se[5];cs!=null&&typeof cs=="number"&&0<cs&&(g=1.5*cs,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const sn=a.g;if(sn){const Co=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var V=g.h;V.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Sc(V,V.h),V.h=null))}if(g.D){const Dc=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Dc&&(g.ya=Dc,Fe(g.I,g.D,Dc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=a;if(g.qa=Jh(g,g.J?g.ia:null,g.W),z.K){bh(g.h,z);var Oe=z,ct=g.L;ct&&(Oe.I=ct),Oe.B&&(Ac(Oe),yo(Oe)),g.g=z}else zh(g);0<d.i.length&&bo(d)}else Se[0]!="stop"&&Se[0]!="close"||Mr(d,7);else d.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Mr(d,7):Cc(d):Se[0]!="noop"&&d.l&&d.l.ta(Se),d.v=0)}}Ys(4)}catch{}}var Vy=class{constructor(a,u){this.g=a,this.map=u}};function wh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ah(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rh(a){return a.h?1:a.g?a.g.size:0}function bc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Sc(a,u){a.g?a.g.add(u):a.h=u}function bh(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}wh.prototype.cancel=function(){if(this.i=Sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Sh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return C(a.i)}function Dy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,g=0;g<d;g++)u.push(a[g]);return u}u=[],d=0;for(g in a)u[d++]=a[g];return u}function Ny(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const g in a)u[d++]=g;return u}}}function Ph(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Ny(a),g=Dy(a),P=g.length,V=0;V<P;V++)u.call(void 0,g[V],d&&d[V],a)}var Ch=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oy(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var V=a[d].substring(0,g);P=a[d].substring(g+1)}else V=a[d];u(V,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof xr){this.h=a.h,vo(this,a.j),this.o=a.o,this.g=a.g,Eo(this,a.s),this.l=a.l;var u=a.i,d=new ni;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),kh(this,d),this.m=a.m}else a&&(u=String(a).match(Ch))?(this.h=!1,vo(this,u[1]||"",!0),this.o=ei(u[2]||""),this.g=ei(u[3]||"",!0),Eo(this,u[4]),this.l=ei(u[5]||"",!0),kh(this,u[6]||"",!0),this.m=ei(u[7]||"")):(this.h=!1,this.i=new ni(null,this.h))}xr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ti(u,Vh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ti(u,Vh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ti(d,d.charAt(0)=="/"?Ly:My,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ti(d,Fy)),a.join("")};function Pn(a){return new xr(a)}function vo(a,u,d){a.j=d?ei(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Eo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function kh(a,u,d){u instanceof ni?(a.i=u,By(a.i,a.h)):(d||(u=ti(u,Uy)),a.i=new ni(u,a.h))}function Fe(a,u,d){a.i.set(u,d)}function To(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ei(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ti(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,xy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function xy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vh=/[#\/\?@]/g,My=/[#\?:]/g,Ly=/[#\?]/g,Uy=/[#\?@]/g,Fy=/#/g;function ni(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&Oy(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=ni.prototype,t.add=function(a,u){Xn(this),this.i=null,a=os(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Dh(a,u){Xn(a),u=os(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Nh(a,u){return Xn(a),u=os(a,u),a.g.has(u)}t.forEach=function(a,u){Xn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(u,P,g,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const P=a[g];for(let V=0;V<P.length;V++)d.push(u[g])}return d},t.V=function(a){Xn(this);let u=[];if(typeof a=="string")Nh(this,a)&&(u=u.concat(this.g.get(os(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Xn(this),this.i=null,a=os(this,a),Nh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Oh(a,u,d){Dh(a,u),0<d.length&&(a.i=null,a.g.set(os(a,u),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const V=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=V;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),a.push(P)}}return this.i=a.join("&")};function os(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function By(a,u){u&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Dh(this,g),Oh(this,P,d))},a)),a.j=u}function $y(a,u){const d=new Xs;if(c.Image){const g=new Image;g.onload=_(Zn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=_(Zn,d,"TestLoadImage: error",!1,u,g),g.onabort=_(Zn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(Zn,d,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function jy(a,u){const d=new Xs,g=new AbortController,P=setTimeout(()=>{g.abort(),Zn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(P),V.ok?Zn(d,"TestPingServer: ok",!0,u):Zn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Zn(d,"TestPingServer: error",!1,u)})}function Zn(a,u,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function qy(){this.g=new po}function Hy(a,u,d){const g=d||"";try{Ph(a,function(P,V){let z=P;h(P)&&(z=at(P)),u.push(g+V+"="+encodeURIComponent(z))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function Io(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Io,ss),Io.prototype.g=function(){return new wo(this.l,this.j)},Io.prototype.i=function(a){return function(){return a}}({});function wo(a,u){se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(wo,se),t=wo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,si(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ri(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ri(this):si(this),this.readyState==3&&xh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ri(this))},t.Qa=function(a){this.g&&(this.response=a,ri(this))},t.ga=function(){this.g&&ri(this)};function ri(a){a.readyState=4,a.l=null,a.j=null,a.v=null,si(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function si(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mh(a){let u="";return Ee(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Pc(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Mh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Fe(a,u,d))}function Ke(a){se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ke,se);var Wy=/^https?$/i,zy=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tc.g(),this.v=this.o?hh(this.o):hh(Tc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(V){Lh(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(zy,u,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of d)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bh(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Lh(this,V)}};function Lh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Uh(a),Ao(a)}function Uh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),Ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ao(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Fh(this):this.bb())},t.bb=function(){Fh(this)};function Fh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Cn(a)!=4||a.Z()!=2)){if(a.u&&Cn(a)==4)it(a.Ea,0,a);else if(pe(a,"readystatechange"),Cn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=z===0){var P=String(a.D).match(Ch)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!Wy.test(P?P.toLowerCase():"")}d=g}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var V=2<Cn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Uh(a)}}finally{Ao(a)}}}}function Ao(a,u){if(a.g){Bh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||pe(a,"ready");try{d.onreadystatechange=g}catch{}}}function Bh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Gt(u)}};function $h(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ky(a){const u={};a=(a.g&&2<=Cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var d=R(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[P]||[];u[P]=V,V.push(d)}w(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ii(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function jh(a){this.Aa=0,this.i=[],this.j=new Xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ii("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ii("baseRetryDelayMs",5e3,a),this.cb=ii("retryDelaySeedMs",1e4,a),this.Wa=ii("forwardChannelMaxRetries",2,a),this.wa=ii("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new wh(a&&a.concurrentRequestLimit),this.Da=new qy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jh.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,g){St(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Jh(this,null,this.W),bo(this)};function Cc(a){if(qh(a),a.G==3){var u=a.U++,d=Pn(a.I);if(Fe(d,"SID",a.K),Fe(d,"RID",u),Fe(d,"TYPE","terminate"),oi(a,d),u=new Jn(a,a.j,u),u.L=2,u.v=To(Pn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Xh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),yo(u)}Yh(a)}function Ro(a){a.g&&(Vc(a),a.g.cancel(),a.g=null)}function qh(a){Ro(a),a.u&&(c.clearTimeout(a.u),a.u=null),So(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function bo(a){if(!Ah(a.h)&&!a.s){a.s=!0;var u=a.Ga;Te||rn(),ge||(Te(),ge=!0),Ut.add(u,a),a.B=0}}function Gy(a,u){return Rh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Js(m(a.Ga,a,u),Qh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Jn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(P.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Wh(this,P,u),d=Pn(this.I),Fe(d,"RID",a),Fe(d,"CVER",22),this.D&&Fe(d,"X-HTTP-Session-Id",this.D),oi(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(Mh(V)))+"&"+u:this.m&&Pc(d,this.m,V)),Sc(this.h,P),this.Ua&&Fe(d,"TYPE","init"),this.P?(Fe(d,"$req",u),Fe(d,"SID","null"),P.T=!0,wc(P,d,null)):wc(P,d,u),this.G=2}}else this.G==3&&(a?Hh(this,a):this.i.length==0||Ah(this.h)||Hh(this))};function Hh(a,u){var d;u?d=u.l:d=a.U++;const g=Pn(a.I);Fe(g,"SID",a.K),Fe(g,"RID",d),Fe(g,"AID",a.T),oi(a,g),a.m&&a.o&&Pc(g,a.m,a.o),d=new Jn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Wh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Sc(a.h,d),wc(d,g,u)}function oi(a,u){a.H&&Ee(a.H,function(d,g){Fe(u,g,d)}),a.l&&Ph({},function(d,g){Fe(u,g,d)})}function Wh(a,u,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let V=-1;for(;;){const z=["count="+d];V==-1?0<d?(V=P[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let Oe=!0;for(let ct=0;ct<d;ct++){let Se=P[ct].g;const gt=P[ct].map;if(Se-=V,0>Se)V=Math.max(0,P[ct].g-100),Oe=!1;else try{Hy(gt,z,"req"+Se+"_")}catch{g&&g(gt)}}if(Oe){g=z.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,g}function zh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Te||rn(),ge||(Te(),ge=!0),Ut.add(u,a),a.v=0}}function kc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Js(m(a.Fa,a),Qh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Kh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Js(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Ro(this),Kh(this))};function Vc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Kh(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Pn(a.qa);Fe(u,"RID","rpc"),Fe(u,"SID",a.K),Fe(u,"AID",a.T),Fe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(u,"TO",a.ja),Fe(u,"TYPE","xmlhttp"),oi(a,u),a.m&&a.o&&Pc(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=To(Pn(u)),d.m=null,d.P=!0,Eh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ro(this),kc(this),St(19))};function So(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Gh(a,u){var d=null;if(a.g==u){So(a),Vc(a),a.g=null;var g=2}else if(bc(a.h,u))d=u.D,bh(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;g=mo(),pe(g,new gh(g,d)),bo(a)}else zh(a);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&Gy(a,u)||g==2&&kc(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:Mr(a,5);break;case 4:Mr(a,10);break;case 3:Mr(a,6);break;default:Mr(a,2)}}}function Qh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Mr(a,u){if(a.j.info("Error code "+u),u==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new xr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||vo(g,"https"),To(g),P?$y(g.toString(),d):jy(g.toString(),d)}else St(2);a.G=0,a.l&&a.l.sa(u),Yh(a),qh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Yh(a){if(a.G=0,a.ka=[],a.l){const u=Sh(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ka,u),N(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Jh(a,u,d){var g=d instanceof xr?Pn(d):new xr(d);if(g.g!="")u&&(g.g=u+"."+g.g),Eo(g,g.s);else{var P=c.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var V=new xr(null);g&&vo(V,g),u&&(V.g=u),P&&Eo(V,P),d&&(V.l=d),g=V}return d=a.D,u=a.ya,d&&u&&Fe(g,d,u),Fe(g,"VER",a.la),oi(a,g),g}function Xh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ke(new Io({eb:d})):new Ke(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zh(){}t=Zh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Po(){}Po.prototype.g=function(a,u){return new Ft(a,u)};function Ft(a,u){se.call(this),this.g=new jh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new as(this)}k(Ft,se),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Cc(this.g)},Ft.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=at(a),a=d);u.i.push(new Vy(u.Ya++,a)),u.G==3&&bo(u)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Cc(this.g),delete this.g,Ft.aa.N.call(this)};function ef(a){vc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(ef,vc);function tf(){Ec.call(this),this.status=1}k(tf,Ec);function as(a){this.g=a}k(as,Zh),as.prototype.ua=function(){pe(this.g,"a")},as.prototype.ta=function(a){pe(this.g,new ef(a))},as.prototype.sa=function(a){pe(this.g,new tf)},as.prototype.ra=function(){pe(this.g,"b")},Po.prototype.createWebChannel=Po.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,Hg=function(){return new Po},qg=function(){return mo()},jg=Nr,Sl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},go.NO_ERROR=0,go.TIMEOUT=8,go.HTTP_ERROR=6,Xo=go,_h.COMPLETE="complete",$g=_h,fh.EventType=Qs,Qs.OPEN="a",Qs.CLOSE="b",Qs.ERROR="c",Qs.MESSAGE="d",se.prototype.listen=se.prototype.K,di=fh,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Bg=Ke}).apply(typeof xo<"u"?xo:typeof self<"u"?self:typeof window<"u"?window:{});const Dd="@firebase/firestore",Nd="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new hu("@firebase/firestore");function fs(){return Yr.logLevel}function Z(t,...e){if(Yr.logLevel<=_e.DEBUG){const n=e.map(Au);Yr.debug(`Firestore (${$s}): ${t}`,...n)}}function Hn(t,...e){if(Yr.logLevel<=_e.ERROR){const n=e.map(Au);Yr.error(`Firestore (${$s}): ${t}`,...n)}}function ks(t,...e){if(Yr.logLevel<=_e.WARN){const n=e.map(Au);Yr.warn(`Firestore (${$s}): ${t}`,...n)}}function Au(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Wg(t,r,n)}function Wg(t,e,n){let r=`FIRESTORE (${$s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Hn(r),new Error(r)}function Ce(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Wg(e,s,r)}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ob{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class xb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mb{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string",31837,{l:r}),new zg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class Lb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ub{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Lb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Od{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ce(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Od(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Od(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Bb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Pl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Xc(s)===Xc(i)?ye(s,i):Xc(s)?1:-1}return ye(t.length,e.length)}const $b=55296,jb=57343;function Xc(t){const e=t.charCodeAt(0);return e>=$b&&e<=jb}function Vs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="__name__";class pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=pn.isNumericId(e),s=pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?pn.extractNumericId(e).compare(pn.extractNumericId(n)):Pl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mr.fromString(e.substring(4,e.length-2))}}class Le extends pn{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const qb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends pn{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return qb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xd}static keyField(){return new ft([xd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new G(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new G(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Le.fromString(e))}static fromName(e){return new re(Le.fromString(e).popFirst(5))}static empty(){return new re(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t,e,n){if(!n)throw new G(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hb(t,e,n,r){if(e===!0&&r===!0)throw new G(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Md(t){if(!re.isDocumentKey(t))throw new G(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ld(t){if(re.isDocumentKey(t))throw new G(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Za(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function Rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Za(t);throw new G(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Wb(t,e){if(e<=0)throw new G(D.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t,e){const n={typeString:t};return e&&(n.value=e),n}function oo(t,e){if(!Gg(t))throw new G(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new G(D.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=-62135596800,Fd=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Fd);return new Be(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ud)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fd}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oo(e,Be._jsonSchema))return new Be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ud;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Be._jsonSchemaVersion="firestore/timestamp/1.0",Be._jsonSchema={type:Xe("string",Be._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Be(0,0))}static max(){return new he(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=-1;function zb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Tr(s,re.empty(),e)}function Kb(t){return new Tr(t.readTime,t.key,ji)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(he.min(),re.empty(),ji)}static max(){return new Tr(he.max(),re.empty(),ji)}}function Gb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==Qb)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Jb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ec.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=-1;function tc(t){return t==null}function Ta(t){return t===0&&1/t==-1/0}function Xb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ta(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="";function Zb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Bd(e)),e=eS(t.get(n),e);return Bd(e)}function eS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Qg:n+="";break;default:n+=i}}return n}function Bd(t){return t+Qg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tS(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function Yg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}}class Mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jd(this.data.getIterator())}getIteratorFrom(e){return new jd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class jd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new qt([])}unionWith(e){let n=new tt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Jg("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const nS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(Ce(!!t,39018),typeof t=="string"){let e=0;const n=nS.exec(t);if(Ce(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="server_timestamp",Zg="__type__",e_="__previous_value__",t_="__local_write_time__";function Su(t){return(t?.mapValue?.fields||{})[Zg]?.stringValue===Xg}function nc(t){const e=t.mapValue.fields[e_];return Su(e)?nc(e):e}function qi(t){const e=Ir(t.mapValue.fields[t_].timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const Ia="(default)";class Hi{constructor(e,n){this.projectId=e,this.database=n||Ia}static empty(){return new Hi("","")}get isDefaultDatabase(){return this.database===Ia}isEqual(e){return e instanceof Hi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="__type__",sS="__max__",Lo={mapValue:{}},r_="__vector__",wa="value";function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Su(t)?4:oS(t)?9007199254740991:iS(t)?10:11:ce(28295,{value:t})}function bn(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qi(t).isEqual(qi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ir(s.timestampValue),c=Ir(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return wr(s.bytesValue).isEqual(wr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),c=Ge(i.doubleValue);return o===c?Ta(o)===Ta(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if($d(o)!==$d(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!bn(o[l],c[l])))return!1;return!0}(t,e);default:return ce(52216,{left:t})}}function Wi(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Ds(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ge(i.integerValue||i.doubleValue),l=Ge(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return qd(t.timestampValue,e.timestampValue);case 4:return qd(qi(t),qi(e));case 5:return Pl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=wr(i),l=wr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=ye(c[h],l[h]);if(f!==0)return f}return ye(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ye(Ge(i.latitude),Ge(o.latitude));return c!==0?c:ye(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hd(t.arrayValue,e.arrayValue);case 10:return function(i,o){const c=i.fields||{},l=o.fields||{},h=c[wa]?.arrayValue,f=l[wa]?.arrayValue,p=ye(h?.values?.length||0,f?.values?.length||0);return p!==0?p:Hd(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Lo.mapValue&&o===Lo.mapValue)return 0;if(i===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Pl(l[p],f[p]);if(m!==0)return m;const _=Ds(c[l[p]],h[f[p]]);if(_!==0)return _}return ye(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ce(23264,{he:n})}}function qd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Ir(t),r=Ir(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Hd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ds(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function Ns(t){return Cl(t)}function Cl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Cl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Cl(n.fields[o])}`;return s+"}"}(t.mapValue):ce(61005,{value:t})}function Zo(t){switch(Ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nc(t);return e?16+Zo(e):16;case 5:return 2*t.stringValue.length;case 6:return wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Zo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Cr(r.fields,(i,o)=>{s+=i.length+Zo(o)}),s}(t.mapValue);default:throw ce(13486,{value:t})}}function Wd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kl(t){return!!t&&"integerValue"in t}function Pu(t){return!!t&&"arrayValue"in t}function zd(t){return!!t&&"nullValue"in t}function Kd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ea(t){return!!t&&"mapValue"in t}function iS(t){return(t?.mapValue?.fields||{})[n_]?.stringValue===r_}function Ci(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return{...t}}function oS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===sS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ci(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ea(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new xt(Ci(this.value))}}function s_(t){const e=[];return Cr(t.fields,(n,r)=>{const s=new ft([n]);if(ea(r)){const i=s_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Tt(e,0,he.min(),he.min(),he.min(),xt.empty(),0)}static newFoundDocument(e,n,r,s){return new Tt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new Tt(e,2,n,he.min(),he.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,he.min(),he.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n){this.position=e,this.inclusive=n}}function Gd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function aS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{}class Je extends i_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lS(e,n,r):n==="array-contains"?new fS(e,r):n==="in"?new dS(e,r):n==="not-in"?new pS(e,r):n==="array-contains-any"?new mS(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uS(e,r):new hS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ds(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(Ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends i_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new un(e,n)}matches(e){return o_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function o_(t){return t.op==="and"}function a_(t){return cS(t)&&o_(t)}function cS(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Vl(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Ns(t.value);if(a_(t))return t.filters.map(e=>Vl(e)).join(",");{const e=t.filters.map(n=>Vl(n)).join(",");return`${t.op}(${e})`}}function c_(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&c_(o,s.filters[c]),!0):!1}(t,e):void ce(19439)}function l_(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${Ns(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(l_).join(" ,")+"}"}(t):"Filter"}class lS extends Je{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class uS extends Je{constructor(e,n){super(e,"in",n),this.keys=u_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hS extends Je{constructor(e,n){super(e,"not-in",n),this.keys=u_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function u_(t,e){return(e.arrayValue?.values||[]).map(n=>re.fromName(n.referenceValue))}class fS extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pu(n)&&Wi(n.arrayValue,this.value)}}class dS extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wi(this.value.arrayValue,n)}}class pS extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Wi(this.value.arrayValue,n)}}class mS extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Yd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new gS(t,e,n,r,s,i,o)}function Cu(t){const e=ue(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ns(r)).join(",")),e.Te=n}return e.Te}function ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!c_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qd(t.startAt,e.startAt)&&Qd(t.endAt,e.endAt)}function Dl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function _S(t,e,n,r,s,i,o,c){return new Hs(t,e,n,r,s,i,o,c)}function Vu(t){return new Hs(t)}function Jd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function h_(t){return t.collectionGroup!==null}function ki(t){const e=ue(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new tt(ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new zi(i,r))}),n.has(ft.keyField().canonicalString())||e.Ie.push(new zi(ft.keyField(),r))}return e.Ie}function vn(t){const e=ue(t);return e.Ee||(e.Ee=f_(e,ki(t))),e.Ee}function yS(t){const e=ue(t);return e.de||(e.de=f_(e,t.explicitOrderBy)),e.de}function f_(t,e){if(t.limitType==="F")return Yd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zi(s.field,i)});const n=t.endAt?new Aa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Aa(t.startAt.position,t.startAt.inclusive):null;return Yd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nl(t,e){const n=t.filters.concat([e]);return new Hs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ra(t,e,n){return new Hs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rc(t,e){return ku(vn(t),vn(e))&&t.limitType===e.limitType}function d_(t){return`${Cu(vn(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>l_(s)).join(", ")}]`),tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ns(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ns(s)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function sc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ki(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Gd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ki(r),s)||r.endAt&&!function(o,c,l){const h=Gd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ki(r),s))}(t,e)}function vS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function p_(t){return(e,n)=>{let r=!1;for(const s of ki(t)){const i=ES(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ES(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Ds(l,h):ce(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Yg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new ze(re.comparator);function Wn(){return TS}const m_=new ze(re.comparator);function pi(...t){let e=m_;for(const n of t)e=e.insert(n.key,n);return e}function g_(t){let e=m_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return Vi()}function __(){return Vi()}function Vi(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const IS=new ze(re.comparator),wS=new tt(re.comparator);function ve(...t){let e=wS;for(const n of t)e=e.add(n);return e}const AS=new tt(ye);function RS(){return AS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ta(e)?"-0":e}}function y_(t){return{integerValue:""+t}}function bS(t,e){return Xb(e)?y_(e):Du(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this._=void 0}}function SS(t,e,n){return t instanceof Ki?function(s,i){const o={fields:{[Zg]:{stringValue:Xg},[t_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Su(i)&&(i=nc(i)),i&&(o.fields[e_]=i),{mapValue:o}}(n,e):t instanceof Gi?E_(t,e):t instanceof Qi?T_(t,e):function(s,i){const o=v_(s,i),c=Xd(o)+Xd(s.Ae);return kl(o)&&kl(s.Ae)?y_(c):Du(s.serializer,c)}(t,e)}function PS(t,e,n){return t instanceof Gi?E_(t,e):t instanceof Qi?T_(t,e):n}function v_(t,e){return t instanceof ba?function(r){return kl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ki extends ic{}class Gi extends ic{constructor(e){super(),this.elements=e}}function E_(t,e){const n=I_(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Qi extends ic{constructor(e){super(),this.elements=e}}function T_(t,e){let n=I_(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class ba extends ic{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Xd(t){return Ge(t.integerValue||t.doubleValue)}function I_(t){return Pu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n){this.field=e,this.transform=n}}function kS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Gi&&s instanceof Gi||r instanceof Qi&&s instanceof Qi?Vs(r.elements,s.elements,bn):r instanceof ba&&s instanceof ba?bn(r.Ae,s.Ae):r instanceof Ki&&s instanceof Ki}(t.transform,e.transform)}class VS{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ta(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oc{}function w_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ac(t.key,Ht.none()):new ao(t.key,t.data,Ht.none());{const n=t.data,r=xt.empty();let s=new tt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new kr(t.key,r,new qt(s.toArray()),Ht.none())}}function DS(t,e,n){t instanceof ao?function(s,i,o){const c=s.value.clone(),l=ep(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(s,i,o){if(!ta(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=ep(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(A_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Di(t,e,n,r){return t instanceof ao?function(i,o,c,l){if(!ta(i.precondition,o))return c;const h=i.value.clone(),f=tp(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(i,o,c,l){if(!ta(i.precondition,o))return c;const h=tp(i.fieldTransforms,l,o),f=o.data;return f.setAll(A_(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return ta(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function NS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=v_(r.transform,s||null);i!=null&&(n===null&&(n=xt.empty()),n.set(r.field,i))}return n||null}function Zd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vs(r,s,(i,o)=>kS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ao extends oc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kr extends oc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function A_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ep(t,e,n){const r=new Map;Ce(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,PS(o,c,n[s]))}return r}function tp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,SS(i,o,e))}return r}class ac extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OS extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&DS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Di(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Di(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=__();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=w_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,r)=>Zd(n,r))&&Vs(this.baseMutations,e.baseMutations,(n,r)=>Zd(n,r))}}class Nu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return IS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Nu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,we;function FS(t){switch(t){case D.OK:return ce(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function R_(t){if(t===void 0)return Hn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Ye.OK:return D.OK;case Ye.CANCELLED:return D.CANCELLED;case Ye.UNKNOWN:return D.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return D.INTERNAL;case Ye.UNAVAILABLE:return D.UNAVAILABLE;case Ye.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ye.NOT_FOUND:return D.NOT_FOUND;case Ye.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ye.ABORTED:return D.ABORTED;case Ye.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ye.DATA_LOSS:return D.DATA_LOSS;default:return ce(39323,{code:t})}}(we=Ye||(Ye={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=new mr([4294967295,4294967295],0);function np(t){const e=BS().encode(t),n=new Fg;return n.update(e),new Uint8Array(n.digest())}function rp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new mr([n,r],0),new mr([s,i],0)]}class Ou{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mi(`Invalid padding: ${n}`);if(r<0)throw new mi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=mr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(mr.fromNumber(r)));return s.compare($S)===1&&(s=new mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=np(e),[r,s]=rp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ou(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=np(e),[r,s]=rp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cc(he.min(),s,new ze(ye),Wn(),ve())}}class co{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new co(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class b_{constructor(e,n){this.targetId=e,this.Ce=n}}class S_{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class sp{constructor(){this.ve=0,this.Fe=ip(),this.Me=pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ve(),n=ve(),r=ve();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}}),new co(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ip()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ce(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class jS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Wn(),this.Je=Uo(),this.He=Uo(),this.Ye=new ze(ye)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Dl(i))if(r===0){const o=new re(i.path);this.et(n,o,Tt.newNoDocument(o,he.min()))}else Ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=wr(r).toUint8Array()}catch(l){if(l instanceof Jg)return ks("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ou(o,s,i)}catch(l){return ks(l instanceof mi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Dl(c.target)){const l=new re(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Tt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ve();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new cc(e,n,this.Ye,this.je,r);return this.je=Wn(),this.Je=Uo(),this.He=Uo(),this.Ye=new ze(ye),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new sp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new tt(ye),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new tt(ye),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new sp),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Uo(){return new ze(re.comparator)}function ip(){return new ze(re.comparator)}const qS={asc:"ASCENDING",desc:"DESCENDING"},HS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WS={and:"AND",or:"OR"};class zS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ol(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function Sa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function P_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KS(t,e){return Sa(t,e.toTimestamp())}function En(t){return Ce(!!t,49232),he.fromTimestamp(function(n){const r=Ir(n);return new Be(r.seconds,r.nanos)}(t))}function xu(t,e){return xl(t,e).canonicalString()}function xl(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function C_(t){const e=Le.fromString(t);return Ce(x_(e),10190,{key:e.toString()}),e}function Ml(t,e){return xu(t.databaseId,e.path)}function Zc(t,e){const n=C_(e);if(n.get(1)!==t.databaseId.projectId)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(V_(n))}function k_(t,e){return xu(t.databaseId,e)}function GS(t){const e=C_(t);return e.length===4?Le.emptyPath():V_(e)}function Ll(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function V_(t){return Ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function op(t,e,n){return{name:Ml(t,e),fields:n.value.mapValue.fields}}function QS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ce(f===void 0||typeof f=="string",58123),pt.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),pt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?D.UNKNOWN:R_(h.code);return new G(f,h.message||"")}(o);n=new S_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zc(t,r.document.name),i=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):he.min(),c=new xt({mapValue:{fields:r.document.fields}}),l=Tt.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new na(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zc(t,r.document),i=r.readTime?En(r.readTime):he.min(),o=Tt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new na([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zc(t,r.document),i=r.removedTargetIds||[];n=new na([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new US(s,i),c=r.targetId;n=new b_(c,o)}}return n}function YS(t,e){let n;if(e instanceof ao)n={update:op(t,e.key,e.value)};else if(e instanceof ac)n={delete:Ml(t,e.key)};else if(e instanceof kr)n={update:op(t,e.key,e.data),updateMask:iP(e.fieldMask)};else{if(!(e instanceof OS))return ce(16599,{Vt:e.type});n={verify:Ml(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ki)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ba)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ce(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:KS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)}(t,e.precondition)),n}function JS(t,e){return t&&t.length>0?(Ce(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?En(s.updateTime):En(i);return o.isEqual(he.min())&&(o=En(i)),new VS(o,s.transformResults||[])}(n,e))):[]}function XS(t,e){return{documents:[k_(t,e.path)]}}function D_(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=k_(t,s);const i=function(h){if(h.length!==0)return O_(un.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:cr(m.field),direction:nP(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Ol(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function ZS(t,e,n,r){const{ft:s,parent:i}=D_(t,e),o={},c=[];let l=0;return n.forEach(h=>{const f="aggregate_"+l++;o[f]=h.alias,h.aggregateType==="count"?c.push({alias:f,count:{}}):h.aggregateType==="avg"?c.push({alias:f,avg:{field:cr(h.fieldPath)}}):h.aggregateType==="sum"&&c.push({alias:f,sum:{field:cr(h.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function eP(t){let e=GS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=N_(p);return m instanceof un&&a_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(k){return new zi(ps(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,tc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new Aa(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new Aa(_,m)}(n.endAt)),_S(e,s,o,i,c,"F",l,h)}function tP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function N_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ps(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ps(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>N_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}}(n.compositeFilter.op))}(t):ce(30097,{filter:t})}function nP(t){return qS[t]}function rP(t){return HS[t]}function sP(t){return WS[t]}function cr(t){return{fieldPath:t.canonicalString()}}function ps(t){return ft.fromServerFormat(t.fieldPath)}function O_(t){return t instanceof Je?function(n){if(n.op==="=="){if(Kd(n.value))return{unaryFilter:{field:cr(n.field),op:"IS_NAN"}};if(zd(n.value))return{unaryFilter:{field:cr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kd(n.value))return{unaryFilter:{field:cr(n.field),op:"IS_NOT_NAN"}};if(zd(n.value))return{unaryFilter:{field:cr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cr(n.field),op:rP(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>O_(s));return r.length===1?r[0]:{compositeFilter:{op:sP(n.op),filters:r}}}(t):ce(54877,{filter:t})}function iP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,s,i=he.min(),o=he.min(),c=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.yt=e}}function aP(t){const e=eP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ra(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.Cn=new lP}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Tr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class lP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},M_=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(M_,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Os(0)}static cr(){return new Os(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="LruGarbageCollector",uP=1048576;function lp([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class hP{constructor(e){this.Ir=e,this.buffer=new tt(lp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();lp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class fP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(cp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qs(n)?Z(cp,"Ignoring IndexedDB error during garbage collection: ",n):await js(n)}await this.Vr(3e5)})}}class dP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(ec.ce);const r=new hP(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ap)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ap):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),fs()<=_e.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function pP(t,e){return new dP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Di(r.mutation,s,qt.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=$r();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=pi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Wn();const o=Vi(),c=function(){return Vi()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof kr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Di(f.mutation,h,f.mutation.getFieldMask(),Be.now())):o.set(h.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>c.set(h,new gP(f,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Vi();let s=new ze((o,c)=>o-c),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||qt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||ve()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=__();f.forEach(m=>{if(!i.has(m)){const _=w_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):h_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve($r());let c=ji,l=i;return o.next(h=>L.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ve())).next(f=>({batchId:c,changes:g_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=pi();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const h=function(p,m){return new Hs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Tt.newInvalidDocument(f)))});let c=pi();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Di(f.mutation,h,qt.empty(),Be.now()),sc(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:En(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:aP(s.bundledQuery),readTime:En(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(){this.overlays=new ze(re.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=$r(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=$r(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=$r(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MS(n,r));let i=this.qr.get(n);i===void 0&&(i=ve(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this.Qr=new tt(nt.$r),this.Ur=new tt(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new nt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new re(new Le([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new re(new Le([])),r=new nt(n,e),s=new nt(n,e+1);let i=ve();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return re.comparator(e.key,n.key)||ye(e.Yr,n.Yr)}static Kr(e,n){return ye(e.Yr,n.Yr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new tt(nt.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xS(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new nt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?bu:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ye);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new nt(new re(i),0);let c=new tt(ye);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},o),L.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new nt(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.ri=e,this.docs=function(){return new ze(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Wn();const o=n.path,c=new re(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Gb(Kb(f),r)<=0||(s.has(f.key)||sc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}ii(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wP(this)}getSize(e){return L.resolve(this.size)}}class wP extends mP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.persistence=e,this.si=new es(n=>Cu(n),ku),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.oi=0,this._i=new Mu,this.targetCount=0,this.ai=Os.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Os(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n){this.ui={},this.overlays={},this.ci=new ec(0),this.li=!1,this.li=!0,this.hi=new EP,this.referenceDelegate=e(this),this.Pi=new AP(this),this.indexManager=new cP,this.remoteDocumentCache=function(s){return new IP(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new oP(n),this.Ii=new yP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new TP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new RP(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return L.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class RP extends Yb{constructor(e){super(),this.currentSequenceNumber=e}}class Lu{constructor(e){this.persistence=e,this.Ri=new Mu,this.Vi=null}static mi(e){return new Lu(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,r=>{const s=re.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Pa{constructor(e,n){this.persistence=e,this.pi=new es(r=>Zb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=pP(this,n)}static mi(e,n){return new Pa(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return L.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Zo(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Uu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return zI()?8:Jb(Rt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new bP;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(fs()<=_e.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(fs()<=_e.DEBUG&&Z("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(fs()<=_e.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):L.resolve())}ys(e,n){if(Jd(n))return L.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ra(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(n,c);return this.Cs(n,h,o,l.readTime)?this.ys(e,Ra(n,null,"F")):this.vs(e,h,n,l)}))})))}ws(e,n,r,s){return Jd(n)||s.isEqual(he.min())?L.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?L.resolve(null):(fs()<=_e.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.vs(e,o,n,zb(s,ji)).next(c=>c))})}Ds(e,n){let r=new tt(p_(e));return n.forEach((s,i)=>{sc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return fs()<=_e.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",ds(n)),this.ps.getDocumentsMatchingQuery(e,n,Tr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="LocalStore",PP=3e8;class CP{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new ze(ye),this.xs=new es(i=>Cu(i),ku),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _P(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function kP(t,e,n,r){return new CP(t,e,n,r)}async function U_(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ve();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function VP(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,m=p.keys();let _=L.resolve();return m.forEach(k=>{_=_.next(()=>f.getEntry(l,k)).next(C=>{const N=h.docVersions.get(k);Ce(N!==null,48541),C.version.compareTo(N)<0&&(p.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),f.addEntry(C)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ve();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function F_(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function DP(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(pt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(C,N,j){return C.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=PP?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))});let l=Wn(),h=ve();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(NP(i,o,e.documentUpdates).next(f=>{l=f.ks,h=f.qs})),!r.isEqual(he.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return L.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ms=s,i))}function NP(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Wn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z(Fu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:o,qs:s}})}function OP(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xP(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Ul(t,e,n){const r=ue(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qs(o))throw o;Z(Fu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function up(t,e,n){const r=ue(t);let s=he.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=ue(l),m=p.xs.get(f);return m!==void 0?L.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,f)}(r,o,vn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:ve())).next(c=>(MP(r,vS(e),c),{documents:c,Qs:i})))}function MP(t,e,n){let r=t.Os.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class hp{constructor(){this.activeTargetIds=RS()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LP{constructor(){this.Mo=new hp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new hp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="ConnectivityMonitor";class dp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Z(fp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Z(fp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo=null;function Fl(){return Fo===null?Fo=function(){return 268435456+Math.round(2147483648*Math.random())}():Fo++,"0x"+Fo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="RestConnection",FP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class BP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ia?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Fl(),c=this.zo(e,n.toUriEncodedString());Z(el,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=Fs(h);return this.Jo(e,c,l,r,f).then(p=>(Z(el,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ks(el,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=FP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class jP extends BP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Fl();return new Promise((c,l)=>{const h=new Bg;h.setWithCredentials(!0),h.listenOnce($g.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Xo.NO_ERROR:const p=h.getResponseJson();Z(yt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Xo.TIMEOUT:Z(yt,`RPC '${e}' ${o} timed out`),l(new G(D.DEADLINE_EXCEEDED,"Request time out"));break;case Xo.HTTP_ERROR:const m=h.getStatus();if(Z(yt,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const k=_?.error;if(k&&k.status&&k.message){const C=function(j){const B=j.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(B)>=0?B:D.UNKNOWN}(k.status);l(new G(C,k.message))}else l(new G(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new G(D.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Z(yt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);Z(yt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Fl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Hg(),c=qg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(yt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const k=new $P({Yo:N=>{_?Z(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(Z(yt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(yt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Zo:()=>p.close()}),C=(N,j,B)=>{N.listen(j,q=>{try{B(q)}catch(Q){setTimeout(()=>{throw Q},0)}})};return C(p,di.EventType.OPEN,()=>{_||(Z(yt,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),C(p,di.EventType.CLOSE,()=>{_||(_=!0,Z(yt,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(p))}),C(p,di.EventType.ERROR,N=>{_||(_=!0,ks(yt,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),k.a_(new G(D.UNAVAILABLE,"The operation could not be completed")))}),C(p,di.EventType.MESSAGE,N=>{if(!_){const j=N.data[0];Ce(!!j,16349);const B=j,q=B?.error||B[0]?.error;if(q){Z(yt,`RPC '${e}' stream ${s} received error:`,q);const Q=q.status;let me=function(v){const I=Ye[v];if(I!==void 0)return R_(I)}(Q),Ee=q.message;me===void 0&&(me=D.INTERNAL,Ee="Unknown error status: "+Q+" with message "+q.message),_=!0,k.a_(new G(me,Ee)),p.close()}else Z(yt,`RPC '${e}' stream ${s} received:`,j),k.u_(j)}}),C(c,jg.STAT_EVENT,N=>{N.stat===Sl.PROXY?Z(yt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Sl.NOPROXY&&Z(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function tl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){return new zS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="PersistentStream";class $_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new B_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new G(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Z(pp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Z(pp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qP extends $_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=QS(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?En(o.readTime):he.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ll(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Dl(l)?{documents:XS(i,l)}:{query:D_(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=P_(i,o.resumeToken);const h=Ol(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=Sa(i,o.snapshotVersion.toTimestamp());const h=Ol(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=tP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ll(this.serializer),n.removeTarget=e,this.q_(n)}}class HP extends $_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=JS(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ll(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YS(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{}class zP extends WP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,xl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(D.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,xl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(D.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class KP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Hn(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="RemoteStore";class GP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ts(this)&&(Z(Jr,"Restarting streams for network reachability change."),await async function(l){const h=ue(l);h.Ea.add(4),await lo(h),h.Ra.set("Unknown"),h.Ea.delete(4),await uc(h)}(this))})}),this.Ra=new KP(r,s)}}async function uc(t){if(ts(t))for(const e of t.da)await e(!0)}async function lo(t){for(const e of t.da)await e(!1)}function j_(t,e){const n=ue(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),qu(n)?ju(n):Ws(n).O_()&&$u(n,e))}function Bu(t,e){const n=ue(t),r=Ws(n);n.Ia.delete(e),r.O_()&&q_(n,e),n.Ia.size===0&&(r.O_()?r.L_():ts(n)&&n.Ra.set("Unknown"))}function $u(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).Y_(e)}function q_(t,e){t.Va.Ue(e),Ws(t).Z_(e)}function ju(t){t.Va=new jS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.Ra.ua()}function qu(t){return ts(t)&&!Ws(t).x_()&&t.Ia.size>0}function ts(t){return ue(t).Ea.size===0}function H_(t){t.Va=void 0}async function QP(t){t.Ra.set("Online")}async function YP(t){t.Ia.forEach((e,n)=>{$u(t,e)})}async function JP(t,e){H_(t),qu(t)?(t.Ra.ha(e),ju(t)):t.Ra.set("Unknown")}async function XP(t,e,n){if(t.Ra.set("Online"),e instanceof S_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){Z(Jr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ca(t,r)}else if(e instanceof na?t.Va.Ze(e):e instanceof b_?t.Va.st(e):t.Va.tt(e),!n.isEqual(he.min()))try{const r=await F_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(pt.EMPTY_BYTE_STRING,f.snapshotVersion)),q_(i,l);const p=new ur(f.target,l,h,f.sequenceNumber);$u(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z(Jr,"Failed to raise snapshot:",r),await Ca(t,r)}}async function Ca(t,e,n){if(!qs(e))throw e;t.Ea.add(1),await lo(t),t.Ra.set("Offline"),n||(n=()=>F_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Jr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await uc(t)})}function W_(t,e){return e().catch(n=>Ca(t,n,e))}async function hc(t){const e=ue(t),n=Rr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:bu;for(;ZP(e);)try{const s=await OP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,e0(e,s)}catch(s){await Ca(e,s)}z_(e)&&K_(e)}function ZP(t){return ts(t)&&t.Ta.length<10}function e0(t,e){t.Ta.push(e);const n=Rr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function z_(t){return ts(t)&&!Rr(t).x_()&&t.Ta.length>0}function K_(t){Rr(t).start()}async function t0(t){Rr(t).ra()}async function n0(t){const e=Rr(t);for(const n of t.Ta)e.ea(n.mutations)}async function r0(t,e,n){const r=t.Ta.shift(),s=Nu.from(r,e,n);await W_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await hc(t)}async function s0(t,e){e&&Rr(t).X_&&await async function(r,s){if(function(o){return FS(o)&&o!==D.ABORTED}(s.code)){const i=r.Ta.shift();Rr(r).B_(),await W_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hc(r)}}(t,e),z_(t)&&K_(t)}async function mp(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),Z(Jr,"RemoteStore received new credentials");const r=ts(n);n.Ea.add(3),await lo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await uc(n)}async function i0(t,e){const n=ue(t);e?(n.Ea.delete(2),await uc(n)):e||(n.Ea.add(2),await lo(n),n.Ra.set("Unknown"))}function Ws(t){return t.ma||(t.ma=function(n,r,s){const i=ue(n);return i.sa(),new qP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:QP.bind(null,t),t_:YP.bind(null,t),r_:JP.bind(null,t),H_:XP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),qu(t)?ju(t):t.Ra.set("Unknown")):(await t.ma.stop(),H_(t))})),t.ma}function Rr(t){return t.fa||(t.fa=function(n,r,s){const i=ue(n);return i.sa(),new HP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:t0.bind(null,t),r_:s0.bind(null,t),ta:n0.bind(null,t),na:r0.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await hc(t)):(await t.fa.stop(),t.Ta.length>0&&(Z(Jr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Hu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wu(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),qs(t))return new G(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{static emptySet(e){return new ws(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=pi(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.ga=new ze(re.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new xs(e,n,ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class a0{constructor(){this.queries=_p(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=_p(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new G(D.ABORTED,"Firestore shutting down"))}}function _p(){return new es(t=>d_(t),rc)}async function G_(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new o0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Wu(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&zu(n)}async function Q_(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function c0(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&zu(n)}function l0(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function zu(t){t.Ca.forEach(e=>{e.next()})}var Bl,yp;(yp=Bl||(Bl={})).Ma="default",yp.Cache="cache";class Y_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.key=e}}class X_{constructor(e){this.key=e}}class u0{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ve(),this.mutatedKeys=ve(),this.eu=p_(e),this.tu=new ws(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new gp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),_=sc(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;m&&_?m.data.isEqual(_.data)?k!==C&&(r.track({type:3,doc:_}),N=!0):this.su(m,_)||(r.track({type:2,doc:_}),N=!0,(l&&this.eu(_,l)>0||h&&this.eu(_,h)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),N=!0):m&&!_&&(r.track({type:1,doc:m}),N=!0,(l||h)&&(c=!0)),N&&(_?(o=o.add(_),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(_,k){const C=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:N})}};return C(_)-C(k)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new xs(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new gp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ve(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new X_(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new J_(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ve();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return xs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ku="SyncEngine";class h0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class f0{constructor(e){this.key=e,this.hu=!1}}class d0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new es(c=>d_(c),rc),this.Iu=new Map,this.Eu=new Set,this.du=new ze(re.comparator),this.Au=new Map,this.Ru=new Mu,this.Vu={},this.mu=new Map,this.fu=Os.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function p0(t,e,n=!0){const r=sy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Z_(r,e,n,!0),s}async function m0(t,e){const n=sy(t);await Z_(n,e,!0,!1)}async function Z_(t,e,n,r){const s=await xP(t.localStore,vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await g0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&j_(t.remoteStore,s),c}async function g0(t,e,n,r,s){t.pu=(p,m,_)=>async function(C,N,j,B){let q=N.view.ru(j);q.Cs&&(q=await up(C.localStore,N.query,!1).then(({documents:w})=>N.view.ru(w,q)));const Q=B&&B.targetChanges.get(N.targetId),me=B&&B.targetMismatches.get(N.targetId)!=null,Ee=N.view.applyChanges(q,C.isPrimaryClient,Q,me);return Ep(C,N.targetId,Ee.au),Ee.snapshot}(t,p,m,_);const i=await up(t.localStore,e,!0),o=new u0(e,i.Qs),c=o.ru(i.documents),l=co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Ep(t,n,h.au);const f=new h0(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function _0(t,e,n){const r=ue(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!rc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ul(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Bu(r.remoteStore,s.targetId),$l(r,s.targetId)}).catch(js)):($l(r,s.targetId),await Ul(r.localStore,s.targetId,!0))}async function y0(t,e){const n=ue(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bu(n.remoteStore,r.targetId))}async function v0(t,e,n){const r=b0(t);try{const s=await function(o,c){const l=ue(o),h=Be.now(),f=c.reduce((_,k)=>_.add(k.key),ve());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let k=Wn(),C=ve();return l.Ns.getEntries(_,f).next(N=>{k=N,k.forEach((j,B)=>{B.isValidDocument()||(C=C.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,k)).next(N=>{p=N;const j=[];for(const B of c){const q=NS(B,p.get(B.key).overlayedDocument);q!=null&&j.push(new kr(B.key,q,s_(q.value.mapValue),Ht.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,j,c)}).next(N=>{m=N;const j=N.applyToLocalDocumentSet(p,C);return l.documentOverlayCache.saveOverlays(_,N.batchId,j)})}).then(()=>({batchId:m.batchId,changes:g_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new ze(ye)),h=h.insert(c,l),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await uo(r,s.changes),await hc(r.remoteStore)}catch(s){const i=Wu(s,"Failed to persist write");n.reject(i)}}async function ey(t,e){const n=ue(t);try{const r=await DP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ce(o.hu,14607):s.removedDocuments.size>0&&(Ce(o.hu,42227),o.hu=!1))}),await uo(n,r,e)}catch(r){await js(r)}}function vp(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ue(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const m of p.Sa)m.va(c)&&(h=!0)}),h&&zu(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function E0(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ze(re.comparator);o=o.insert(i,Tt.newNoDocument(i,he.min()));const c=ve().add(i),l=new cc(he.min(),new Map,new ze(ye),o,c);await ey(r,l),r.du=r.du.remove(i),r.Au.delete(e),Gu(r)}else await Ul(r.localStore,e,!1).then(()=>$l(r,e,n)).catch(js)}async function T0(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await VP(n.localStore,e);ny(n,r,null),ty(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uo(n,s)}catch(s){await js(s)}}async function I0(t,e,n){const r=ue(t);try{const s=await function(o,c){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ce(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);ny(r,e,n),ty(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uo(r,s)}catch(s){await js(s)}}function ty(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function ny(t,e,n){const r=ue(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function $l(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||ry(t,r)})}function ry(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Bu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Gu(t))}function Ep(t,e,n){for(const r of n)r instanceof J_?(t.Ru.addReference(r.key,e),w0(t,r)):r instanceof X_?(Z(Ku,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||ry(t,r.key)):ce(19791,{wu:r})}function w0(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Z(Ku,"New document in limbo: "+n),t.Eu.add(r),Gu(t))}function Gu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new re(Le.fromString(e)),r=t.fu.next();t.Au.set(r,new f0(n)),t.du=t.du.insert(n,r),j_(t.remoteStore,new ur(vn(Vu(n.path)),r,"TargetPurposeLimboResolution",ec.ce))}}async function uo(t,e,n){const r=ue(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(h=>{if((h||n)&&r.isPrimaryClient){const f=h?!h.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(h){s.push(h);const f=Uu.As(l.targetId,h);i.push(f)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,h){const f=ue(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,m=>L.forEach(m.Es,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>L.forEach(m.ds,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!qs(p))throw p;Z(Fu,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),k=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(k);f.Ms=f.Ms.insert(m,C)}}}(r.localStore,i))}async function A0(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){Z(Ku,"User change. New user:",e.toKey());const r=await U_(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new G(D.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uo(n,r.Ls)}}function R0(t,e){const n=ue(t),r=n.Au.get(e);if(r&&r.hu)return ve().add(r.key);{let s=ve();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function sy(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ey.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=R0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=E0.bind(null,e),e.Pu.H_=c0.bind(null,e.eventManager),e.Pu.yu=l0.bind(null,e.eventManager),e}function b0(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=T0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=I0.bind(null,e),e}class ka{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return kP(this.persistence,new SP,e.initialUser,this.serializer)}Cu(e){return new L_(Lu.mi,this.serializer)}Du(e){return new LP}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ka.provider={build:()=>new ka};class S0 extends ka{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ce(this.persistence.referenceDelegate instanceof Pa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new fP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new L_(r=>Pa.mi(r,n),this.serializer)}}class jl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=A0.bind(null,this.syncEngine),await i0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new a0}()}createDatastore(e){const n=lc(e.databaseInfo.databaseId),r=function(i){return new jP(i)}(e.databaseInfo);return function(i,o,c,l){return new zP(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new GP(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>vp(this.syncEngine,n,0),function(){return dp.v()?new dp:new UP}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new d0(s,i,o,c,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=ue(n);Z(Jr,"RemoteStore shutting down."),r.Ea.add(5),await lo(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}jl.provider={build:()=>new jl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="FirestoreClient";class P0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=Ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z(br,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(br,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nl(t,e){t.asyncQueue.verifyOperationInProgress(),Z(br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await U_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Tp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await C0(t);Z(br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>mp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>mp(e.remoteStore,s)),t._onlineComponents=e}async function C0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(br,"Using user provided OfflineComponentProvider");try{await nl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ks("Error using user provided cache. Falling back to memory cache: "+n),await nl(t,new ka)}}else Z(br,"Using default OfflineComponentProvider"),await nl(t,new S0(void 0));return t._offlineComponents}async function Qu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(br,"Using user provided OnlineComponentProvider"),await Tp(t,t._uninitializedComponentsProvider._online)):(Z(br,"Using default OnlineComponentProvider"),await Tp(t,new jl))),t._onlineComponents}function k0(t){return Qu(t).then(e=>e.syncEngine)}function V0(t){return Qu(t).then(e=>e.datastore)}async function oy(t){const e=await Qu(t),n=e.eventManager;return n.onListen=p0.bind(null,e.syncEngine),n.onUnlisten=_0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=m0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=y0.bind(null,e.syncEngine),n}function D0(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new iy({next:m=>{f.Nu(),o.enqueueAndForget(()=>Q_(i,p));const _=m.docs.has(c);!_&&m.fromCache?h.reject(new G(D.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?h.reject(new G(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Y_(Vu(c.path),f,{includeMetadataChanges:!0,qa:!0});return G_(i,p)}(await oy(t),t.asyncQueue,e,n,r)),r.promise}function N0(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new iy({next:m=>{f.Nu(),o.enqueueAndForget(()=>Q_(i,p)),m.fromCache&&l.source==="server"?h.reject(new G(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Y_(c,f,{includeMetadataChanges:!0,qa:!0});return G_(i,p)}(await oy(t),t.asyncQueue,e,n,r)),r.promise}function O0(t,e,n){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>{try{const s=await V0(t);r.resolve(async function(o,c,l){const h=ue(o),{request:f,gt:p,parent:m}=ZS(h.serializer,yS(c),l);h.connection.$o||delete f.parent;const _=(await h.Ho("RunAggregationQuery",h.serializer.databaseId,m,f,1)).filter(C=>!!C.result);Ce(_.length===1,64727);const k=_[0].result?.aggregateFields;return Object.keys(k).reduce((C,N)=>(C[p[N]]=k[N],C),{})}(s,e,n))}catch(s){r.reject(s)}}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="firestore.googleapis.com",wp=!0;class Ap{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cy,this.ssl=wp}else this.host=e.host,this.ssl=e.ssl??wp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=M_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uP)throw new G(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ay(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ap({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ap(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ob;switch(r.type){case"firstParty":return new Ub(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ip.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Ip.delete(n),r.terminate())}(this),Promise.resolve()}}function x0(t,e,n,r={}){t=Rn(t,fc);const s=Fs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Jm(`https://${c}`),Xm("Firestore",!0)),i.host!==cy&&i.host!==c&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Wr(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=vt.MOCK_USER;else{h=LI(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new G(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new vt(p)}t._authCredentials=new xb(new zg(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class Ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(oo(n,Ze._jsonSchema))return new Ze(e,r||null,new re(Le.fromString(n.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:Xe("string",Ze._jsonSchemaVersion),referencePath:Xe("string")};class gr extends Vr{constructor(e,n,r){super(e,n,Vu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new re(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function Lt(t,e,...n){if(t=je(t),Kg("collection","path",e),t instanceof fc){const r=Le.fromString(e,...n);return Ld(r),new gr(t,null,r)}{if(!(t instanceof Ze||t instanceof gr))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Ld(r),new gr(t.firestore,null,r)}}function dt(t,e,...n){if(t=je(t),arguments.length===1&&(e=Ru.newId()),Kg("doc","path",e),t instanceof fc){const r=Le.fromString(e,...n);return Md(r),new Ze(t,null,new re(r))}{if(!(t instanceof Ze||t instanceof gr))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Md(r),new Ze(t.firestore,t instanceof gr?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="AsyncQueue";class bp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new B_(this,"async_queue_retry"),this._c=()=>{const r=tl();r&&Z(Rp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=tl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=tl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new yn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!qs(e))throw e;Z(Rp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Hn("INTERNAL UNHANDLED ERROR: ",Sp(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Hu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ce(47125,{Pc:Sp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Sp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ns extends fc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new bp,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bp(e),this._firestoreClient=void 0,await e}}}function M0(t,e){const n=typeof t=="object"?t:ng(),r=typeof t=="string"?t:Ia,s=du(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xI("firestore");i&&x0(s,...i)}return s}function ho(t){if(t._terminated)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||L0(t),t._firestoreClient}function L0(t){const e=t._freezeSettings(),n=function(s,i,o,c){return new rS(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ay(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new P0(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class F0{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(pt.fromBase64String(e))}catch(n){throw new G(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yt(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oo(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:Xe("string",Yt._jsonSchemaVersion),bytes:Xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tn._jsonSchemaVersion}}static fromJSON(e){if(oo(e,Tn._jsonSchema))return new Tn(e.latitude,e.longitude)}}Tn._jsonSchemaVersion="firestore/geoPoint/1.0",Tn._jsonSchema={type:Xe("string",Tn._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:In._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oo(e,In._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new In(e.vectorValues);throw new G(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}In._jsonSchemaVersion="firestore/vectorValue/1.0",In._jsonSchema={type:Xe("string",In._jsonSchemaVersion),vectorValues:Xe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=/^__.*__$/;class $0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ao(e,this.data,n,this.fieldTransforms)}}class ly{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:t})}}class Yu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Yu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Va(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(uy(this.Ac)&&B0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class j0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lc(e)}Cc(e,n,r,s=!1){return new Yu({Ac:e,methodName:n,Dc:r,path:ft.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ju(t){const e=t._freezeSettings(),n=lc(t._databaseId);return new j0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hy(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Zu("Data must be an object, but it was:",o,r);const c=fy(r,o);let l,h;if(i.merge)l=new qt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=ql(e,p,n);if(!o.contains(m))throw new G(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);py(f,m)||f.push(m)}l=new qt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new $0(new xt(c),l,h)}class mc extends pc{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}class Xu extends pc{_toFieldTransform(e){return new CS(e.path,new Ki)}isEqual(e){return e instanceof Xu}}function q0(t,e,n,r){const s=t.Cc(1,e,n);Zu("Data must be an object, but it was:",s,r);const i=[],o=xt.empty();Cr(r,(l,h)=>{const f=eh(e,l,n);h=je(h);const p=s.yc(f);if(h instanceof mc)i.push(f);else{const m=fo(h,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new qt(i);return new ly(o,c,s.fieldTransforms)}function H0(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[ql(e,r,n)],l=[s];if(i.length%2!=0)throw new G(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(ql(e,i[m])),l.push(i[m+1]);const h=[],f=xt.empty();for(let m=c.length-1;m>=0;--m)if(!py(h,c[m])){const _=c[m];let k=l[m];k=je(k);const C=o.yc(_);if(k instanceof mc)h.push(_);else{const N=fo(k,C);N!=null&&(h.push(_),f.set(_,N))}}const p=new qt(h);return new ly(f,p,o.fieldTransforms)}function W0(t,e,n,r=!1){return fo(n,t.Cc(r?4:3,e))}function fo(t,e){if(dy(t=je(t)))return Zu("Unsupported field value:",e,t),fy(t,e);if(t instanceof pc)return function(r,s){if(!uy(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=fo(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:Sa(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sa(s.serializer,i)}}if(r instanceof Tn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yt)return{bytesValue:P_(s.serializer,r._byteString)};if(r instanceof Ze){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof In)return function(o,c){return{mapValue:{fields:{[n_]:{stringValue:r_},[wa]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return Du(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Za(r)}`)}(t,e)}function fy(t,e){const n={};return Yg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(r,s)=>{const i=fo(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function dy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Tn||t instanceof Yt||t instanceof Ze||t instanceof pc||t instanceof In)}function Zu(t,e,n){if(!dy(n)||!Gg(n)){const r=Za(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function ql(t,e,n){if((e=je(e))instanceof dc)return e._internalPath;if(typeof e=="string")return eh(t,e);throw Va("Field path arguments must be of type string or ",t,!1,void 0,n)}const z0=new RegExp("[~\\*/\\[\\]]");function eh(t,e,n){if(e.search(z0)>=0)throw Va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dc(...e.split("."))._internalPath}catch{throw Va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Va(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new G(D.INVALID_ARGUMENT,c+t+l)}function py(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new K0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class K0 extends my{data(){return super.data()}}function gc(t,e){return typeof e=="string"?eh(t,e):e instanceof dc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class th{}class nh extends th{}function Gn(t,e,...n){let r=[];e instanceof th&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof rh).length,c=i.filter(l=>l instanceof _c).length;if(o>1||o>0&&c>0)throw new G(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class _c extends nh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _c(e,n,r)}_apply(e){const n=this._parse(e);return gy(e._query,n),new Vr(e.firestore,e.converter,Nl(e._query,n))}_parse(e){const n=Ju(e.firestore);return function(i,o,c,l,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Cp(p,f);const k=[];for(const C of p)k.push(Pp(l,i,C));m={arrayValue:{values:k}}}else m=Pp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Cp(p,f),m=W0(c,o,p,f==="in"||f==="not-in");return Je.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function yc(t,e,n){const r=e,s=gc("where",t);return _c._create(s,r,n)}class rh extends th{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)gy(o,l),o=Nl(o,l)}(e._query,n),new Vr(e.firestore,e.converter,Nl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sh extends nh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new sh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new G(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zi(i,o)}(e._query,this._field,this._direction);return new Vr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Hs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function zs(t,e="asc"){const n=e,r=gc("orderBy",t);return sh._create(r,n)}class ih extends nh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ih(e,n,r)}_apply(e){return new Vr(e.firestore,e.converter,Ra(e._query,this._limit,this._limitType))}}function Q0(t){return Wb("limit",t),ih._create("limit",t,"F")}function Pp(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new G(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!h_(e)&&n.indexOf("/")!==-1)throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!re.isDocumentKey(r))throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wd(t,new re(r))}if(n instanceof Ze)return Wd(t,n._key);throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Za(n)}.`)}function Cp(t,e){if(!Array.isArray(t)||t.length===0)throw new G(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Y0{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[wa].arrayValue?.values?.map(r=>Ge(r.doubleValue));return new In(n)}convertGeoPoint(e){return new Tn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qi(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ce(x_(r),9688,{name:e});const s=new Hi(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function J0(){return new U0("count")}class gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qr extends my{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ra(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",qr._jsonSchema={type:Xe("string",qr._jsonSchemaVersion),bundleSource:Xe("string","DocumentSnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class ra extends qr{data(e={}){return super.data(e)}}class As{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new gi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ra(this._firestore,this._userDataWriter,r.key,r,new gi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new ra(s._firestore,s._userDataWriter,c.doc.key,c.doc,new gi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ra(s._firestore,s._userDataWriter,c.doc.key,c.doc,new gi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:X0(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=As._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ru.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function X0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(t){t=Rn(t,Ze);const e=Rn(t.firestore,ns);return D0(ho(e),t._key).then(n=>eC(e,t,n))}As._jsonSchemaVersion="firestore/querySnapshot/1.0",As._jsonSchema={type:Xe("string",As._jsonSchemaVersion),bundleSource:Xe("string","QuerySnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class ah extends Y0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function Dr(t){t=Rn(t,Vr);const e=Rn(t.firestore,ns),n=ho(e),r=new ah(e);return G0(t._query),N0(n,t._query).then(s=>new As(e,r,t,s))}function Ks(t,e,n){t=Rn(t,Ze);const r=Rn(t.firestore,ns),s=_y(t.converter,e,n);return ch(r,[hy(Ju(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ht.none())])}function Z0(t){return ch(Rn(t.firestore,ns),[new ac(t._key,Ht.none())])}function ch(t,e){return function(r,s){const i=new yn;return r.asyncQueue.enqueueAndForget(async()=>v0(await k0(r),s,i)),i.promise}(ho(t),e)}function eC(t,e,n){const r=n.docs.get(e._key),s=new ah(t);return new qr(t,s,e._key,r,new gi(n.hasPendingWrites,n.fromCache),e.converter)}function Bo(t){return tC(t,{count:J0()})}function tC(t,e){const n=Rn(t.firestore,ns),r=ho(n),s=tS(e,(i,o)=>new LS(o,i.aggregateType,i._internalFieldPath));return O0(r,t._query,s).then(i=>function(c,l,h){const f=new ah(c);return new F0(l,f,h)}(n,t,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ju(e)}set(e,n,r){this._verifyNotCommitted();const s=rl(e,this._firestore),i=_y(s.converter,n,r),o=hy(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ht.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=rl(e,this._firestore);let o;return o=typeof(n=je(n))=="string"||n instanceof dc?H0(this._dataReader,"WriteBatch.update",i._key,n,r,s):q0(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ht.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=rl(e,this._firestore);return this._mutations=this._mutations.concat(new ac(n._key,Ht.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function rl(t,e){if((t=je(t)).firestore!==e)throw new G(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Ms(){return new Xu("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){return ho(t=Rn(t,ns)),new nC(t,e=>ch(t,e))}(function(e,n=!0){(function(s){$s=s})(Bs),Cs(new zr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ns(new Mb(r.getProvider("auth-internal")),new Fb(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hi(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),pr(Dd,Nd,e),pr(Dd,Nd,"esm2020")})();const rC={apiKey:"AIzaSyADaoyNEBjUIfFuHXxyCdviUr2Zxrw4ox4",authDomain:"nexus-academy-fe605.firebaseapp.com",projectId:"nexus-academy-fe605",storageBucket:"nexus-academy-fe605.appspot.com",messagingSenderId:"452930306032",appId:"1:452930306032:web:8b15c4bbdb92f5cb98e735",measurementId:"G-136E2B6XZV"},vy=tg(rC),st=Db(vy),Ne=M0(vy),R1=t=>{if(!t)return;const e=dt(Ne,"users",t.uid),n={uid:t.uid,email:t.email,displayName:t.displayName||null,photoURL:t.photoURL||null,createdAt:Ms()};return Ks(e,n,{merge:!0})},Ey=async t=>{if(!t)return null;try{const e=dt(Ne,"users",t),n=await oh(e);return n.exists()?n.data():null}catch(e){return console.error("Error fetching user profile:",e),null}},b1=(t,e)=>{if(!t||!e)return Promise.reject(new Error("User ID and profile data are required."));const n=dt(Ne,"users",t);return Ks(n,e,{merge:!0})},S1=t=>{if(!t)return Promise.reject(new Error("User ID is required."));const e=dt(Ne,"users",t);return Z0(e)},P1=async()=>{try{const t=Lt(Ne,"users"),e=Gn(t,zs("createdAt","desc"));return(await Dr(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(t){return console.error("Error fetching all users:",t),[]}},C1=(t,e)=>{if(!t||!e)return Promise.reject(new Error("User ID and new role are required."));const n=dt(Ne,"users",t);return Ks(n,{role:e},{merge:!0})},k1=async(t=3)=>{try{const e=Lt(Ne,"blogPosts"),n=Gn(e,zs("publishedAt","desc"),Q0(t));return(await Dr(n)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){throw console.error("Error fetching recent blog posts:",e),e.code==="failed-precondition"&&console.error("Firestore Index Missing: Please create a composite index for the 'blogPosts' collection on 'publishedAt' descending."),e}},V1=async()=>{try{const t=Lt(Ne,"courses"),e=Gn(t,yc("isFeatured","==",!0));return(await Dr(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(t){throw console.error("Error fetching featured courses:",t),t.code==="failed-precondition"&&(console.error("Firestore Index Missing: Please create a composite index for the 'courses' collection on 'isFeatured' ascending."),console.error("You can create this index by visiting the link in the Firebase console error message.")),t}},D1=async()=>{try{const t=Lt(Ne,"courses"),e=Gn(t,zs("title","asc"));return(await Dr(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(t){return console.error("Error fetching all courses:",t),[]}},Ty=async t=>{if(!t)return null;try{const e=dt(Ne,"courses",t),n=await oh(e);return n.exists()?{id:n.id,...n.data()}:null}catch(e){return console.error("Error fetching course by ID:",e),null}},Iy=async t=>{if(!t)return[];try{const e=Lt(Ne,"lessons"),n=Gn(e,yc("courseId","==",t),zs("order","asc"));return(await Dr(n)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){throw console.error("Error fetching course lessons:",e),e.code==="failed-precondition"&&console.error("Firestore Index Missing: An index is required for the 'lessons' collection. Please use the link from the Firebase error in the console to create it."),e}},sC=async t=>{if(!t)return null;try{const[e,n]=await Promise.all([Ty(t),Iy(t)]);if(!e)return console.log("getCourseWithLessons: Course not found."),null;const r=new Map;return e.moduleOrder&&e.moduleOrder.length>0&&e.moduleOrder.forEach(s=>{r.set(s,{title:s,lessons:[]})}),n.forEach(s=>{r.has(s.moduleId)||r.set(s.moduleId,{title:s.moduleId,lessons:[]}),r.get(s.moduleId).lessons.push(s)}),{...e,modules:Array.from(r.values())}}catch(e){throw console.error("Error fetching course with lessons:",e),e}},N1=async(t,e,n)=>{const r=t?dt(Ne,"courses",t):dt(Lt(Ne,"courses")),s=r.id,i=yy(Ne);return i.set(r,{...e,updatedAt:Ms()},{merge:!0}),n.forEach(o=>{const c={...o,courseId:s},l=o.id?dt(Ne,"lessons",o.id):dt(Lt(Ne,"lessons"));i.set(l,c,{merge:!0})}),await i.commit(),s},O1=async t=>{if(!t)return Promise.reject(new Error("Course ID is required."));const e=await Iy(t),n=yy(Ne);e.forEach(s=>{const i=dt(Ne,"lessons",s.id);n.delete(i)});const r=dt(Ne,"courses",t);return n.delete(r),n.commit()},x1=async()=>{try{const t=Lt(Ne,"blogPosts"),e=Gn(t,zs("publishedAt","desc"));return(await Dr(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(t){return console.error("Error fetching all blog posts:",t),[]}},M1=async t=>{if(!t)return null;try{const e=dt(Ne,"blogPosts",t),n=await oh(e);return n.exists()?{id:n.id,...n.data()}:null}catch(e){return console.error("Error fetching blog post by ID:",e),null}},L1=async(t,e)=>{const n=t?dt(Ne,"blogPosts",t):dt(Lt(Ne,"blogPosts")),r={...e,...t?{updatedAt:Ms()}:{publishedAt:Ms()}};return await Ks(n,r,{merge:!0}),n.id},U1=async()=>{try{const t=Lt(Ne,"enrollments"),e=Gn(t,zs("enrolledAt","desc"));return(await Dr(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(t){return console.error("Error fetching all enrollments:",t),[]}},F1=(t,e)=>{if(!t||!e)return Promise.reject(new Error("Enrollment ID and new status are required."));const n=dt(Ne,"enrollments",t);return Ks(n,{status:e,updatedAt:Ms()},{merge:!0})},B1=async t=>{if(!t)return[];try{const e=Lt(Ne,"enrollments"),n=Gn(e,yc("userId","==",t)),r=await Dr(n);if(r.empty)return[];const s=r.docs.map(o=>{const c=o.data().courseId;return Ty(c)});return(await Promise.all(s)).filter(o=>o!==null)}catch(e){return console.error("Error fetching enrolled courses:",e),[]}},$1=(t,e,n,r)=>{if(!t||!e)return Promise.reject(new Error("User ID and Course ID are required to create an enrollment."));const s=`${t}_${e}`,i=dt(Ne,"enrollments",s),o={userId:t,courseId:e,courseTitle:n,enrolledAt:Ms(),paymentProvider:r,progressPercentage:0,status:r==="crypto"?"pending_verification":"active"};return Ks(i,o)},j1=async()=>{try{const t=Lt(Ne,"users"),e=Lt(Ne,"courses"),n=Lt(Ne,"enrollments"),r=Gn(n,yc("status","==","pending_verification")),[s,i,o,c]=await Promise.all([Bo(t),Bo(e),Bo(n),Bo(r)]);return{totalUsers:s.data().count,totalCourses:i.data().count,totalEnrollments:o.data().count,pendingEnrollments:c.data().count}}catch(t){throw console.error("Error fetching admin dashboard stats:",t),t}},_r=kt(null);let Da=!1;st.onAuthStateChanged(async t=>{if(t)try{_r.value=await Ey(t.uid),Da=!0}catch(e){console.error("userStore: Failed to fetch user profile on auth change:",e),_r.value=null}else _r.value=null,Da=!1});const iC=async()=>{if(st.currentUser&&!Da)try{_r.value=await Ey(st.currentUser.uid),Da=!0}catch(t){console.error("userStore: ensureUserProfile failed:",t),_r.value=null}},lh="/nexus-academy-prod/assets/nexus-logo-light-bNMNesZn.png",wy=new Mn,q1=(t,e)=>uR(st,t,e),H1=(t,e)=>hR(st,t,e),W1=()=>BR(st,wy),uh=()=>vR(st),z1=t=>{const e=st.currentUser;return e?dR(e,t):Promise.reject(new Error("No authenticated user found."))},K1=t=>{const e=st.currentUser;if(!e)return Promise.reject(new Error("No user is currently signed in."));const n=e.providerData[0].providerId;if(n==="password"){if(!t)return Promise.reject(new Error("Password is required for re-authentication."));const r=Zr.credential(e.email,t);return lR(e,r)}return n==="google.com"?$R(e,wy):Promise.reject(new Error("Unsupported authentication provider for re-authentication."))},G1=t=>{const e=st.currentUser;return e?pR(e,t):Promise.reject(new Error("No user is currently signed in."))},Q1=()=>{const t=st.currentUser;return t?ER(t):Promise.reject(new Error("No user is currently signed in."))},rs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},oC={class:"container header-container"},aC={class:"header-actions"},cC={class:"user-avatar"},lC={key:0,class:"dropdown-menu"},uC={class:"dropdown-header"},hC={class:"dropdown-username"},fC={class:"dropdown-email"},dC={__name:"TheNavbar",setup(t){const e=kt(!1),n=kt(!1),r=kt(st.currentUser),s=kt(!1),i=uu(),o=()=>{e.value=!e.value},c=()=>{e.value=!1},l=()=>{n.value=window.scrollY>10},h=()=>{s.value=!s.value},f=()=>{s.value=!1},p=async()=>{await uh(),s.value=!1,i.push("/")},m=ht(()=>_r.value?.displayName||r.value?.email||""),_=ht(()=>{const k=m.value;return k?k.split(" ").map(C=>C[0]).join("").substring(0,2).toUpperCase():"??"});return Xi(()=>{window.addEventListener("scroll",l),window.addEventListener("click",f),st.onAuthStateChanged(k=>{r.value=k,k||(s.value=!1)})}),ja(()=>{window.removeEventListener("scroll",l),window.removeEventListener("click",f)}),(k,C)=>(We(),rt("header",{class:Jt(["main-header",{"is-scrolled":n.value}])},[$("div",oC,[oe(fe(Re),{to:"/",class:"logo-link","aria-label":"Nexus Academy Home"},{default:Ae(()=>C[0]||(C[0]=[$("img",{src:lh,alt:"Nexus Academy Logo",class:"logo-image"},null,-1)])),_:1,__:[0]}),$("nav",{class:Jt(["main-nav",{"is-active":e.value}])},[oe(fe(Re),{to:"/",onClick:c},{default:Ae(()=>C[1]||(C[1]=[Pe("Home",-1)])),_:1,__:[1]}),oe(fe(Re),{to:"/courses",onClick:c},{default:Ae(()=>C[2]||(C[2]=[Pe("Courses",-1)])),_:1,__:[2]}),oe(fe(Re),{to:"/blog",onClick:c},{default:Ae(()=>C[3]||(C[3]=[Pe("Blog",-1)])),_:1,__:[3]}),oe(fe(Re),{to:"/why-nexus",onClick:c},{default:Ae(()=>C[4]||(C[4]=[Pe("Why Nexus",-1)])),_:1,__:[4]}),oe(fe(Re),{to:"/about",onClick:c},{default:Ae(()=>C[5]||(C[5]=[Pe("About",-1)])),_:1,__:[5]}),oe(fe(Re),{to:"/contact",onClick:c},{default:Ae(()=>C[6]||(C[6]=[Pe("Contact",-1)])),_:1,__:[6]}),r.value?zo("",!0):(We(),Ai(fe(Re),{key:0,to:"/login",onClick:c,class:"btn btn-secondary mobile-signin-btn"},{default:Ae(()=>C[7]||(C[7]=[Pe("Sign In",-1)])),_:1,__:[7]}))],2),$("div",aC,[r.value?(We(),rt("div",{key:1,class:"user-profile-dropdown",onClick:fa(h,["stop"])},[$("div",cC,[$("span",null,Mt(_.value),1)]),s.value?(We(),rt("div",lC,[$("div",uC,[$("p",hC,Mt(m.value),1),$("p",fC,Mt(r.value.email),1)]),C[11]||(C[11]=$("hr",{class:"dropdown-divider"},null,-1)),oe(fe(Re),{to:"/dashboard",class:"dropdown-item"},{default:Ae(()=>C[9]||(C[9]=[Pe("My Dashboard",-1)])),_:1,__:[9]}),fe(_r)?.role==="admin"?(We(),Ai(fe(Re),{key:0,to:"/admin",class:"dropdown-item"},{default:Ae(()=>C[10]||(C[10]=[Pe(" Admin Panel ",-1)])),_:1,__:[10]})):zo("",!0),C[12]||(C[12]=$("hr",{class:"dropdown-divider"},null,-1)),$("a",{href:"#",onClick:fa(p,["prevent"]),class:"dropdown-item logout-item"},"Logout")])):zo("",!0)])):(We(),Ai(fe(Re),{key:0,to:"/login",class:"btn btn-secondary"},{default:Ae(()=>C[8]||(C[8]=[Pe("Sign In",-1)])),_:1,__:[8]}))]),$("button",{class:Jt(["hamburger",{"is-active":e.value}]),onClick:o,"aria-label":"Toggle Menu"},C[13]||(C[13]=[$("span",null,null,-1),$("span",null,null,-1),$("span",null,null,-1)]),2)])],2))}},pC=rs(dC,[["__scopeId","data-v-e91f7220"]]),mC={class:"main-footer"},gC={class:"container footer-container"},_C={class:"footer-section footer-about"},yC={class:"footer-section footer-links"},vC={class:"footer-bottom-bar"},EC={class:"container bottom-bar-container"},TC={class:"copyright"},IC={class:"legal-links"},wC={__name:"TheFooter",setup(t){return(e,n)=>(We(),rt("footer",mC,[$("div",gC,[$("div",_C,[oe(fe(Re),{to:"/",class:"footer-logo-link"},{default:Ae(()=>n[0]||(n[0]=[$("img",{src:lh,alt:"Nexus Academy Logo",class:"footer-logo"},null,-1)])),_:1,__:[0]}),n[1]||(n[1]=$("p",{class:"footer-slogan"},"Where Human Ingenuity Meets Artificial Intelligence.",-1))]),$("div",yC,[n[7]||(n[7]=$("h3",{class:"footer-heading"},"Navigate",-1)),$("ul",null,[$("li",null,[oe(fe(Re),{to:"/courses"},{default:Ae(()=>n[2]||(n[2]=[Pe("Courses",-1)])),_:1,__:[2]})]),$("li",null,[oe(fe(Re),{to:"/blog"},{default:Ae(()=>n[3]||(n[3]=[Pe("Blog",-1)])),_:1,__:[3]})]),$("li",null,[oe(fe(Re),{to:"/why-nexus"},{default:Ae(()=>n[4]||(n[4]=[Pe("Why Nexus",-1)])),_:1,__:[4]})]),$("li",null,[oe(fe(Re),{to:"/about"},{default:Ae(()=>n[5]||(n[5]=[Pe("About Us",-1)])),_:1,__:[5]})]),$("li",null,[oe(fe(Re),{to:"/contact"},{default:Ae(()=>n[6]||(n[6]=[Pe("Contact",-1)])),_:1,__:[6]})])])]),n[8]||(n[8]=VE('<div class="footer-section footer-social" data-v-42047adc><h3 class="footer-heading" data-v-42047adc>Connect</h3><div class="social-icons" data-v-42047adc><a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" data-v-42047adc><svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" data-v-42047adc><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-v-42047adc></path></svg></a><a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer" data-v-42047adc><svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" data-v-42047adc><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.063c0 2.228 1.583 4.088 3.681 4.509-.64.175-1.306.216-1.967.184.571 1.834 2.228 3.166 4.191 3.204-1.758 1.381-3.978 2.2-6.39 2.2-1.071 0-2.127-.066-3.174-.184 2.278 1.474 4.986 2.34 7.9 2.34 9.471 0 14.655-7.854 14.655-14.655v-.657c1.008-.722 1.876-1.616 2.572-2.675z" data-v-42047adc></path></svg></a></div></div>',1))]),$("div",vC,[$("div",EC,[$("p",TC,"© "+Mt(new Date().getFullYear())+" Nexus Academy. All Rights Reserved.",1),$("div",IC,[oe(fe(Re),{to:"/terms-of-service"},{default:Ae(()=>n[9]||(n[9]=[Pe("Terms of Service",-1)])),_:1,__:[9]}),oe(fe(Re),{to:"/privacy-policy"},{default:Ae(()=>n[10]||(n[10]=[Pe("Privacy Policy",-1)])),_:1,__:[10]})])])])]))}},AC=rs(wC,[["__scopeId","data-v-42047adc"]]),RC={class:"app-wrapper"},bC={class:"main-content"},SC={__name:"PublicLayout",setup(t){return(e,n)=>(We(),rt("div",RC,[oe(pC),$("main",bC,[oe(fe(Us))]),oe(AC)]))}},PC=rs(SC,[["__scopeId","data-v-ffa819e8"]]),CC={class:"auth-layout-wrapper"},kC={__name:"AuthLayout",setup(t){return(e,n)=>(We(),rt("div",CC,[oe(fe(Us))]))}},VC=rs(kC,[["__scopeId","data-v-deb1ee51"]]),DC={class:"dashboard-wrapper"},NC={class:"dashboard-layout container"},OC={class:"user-profile-widget"},xC={class:"user-avatar"},MC=["src"],LC={key:1},UC={class:"dashboard-nav"},FC={class:"sidebar-footer"},BC={class:"dashboard-main-content"},$C={__name:"DashboardView",setup(t){const e=kt(!1),n=kt(st.currentUser),r=uu(),s=ht(()=>n.value?(n.value.displayName||n.value.email||"Nexus Student").split(" ").map(c=>c[0]).join("").substring(0,2).toUpperCase():"NS"),i=()=>{e.value=!e.value},o=async()=>{try{await uh(),r.push("/login")}catch(c){console.error("Logout failed:",c)}};return Xi(()=>{yR(st,c=>{n.value=c,c||r.push("/login")})}),(c,l)=>(We(),rt("div",DC,[$("button",{class:Jt(["dashboard-hamburger",{"is-active":e.value}]),onClick:i,"aria-label":"Toggle Dashboard Menu"},l[0]||(l[0]=[$("span",null,null,-1),$("span",null,null,-1),$("span",null,null,-1)]),2),$("div",NC,[$("aside",{class:Jt(["dashboard-sidebar",{"is-active":e.value}])},[$("div",OC,[$("div",xC,[n.value?.photoURL?(We(),rt("img",{key:0,src:n.value.photoURL,alt:"User Avatar"},null,8,MC)):(We(),rt("span",LC,Mt(s.value),1))]),$("h3",null,Mt(n.value?.displayName||"Nexus Student"),1),$("p",null,Mt(n.value?.email),1)]),$("nav",UC,[oe(fe(Re),{to:"/dashboard",class:"dashboard-nav-link","active-class":"active"},{default:Ae(()=>l[1]||(l[1]=[Pe("My Learning",-1)])),_:1,__:[1]}),oe(fe(Re),{to:"/courses",class:"dashboard-nav-link","active-class":"active"},{default:Ae(()=>l[2]||(l[2]=[Pe("All Courses",-1)])),_:1,__:[2]}),oe(fe(Re),{to:"/profile",class:"dashboard-nav-link","active-class":"active"},{default:Ae(()=>l[3]||(l[3]=[Pe("My Profile",-1)])),_:1,__:[3]}),oe(fe(Re),{to:"/settings",class:"dashboard-nav-link","active-class":"active"},{default:Ae(()=>l[4]||(l[4]=[Pe("Settings",-1)])),_:1,__:[4]})]),$("div",FC,[l[6]||(l[6]=$("hr",{class:"nav-divider"},null,-1)),oe(fe(Re),{to:"/",class:"dashboard-nav-link return-link"},{default:Ae(()=>l[5]||(l[5]=[Pe("Return to Main Site",-1)])),_:1,__:[5]}),$("a",{href:"#",onClick:fa(o,["prevent"]),class:"dashboard-nav-link logout-link"},"Logout")])],2),$("main",BC,[oe(fe(Us))])])]))}},jC=rs($C,[["__scopeId","data-v-95748acb"]]),qC={class:"admin-layout"},HC={class:"sidebar-inner"},WC={class:"sidebar-header"},zC={class:"admin-nav"},KC={class:"sidebar-footer"},GC={class:"admin-user-profile"},QC={class:"admin-avatar"},YC={class:"admin-username"},JC={class:"admin-content-wrapper"},XC={class:"admin-mobile-header"},ZC={class:"admin-main-content"},e1={__name:"AdminView",setup(t){const e=kt(!1),n=kt(st.currentUser),r=uu(),s=()=>{e.value=!e.value},i=()=>{e.value=!1},o=f=>{f.key==="Escape"&&e.value&&i()},c=async()=>{try{await uh(),r.push("/login")}catch(f){console.error("Logout failed:",f),alert("Failed to log out. Please try again.")}},l=ht(()=>n.value?.displayName||n.value?.email||"Admin"),h=ht(()=>l.value.split(" ").map(p=>p[0]).join("").substring(0,2).toUpperCase());return Xi(()=>{st.onAuthStateChanged(f=>{n.value=f}),window.addEventListener("keydown",o)}),ja(()=>{window.removeEventListener("keydown",o)}),(f,p)=>(We(),rt("div",qC,[$("div",{id:"sidebar-overlay",class:Jt(["sidebar-overlay",{"is-active":e.value}]),onClick:i},null,2),$("aside",{class:Jt(["admin-sidebar",{"is-active":e.value}])},[$("div",HC,[$("header",WC,[oe(fe(Re),{to:"/",class:"logo-link"},{default:Ae(()=>p[0]||(p[0]=[$("img",{src:lh,alt:"Nexus Academy Logo",class:"logo-image"},null,-1)])),_:1,__:[0]}),p[1]||(p[1]=$("h2",{class:"admin-title"},"Admin Panel",-1))]),$("nav",zC,[oe(fe(Re),{to:"/admin",class:"admin-nav-link"},{default:Ae(()=>p[2]||(p[2]=[Pe("Dashboard",-1)])),_:1,__:[2]}),oe(fe(Re),{to:"/admin/courses",class:"admin-nav-link"},{default:Ae(()=>p[3]||(p[3]=[Pe("Courses",-1)])),_:1,__:[3]}),oe(fe(Re),{to:"/admin/blog",class:"admin-nav-link"},{default:Ae(()=>p[4]||(p[4]=[Pe("Blog Posts",-1)])),_:1,__:[4]}),oe(fe(Re),{to:"/admin/enrollments",class:"admin-nav-link"},{default:Ae(()=>p[5]||(p[5]=[Pe("Enrollments",-1)])),_:1,__:[5]}),oe(fe(Re),{to:"/admin/users",class:"admin-nav-link"},{default:Ae(()=>p[6]||(p[6]=[Pe("Users",-1)])),_:1,__:[6]})]),$("div",KC,[$("div",GC,[$("div",QC,Mt(h.value),1),$("span",YC,Mt(l.value),1)]),p[8]||(p[8]=$("hr",{class:"nav-divider"},null,-1)),$("a",{href:"#",onClick:fa(c,["prevent"]),class:"admin-nav-link logout-link"},"Logout"),oe(fe(Re),{to:"/",class:"admin-nav-link return-link"},{default:Ae(()=>p[7]||(p[7]=[Pe("Return to Site",-1)])),_:1,__:[7]})])])],2),$("div",JC,[$("header",XC,[$("button",{class:Jt(["hamburger",{"is-active":e.value}]),onClick:s,"aria-label":"Toggle Menu"},p[9]||(p[9]=[$("span",null,null,-1),$("span",null,null,-1),$("span",null,null,-1)]),2)]),$("main",ZC,[oe(fe(Us))])])]))}},t1=rs(e1,[["__scopeId","data-v-0beca51d"]]),n1={class:"course-player-wrapper"},r1={class:"course-player-layout"},s1={class:"lesson-sidebar",id:"lesson-sidebar"},i1={class:"sidebar-header"},o1={id:"sidebar-course-title"},a1={id:"lesson-list-container"},c1={class:"module-title"},l1={class:"lesson-list"},u1=["data-lesson-id"],h1={href:"#"},f1={id:"lesson-main-content",class:"lesson-main-content"},d1={key:0,class:"page-loader-container"},p1={key:1,class:"error-message"},m1={class:"video-container"},g1=["src","title"],_1=["innerHTML"],y1={__name:"CoursePlayerView",setup(t){const e=wI(),n=kt(e.params.id),r=kt(null),s=kt(null),i=kt(!0),o=kt(null),c=ht(()=>!r.value||!s.value?null:r.value.modules.flatMap(h=>h.lessons).find(h=>h.id===s.value));function l(){const h=document.getElementById("lesson-list-container"),f=document.getElementById("sidebar-toggle-btn"),p=document.getElementById("lesson-sidebar");h&&h.addEventListener("click",m=>{const _=m.target.closest(".lesson-list-item");_&&_.dataset.lessonId&&(m.preventDefault(),s.value=_.dataset.lessonId,p?.classList.contains("is-active")&&(p.classList.remove("is-active"),f?.classList.remove("is-active")))}),f&&p&&f.addEventListener("click",()=>{f.classList.toggle("is-active"),p.classList.toggle("is-active")})}return Xi(async()=>{try{i.value=!0;const h=await sC(n.value);if(h)r.value=h,h.modules?.[0]?.lessons?.[0]&&(s.value=h.modules[0].lessons[0].id);else throw new Error("Course not found in database.")}catch(h){console.error("Failed to load course player data:",h),o.value=h}finally{i.value=!1,await Ba(),l()}}),(h,f)=>(We(),rt("div",n1,[f[4]||(f[4]=$("button",{class:"sidebar-toggle-btn",id:"sidebar-toggle-btn","aria-label":"Toggle Lesson List"},[$("div",{class:"hamburger"},[$("span"),$("span"),$("span")])],-1)),$("div",r1,[$("aside",s1,[$("header",i1,[$("h2",o1,Mt(r.value?.title||"Loading..."),1),oe(fe(Re),{to:"/dashboard"},{default:Ae(()=>f[0]||(f[0]=[Pe("← Back to Dashboard",-1)])),_:1,__:[0]})]),$("div",a1,[(We(!0),rt(Qt,null,lf(r.value?.modules,p=>(We(),rt("div",{key:p.title},[$("h3",c1,Mt(p.title),1),$("ul",l1,[(We(!0),rt(Qt,null,lf(p.lessons,m=>(We(),rt("li",{key:m.id,class:Jt(["lesson-list-item",{active:m.id===s.value}]),"data-lesson-id":m.id},[$("a",h1,[f[1]||(f[1]=$("span",{class:"lesson-icon"},"●",-1)),Pe(" "+Mt(m.title),1)])],10,u1))),128))])]))),128))])]),$("main",f1,[i.value?(We(),rt("div",d1,f[2]||(f[2]=[$("div",{class:"spinner"},null,-1)]))):o.value?(We(),rt("div",p1,f[3]||(f[3]=[$("h1",null,"Course Not Found",-1),$("p",null,"We couldn't find the course you were looking for.",-1)]))):c.value?(We(),rt(Qt,{key:2},[$("h3",null,Mt(c.value.title),1),$("div",m1,[$("iframe",{src:c.value.videoURL,title:c.value.title,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,g1)]),$("div",{class:"lesson-content-text",innerHTML:c.value.textContentHTML},null,8,_1)],64)):zo("",!0)])])]))}},v1=rs(y1,[["__scopeId","data-v-eaa3b00e"]]),E1=[{path:"/",component:PC,children:[{path:"",name:"home",component:()=>$e(()=>import("./HomeView-CQM-BNTe.js"),__vite__mapDeps([0,1]))},{path:"courses",name:"courses",component:()=>$e(()=>import("./CoursesView-hhc9rXup.js"),__vite__mapDeps([2,3]))},{path:"course/:id",name:"course-detail",component:()=>$e(()=>import("./CourseDetailView-QM_0xn0Q.js"),__vite__mapDeps([4,5]))},{path:"blog",name:"blog",component:()=>$e(()=>import("./BlogView-DVBcS45R.js"),__vite__mapDeps([6,7]))},{path:"blog/:id",name:"single-post",component:()=>$e(()=>import("./SinglePostView-DYaetFlN.js"),__vite__mapDeps([8,9]))},{path:"why-nexus",name:"why-nexus",component:()=>$e(()=>import("./WhyNexusView-D1NRpHvy.js"),__vite__mapDeps([10,11]))},{path:"about",name:"about",component:()=>$e(()=>import("./AboutView-2ryUUzDV.js"),__vite__mapDeps([12,13]))},{path:"contact",name:"contact",component:()=>$e(()=>import("./ContactView-DB_r1qh5.js"),__vite__mapDeps([14,15]))},{path:"terms-of-service",name:"terms",component:()=>$e(()=>import("./TermsView-c1078_wW.js"),__vite__mapDeps([16,17]))},{path:"privacy-policy",name:"privacy",component:()=>$e(()=>import("./PrivacyView-3rkF--2D.js"),__vite__mapDeps([18,19]))}]},{path:"/auth",component:VC,children:[{path:"/login",name:"login",component:()=>$e(()=>import("./LoginView-ZOJeFoEK.js"),__vite__mapDeps([20,21]))},{path:"/signup",name:"signup",component:()=>$e(()=>import("./SignupView-D0gchMOB.js"),__vite__mapDeps([22,23]))}]},{path:"/learn/:id",name:"course-player",component:v1,meta:{requiresAuth:!0}},{path:"/dashboard",component:jC,meta:{requiresAuth:!0},children:[{path:"",name:"dashboard",component:()=>$e(()=>import("./MyLearning-DOgTdRdE.js"),__vite__mapDeps([24,25]))},{path:"profile",name:"profile",component:()=>$e(()=>import("./ProfilePage-cOygKeF-.js"),__vite__mapDeps([26,27]))},{path:"settings",name:"settings",component:()=>$e(()=>import("./SettingsPage-DCzvS_LU.js"),__vite__mapDeps([28,29]))}]},{path:"/admin",component:t1,meta:{requiresAuth:!0,requiresAdmin:!0},children:[{path:"",name:"admin-dashboard",component:()=>$e(()=>import("./AdminDashboard-BUF8dA6-.js"),__vite__mapDeps([30,31]))},{path:"courses",name:"admin-courses",component:()=>$e(()=>import("./AdminCourses-lf5V2khY.js"),__vite__mapDeps([32,33]))},{path:"courses/new",name:"admin-course-new",component:()=>$e(()=>import("./CourseEditorView-l9HTRa5K.js"),__vite__mapDeps([34,35]))},{path:"courses/edit/:id",name:"admin-course-edit",component:()=>$e(()=>import("./CourseEditorView-l9HTRa5K.js"),__vite__mapDeps([34,35]))},{path:"blog",name:"admin-blog",component:()=>$e(()=>import("./AdminBlog-eaFJwf_m.js"),__vite__mapDeps([36,37]))},{path:"blog/new",name:"admin-blog-new",component:()=>$e(()=>import("./BlogPostEditorView-V-780Svx.js"),__vite__mapDeps([38,39]))},{path:"blog/edit/:id",name:"admin-blog-edit",component:()=>$e(()=>import("./BlogPostEditorView-V-780Svx.js"),__vite__mapDeps([38,39]))},{path:"enrollments",name:"admin-enrollments",component:()=>$e(()=>import("./AdminEnrollments-D4jtw9a5.js"),__vite__mapDeps([40,41]))},{path:"users",name:"admin-users",component:()=>$e(()=>import("./AdminUsers-CxQbi6t2.js"),__vite__mapDeps([42,43]))}]}],Ay=TI({history:XT("/nexus-academy-prod/"),scrollBehavior:()=>({top:0}),routes:E1});Ay.beforeEach(async(t,e,n)=>{const r=t.matched.some(c=>c.meta.requiresAuth),s=t.matched.some(c=>c.meta.requiresAdmin);await iC();const i=st.currentUser,o=_r.value?.role;r&&!i?n({name:"login"}):s&&o!=="admin"?(console.warn(`Access denied: User ${i?.email} does not have admin role.`),n({name:"dashboard"})):n()});const Ry=yT(AI);Ry.use(Ay);Ry.mount("#app");export{I1 as $,$1 as A,wI as B,sC as C,x1 as D,Nf as E,Qt as F,M1 as G,VE as H,w1 as I,W1 as J,H1 as K,R1 as L,q1 as M,Gl as N,B1 as O,Ua as P,Ey as Q,Re as R,z1 as S,b1 as T,K1 as U,S1 as V,Q1 as W,G1 as X,j1 as Y,O1 as Z,rs as _,$ as a,uT as a0,N1 as a1,Ms as a2,L1 as a3,U1 as a4,F1 as a5,P1 as a6,C1 as a7,oe as b,rt as c,Ae as d,zo as e,lf as f,V1 as g,k1 as h,We as i,Pe as j,Ai as k,ht as l,D1 as m,Ba as n,Xi as o,lh as p,Jt as q,kt as r,fa as s,Mt as t,fe as u,T1 as v,qo as w,fT as x,st as y,uu as z};
