if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let c={};const l=e=>i(e,r),d={module:{uri:r},exports:c,require:l};n[r]=Promise.all(s.map((e=>d[e]||l(e)))).then((e=>(o(...e),c)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/buy-0d8034f8.mp3",revision:null},{url:"assets/honey-jar-ac6e37c8.png",revision:null},{url:"assets/index-38400879.css",revision:null},{url:"assets/index-e189a836.js",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"honey-jar.png",revision:"d86f3d56d733ba27c32e234c55b9a3f0"},{url:"index.html",revision:"0862522cd49afe3b6edc11030e3cb77b"},{url:"logo192.png",revision:"c46888c42779b0d296b75e8c0399bfc7"},{url:"logo256.png",revision:"f04cd94547b70a165df87d6b337f2529"},{url:"logo384.png",revision:"54f11b2a22ccaeeb5c95442c5e46b473"},{url:"logo512.png",revision:"fbdc91ecf1b6696188a4fda3840aae0d"},{url:"manifest.webmanifest",revision:"8830576a707c3061fefe1d4ed2b89c86"},{url:"logo192.png",revision:"c46888c42779b0d296b75e8c0399bfc7"},{url:"honey-jar.png",revision:"d86f3d56d733ba27c32e234c55b9a3f0"},{url:"logo256.png",revision:"f04cd94547b70a165df87d6b337f2529"},{url:"logo384.png",revision:"54f11b2a22ccaeeb5c95442c5e46b473"},{url:"logo512.png",revision:"fbdc91ecf1b6696188a4fda3840aae0d"},{url:"manifest.webmanifest",revision:"8830576a707c3061fefe1d4ed2b89c86"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));