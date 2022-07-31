"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[86],{5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),u=a(7094),s=a(2466),d="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,a,i=e.lazy,m=e.block,p=e.defaultValue,v=e.values,g=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.l)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,E=(0,r.useState)(y),D=E[0],x=E[1],_=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var Z=w[g];null!=Z&&Z!==D&&h.some((function(e){return e.value===Z}))&&x(Z)}var S=function(e){var t=e.currentTarget,a=_.indexOf(t),n=h[a].value;n!==D&&(C(t),x(n),null!=g&&T(g,String(n)))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=_.indexOf(e.currentTarget)+1;a=null!=(n=_[r])?n:_[0];break;case"ArrowLeft":var l,i=_.indexOf(e.currentTarget)-1;a=null!=(l=_[i])?l:_[_.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},k)},h.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return _.push(e)},onKeyDown:I,onFocus:S,onClick:S},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":D===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function p(e){var t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},4629:function(e,t,a){var n=a(7294),r=a(9960);t.Z=function(e){var t=e.type,a=e.label,l=e.icon,i=e.link,o=e.isDisabled,u=e.onClick,s=e.children,d=function(e){var t=[];return e.split(" ").forEach((function(e){t.push("pyc-button--"+e)})),t.join(" ")},c=n.createElement("button",{className:"pyc-button"+(t?" "+d(t):""),"aria-label":a||(null==s?void 0:s.toString()),disabled:o,onClick:u},l&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},l),s&&n.createElement("span",{className:"pyc-button__label"},s));return i?n.createElement(r.Z,{className:"pyc-button"+(t?" "+d(t):""),"aria-label":a||(null==s?void 0:s.toString()),href:i},l&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},l),s&&n.createElement("span",{className:"pyc-button__label"},s)):c}},8624:function(e,t,a){a.d(t,{v:function(){return l}});var n=a(7294),r=a(7674),l=Object.assign({},r.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/nziie.png",roleColor:"#00ffff"},servermanager:{author:"Server Manager",avatar:"/img/logo.png",roleColor:"#38faff",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});t.Z=function(e){var t=e.options,a=void 0===t?l:t,i=e.children;return n.createElement(r.qs.Provider,{value:a},n.createElement(r.dZ,null,i))}},2974:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(5488),o=a(5162),u=a(4629),s=a(7674),d=a(8624),c=["components"],m={title:"v1.0.3",description:"Release v1.0.3 changelog"},p=void 0,v={unversionedId:"updates/v1.0.3",id:"updates/v1.0.3",title:"v1.0.3",description:"Release v1.0.3 changelog",source:"@site/docs/updates/v1.0.3.md",sourceDirName:"updates",slug:"/updates/v1.0.3",permalink:"/updates/v1.0.3",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/Server-Manager-Bot.github.io/tree/main/docs/updates/v1.0.3.md",tags:[],version:"current",lastUpdatedBy:"Nziie3",lastUpdatedAt:1659228457,formattedLastUpdatedAt:"Jul 31, 2022",frontMatter:{title:"v1.0.3",description:"Release v1.0.3 changelog"},sidebar:"defaultSidebar",previous:{title:"v1.0.2",permalink:"/updates/v1.0.2"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},g={},k=[{value:"Changes",id:"changes",level:2},{value:"\ud83c\udf89 Giveaways \ud83c\udf89",id:"-giveaways-",level:2},{value:"Coming Soon",id:"coming-soon",level:3},{value:"Example",id:"example",level:3},{value:"Remarks",id:"remarks",level:3}],b={toc:k};function h(e){var t=e.components,a=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"changes"},"Changes"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"new-features-tab",label:"New Features",default:!0,mdxType:"TabItem"},"\u2022 The new ",(0,l.kt)("a",{href:"../documentation/giveaways"},"giveaway system")," (approved from a suggestion)",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{value:"bugs-tab",label:"Bug Fixes",mdxType:"TabItem"},"\u2022 Fixed where the `Reason` was always showing as **None** in mod logs when the reason wasn't ever **None**")),(0,l.kt)("h2",{id:"-giveaways-"},"\ud83c\udf89 Giveaways \ud83c\udf89"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/giveaway start ","[...]")),(0,l.kt)("td",{parentName:"tr",align:null},"Start a giveaway"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/giveaway end <giveaway_id>")),(0,l.kt)("td",{parentName:"tr",align:null},"End a giveaway via giveaway message ID"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h3",{id:"coming-soon"},"Coming Soon"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Giveaway IDs also coming soon ;)")),(0,l.kt)("div",{class:"blurple-background"},(0,l.kt)("h4",{title:"This is currently a beta feature"},"BETA")),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/giveaway reroll <giveaway_id> ","<","winners",">"," ")),(0,l.kt)("td",{parentName:"tr",align:null},"Reroll a giveaway"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("premium",null,"True"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/giveaway view <giveaway_id>")),(0,l.kt)("td",{parentName:"tr",align:null},"View a giveaway"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"/giveaway start name:$5 Nitro Classic description:$5 Nitro Classic giveaway... duration:6h winners:1\n")),(0,l.kt)(d.Z,{mdxType:"DiscordComponent"},(0,l.kt)(s.kK,{author:"Docs Bot",avatar:"blue",bot:!0,mdxType:"DiscordMessage"},(0,l.kt)(s._h,{embedTitle:"$5 Nitro Classic",authorIcon:"/img/logo.png",authorName:"Server Manager Support",borderColor:"#5865F2",timestamp:"12/24/2022",footerIcon:"/img/logo.png",mdxType:"DiscordEmbed"},"$5 Nitro Classic giveaway with no requirement to enter! Click the button below this message to enter. Good luck! \ud83c\udf89",(0,l.kt)(s.Rb,{slot:"fields",inline:"true",mdxType:"DiscordEmbedFields"},(0,l.kt)(s.wY,{fieldTitle:"Ends",mdxType:"DiscordEmbedField"},(0,l.kt)("code",null,"in 6 hours")," (",(0,l.kt)("code",null,"December 24th, 2022 11:59 PM"),")"),(0,l.kt)(s.wY,{fieldTitle:"Host",mdxType:"DiscordEmbedField"},(0,l.kt)(s.Hz,{highlight:!0,mdxType:"DiscordMention"},d.v.profiles.nziie.author))),(0,l.kt)("span",{slot:"footer"},"1 winner")),(0,l.kt)("div",{slot:"interactions"},(0,l.kt)(s.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"giveaway")),(0,l.kt)("div",{slot:"actions"},(0,l.kt)(s.jr,{mdxType:"DiscordButtons"},(0,l.kt)(s.qD,{type:"primary",emoji:"\ud83c\udf89",mdxType:"DiscordButton"}),(0,l.kt)(s.qD,{type:"secondary",disabled:"true",mdxType:"DiscordButton"},"3 entries"))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Want to contribute to the features/development of ",(0,l.kt)("strong",{parentName:"p"},"Server Manager"),"? "),(0,l.kt)("div",{className:"pyc-hero__actions"},(0,l.kt)(u.Z,{link:"https://discord.gg/6bCKvP24kb",mdxType:"Button"},"Join our Support Server")))}h.isMDXComponent=!0}}]);