"use strict";(self.webpackChunk_public_ui_docusaurus=self.webpackChunk_public_ui_docusaurus||[]).push([[6215],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(t),c=r,m=g["".concat(d,".").concat(c)]||g[c]||p[c]||a;return t?i.createElement(m,l(l({ref:n},u),{},{components:t})):i.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(5882),r=(t(9496),t(9613));const a={},l="Badge",o={unversionedId:"components/badge/readme",id:"components/badge/readme",title:"Badge",description:"Mit Badges k\xf6nnen Sie bestimmte Informationen auf Ihrer Webseite optisch hervorheben.",source:"@site/docs/30-components/badge/readme.md",sourceDirName:"30-components/badge",slug:"/components/badge/",permalink:"/docs/components/badge/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/30-components/badge/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alert",permalink:"/docs/components/alert/"},next:{title:"Breadcrumb",permalink:"/docs/components/breadcrumb/"}},d={},s=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Label im Badge",id:"label-im-badge",level:3},{value:"Hintergrundfarbe des Badge",id:"hintergrundfarbe-des-badge",level:3},{value:"Anzeige eines Icon im Badge",id:"anzeige-eines-icon-im-badge",level:3},{value:"Position des Icon",id:"position-des-icon",level:3},{value:"Nur Icon anzeigen",id:"nur-icon-anzeigen",level:3},{value:"Schriftschnitt",id:"schriftschnitt",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:2},{value:"Badge als Aufz\xe4hlungszeichen verwenden",id:"badge-als-aufz\xe4hlungszeichen-verwenden",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],u={toc:s};function g(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"badge"},"Badge"),(0,r.kt)("p",null,"Mit ",(0,r.kt)("strong",{parentName:"p"},"Badges")," k\xf6nnen Sie bestimmte Informationen auf Ihrer Webseite optisch hervorheben.\nKoliBri bietet neben der Angabe der Hintergrundfarbe und automatischer Berechnung der Textfarbe auch die M\xf6glichkeit, einem Badge ein Icon und/oder einen anderen Schriftschnitt mitzugeben."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<kol-badge _label="Beispieltext" _color="#000000" _icon="home" _icon-align="right" style={{ fontWeight: \'600\' }}></kol-badge>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,(0,r.kt)("kol-badge",{_label:"Beispieltext",_color:"#000000",_icon:"home","_icon-align":"right"})),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"label-im-badge"},"Label im Badge"),(0,r.kt)("p",null,"Der Text, der im Badge angezeigt werden soll, wird \xfcber das Attribut ",(0,r.kt)("strong",{parentName:"p"},"_","label")," \xfcbergeben. Der Text kann neben Sonderzeichen auch Umlaute oder Leerzeichen enthalten.\nDas Element ",(0,r.kt)("inlineCode",{parentName:"p"},"<kol-badge></kol-badge>")," beinhaltet selbst keinen Text."),(0,r.kt)("h3",{id:"hintergrundfarbe-des-badge"},"Hintergrundfarbe des Badge"),(0,r.kt)("p",null,"Ein Badge, ohne weitere Angaben zur Hintergrundfarbe, wird standardm\xe4\xdfig mit hellgrauer Schriftfarbe auf schwarzem Hintergrund angezeigt. \xdcber das Attribut ",(0,r.kt)("strong",{parentName:"p"},"_","color")," k\xf6nnen andere Hintergrundfarben gew\xe4hlt werden."),(0,r.kt)("p",null,"Die Angabe der gew\xfcnschten Hintergrundfarbe erfolgt in hexadezimaler Schreibweise, z.B. ",(0,r.kt)("strong",{parentName:"p"},"_",'color="#000000"')," f\xfcr schwarz."),(0,r.kt)("p",null,"Die Textfarbe wird automatisch als Kontrastfarbe zur gew\xe4hlten Hintergrundfarbe errechnet."),(0,r.kt)("h3",{id:"anzeige-eines-icon-im-badge"},"Anzeige eines Icon im Badge"),(0,r.kt)("p",null,"KoliBri stellt die komplette Bibliothek von ",(0,r.kt)("strong",{parentName:"p"},"Icofont")," zur Verf\xfcgung. Sie k\xf6nnen daher optional im Badge ein Icon aus Icofont anzeigen lassen. Bestimmen Sie das Icon \xfcber das Attribut ",(0,r.kt)("strong",{parentName:"p"},"_",'icon="',(0,r.kt)("em",{parentName:"strong"},"Name des Icon"),'"'),"."),(0,r.kt)("p",null,"Eine \xdcbersicht \xfcber die zur Verf\xfcgung stehenden Icons in KoliBri finden Sie ",(0,r.kt)("a",{parentName:"p",href:"https://icofont.com/icons"},"hier")),(0,r.kt)("h3",{id:"position-des-icon"},"Position des Icon"),(0,r.kt)("p",null,"Das Icon kann zus\xe4tzlich entweder links oder rechts vom Text angezeigt werden. Verwenden Sie f\xfcr die Angabe der Ausgabeposition das Attribut ",(0,r.kt)("strong",{parentName:"p"},"_",'icon-align=""'),".\nAls Wert k\xf6nnen Sie ",(0,r.kt)("inlineCode",{parentName:"p"},'_icon-align="left"')," oder ",(0,r.kt)("inlineCode",{parentName:"p"},'_icon-align="right"')," angeben."),(0,r.kt)("h3",{id:"nur-icon-anzeigen"},"Nur Icon anzeigen"),(0,r.kt)("p",null,"Mit dem Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_icon-only"))," kann festgelegt werden, dass nur das mit dem Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_icon"))," gew\xe4hlte Icon angezeigt wird. Der Wert im Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_label"))," wird in diesem Fall ignoriert."),(0,r.kt)("h3",{id:"schriftschnitt"},"Schriftschnitt"),(0,r.kt)("p",null,"\xdcber Stylinganweisungen im Attribut ",(0,r.kt)("strong",{parentName:"p"},"style")," k\xf6nnen Sie den Schriftschnitt im Badge festlegen. Das Attribut ",(0,r.kt)("strong",{parentName:"p"},"style")," erwartet als Wert ein Objekt.\n",(0,r.kt)("inlineCode",{parentName:"p"},"style={{ fontWeight: '600' }}")),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Badges, um wichtige Informationen in unmittelbarer N\xe4he des jeweiligen Elements anzuzeigen."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Badges, um auf ge\xe4nderte Werte oder einen ge\xe4nderten Status aufmerksam zu machen."),(0,r.kt)("li",{parentName:"ul"},"Ein Badge weist den Benutzer darauf hin, dass etwas neu erzeugt oder aktualisiert wurde, z. B. ein \u201eungelesener Bericht\u201c oder eine Aktivit\xe4tsbenachrichtigung."),(0,r.kt)("li",{parentName:"ul"},"Behalten Sie in gleichen Anwendungsf\xe4llen immer die gleiche Position des Badges bei, um ein einheitliches Erscheinungsbild zu gew\xe4hrleisten.")),(0,r.kt)("h2",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,r.kt)("h3",{id:"badge-als-aufz\xe4hlungszeichen-verwenden"},"Badge als Aufz\xe4hlungszeichen verwenden"),(0,r.kt)("ul",{class:"m-0 p-0"},(0,r.kt)("li",{class:"flex gap-2"},(0,r.kt)("kol-badge",{_label:"1",_color:"#0747a6"}),(0,r.kt)("kol-heading",{_level:"2"},"Auswahl Anliegen")),(0,r.kt)("li",{class:"flex gap-2"},(0,r.kt)("kol-badge",{_label:"2",_color:"#0747a6"}),(0,r.kt)("kol-heading",{_level:"2"},"Auswahl Amtsstelle")),(0,r.kt)("li",{class:"flex gap-2"},(0,r.kt)("kol-badge",{_label:"3",_color:"#0747a6"}),(0,r.kt)("kol-heading",{_level:"2"},"Terminauswahl"))),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("p",null,"F\xfcr die Einhaltung der Regeln zur Barrierefreiheit, ist ein optimaler Kontrast zwischen der Hintergrundfarbe und Textfarbe des Badge zwingend erforderlich. KoliBri bietet daher eine automatische Berechnung der Textfarbe aus der gew\xe4hlten Hintergrundfarbe heraus. M\xf6glich sind die Textfarben ",(0,r.kt)("strong",{parentName:"p"},"schwarz")," und ",(0,r.kt)("strong",{parentName:"p"},"wei\xdf"),", die in Abh\xe4ngigkeit zur Hintergrundfarbe ausgegeben werden."),(0,r.kt)("p",null,"Die zus\xe4tzliche Ausgabe eines ",(0,r.kt)("strong",{parentName:"p"},"Icon")," gew\xe4hrleistet, dass der Nutzer auch hier\xfcber die Art der Information erfassen kann."),(0,r.kt)("p",null,(0,r.kt)("kol-alert",{_type:"info"},"Eine explizite Angabe der Textfarbe ist nicht m\xf6glich.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_color")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Farbe des Hintergrundes bzw. der Schrift an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined \\| { backgroundColor: string; color: string; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Nationalfarben.Schwarz"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt einen Identifier eines Icons aus den Icofont's an. (",(0,r.kt)("a",{parentName:"td",href:"https://icofont.com/"},"https://icofont.com/"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined \\| { top: string \\| KoliBriCustomIcon; right?: string \\| KoliBriCustomIcon \\| undefined; bottom?: string \\| KoliBriCustomIcon \\| undefined; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right: string \\| KoliBriCustomIcon; bottom?: string \\| KoliBriCustomIcon \\| undefined; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right?: string \\| KoliBriCustomIcon \\| undefined; bottom: string \\| KoliBriCustomIcon; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right?: string \\| KoliBriCustomIcon \\| undefined; bottom?: string \\| KoliBriCustomIcon \\| undefined; left: string \\| KoliBriCustomIcon; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_iconAlign")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon-align")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Gibt an, ob das Icon entweder links oder rechts dargestellt werden soll."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"left" \\| "right" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'left'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_iconOnly")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon-only")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob nur das Icon angezeigt wird."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Label-Text des Badges an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_smartButton")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_smart-button")),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht einen Schalter ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xfcgen (nur Icon-Only)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'string \\| undefined \\| { _label: string; } & { _ariaControls?: string \\| undefined; _ariaCurrent?: AriaCurrent \\| undefined; _ariaExpanded?: boolean \\| undefined; _ariaLabel?: string \\| undefined; _ariaSelected?: boolean \\| undefined; _disabled?: boolean \\| undefined; _icon?: Stringified<KoliBriIconProp> \\| undefined; _iconAlign?: Alignment \\| undefined; _iconOnly?: boolean \\| undefined; _role?: "tab" \\| undefined; _tabIndex?: number \\| undefined; _tooltipAlign?: TooltipAlignment \\| undefined; _accessKey?: string \\| undefined; _id?: string \\| undefined; _on?: KoliBriButtonCallbacks \\| undefined; _type?: KoliBriButtonType \\| undefined; _customClass?: string \\| undefined; _variant?: KoliBriButtonVariant \\| undefined; }')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"used-by"},"Used by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../tooltip"},"kol-tooltip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../version"},"kol-version"))),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kol-span-wc"),(0,r.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-span-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-tooltip --\x3e kol-badge\n  kol-version --\x3e kol-badge\n  style kol-badge fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}g.isMDXComponent=!0}}]);