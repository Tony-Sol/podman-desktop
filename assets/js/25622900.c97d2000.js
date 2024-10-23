"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96831],{16377:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=i(62540),t=i(43023);const s={sidebar_position:4,title:"Creating a cluster",description:"Creating a local Minikube-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","minikube"],tags:["migrating-to-kubernetes","minikube"]},o="Creating a local Minikube-powered Kubernetes cluster",c={id:"minikube/creating-a-minikube-cluster",title:"Creating a cluster",description:"Creating a local Minikube-powered Kubernetes cluster.",source:"@site/docs/minikube/creating-a-minikube-cluster.md",sourceDirName:"minikube",slug:"/minikube/creating-a-minikube-cluster",permalink:"/docs/minikube/creating-a-minikube-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/minikube/creating-a-minikube-cluster.md",tags:[{inline:!0,label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{inline:!0,label:"minikube",permalink:"/docs/tags/minikube"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Creating a cluster",description:"Creating a local Minikube-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","minikube"],tags:["migrating-to-kubernetes","minikube"]},sidebar:"mySidebar",previous:{title:"Configuring Podman",permalink:"/docs/minikube/configuring-podman-for-minikube-on-windows"},next:{title:"Working with a cluster",permalink:"/docs/minikube/working-with-your-local-minikube-cluster"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Icon:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"creating-a-local-minikube-powered-kubernetes-cluster",children:"Creating a local Minikube-powered Kubernetes cluster"})}),"\n",(0,r.jsx)(n.p,{children:"You can create multiple local Minikube-powered Kubernetes clusters."}),"\n",(0,r.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/minikube/installing",children:"You installed Minikube"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/minikube/configuring-podman-for-minikube-on-windows",children:"On Windows, you configured Podman"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(i,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the Minikube tile, click on the ",(0,r.jsx)(n.strong,{children:"Create new ..."})," button."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Choose your options, and click the ",(0,r.jsx)(n.strong,{children:"Create"})," button."]}),"\n",(0,r.jsx)(n.p,{children:"The defaults are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Name: ",(0,r.jsx)(n.code,{children:"minikube"})]}),"\n",(0,r.jsxs)(n.li,{children:["Driver: ",(0,r.jsx)(n.code,{children:"podman"})]}),"\n",(0,r.jsxs)(n.li,{children:["Container runtime: ",(0,r.jsx)(n.code,{children:"cri-o"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(Optionally) Click the ",(0,r.jsx)(n.strong,{children:"Show logs"})," button to display the logs."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After successful creation, click on the ",(0,r.jsx)(n.strong,{children:"Go back to resources"})," button"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(i,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]}),", in the ",(0,r.jsx)(n.strong,{children:"Minikube"})," tile, your ",(0,r.jsx)(n.code,{children:"<minikube>"})," instance is running."]}),"\n",(0,r.jsxs)(n.li,{children:["In the Podman Desktop tray, open the ",(0,r.jsx)(n.strong,{children:"Kubernetes"})," menu, you can set the context to your Minikube cluster: ",(0,r.jsx)(n.code,{children:"minikube"}),"."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var r=i(63696);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);