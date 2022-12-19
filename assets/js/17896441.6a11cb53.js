"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[7918],{1986:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(7294),l=n(6010),i=n(5281),o=n(3791),c=n(8596),s=n(9960),d=n(4996),m=n(5999);function u(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function f(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?r.createElement("span",{className:a,itemProp:"name"},t):n?r.createElement(s.Z,{className:a,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:a},t)}function b(e){var t=e.children,n=e.active,i=e.index,o=e.addMicrodata;return r.createElement("li",(0,a.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function p(){var e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(s.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},r.createElement(u,{className:v.breadcrumbHomeIcon})))}function h(){var e=(0,o.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,l.Z)(i.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(p,null),e.map((function(t,n){var a=n===e.length-1;return r.createElement(b,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(f,{href:t.href,isLast:a},t.label))})))):null}},5154:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var a=n(7294),r=n(1944),l=n(9688),i=a.createContext(null);function o(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return a.createElement(i.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(i);if(null===e)throw new l.i6("DocProvider");return e}function s(){var e,t=c(),n=t.metadata,l=t.frontMatter,i=t.assets;return a.createElement(r.d,{title:n.title,description:n.description,keywords:l.keywords,image:null!=(e=i.image)?e:l.image})}var d=n(6010),m=n(7524),u=n(49);function v(){var e=c().metadata;return a.createElement(u.Z,{previous:e.previous,next:e.next})}var f=n(3120),b=n(4364),p=n(5281),h=n(5999);function E(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function g(e){var t=e.lastUpdatedBy;return a.createElement(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function L(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:p.k.common.lastUpdated},a.createElement(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(g,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=n(4881),Z=n(1526),k="lastUpdated_vwxv";function _(e){return a.createElement("div",{className:(0,d.Z)(p.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(Z.Z,e)))}function C(e){var t=e.editUrl,n=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,d.Z)(p.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(N.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",k)},(n||r)&&a.createElement(L,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function x(){var e=c().metadata,t=e.editUrl,n=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,l=e.lastUpdatedBy,i=e.tags,o=i.length>0,s=!!(t||n||l);return o||s?a.createElement("footer",{className:(0,d.Z)(p.k.docs.docFooter,"docusaurus-mt-lg")},o&&a.createElement(_,{tags:i}),s&&a.createElement(C,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var H=n(6043),T=n(3743),y=n(7462),U=n(3366),A="tocCollapsibleButton_TO0P",w="tocCollapsibleButtonExpanded_MG3E",M=["collapsed"];function I(e){var t=e.collapsed,n=(0,U.Z)(e,M);return a.createElement("button",(0,y.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",A,!t&&w,n.className)}),a.createElement(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var B="tocCollapsible_ETCw",O="tocCollapsibleContent_vkbj",V="tocCollapsibleExpanded_sAul";function S(e){var t=e.toc,n=e.className,r=e.minHeadingLevel,l=e.maxHeadingLevel,i=(0,H.u)({initialState:!0}),o=i.collapsed,c=i.toggleCollapsed;return a.createElement("div",{className:(0,d.Z)(B,!o&&V,n)},a.createElement(I,{collapsed:o,onClick:c}),a.createElement(H.z,{lazy:!0,className:O,collapsed:o},a.createElement(T.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}var D="tocMobile_ITEo";function P(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement(S,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,d.Z)(p.k.docs.docTocMobile,D)})}var R=n(9407);function j(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement(R.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var z=n(2503),F=n(5042);function q(e){var t,n,r,l,i=e.children,o=(t=c(),n=t.metadata,r=t.frontMatter,l=t.contentTitle,r.hide_title||void 0!==l?null:n.title);return a.createElement("div",{className:(0,d.Z)(p.k.docs.docMarkdown,"markdown")},o&&a.createElement("header",null,a.createElement(z.Z,{as:"h1"},o)),a.createElement(F.Z,null,i))}var G=n(1986),J="docItemContainer_Djhp",X="docItemCol_VOVn";function K(e){var t,n,r,l,i,o,s=e.children,u=(t=c(),n=t.frontMatter,r=t.toc,l=(0,m.i)(),i=n.hide_table_of_contents,o=!i&&r.length>0,{hidden:i,mobile:o?a.createElement(P,null):void 0,desktop:!o||"desktop"!==l&&"ssr"!==l?void 0:a.createElement(j,null)});return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!u.hidden&&X)},a.createElement(f.Z,null),a.createElement("div",{className:J},a.createElement("article",null,a.createElement(G.Z,null),a.createElement(b.Z,null),u.mobile,a.createElement(q,null,s),a.createElement(x,null)),a.createElement(v,null))),u.desktop&&a.createElement("div",{className:"col col--3"},u.desktop))}function Q(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(o,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(s,null),a.createElement(K,null,a.createElement(n,null))))}},49:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7462),r=n(7294),l=n(5999),i=n(2244);function o(e){var t=e.previous,n=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(i.Z,(0,a.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(i.Z,(0,a.Z)({},n,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(6010),l=n(5999),i=n(5281),o=n(4477);function c(e){var t=e.className,n=(0,o.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3120:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(6010),l=n(2263),i=n(9960),o=n(5999),c=n(143),s=n(5281),d=n(373),m=n(4477);var u={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.Z,{to:n,onClick:r},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,n=e.className,i=e.versionMetadata,o=(0,l.Z)().siteConfig.title,m=(0,c.gA)({failfast:!0}).pluginId,u=(0,d.J)(m).savePreferredVersionName,b=(0,c.Jo)(m),p=b.latestDocSuggestion,h=b.latestVersionSuggestion,E=null!=p?p:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:o,versionMetadata:i})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:h.label,to:E.path,onClick:function(){return u(h.name)}})))}function p(e){var t=e.className,n=(0,m.E)();return n.banner?a.createElement(b,{className:t,versionMetadata:n}):null}},9407:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(3366),l=n(7294),i=n(6010),o=n(3743),c="tableOfContents_bqdL",s=["className"];function d(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(3366),l=n(7294),i=n(6668),o=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,o);n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,l.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),n=u();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=m(o,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function f(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var b=l.memo(f),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,f=void 0===u?void 0:u,h=e.minHeadingLevel,E=e.maxHeadingLevel,g=(0,r.Z)(e,p),L=(0,i.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,Z=null!=E?E:L.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return v((0,l.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:Z}}),[m,f,N,Z])),l.createElement(b,(0,a.Z)({toc:k,className:o,linkClassName:m},g))}},1769:function(e,t,n){n(7294);var a=n(4547),r=n(7814),l=n(3636),i=n(3024),o=n(9417);l.vI.add(i.vnX,o.mRB),t.Z=Object.assign({},a.Z,{icon:r.G})}}]);