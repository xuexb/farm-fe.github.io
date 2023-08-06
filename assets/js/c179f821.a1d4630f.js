"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[3699],{5467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>S,contentTitle:()=>j,default:()=>B,frontMatter:()=>I,metadata:()=>E,toc:()=>V});var r=a(1163),n=a(9496),o=a(9613),l=a(3067),u=a(5924),i=a(9866),s=a(3442),c=a(2981),p=a(1267),m=a(1552);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function f(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=f(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,s]=k({queryString:a,groupId:r}),[c,p]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,m.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),d=(()=>{const e=i??c;return b({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{d&&u(d)}),[d]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),p(e)}),[s,p,o]),tabValues:o}}var y=a(3537);const v={tabList:"tabList_t2F_",tabItem:"tabItem_TXTv"};function g(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==o&&(p(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,u.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function T(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=h(e);return n.createElement("div",{className:(0,u.Z)("tabs-container",v.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(T,(0,r.Z)({},e,t)))}function N(e){const t=(0,y.Z)();return n.createElement(x,(0,r.Z)({key:String(t)},e))}const w={tabItem:"tabItem_rlDe"};function C(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,u.Z)(w.tabItem,r),hidden:a},t)}const I={sidebar_position:1},j="Quick Start",E={unversionedId:"quick-start",id:"quick-start",title:"Quick Start",description:"Farm needs Node 16 and above. And if you are using Linux, please make sure your os version is ubuntu 22 and above(or with GLIBC >= 2.32).",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Why Farm?",permalink:"/docs/why-farm"}},S={},V=[{value:"1. Create a Farm Project",id:"1-create-a-farm-project",level:2},{value:"2. Start the Project",id:"2-start-the-project",level:2},{value:"3. Configuring the Project",id:"3-configuring-the-project",level:2},{value:"4. Building the project",id:"4-building-the-project",level:2},{value:"Next Steps",id:"next-steps",level:2}],Z={toc:V},q="wrapper";function B(e){let{components:t,...a}=e;return(0,o.kt)(q,(0,r.Z)({},Z,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Farm needs ",(0,o.kt)("strong",{parentName:"p"},"Node 16 and above"),". And if you are using Linux, please make sure your os version is ",(0,o.kt)("strong",{parentName:"p"},"ubuntu 22")," and above(",(0,o.kt)("strong",{parentName:"p"},"or with GLIBC >= 2.32"),").")),(0,o.kt)("h2",{id:"1-create-a-farm-project"},"1. Create a Farm Project"),(0,o.kt)(N,{mdxType:"Tabs"},(0,o.kt)(C,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"npm create farm@latest")),(0,o.kt)(C,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"yarn create farm")),(0,o.kt)(C,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"pnpm create farm"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Then follow the prompts!"),(0,o.kt)("p",{parentName:"admonition"},"You can also directly specify the project name and the template you want to use via additional command line options:")),(0,o.kt)(N,{mdxType:"Tabs"},(0,o.kt)(C,{value:"npm 6.x",label:"npm 6.x",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"npm create farm@latest my-vue-app --template react")),(0,o.kt)(C,{value:"npm 7+",label:"npm 7+",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"npm create farm@latest my-vue-app -- --template vue")),(0,o.kt)(C,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"yarn create farm my-vue-app --template react")),(0,o.kt)(C,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"pnpm create farm my-vue-app --template vue"))),(0,o.kt)("h2",{id:"2-start-the-project"},"2. Start the Project"),(0,o.kt)("p",null,"Choose the package manager you like, then the dependencies will be installded automatically.\nThen, start the project:"),(0,o.kt)(N,{mdxType:"Tabs"},(0,o.kt)(C,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"cd farm-project && npm start")),(0,o.kt)(C,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"cd farm-project && yarn start")),(0,o.kt)(C,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"cd farm-project && pnpm start"))),(0,o.kt)("p",null,"The project will start at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9000")," by default."),(0,o.kt)("h2",{id:"3-configuring-the-project"},"3. Configuring the Project"),(0,o.kt)("p",null,"The project is configured by ",(0,o.kt)("inlineCode",{parentName:"p"},"farm.config.ts/js/mjs")," file in the root directory of the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},'import type { UserConfig } from "@farmfe/core";\n\nexport default <UserConfig>{\n  // Options related to the compilation\n  compilation: {\n    input: {\n      // can be a relative path or an absolute path\n      index: "./index.html",\n    },\n    output: {\n      path: "./build",\n      publicPath: "/",\n    },\n    // ...\n  },\n  // Options related to the dev server\n  server: {\n    port: 9000,\n    // ...\n  },\n  // Additional plugins\n  plugins: [],\n};\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Refer to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/config/farm-config"},"Config Reference"))," for more details of configuring Farm.")),(0,o.kt)("h2",{id:"4-building-the-project"},"4. Building the project"),(0,o.kt)("p",null,"Build the Farm project as production-ready static files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"The built product is downgraded to ES5 by default, and the product will be compressed and Tree Shake. If you want to preview the build product locally, you can execute ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run preview")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"npx farm preview"),"."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/why-farm"},"Why Farm?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/features/html"},"Features")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config/farm-config"},"Config Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/plugins/overview"},"Plugins"))))}B.isMDXComponent=!0}}]);