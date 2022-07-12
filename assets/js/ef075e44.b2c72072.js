"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"rover-ignite",sidebar_position:4},i="Rover Ignite",l={unversionedId:"rover/rover-ignite",id:"rover/rover-ignite",title:"Rover Ignite",description:"Introduction to rover ignite",source:"@site/docs/rover/ignite.md",sourceDirName:"rover",slug:"/rover/rover-ignite",permalink:"/documentation/docs/rover/rover-ignite",draft:!1,editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/rover/ignite.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rover-ignite",sidebar_position:4},sidebar:"cafSidebar",previous:{title:"Rover commands",permalink:"/documentation/docs/rover/rover-commands"},next:{title:"Using Terraform Cloud for state management",permalink:"/documentation/docs/rover/rover-tfc"}},s={},c=[{value:"Introduction to rover ignite",id:"introduction-to-rover-ignite",level:2},{value:"Overview",id:"overview",level:3},{value:"Languages",id:"languages",level:3},{value:"Command reference",id:"command-reference",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rover-ignite"},"Rover Ignite"),(0,o.kt)("h2",{id:"introduction-to-rover-ignite"},"Introduction to rover ignite"),(0,o.kt)("p",null,"We know that creating a coherent stack of configuration files for an organization can be error-prone. Rover ignite is an iterative tool to get you started with various configurations and creates for you the set of files needed to deploy a complete environment."),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Rover ignite commands will take the templated configuration files, and will generate for you the different elements according to your settings, including the readme files."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Overview of rover ignite",src:n(5448).Z,width:"1844",height:"810"})),(0,o.kt)("h3",{id:"languages"},"Languages"),(0,o.kt)("p",null,"Rover ignite is ingesting YAML files as templates that will generate both the tfvars files, readme and soon pipelines."),(0,o.kt)("h3",{id:"command-reference"},"Command reference"),(0,o.kt)("p",null,"Typical rover ignite command looks like this (however, generally speaking across CAF, we will give you specific instructions on how to use it best):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rover ignite \\\n  --playbook /tf/caf/landingzones/templates/platform/ansible.yaml \\\n  -e base_templates_folder=/tf/caf/landingzones/templates/platform \\\n  -e resource_template_folder=/tf/caf/landingzones/templates/resources \\\n  -e config_folder=/tf/caf/definitions/single_reuse/platform \\\n  -e landingzones_folder=/tf/caf/landingzones\n")),(0,o.kt)("p",null,"Reference arguments:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-playbook"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Path to the root configuration Ansible playbook.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-e base_templates_folder"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Path to the set of Ansible templates for the platform Terraform landing zone.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-e resource_template_folder"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Path to the set of Jinja templates used for Azure resources instantiation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-e config_folder"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Path to the set of functional templates for landing zones - depending on the scenario you pick from the templates directory inside landing zones.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-e landingzones_folder"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Path to root of landing zones logic folder.")))))}p.isMDXComponent=!0},5448:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rover-ignite-fc1531b51eb912f475c95ed7df1eded6.png"}}]);