"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[56431],{17942:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>N});var a=n(50959);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,k=d(e,["components","mdxType","originalType","parentName"]),m=p(n),s=l,N=m["".concat(o,".").concat(s)]||m[s]||u[s]||r;return n?a.createElement(N,i(i({ref:t},k),{},{components:n})):a.createElement(N,i({ref:t},k))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:l,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=n(15882),l=(n(50959),n(17942));const r={},i=void 0,d={unversionedId:"readmes/button/readme",id:"version-1.6.0/readmes/button/readme",title:"readme",description:"Buttons dienen dazu, Benutzerinnen, die wichtigsten Aktionen einer Seite oder innerhalb eines Viewports zu finden und erm\xf6glichen es ihnen, diese Aktionen auszuf\xfchren. Die Beschriftung des Buttons wird verwendet, um Nutzerinnen, eine \xc4nderung zu best\xe4tigen, Schritte in einer Aufgabe abzuschlie\xdfen oder Entscheidungen zu treffen.",source:"@site/versioned_docs/version-1.6.0/readmes/button/readme.md",sourceDirName:"readmes/button",slug:"/readmes/button/",permalink:"/docs/1.6.0/readmes/button/",draft:!1,tags:[],version:"1.6.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/docs/1.6.0/readmes/breadcrumb/"},next:{title:"readme",permalink:"/docs/1.6.0/readmes/button-group/"}},o={},p=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Beschriftung",id:"beschriftung",level:3},{value:"Icon",id:"icon",level:3},{value:"Schaltfl\xe4che ohne Text",id:"schaltfl\xe4che-ohne-text",level:3},{value:"Darstellung angeben",id:"darstellung-angeben",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],k={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Buttons")," dienen dazu, Benutzer:innen Auswahlm\xf6glichkeiten f\xfcr Aktionen anzuzeigen und diese in einer klaren Hierarchie anzuordnen. Sie helfen Nutzer:innen, die wichtigsten Aktionen einer Seite oder innerhalb eines Viewports zu finden und erm\xf6glichen es ihnen, diese Aktionen auszuf\xfchren. Die Beschriftung des Buttons wird verwendet, um Nutzer:innen klar anzuzeigen, welche Aktion ausgel\xf6st wird. Buttons erm\xf6glichen es Nutzer:innen, eine \xc4nderung zu best\xe4tigen, Schritte in einer Aufgabe abzuschlie\xdfen oder Entscheidungen zu treffen."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-button _label="Primary" _variant="primary"></kol-button>\n<kol-button _label="Secondary" _variant="secondary"></kol-button>\n<kol-button _label="Normal" _variant="normal"></kol-button>\n<kol-button _label="Danger" _variant="danger"></kol-button>\n<kol-button _label="Ghost" _variant="ghost"></kol-button>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("p",null,"Default"),(0,l.kt)("div",{className:"flex flex-wrap gap-2"},(0,l.kt)("kol-button",{_label:"Primary",_variant:"primary"}),(0,l.kt)("kol-button",{_label:"Secondary",_variant:"secondary"}),(0,l.kt)("kol-button",{_label:"Normal",_variant:"normal"}),(0,l.kt)("kol-button",{_label:"Danger",_variant:"danger"}),(0,l.kt)("kol-button",{_label:"Ghost",_variant:"ghost"})),(0,l.kt)("p",null,"Disabled"),(0,l.kt)("div",{className:"flex flex-wrap gap-2"},(0,l.kt)("kol-button",{_label:"Primary",_variant:"primary",_disabled:!0}),(0,l.kt)("kol-button",{_label:"Secondary",_variant:"secondary",_disabled:!0}),(0,l.kt)("kol-button",{_label:"Normal",_variant:"normal",_disabled:!0}),(0,l.kt)("kol-button",{_label:"Danger",_variant:"danger",_disabled:!0}),(0,l.kt)("kol-button",{_label:"Ghost",_variant:"ghost",_disabled:!0})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"beschriftung"},"Beschriftung"),(0,l.kt)("p",null,"F\xfcr die eindeutige Beschriftung des Buttons nutzen Sie das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_label")),".\n",(0,l.kt)("inlineCode",{parentName:"p"},'_label="Schaltfl\xe4chenbeschriftung"')),(0,l.kt)("h3",{id:"icon"},"Icon"),(0,l.kt)("p",null,"Ein Icon (",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_icon")),") kann entweder als String angegeben werden, oder als Objekt.\nAls String \xfcbergeben Sie die Iconklasse (z.B.: ",(0,l.kt)("inlineCode",{parentName:"p"},'_icon="codicon codicon-home'),"), das Icon wird links vom Text angezeigt.\nDas Objekt ist vom Typ ",(0,l.kt)("inlineCode",{parentName:"p"},"KoliBriAllIcon"),", kann also einen oder mehrere der Schl\xfcssel ",(0,l.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bottom")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"left")," besitzen. Diese sind dann entweder String (siehe oben) oder ein Objekt vom Typ ",(0,l.kt)("inlineCode",{parentName:"p"},"KoliBriCustomIcon"),", welches aus ",(0,l.kt)("inlineCode",{parentName:"p"},"icon")," (String, siehe oben) und ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," (optional, Styleobjekt) besteht."),(0,l.kt)("p",null,(0,l.kt)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_label:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_target:"_blank",_label:"\xdcbersicht Codicons"})),(0,l.kt)("h3",{id:"schaltfl\xe4che-ohne-text"},"Schaltfl\xe4che ohne Text"),(0,l.kt)("p",null,"Mittels ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_hide-label"))," wird die Schaltfl\xe4che nur das icon anzeigen (",(0,l.kt)("kol-link",{_href:"#icon",_label:"#icon",_label:"siehe icon"}),")"),(0,l.kt)("p",null,(0,l.kt)("kol-alert",{_type:"info"},"Beachten Sie, dass das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_label"))," auch dann gesetzt werden muss, wenn nur ein Icon angezeigt werden soll, dieses wird von Screenreadern vorgelesen und in den Tooltip gesetzt.")),(0,l.kt)("h3",{id:"darstellung-angeben"},"Darstellung angeben"),(0,l.kt)("p",null,"Zur Steuerung der Darstellung verwenden Sie das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_variant")),". Der Standardwert ist ",(0,l.kt)("inlineCode",{parentName:"p"},"primary"),", alternativ kann auch ",(0,l.kt)("inlineCode",{parentName:"p"},"primary"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"secondary"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"normal"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"danger"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ghost"),", oder ",(0,l.kt)("inlineCode",{parentName:"p"},"custom")," gesetzt werden.",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xdcber die Verwendung des Wertes ",(0,l.kt)("inlineCode",{parentName:"p"},"custom")," kann eine eigene Darstellung gew\xe4hlt werden. Verpflichtend ist in diesem Fall das Setzen des Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_custom-class")),", damit die Schaltfl\xe4che im Shadow-Dom mittels CSS selektiert werden kann."),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie eine prim\xe4re Schaltfl\xe4che f\xfcr die n\xe4chstbeste Aktion. Verbleibende Calls-to-Action sollten als sekund\xe4re Schaltfl\xe4che dargestellt werden."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie Schaltfl\xe4chen an einheitlichen Stellen in der Benutzeroberfl\xe4che, um die Benutzererfahrung zu verbessern."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie nur eine prim\xe4re Schaltfl\xe4che je Viewport. Auf der gesamten Seite kann ein Button-Style beliebig oft auftreten."),(0,l.kt)("li",{parentName:"ul"},"Die Beschriftung des Button muss die Aktion beschreiben, die die Schaltfl\xe4che ausf\xfchrt. Sie sollte ein Verb enthalten (z.B. Speichern). Verwenden Sie pr\xe4gnante, spezifische, selbsterkl\xe4rende Beschriftungen."),(0,l.kt)("li",{parentName:"ul"},'Schaltfl\xe4chenbeschriftungen sollten immer dann auch ein Nomen enthalten, wenn es Raum f\xfcr Interpretationen dar\xfcber gibt, wof\xfcr das Verb zust\xe4ndig ist. Verwenden Sie keine generischen Bezeichnungen wie "OK", insbesondere nicht im Fehlerfall. Fehler sind nie "OK".'),(0,l.kt)("li",{parentName:"ul"},'Verwenden Sie nicht mehrere Buttons im Style "prim\xe4r" innerhalb einer Gruppierung.'),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie Buttons nicht als Link oder als Navigationselement.")),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("p",null,"F\xfcr Menschen mit einem eingeschr\xe4nkten Sichtfeld ist die Positionierung des ",(0,l.kt)("strong",{parentName:"p"},"Icons")," im Button links von der Beschriftung optimal."),(0,l.kt)("p",null,"Probleme mit Disabled-Status"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Darstellung Kontraste"),(0,l.kt)("li",{parentName:"ul"},"M\xf6glichkeit des Nutzerfeedbacks")),(0,l.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Taste"),(0,l.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Springt den einzelnen Button an und fokussiert ihn.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Enter")),(0,l.kt)("td",{parentName:"tr",align:null},"F\xfchrt die onClick-Methode der fokussierten Schaltfl\xe4che aus.")))),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#button",_label:"https://www.w3.org/TR/wai-aria-practices/#button",_target:"_blank"}))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Defines which key combination can be used to trigger or focus the interactive element of the component."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaControls")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-controls")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which elements are controlled by this component. (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaCurrent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-current")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," aria-current is not necessary for buttons. will be removed in version 2.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Marks the element as the selected in a group of related elements. Can be one of the following: ",(0,l.kt)("inlineCode",{parentName:"td"},"date`` \\| ``location`` \\| ``page`` \\| ``step`` \\| ``time`` \\| ``true"),". (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"date"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"location"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"page"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"step"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"time"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaExpanded")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-expanded")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines whether the interactive element of the component expanded something. (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use ","_","label instead",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Setzt die semantische Beschriftung der Komponente."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaSelected")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-selected")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines whether the interactive element of the component is selected (e.g. role=tab). (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_customClass")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_custom-class")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the custom class attribute if ","_",'variant="custom" is set.'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Makes the element not focusable and ignore all events."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the label and shows the description in a Tooltip instead."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the icon classnames (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},'_icon="fa-solid fa-user"'),")."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KoliBriHorizontalIcon & KoliBriVerticalIcon")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_iconAlign")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon-align")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Defines where to show the Tooltip preferably: top, right, bottom or left."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_iconOnly")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon-only")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use ","_","hide-label",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Hides the label and shows the description in a Tooltip instead."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the internal ID of the primary component element."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," to enable the expert slot."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the technical name of an input field."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the callback functions for button events."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ onClick?: EventValueOrEventCallback<MouseEvent, StencilUnknown>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; onMouseDown?: EventCallback<MouseEvent>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_role")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_role")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the role of the components primary element."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"button"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"link"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"tab"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which tab-index the primary element of the component has. (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines where to show the Tooltip preferably: top, right, bottom or left."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines either the type of the component or of the components interactive element."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"button"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"reset"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"submit"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'button'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_value")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the value that the button emits on click."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which variant should be used for presentation."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"custom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"ghost"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"normal"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'normal'"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"used-by"},"Used by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./nav"},"kol-nav")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./pagination"},"kol-pagination")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./table"},"kol-table"))),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-nav --\x3e kol-button\n  kol-pagination --\x3e kol-button\n  kol-table --\x3e kol-button\n  style kol-button fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}u.isMDXComponent=!0}}]);