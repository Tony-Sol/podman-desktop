import{n as x,O as X,P as Y,l as k,v as E,Q as Z,o as D,p as G,q as a,i as I,r as L,e as T,g as J,a as h,b as K,t as M,j as v,s as F,k as Q,f as S,x as H}from"./props-c-7Hur7Y.js";import{b as P,t as u}from"./class-D559RtSm.js";import{h as W}from"./index-D45Brjt-.js";import{o as $}from"./index-client-ZG015d5Z.js";import{s as tt,a as A,F as B}from"./fa-layers-text.svelte_svelte_type_style_lang-CE4CYkaK.js";function et(s,t,o){if(s==null)return t(void 0),x;const e=s.subscribe(t,o);return e.unsubscribe?()=>e.unsubscribe():e}function st(s,t,o){const e=o[t]??(o[t]={store:null,source:Y(void 0),unsubscribe:x});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=x;else{var n=!0;e.unsubscribe=et(s,l=>{n?e.source.v=l:E(e.source,l)}),n=!1}return k(e.source)}function ot(){const s={};return X(()=>{for(var t in s)s[t].unsubscribe()}),s}const _=[];function rt(s,t=x){let o=null;const e=new Set;function n(i){if(Z(s,i)&&(s=i,o)){const b=!_.length;for(const r of e)r[1](),_.push(r,s);if(b){for(let r=0;r<_.length;r+=2)_[r][0](_[r+1]);_.length=0}}}function l(i){n(i(s))}function f(i,b=x){const r=[i,b];return e.add(r),e.size===1&&(o=t(n,l)||x),i(s),()=>{e.delete(r),e.size===0&&o&&(o(),o=null)}}return{set:n,update:l,subscribe:f}}const j=it();function it(){const s=rt(!1);return window.addEventListener("tooltip-show",()=>{j.set(!1)}),window.addEventListener("tooltip-hide",()=>{j.set(!0)}),s}var at=M('<div aria-label="tooltip"> </div>'),nt=M('<div class="inline-block rounded-md bg-[var(--pd-tooltip-bg)] text-[var(--pd-tooltip-text)] border-[1px] border-[var(--pd-tooltip-border)]" aria-label="tooltip"><!></div>'),lt=M('<div class="relative inline-block"><span><!></span> <div class="whitespace-nowrap absolute tooltip opacity-0 inline-block transition-opacity duration-150 ease-in-out pointer-events-none text-sm z-[10] svelte-1ln5cwi"><!> <!></div></div>');function N(s,t){const o=tt(t),e=D(t,["children","$$slots","$$events","$$legacy"]);G(t,!1);const n=ot(),l=()=>st(j,"$tooltipHidden",n);let f=a(t,"tip",8,void 0),i=a(t,"top",8,!1),b=a(t,"topLeft",8,!1),r=a(t,"topRight",8,!1),q=a(t,"right",8,!1),w=a(t,"bottom",8,!1),d=a(t,"bottomLeft",8,!1),p=a(t,"bottomRight",8,!1),y=a(t,"left",8,!1);I();var g=lt(),z=v(g),U=v(z);A(U,t,"default",{});var c=F(z,2),O=v(c);L(O,()=>f()&&!l(),R=>{var m=at(),C=v(m);T(()=>{P(m,`inline-block py-2 px-4 rounded-md bg-[var(--pd-tooltip-bg)] text-[var(--pd-tooltip-text)] border-[1px] border-[var(--pd-tooltip-border)] ${e.class??""} svelte-1ln5cwi`),J(C,f())}),h(R,m)});var V=F(O,2);L(V,()=>o.tip&&!f()&&!l(),R=>{var m=nt(),C=v(m);A(C,t,"tip",{}),h(R,m)}),T(()=>{P(z,`group tooltip-slot ${e.class??""} svelte-1ln5cwi`),u(c,"left",y()),u(c,"right",q()),u(c,"bottom",w()),u(c,"top",i()),u(c,"top-left",b()),u(c,"top-right",r()),u(c,"bottom-left",d()),u(c,"bottom-right",p())}),h(s,g),K()}N.__docgen={keywords:[],data:[],name:"Tooltip.svelte"};var dt=M('<div><!> <div role="alert" aria-label="Error Message Content" class="ml-2"> </div></div>');function ct(s,t){const o=D(t,["children","$$slots","$$events","$$legacy"]);G(t,!1);let e=a(t,"error",8),n=a(t,"icon",8,!1),l=a(t,"wrapMessage",8,!1),f=H(""),i=H(!1),b=H(!1);$(()=>{l()?(E(f,"w-max max-w-[650px] overflow-hidden text-ellipsis text-wrap"),E(i,!0)):E(b,!0)}),I();var r=Q(),q=S(r);L(q,n,w=>{var d=Q(),p=S(d);L(p,()=>e()!==void 0&&e()!=="",y=>{N(y,{get left(){return k(i)},get top(){return k(b)},get tip(){return e()},get class(){return k(f)},children:(g,z)=>{B(g,{size:"1.1x",get class(){return`cursor-pointer text-[var(--pd-state-error)] ${o.class??""}`},icon:W})},$$slots:{default:!0}})}),h(w,d)},w=>{var d=dt(),p=v(d);B(p,{size:"1.1x",class:"cursor-pointer text-[var(--pd-state-error)]",icon:W});var y=F(p,2),g=v(y);T(()=>{P(d,`text-[var(--pd-state-error)] p-1 flex flex-row items-center ${o.class??""}`),u(d,"opacity-0",e()===void 0||e()===""),J(g,e())}),h(w,d)}),h(s,r),K()}ct.__docgen={keywords:[],data:[],name:"ErrorMessage.svelte"};export{ct as E,N as T};
