if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const a=s=>i(s,n),u={module:{uri:n},exports:t,require:a};e[n]=Promise.all(l.map((s=>u[s]||a(s)))).then((s=>(r(...s),t)))}}define(["./workbox-f683aea5"],(function(s){"use strict";self.skipWaiting(),s.precacheAndRoute([{url:"404.html",revision:"be9801c08c239c9bc0df2dff2e085085"},{url:"assets/404.4839ad4a.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.9fd500a2.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/backups.html.3c8ec32b.js",revision:null},{url:"assets/backups.html.9fd924bb.js",revision:null},{url:"assets/credits.html.6b25f59c.js",revision:null},{url:"assets/credits.html.a74d57b0.js",revision:null},{url:"assets/getting-started.html.255f81ff.js",revision:null},{url:"assets/getting-started.html.db43c2bc.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.1251f02a.js",revision:null},{url:"assets/index.html.175334bb.js",revision:null},{url:"assets/index.html.504c7800.js",revision:null},{url:"assets/index.html.53b11d02.js",revision:null},{url:"assets/index.html.b7ce3628.js",revision:null},{url:"assets/index.html.e1cfaba2.js",revision:null},{url:"assets/index.html.e2123458.js",revision:null},{url:"assets/index.html.ea2af87a.js",revision:null},{url:"assets/installation.html.4bb36567.js",revision:null},{url:"assets/installation.html.4d025ca2.js",revision:null},{url:"assets/Layout.6aed08e8.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/privacy-policy.html.4754724b.js",revision:null},{url:"assets/privacy-policy.html.9c698bf9.js",revision:null},{url:"assets/runtime.html.85b469a0.js",revision:null},{url:"assets/runtime.html.fa4428ac.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.93f6b2a0.css",revision:null},{url:"assets/supported-sources.html.5379e558.js",revision:null},{url:"assets/supported-sources.html.8f04eca6.js",revision:null},{url:"assets/third-party-lists.html.c4406095.js",revision:null},{url:"assets/third-party-lists.html.cf6381d6.js",revision:null},{url:"contribution/credits.html",revision:"d5feedfc7f9634b48601fa9a90de4f42"},{url:"contribution/index.html",revision:"cf63ebe235e7d438f8ffcd77f58d9fe1"},{url:"contribution/runtime.html",revision:"dbdde7ba45a5a77500dcd962ff1ed140"},{url:"contribution/source-development/index.html",revision:"b7dab9bf884a0ebd755f8d7f81de8e53"},{url:"guide/backups.html",revision:"5ed25992f1ac5b4b3a43bf9c17c28f49"},{url:"guide/getting-started.html",revision:"ed9fdf52759ceca1b98e895ddc924c69"},{url:"guide/installation.html",revision:"971d8a5df2051ef4881f5ec9483e88a7"},{url:"guide/supported-sources.html",revision:"aaee7a39c88ee11216f8a1ce944954e6"},{url:"guide/third-party-lists.html",revision:"b7ef04adca43dc4375ed1aa17c0fc9df"},{url:"help/faq/index.html",revision:"f2c1d7522e5ec1948a74ff17d9ffa082"},{url:"images/icons/android-chrome-192x192.png",revision:"7b28bbe1d7495cc47cd4a8f6431b7c52"},{url:"images/icons/android-chrome-512x512.png",revision:"444eea01bddb42992c9dc290f59e28da"},{url:"images/icons/apple-touch-icon.png",revision:"4ac85dad448647c8acfa2904392d0ec0"},{url:"images/icons/favicon-16x16.png",revision:"e86a6d7dbe042db26cf6e5bea3b5a8c6"},{url:"images/icons/favicon-32x32.png",revision:"6566874f642ea2ca2949380f407b83dd"},{url:"images/logo.png",revision:"f625cada7b587f25612c1c13d8f54d8a"},{url:"index.html",revision:"d669e7982a28edb1d7ca8c661ed6cf99"},{url:"privacy-policy.html",revision:"00e9d95b92a28d064a37ea2dec651fbb"}],{})}));
