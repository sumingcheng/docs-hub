"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["57050"],{37097:function(e,t,n){n.d(t,{b:function(){return o},k:function(){return a}});var i=n(85893),s=n(67294),r=n(11934);let l=s.createContext(null);function o(e){let{children:t,content:n}=e,r=(0,s.useMemo)(()=>({metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,contentTitle:n.contentTitle,toc:n.toc}),[n]);return(0,i.jsx)(l.Provider,{value:r,children:t})}function a(){let e=(0,s.useContext)(l);if(null===e)throw new r.i6("DocProvider");return e}},87739:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(85893);n(67294);var s=n(67026),r=n(74385),l=n(66171),o=n(64926);function a(e){let{className:t}=e;return(0,i.jsx)(o.Z,{type:"caution",title:(0,i.jsx)(r.cI,{}),className:(0,s.Z)(t,l.k.common.unlistedBanner),children:(0,i.jsx)(r.eU,{})})}function c(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.T$,{}),(0,i.jsx)(a,{...e})]})}},81046:function(e,t,n){n.d(t,{Z:()=>d});var i=n("85893");n("67294");var s=n("67026"),r=n("74385"),l=n("66171"),o=n("64926");function a(e){let{className:t}=e;return(0,i.jsx)(o.Z,{type:"caution",title:(0,i.jsx)(r.ht,{}),className:(0,s.Z)(t,l.k.common.draftBanner),children:(0,i.jsx)(r.xo,{})})}var c=n("87739");function d(e){let{metadata:t}=e,{unlisted:n,frontMatter:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(n||s.unlisted)&&(0,i.jsx)(c.Z,{}),s.draft&&(0,i.jsx)(a,{})]})}},5872:function(e,t,n){n.d(t,{Z:()=>f});var i=n("85893");n("67294");var s=n("67026"),r=n("66171"),l=n("86563"),o=n("23868"),a=n("53367"),c=n("7670"),d=n("83187");function u(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function m(){let e=(0,d.ZP)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(a.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(u,{className:"breadcrumbHomeIcon_YNFT"})})})}function h(e){let{children:t,href:n,isLast:s}=e,r="breadcrumbs__link";return s?(0,i.jsx)("span",{className:r,itemProp:"name",children:t}):n?(0,i.jsx)(a.Z,{className:r,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:r,children:t})}function b(e){let{children:t,active:n,index:r,addMicrodata:l}=e;return(0,i.jsxs)("li",{...l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(r+1)})]})}function f(){let e=(0,l.s1)(),t=(0,o.Ns)();return e?(0,i.jsx)("nav",{className:(0,s.Z)(r.k.docs.docBreadcrumbs,"breadcrumbsContainer_Z_bl"),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(m,{}),e.map((t,n)=>{let s=n===e.length-1,r="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(b,{active:s,index:n,addMicrodata:!!r,children:(0,i.jsx)(h,{href:r,isLast:s,children:t.label})},n)})]})}):null}},57073:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(85893);n(67294);var s=n(67026),r=n(66171),l=n(37097),o=n(56671),a=n(6360);function c(){let{metadata:e}=(0,l.k)(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:c,tags:d}=e,u=d.length>0,m=!!(t||n||c);return u||m?(0,i.jsxs)("footer",{className:(0,s.Z)(r.k.docs.docFooter,"docusaurus-mt-lg"),children:[u&&(0,i.jsx)("div",{className:(0,s.Z)("row margin-top--sm",r.k.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(o.Z,{tags:d})})}),m&&(0,i.jsx)(a.Z,{className:(0,s.Z)("margin-top--sm",r.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:c})]}):null}},86432:function(e,t,n){n.r(t),n.d(t,{default:()=>B});var i=n("85893");n("67294");var s=n("39890"),r=n("37097");function l(){let{metadata:e,frontMatter:t,assets:n}=(0,r.k)();return(0,i.jsx)(s.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var o=n("67026"),a=n("37550"),c=n("26890");function d(){let{metadata:e}=(0,r.k)();return(0,i.jsx)(c.Z,{previous:e.previous,next:e.next})}var u=n("89548"),m=n("71987"),h=n("4417"),b=n("66171"),f=n("26850"),x=n("86643"),v=n("7670");let p={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function j(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,o.Z)("clean-btn",p.tocCollapsibleButton,!t&&p.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let g={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Z(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:r}=e,{collapsed:l,toggleCollapsed:a}=(0,f.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,o.Z)(g.tocCollapsible,!l&&g.tocCollapsibleExpanded,n),children:[(0,i.jsx)(j,{collapsed:l,onClick:a}),(0,i.jsx)(f.z,{lazy:!0,className:g.tocCollapsibleContent,collapsed:l,children:(0,i.jsx)(x.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:r})})]})}function k(){let{toc:e,frontMatter:t}=(0,r.k)();return(0,i.jsx)(Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,o.Z)(b.k.docs.docTocMobile,"tocMobile_ITEo")})}var _=n("79521");function C(){let{toc:e,frontMatter:t}=(0,r.k)();return(0,i.jsx)(_.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.k.docs.docTocDesktop})}var N=n("46055"),L=n("44719");function T(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=(0,r.k)();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,o.Z)(b.k.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(N.Z,{as:"h1",children:n})}),(0,i.jsx)(L.Z,{children:t})]})}var y=n("5872"),E=n("81046");let I={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function w(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=(0,r.k)(),n=(0,a.i)(),s=e.hide_table_of_contents,l=!s&&t.length>0;return{hidden:s,mobile:l?(0,i.jsx)(k,{}):void 0,desktop:l&&("desktop"===n||"ssr"===n)?(0,i.jsx)(C,{}):void 0}}(),{metadata:s}=(0,r.k)();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,o.Z)("col",!n.hidden&&I.docItemCol),children:[(0,i.jsx)(E.Z,{metadata:s}),(0,i.jsx)(u.Z,{}),(0,i.jsxs)("div",{className:I.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(y.Z,{}),(0,i.jsx)(m.Z,{}),n.mobile,(0,i.jsx)(T,{children:t}),(0,i.jsx)(h.Z,{})]}),(0,i.jsx)(d,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function B(e){let t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(r.b,{content:e.content,children:(0,i.jsxs)(s.FG,{className:t,children:[(0,i.jsx)(l,{}),(0,i.jsx)(w,{children:(0,i.jsx)(n,{})})]})})}},26890:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(85893);n(67294);var s=n(7670),r=n(68007);function l(e){let{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(r.Z,{...t,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(r.Z,{...n,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},71987:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(85893);n(67294);var s=n(67026),r=n(7670),l=n(66171),o=n(89873);function a(e){let{className:t}=e,n=(0,o.E)();return n.badge?(0,i.jsx)("span",{className:(0,s.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},89548:function(e,t,n){n.d(t,{Z:function(){return x}});var i=n(85893);n(67294);var s=n(67026),r=n(87262),l=n(53367),o=n(7670),a=n(18854),c=n(66171),d=n(37137),u=n(89873);let m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){let t=m[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(l.Z,{to:n,onClick:s,children:(0,i.jsx)(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:l}}=(0,r.Z)(),{pluginId:o}=(0,a.gA)({failfast:!0}),{savePreferredVersionName:u}=(0,d.J)(o),{latestDocSuggestion:m,latestVersionSuggestion:f}=(0,a.Jo)(o),x=m??f.docs.find(e=>e.id===f.mainDocId);return(0,i.jsxs)("div",{className:(0,s.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(h,{siteTitle:l,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(b,{versionLabel:f.label,to:x.path,onClick:()=>u(f.name)})})]})}function x(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,i.jsx)(f,{className:t,versionMetadata:n}):null}},79521:function(e,t,n){n.d(t,{Z:()=>l});var i=n("85893");n("67294");var s=n("67026"),r=n("86643");function l(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,s.Z)("tableOfContents_bqdL","thin-scrollbar",t),children:(0,i.jsx)(r.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},86643:function(e,t,n){n.d(t,{Z:()=>c});var i=n("85893"),s=n("67294"),r=n("66009");function l(e){let t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}var o=n("53367");let a=s.memo(function e(t){let{toc:n,className:s,linkClassName:r,isChild:l}=t;return n.length?(0,i.jsx)("ul",{className:l?void 0:s,children:n.map(t=>(0,i.jsxs)("li",{children:[(0,i.jsx)(o.Z,{to:`#${t.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,i.jsx)(e,{isChild:!0,toc:t.children,className:s,linkClassName:r})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,r.L)(),b=d??h.tableOfContents.minHeadingLevel,f=u??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:i,maxHeadingLevel:s}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:i,maxHeadingLevel:s});return t.level>=i&&t.level<=s?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t});let i=[];return t.forEach(e=>{let{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):i.push(s)}),i}(t),minHeadingLevel:n,maxHeadingLevel:i}),[t,n,i])}({toc:t,minHeadingLevel:b,maxHeadingLevel:f});return!function(e){let t=(0,s.useRef)(void 0),n=function(){let e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,s.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,s.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:i,linkActiveClassName:s,minHeadingLevel:r,maxHeadingLevel:o}=e;function a(){let e=Array.from(document.getElementsByClassName(i)),a=function(e,t){let{anchorTopOffset:n}=t,i=e.find(e=>l(e).top>=n);if(i){var s;return(s=l(i)).top>0&&s.bottom<window.innerHeight/2?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,i=[];for(let e=t;e<=n;e+=1)i.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),{anchorTopOffset:n.current}),c=e.find(e=>a&&a.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===c?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)})}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}},[e,n])}((0,s.useMemo)(()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:f}},[o,c,b,f])),(0,i.jsx)(a,{toc:x,className:n,linkClassName:o,...m})}},74385:function(e,t,n){n.d(t,{T$:function(){return a},cI:function(){return l},eU:function(){return o},ht:function(){return c},xo:function(){return d}});var i=n(85893);n(67294);var s=n(7670),r=n(11199);function l(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function a(){return(0,i.jsx)(r.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},30206:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(85893),s=n(67294);function r({id:e,host:t,repo:r,repoId:l,category:o,categoryId:a,mapping:c,term:d,strict:u,reactionsEnabled:m,emitMetadata:h,inputPosition:b,theme:f,lang:x,loading:v}){let[p,j]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{p||(n.e("78260").then(n.bind(n,30671)),j(!0))},[]),p?(0,i.jsx)("giscus-widget",{id:e,host:t,repo:r,repoid:l,category:o,categoryid:a,mapping:c,term:d,strict:u,reactionsenabled:m,emitmetadata:h,inputposition:b,theme:f,lang:x,loading:v}):null}}}]);