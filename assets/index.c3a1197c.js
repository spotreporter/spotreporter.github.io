import{r as e,d as t,c as l,a as o,t as r,w as s,v as a,o as n,b as u,e as d,f as i,g as p,h as c,i as m,j as f,k as g,p as b,l as v,F as x,m as w,n as h}from"./vendor.f6edadfe.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,s)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return l(self[t].moduleMap[a]);const n=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){s(new Error(`Failed to import: ${e}`)),r(u)},onload(){l(self[t].moduleMap[a]),r(u)}});document.head.appendChild(u)})),self[t].moduleMap={}}}("/assets/");var y=window.GUN;const R=window.SEA,U=y(["https://spotreporter-gun.herokuapp.com/gun","http://localhost:8765/gun"]),F=e(U);F.value.on("hi",(e=>{console.log("new peer: ",e)}));const k=e([]),A=e(!1);F.value.on("auth",(()=>{L.get("reportFilter").on((async e=>{k.value=(await R.decrypt(e,L._.sea)).split(",")}))}));const L=F.value.user();function _(e){F.value.get(`~@${e}`).map().once((()=>{}))}console.log(L);const S=e("");function j(){L.leave(),S.value="",k.value=[],console.log(L,L._.sea)}var I=t({name:"Auth",setup:()=>{let t=e(0),l=e("test"),o=e("test");return{count:t,loggedInUser:S,login:()=>{!function(e,t){_(e),setTimeout((()=>L.auth(e,t,(e=>{e.err?console.log(e):(console.log(e,L,L.is,L._.sea),S.value=L.is.alias)}))),100)}(l.value,o.value)},username:l,password:o,logout:j,register:()=>{!function(e,t){_(e),L.create(e,t,(e=>{console.log(e,L,L.is)}))}(l.value,o.value)}}}});const C={class:"flex justify-around"};I.render=function(e,t,u,d,i,p){return n(),l("div",C,[o("button",{disabled:!!e.loggedInUser,class:"bg-blue-400 p-2 disabled:opacity-50 disabled:cursor-default",onClick:t[1]||(t[1]=(...t)=>e.register&&e.register(...t))}," Register ",8,["disabled"]),o("button",{disabled:!!e.loggedInUser,class:"bg-blue-400 p-2 disabled:opacity-50 disabled:cursor-default",onClick:t[2]||(t[2]=(...t)=>e.login&&e.login(...t))}," Logged in: "+r(e.loggedInUser),9,["disabled"]),o("button",{disabled:!e.loggedInUser,class:"bg-blue-400 p-2 disabled:opacity-50 disabled:cursor-default",onClick:t[3]||(t[3]=(...t)=>e.logout&&e.logout(...t))}," Logout ",8,["disabled"]),s(o("input",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.username=t),type:"text"},null,512),[[a,e.username]]),s(o("input",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.password=t),type:"password"},null,512),[[a,e.password]])])};class V{constructor(e,t,l,o){this.id=u(),this.spotname=e,this.freetext=t,this.date=l.getTime(),this.deleted=!1,this.user=o}}const $=e([]);F.value.get("reports").map().on((()=>{})),F.value.get("reports").map().on((e=>{console.log("change at reports node",e);let t=!1;$.value=$.value.map((l=>e.id===l.id?(t=!0,console.log("change report",l,e),e):l)),t||$.value.push(e)}));var M=t({name:"ReportAddButton",setup(){const t=e(!1),l=e({spotname:"",freetext:""});return{form:l,addNewReport:()=>{!function(e){console.log("new object",e),F.value.get("reports").set(e)}(new V(l.value.spotname,l.value.freetext,new Date,S.value)),l.value.spotname="",l.value.freetext="",t.value=!1},newPressed:t,loggedInUser:S}}});const N={class:"flex-shrink-0 p-4 space-x-4 bg-gray-100 m-4 rounded-xl width-50"},P=o("label",{for:"fspotname"},"Spotname:",-1),B=o("br",null,null,-1),O=o("br",null,null,-1),T=o("label",{for:"lfreetext"},"Freetext:",-1),E=o("br",null,null,-1),D=o("br",null,null,-1),q=o("br",null,null,-1),G=o("button",{type:"submit",class:"bg-blue-400 p-2"},"Save new Report",-1);M.render=function(e,t,r,u,p,c){return n(),l("li",N,[e.newPressed?d("",!0):(n(),l("button",{key:0,disabled:!e.loggedInUser,class:"bg-blue-400 p-2 disabled:opacity-50 disabled:cursor-default",onClick:t[1]||(t[1]=t=>e.newPressed=!0)}," New Report ",8,["disabled"])),e.newPressed?(n(),l("form",{key:1,onSubmit:t[4]||(t[4]=i(((...t)=>e.addNewReport&&e.addNewReport(...t)),["prevent"]))},[P,B,s(o("input",{id:"fspotname","onUpdate:modelValue":t[2]||(t[2]=t=>e.form.spotname=t),type:"text"},null,512),[[a,e.form.spotname]]),O,T,E,s(o("input",{id:"lfreetext","onUpdate:modelValue":t[3]||(t[3]=t=>e.form.freetext=t),type:"text"},null,512),[[a,e.form.freetext]]),D,q,G],32)):d("",!0)])};var z=t({name:"ReportFilter",setup(){const t=e(""),l=p((()=>k.value.join(",")));return{commaSeparatedFilter:t,filter:()=>{!async function(e){L.get("reportFilter").put(await R.encrypt(e,L._.sea))}(t.value),t.value=""},reportFilter:l,loggedInUser:S,isFilterActive:A}}});const H={class:"flex-shrink-0 p-4 space-x-4 bg-gray-100 m-4 rounded-xl width-50"},J={for:"lfreetext"},K=o("br",null,null,-1),Q=o("br",null,null,-1),W=o("br",null,null,-1);z.render=function(e,t,u,d,p,m){return n(),l("li",H,[o("form",{onSubmit:t[2]||(t[2]=i(((...t)=>e.filter&&e.filter(...t)),["prevent"]))},[o("label",J,"Filter ("+r(e.reportFilter)+"):",1),K,s(o("input",{id:"lfreetext","onUpdate:modelValue":t[1]||(t[1]=t=>e.commaSeparatedFilter=t),type:"text"},null,512),[[a,e.commaSeparatedFilter]]),Q,W,o("button",{disabled:!e.loggedInUser,type:"submit",class:"bg-blue-400 p-2 disabled:opacity-50 disabled:cursor-default"}," Apply filter ",8,["disabled"])],32),s(o("input",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.isFilterActive=t),type:"checkbox"},null,512),[[c,e.isFilterActive]])])};var X=t({name:"ReportList",components:{ReportAddButton:M,ReportFilter:z}});const Y={class:"divide-y divide-gray-100 p-8"};X.render=function(e,t,r,s,a,u){const d=f("ReportAddButton"),i=f("ReportFilter");return n(),l("ul",Y,[o(d),o(i),m(e.$slots,"default")])};var Z=t({name:"ReportComponent",props:{report:{required:!0,type:Object}},setup:e=>({removeReport:()=>{var t;t=e.report,F.value.get(t._["#"]).put({deleted:!0})},timeString:p((()=>new Date(e.report.date).toLocaleString()))})});const ee={key:0,class:"flex-shrink-0 p-4 flex space-x-4 bg-gray-100 m-4 rounded-xl width-50"},te={class:"min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20"},le={class:"text-lg font-semibold text-black mb-0.5"},oe={class:"float-left text-sm font-medium whitespace-pre"},re=o("dt",{class:"text-align"},"Time",-1),se={class:"text-sm font-medium whitespace-pre"},ae=o("dt",{class:""},"Text",-1),ne={class:"text-sm font-medium whitespace-pre"},ue=o("dt",{class:""},"User",-1),de={class:"flex-right"};Z.render=function(e,t,s,a,u,i){return e.report.deleted?d("",!0):(n(),l("article",ee,[o("div",te,[o("h2",le,r(e.report.spotname),1),o("dl",oe,[re,o("dd",null,r(e.timeString),1)]),o("dl",se,[ae,o("dd",null,r(e.report.freetext),1)]),o("dl",ne,[ue,o("dd",null,r(e.report.user),1)])]),o("div",de,[o("button",{onClick:t[1]||(t[1]=(...t)=>e.removeReport&&e.removeReport(...t))},"Remove")])]))};const ie=t({name:"App",components:{Auth:I,ReportList:X,ReportComponent:Z},setup:()=>({filteredReports:p((()=>A.value?$.value.filter((e=>k.value.includes(e.spotname))):$.value))})}),pe=g("data-v-594790a4");b("data-v-594790a4");const ce={id:"app"};v();const me=pe(((e,t,r,s,a,u)=>{const d=f("Auth"),i=f("ReportComponent"),p=f("ReportList");return n(),l("div",ce,[o(d),o(p,null,{default:pe((()=>[(n(!0),l(x,null,w(e.filteredReports,(e=>(n(),l(i,{key:e.id,report:e},null,8,["report"])))),128))])),_:1})])}));ie.render=me,ie.__scopeId="data-v-594790a4";h(ie).mount("#app");
