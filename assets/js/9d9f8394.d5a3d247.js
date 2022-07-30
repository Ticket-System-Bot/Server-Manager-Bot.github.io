"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[360],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=i,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||a;return n?r.createElement(c,o(o({ref:t},u),{},{components:n})):r.createElement(c,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Troubleshooting",description:"Having trouble with Server Manager?",sidebar_position:8},s=void 0,p={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Having trouble with Server Manager?",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/Server-Manager-Bot.github.io/tree/main/docs/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Nziie3",lastUpdatedAt:1659214593,formattedLastUpdatedAt:"Jul 30, 2022",sidebarPosition:8,frontMatter:{title:"Troubleshooting",description:"Having trouble with Server Manager?",sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"v1.0.2",permalink:"/updates/v1.0.2"},next:{title:"Premium",permalink:"/premium"}},u={},d=[{value:"403 Forbidden",id:"403-forbidden",level:2},{value:"Missing Permissions",id:"missing-permissions",level:3},{value:"KeyError",id:"keyerror",level:2},{value:"TypeError",id:"typeerror",level:2},{value:"Other",id:"other",level:2}],m={toc:d};function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"403-forbidden"},"403 Forbidden"),(0,a.kt)("p",null,"What this error means is that Server Manager tried do execute an action, but failed."),(0,a.kt)("h3",{id:"missing-permissions"},"Missing Permissions"),(0,a.kt)("p",null,"This should be self explanatory as it's a very common error, the bot is missing permissions to execute an action - or did but failed. To fix this, we recommend giving the bot ",(0,a.kt)("inlineCode",{parentName:"p"},"Server Administrator")," permissions for an easy fix. Not comfortable giving the bot admin permissions? That's alright! We'll just have to take the longer route instead. "),(0,a.kt)("p",null,"Below, match the command you're trying to use with the table below and give it the permissions it needs."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"/kick"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Kick Members")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,"/ban"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ban Members")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,"/warn"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,"/mute"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Moderate Members")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,"/suggest"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Access to the suggestions channel")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("code",null,"All suggestion marking")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Access to the suggestions channel")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"keyerror"},"KeyError"),(0,a.kt)("p",null,"This is an error on our side in which you can't fix. Should you encounter this error, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../support"},"contact us in our support server")),"."),(0,a.kt)("h2",{id:"typeerror"},"TypeError"),(0,a.kt)("p",null,"Again, this is an error on our side. Should you encounter this error, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../support"},"contact us in our support server")),"."),(0,a.kt)("h2",{id:"other"},"Other"),(0,a.kt)("p",null,"If you encounter any other error that's not listed here, please ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../support"},"contact us in our support server"))," immediately so we can get out a fix."))}k.isMDXComponent=!0}}]);