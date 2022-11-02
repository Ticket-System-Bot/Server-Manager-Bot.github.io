"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[7635],{1340:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=(a(5488),a(5162),a(4629),a(7674),a(8624),["components"]),i={slug:"v1.1.0",title:"Release v1.1.0",authors:"nziie",tags:["New Version","Updates"]},l=void 0,m={permalink:"/blog/v1.1.0",source:"@site/blog/2022-9-6-v1.1.0.md",title:"Release v1.1.0",description:"Hey everyone, here with a new version of Server Manager. This new version includes: moderation cases, bug fixes, and small changes.",date:"2022-09-06T00:00:00.000Z",formattedDate:"September 6, 2022",tags:[{label:"New Version",permalink:"/blog/tags/new-version"},{label:"Updates",permalink:"/blog/tags/updates"}],readingTime:1.635,hasTruncateMarker:!1,authors:[{name:"Nziie",title:"Core Developer",url:"https://nziie.is-a.dev",imageURL:"https://github.com/Nzii3.png",key:"nziie"}],frontMatter:{slug:"v1.1.0",title:"Release v1.1.0",authors:"nziie",tags:["New Version","Updates"]},prevItem:{title:"Time Arguments Guide",permalink:"/blog/time-arguments"},nextItem:{title:"Release v1.0.6",permalink:"/blog/v1.0.6"}},d={authorsImageUrls:[void 0]},p=[{value:"Cases",id:"cases",level:2},{value:"Updated Warn Command",id:"updated-warn-command",level:2}],u={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hey everyone, here with a new version of Server Manager. This new version includes: ",(0,o.kt)("strong",{parentName:"p"},"moderation cases"),", ",(0,o.kt)("strong",{parentName:"p"},"bug fixes"),", and small changes."),(0,o.kt)("h2",{id:"cases"},"Cases"),(0,o.kt)("p",null,"Cases may make a big impact on moderation in your server. With every moderation action (warn, mute, kick, ban), a case is created with a specific ID. These cases aren't removed when a member leaves and they don' expire. Therefore, you can keep track of a user's moderation history even if they left the server. You can edit a case's reason and ",(0,o.kt)("em",null,"proof")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/case <case_id>")," command. Yes, you heard me correctly: you can attach proof to a case. Case proof is helpful long term if you doubt that there was actually proof for the action taken against someone."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Warning cases are a separate system so if you remove a warning, the case tied to the warning won't be removed."),(0,o.kt)("p",{parentName:"admonition"},"Please also note that cases can only be created and viewed by ",(0,o.kt)("strong",{parentName:"p"},"moderators"),".")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/case ","<","case_id",">")),(0,o.kt)("td",{parentName:"tr",align:null},"View/manage a case - ",(0,o.kt)("strong",{parentName:"td"},"you can edit a case in this command"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/createcase ","<","member",">"," ","<","reason",">"," ","[action=Other][proof=image url]"," ","[duration]")),(0,o.kt)("td",{parentName:"tr",align:null},"Create a case for a user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/cases ","[member]")),(0,o.kt)("td",{parentName:"tr",align:null},"View cases for the whole server or yourself")))),(0,o.kt)("h2",{id:"updated-warn-command"},"Updated Warn Command"),(0,o.kt)("p",null,'The warning system now uses "token like" warning IDs and now uses an embed for a command response.'),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"It seems like old warnings with different warning IDs don't seem to be valid warning IDs when trying to remove the warning, but they are in the database. ",(0,o.kt)("strong",{parentName:"p"},"We are currently working on a fix for this"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Custom branded bots now support cases as of 9/11/2022")),(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://discord.gg/6bCKvP24kb"},(0,o.kt)("img",{src:"/img/sm_supportserver.png",className:"betterimage"})))}c.isMDXComponent=!0}}]);