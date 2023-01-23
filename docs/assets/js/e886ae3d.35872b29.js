"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8629:(e,t,n)=>{n.d(t,{_:()=>c});var r=n(4069),i=n(7294);const a=function(e,t,n,r,i){return void 0===i&&(i="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${i}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},c=e=>{let{component:t,sample:n}=e;const[l,c]=(0,i.useState)("Preview"),d="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",s=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${s}.html`,react:`${s}.tsx`,vue:`${s}.vue`,webcomponent:`${s}.html`},u={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return i.createElement(r.UD,{_ariaLabel:"Code-Beispiel",_on:u,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===l&&i.createElement(o,{url:a(d,t,n,p.react,"preview")})),i.createElement("div",null,"Angular"===l&&i.createElement(o,{url:a(d,t,n,p.angular)})),i.createElement("div",null,"React"===l&&i.createElement(o,{url:a(d,t,n,p.react)})),i.createElement("div",null,"Vue"===l&&i.createElement(o,{url:a(d,t,n,p.vue)})),i.createElement("div",null,"Web Component"===l&&i.createElement(o,{url:a(d,t,n,p.webcomponent)})))}},2522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}]};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Heading"),"-Komponente kann \xfcberall dort verwendet werden, wo eine \xdcberschrift angezeigt werden soll. Durch die Verwendung der unterschiedlichen Gr\xf6\xdfen, lassen sich Inhalte klar strukturieren und Seiten wirkungsvoll und abwechslungsreich pr\xe4sentieren. Sie trennt Styling von Semantik und erm\xf6glicht Flexibilit\xe4t."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<div>\n    <kol-heading _level="1">Inhalt einer H1-\xdcberschrift</kol-heading>\n</div>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-heading",{_level:"1"},"Inhalt einer H1-\xdcberschrift")),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"Geben Sie mit dem Attribut ",(0,i.kt)("inlineCode",{parentName:"p"},"_level")," das H-Element an, das Sie ausgeben m\xf6chten. M\xf6glich sind H1 bis H6."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Achten Sie bei der Verwendung von Headings auf die empfohlene Semantik f\xfcr die Suchmaschinenoptimierung."),(0,i.kt)("li",{parentName:"ul"},"Setzen Sie Headings in verschiedenen Gr\xf6\xdfen ein, um eine sinnvolle Struktur Ihrer Inhalte zu erzeugen."),(0,i.kt)("li",{parentName:"ul"},"Kombinieren Sie die ",(0,i.kt)("strong",{parentName:"li"},"Heading"),"-Komponente mit allen anderen ",(0,i.kt)("strong",{parentName:"li"},"KoliBri"),"-Komponenten. Setzen Sie sie im Inhaltsbereich der Komponenten ein.")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_level")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_level")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen H-Level von 1 bis 6 die \xdcberschrift hat."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1 \\| 2 \\| 3 \\| 4 \\| 5 \\| 6 \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"used-by"},"Used by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./accordion"},"kol-accordion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./alert"},"kol-alert")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./card"},"kol-card")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"."},"kol-heading")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./link-group"},"kol-link-group"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-accordion --\x3e kol-heading-wc\n  kol-alert --\x3e kol-heading-wc\n  kol-card --\x3e kol-heading-wc\n  kol-heading --\x3e kol-heading-wc\n  kol-link-group --\x3e kol-heading-wc\n  style kol-heading-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}l.isMDXComponent=!0;var o=n(8629);const c={title:"Heading",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Heading-Komponente.",tags:["Heading","Beschreibung","Spezifikation","Beispiele"]},d=void 0,s={unversionedId:"components/heading",id:"components/heading",title:"Heading",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Heading-Komponente.",source:"@site/docs/30-components/heading.mdx",sourceDirName:"30-components",slug:"/components/heading",permalink:"/docs/components/heading",draft:!1,tags:[{label:"Heading",permalink:"/docs/tags/heading"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Heading",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Heading-Komponente.",tags:["Heading","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Form",permalink:"/docs/components/form"},next:{title:"IconFontAwesome",permalink:"/docs/components/icon-font-awesome"}},p={},u=[{value:"Beispiele",id:"beispiele",level:2},{value:"Einfache \xdcberschriften",id:"einfache-\xfcberschriften",level:3}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)("h3",{id:"einfache-\xfcberschriften"},"Einfache \xdcberschriften"),(0,i.kt)(o._,{component:"heading",sample:"basic",mdxType:"Configurator"}))}k.isMDXComponent=!0}}]);