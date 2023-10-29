"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[513],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(1163),a=(n(9496),n(9613));const o={},l="\u8bed\u6cd5\u964d\u7ea7\u548c Polyfill",i={unversionedId:"features/polyfill",id:"features/polyfill",title:"\u8bed\u6cd5\u964d\u7ea7\u548c Polyfill",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u5c06\u964d\u7ea7\u5230ES5\u5e76\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\u81ea\u52a8\u6ce8\u5165polyfills\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/features/polyfill.md",sourceDirName:"features",slug:"/features/polyfill",permalink:"/zh/docs/features/polyfill",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/polyfill.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u538b\u7f29",permalink:"/zh/docs/features/minification"},next:{title:"Benchmarks",permalink:"/zh/docs/benchmark"}},p={},c=[{value:"\u914d\u7f6e <code>presetEnv</code>",id:"\u914d\u7f6e-presetenv",level:2},{value:"\u4f7f\u7528 <code>script.target</code>",id:"\u4f7f\u7528-scripttarget",level:2}],s={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8bed\u6cd5\u964d\u7ea7\u548c-polyfill"},"\u8bed\u6cd5\u964d\u7ea7\u548c Polyfill"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u5c06\u964d\u7ea7\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"ES5"),"\u5e76\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\u81ea\u52a8\u6ce8\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"polyfills"),"\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u4e0d\u4f1a\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/")," \u4e0b\u7684\u6a21\u5757\u8fdb\u884c\u8f6c\u6362\u5e76\u6ce8\u5165 polyfill\uff0c\u5982\u679c\u60a8\u9700\u8981\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/")," \u964d\u7ea7\u8bed\u6cd5\u5e76\u6ce8\u5165 polyfill\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"compilation.presetEnv.include"),"\u3002")),(0,a.kt)("h2",{id:"\u914d\u7f6e-presetenv"},"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"h2"},"presetEnv")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"compilation.presetEnv"),"\u6765\u81ea\u5b9a\u4e49\u8bed\u6cd5\u964d\u7ea7\u548c polyfill\u3002 \u4f7f\u7528 include \u6dfb\u52a0\u9700\u8981\u6ce8\u5165 polyfill \u7684\u989d\u5916\u6a21\u5757"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},"export default {\n   compilation: {\n     presetEnv: {\n      // include a package under node_modules\n      include: ['node_modules/package-name'],\n      options: {\n        targets: \"Chrome >= 48\"\n      }\n     }\n   },\n};\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u4f1a\u5c06\u76ee\u6807\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"> 0.25%, not dead"),"\u3002 \u5982\u679c\u4f60\u7684\u9879\u76ee\u4e0d\u9700\u8981\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\uff0c\u4f60\u53ef\u4ee5\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"targets"),"\u8bbe\u7f6e\u4e00\u4e2a\u66f4\u5bbd\u677e\u7684\u503c\uff0c\u90a3\u4e48\u6ce8\u5165\u7684 polyfills \u5c31\u4f1a\u66f4\u5c11\uff0c\u8f93\u51fa\u7684\u8d44\u6e90\u5927\u5c0f\u4e5f\u4f1a\u66f4\u5c0f\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u9009\u9879\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/docs/config/farm-config#presetenv"},"compilation.presetEnv"),"\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-scripttarget"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"script.target")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"script.target")," \u4e5f\u53ef\u4ee5\u5728\u751f\u6210\u4ee3\u7801\u65f6\u63a7\u5236\u76ee\u6807\u73af\u5883\u3002 \u5982\u679c\u60a8\u60f3\u5c06\u9879\u76ee\u964d\u7ea7\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"ES5"),"\uff0c\u60a8\u5e94\u8be5\u540c\u65f6\u8bbe\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},"export default {\n   compilation: {\n     script: {\n      target: 'ES5'\n     },\n     presetEnv: {\n      // include a package under node_modules\n      include: ['node_modules/package-name'],\n      options: {\n        targets: \"> 0.25%, not dead\"\n      }\n     }\n   },\n};\n")))}f.isMDXComponent=!0}}]);