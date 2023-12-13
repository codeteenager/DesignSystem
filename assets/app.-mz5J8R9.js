import{_ as l,o as u,c as f,p as _,q as h,k as o,a5 as m,a6 as c,v as r,a7 as v,a8 as A,a9 as S,aa as y,ab as P,ac as b,ad as x,ae as C,af as I,ag as $,Y as k,d as L,u as z,j as B,z as E,ah as M,ai as T,aj as V}from"./chunks/framework.KJCAG1tI.js";import{t as d}from"./chunks/theme.JToZwqdn.js";const D={},w=e=>(_("data-v-0fdd4fd7"),e=e(),h(),e),R={class:"content"},j=w(()=>o("img",{class:"icon",src:m},null,-1)),q=w(()=>o("span",{class:"text"},"微信公众号",-1)),F=[j,q];function O(e,t){return u(),f("div",R,F)}const H=l(D,[["render",O],["__scopeId","data-v-0fdd4fd7"]]),N={},W=e=>(_("data-v-3c843f7c"),e=e(),h(),e),G={class:"VPSocialLinks VPNavBarSocialLinks social-links"},U=W(()=>o("a",{class:"VPSocialLink app","aria-label":"weixin"},[o("svg",{t:"1701186907114",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"17908",width:"48",height:"48"},[o("path",{d:"M347.729118 353.0242c-16.487119 0-29.776737 13.389539-29.776737 29.776737S331.241998 412.677596 347.729118 412.677596s29.776737-13.389539 29.776737-29.776737-13.289617-29.876659-29.776737-29.876659zM577.749415 511.800156c-13.689305 0-24.880562 11.091335-24.880563 24.880562 0 13.689305 11.091335 24.880562 24.880563 24.880562 13.689305 0 24.880562-11.191257 24.880562-24.880562s-11.191257-24.880562-24.880562-24.880562zM500.909446 412.677596c16.487119 0 29.776737-13.389539 29.776737-29.776737s-13.389539-29.776737-29.776737-29.776737c-16.487119 0-29.776737 13.389539-29.776737 29.776737s13.289617 29.776737 29.776737 29.776737zM698.455113 511.600312c-13.689305 0-24.880562 11.091335-24.880562 24.880562 0 13.689305 11.091335 24.880562 24.880562 24.880562 13.689305 0 24.880562-11.091335 24.880562-24.880562-0.099922-13.689305-11.191257-24.880562-24.880562-24.880562z",fill:"#00C800","p-id":"17909"}),o("path",{d:"M511.601093 0.799375C229.12178 0.799375 0.000781 229.820453 0.000781 512.399688s229.021077 511.600312 511.600312 511.600312 511.600312-229.021077 511.600312-511.600312S794.180328 0.799375 511.601093 0.799375z m-90.229508 634.504294c-27.37861 0-49.361436-5.595628-76.839969-10.991413l-76.640125 38.469945 21.882904-65.948477c-54.957065-38.370023-87.73146-87.831382-87.73146-148.084309 0-104.318501 98.722873-186.554254 219.32865-186.554255 107.815769 0 202.34192 65.648712 221.327088 153.979703-6.994536-0.799375-13.989071-1.298985-21.083529-1.298985-104.118657 0-186.454333 77.739266-186.454332 173.564403 0 15.98751 2.498048 31.275566 6.794692 45.964091-6.794692 0.599532-13.689305 0.899297-20.583919 0.899297z m323.547228 76.839969l16.48712 54.757221-60.153006-32.874317c-21.882904 5.495706-43.965652 10.991413-65.848555 10.991413-104.318501 0-186.554254-71.344262-186.554255-159.175644 0-87.631538 82.135831-159.175644 186.554255-159.175644 98.523029 0 186.254489 71.444184 186.254488 159.175644 0.099922 49.461358-32.774395 93.227166-76.740047 126.301327z",fill:"#00C800","p-id":"17910"})]),o("div",{class:"qrcode"},[o("img",{class:"icon",src:m}),o("span",null,"微信公众号")])],-1)),Y=[U];function J(e,t){return u(),f("div",G,Y)}const K=l(N,[["render",J],["__scopeId","data-v-3c843f7c"]]),Q={...d,Layout(){return c(d.Layout,null,{"aside-bottom":()=>c(H),"nav-bar-content-after":()=>c(K)})},enhanceApp({app:e,router:t,siteData:a}){e.mixin({data(){return{isInit:!1}},mounted(){const n=document.querySelector(".VPDoc");n&&(this.isInit||(setTimeout(()=>{const i=n.querySelector(".content-container");i.setAttribute("id","page-container"),i.style.minHeight=`${window.innerHeight-64-32}px`;const p=document.querySelector("#read-more-wrap");p&&p.remove(),window.btw=new BTWPlugin,window.btw.init({id:"page-container",blogId:"32228-1698943811239-404",name:"前端研学营",qrcode:"https://codeteenager.github.io/FE/weixin.jpg",keyword:"前端研学营"})},1e3),this.isInit=!0))}})}};function g(e){if(e.extends){const t=g(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=g(Q),X=L({name:"VitePressApp",setup(){const{site:e}=z();return B(()=>{E(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&M(),T(),V(),s.setup&&s.setup(),()=>c(s.Layout)}});async function Z(){const e=te(),t=ee();t.provide(A,e);const a=S(e.route);return t.provide(y,a),t.component("Content",P),t.component("ClientOnly",b),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:x}),{app:t,router:e,data:a}}function ee(){return C(X)}function te(){let e=r,t;return I(a=>{let n=$(a),i=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),i=k(()=>import(n),__vite__mapDeps([]))),r&&(e=!1),i},s.NotFound)}r&&Z().then(({app:e,router:t,data:a})=>{t.go().then(()=>{v(t.route,a.site),e.mount("#app")})});export{Z as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}