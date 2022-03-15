"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[682],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=n,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return t?o.createElement(d,i(i({ref:r},s),{},{components:t})):o.createElement(d,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2364:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var o=t(7462),n=t(3366),a=(t(7294),t(3905)),i=["components"],c={id:"rover-tfc",sidebar_position:5},l="Using Terraform Cloud for state management",u={unversionedId:"rover/rover-tfc",id:"rover/rover-tfc",title:"Using Terraform Cloud for state management",description:"Workspace configuration",source:"@site/docs/rover/tfc.md",sourceDirName:"rover",slug:"/rover/rover-tfc",permalink:"/documentation/docs/rover/rover-tfc",editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/rover/tfc.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"rover-tfc",sidebar_position:5},sidebar:"cafSidebar",previous:{title:"Rover Ignite",permalink:"/documentation/docs/rover/rover-ignite"},next:{title:"Getting started",permalink:"/documentation/docs/enterprise-scale/landingzones/eslz-intro"}},s=[{value:"Workspace configuration",id:"workspace-configuration",children:[],level:2},{value:"Workspace Execution Mode",id:"workspace-execution-mode",children:[],level:2},{value:"Steps to enable configuration",id:"steps-to-enable-configuration",children:[],level:2},{value:"Workspace Creation",id:"workspace-creation",children:[],level:2}],p={toc:s};function f(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-terraform-cloud-for-state-management"},"Using Terraform Cloud for state management"),(0,a.kt)("h2",{id:"workspace-configuration"},"Workspace configuration"),(0,a.kt)("p",null,"You can use Terraform Cloud or Terraform Enterprise to support CAF Terraform landing zones state files."),(0,a.kt)("p",null,"Current support is for levels 3 and 4 (composition must be done with a launchpad stored on CAF Azure Storage Account)."),(0,a.kt)("p",null,"For a landing zone in a given level, we can read and compose from Terraform state files on CAF Azure Storage account for the lower level. We are planning to support composition from lower levels stored on TFC/TFE storage in a future update."),(0,a.kt)("h2",{id:"workspace-execution-mode"},"Workspace Execution Mode"),(0,a.kt)("p",null,"Please make you select the Execution Mode to be ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," in Terraform Cloud or Terraform Enterprise Configuration, this is currently the only supported method."),(0,a.kt)("h2",{id:"steps-to-enable-configuration"},"Steps to enable configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Login to Terraform Cloud/Enterprise")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"terraform login\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Export the token and environment information")),(0,a.kt)("p",null,"The following commands allow you to define the configuration for your TFC organization, hostname and the name of the workspace where to store the Terraform state files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export TERRAFORM_CONFIG="$HOME/.terraform.d/credentials.tfrc.json"\nexport TFC_organization="contoso" #name of your TFC/TFE organization.\nexport TFC_hostname="tfc.contoso.local" #optional, only for TFE.\nexport TF_VAR_workspace"networking-virtualwan-vwan-level2" #name of the workspace where to store the state file.\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run your ",(0,a.kt)("inlineCode",{parentName:"li"},"rover")," command")),(0,a.kt)("p",null,"For any particular rover command you are using, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"-tfc")," parameter to switch to TFC/TFE storage instead of CAF Azure Storage hierarchy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rover ... -tfc \n")),(0,a.kt)("h2",{id:"workspace-creation"},"Workspace Creation"),(0,a.kt)("p",null,"You can create your Terraform Cloud organization and workspaces manually, or if you are looking after an automated way to create them, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/caf-terraform-landingzones/tree/master/caf_solution/add-ons/terraform_cloud"},"CAF Terraform TFC/TFE Addon"),"."))}f.isMDXComponent=!0}}]);