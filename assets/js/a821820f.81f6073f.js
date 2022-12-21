"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[465],{695:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905));a(4629);a(7674),a(8624);var i=["components"],l={title:"\u2728 Forms \u2728",description:"Documentation regarding a giveaway system",sidebar_position:1},s=void 0,m={unversionedId:"documentation/forms",id:"documentation/forms",title:"\u2728 Forms \u2728",description:"Documentation regarding a giveaway system",source:"@site/docs/documentation/forms.md",sourceDirName:"documentation",slug:"/documentation/forms",permalink:"/documentation/forms",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/website/tree/main/docs/documentation/forms.md",tags:[],version:"current",lastUpdatedAt:1671646890,formattedLastUpdatedAt:"Dec 21, 2022",sidebarPosition:1,frontMatter:{title:"\u2728 Forms \u2728",description:"Documentation regarding a giveaway system",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Documentation",permalink:"/category/documentation"},next:{title:"Giveaways",permalink:"/documentation/giveaways"}},p={},d=[{value:'<icon icon="fa-solid fa-gear"/> Configurations',id:"configurations",level:2},{value:'<icon icon="fa-solid fa-file-import"/> Importing/exporting forms',id:"importing-exporting",level:2},{value:"Need Support?",id:"need-support",level:3}],u={toc:d};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"box gold no-background shadow"},(0,o.kt)("div",{className:"title"},(0,o.kt)("icon",{icon:"fa-solid fa-wand-magic-sparkles",size:"sm",style:{color:"#d2af26"}})," New"),(0,o.kt)("p",null,"Officially released as of 12/20/2022; if you encounter any bugs, submit a ",(0,o.kt)("a",{href:"https://forum.servermanagerbot.ml"},"help request on our forum"),"!")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Usage"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"mention"},"/forms create ","<","name",">"," ","<","description",">"," ","<","response_channel",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Create a form/application, response channel is where responses will send to"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"mention"},"/forms edit ","<","name",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Edit a form, there are many more options here compared to creating a form"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"mention"},"/forms delete ","<","name",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Delete a form, this CANNOT be undone"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"mention"},"/form ","<","name",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Submit/complete a form"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"mention"},"/apply ","<","name",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Submit/complete a form (alias for ",(0,o.kt)("span",{className:"mention"},"/form"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"False")))),(0,o.kt)("span",{className:"box red no-background animation"},(0,o.kt)("div",{className:"title"},(0,o.kt)("icon",{icon:"fa-solid fa-hand"})," Warning"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../premium"},"Non-premium")," servers are ",(0,o.kt)("u",null,"limited")," to only ",(0,o.kt)("strong",null,"5")," forms. ",(0,o.kt)("icon",{icon:"fa-solid fa-wand-magic-sparkles",size:"sm",style:{color:"#d2af26"}})," ",(0,o.kt)("a",{href:"../premium"},"Upgrade to premium")," for ",(0,o.kt)("strong",null,"unlimited forms")," and other sweet perks for as low as ",(0,o.kt)("strong",null,"$2/month"),"!")),(0,o.kt)("h2",{id:"configurations"},(0,o.kt)("icon",{icon:"fa-solid fa-gear"})," Configurations"),(0,o.kt)("p",null,"There are many configurations and values to set in the forms system, let's break it down..."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"timestamp"},"Given roles")),(0,o.kt)("td",{parentName:"tr",align:null},"Set the roles that are given when a form is approved/accepted (max. 5)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"mention"},"@Staff Team"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"timestamp"},"Required roles")),(0,o.kt)("td",{parentName:"tr",align:null},"Set the required roles in order to use the form (max. 5)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"mention"},"@Member"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"timestamp"},"Ping roles")),(0,o.kt)("td",{parentName:"tr",align:null},"Set the roles that are pinged when a form is submitted (max. 3)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"mention"},"@Staff Team"),", ",(0,o.kt)("span",{className:"mention"},"@Management Team"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"timestamp"},"Accepted message")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes, you can customize the message that is used in the DM that's sent to a user when their form is accepted"),(0,o.kt)("td",{parentName:"tr",align:null},"Default: Your form in ",(0,o.kt)("strong",{parentName:"td"},"Server Name")," has been accepted!")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"timestamp"},"Denied message")),(0,o.kt)("td",{parentName:"tr",align:null},"Yup, you can also customize the denial message"),(0,o.kt)("td",{parentName:"tr",align:null},"Default: Your form in ",(0,o.kt)("strong",{parentName:"td"},"Server Name")," has been denied.")))),(0,o.kt)("h2",{id:"importing-exporting"},(0,o.kt)("icon",{icon:"fa-solid fa-file-import"})," Importing/exporting forms"),(0,o.kt)("h3",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"Contact us on our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.servermanagerbot.ml"},"forum page")," for support on using forms!"))}c.isMDXComponent=!0}}]);