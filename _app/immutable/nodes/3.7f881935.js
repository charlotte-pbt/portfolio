import{s as D,a as g,f as u,e as x,D as E,d as n,c as b,g as v,u as _,h as P,j as w,i as m,y as M,z as T,E as V}from"../chunks/scheduler.7dece5bf.js";import{S as z,i as A}from"../chunks/index.746a4b0e.js";function G(p){let e,s='<img class="photo svelte-1fcml1j" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" alt="Charlotte Philibert"/>';return{c(){e=u("div"),e.innerHTML=s,this.h()},l(i){e=v(i,"DIV",{class:!0,"data-svelte-h":!0}),_(e)!=="svelte-12nb88c"&&(e.innerHTML=s),this.h()},h(){w(e,"class","image-container svelte-1fcml1j")},m(i,r){m(i,e,r)},d(i){i&&n(e)}}}function C(p){let e,s='<div class="image-container svelte-1fcml1j"><img class="photo svelte-1fcml1j" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" alt="Charlotte Philibert"/></div>';return{c(){e=u("div"),e.innerHTML=s,this.h()},l(i){e=v(i,"DIV",{class:!0,"data-svelte-h":!0}),_(e)!=="svelte-1fl1iip"&&(e.innerHTML=s),this.h()},h(){w(e,"class","main_container svelte-1fcml1j")},m(i,r){m(i,e,r)},d(i){i&&n(e)}}}function N(p){let e,s,i='<link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" as="image"/> <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/linkedin.png" as="image"/> <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub_logo.png" as="image"/>',r,c,f,I=`<h1 class="about-title svelte-1fcml1j"><p class="svelte-1fcml1j">I&#39;m Charlotte Philibert 👋</p></h1> <div class="about-subtitle svelte-1fcml1j"><p class="svelte-1fcml1j">I am currently a 5th year student in computer engineering at EPITA, IMAGE major, specialized in image synthesis. 
                I have a particular interest in video games, animated films and serious games.</p> <p class="svelte-1fcml1j">I am actively looking for a 6-month end-of-studies internship in the field of image synthesis, 
                starting in February 2024. I am open to all kinds of opportunities.</p> <p class="svelte-1fcml1j">You can send me an email at <span class="info-text svelte-1fcml1j">charlotte56.philibert@gmail.com</span></p></div>`,y,j,h,L='<a href="https://www.linkedin.com/in/charlotte-philibert/" target="_blank"><img class="logo svelte-1fcml1j" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/linkedin.png" alt="LinkedIn"/></a> <a href="https://github.com/charlotte-pbt" target="_blank"><img class="logo svelte-1fcml1j" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub_logo.png" alt="GitHub"/></a>',k,d,l=p[0]>768&&G(),a=p[0]<=768&&C();return{c(){e=g(),s=u("head"),s.innerHTML=i,r=g(),c=u("div"),f=u("div"),f.innerHTML=I,y=g(),l&&l.c(),j=g(),h=u("div"),h.innerHTML=L,k=g(),a&&a.c(),d=x(),this.h()},l(t){E("svelte-obu56y",document.head).forEach(n),e=b(t),s=v(t,"HEAD",{"data-svelte-h":!0}),_(s)!=="svelte-3xcyek"&&(s.innerHTML=i),r=b(t),c=v(t,"DIV",{class:!0});var H=P(c);f=v(H,"DIV",{class:!0,"data-svelte-h":!0}),_(f)!=="svelte-hxk299"&&(f.innerHTML=I),y=b(H),l&&l.l(H),H.forEach(n),j=b(t),h=v(t,"DIV",{class:!0,"data-svelte-h":!0}),_(h)!=="svelte-ia4huu"&&(h.innerHTML=L),k=b(t),a&&a.l(t),d=x(),this.h()},h(){document.title="About",w(f,"class","text svelte-1fcml1j"),w(c,"class","main_container svelte-1fcml1j"),w(h,"class","main_container2 svelte-1fcml1j")},m(t,o){m(t,e,o),m(t,s,o),m(t,r,o),m(t,c,o),M(c,f),M(c,y),l&&l.m(c,null),m(t,j,o),m(t,h,o),m(t,k,o),a&&a.m(t,o),m(t,d,o)},p(t,[o]){t[0]>768?l||(l=G(),l.c(),l.m(c,null)):l&&(l.d(1),l=null),t[0]<=768?a||(a=C(),a.c(),a.m(d.parentNode,d)):a&&(a.d(1),a=null)},i:T,o:T,d(t){t&&(n(e),n(s),n(r),n(c),n(j),n(h),n(k),n(d)),l&&l.d(),a&&a.d(t)}}}function $(p,e,s){let i=769;if(typeof window<"u"){let r=function(){s(0,i=window.innerHeight)};i=window.innerHeight,window.addEventListener("resize",r),V(()=>{window.removeEventListener("resize",r)})}return[i]}class q extends z{constructor(e){super(),A(this,e,$,N,D,{})}}export{q as component};
