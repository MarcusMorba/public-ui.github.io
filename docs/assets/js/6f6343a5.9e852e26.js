"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[42958],{63739:(e,t,n)=>{n.d(t,{_:()=>o});var a=n(93700),r=n(50959);const l=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},s=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},o=e=>{let{component:t,sample:n}=e;const[o,d]=(0,r.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",c=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${c}.html`,react:`${c}.tsx`,vue:`${c}.vue`,webcomponent:`${c}.html`},p=`/sample-react/#/${t}/${n}`,b={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return r.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===o&&r.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),r.createElement("div",null,"Angular"===o&&r.createElement(s,{url:l(u,t,n,m.angular)})),r.createElement("div",null,"React"===o&&r.createElement(s,{url:l(u,t,n,m.react)})),r.createElement("div",null,"Vue"===o&&r.createElement(s,{url:l(u,t,n,m.vue)})),r.createElement("div",null,"Web Component"===o&&r.createElement(s,{url:l(u,t,n,m.webcomponent)})))}},67084:(e,t,n)=>{n.d(t,{_:()=>N});var a=n(96063),r=n(93700),l=n(50959),i=n(29886);function s(e){const{label:t,name:n,update:a,value:i}=e;return(0,l.useEffect)((()=>{i||a(n,"#000000")}),[]),l.createElement(r.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:i},t)}function o(e){const{attribute:t,label:n,update:a}=e,[i,s]=(0,l.useState)(""),[o,d]=(0,l.useState)(""),[u,c]=(0,l.useState)(""),[m,p]=(0,l.useState)("");let b=!1,k=!1,g=!1,h=!1;t.type.includes("KoliBriAllIcon")?(b=!0,k=!0,g=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(g=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,k=!0)),(0,l.useEffect)((()=>{if(!i||o||u||m){const e={};i&&(e.left=`codicon codicon-${i}`),o&&(e.right=`codicon codicon-${o}`),u&&(e.top=`codicon codicon-${u}`),m&&(e.bottom=`codicon codicon-${m}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${i}`)}),[i,o,u,m]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return l.createElement("div",null,n,b?l.createElement(r.ox,{_summary:"Links"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>s(e)}}))))):"",k?l.createElement(r.ox,{_summary:"Rechts"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}}))))):"",g?l.createElement(r.ox,{_summary:"Oben"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}}))))):"",h?l.createElement(r.ox,{_summary:"Unten"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"")}function d(e){const{name:t,label:n,types:a,update:i,value:s}=e,o=[];function d(e){return{label:e,value:e}}return a.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...a.filter((e=>"undefined"!==e)).map(d))):o.push(...a.filter((e=>"undefined"!==e)).map(d)),l.createElement(r.r7,{className:"my-2",_list:JSON.stringify(o),_on:{onChange:(e,n)=>i(t,n[0])},_value:s?[s]:void 0},n)}function u(e){const{attribute:t,update:n,value:a}=e,i=(0,l.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,l.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),u=l.createElement(r.T5,{_title:t.description},t.name);switch(t.name){case"_color":return l.createElement(s,{name:t.name,label:u,update:n,value:a});case"_icon":return l.createElement(o,{attribute:t,label:u,update:n,value:a});default:switch(i){case"string":return l.createElement(r.WD,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},u);case"number":return l.createElement(r.c2,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a},u);case"boolean":return l.createElement(r.TE,{className:"my-2",_checked:!0===a,_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch",_value:!0},u);default:return e.length>1?l.createElement(d,{label:u,name:t.name,types:e,update:n,value:a}):l.createElement("p",null,"Attribut: '",t.name,"'",l.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return l.createElement(l.Fragment,null,u)}var c=n(73001),m=n(77192),p=n(85630),b=n.n(p);function k(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let r="";const i=(0,l.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),s=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[l,c]of s)if(c){let e="";switch(typeof c){case"string":e=` ${l}="${c.replace(/"/g,"'")}"`;break;case"number":e=` ${l}="${c.toString()}"`;break;case"boolean":e=c?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(c)}"`;break;default:e="Never give up hope, one day everything will be fixed."}r+=e}const o=`<kol-${t}${r}>${i}</kol-${t}>`;let d;try{d=(0,m.format)(o,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(u){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return l.createElement("div",{className:"h-48 rounded-md overflow-hidden"},l.createElement(c.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d}))}function g(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),n=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),a={abbr:r.T5,accordion:r.RZ,alert:r.K5,avatar:r.Ek,badge:r.Er,breadcrumb:r.lo,button:r.ic,"button-group":r.uz,"button-link":r.f6,card:r.Gc,details:r.ox,form:r.m5,heading:r.HA,icon:r.Jl,image:r.Cd,"indented-text":r.CV,"input-checkbox":r.TE,"input-color":r.Np,"input-date":r.O,"input-email":r.Lj,"input-file":r.CX,"input-number":r.c2,"input-password":r.z5,"input-radio":r.sy,"input-range":r.TQ,"input-text":r.WD,kolibri:r.Vs,link:r.Nv,"link-button":r.Kc,"link-group":r.$o,logo:r.QK,modal:r.Ud,nav:r.MA,pagination:r.Q4,popover:r.hV,progress:r.WR,quote:r.VZ,select:r.r7,"skip-nav":r.P,spin:r.qq,"split-button":r.KJ,symbol:r.is,table:r.Vp,tabs:r.UD,textarea:r.Qs,toast:r.CO,version:r.u_}[e.tag];return a?l.createElement(a,t,n.map((e=>l.createElement("div",{key:e[0],slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}})))):l.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:r}=e;return l.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},l.createElement("b",null,n||"default"),": ",t,l.createElement("br",null),l.createElement(c.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r}))}const v=["_smart-button","_icon-align"],f={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function N(e){const[t,n]=(0,l.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name)),void 0!==f[n]?.[t.name]&&(e[n][t.name]=f[n][t.name])})),t.slots.forEach((t=>{const a=`slot-${t.name||"default"}`,r=f[n]?.[a];r&&(e[n][a]=r)}))})),e}()),[s,o]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${s}`))?.attributes.find((e=>"_label"===e.name))&&!t[s]?._label&&c("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${s}`))?.attributes.find((e=>"_heading"===e.name))&&!t[s]?._heading&&c("_heading","Heading-Text")}),[s]);const d=(0,l.useMemo)((()=>t[s]||{}),[t,s]);function c(e,t){n((n=>{const a={...n[s],[e]:t,defaultValues:n[s].defaultValues.filter((t=>t!==e))};return{...n,[s]:a}}))}const m=Object.values(a.p).find((e=>e.name===`kol-${s}`));return l.createElement(i.Z,null,(()=>l.createElement(l.Fragment,null,l.createElement(r.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),l.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},l.createElement(r.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},l.createElement("div",{className:"p-2"},l.createElement(g,{tag:s,params:d})),l.createElement("div",{className:"lg:col-span-2"},l.createElement(k,{params:d,tag:s}))),l.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},l.createElement(r.HA,{_level:3,_label:"Konfigurator"}),l.createElement("div",null,l.createElement(r.HA,{_level:4,_label:"Properties"}),l.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},m&&m.attributes.map((e=>l.createElement(l.Fragment,null,!v.includes(e.name)&&!e.description.startsWith("Deprecated:")&&l.createElement(u,{key:e.name,attribute:e,update:c,value:d[e.name]})))),m&&0===m.attributes.length&&l.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),l.createElement(r.HA,{_level:4,_label:"Slots"}),l.createElement("div",{className:"max-h-56 p-2 overflow-auto"},m&&m.slots.map((e=>l.createElement(h,{key:e.name,description:e.description,name:e.name||"default",update:c,value:d["slot-"+(e.name||"default")]}))),m&&0===m.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},23774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=n(15882),r=(n(50959),n(17942)),l=n(43496),i=n(63739),s=n(67084);const o={title:"Tabs",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tabs-Komponente.",tags:["Tabs","Beschreibung","Spezifikation","Beispiele"]},d=void 0,u={unversionedId:"components/tabs",id:"version-1.5.3/components/tabs",title:"Tabs",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tabs-Komponente.",source:"@site/versioned_docs/version-1.5.3/30-components/tabs.mdx",sourceDirName:"30-components",slug:"/components/tabs",permalink:"/docs/1.5.3/components/tabs",draft:!1,tags:[{label:"Tabs",permalink:"/docs/1.5.3/tags/tabs"},{label:"Beschreibung",permalink:"/docs/1.5.3/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/1.5.3/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/1.5.3/tags/beispiele"}],version:"1.5.3",frontMatter:{title:"Tabs",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tabs-Komponente.",tags:["Tabs","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Table",permalink:"/docs/1.5.3/components/table"},next:{title:"Textarea",permalink:"/docs/1.5.3/components/textarea"}},c={},m=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],p={toc:m},b="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.default,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,r.kt)(s._,{component:"tabs",mdxType:"LiveEditorCompact"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)(i._,{component:"tabs",sample:"basic",mdxType:"Configurator"}))}k.isMDXComponent=!0},43496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(15882),r=(n(50959),n(17942));const l={},i=void 0,s={unversionedId:"readmes/tabs/readme",id:"version-1.5.3/readmes/tabs/readme",title:"readme",description:"Die Tabs-Komponente wird verwendet, um verwandte Inhalte auf derselben Seite zu organisieren und zwischen ihnen zu navigieren. Tabs sorgen daf\xfcr, dass gro\xdfe Inhaltsmengen f\xfcr Nutzerinnen einen Hinweis darauf gibt, welcher Inhalt angezeigt wird, wenn die Registerkarte ausgew\xe4hlt wird.",source:"@site/versioned_docs/version-1.5.3/readmes/tabs/readme.md",sourceDirName:"readmes/tabs",slug:"/readmes/tabs/",permalink:"/docs/1.5.3/readmes/tabs/",draft:!1,tags:[],version:"1.5.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/docs/1.5.3/readmes/table/"},next:{title:"readme",permalink:"/docs/1.5.3/readmes/textarea/"}},o={},d=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Definition der Registerkarten",id:"definition-der-registerkarten",level:3},{value:"Registerkarte deaktivieren",id:"registerkarte-deaktivieren",level:3},{value:"Close-Icon im Registekartenheader",id:"close-icon-im-registekartenheader",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"Tabs"),"-Komponente wird verwendet, um verwandte Inhalte auf derselben Seite zu organisieren und zwischen ihnen zu navigieren. Tabs sorgen daf\xfcr, dass gro\xdfe Inhaltsmengen f\xfcr Nutzer:innen leichter organisiert werden k\xf6nnen. Tabs sind in Registerkartenleisten angeordnet, die als Registerkartengruppen bezeichnet werden, wobei die Registerkartenbeschriftung den Nutzer:innen einen Hinweis darauf gibt, welcher Inhalt angezeigt wird, wenn die Registerkarte ausgew\xe4hlt wird."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("p",null,"Nach dem Laden der Komponente wird die erste Registerkarte links automatisch optisch als ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"aktiv"))," hervorgehoben. Jede Registerkarte \xfcbernimmt den Status ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"aktiv"))," nach dem Anklicken. Der Status ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"aktiv"))," kann mit dem Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_selected"))," auch manuell auf den Index der Registrierkarte gesetzt werden.\nDie einzelnen Inhalte der Registerkarte werden in einem eigenen ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLDivElement")," als ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>Inhalt der Registerkarte</div>")," innerhalb von ",(0,r.kt)("inlineCode",{parentName:"p"},"<kol-tabs></kol-tabs>")," notiert."),(0,r.kt)("p",null,"Die Zuordnung der Daten im Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_tabs"))," zu den Div-Elementen erfolgt automatisch."),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-tabs\n    _selected="0"\n    _tabs=\'[{"_label":"Tab 1","_icon":"codicon codicon-home"},{"_label":"Tab 2", "_on": {"onClose": true}},{"_label":"Tab 3"}]\'\n>\n    <div>Inhalt von Tab 1</div>\n    <div>Inhalt von Tab 2</div>\n    <div>Inhalt von Tab 3</div>\n</kol-tabs>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("kol-tabs",{_selected:"0",_tabs:'[{"_label":"Tab 1","_icon":"codicon codicon-home"},{"_label":"Tab 2", "_on": {"onClose": true}},{"_label":"Tab 3"}]'},(0,r.kt)("div",null,"Inhalt von Tab 1"),(0,r.kt)("div",null,"Inhalt von Tab 2"),(0,r.kt)("div",null,"Inhalt von Tab 3")),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"definition-der-registerkarten"},"Definition der Registerkarten"),(0,r.kt)("p",null,"Die Daten f\xfcr die Registerkarten k\xf6nnen als Objekte oder JSON-String an das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_tabs"))," \xfcbergeben werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    { "_label": "Tab 1", "_icon": "codicon codicon-home" },\n    { "_label": "Tab 2", "_on": { "onClose": true } },\n    { "_label": "Tab 3" }\n]\n')),(0,r.kt)("h3",{id:"registerkarte-deaktivieren"},"Registerkarte deaktivieren"),(0,r.kt)("p",null,"Um eine Registerkarte zu deaktivieren, verwenden Sie das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_disabled")),"."),(0,r.kt)("h3",{id:"close-icon-im-registekartenheader"},"Close-Icon im Registekartenheader"),(0,r.kt)("p",null,"Wenn Sie eine schlie\xdfbare Registerkarte ben\xf6tigen, k\xf6nnen Sie dies \xfcber das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_on"))," und den Wert ",(0,r.kt)("strong",{parentName:"p"},'"onClose":true')," realisieren."),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Registerkarten, um verwandte Inhalte so zu organisieren und zu gruppieren, dass Nutzer:innen die Seite nicht verlassen m\xfcssen."),(0,r.kt)("li",{parentName:"ul"},"Registerkarten sollten in einer einzelnen, scrollbaren (falls erforderlich) Zeile \xfcber dem Inhalt positioniert werden, auf den sie sich beziehen."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie die Registerkartenbezeichnung, um den Inhalt dieser Registerkarte klar und pr\xe4gnant zu beschreiben und zwischen den verschiedenen Abschnitten zu unterscheiden."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Registerkarten nicht, um eine Sequenz oder einen Verlauf von Inhalten zu erstellen, die der Benutzer in einer bestimmten Reihenfolge lesen soll."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Registerkarten nicht zum Vergleichen von Inhalten (z. B. unterschiedliche Spezifikationen)."),(0,r.kt)("li",{parentName:"ul"},"Ber\xfccksichtigen Sie die Anzahl der Registerkarten, die Sie in die Registerkartengruppe aufnehmen. Wenn Sie das Gef\xfchl haben, dass die Zahl zu gro\xdf wird, sollten Sie den Inhalt weiter aufteilen oder ein anderes Navigationsmuster/eine andere Komponente verwenden.")),(0,r.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xdcber Registerkarten k\xf6nnen Sie z.B. Dienstleistungen oder Vorteile in verschiedene Kategorien einteilen."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Registerkarten, um Benutzerprofile in verschiedene Abschnitte zu gliedern (z. B. pers\xf6nliche Informationen, Termine, aktive Services)."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Registerkarten, um FAQs in verschiedene Kategorien zu unterteilen.")),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,r.kt)("p",null,"Ausgew\xe4hlte Tabs werden beim Anspringen mit der ",(0,r.kt)("strong",{parentName:"p"},"Tab-Taste")," mit einem deutlichen Focus-Rahmen umgeben. Die einzelnen Tabs k\xf6nnen mit den Pfeiltasten ",(0,r.kt)("strong",{parentName:"p"},"links")," und ",(0,r.kt)("strong",{parentName:"p"},"rechts")," durchlaufen werden."),(0,r.kt)("p",null,"Nach Anspringen eines Tabs kann mit Hilfe der ",(0,r.kt)("strong",{parentName:"p"},"Tab-Taste")," vom Header in den Inhaltsbereich der Registerkarte gewechselt werden."),(0,r.kt)("p",null,"Unabh\xe4ngig davon ob die Tab-Schalter oben, rechts, unten oder links angeordnet sind, bleibt die Tastatursteuerung gleich. Hintergrund ist, dass das Layout bei der Nutzung eines Screenreaders keine Rolle spielt. Eine unterschiedliche Pfeil-Tastensteuerung aufgrund der Layout-Anordnung w\xfcrde daher nicht dem \xfcblichen Bedienkonzept des W3C entsprechen."),(0,r.kt)("p",null,"Bei der Umsetzung der Tastatursteuerung wurde sich an den Beispielen des W3C's orientiert."),(0,r.kt)("p",null,"Hier steht immer der beeintr\xe4chtige Nutzende im Vordergrund. Um m\xf6glichst effizient \xfcber die gesamte Seite/Anwendung zu navigieren, ist nur 1 Schalter aus der Tab-Serie fokussierbar. Sobald der Nutzende auf der Tab-Navigation selbst ist, werden die Pfeiltasten verwendet, um zwischen den Tabs selbst wechseln."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taste"),(0,r.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Fokussiert den ersten aktiven Tab. Auf vorhandene Close-Icons k\xf6nnen mit der Tab-Taste erreicht werden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Pfeil-Tasten (links")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"rechts)")),(0,r.kt)("td",{parentName:"tr",align:null},"Wechselt zwischen den Tabs.")))),(0,r.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html"},"https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dequeuniversity.com/library/aria/tabpanel"},"https://dequeuniversity.com/library/aria/tabpanel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://design-system.service.gov.uk/components/tabs/"},"https://design-system.service.gov.uk/components/tabs/"))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaLabel")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Liste der Callback-Funktionen an, die auf Events aufgerufen werden sollen."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"{ onCreate?: EventCallback<Event>")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"{ label: string; callback: EventCallback<Event>; }")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined; } & { onSelect?: EventValueOrEventCallback<MouseEvent")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"CustomEvent<any>")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"KeyboardEvent")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"PointerEvent, number>")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_selected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_selected")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welches Tab selektiert sein soll."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabs")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabs")),(0,r.kt)("td",{parentName:"tr",align:null},"Setzt die Daten f\xfcr die Registrierkarten."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TabButtonProps[]")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabsAlign")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabs-align")),(0,r.kt)("td",{parentName:"tr",align:null},"Setzt die Position der Registrierkarten."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'top'"))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./button-group"},"kol-button-group-wc")),(0,r.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-tabs --\x3e kol-button-group-wc\n  kol-tabs --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  style kol-tabs fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);