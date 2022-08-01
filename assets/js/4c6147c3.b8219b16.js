"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[779],{4629:function(t,e,n){var o=n(7294),l=n(9960);e.Z=function(t){var e=t.type,n=t.label,a=t.icon,r=t.link,i=t.isDisabled,d=t.onClick,s=t.children,u=function(t){var e=[];return t.split(" ").forEach((function(t){e.push("pyc-button--"+t)})),e.join(" ")},c=o.createElement("button",{className:"pyc-button"+(e?" "+u(e):""),"aria-label":n||(null==s?void 0:s.toString()),disabled:i,onClick:d},a&&o.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},a),s&&o.createElement("span",{className:"pyc-button__label"},s));return r?o.createElement(l.Z,{className:"pyc-button"+(e?" "+u(e):""),"aria-label":n||(null==s?void 0:s.toString()),href:r},a&&o.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},a),s&&o.createElement("span",{className:"pyc-button__label"},s)):c}},8624:function(t,e,n){n.d(e,{v:function(){return a}});var o=n(7294),l=n(7674),a=Object.assign({},l.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/nziie.png",roleColor:"#00ffff"},servermanager:{author:"Server Manager",avatar:"/img/logo.png",roleColor:"#38faff",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});e.Z=function(t){var e=t.options,n=void 0===e?a:e,r=t.children;return o.createElement(l.qs.Provider,{value:n},o.createElement(l.dZ,null,r))}},5987:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=n(7462),l=n(3366),a=(n(7294),n(3905)),r=(n(4629),n(7674)),i=n(8624),d=["components"],s={title:"Polls",description:"Documentation regarding the polls system",sidebar_position:3},u=void 0,c={unversionedId:"documentation/polls",id:"documentation/polls",title:"Polls",description:"Documentation regarding the polls system",source:"@site/docs/documentation/polls.md",sourceDirName:"documentation",slug:"/documentation/polls",permalink:"/documentation/polls",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/Server-Manager-Bot.github.io/tree/main/docs/documentation/polls.md",tags:[],version:"current",lastUpdatedBy:"Nziie3",lastUpdatedAt:1659391891,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:3,frontMatter:{title:"Polls",description:"Documentation regarding the polls system",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Suggestions",permalink:"/documentation/suggestions"},next:{title:"Moderation",permalink:"/documentation/moderation"}},p={},m=[{value:"Example",id:"example",level:2}],k={toc:m};function g(t){var e=t.components,n=(0,l.Z)(t,d);return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Usage"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"/poll start ","<","topic",">"," ","[description][duration]"," ","[@ping_role][#channel]")),(0,a.kt)("td",{parentName:"tr",align:null},"Start a poll with an optional duration"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"/poll end ","<","poll_id",">")),(0,a.kt)("td",{parentName:"tr",align:null},"End a poll via poll ID"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"/poll start topic:Poll topic description: This is a poll description. duration: 7d\n")),(0,a.kt)(i.Z,{mdxType:"DiscordComponent"},(0,a.kt)(r.kK,{author:"Docs Bot",avatar:"blue",bot:!0,mdxType:"DiscordMessage"},(0,a.kt)(r._h,{embedTitle:"Poll topic",borderColor:"#5865f2",timestamp:"12/24/2022",authorIcon:"/img/logo.png",footerIcon:"/img/logo.png",authorName:"Poll by User#0000",mdxType:"DiscordEmbed"},"This is a poll description.",(0,a.kt)(r.Rb,{slot:"fields",inline:"true",mdxType:"DiscordEmbedFields"},(0,a.kt)(r.wY,{fieldTitle:"Votes",mdxType:"DiscordEmbedField"},(0,a.kt)("strong",null,"Upvotes:")," 3 ",(0,a.kt)("code",null,"(100%)"),(0,a.kt)("br",null),(0,a.kt)("strong",null,"Downvotes:")," 0 ",(0,a.kt)("code",null,"(0%)")),(0,a.kt)(r.wY,{fieldTitle:"Ends",mdxType:"DiscordEmbedField"},(0,a.kt)("code",null,"in 7 days"))),(0,a.kt)("span",{slot:"footer"},"Vote using the buttons below \u2022 Poll ID: 12345678")),(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(r.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"poll start")),(0,a.kt)("div",null,(0,a.kt)(r.jr,{mdxType:"DiscordButtons"},(0,a.kt)(r.qD,{type:"success",emoji:"\u2705",mdxType:"DiscordButton"}),(0,a.kt)(r.qD,{type:"secondary",disabled:"true",mdxType:"DiscordButton"},"|"),(0,a.kt)(r.qD,{type:"danger",emoji:"\u274c",mdxType:"DiscordButton"}))),(0,a.kt)("div",{slot:"actions"},(0,a.kt)(r.jr,{mdxType:"DiscordButtons"},(0,a.kt)(r.qD,{type:"danger",emoji:"\ud83d\udeaa",mdxType:"DiscordButton"},"Leave Poll"))))),(0,a.kt)("br",null))}g.isMDXComponent=!0}}]);