"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[3],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),c=a,g=p["".concat(d,".").concat(c)]||p[c]||s[c]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6018:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Moderation",description:"Documentation regarding Moderation"},d=void 0,m={unversionedId:"documentation/moderation",id:"documentation/moderation",title:"Moderation",description:"Documentation regarding Moderation",source:"@site/docs/documentation/moderation.md",sourceDirName:"documentation",slug:"/documentation/moderation",permalink:"/documentation/moderation",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/Server-Manager-Bot.github.io/tree/main/docs/documentation/moderation.md",tags:[],version:"current",lastUpdatedBy:"Server Manager Dev Team",lastUpdatedAt:1659301580,formattedLastUpdatedAt:"Jul 31, 2022",frontMatter:{title:"Moderation",description:"Documentation regarding Moderation"},sidebar:"defaultSidebar",previous:{title:"Polls",permalink:"/documentation/polls"},next:{title:"Updates",permalink:"/category/updates"}},u={},s=[],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Usage"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/warn ","<","member",">"," ","[duration][reason]"," ","[custom_reason][moderator_hidden]")),(0,o.kt)("td",{parentName:"tr",align:null},"Warn a member (",(0,o.kt)("inlineCode",{parentName:"td"},"moderator_hidden")," hides the moderator from the actioned user)"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/warnings ","[member]")),(0,o.kt)("td",{parentName:"tr",align:null},"View a list of warnings for a member or yourself"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/remove_warning ","<","id",">"," ","[notify_user=True]")),(0,o.kt)("td",{parentName:"tr",align:null},"Remove a warning (",(0,o.kt)("inlineCode",{parentName:"td"},"notify_user")," will direct message the warned member that it was deleted)"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/delete_all_warnings")),(0,o.kt)("td",{parentName:"tr",align:null},"Delete ",(0,o.kt)("strong",{parentName:"td"},"ALL")," warnings from your server. This is useful if your bot is acting slow when warning users"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("premium",null,"True"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/ban ","<","member",">"," ","[reason][custom_reason]"," ","[moderator_hidden][delete_message_days=1]")),(0,o.kt)("td",{parentName:"tr",align:null},"Ban a member from the server (",(0,o.kt)("inlineCode",{parentName:"td"},"delete_message_days")," is the amount of message days to delete)"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/kick ","<","member",">"," ","[reason][custom_reason]"," ","[moderator_hidden]")),(0,o.kt)("td",{parentName:"tr",align:null},"Kick a member from the server"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/purge ","<","amount",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Purge an amount of messages in the current channel"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/mute ","<","member",">"," ","<","duartion",">"," ","[reason][custom_reason]"," ","[moderator_hidden]")),(0,o.kt)("td",{parentName:"tr",align:null},"Mute a member for a duration using ",(0,o.kt)("strong",{parentName:"td"},"Discord's Timeout Feature"),". (Example ",(0,o.kt)("inlineCode",{parentName:"td"},"duration")," argument: '1h' = 1 hour)"),(0,o.kt)("td",{parentName:"tr",align:null},"False")))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"/delete_all_warnings")," command ",(0,o.kt)("strong",{parentName:"p"},"cannot be undone"),"!")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Discord's Timeout feature only allows members to be muted with a max duration of ",(0,o.kt)("strong",{parentName:"p"},"1 week"),". If you try and mute someone for over a week, the bot will send you an error message saying you can't do that")))}c.isMDXComponent=!0}}]);