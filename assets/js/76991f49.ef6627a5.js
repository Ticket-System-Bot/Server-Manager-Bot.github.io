"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[3877],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3612:function(e,t,n){n.d(t,{Z:function(){return h}});var o=n(7294),r=n(6010),a=n(5281),i=n(5999),l="admonition_LlT9",s="admonitionHeading_tbUL",p="admonitionIcon_kALy",u="admonitionContent_S0QG";var c={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){var t,n=function(e){var t=o.Children.toArray(e),n=t.find((function(e){var t;return o.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=o.createElement(o.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:r}}(e.children),r=n.mdxAdmonitionTitle,a=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:r,children:a})}function h(e){var t=d(e),n=t.children,i=t.type,h=t.title,f=t.icon,k=function(e){var t,n=null!=(t=m[e])?t:e;return c[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),c.info)}(i),v=null!=h?h:k.label,g=k.iconComponent,y=null!=f?f:o.createElement(g,null);return o.createElement("div",{className:(0,r.Z)(a.k.common.admonition,a.k.common.admonitionType(e.type),"alert","alert--"+k.infimaClassName,l)},o.createElement("div",{className:s},o.createElement("span",{className:p},y),v),o.createElement("div",{className:u},n))}},4629:function(e,t,n){var o=n(7294),r=n(9960);t.Z=function(e){var t=e.type,n=e.label,a=e.icon,i=e.link,l=e.isDisabled,s=e.onClick,p=e.children,u=function(e){var t=[];return e.split(" ").forEach((function(e){t.push("pyc-button--"+e)})),t.join(" ")},c=o.createElement("button",{className:"pyc-button"+(t?" "+u(t):""),"aria-label":n||(null==p?void 0:p.toString()),disabled:l,onClick:s},a&&o.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},a),p&&o.createElement("span",{className:"pyc-button__label"},p));return i?o.createElement(r.Z,{className:"pyc-button"+(t?" "+u(t):""),"aria-label":n||(null==p?void 0:p.toString()),href:i},a&&o.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},a),p&&o.createElement("span",{className:"pyc-button__label"},p)):c}},1917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(4629),l=n(3612),s=["components"],p={title:"Premium",description:"Unlock the full potential of Server Manager"},u=void 0,c={unversionedId:"premium",id:"premium",title:"Premium",description:"Unlock the full potential of Server Manager",source:"@site/docs/premium.md",sourceDirName:".",slug:"/premium",permalink:"/premium",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/website/tree/main/docs/premium.md",tags:[],version:"current",lastUpdatedAt:1661566827,formattedLastUpdatedAt:"Aug 27, 2022",frontMatter:{title:"Premium",description:"Unlock the full potential of Server Manager"},sidebar:"defaultSidebar",previous:{title:"Privacy Policy",permalink:"/privacy"},next:{title:"Roadmap",permalink:"/roadmap"}},m={},d=[{value:"Supporter Tier",id:"supporter-tier",level:2},{value:"Perks",id:"perks",level:3},{value:"Super Supporter Tier",id:"super-supporter-tier",level:2},{value:"Perks",id:"perks-1",level:3},{value:"Redeeming",id:"redeeming",level:3},{value:"Donations",id:"donations",level:2}],h={toc:d};function f(e){var t=e.components,p=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Want to unlock the full potential of ",(0,a.kt)("strong",{parentName:"p"},"Server Manager"),"? Support us on ",(0,a.kt)("a",{parentName:"p",href:"https://ko-fi.com"},"Ko-fi"),"."),(0,a.kt)("h2",{id:"supporter-tier"},"Supporter Tier"),(0,a.kt)("p",null,"Support the bot with a $2 donation. This will help with hosting costs. To show our thanks, we're giving you Server Manager Premium as long as you keep paying monthly. Another perk to this is that you get a Premium Supporter role in the support server (only available if you're in the ",(0,a.kt)("a",{parentName:"p",href:"/support.html"},"support server"),")."),(0,a.kt)("h3",{id:"perks"},"Perks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access to premium commands")),(0,a.kt)("li",{parentName:"ul"},"Access to ",(0,a.kt)("strong",{parentName:"li"},"beta")," features"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Premium Supporter")," role in the ",(0,a.kt)("a",{parentName:"li",href:"/support.html"},"support server")),(0,a.kt)("li",{parentName:"ul"},"Exclusive sneak peaks")),(0,a.kt)("div",{className:"pyc-hero__actions"},(0,a.kt)(i.Z,{link:"http://ko-fi.com/servermanager/tiers",mdxType:"Button"},"Purchase")),(0,a.kt)("h2",{id:"super-supporter-tier"},"Super Supporter Tier"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Get your very own custom branded Server Manager"),"! The custom client/bot will ",(0,a.kt)("u",null,"not be modified code-wise what so ever"),", however, it comes with free premium and a custom name/custom profile picture. All of this you can set on the Developer Portal on your Discord account. Please note that you will have to give the Developer the token from the Developer Portal in order for the bot to appear online. A status command is included in the custom bot so you can customize the bot's status to fit your server."),(0,a.kt)("h3",{id:"perks-1"},"Perks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Everything in the previous tier"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Custom branded Server Manager"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please note that you must be in the ",(0,a.kt)("a",{parentName:"p",href:"/support.html"},"support server")," to be able to redeem this tier along with the other tiers! While you have this tier, your payment pays for the hosting for your bot. You also ",(0,a.kt)("strong",{parentName:"p"},"do not")," get access to your custom branded bot's code."),(0,a.kt)("p",{parentName:"admonition"},"You will be able to customize the bot's profile picture and name to your liking as you will have access to the bot's application on the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.dev"},"Discord Developer Portal"),". You will have to give us this token to use or else the bot won't be online."),(0,a.kt)("p",{parentName:"admonition"},"If you mess with the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.dev"},"Discord Developer Portal")," application and it cause your bot to go offline, you will have to contact our support bot.")),(0,a.kt)("h3",{id:"redeeming"},"Redeeming"),(0,a.kt)("details",{className:"customdetails"},(0,a.kt)("summary",null,"\u2728 Redeeming"),(0,a.kt)("h2",null,"Creating your Custom Branded Server Manager"),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We recommend prior knowledge of creating an application on the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Developer Portal")," in order to follow along with these steps. If you need any help, feel free to shoot us a message via our Support Bot (",(0,a.kt)("strong",{parentName:"p"},"Helper#7371"),") and we can try and provide extra support.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Developer Portal")," and click ",(0,a.kt)("mention",null,"New Application")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Give your bot a name, and click ",(0,a.kt)("mention",null,"Create")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," Once you've completed those 2 steps, you should be on this page: "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bot application image",src:n(5177).Z,width:"1900",height:"589"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.")," Click on the ",(0,a.kt)("mention",null,"Bot")," tab on the left side of the screen. Then click ",(0,a.kt)("mention",null,"Add Bot"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.")," You can give it a name, change the Avatar, etc."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"6.")," Navigate to where it says ",(0,a.kt)("mention",null,"Reset Token"),", this is where you will be able to access your bot's token."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bot token image",src:n(9744).Z,width:"1004",height:"334"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"7.")," Once you complete the 2FA to reset your bot's token (if enabled), click ",(0,a.kt)("mention",null,"Copy")," to copy it to your device's clipboard - you'll need this for later. ",(0,a.kt)("strong",{parentName:"p"},"Make sure to not share it with anyone else"),"!"),(0,a.kt)("h2",null,"Enable Intents"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Go to the ",(0,a.kt)("mention",null,"Bot")," tab in your bot's application in the Developer Portal. Scroll down until you see the section: ",(0,a.kt)("strong",{parentName:"p"},"Privileged Gateway Intents"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Enable the following intents (the bot requires all of them):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Presence Intent"),(0,a.kt)("li",{parentName:"ul"},"Server Members Intent"),(0,a.kt)("li",{parentName:"ul"},"Message Content Intent")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Intents image",src:n(7236).Z,width:"1249",height:"508"})),(0,a.kt)(l.Z,{type:"tip",icon:"\u2705",title:"Success",mdxType:"Admonition"},(0,a.kt)("p",null,"You've created the bot application for your ",(0,a.kt)("strong",null,"Custom Branded Server Manager bot"),"!",(0,a.kt)("br",null),(0,a.kt)("br",null),"Please make sure to message our support bot (",(0,a.kt)("strong",null,"Helper#7371"),") in our ",(0,a.kt)("a",{href:"https://servermangerbot.ml/support"},"support server")," in order to redeem your custom bot, please also provide the ",(0,a.kt)("strong",null,(0,a.kt)("u",null,"token"))," you have copied from earlier!"))),(0,a.kt)("div",{className:"pyc-hero__actions"},(0,a.kt)(i.Z,{link:"http://ko-fi.com/servermanager/tiers",mdxType:"Button"},"Purchase")),(0,a.kt)("h2",{id:"donations"},"Donations"),(0,a.kt)("p",null,"We greatly appriciate donations from the community. Your donations and premium purchases help with hosting costs and other development costs down the road. Unfortunately, we don't have any perks for donations. ",(0,a.kt)("strong",{parentName:"p"},"However"),", we will most likely come up with perks soon!"),(0,a.kt)("div",{className:"pyc-hero__actions"},(0,a.kt)(i.Z,{link:"http://ko-fi.com/servermanager",mdxType:"Button"},"Donate")))}f.isMDXComponent=!0},5177:function(e,t,n){t.Z=n.p+"assets/images/botapp-e16c623085cffb6b75a1b64994303acf.png"},7236:function(e,t,n){t.Z=n.p+"assets/images/intents-cae507ffefa3f32cfaaa5697c72a28c9.PNG"},9744:function(e,t,n){t.Z=n.p+"assets/images/tokenimg-a70a1057d026184333a6cb7839db7d29.png"}}]);