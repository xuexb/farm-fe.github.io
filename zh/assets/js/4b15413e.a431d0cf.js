/*! For license information please see 4b15413e.a431d0cf.js.LICENSE.txt */
"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5926],{4772:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=r(1527),s=r(5696);const i={},t=void 0,l={id:"config/dev-server",title:"dev-server",description:"DevServer \u9009\u9879 - server",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/config/dev-server.md",sourceDirName:"config",slug:"/config/dev-server",permalink:"/zh/docs/config/dev-server",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/config/dev-server.md",tags:[],version:"current",frontMatter:{},sidebar:"configSidebar",previous:{title:"\u914d\u7f6e\u53c2\u8003",permalink:"/zh/docs/config/compilation-options"},next:{title:"environment-variable",permalink:"/zh/docs/config/environment-variable"}},c={},d=[{value:"DevServer \u9009\u9879 - server",id:"devserver-\u9009\u9879---server",level:2},{value:"port",id:"port",level:3},{value:"hmr",id:"hmr",level:3},{value:"<code>hmr.port</code>",id:"hmrport",level:4},{value:"<code>hmr.host</code>",id:"hmrhost",level:4},{value:"proxy",id:"proxy",level:3},{value:"open",id:"open",level:3},{value:"host",id:"host",level:3},{value:"plugins",id:"plugins",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"devserver-\u9009\u9879---server",children:"DevServer \u9009\u9879 - server"}),"\n",(0,o.jsx)(n.p,{children:"\u914d\u7f6e Farm Dev Server \u7684\u884c\u4e3a\u3002\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig) {\n  return config;\n}\n\nexport default defineConfig({\n  // \u6240\u6709 dev server \u9009\u9879\u90fd\u5728 server \u4e0b\u9762\n  server: {\n    port: 9000,\n    // ...\n  }\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u7c7b\u578b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface UserServerConfig {\n  port?: number;\n  // https?: boolean;\n  protocol?: 'http' | 'https';\n  hostname?: string;\n  // http2?: boolean;\n  hmr?: boolean | UserHmrConfig;\n  proxy?: Record<string, ProxiesOptions>;\n  strictPort?: boolean;\n  open?: boolean;\n  host?: string;\n  cors?: boolean | cors.Options;\n  // whether to serve static assets in spa mode, default to true\n  spa?: boolean;\n  plugins?: DevServerPlugin[];\n  writeToDisk?: boolean;\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"port",children:"port"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"}),": ",(0,o.jsx)(n.code,{children:"9000"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"DevServer \u76d1\u542c\u7684\u7aef\u53e3\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"hmr",children:"hmr"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"}),": \u5bf9\u4e8e start \u547d\u4ee4\u662f ",(0,o.jsx)(n.code,{children:"true"}),"\uff0c\u5176\u4ed6\u547d\u4ee4\u662f false"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u542f\u7528 HMR\uff0c\u5f00\u542f\u540e\u542f\u7528 HMR \u80fd\u529b\uff0c\u5c06\u4f1a\u76d1\u542c\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u5230\u7684\u6a21\u5757\u7684\u53d8\u52a8\uff0c\u5f53\u6a21\u5757\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u89e6\u53d1\u91cd\u7f16\u8bd1\u5e76\u5c06\u7ed3\u679c\u63a8\u9001\u7ed9 Farm Runtime \u8fdb\u884c\u66f4\u65b0\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u5bf9\u8c61\u6765\u914d\u7f6e HMR\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig) {\n  return config;\n}\n\nexport default defineConfig({\n  // \u6240\u6709 dev server \u9009\u9879\u90fd\u5728 server \u4e0b\u9762\n  server: {\n    hmr: {\n      // \u914d\u7f6e web socket \u76d1\u542c\u7684\u7aef\u53e3\n      port: 9802\n      // \u914d\u7f6e web socket \u76d1\u542c\u7684 host\n      host: 'localhost',\n      // \u914d\u7f6e\u6587\u4ef6\u76d1\u542c\u65f6\uff0c\u5ffd\u7565\u7684\u6587\u4ef6\n      ignores: ['auto_generated/*']\n    }\n    // ...\n  }\n});\n"})}),"\n",(0,o.jsx)(n.h4,{id:"hmrport",children:(0,o.jsx)(n.code,{children:"hmr.port"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"}),": ",(0,o.jsx)(n.code,{children:"9801"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Web Socket \u670d\u52a1\u5668\u76d1\u542c\u7684\u7aef\u53e3"}),"\n",(0,o.jsx)(n.h4,{id:"hmrhost",children:(0,o.jsx)(n.code,{children:"hmr.host"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"}),": ",(0,o.jsx)(n.code,{children:"localhost"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Web Socket \u670d\u52a1\u5668\u76d1\u542c\u7684 Host"}),"\n",(0,o.jsx)(n.h3,{id:"proxy",children:"proxy"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"}),": ",(0,o.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u914d\u7f6e\u670d\u52a1\u5668\u4ee3\u7406\u3002\u57fa\u4e8e ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/koa-proxies",children:"koa-proxies"})," \u5b9e\u73b0\uff0c\u5177\u4f53\u9009\u9879\u53c2\u8003\u5176\u6587\u6863\uff0c\u793a\u4f8b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig) {\n  return config;\n}\n\nexport default defineConfig({\n   server: {\n    proxy: {\n      '/api': {\n        target: 'https://music-erkelost.vercel.app/banner',\n        changeOrigin: true,\n        rewrite: (path: any) => path.replace(/^\\/api/, ''),\n      },\n    },\n  },\n});\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"open",children:"open"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"}),": ",(0,o.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u7f16\u8bd1\u5b8c\u6210\u540e\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\u5230\u5bf9\u5e94\u7684\u9875\u9762\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"host",children:"host"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"}),": ",(0,o.jsx)(n.code,{children:"localhost"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Dev Server \u76d1\u542c\u7684 host\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"plugins",children:"plugins"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"}),": ",(0,o.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u914d\u7f6e Farm \u7684 Dev Server \u63d2\u4ef6\uff0c\u901a\u8fc7 Dev Server \u63d2\u4ef6\u53ef\u4ee5\u6269\u5c55 DevServer \u7684\u4e0a\u4e0b\u6587\uff0c\u6dfb\u52a0 middleware \u7b49\u3002\u63d2\u4ef6\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u63d2\u4ef6\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export function hmrPlugin(devServer: DevServer) {\n  const { config, logger } = devServer;\n  if (config.hmr) {\n    devServer.ws = new WebSocketServer({\n      port: config.hmr.port,\n      host: config.hmr.host\n    });\n    devServer.app().use(hmr(devServer));\n    devServer.hmrEngine = new HmrEngine(devServer.getCompiler(), devServer, logger);\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u7136\u540e\u5c06\u8be5\u63d2\u4ef6\u914d\u7f6e\u5230 ",(0,o.jsx)(n.code,{children:"server.plugins"})," \u4e2d\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},3354:(e,n,r)=>{var o=r(959),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var o,i={},d=null,h=null;for(o in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(h=n.ref),n)t.call(n,o)&&!c.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:s,type:e,key:d,ref:h,props:i,_owner:l.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},1527:(e,n,r)=>{e.exports=r(3354)},5696:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var o=r(959);const s={},i=o.createContext(s);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);