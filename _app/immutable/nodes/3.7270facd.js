import{s as P,a as w,f as m,u as V,d as c,c as y,g as d,v as I,h as E,j as b,i as _,w as g,A as G,E as A}from"../chunks/scheduler.2acfc640.js";import{S as $,i as z}from"../chunks/index.5fc46426.js";function C(p){let e,s='<div class="image-container svelte-4uvm1u"><img class="photo svelte-4uvm1u" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" alt="Charlotte Philibert"/></div>';return{c(){e=m("div"),e.innerHTML=s,this.h()},l(t){e=d(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-1ahkc92"&&(e.innerHTML=s),this.h()},h(){b(e,"class","main_container3 svelte-4uvm1u")},m(t,r){_(t,e,r)},d(t){t&&c(e)}}}function D(p){let e,s='<img class="photo svelte-4uvm1u" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" alt="Charlotte Philibert"/>';return{c(){e=m("div"),e.innerHTML=s,this.h()},l(t){e=d(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-1r9pbos"&&(e.innerHTML=s),this.h()},h(){b(e,"class","image-container svelte-4uvm1u")},m(t,r){_(t,e,r)},d(t){t&&c(e)}}}function J(p){let e,s,t='<link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" as="image"/> <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/linkedin.png" as="image"/> <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub_logo.png" as="image"/>',r,n,k,o,u,T=`<h1 class="about-title svelte-4uvm1u"><p class="svelte-4uvm1u">I&#39;m Charlotte Philibert 👋</p></h1> <div class="about-subtitle svelte-4uvm1u"><p class="svelte-4uvm1u">I am currently a 5th year student in computer engineering at EPITA, IMAGE major, specialized in image synthesis. 
                    I am actively looking for a 6-month end-of-studies internship in the field of image synthesis, 
                    starting in February 2024.</p> <p class="svelte-4uvm1u">I have a particular interest in video games, animated films and serious games. 
                    I have already completed a 5-month internship in this field at <a href="https://www.polymorph.fr/home/" target="_blank" style="font-style: italic;">Polymorph studio</a> as a 3D developer. 
                    I was able to take part in the development of real-time applications on Unreal Engine, such as AI for a VR serious game.</p> <p class="svelte-4uvm1u">I am open to all kinds of opportunities.</p> <p class="svelte-4uvm1u">You can send me an email at <span class="info-text svelte-4uvm1u">charlotte56.philibert@gmail.com</span></p></div>`,L,M,h,x='<a href="https://www.linkedin.com/in/charlotte-philibert/" target="_blank"><img class="logo svelte-4uvm1u" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/linkedin.png" alt="LinkedIn"/></a> <a href="https://github.com/charlotte-pbt" target="_blank"><img class="logo svelte-4uvm1u" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub_logo.png" alt="GitHub"/></a>',i=p[0]<=768&&C(),a=p[0]>768&&D();return{c(){e=w(),s=m("head"),s.innerHTML=t,r=w(),n=m("div"),i&&i.c(),k=w(),o=m("div"),u=m("div"),u.innerHTML=T,L=w(),a&&a.c(),M=w(),h=m("div"),h.innerHTML=x,this.h()},l(l){V("svelte-obu56y",document.head).forEach(c),e=y(l),s=d(l,"HEAD",{"data-svelte-h":!0}),I(s)!=="svelte-3xcyek"&&(s.innerHTML=t),r=y(l),n=d(l,"DIV",{class:!0});var f=E(n);i&&i.l(f),k=y(f),o=d(f,"DIV",{class:!0});var H=E(o);u=d(H,"DIV",{class:!0,"data-svelte-h":!0}),I(u)!=="svelte-1w54os3"&&(u.innerHTML=T),L=y(H),a&&a.l(H),H.forEach(c),M=y(f),h=d(f,"DIV",{class:!0,"data-svelte-h":!0}),I(h)!=="svelte-ie5qhy"&&(h.innerHTML=x),f.forEach(c),this.h()},h(){document.title="About",b(u,"class","text svelte-4uvm1u"),b(o,"class","main_container svelte-4uvm1u"),b(h,"class","main_container2 svelte-4uvm1u"),b(n,"class","container svelte-4uvm1u")},m(l,v){_(l,e,v),_(l,s,v),_(l,r,v),_(l,n,v),i&&i.m(n,null),g(n,k),g(n,o),g(o,u),g(o,L),a&&a.m(o,null),g(n,M),g(n,h)},p(l,[v]){l[0]<=768?i||(i=C(),i.c(),i.m(n,k)):i&&(i.d(1),i=null),l[0]>768?a||(a=D(),a.c(),a.m(o,null)):a&&(a.d(1),a=null)},i:G,o:G,d(l){l&&(c(e),c(s),c(r),c(n)),i&&i.d(),a&&a.d()}}}function N(p,e,s){let t=769;if(typeof window<"u"){let r=function(){s(0,t=window.innerWidth)};t=window.innerWidth,window.addEventListener("resize",r),A(()=>{window.removeEventListener("resize",r)})}return[t]}class j extends ${constructor(e){super(),z(this,e,N,J,P,{})}}export{j as component};
