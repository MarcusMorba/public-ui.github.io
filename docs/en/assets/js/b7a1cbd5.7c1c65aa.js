"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[79393],{63739:(e,t,a)=>{a.d(t,{_:()=>s});var n=a(93700),l=a(50959);const r=function(e,t,a,n,l){return void 0===l&&(l="editor"),`${e}&module=${n}&initialpath=%23%2F${t}%2F${a}&view=${l}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},i=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(n.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:a}=e;const[s,c]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",d=`%2Fsrc%2Fsamples%2F${t}%2F${a}`,p={angular:`${d}.html`,react:`${d}.tsx`,vue:`${d}.vue`,webcomponent:`${d}.html`},u=`/sample-react/#/${t}/${a}`,b={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return l.createElement(n.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:u,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(i,{url:r(m,t,a,p.angular)})),l.createElement("div",null,"React"===s&&l.createElement(i,{url:r(m,t,a,p.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(i,{url:r(m,t,a,p.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(i,{url:r(m,t,a,p.webcomponent)})))}},67084:(e,t,a)=>{a.d(t,{_:()=>_});var n=a(96063),l=a(93700),r=a(50959),o=a(29886);function i(e){const{label:t,name:a,update:n,value:o}=e;return(0,r.useEffect)((()=>{o||n(a,"#000000")}),[]),r.createElement(l.Np,{_on:{onChange:(e,t)=>n(a,t)},_value:o},t)}function s(e){const{attribute:t,label:a,update:n}=e,[o,i]=(0,r.useState)(""),[s,c]=(0,r.useState)(""),[m,d]=(0,r.useState)(""),[p,u]=(0,r.useState)("");let b=!1,g=!1,f=!1,h=!1;t.type.includes("KoliBriAllIcon")?(b=!0,g=!0,f=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(f=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,g=!0)),(0,r.useEffect)((()=>{if(!o||s||m||p){const e={};o&&(e.left=`codicon codicon-${o}`),s&&(e.right=`codicon codicon-${s}`),m&&(e.top=`codicon codicon-${m}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&n(t.name,JSON.stringify(e))}else n(t.name,`codicon codicon-${o}`)}),[o,s,m,p]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,a,b?r.createElement(l.ox,{_summary:"Links"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>i(e)}}))))):"",g?r.createElement(l.ox,{_summary:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}}))))):"",f?r.createElement(l.ox,{_summary:"Oben"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}}))))):"",h?r.createElement(l.ox,{_summary:"Unten"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}}))))):"")}function c(e){const{name:t,label:a,types:n,update:o,value:i}=e,s=[];function c(e){return{label:e,value:e}}return n.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...n.filter((e=>"undefined"!==e)).map(c))):s.push(...n.filter((e=>"undefined"!==e)).map(c)),r.createElement(l.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,a)=>o(t,a[0])},_value:i?[i]:void 0},a)}function m(e){const{attribute:t,update:a,value:n}=e,o=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=r.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return r.createElement(i,{name:t.name,label:m,update:a,value:n});case"_icon":return r.createElement(s,{attribute:t,label:m,update:a,value:n});default:switch(o){case"string":return r.createElement(l.WD,{className:"my-2",_label:!1,_on:{onChange:(e,n)=>a(t.name,n)},_value:n||""},m);case"number":return r.createElement(l.c2,{className:"my-2",_label:!1,_on:{onChange:(e,n)=>a(t.name,n)},_value:n},m);case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:!0===n,_label:!1,_on:{onChange:(e,n)=>a(t.name,n)},_variant:"switch",_value:!0},m);default:return e.length>1?r.createElement(c,{label:m,name:t.name,types:e,update:a,value:n}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,n]);return r.createElement(r.Fragment,null,m)}var d=a(73001),p=a(77192),u=a(85630),b=a.n(u);function g(e){const{tag:t,params:a}=e,n=Object.entries(a).filter((e=>"defaultValues"!==e[0]));let l="";const o=(0,r.useMemo)((()=>{let e="";return n.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const a=t[1],n=t[0].split("-")[1];if(a)if(a.match(/^<.*?>/)?.length){const t=a.indexOf(">");e+=a.substring(0,t)+` slot="${n}"`+a.substring(t)}else e+=`<div slot="${n}">${a}</div>`})),e}),[a]),i=n.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!a.defaultValues.includes(e[0])));for(const[r,d]of i)if(d){let e="";switch(typeof d){case"string":e=` ${r}="${d.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${d.toString()}"`;break;case"boolean":e=d?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(d)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const s=`<kol-${t}${l}>${o}</kol-${t}>`;let c;try{c=(0,p.format)(s,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(m){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(d.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c}))}function f(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),a=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),n={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,version:l.u_}[e.tag];return n?r.createElement(n,t,a.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:a,update:n,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,a||"default"),": ",t,r.createElement("br",null),r.createElement(d.ML,{defaultLanguage:"html",height:"5em",onChange:e=>n(`slot-${a}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const v=["_smart-button","_icon-align"],k={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[t,a]=(0,r.useState)(function(){const e={};return Object.values(n.p).forEach((t=>{const a=t.name.replace("kol-","");e[a]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[a][t.name]=t.defaultValue.replace(/'/g,""),e[a].defaultValues.push(t.name)),void 0!==k[a]?.[t.name]&&(e[a][t.name]=k[a][t.name])})),t.slots.forEach((t=>{const n=`slot-${t.name||"default"}`,l=k[a]?.[n];l&&(e[a][n]=l)}))})),e}()),[i,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!n.p.find((e=>e.name===`kol-${i}`))?.attributes.find((e=>"_label"===e.name))&&!t[i]?._label&&d("_label","Label-Text");!!n.p.find((e=>e.name===`kol-${i}`))?.attributes.find((e=>"_heading"===e.name))&&!t[i]?._heading&&d("_heading","Heading-Text")}),[i]);const c=(0,r.useMemo)((()=>t[i]||{}),[t,i]);function d(e,t){a((a=>{const n={...a[i],[e]:t,defaultValues:a[i].defaultValues.filter((t=>t!==e))};return{...a,[i]:n}}))}const p=Object.values(n.p).find((e=>e.name===`kol-${i}`));return r.createElement(o.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(f,{tag:i,params:c})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(g,{params:c,tag:i}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},p&&p.attributes.map((e=>r.createElement(r.Fragment,null,!v.includes(e.name)&&!e.description.startsWith("Deprecated:")&&r.createElement(m,{key:e.name,attribute:e,update:d,value:c[e.name]})))),p&&0===p.attributes.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-auto"},p&&p.slots.map((e=>r.createElement(h,{key:e.name,description:e.description,name:e.name||"default",update:d,value:c["slot-"+(e.name||"default")]}))),p&&0===p.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},29366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var n=a(15882),l=(a(50959),a(17942)),r=a(53913),o=a(63739),i=a(67084);const s={title:"Popover",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Popover-Komponente.",tags:["Popover","Beschreibung","Spezifikation","Beispiele"]},c=void 0,m={unversionedId:"components/popover",id:"version-1.6.2/components/popover",title:"Popover",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Popover-Komponente.",source:"@site/versioned_docs/version-1.6.2/30-components/popover.mdx",sourceDirName:"30-components",slug:"/components/popover",permalink:"/en/docs/components/popover",draft:!1,tags:[{label:"Popover",permalink:"/en/docs/tags/popover"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"1.6.2",frontMatter:{title:"Popover",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Popover-Komponente.",tags:["Popover","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/en/docs/components/pagination"},next:{title:"Progress",permalink:"/en/docs/components/progress"}},d={},p=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],u={toc:p},b="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(b,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.default,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(i._,{component:"popover",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(o._,{component:"popover",sample:"basic",mdxType:"Configurator"}))}g.isMDXComponent=!0},53913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(15882),l=(a(50959),a(17942));const r={},o=void 0,i={unversionedId:"readmes/popover/readme",id:"version-1.6.2/readmes/popover/readme",title:"readme",description:"Diese neue Komponente wird als ungetestet markiert, da der vollst\xe4ndige Barrierefreiheitstest noch aussteht. Der vollst\xe4ndige Test kann bei neuen Komponenten und Funktionalit\xe4ten auch erst nach einem abgeschlossenen Release erfolgen.",source:"@site/versioned_docs/version-1.6.2/readmes/popover/readme.md",sourceDirName:"readmes/popover",slug:"/readmes/popover/",permalink:"/en/docs/readmes/popover/",draft:!1,tags:[],version:"1.6.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/en/docs/readmes/pagination/"},next:{title:"readme",permalink:"/en/docs/readmes/progress/"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2}],m={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("kol-badge",{_label:"untested"})," Diese neue Komponente wird als ungetestet markiert, da der vollst\xe4ndige Barrierefreiheitstest noch aussteht. Der vollst\xe4ndige Test kann bei neuen Komponenten und Funktionalit\xe4ten auch erst nach einem abgeschlossenen Release erfolgen.")),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Popover"),"-Komponente stellt eine M\xf6glichkeit dar zus\xe4tzliche Inhalte in ein tempor\xe4res Element zu setzen, das, \xe4hnlich wie ",(0,l.kt)("kol-link",{_href:"",_label:"Tooltip"}),", um sein Triggerelement angeordnet ist.\nDas Triggerelement ist immer das im HTML vorangehende Element (previousSibling)."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_align")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_align")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines where to show the Tooltip preferably: top, right, bottom or left. In relation to trigger element."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_show")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_show")),(0,l.kt)("td",{parentName:"tr",align:null},"Makes the element show up."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Der Inhalt des Popover.")))),(0,l.kt)("hr",null))}p.isMDXComponent=!0}}]);