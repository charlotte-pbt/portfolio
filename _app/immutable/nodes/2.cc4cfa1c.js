import{s as R,f as m,g as p,h as b,d as f,j as _,i as I,y as h,z as P,B as U,e as T,a as k,c as w,l as z,m as S,u as H,C as W,n as B,D as X,k as Y}from"../chunks/scheduler.7dece5bf.js";import{S as J,i as K,b as Z,d as ee,m as te,a as le,t as se,e as ne}from"../chunks/index.746a4b0e.js";import{e as V,p as A}from"../chunks/projects.4c450cb2.js";import{b as Q}from"../chunks/paths.be23c01b.js";function O(i,s,e){const t=i.slice();return t[2]=s[e],t[4]=e,t}function q(i,s,e){const t=i.slice();return t[2]=s[e],t[6]=e,t}function ae(i){let s,e,t=V(Array(2)),l=[];for(let a=0;a<t.length;a+=1)l[a]=F(q(i,t,a));return{c(){s=m("div");for(let a=0;a<l.length;a+=1)l[a].c();e=k(),this.h()},l(a){s=p(a,"DIV",{class:!0});var r=b(s);for(let n=0;n<l.length;n+=1)l[n].l(r);e=w(r),r.forEach(f),this.h()},h(){_(s,"class","row svelte-11w2si5")},m(a,r){I(a,s,r);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(s,null);h(s,e)},p(a,r){if(r&1){t=V(Array(2));let n;for(n=0;n<t.length;n+=1){const o=q(a,t,n);l[n]?l[n].p(o,r):(l[n]=F(o),l[n].c(),l[n].m(s,e))}for(;n<l.length;n+=1)l[n].d(1);l.length=t.length}},d(a){a&&f(s),U(l,a)}}}function ie(i){let s,e,t,l,a=i[0][i[4]+i[6]].title+"",r,n,o,u=N(i[0][i[4]+i[6]].description,60)+"",C,$,d,D="Read More",E,y;function j(){return i[1](i[4],i[6])}return{c(){s=m("a"),e=m("button"),t=m("div"),l=m("h2"),r=z(a),n=k(),o=m("p"),C=z(u),$=k(),d=m("p"),d.textContent=D,this.h()},l(c){s=p(c,"A",{href:!0});var g=b(s);e=p(g,"BUTTON",{class:!0});var v=b(e);t=p(v,"DIV",{class:!0});var M=b(t);l=p(M,"H2",{class:!0});var L=b(l);r=S(L,a),L.forEach(f),n=w(M),o=p(M,"P",{class:!0});var x=b(o);C=S(x,u),x.forEach(f),M.forEach(f),$=w(v),d=p(v,"P",{class:!0,"data-svelte-h":!0}),H(d)!=="svelte-ukhokl"&&(d.textContent=D),v.forEach(f),g.forEach(f),this.h()},h(){_(l,"class","svelte-11w2si5"),_(o,"class","svelte-11w2si5"),_(t,"class","post-text svelte-11w2si5"),_(d,"class","readmore svelte-11w2si5"),_(e,"class","post svelte-11w2si5"),_(s,"href",Q+"/projects")},m(c,g){I(c,s,g),h(s,e),h(e,t),h(t,l),h(l,r),h(t,n),h(t,o),h(o,C),h(e,$),h(e,d),E||(y=W(e,"click",j),E=!0)},p(c,g){i=c,g&1&&a!==(a=i[0][i[4]+i[6]].title+"")&&B(r,a),g&1&&u!==(u=N(i[0][i[4]+i[6]].description,60)+"")&&B(C,u)},d(c){c&&f(s),E=!1,y()}}}function F(i){let s,e=i[0][i[4]+i[6]]&&ie(i);return{c(){e&&e.c(),s=T()},l(t){e&&e.l(t),s=T()},m(t,l){e&&e.m(t,l),I(t,s,l)},p(t,l){t[0][t[4]+t[6]]&&e.p(t,l)},d(t){t&&f(s),e&&e.d(t)}}}function G(i){let s,e=i[4]%2===0&&ae(i);return{c(){e&&e.c(),s=T()},l(t){e&&e.l(t),s=T()},m(t,l){e&&e.m(t,l),I(t,s,l)},p(t,l){t[4]%2===0&&e.p(t,l)},d(t){t&&f(s),e&&e.d(t)}}}function re(i){let s,e,t=V(Array(i[0].length)),l=[];for(let a=0;a<t.length;a+=1)l[a]=G(O(i,t,a));return{c(){s=m("div"),e=m("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){s=p(a,"DIV",{class:!0});var r=b(s);e=p(r,"DIV",{class:!0});var n=b(e);for(let o=0;o<l.length;o+=1)l[o].l(n);n.forEach(f),r.forEach(f),this.h()},h(){_(e,"class","projects svelte-11w2si5"),_(s,"class","container svelte-11w2si5")},m(a,r){I(a,s,r),h(s,e);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,null)},p(a,[r]){if(r&1){t=V(Array(a[0].length));let n;for(n=0;n<t.length;n+=1){const o=O(a,t,n);l[n]?l[n].p(o,r):(l[n]=G(o),l[n].c(),l[n].m(e,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=t.length}},i:P,o:P,d(a){a&&f(s),U(l,a)}}}function N(i,s){if(i.length>s){if(i[s]!=" "){let e=i.substring(0,s).lastIndexOf(" ");return i.substring(0,e)+"..."}return i.substring(0,s)+"..."}return i}function oe(i,s,e){return[A,(l,a)=>e(0,A[l+a].visible=!0,A)]}class ce extends J{constructor(s){super(),K(this,s,oe,re,R,{})}}function he(i){let s,e,t,l='<h1 class="svelte-1y147lm"><p class="svelte-1y147lm">Computer engineering student,</p></h1> <h11 class="svelte-1y147lm"><p class="text-2 svelte-1y147lm">EPITA, IMAGE major, specialized in images synthesis</p></h11>',a,r,n="I am actively looking for a 6-month end-of-studies internship in the field of image synthesis, starting in February 2024.",o,u,C=`<a href="${Q}/about">Click Here</a><div class="arrow svelte-1y147lm">→</div>`,$,d,D='<h11 class="svelte-1y147lm">My Projects</h11>',E,y,j;return y=new ce({}),{c(){s=k(),e=m("div"),t=m("div"),t.innerHTML=l,a=k(),r=m("h2"),r.textContent=n,o=k(),u=m("div"),u.innerHTML=C,$=k(),d=m("div"),d.innerHTML=D,E=k(),Z(y.$$.fragment),this.h()},l(c){X("svelte-1451jfw",document.head).forEach(f),s=w(c),e=p(c,"DIV",{class:!0});var v=b(e);t=p(v,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1z0f49k"&&(t.innerHTML=l),a=w(v),r=p(v,"H2",{class:!0,"data-svelte-h":!0}),H(r)!=="svelte-1v2rlur"&&(r.textContent=n),o=w(v),u=p(v,"DIV",{role:!0,style:!0,class:!0,tabindex:!0,"data-svelte-h":!0}),H(u)!=="svelte-1ru7h9i"&&(u.innerHTML=C),$=w(v),d=p(v,"DIV",{class:!0,"data-svelte-h":!0}),H(d)!=="svelte-1xklapu"&&(d.innerHTML=D),E=w(v),ee(y.$$.fragment,v),v.forEach(f),this.h()},h(){document.title="Charlotte Philibert",_(t,"class","info-text svelte-1y147lm"),_(r,"class","subtitle svelte-1y147lm"),_(u,"role","link"),Y(u,"color","black"),_(u,"class","scroll-button animate-scroll svelte-1y147lm"),_(u,"tabindex","0"),_(d,"class","title-project svelte-1y147lm"),_(e,"class","container svelte-1y147lm")},m(c,g){I(c,s,g),I(c,e,g),h(e,t),h(e,a),h(e,r),h(e,o),h(e,u),h(e,$),h(e,d),h(e,E),te(y,e,null),j=!0},p:P,i(c){j||(le(y.$$.fragment,c),j=!0)},o(c){se(y.$$.fragment,c),j=!1},d(c){c&&(f(s),f(e)),ne(y)}}}class ve extends J{constructor(s){super(),K(this,s,null,he,R,{})}}export{ve as component};
