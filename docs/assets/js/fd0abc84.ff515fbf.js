"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[3359],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,b=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(b,l(l({ref:n},d),{},{components:t})):r.createElement(b,l({ref:n},d))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},816:(e,n,t)=>{t.d(n,{_:()=>p});var r=t(7770),i=t(9496);const a=function(e,n,t,r,i){return void 0===i&&(i="editor"),`${e}&module=${r}&initialpath=%23%2F${n}%2F${t}&view=${i}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:n,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(r.Nv,{_href:n,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},p=e=>{let{component:n,sample:t}=e;const[l,p]=(0,i.useState)("Preview"),s="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",d=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,u={angular:`${d}.html`,react:`${d}.tsx`,vue:`${d}.vue`,webcomponent:`${d}.html`},c={onSelect:(e,n)=>{switch(n){case 1:p((()=>"Angular"));break;case 2:p((()=>"React"));break;case 3:p((()=>"Vue"));break;case 4:p((()=>"Web Component"));break;default:p((()=>"Preview"))}}};return i.createElement(r.UD,{_ariaLabel:"Code-Beispiel",_on:c,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===l&&i.createElement(o,{url:a(s,n,t,u.react,"preview")})),i.createElement("div",null,"Angular"===l&&i.createElement(o,{url:a(s,n,t,u.angular)})),i.createElement("div",null,"React"===l&&i.createElement(o,{url:a(s,n,t,u.react)})),i.createElement("div",null,"Vue"===l&&i.createElement(o,{url:a(s,n,t,u.vue)})),i.createElement("div",null,"Web Component"===l&&i.createElement(o,{url:a(s,n,t,u.webcomponent)})))}},978:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var r=t(5882),i=(t(9496),t(9613));const a={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2}]};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Lader, wie die ",(0,i.kt)("strong",{parentName:"p"},"Spin"),"-Komponente, informieren die Nutzer:innen \xfcber Lade- oder Rechenvorg\xe4nge, die vom System ausgef\xfchrt werden. Der Fortschritt kann durch eine wiederholte Animation kommuniziert werden."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<div>\n    <kol-spin _show />\n</div>\n")),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-spin",{_show:!0})),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"Verwenden Sie das Attribut ",(0,i.kt)("inlineCode",{parentName:"p"},"_show")," um festzulegen, ob der Spin angezeigt wird."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie Lader, um die Nutzer:innen \xfcber einen Ladezustand oder einen laufenden Prozess zu informieren."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie Lader an konsistenten Stellen in der Benutzeroberfl\xe4che, um die Benutzererfahrung zu verbessern."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie einen Lader, um anzuzeigen, wie viel Arbeit noch \xfcbrig ist, bevor das Ergebnis angezeigt werden kann.")),(0,i.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Abrufen neuer oder aktualisierter Suchergebnisse."),(0,i.kt)("li",{parentName:"ul"},"Einloggen in gesch\xfctzte Bereiche."),(0,i.kt)("li",{parentName:"ul"},"Download von Inhalten."),(0,i.kt)("li",{parentName:"ul"},"Laden von umfangreichen Inhalten, z.B. Videos.")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_show")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_show")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Ladeanzeige eingeblendet wird oder nicht."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("hr",null))}l.isMDXComponent=!0;var o=t(816);const p={title:"Spin",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Spin-Komponente.",tags:["Spin","Beschreibung","Spezifikation","Beispiele"]},s=void 0,d={unversionedId:"components/spin",id:"components/spin",title:"Spin",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Spin-Komponente.",source:"@site/docs/30-components/spin.mdx",sourceDirName:"30-components",slug:"/components/spin",permalink:"/docs/components/spin",draft:!1,tags:[{label:"Spin",permalink:"/docs/tags/spin"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Spin",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Spin-Komponente.",tags:["Spin","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Span",permalink:"/docs/components/span"},next:{title:"Table",permalink:"/docs/components/table"}},u={},c=[{value:"Beispiele",id:"beispiele",level:2},{value:"Spin / Ladeanzeige",id:"spin--ladeanzeige",level:3}],m={toc:c};function b(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)("h3",{id:"spin--ladeanzeige"},"Spin / Ladeanzeige"),(0,i.kt)(o._,{component:"spin",sample:"basic",mdxType:"Configurator"}))}b.isMDXComponent=!0}}]);