import{s as H,a as g,f as d,D as q,d as r,c as b,g as h,h as u,j as i,N as D,k as E,i as f,y as C,z as m,o as M}from"../chunks/scheduler.45837ece.js";import{S,i as T}from"../chunks/index.9b41337c.js";const k=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;const{document:w}=k;function I(_){let a,l,s,c,n,t,p;return{c(){a=g(),l=d("head"),s=d("link"),c=g(),n=d("div"),t=d("iframe"),this.h()},l(e){q("svelte-d1gh56",w.head).forEach(r),a=b(e),l=h(e,"HEAD",{});var v=u(l);s=h(v,"LINK",{rel:!0,href:!0}),v.forEach(r),c=b(e),n=h(e,"DIV",{class:!0});var y=u(n);t=h(y,"IFRAME",{title:!0,src:!0,style:!0,frameborder:!0}),u(t).forEach(r),y.forEach(r),this.h()},h(){w.title="Resume",i(s,"rel","preload"),i(s,"href",x),i(t,"title","CV_Charlotte_Philibert"),D(t.src,p=x)||i(t,"src",p),E(t,"width","80%"),E(t,"height","100%"),i(t,"frameborder","0"),i(n,"class","all svelte-budpd4")},m(e,o){f(e,a,o),f(e,l,o),C(l,s),f(e,c,o),f(e,n,o),C(n,t)},p:m,i:m,o:m,d(e){e&&(r(a),r(l),r(c),r(n))}}}let x="https://files.tanguymaraux.com/api/public/dl/JdCfQ3hF?inline=true";function L(_){return M(()=>{let a=document.querySelector(".header"),l=0;if(a instanceof HTMLElement){l=a.offsetHeight;const s=document.querySelector(".all");s instanceof HTMLElement&&(s.style.height=`calc(100vh - ${l}px)`)}}),[]}class F extends S{constructor(a){super(),T(this,a,L,I,H,{})}}export{F as component};
