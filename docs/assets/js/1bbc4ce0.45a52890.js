"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[57301],{63739:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(57349),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,l.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},c=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===d&&l.createElement("iframe",{src:c,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===d&&l.createElement(o,{url:i(p,t,n,m.angular)})),l.createElement("div",null,"React"===d&&l.createElement(o,{url:i(p,t,n,m.react)})),l.createElement("div",null,"Vue"===d&&l.createElement(o,{url:i(p,t,n,m.vue)})),l.createElement("div",null,"Web Component"===d&&l.createElement(o,{url:i(p,t,n,m.webcomponent)})))}},31617:(e,t,n)=>{n.d(t,{_:()=>N});var a=n(6826),l=n(57349),i=n(50959),r=n(29886);function o(e){const{label:t,name:n,update:a,value:r}=e;return(0,i.useEffect)((()=>{r||a(n,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function d(e){const{attribute:t,label:n,update:a}=e,[r,o]=(0,i.useState)(""),[d,s]=(0,i.useState)(""),[p,u]=(0,i.useState)(""),[m,c]=(0,i.useState)("");let k=!1,g=!1,b=!1,h=!1;t.type.includes("KoliBriAllIcon")?(k=!0,g=!0,b=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(b=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(k=!0,g=!0)),(0,i.useEffect)((()=>{if(!r||d||p||m){const e={};r&&(e.left=`codicon codicon-${r}`),d&&(e.right=`codicon codicon-${d}`),p&&(e.top=`codicon codicon-${p}`),m&&(e.bottom=`codicon codicon-${m}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${r}`)}),[r,d,p,m]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,k?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",g?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>s(e)}}))))):"",b?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}}))))):"",h?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}}))))):"")}function s(e){const{name:t,label:n,types:a,update:r,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(d),_on:{onChange:(e,n)=>r(t,n[0])},_value:o?[o]:void 0},n)}function p(e){const{attribute:t,update:n,value:a}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),p=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),p=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(o,{name:t.name,label:p,update:n,value:a});case"_icon":return i.createElement(d,{attribute:t,label:p,update:n,value:a});default:switch(r){case"string":return i.createElement(l.WD,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},p);case"number":return i.createElement(l.c2,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a},p);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:!0===a,_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch",_value:!0},p);default:return e.length>1?i.createElement(s,{label:p,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,p)}var u=n(6453),m=n(77192),c=n(85630),k=n.n(c);function g(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,i.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,u]of o)if(u){let e="";switch(typeof u){case"string":e=` ${i}="${u.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${u.toString()}"`;break;case"boolean":e=u?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(u)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${t}${l}>${r}</kol-${t}>`;let s;try{s=(0,m.format)(d,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(p){s=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:s}))}function b(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"];function N(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name))}))})),e}()),[o,d]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&u("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&u("_heading","Heading-Text")}),[o]);const s=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function u(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const m=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(b,{tag:o,params:s})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(g,{params:s,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},m&&m.attributes.map((e=>i.createElement(i.Fragment,null,!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&i.createElement(p,{key:e.name,attribute:e,update:u,value:s[e.name]})))),m&&0===m.attributes.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-auto"},m&&m.slots.map((e=>i.createElement(h,{key:e.name,description:e.description,name:e.name,update:u,value:s["slot-"+e.name]}))),m&&0===m.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},71064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var a=n(15882),l=(n(50959),n(17942)),i=n(55613),r=n(63739),o=n(31617);const d={title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",tags:["LinkGroup","Beschreibung","Spezifikation","Beispiele"]},s=void 0,p={unversionedId:"components/link-group",id:"components/link-group",title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",source:"@site/docs/30-components/link-group.mdx",sourceDirName:"30-components",slug:"/components/link-group",permalink:"/docs/next/components/link-group",draft:!1,tags:[{label:"LinkGroup",permalink:"/docs/next/tags/link-group"},{label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",tags:["LinkGroup","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"LinkButton",permalink:"/docs/next/components/link-button"},next:{title:"Link",permalink:"/docs/next/components/link"}},u={},m=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],c={toc:m},k="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.default,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(o._,{component:"link-group",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(r._,{component:"link-group",sample:"basic",mdxType:"Configurator"}))}g.isMDXComponent=!0},55613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(15882),l=(n(50959),n(17942));const i={},r=void 0,o={unversionedId:"readmes/link-group/readme",id:"readmes/link-group/readme",title:"readme",description:"Die LinkGroup-Komponente bildet einen umfassenden Container f\xfcr eine vertikale oder horizontale Liste von Links. Sie rendert eine auf Barrierefreiheit optimierte Liste von Links, die als Text, als Icon oder auch in Kombination ausgegeben werden kann. M\xf6glich ist auch die Ausgabe von versteckten Links.",source:"@site/docs/readmes/link-group/readme.md",sourceDirName:"readmes/link-group",slug:"/readmes/link-group/",permalink:"/docs/next/readmes/link-group/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/docs/next/readmes/link-button/"},next:{title:"readme",permalink:"/docs/next/readmes/logo/"}},d={},s=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Links",id:"links",level:3},{value:"\xdcberschrift",id:"\xfcberschrift",level:3},{value:"Ausrichtung",id:"ausrichtung",level:3},{value:"List-Style-Type",id:"list-style-type",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"LinkGroup innerhalb eines Flie\xdftextes",id:"linkgroup-innerhalb-eines-flie\xdftextes",level:4},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"LinkGroup"),"-Komponente bildet einen umfassenden Container f\xfcr eine vertikale oder horizontale Liste von Links. Sie rendert eine auf Barrierefreiheit optimierte Liste von Links, die als Text, als Icon oder auch in Kombination ausgegeben werden kann. M\xf6glich ist auch die Ausgabe von versteckten Links."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<kol-link-group\n    _label=\"Einfache LinkGroup\"\n    _links=\"[{'_label':'Link 1','_href':'https://www.w3.org'},{'_label':'Link 2','_href':'https://www.w3.org'},{'_label':'Link 3','_href':'https://www.w3.org'}]\"\n    _list-style-type=\"disc\"\n    _orientation=\"'vertical\"\n></kol-link-group>\n")),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("p",null,(0,l.kt)("kol-link-group",{_label:"Einfache LinkGroup",_caption:"\xdcberschrift der LinkGroup",_links:"[{'_label':'Link 1','_href':'https://www.w3.org'},{'_label':'Link 2','_href':'https://www.w3.org'},{'_label':'Link 3','_href':'https://www.w3.org'}]","_list-style-type":"disc",_orientation:"'vertical"})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"links"},"Links"),(0,l.kt)("p",null,"Die auszugebenden Links werden als JSON-Objekt an das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_links"))," \xfcbergeben. Dort k\xf6nnen die Attribute des ",(0,l.kt)("kol-link",{_href:"",_label:"Links"})," \xfcbergeben werden, ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_href"))," und ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_label"))," sind jedoch Pflicht."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"[\n    { _label: 'Link 1', _href: 'https://www.w3.org' },\n    { _label: 'Link 2', _href: 'https://www.w3.org' },\n    { _label: 'Link 3', _href: 'https://www.w3.org' },\n];\n")),(0,l.kt)("h3",{id:"\xfcberschrift"},"\xdcberschrift"),(0,l.kt)("p",null,"Die \xdcberschrift der LinkGroup wird \xfcber das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_heading"))," \xfcbergeben."),(0,l.kt)("h3",{id:"ausrichtung"},"Ausrichtung"),(0,l.kt)("p",null,"\xdcber das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_orientation"))," kann die Ausrichtung der LinkGroup bestimmt werden. M\xf6gliche Werte sind ",(0,l.kt)("inlineCode",{parentName:"p"},"horizontal")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"vertical")," (Standard)."),(0,l.kt)("h3",{id:"list-style-type"},"List-Style-Type"),(0,l.kt)("p",null,"\xdcber das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_list-style-type"))," kann bestimmt werden, mit welchem Symbol die einzelnen Zeilen der Group dargestellt werden sollen. Es stehen diese vier M\xf6glichkeiten zur Auswahl:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"circle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"square")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"none"))),(0,l.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("h4",{id:"linkgroup-innerhalb-eines-flie\xdftextes"},"LinkGroup innerhalb eines Flie\xdftextes"),(0,l.kt)("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.",(0,l.kt)("p",null,(0,l.kt)("kol-link-group",{_label:"LinkGroup innerhalb eines Flie\xdftextes",_links:"[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"})),(0,l.kt)("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis\nnemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.")),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Taste"),(0,l.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Fokussiert das erste Element der LinkGroup.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Enter")),(0,l.kt)("td",{parentName:"tr",align:null},"Ruft den hinterlegten Link auf.")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use ","_","label instead",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Setzt die semantische Beschriftung der Komponente."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_heading")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_heading")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die optionale \xdcberschrift zur Link-Gruppe an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_level")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_level")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_links")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_links")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the list of links to render."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LinkProps[]")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_listStyleType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_list-style-type")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den List-Style-Typen f\xfcr ungeordnete Listen aus. Wird bei horizontalen LinkGroups als Trenner verwendet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"circle"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"decimal"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"decimal-leading-zero"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"disc"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"lower-alpha"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"lower-greek"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"lower-latin"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"lower-roman"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"none"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"square"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"upper-alpha"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"upper-latin"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"upper-roman"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ordered")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ordered")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Wird mittels der Property ","_","list-style-type automatisch gesteuert.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Gibt an, ob eine Ordered- oder eine Unordered-List verwendet werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines whether the orientation of the component is horizontal or vertical."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"horizontal"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"vertical"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'vertical'"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./heading"},"kol-heading-wc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./link"},"kol-link"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-link-group --\x3e kol-heading-wc\n  kol-link-group --\x3e kol-link\n  kol-link --\x3e kol-link-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  style kol-link-group fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);