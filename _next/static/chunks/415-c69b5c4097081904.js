"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{9855:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(5893),o=n(9008),i=n.n(o),a=n(1163);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}var s={title:"Next.js + Tailwind CSS + TypeScript Starter",siteName:"Next.js + Tailwind CSS + TypeScript Starter",description:"A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky",url:"https://tsnext-tw.thcl.dev",type:"website",robots:"follow, index",image:""};function p(e){var t=(0,a.useRouter)(),n=l({},s,e);return n.title=e.templateTitle?"".concat(e.templateTitle," | ").concat(n.siteName):n.title,n.image=function(e){var t=e.siteName,n=e.templateTitle,r=e.description,o=e.logo,i=encodeURIComponent(void 0===o?"https://og.thcl.dev/images/logo.jpg":o),a=encodeURIComponent(t.trim()),c=n?encodeURIComponent(n.trim()):void 0,l=encodeURIComponent(r.trim());return"https://og.thcl.dev/api/general?siteName=".concat(a,"&description=").concat(l,"&logo=").concat(i).concat(c?"&templateTitle=".concat(c):"")}({description:n.description,siteName:e.templateTitle?n.siteName:n.title,templateTitle:e.templateTitle}),(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:n.title}),(0,r.jsx)("meta",{name:"robots",content:n.robots}),(0,r.jsx)("meta",{content:n.description,name:"description"}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(n.url).concat(t.asPath)}),(0,r.jsx)("link",{rel:"canonical",href:"".concat(n.url).concat(t.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:n.type}),(0,r.jsx)("meta",{property:"og:site_name",content:n.siteName}),(0,r.jsx)("meta",{property:"og:description",content:n.description}),(0,r.jsx)("meta",{property:"og:title",content:n.title}),(0,r.jsx)("meta",{name:"image",property:"og:image",content:n.image}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@th_clarence"}),(0,r.jsx)("meta",{name:"twitter:title",content:n.title}),(0,r.jsx)("meta",{name:"twitter:description",content:n.description}),(0,r.jsx)("meta",{name:"twitter:image",content:n.image}),n.date&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{property:"article:published_time",content:n.date}),(0,r.jsx)("meta",{name:"publish_date",property:"og:publish_date",content:n.date}),(0,r.jsx)("meta",{name:"author",property:"article:author",content:"Theodorus Clarence"})]}),f.map((function(e){return(0,r.jsx)("link",l({},e),e.href)})),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"/favicon/ms-icon-144x144.png"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"})]})}var f=[{rel:"apple-touch-icon",sizes:"57x57",href:"/favicon/apple-icon-57x57.png"},{rel:"apple-touch-icon",sizes:"60x60",href:"/favicon/apple-icon-60x60.png"},{rel:"apple-touch-icon",sizes:"72x72",href:"/favicon/apple-icon-72x72.png"},{rel:"apple-touch-icon",sizes:"76x76",href:"/favicon/apple-icon-76x76.png"},{rel:"apple-touch-icon",sizes:"114x114",href:"/favicon/apple-icon-114x114.png"},{rel:"apple-touch-icon",sizes:"120x120",href:"/favicon/apple-icon-120x120.png"},{rel:"apple-touch-icon",sizes:"144x144",href:"/favicon/apple-icon-144x144.png"},{rel:"apple-touch-icon",sizes:"152x152",href:"/favicon/apple-icon-152x152.png"},{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-icon-180x180.png"},{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicon/android-icon-192x192.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon/favicon-96x96.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"},{rel:"manifest",href:"/favicon/manifest.json"}]},5491:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5893);n(7294);function o(e){var t=e.children;return(0,r.jsx)(r.Fragment,{children:t})}},5054:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(5893),o=(n(7294),n(3410)),i=n(589);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e){var t=e.children,n=e.className,l=e.direction,s=void 0===l?"right":l,p=e.as,f=c(e,["children","className","direction","as"]),u=p||i.Z;return(0,r.jsxs)(u,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,{className:(0,o.Z)("group gap-[0.25em]","left"===s&&"flex-row-reverse",n),children:[(0,r.jsx)("span",{children:t}),(0,r.jsxs)("svg",{viewBox:"0 0 16 16",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:(0,o.Z)("relative","transition-transform duration-200","right"===s?"motion-safe:-translate-x-1":"rotate-180","group-hover:translate-x-0"),children:[(0,r.jsx)("path",{fill:"currentColor",d:"M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"}),(0,r.jsx)("path",{stroke:"currentColor",d:"M1.75 8H11",strokeWidth:"1.5",strokeLinecap:"round",className:(0,o.Z)("origin-left transition-all duration-200","opacity-0 motion-safe:-translate-x-1","group-hover:translate-x-0 group-hover:opacity-100")})]})]}))}},589:function(e,t,n){var r=n(5893),o=n(7294),i=n(3410),a=n(4775);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.forwardRef((function(e,t){var n=e.children,o=e.className,s=l(e,["children","className"]);return(0,r.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({ref:t},s,{className:(0,i.Z)("animated-underline custom-link inline-flex items-center font-semibold","focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2","border-b border-dotted border-dark hover:border-black/0",o),children:n}))}));t.Z=s},4775:function(e,t,n){var r=n(5893),o=n(1664),i=n.n(o),a=n(7294),c=n(3410);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=a.forwardRef((function(e,t){var n=e.children,o=e.href,a=e.openNewTab,l=e.className,f=e.nextLinkProps,u=p(e,["children","href","openNewTab","className","nextLinkProps"]);return(void 0!==a?a:o&&!o.startsWith("/")&&!o.startsWith("#"))?(0,r.jsx)("a",s({ref:t,target:"_blank",rel:"noopener noreferrer",href:o},u,{className:(0,c.Z)("cursor-newtab",l),children:n})):(0,r.jsx)(i(),s({href:o},f,{children:(0,r.jsx)("a",s({ref:t},u,{className:l,children:n}))}))}));t.Z=f},3410:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(6010),o=n(4734);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m)(r.Z.apply(void 0,a(t)))}}}]);