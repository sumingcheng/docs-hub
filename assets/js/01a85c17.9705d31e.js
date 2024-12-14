"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["40565"],{41835:function(e,t,a){a.d(t,{CS:()=>f,iZ:()=>b,ci:()=>_,Ne:()=>Z,cH:()=>k,nO:()=>u,wj:()=>s,n4:()=>c});var n=a("85893"),r=a("67294"),l=a("85346"),i=a("78312");function s(){let e=(0,i.Z)(),t=e?.data?.blogMetadata;if(!t)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}let o=r.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:l=!1}=e,i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,r.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}),[t,a])}({content:a,isBlogPostPage:l});return(0,n.jsx)(o.Provider,{value:i,children:t})}function u(){let e=(0,r.useContext)(o);if(null===e)throw new l.i6("BlogPostProvider");return e}var m=a("4757"),d=a("2933");let g=e=>new Date(e).toISOString();function h(e){let t=e.map(j);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:function(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(e){let{siteConfig:t}=(0,d.Z)(),{withBaseUrl:a}=(0,m.Cg)(),{metadata:{blogDescription:n,blogTitle:r,permalink:l}}=e,i=`${t.url}${l}`;return{"@context":"https://schema.org","@type":"Blog","@id":i,mainEntityOfPage:i,headline:r,description:n,blogPost:e.items.map(e=>(function(e,t,a){let{assets:n,frontMatter:r,metadata:l}=e,{date:i,title:s,description:o,lastUpdatedAt:c}=l,u=n.image??r.image,m=r.keywords??[],d=`${t.url}${l.permalink}`,f=c?g(c):void 0;return{"@type":"BlogPosting","@id":d,mainEntityOfPage:d,url:d,headline:s,name:s,description:o,datePublished:i,...f?{dateModified:f}:{},...h(l.authors),...p(u,a,s),...m?{keywords:m}:{}}})(e.content,t,a))}}function b(){let e=s(),{assets:t,metadata:a}=u(),{siteConfig:n}=(0,d.Z)(),{withBaseUrl:r}=(0,m.Cg)(),{date:l,title:i,description:o,frontMatter:c,lastUpdatedAt:f}=a,b=t.image??c.image,j=c.keywords??[],x=f?g(f):void 0,v=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:i,name:i,description:o,datePublished:l,...x?{dateModified:x}:{},...h(a.authors),...p(b,r,i),...j?{keywords:j}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function j(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}var x=a("16550"),v=a("83012"),N=a("38341"),C=a("79246");function k(e){let{pathname:t}=(0,x.TH)();return(0,r.useMemo)(()=>e.filter(e=>{var a,n;return a=e,n=t,(!a.unlisted||!!(0,C.Mg)(a.permalink,n))&&!0}),[e,t])}function _(e){let t=Object.entries((0,N.vM)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}function Z(e){let{items:t,ulClassName:a,liClassName:r,linkClassName:l,linkActiveClassName:i}=e;return(0,n.jsx)("ul",{className:a,children:t.map(e=>(0,n.jsx)("li",{className:r,children:(0,n.jsx)(v.Z,{isNavLink:!0,to:e.permalink,className:l,activeClassName:i,children:e.title})},e.permalink))})}},15571:function(e,t,a){a.d(t,{Z:()=>B});var n=a("85893"),r=a("67294"),l=a("67026"),i=a("1568"),s=a("54704"),o=a("96025"),c=a("41835"),u=a("30140"),m=a("34403");function d(e){let{year:t,yearGroupHeadingClassName:a,children:r}=e;return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(m.Z,{as:"h3",className:a,children:t}),r]})}let g=(0,r.memo)(function(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:r}=e;if(!(0,u.L)().blog.sidebar.groupByYear)return(0,n.jsx)(r,{items:t});{let e=(0,c.ci)(t);return(0,n.jsx)(n.Fragment,{children:e.map(e=>{let[t,l]=e;return(0,n.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,n.jsx)(r,{items:l})},t)})})}}),h="sidebar_re4s",p="sidebarItemTitle_pO2u",f="sidebarItemList_Yudw",b="sidebarItem__DBe",j="sidebarItemLink_mo7H",x="sidebarItemLinkActive_I1ZP",v="yearGroupHeading_rMGB",N=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:(0,l.Z)(f,"clean-list"),liClassName:b,linkClassName:j,linkActiveClassName:x})},C=(0,r.memo)(function(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,l.Z)(h,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,l.Z)(p,"margin-bottom--md"),children:t.title}),(0,n.jsx)(g,{items:a,ListComponent:N,yearGroupHeadingClassName:v})]})})});var k=a("11179");let _="yearGroupHeading_QT03",Z=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function y(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)(g,{items:a,ListComponent:Z,yearGroupHeadingClassName:_})}let P=(0,r.memo)(function(e){return(0,n.jsx)(k.Zo,{component:y,props:e})});function w(e){let{sidebar:t}=e,a=(0,s.i)();return t?.items.length?"mobile"===a?(0,n.jsx)(P,{sidebar:t}):(0,n.jsx)(C,{sidebar:t}):null}function B(e){let{sidebar:t,toc:a,children:r,...s}=e,o=t&&t.items.length>0;return(0,n.jsx)(i.Z,{...s,children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(w,{sidebar:t}),(0,n.jsx)("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:r}),a&&(0,n.jsx)("div",{className:"col col--2",children:a})]})})})}},93867:function(e,t,a){a.r(t),a.d(t,{default:()=>f});var n=a("85893");a("67294");var r=a("67026"),l=a("96025");let i=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var s=a("79741"),o=a("84681"),c=a("15571"),u=a("48627"),m=a("34403");let d="tag_Nnez";function g(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(m.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map(e=>(0,n.jsx)("li",{className:d,children:(0,n.jsx)(u.Z,{...e})},e.permalink))}),(0,n.jsx)("hr",{})]})}function h(e){let{tags:t}=e,a=function(e){let t={};return Object.values(e).forEach(e=>{let a=e.label[0].toUpperCase();t[a]??=[],t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)}).map(e=>{let[t,a]=e;return{letter:t,tags:a.sort((e,t)=>e.label.localeCompare(t.label))}})}(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:a.map(e=>(0,n.jsx)(g,{letterEntry:e},e.letter))})}var p=a("84315");function f(e){let{tags:t,sidebar:a}=e,l=i();return(0,n.jsxs)(s.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogTagsListPage),children:[(0,n.jsx)(s.d,{title:l}),(0,n.jsx)(p.Z,{tag:"blog_tags_list"}),(0,n.jsxs)(c.Z,{sidebar:a,children:[(0,n.jsx)(m.Z,{as:"h1",children:l}),(0,n.jsx)(h,{tags:t})]})]})}},48627:function(e,t,a){a.d(t,{Z:()=>s});var n=a("85893");a("67294");var r=a("67026"),l=a("83012");let i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:a,count:s,description:o}=e;return(0,n.jsxs)(l.Z,{href:t,title:o,className:(0,r.Z)(i.tag,s?i.tagWithCount:i.tagRegular),children:[a,s&&(0,n.jsx)("span",{children:s})]})}}}]);