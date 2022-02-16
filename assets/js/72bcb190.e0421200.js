"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[200],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8039:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"eslz-intro",sidebar_position:1},l="Getting started",c={unversionedId:"enterprise-scale/landingzones/eslz-intro",id:"enterprise-scale/landingzones/eslz-intro",title:"Getting started",description:"Deploy your first platform landing zones",source:"@site/docs/enterprise-scale/landingzones/intro.md",sourceDirName:"enterprise-scale/landingzones",slug:"/enterprise-scale/landingzones/eslz-intro",permalink:"/documentation/docs/enterprise-scale/landingzones/eslz-intro",editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/enterprise-scale/landingzones/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"eslz-intro",sidebar_position:1},sidebar:"cafSidebar",previous:{title:"Using Terraform Cloud for state management",permalink:"/documentation/docs/rover/rover-tfc"},next:{title:"Setup your organization",permalink:"/documentation/docs/enterprise-scale/landingzones/platform/org-setup"}},u=[{value:"Deploy your first platform landing zones",id:"deploy-your-first-platform-landing-zones",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"deploy-your-first-platform-landing-zones"},"Deploy your first platform landing zones"),(0,i.kt)("p",null,"In this tutorial you are going to learn how to build the Azure Platform Landing zones with the Cloud Adoption Framework (CAF) for Azure Terraform landing zones. It is a framework that requires to have both ",(0,i.kt)("strong",{parentName:"p"},"advanced knowledge of Terraform and Azure services"),"."),(0,i.kt)("p",null,"It is assumed the reader has already deep knowledge of the CAF (",(0,i.kt)("a",{parentName:"p",href:"https://aka.ms/caf"},"https://aka.ms/caf"),").\nIt is recommended to be certified to the Azure Architecture track."),(0,i.kt)("p",null,"This tutorial will guide you on how to deploy the Platform landing zones and includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure Remote State management (launchpad)"),(0,i.kt)("li",{parentName:"ul"},"Enterprise Scale for management groups, policy definitions, policy assignments and RBAC"),(0,i.kt)("li",{parentName:"ul"},"Identity services (Azure Active Directory Services, extend your on-premise Active Directory Domain Services...)"),(0,i.kt)("li",{parentName:"ul"},"Monitoring services"),(0,i.kt)("li",{parentName:"ul"},"Connectivity services (virtual WAN, private DNS zones, egress firewall...)")),(0,i.kt)("p",null,"The steps in the tutorial will guide you through the following process:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Creation of enterprise-scale environment",src:n(5931).Z,width:"1836",height:"822"})))}d.isMDXComponent=!0},5931:function(e,t,n){t.Z=n.p+"assets/images/process-eslz-f812f6b25bae27a5b8f2dcd9e1e36234.png"}}]);