if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),u={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BcIDYiuC.js",revision:null},{url:"assets/index-KOM1PRuX.css",revision:null},{url:"index.html",revision:"4ff68b96c2896898ae933d20c9ba4578"},{url:"registerSW.js",revision:"a073289e179ea191a1f15aee82c28d90"},{url:"manifest.webmanifest",revision:"d0c6899556e8b805a2446eaa6d16e6ee"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
