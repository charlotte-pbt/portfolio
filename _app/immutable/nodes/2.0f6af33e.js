import{s as G,f as p,g as m,h as $,d,j as _,i as E,y as c,z as A,B as O,e as P,a as k,c as C,l as T,m as V,u as M,C as N,n as L,D as Q,k as U}from"../chunks/scheduler.45837ece.js";import{S as R,i as J,b as W,d as X,m as Y,a as Z,t as ee,e as te}from"../chunks/index.9b41337c.js";import{e as w,p as D}from"../chunks/projects.4dbbd8d2.js";import{b as K}from"../chunks/paths.6ea619cc.js";function z(r,e,t){const n=r.slice();return n[2]=e[t],n[4]=t,n}function S(r,e,t){const n=r.slice();return n[2]=e[t],n[6]=t,n}function se(r){let e,t,n=w(Array(2)),l=[];for(let a=0;a<n.length;a+=1)l[a]=q(S(r,n,a));return{c(){e=p("div");for(let a=0;a<l.length;a+=1)l[a].c();t=k(),this.h()},l(a){e=m(a,"DIV",{class:!0});var i=$(e);for(let s=0;s<l.length;s+=1)l[s].l(i);t=C(i),i.forEach(d),this.h()},h(){_(e,"class","row svelte-1ynssnc")},m(a,i){E(a,e,i);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null);c(e,t)},p(a,i){if(i&1){n=w(Array(2));let s;for(s=0;s<n.length;s+=1){const o=S(a,n,s);l[s]?l[s].p(o,i):(l[s]=q(o),l[s].c(),l[s].m(e,t))}for(;s<l.length;s+=1)l[s].d(1);l.length=n.length}},d(a){a&&d(e),O(l,a)}}}function q(r){let e,t,n=r[0][r[4]+r[6]].title+"",l,a,i,s=F(r[0][r[4]+r[6]].description,60)+"",o,u,y,j="Read More",g,x;function H(){return r[1](r[4],r[6])}return{c(){e=p("a"),t=p("h2"),l=T(n),a=k(),i=p("p"),o=T(s),u=k(),y=p("p"),y.textContent=j,this.h()},l(f){e=m(f,"A",{class:!0,href:!0});var h=$(e);t=m(h,"H2",{class:!0});var v=$(t);l=V(v,n),v.forEach(d),a=C(h),i=m(h,"P",{});var I=$(i);o=V(I,s),I.forEach(d),u=C(h),y=m(h,"P",{class:!0,"data-svelte-h":!0}),M(y)!=="svelte-3faa0b"&&(y.textContent=j),h.forEach(d),this.h()},h(){_(t,"class","svelte-1ynssnc"),_(y,"class","readmore svelte-1ynssnc"),_(e,"class","post svelte-1ynssnc"),_(e,"href",K+"/projects")},m(f,h){E(f,e,h),c(e,t),c(t,l),c(e,a),c(e,i),c(i,o),c(e,u),c(e,y),g||(x=N(e,"click",H),g=!0)},p(f,h){r=f,h&1&&n!==(n=r[0][r[4]+r[6]].title+"")&&L(l,n),h&1&&s!==(s=F(r[0][r[4]+r[6]].description,60)+"")&&L(o,s)},d(f){f&&d(e),g=!1,x()}}}function B(r){let e,t=r[4]%2===0&&se(r);return{c(){t&&t.c(),e=P()},l(n){t&&t.l(n),e=P()},m(n,l){t&&t.m(n,l),E(n,e,l)},p(n,l){n[4]%2===0&&t.p(n,l)},d(n){n&&d(e),t&&t.d(n)}}}function le(r){let e,t,n=w(Array(r[0].length)),l=[];for(let a=0;a<n.length;a+=1)l[a]=B(z(r,n,a));return{c(){e=p("div"),t=p("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=m(a,"DIV",{class:!0});var i=$(e);t=m(i,"DIV",{class:!0});var s=$(t);for(let o=0;o<l.length;o+=1)l[o].l(s);s.forEach(d),i.forEach(d),this.h()},h(){_(t,"class","projects svelte-1ynssnc"),_(e,"class","container svelte-1ynssnc")},m(a,i){E(a,e,i),c(e,t);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null)},p(a,[i]){if(i&1){n=w(Array(a[0].length));let s;for(s=0;s<n.length;s+=1){const o=z(a,n,s);l[s]?l[s].p(o,i):(l[s]=B(o),l[s].c(),l[s].m(t,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=n.length}},i:A,o:A,d(a){a&&d(e),O(l,a)}}}function F(r,e){if(r.length>e){if(r[e]!=" "){let t=r.substring(0,e).lastIndexOf(" ");return r.substring(0,t)+"..."}return r.substring(0,e)+"..."}return r}function ne(r,e,t){return[D,(l,a)=>t(0,D[l+a].visible=!0,D)]}class ae extends R{constructor(e){super(),J(this,e,ne,le,G,{})}}function re(r){let e,t,n,l='<h1 class="svelte-7p8v14"><p class="animate-text-1 svelte-7p8v14">Computer engineering student,</p></h1> <h11 class="svelte-7p8v14"><p class="text-2 svelte-7p8v14">EPITA, IMAGE major, specialized in images synthesis</p></h11>',a,i,s="I am actively looking for a 6-month end-of-studies internship in the field of image synthesis, starting in February 2024.",o,u,y=`<a href="${K}/about">Click Here</a><div class="arrow svelte-7p8v14">→</div>`,j,g,x='<h11 class="svelte-7p8v14">My Projects</h11>',H,f,h;return f=new ae({}),{c(){e=k(),t=p("div"),n=p("div"),n.innerHTML=l,a=k(),i=p("h2"),i.textContent=s,o=k(),u=p("div"),u.innerHTML=y,j=k(),g=p("div"),g.innerHTML=x,H=k(),W(f.$$.fragment),this.h()},l(v){Q("svelte-1451jfw",document.head).forEach(d),e=C(v),t=m(v,"DIV",{class:!0});var b=$(t);n=m(b,"DIV",{class:!0,"data-svelte-h":!0}),M(n)!=="svelte-pk0zpw"&&(n.innerHTML=l),a=C(b),i=m(b,"H2",{class:!0,"data-svelte-h":!0}),M(i)!=="svelte-1v2rlur"&&(i.textContent=s),o=C(b),u=m(b,"DIV",{role:!0,style:!0,class:!0,tabindex:!0,"data-svelte-h":!0}),M(u)!=="svelte-1ru7h9i"&&(u.innerHTML=y),j=C(b),g=m(b,"DIV",{class:!0,"data-svelte-h":!0}),M(g)!=="svelte-1xklapu"&&(g.innerHTML=x),H=C(b),X(f.$$.fragment,b),b.forEach(d),this.h()},h(){document.title="Charlotte Philibert",_(n,"class","info-text svelte-7p8v14"),_(i,"class","subtitle svelte-7p8v14"),_(u,"role","link"),U(u,"color","black"),_(u,"class","scroll-button animate-scroll svelte-7p8v14"),_(u,"tabindex","0"),_(g,"class","title-project svelte-7p8v14"),_(t,"class","container svelte-7p8v14")},m(v,I){E(v,e,I),E(v,t,I),c(t,n),c(t,a),c(t,i),c(t,o),c(t,u),c(t,j),c(t,g),c(t,H),Y(f,t,null),h=!0},p:A,i(v){h||(Z(f.$$.fragment,v),h=!0)},o(v){ee(f.$$.fragment,v),h=!1},d(v){v&&(d(e),d(t)),te(f)}}}class fe extends R{constructor(e){super(),J(this,e,null,re,G,{})}}export{fe as component};
