"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3428],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6096:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(52260),r=n(50959);const i=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[l,d]=(0,r.useState)("Preview"),s="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},c={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return r.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:c,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===l&&r.createElement(o,{url:i(s,t,n,m.react,"preview")})),r.createElement("div",null,"Angular"===l&&r.createElement(o,{url:i(s,t,n,m.angular)})),r.createElement("div",null,"React"===l&&r.createElement(o,{url:i(s,t,n,m.react)})),r.createElement("div",null,"Vue"===l&&r.createElement(o,{url:i(s,t,n,m.vue)})),r.createElement("div",null,"Web Component"===l&&r.createElement(o,{url:i(s,t,n,m.webcomponent)})))}},87149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var a=n(15882),r=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Einfache Standard-Card",id:"einfache-standard-card",level:3},{value:"Titel der Card-Komponente",id:"titel-der-card-komponente",level:3},{value:"Inhalts-Container",id:"inhalts-container",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Um einzelne Bereiche Ihrer Webseite optisch hervorzuheben, bietet sich die ",(0,r.kt)("strong",{parentName:"p"},"Card"),"-Komponente an. Mit ihrer Hilfe k\xf6nnen Sie Ihre Inhalte sehr einfach strukturieren."),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"Card"),"-Komponente besteht aus einem ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Titel-Bereich")),", einem ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Inhalts-Bereich"))," und einem ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Fu\xdf-Bereich")),"."),(0,r.kt)("p",null,"Der ",(0,r.kt)("strong",{parentName:"p"},"Titel-Bereich")," wird in einer gr\xf6\xdferen Schrift dargestellt. Der ",(0,r.kt)("strong",{parentName:"p"},"Inhalts-Bereich")," ist optisch durch eine horizontale Trennlinie unterhalb des Titel-Bereichs abgetrennt und wird in der Standardschrift ausgegeben.\nDer ",(0,r.kt)("strong",{parentName:"p"},"Fu\xdf-Bereich")," wird optional durch das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_has-footer"))," aktiviert und stellt dann Platz f\xfcr weitere Inhalte, z.B. eine ",(0,r.kt)("strong",{parentName:"p"},"Button"),"-Komponente bereit. Der Fu\xdf-Bereich ist optisch durch eine horizontale Trennlinie vom Inhalts-Bereich abgetrennt."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _heading="Testtitel" _has-footer _max-height="vh2">\n    <div slot="header">Text im Header-Bereich</div>\n    <div slot="content">\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos\n        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n    </div>\n    <div slot="footer">Weiterer Beispieltext im Fu\xdf-Bereich</div>\n</kol-card>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("kol-card",{_heading:"Testtitel","_has-footer":!0,"_max-height":"vh2"},(0,r.kt)("div",{slot:"header"},"Text im Header-Bereich"),(0,r.kt)("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),(0,r.kt)("div",{slot:"footer"},"Weiterer Beispieltext im Fu\xdf-Bereich")),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"einfache-standard-card"},"Einfache Standard-Card"),(0,r.kt)("p",null,"In der Standardansicht besteht eine ",(0,r.kt)("strong",{parentName:"p"},"Card")," aus einem Titel-Bereich, und einem leeren Inhalts-Bereich.\nDie horizontale Trennlinie zwischen beiden Bereichen setzt KoliBri automatisch."),(0,r.kt)("h3",{id:"titel-der-card-komponente"},"Titel der Card-Komponente"),(0,r.kt)("p",null,"Den Titel der Card bestimmen Sie durch Setzen des Attributs ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_heading")),". Hier k\xf6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.\nBeachten Sie, dass ",(0,r.kt)("strong",{parentName:"p"},"HTML-Code")," nicht erlaubt ist. Sofern nicht gesetzt werden drei Punkte dargestellt.\nDie \xdcberschriftenebene des Titels wird durch das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_level"))," \xfcbergeben. M\xf6glich sind die Level ",(0,r.kt)("strong",{parentName:"p"},"1")," bis ",(0,r.kt)("strong",{parentName:"p"},"6")),(0,r.kt)("h3",{id:"inhalts-container"},"Inhalts-Container"),(0,r.kt)("p",null,"Die Inhalte im Header/Content/Footer-Bereich der Card bestimmen Sie durch Einf\xfcgen eines ",(0,r.kt)("strong",{parentName:"p"},"Inhalts-Containers")," innerhalb des ",(0,r.kt)("inlineCode",{parentName:"p"},"<kol-card></kol-card>-Elements"),". Der Container muss als Attribut ",(0,r.kt)("strong",{parentName:"p"},'slot="header/coontent/footer"')," enthalten. Hier k\xf6nnen Sie beliebigen ",(0,r.kt)("strong",{parentName:"p"},"HTML-Code")," einf\xfcgen."),(0,r.kt)("p",null,"Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden k\xf6nnen, es aber empfohlen wird ein ",(0,r.kt)("inlineCode",{parentName:"p"},"<div></div>"),"-Tag zu verwenden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _heading="Beispiel" _level="1">\n    <div slot="header">Text im Header-Bereich</div>\n    <div slot="content">Text im Inhalts-Bereich</div>\n    <div slot="footer">Text im Fu\xdf-Bereich</div>\n</kol-card>\n')),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,r.kt)("strong",{parentName:"li"},"Card"),"-Komponente, um in sich geschlossene Themenbereiche optisch zu kapseln."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,r.kt)("strong",{parentName:"li"},"Card"),"-Komponente, um Ihre Inhalte semantisch zu strukturieren."),(0,r.kt)("li",{parentName:"ul"},"Vermeiden Sie, zu viele Cards auf einer Inhaltsseite zu verwenden."),(0,r.kt)("li",{parentName:"ul"},"Vermeiden Sie, wichtige Inhalte innerhalb der Card-Komponente zu platzieren, wenn sich die zugeh\xf6rigen Aktions-Elemente (Buttons, Links, etc.) nicht innerhalb der gleichen Card befinden.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hasFooter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_has-footer")),(0,r.kt)("td",{parentName:"tr",align:null},"Macht den Footerbereich der Card sichtbar."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_heading")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_heading")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die \xdcberschrift der Card an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_headline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_headline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Verwende stattdessen das Property _heading.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Gibt die \xdcberschrift der Card an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_level")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_level")),(0,r.kt)("td",{parentName:"tr",align:null},"Setzt den H-Level, von 1 bis 6, der \xdcberschrift."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))))),(0,r.kt)("h2",{id:"slots"},"Slots"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Slot"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"content"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich der Card.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"footer"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Fu\xdfbereich der Card.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"header"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Kopfbereich unterhalb der \xdcberschrift der Card.")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./heading"},"kol-heading-wc"))),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-card --\x3e kol-heading-wc\n  style kol-card fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}o.isMDXComponent=!0;var d=n(6096);const s={title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},p=void 0,m={unversionedId:"components/card",id:"components/card",title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",source:"@site/docs/30-components/card.mdx",sourceDirName:"30-components",slug:"/components/card",permalink:"/docs/components/card",draft:!1,tags:[{label:"Card",permalink:"/docs/tags/card"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/components/button"},next:{title:"Details",permalink:"/docs/components/details"}},c={},u=[{value:"Beispiele",id:"beispiele",level:2},{value:"Card",id:"card",level:3},{value:"Best\xe4tigingscard",id:"best\xe4tigingscard",level:3},{value:"Cards im Grid-Flu\xdf",id:"cards-im-grid-flu\xdf",level:3},{value:"Card als Artikelliste",id:"card-als-artikelliste",level:3}],k={toc:u},h="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)("h3",{id:"card"},"Card"),(0,r.kt)(d._,{component:"card",sample:"basic",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"best\xe4tigingscard"},"Best\xe4tigingscard"),(0,r.kt)(d._,{component:"card",sample:"confirm",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"cards-im-grid-flu\xdf"},"Cards im Grid-Flu\xdf"),(0,r.kt)(d._,{component:"card",sample:"flex",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"card-als-artikelliste"},"Card als Artikelliste"),(0,r.kt)(d._,{component:"card",sample:"selection",mdxType:"Configurator"}))}g.isMDXComponent=!0}}]);