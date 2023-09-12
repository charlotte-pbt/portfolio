import{s as T,n as y}from"./scheduler.e108d1fd.js";import{S as U,i as V,g as f,h as p,j as g,f as h,k as m,a as L,y as r,A as w,m as P,s as C,n as D,c as j,x as G}from"./index.a3c98c77.js";import{b as H}from"./paths.62e0488c.js";function I(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}let A=[{title:"Catmull–Clark subdivision surface",year:"3",description:"Recursive implementation of Catmull–Clark subdivision surface for image synthesis project.",languages:["C++","OpenGL"]},{title:"My Tiny Town",year:"3",description:"Design software for building your own city.",languages:["OpenGL"]},{title:"Casual mobile game",year:"Personnal project",description:"Game prototype (3 levels) made on Unity in 5 days",languages:["C#","Unity"]},{title:"Video game",year:"1",description:"Multiplayer hide-and-seek video game on Unity",languages:["C#","Unity"]}];function O(l,e,s){const o=l.slice();return o[0]=e[s],o[2]=s,o}function R(l){let e,s,o=l[0].title.substring(0,20)+"",a,t,n,i=l[0].description.substring(0,60)+"",d,_,u,x=`<a style="color: rgb(10, 10, 139);" href="${H}/projects">Read More</a>`,b;return{c(){e=f("div"),s=f("h2"),a=P(o),t=C(),n=f("p"),d=P(i),_=C(),u=f("p"),u.innerHTML=x,b=C(),this.h()},l(v){e=p(v,"DIV",{class:!0});var c=g(e);s=p(c,"H2",{class:!0});var E=g(s);a=D(E,o),E.forEach(h),t=j(c),n=p(c,"P",{});var M=g(n);d=D(M,i),M.forEach(h),_=j(c),u=p(c,"P",{class:!0,"data-svelte-h":!0}),G(u)!=="svelte-1ixz3hr"&&(u.innerHTML=x),b=j(c),c.forEach(h),this.h()},h(){m(s,"class","svelte-d8tifg"),m(u,"class","readmore svelte-d8tifg"),m(e,"class","post svelte-d8tifg")},m(v,c){L(v,e,c),r(e,s),r(s,a),r(e,t),r(e,n),r(n,d),r(e,_),r(e,u),r(e,b)},p:y,d(v){v&&h(e)}}}function S(l){let e,s,o=I(A),a=[];for(let t=0;t<o.length;t+=1)a[t]=R(O(l,o,t));return{c(){e=f("div"),s=f("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=p(t,"DIV",{class:!0});var n=g(e);s=p(n,"DIV",{class:!0});var i=g(s);for(let d=0;d<a.length;d+=1)a[d].l(i);i.forEach(h),n.forEach(h),this.h()},h(){m(s,"class","projects svelte-d8tifg"),m(e,"class","container svelte-d8tifg")},m(t,n){L(t,e,n),r(e,s);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(s,null)},p:y,i:y,o:y,d(t){t&&h(e),w(a,t)}}}class $ extends U{constructor(e){super(),V(this,e,null,S,T,{})}}export{$ as P};
