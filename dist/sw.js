if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),f={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-25e2ef06.js",revision:null},{url:"assets/index-7ce6fb69.css",revision:null},{url:"icon.svg",revision:"9faf0a926cd3669d8b4e3edd8a6bf871"},{url:"index.html",revision:"98a726aee854a3f758a1c4c76e079bff"},{url:"registerSW.js",revision:"e9f3e9c36e172eb79f9c9312caf1e546"},{url:"topo.svg",revision:"46e86ca9b05233429573be4ac3336020"},{url:"manifest.webmanifest",revision:"0ebd2bf15f2ead019882a9871c2eb183"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
