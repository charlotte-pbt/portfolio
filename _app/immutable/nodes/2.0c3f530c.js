import{s as R,f as m,g as p,h as b,d,j as u,i as j,w as h,A,C as U,e as L,a as k,c as w,l as S,m as z,v as D,D as W,n as O,u as X,k as Y}from"../chunks/scheduler.2acfc640.js";import{S as J,i as K,b as Z,d as ee,m as te,a as se,t as le,e as ne}from"../chunks/index.5fc46426.js";import{e as M,p as T}from"../chunks/projects.1e926409.js";import{b as Q}from"../chunks/paths.58ccd9f4.js";function q(r,l,e){const s=r.slice();return s[2]=l[e],s[4]=e,s}function B(r,l,e){const s=r.slice();return s[2]=l[e],s[6]=e,s}function ae(r){let l,e,s=M(Array(2)),t=[];for(let a=0;a<s.length;a+=1)t[a]=F(B(r,s,a));return{c(){l=m("div");for(let a=0;a<t.length;a+=1)t[a].c();e=k(),this.h()},l(a){l=p(a,"DIV",{class:!0});var i=b(l);for(let n=0;n<t.length;n+=1)t[n].l(i);e=w(i),i.forEach(d),this.h()},h(){u(l,"class","row svelte-11w2si5")},m(a,i){j(a,l,i);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(l,null);h(l,e)},p(a,i){if(i&1){s=M(Array(2));let n;for(n=0;n<s.length;n+=1){const o=B(a,s,n);t[n]?t[n].p(o,i):(t[n]=F(o),t[n].c(),t[n].m(l,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},d(a){a&&d(l),U(t,a)}}}function F(r){let l,e,s,t,a=r[0][r[4]+r[6]].title+"",i,n,o,f=N(r[0][r[4]+r[6]].description,60)+"",C,$,_,x="Read More",E,y;function I(){return r[1](r[4],r[6])}return{c(){l=m("a"),e=m("button"),s=m("div"),t=m("h2"),i=S(a),n=k(),o=m("p"),C=S(f),$=k(),_=m("p"),_.textContent=x,this.h()},l(c){l=p(c,"A",{href:!0});var g=b(l);e=p(g,"BUTTON",{class:!0});var v=b(e);s=p(v,"DIV",{class:!0});var H=b(s);t=p(H,"H2",{class:!0});var V=b(t);i=z(V,a),V.forEach(d),n=w(H),o=p(H,"P",{class:!0});var P=b(o);C=z(P,f),P.forEach(d),H.forEach(d),$=w(v),_=p(v,"P",{class:!0,"data-svelte-h":!0}),D(_)!=="svelte-3faa0b"&&(_.textContent=x),v.forEach(d),g.forEach(d),this.h()},h(){u(t,"class","svelte-11w2si5"),u(o,"class","svelte-11w2si5"),u(s,"class","post-text svelte-11w2si5"),u(_,"class","readmore svelte-11w2si5"),u(e,"class","post svelte-11w2si5"),u(l,"href",Q+"/projects")},m(c,g){j(c,l,g),h(l,e),h(e,s),h(s,t),h(t,i),h(s,n),h(s,o),h(o,C),h(e,$),h(e,_),E||(y=W(e,"click",I),E=!0)},p(c,g){r=c,g&1&&a!==(a=r[0][r[4]+r[6]].title+"")&&O(i,a),g&1&&f!==(f=N(r[0][r[4]+r[6]].description,60)+"")&&O(C,f)},d(c){c&&d(l),E=!1,y()}}}function G(r){let l,e=r[4]%2===0&&ae(r);return{c(){e&&e.c(),l=L()},l(s){e&&e.l(s),l=L()},m(s,t){e&&e.m(s,t),j(s,l,t)},p(s,t){s[4]%2===0&&e.p(s,t)},d(s){s&&d(l),e&&e.d(s)}}}function re(r){let l,e,s=M(Array(r[0].length)),t=[];for(let a=0;a<s.length;a+=1)t[a]=G(q(r,s,a));return{c(){l=m("div"),e=m("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){l=p(a,"DIV",{class:!0});var i=b(l);e=p(i,"DIV",{class:!0});var n=b(e);for(let o=0;o<t.length;o+=1)t[o].l(n);n.forEach(d),i.forEach(d),this.h()},h(){u(e,"class","projects svelte-11w2si5"),u(l,"class","container svelte-11w2si5")},m(a,i){j(a,l,i),h(l,e);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(a,[i]){if(i&1){s=M(Array(a[0].length));let n;for(n=0;n<s.length;n+=1){const o=q(a,s,n);t[n]?t[n].p(o,i):(t[n]=G(o),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},i:A,o:A,d(a){a&&d(l),U(t,a)}}}function N(r,l){if(r.length>l){if(r[l]!=" "){let e=r.substring(0,l).lastIndexOf(" ");return r.substring(0,e)+"..."}return r.substring(0,l)+"..."}return r}function ie(r,l,e){return[T,(t,a)=>e(0,T[t+a].visible=!0,T)]}class oe extends J{constructor(l){super(),K(this,l,ie,re,R,{})}}function ce(r){let l,e,s,t='<h1 class="svelte-1y147lm"><p class="svelte-1y147lm">Computer engineering student,</p></h1> <h11 class="svelte-1y147lm"><p class="text-2 svelte-1y147lm">EPITA, IMAGE major, specialized in images synthesis</p></h11>',a,i,n="I am actively looking for a 6-month end-of-studies internship in the field of image synthesis, starting in February 2024.",o,f,C=`<a href="${Q}/about">Click Here</a><div class="arrow svelte-1y147lm">→</div>`,$,_,x='<h11 class="svelte-1y147lm">My Projects</h11>',E,y,I;return y=new oe({}),{c(){l=k(),e=m("div"),s=m("div"),s.innerHTML=t,a=k(),i=m("h2"),i.textContent=n,o=k(),f=m("div"),f.innerHTML=C,$=k(),_=m("div"),_.innerHTML=x,E=k(),Z(y.$$.fragment),this.h()},l(c){X("svelte-1451jfw",document.head).forEach(d),l=w(c),e=p(c,"DIV",{class:!0});var v=b(e);s=p(v,"DIV",{class:!0,"data-svelte-h":!0}),D(s)!=="svelte-1z0f49k"&&(s.innerHTML=t),a=w(v),i=p(v,"H2",{class:!0,"data-svelte-h":!0}),D(i)!=="svelte-1v2rlur"&&(i.textContent=n),o=w(v),f=p(v,"DIV",{role:!0,style:!0,class:!0,tabindex:!0,"data-svelte-h":!0}),D(f)!=="svelte-1ru7h9i"&&(f.innerHTML=C),$=w(v),_=p(v,"DIV",{class:!0,"data-svelte-h":!0}),D(_)!=="svelte-1xklapu"&&(_.innerHTML=x),E=w(v),ee(y.$$.fragment,v),v.forEach(d),this.h()},h(){document.title="Charlotte Philibert",u(s,"class","info-text svelte-1y147lm"),u(i,"class","subtitle svelte-1y147lm"),u(f,"role","link"),Y(f,"color","black"),u(f,"class","scroll-button animate-scroll svelte-1y147lm"),u(f,"tabindex","0"),u(_,"class","title-project svelte-1y147lm"),u(e,"class","container svelte-1y147lm")},m(c,g){j(c,l,g),j(c,e,g),h(e,s),h(e,a),h(e,i),h(e,o),h(e,f),h(e,$),h(e,_),h(e,E),te(y,e,null),I=!0},p:A,i(c){I||(se(y.$$.fragment,c),I=!0)},o(c){le(y.$$.fragment,c),I=!1},d(c){c&&(d(l),d(e)),ne(y)}}}class _e extends J{constructor(l){super(),K(this,l,null,ce,R,{})}}export{_e as component};
