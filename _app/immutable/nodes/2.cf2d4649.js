import{s as R,f as p,g as m,h as k,d,j as u,i as j,y as h,z as V,B as U,e as P,a as y,c as z,l as L,m as S,u as D,C as W,n as B,D as X,k as Y}from"../chunks/scheduler.7dece5bf.js";import{S as J,i as K,b as Z,d as ee,m as te,a as se,t as le,e as ne}from"../chunks/index.746a4b0e.js";import{e as M,p as T}from"../chunks/projects.0762c3c2.js";import{b as Q}from"../chunks/paths.bea43acc.js";function O(a,l,e){const s=a.slice();return s[2]=l[e],s[4]=e,s}function q(a,l,e){const s=a.slice();return s[2]=l[e],s[6]=e,s}function re(a){let l,e,s=M(Array(2)),t=[];for(let r=0;r<s.length;r+=1)t[r]=F(q(a,s,r));return{c(){l=p("div");for(let r=0;r<t.length;r+=1)t[r].c();e=y(),this.h()},l(r){l=m(r,"DIV",{class:!0});var i=k(l);for(let n=0;n<t.length;n+=1)t[n].l(i);e=z(i),i.forEach(d),this.h()},h(){u(l,"class","row svelte-14ebt9k")},m(r,i){j(r,l,i);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(l,null);h(l,e)},p(r,i){if(i&1){s=M(Array(2));let n;for(n=0;n<s.length;n+=1){const o=q(r,s,n);t[n]?t[n].p(o,i):(t[n]=F(o),t[n].c(),t[n].m(l,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},d(r){r&&d(l),U(t,r)}}}function F(a){let l,e,s,t,r=a[0][a[4]+a[6]].title+"",i,n,o,f=N(a[0][a[4]+a[6]].description,60)+"",C,$,_,x="Read More",E,b;function I(){return a[1](a[4],a[6])}return{c(){l=p("a"),e=p("button"),s=p("div"),t=p("h2"),i=L(r),n=y(),o=p("p"),C=L(f),$=y(),_=p("p"),_.textContent=x,this.h()},l(c){l=m(c,"A",{href:!0});var g=k(l);e=m(g,"BUTTON",{class:!0});var v=k(e);s=m(v,"DIV",{class:!0});var H=k(s);t=m(H,"H2",{class:!0});var w=k(t);i=S(w,r),w.forEach(d),n=z(H),o=m(H,"P",{class:!0});var A=k(o);C=S(A,f),A.forEach(d),H.forEach(d),$=z(v),_=m(v,"P",{class:!0,"data-svelte-h":!0}),D(_)!=="svelte-3faa0b"&&(_.textContent=x),v.forEach(d),g.forEach(d),this.h()},h(){u(t,"class","svelte-14ebt9k"),u(o,"class","svelte-14ebt9k"),u(s,"class","post-text svelte-14ebt9k"),u(_,"class","readmore svelte-14ebt9k"),u(e,"class","post svelte-14ebt9k"),u(l,"href",Q+"/projects")},m(c,g){j(c,l,g),h(l,e),h(e,s),h(s,t),h(t,i),h(s,n),h(s,o),h(o,C),h(e,$),h(e,_),E||(b=W(e,"click",I),E=!0)},p(c,g){a=c,g&1&&r!==(r=a[0][a[4]+a[6]].title+"")&&B(i,r),g&1&&f!==(f=N(a[0][a[4]+a[6]].description,60)+"")&&B(C,f)},d(c){c&&d(l),E=!1,b()}}}function G(a){let l,e=a[4]%2===0&&re(a);return{c(){e&&e.c(),l=P()},l(s){e&&e.l(s),l=P()},m(s,t){e&&e.m(s,t),j(s,l,t)},p(s,t){s[4]%2===0&&e.p(s,t)},d(s){s&&d(l),e&&e.d(s)}}}function ae(a){let l,e,s=M(Array(a[0].length)),t=[];for(let r=0;r<s.length;r+=1)t[r]=G(O(a,s,r));return{c(){l=p("div"),e=p("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){l=m(r,"DIV",{class:!0});var i=k(l);e=m(i,"DIV",{class:!0});var n=k(e);for(let o=0;o<t.length;o+=1)t[o].l(n);n.forEach(d),i.forEach(d),this.h()},h(){u(e,"class","projects svelte-14ebt9k"),u(l,"class","container svelte-14ebt9k")},m(r,i){j(r,l,i),h(l,e);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(r,[i]){if(i&1){s=M(Array(r[0].length));let n;for(n=0;n<s.length;n+=1){const o=O(r,s,n);t[n]?t[n].p(o,i):(t[n]=G(o),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},i:V,o:V,d(r){r&&d(l),U(t,r)}}}function N(a,l){if(a.length>l){if(a[l]!=" "){let e=a.substring(0,l).lastIndexOf(" ");return a.substring(0,e)+"..."}return a.substring(0,l)+"..."}return a}function ie(a,l,e){return[T,(t,r)=>e(0,T[t+r].visible=!0,T)]}class oe extends J{constructor(l){super(),K(this,l,ie,ae,R,{})}}function ce(a){let l,e,s,t='<h1 class="svelte-1r0zo7n"><p class="svelte-1r0zo7n">Computer engineering student,</p></h1> <h11 class="svelte-1r0zo7n"><p class="text-2 svelte-1r0zo7n">EPITA, IMAGE major, specialized in images synthesis</p></h11>',r,i,n="I am actively looking for a 6-month end-of-studies internship in the field of image synthesis, starting in February 2024.",o,f,C=`<a href="${Q}/about">Click Here</a><div class="arrow svelte-1r0zo7n">→</div>`,$,_,x='<h11 class="svelte-1r0zo7n">My Projects</h11>',E,b,I;return b=new oe({}),{c(){l=y(),e=p("div"),s=p("div"),s.innerHTML=t,r=y(),i=p("h2"),i.textContent=n,o=y(),f=p("div"),f.innerHTML=C,$=y(),_=p("div"),_.innerHTML=x,E=y(),Z(b.$$.fragment),this.h()},l(c){X("svelte-1451jfw",document.head).forEach(d),l=z(c),e=m(c,"DIV",{class:!0});var v=k(e);s=m(v,"DIV",{class:!0,"data-svelte-h":!0}),D(s)!=="svelte-1z0f49k"&&(s.innerHTML=t),r=z(v),i=m(v,"H2",{class:!0,"data-svelte-h":!0}),D(i)!=="svelte-1v2rlur"&&(i.textContent=n),o=z(v),f=m(v,"DIV",{role:!0,style:!0,class:!0,tabindex:!0,"data-svelte-h":!0}),D(f)!=="svelte-1ru7h9i"&&(f.innerHTML=C),$=z(v),_=m(v,"DIV",{class:!0,"data-svelte-h":!0}),D(_)!=="svelte-1xklapu"&&(_.innerHTML=x),E=z(v),ee(b.$$.fragment,v),v.forEach(d),this.h()},h(){document.title="Charlotte Philibert",u(s,"class","info-text svelte-1r0zo7n"),u(i,"class","subtitle svelte-1r0zo7n"),u(f,"role","link"),Y(f,"color","black"),u(f,"class","scroll-button animate-scroll svelte-1r0zo7n"),u(f,"tabindex","0"),u(_,"class","title-project svelte-1r0zo7n"),u(e,"class","container svelte-1r0zo7n")},m(c,g){j(c,l,g),j(c,e,g),h(e,s),h(e,r),h(e,i),h(e,o),h(e,f),h(e,$),h(e,_),h(e,E),te(b,e,null),I=!0},p:V,i(c){I||(se(b.$$.fragment,c),I=!0)},o(c){le(b.$$.fragment,c),I=!1},d(c){c&&(d(l),d(e)),ne(b)}}}class _e extends J{constructor(l){super(),K(this,l,null,ce,R,{})}}export{_e as component};
