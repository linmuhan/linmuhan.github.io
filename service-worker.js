if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,a)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=a(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-2fdebd44"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/08/21/《Dubbo》接入与调用原理解析/index.html",revision:"7bc8b911769a8496f717134858e09f54"},{url:"2021/08/21/设计模式详解之工厂模式/index.html",revision:"bdab14a7624bdb1d0cec96204a94eb28"},{url:"2021/08/21/设计模式详解之模板方法模式/index.html",revision:"d30874d3cb11e70298a1411fc1036713"},{url:"404.html",revision:"a467fc82d370231deba988419ccf72b9"},{url:"archives/2021/08/index.html",revision:"6ffebb1df5fe3bb72202d73477eafc1c"},{url:"archives/2021/index.html",revision:"7c15df8c7c86a7b68fbca70753fbf82e"},{url:"archives/index.html",revision:"ac1aa538d86717bcbfdd955f8ce99b83"},{url:"artitalk/index.html",revision:"084c2d986b30fc2541da25d4d4c1156a"},{url:"bangumis/index.html",revision:"d5b70d7120cea5e40220f67e66e6a680"},{url:"categories/DesignPattern/index.html",revision:"922720e23b04d66bafafb5f384b638bb"},{url:"categories/Dubbo/index.html",revision:"5ae6d95937bbebad71dde8adddbb6938"},{url:"categories/index.html",revision:"fff4660a07a8045b0e53a611f3bd367e"},{url:"css/first.css",revision:"65cc26bb835962f7d37e2b3f29e8b696"},{url:"css/style.css",revision:"abae371392963a30b7e27b498c686418"},{url:"friends/index.html",revision:"b9682ca3de7e86528b9484913aa0e10a"},{url:"index.html",revision:"1de5aeaa514a4f5374daf80cf63b6bfc"},{url:"js/aplayer.js",revision:"0256a926f30b74f07457e05f236adec2"},{url:"js/app.js",revision:"04596a7dc24b204061bd4fc766cc8e77"},{url:"js/issues.js",revision:"d450701b133a092543f48ffc22ce966e"},{url:"js/search/algolia.js",revision:"3a8dc835cb0dbe9ceea9e4f83237a799"},{url:"js/search/azure.js",revision:"1e73788c42d8a55e4b26b32470c4deb2"},{url:"js/search/baidu.js",revision:"4247fb05f942bf561a59975ece561cb2"},{url:"js/search/google.js",revision:"ea57d9d8604b92e062162ccca76b7f5e"},{url:"js/search/hexo.js",revision:"9e1783dc56f7541ea906411167cca5f9"},{url:"js/valine.js",revision:"15d0f1f9d975de124ef5389385961992"},{url:"tags/index.html",revision:"0bbf33b3f2056ffed0061807c0e5a805"}],{})}));
//# sourceMappingURL=service-worker.js.map
