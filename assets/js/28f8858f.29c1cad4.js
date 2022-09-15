"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[1272],{5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),l=n(7392),u=n(7094),s=n(2466),m="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,p=e.defaultValue,g=e.values,v=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),N=T.tabGroupChoices,x=T.setTabGroupChoices,w=(0,r.useState)(y),E=w[0],D=w[1],C=[],Z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var _=N[v];null!=_&&_!==E&&f.some((function(e){return e.value===_}))&&D(_)}var z=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==E&&(Z(t),D(a),null!=v&&x(v,String(a)))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=C.indexOf(e.currentTarget)+1;n=null!=(a=C[r])?a:C[0];break;case"ArrowLeft":var i,o=C.indexOf(e.currentTarget)-1;n=null!=(i=C[o])?i:C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return C.push(e)},onKeyDown:M,onFocus:z,onClick:z},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4629:function(e,t,n){var a=n(7294),r=n(9960);t.Z=function(e){var t=e.type,n=e.label,i=e.icon,o=e.link,l=e.isDisabled,u=e.onClick,s=e.children,m=function(e){var t=[];return e.split(" ").forEach((function(e){t.push("pyc-button--"+e)})),t.join(" ")},c=a.createElement("button",{className:"pyc-button"+(t?" "+m(t):""),"aria-label":n||(null==s?void 0:s.toString()),disabled:l,onClick:u},i&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},i),s&&a.createElement("span",{className:"pyc-button__label"},s));return o?a.createElement(r.Z,{className:"pyc-button"+(t?" "+m(t):""),"aria-label":n||(null==s?void 0:s.toString()),href:o},i&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},i),s&&a.createElement("span",{className:"pyc-button__label"},s)):c}},8624:function(e,t,n){n.d(t,{v:function(){return i}});var a=n(7294),r=n(7674),i=Object.assign({},r.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/nziie.png"},servermanager:{author:"Server Manager",avatar:"/img/logo.png",roleColor:"#5865f2",bot:!0}}});t.Z=function(e){var t=e.options,n=void 0===t?i:t,o=e.children;return a.createElement(r.qs.Provider,{value:n},a.createElement(r.dZ,null,o))}},2157:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=(n(5488),n(5162),n(4629),n(7674)),l=n(8624),u=["components"],s={slug:"time-arguments",title:"Time Arguments Guide",authors:"nziie"},m=void 0,c={permalink:"/blog/time-arguments",source:"@site/blog/2022-9-14-time-arguments.md",title:"Time Arguments Guide",description:"Server Manager uses a custom time converter so that you can provide a human-readable time argument without the hassle of any extra steps. These duration arguments are used in Moderation, Polls, Giveaways, and more. Here is a quick guide to mastering those arguments.",date:"2022-09-14T00:00:00.000Z",formattedDate:"September 14, 2022",tags:[],readingTime:1.155,hasTruncateMarker:!1,authors:[{name:"Nziie",title:"Core Developer",url:"https://nziie.is-a.dev",imageURL:"https://github.com/Nzii3.png",key:"nziie"}],frontMatter:{slug:"time-arguments",title:"Time Arguments Guide",authors:"nziie"},nextItem:{title:"Release v1.1.0",permalink:"/blog/v1.1.0"}},d={authorsImageUrls:[void 0]},p=[{value:"Key",id:"key",level:2},{value:"Examples",id:"examples",level:2}],g={toc:p};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Server Manager uses a custom time converter so that you can provide a human-readable time argument without the hassle of any extra steps. These duration arguments are used in ",(0,i.kt)("strong",{parentName:"p"},"Moderation"),", ",(0,i.kt)("strong",{parentName:"p"},"Polls"),", ",(0,i.kt)("strong",{parentName:"p"},"Giveaways"),", and more. Here is a quick guide to mastering those arguments."),(0,i.kt)("h2",{id:"key"},"Key"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"d")," - days"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"h")," - hours"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"m")," - minutes"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"s")," - seconds"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:"title=\"Using 'd' (days)\"",title:'"Using',"'d'":!0,'(days)"':!0},"/time argument: 1d\n")),(0,i.kt)(l.Z,{mdxType:"DiscordComponent"},(0,i.kt)(o.kK,{profile:"servermanager",mdxType:"DiscordMessage"},"The time argument you provided was ",(0,i.kt)("strong",null,"1 day"),"!",(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(o.un,{profile:"nziie",command:!0,mdxType:"DiscordInteraction"},"time")))),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:"title=\"Using 'h' (hours)\"",title:'"Using',"'h'":!0,'(hours)"':!0},"/time argument: 1h\n")),(0,i.kt)(l.Z,{mdxType:"DiscordComponent"},(0,i.kt)(o.kK,{profile:"servermanager",mdxType:"DiscordMessage"},"The time argument you provided was ",(0,i.kt)("strong",null,"1 hour"),"!",(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(o.un,{profile:"nziie",command:!0,mdxType:"DiscordInteraction"},"time")))),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:"title=\"Using 'm' (minutes)\"",title:'"Using',"'m'":!0,'(minutes)"':!0},"/time argument: 5m\n")),(0,i.kt)(l.Z,{mdxType:"DiscordComponent"},(0,i.kt)(o.kK,{profile:"servermanager",mdxType:"DiscordMessage"},"The time argument you provided was ",(0,i.kt)("strong",null,"5 minutes"),"!",(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(o.un,{profile:"nziie",command:!0,mdxType:"DiscordInteraction"},"time")))),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:"title=\"Using 's' (seconds)\"",title:'"Using',"'s'":!0,'(seconds)"':!0},"/time argument: 30s\n")),(0,i.kt)(l.Z,{mdxType:"DiscordComponent"},(0,i.kt)(o.kK,{profile:"servermanager",mdxType:"DiscordMessage"},"The time argument you provided was ",(0,i.kt)("strong",null,"30 seconds"),"!",(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(o.un,{profile:"nziie",command:!0,mdxType:"DiscordInteraction"},"time")))),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hope this helps you on the fly while either starting a giveaway, poll, or issuing warnings or mutes!")))}v.isMDXComponent=!0}}]);