import{s as P,a as w,f as u,D as V,d as c,c as k,g,u as y,h as G,j as b,i as _,y as v,z as C,E as z}from"../chunks/scheduler.7dece5bf.js";import{S as A,i as $}from"../chunks/index.746a4b0e.js";function D(d){let e,s='<img class="photo svelte-ggm8ue" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" alt="Charlotte Philibert"/>';return{c(){e=u("div"),e.innerHTML=s,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1r9pbos"&&(e.innerHTML=s),this.h()},h(){b(e,"class","image-container svelte-ggm8ue")},m(t,r){_(t,e,r)},d(t){t&&c(e)}}}function E(d){let e,s='<div class="image-container svelte-ggm8ue"><img class="photo svelte-ggm8ue" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" alt="Charlotte Philibert"/></div>';return{c(){e=u("div"),e.innerHTML=s,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1ahkc92"&&(e.innerHTML=s),this.h()},h(){b(e,"class","main_container3 svelte-ggm8ue")},m(t,r){_(t,e,r)},d(t){t&&c(e)}}}function J(d){let e,s,t='<link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" as="image"/> <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/linkedin.png" as="image"/> <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub_logo.png" as="image"/>',r,n,o,m,T=`<h1 class="about-title svelte-ggm8ue"><p class="svelte-ggm8ue">I&#39;m Charlotte Philibert 👋</p></h1> <div class="about-subtitle svelte-ggm8ue"><p class="svelte-ggm8ue">I am currently a 5th year student in computer engineering at EPITA, IMAGE major, specialized in image synthesis. 
                    I have a particular interest in video games, animated films and serious games.</p> <p class="svelte-ggm8ue">I am actively looking for a 6-month end-of-studies internship in the field of image synthesis, 
                    starting in February 2024. I am open to all kinds of opportunities.</p> <p class="svelte-ggm8ue">You can send me an email at <span class="info-text svelte-ggm8ue">charlotte56.philibert@gmail.com</span></p></div>`,H,L,h,x='<a href="https://www.linkedin.com/in/charlotte-philibert/" target="_blank"><img class="logo svelte-ggm8ue" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/linkedin.png" alt="LinkedIn"/></a> <a href="https://github.com/charlotte-pbt" target="_blank"><img class="logo svelte-ggm8ue" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub_logo.png" alt="GitHub"/></a>',M,i=d[0]>768&&D(),a=d[0]<=768&&E();return{c(){e=w(),s=u("head"),s.innerHTML=t,r=w(),n=u("div"),o=u("div"),m=u("div"),m.innerHTML=T,H=w(),i&&i.c(),L=w(),h=u("div"),h.innerHTML=x,M=w(),a&&a.c(),this.h()},l(l){V("svelte-obu56y",document.head).forEach(c),e=k(l),s=g(l,"HEAD",{"data-svelte-h":!0}),y(s)!=="svelte-3xcyek"&&(s.innerHTML=t),r=k(l),n=g(l,"DIV",{class:!0});var f=G(n);o=g(f,"DIV",{class:!0});var I=G(o);m=g(I,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-8b90kf"&&(m.innerHTML=T),H=k(I),i&&i.l(I),I.forEach(c),L=k(f),h=g(f,"DIV",{class:!0,"data-svelte-h":!0}),y(h)!=="svelte-ie5qhy"&&(h.innerHTML=x),M=k(f),a&&a.l(f),f.forEach(c),this.h()},h(){document.title="About",b(m,"class","text svelte-ggm8ue"),b(o,"class","main_container svelte-ggm8ue"),b(h,"class","main_container2 svelte-ggm8ue"),b(n,"class","container svelte-ggm8ue")},m(l,p){_(l,e,p),_(l,s,p),_(l,r,p),_(l,n,p),v(n,o),v(o,m),v(o,H),i&&i.m(o,null),v(n,L),v(n,h),v(n,M),a&&a.m(n,null)},p(l,[p]){l[0]>768?i||(i=D(),i.c(),i.m(o,null)):i&&(i.d(1),i=null),l[0]<=768?a||(a=E(),a.c(),a.m(n,null)):a&&(a.d(1),a=null)},i:C,o:C,d(l){l&&(c(e),c(s),c(r),c(n)),i&&i.d(),a&&a.d()}}}function N(d,e,s){let t=769;if(typeof window<"u"){let r=function(){s(0,t=window.innerWidth)};t=window.innerWidth,window.addEventListener("resize",r),z(()=>{window.removeEventListener("resize",r)})}return[t]}class j extends A{constructor(e){super(),$(this,e,N,J,P,{})}}export{j as component};
