var ze=Object.defineProperty,Ae=Object.defineProperties;var Fe=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var ne=(a,r,n)=>r in a?ze(a,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[r]=n,$=(a,r)=>{for(var n in r||(r={}))te.call(r,n)&&ne(a,n,r[n]);if(M)for(var n of M(r))oe.call(r,n)&&ne(a,n,r[n]);return a},Q=(a,r)=>Ae(a,Fe(r));var ie=(a,r)=>{var n={};for(var l in a)te.call(a,l)&&r.indexOf(l)<0&&(n[l]=a[l]);if(a!=null&&M)for(var l of M(a))r.indexOf(l)<0&&oe.call(a,l)&&(n[l]=a[l]);return n};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[2698],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(a,r,n)=>{"use strict";n.d(r,{Xz:()=>l.Canvas,aT:()=>l.AddContext,dk:()=>l.Description,h_:()=>l.Meta});var l=n("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/35-designer.stories.mdx":(a,r,n)=>{"use strict";n.r(r),n.d(r,{__namedExportsOrder:()=>H,__page:()=>U,default:()=>G});var l=n("./node_modules/core-js/modules/es.object.keys.js"),D=n.n(l),v=n("./node_modules/core-js/modules/es.array.index-of.js"),B=n.n(v),E=n("./node_modules/core-js/modules/es.symbol.js"),j=n.n(E),y=n("./node_modules/core-js/modules/es.function.bind.js"),L=n.n(y),f=n("./node_modules/core-js/modules/es.object.assign.js"),S=n.n(f),Y=n("./node_modules/react/index.js"),e=n("./node_modules/@mdx-js/react/dist/esm.js"),t=n("./node_modules/@storybook/addon-docs/dist/esm/index.js"),T=n("./node_modules/@public-ui/react/dist/index.mjs"),P=["components"];function O(){return O=Object.assign?Object.assign.bind():function(u){for(var p=1;p<arguments.length;p++){var _=arguments[p];for(var m in _)Object.prototype.hasOwnProperty.call(_,m)&&(u[m]=_[m])}return u},O.apply(this,arguments)}function I(u,p){if(u==null)return{};var _=R(u,p),m,h;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(u);for(h=0;h<g.length;h++)m=g[h],!(p.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(u,m)&&(_[m]=u[m])}return _}function R(u,p){if(u==null)return{};var _={},m=Object.keys(u),h,g;for(g=0;g<m.length;g++)h=m[g],!(p.indexOf(h)>=0)&&(_[h]=u[h]);return _}var N={},W="wrapper";function F(u){var p=u.components,_=I(u,P);return(0,e.kt)(W,O({},N,_,{components:p,mdxType:"MDXLayout"}),(0,e.kt)(t.h_,{title:"Konzepte/Theming/Designer",id:"designer",mdxType:"Meta"}),(0,e.kt)("div",{className:"col-12 col-sm-6 my-2"},(0,e.kt)(T.Gc,{_headline:"Eigenes Theme erstellen",_level:2,mdxType:"KolCard"},(0,e.kt)(T.Nv,{slot:"content",_useCase:"nav",_href:"/designer",_target:"designer",mdxType:"KolLink"},(0,e.kt)("div",{className:"d-flex gap-4 py-2"},(0,e.kt)(T.Jl,{className:"homepage",_icon:"fas fa-paint-brush",mdxType:"KolIcon"}),(0,e.kt)("span",null,"Klicken Sie hier, um den Designer in einem neuen Browser-Fenster zu \xF6ffnen."))))),(0,e.kt)("p",null,(0,e.kt)("kol-heading",{_level:"1"},"KoliBri-Designer")),(0,e.kt)("p",null,`Mit Hilfe des KoliBri-Designer k\xF6nnen Benutzer:innen f\xFCr die KoliBri-Bibliothek schnell einen eigenen
Style entwickeln. Die Wirkungen der eigenen CSS-Anweisungen werden direkt an der Komponente
sichtbar.`,(0,e.kt)("br",null),`
Die fertigen Styles k\xF6nnen anschlie\xDFend als Theme heruntergelden und im eigenen Projekt eingef\xFCgt werden.`),(0,e.kt)("p",null,(0,e.kt)("kol-heading",{_level:"2"},"Globales CSS")),(0,e.kt)("p",null,`Damit sich alle HTML-Elemente bei der Verwendung von assistiven Werkzeugen und bei hohe Zoomstufen optimal verhalten,
m\xFCssen spezifische CSS-Styles gesetzt werden. Hierzu werden initial folgende CSS bei allen Komponenten gesetzt und
k\xF6nnen bei Bedarf vom Theme-spezifischen CSS \xFCberschrieben werden.`),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-css"},`* {
    font-size: inherit; /* erm\xF6glicht proportionales Skalieren */
    hyphens: auto; /* aktiviert die sprachspezifische Silbentrennung */
    letter-spacing: inherit; /* erm\xF6glicht das \xC4ndern des Buchstabenabstands */
    word-break: break-word; /* erm\xF6glicht das Umbrechen von Wortern */
    word-spacing: inherit; /* erm\xF6glicht das \xC4nderen des Wortabstands */
}
`)),(0,e.kt)("p",null,(0,e.kt)("kol-heading",{_level:"2"},"Aufbau"),`
Der KoliBri-Designer ist in drei Bereiche aufgeteilt.`),(0,e.kt)("p",null,(0,e.kt)("kol-heading",{_level:"3"},"Oben links: Theme")),(0,e.kt)("p",null,`Das eigene Theme kann wahlweise auf Basis eines Standard-Theme (default) oder direkt mit einem leeren Theme aufgebaut
werden. Standardm\xE4\xDFig wird im Feld `,(0,e.kt)("b",null,"Theme")," durch den Eintrag ",(0,e.kt)("i",null," default"),` ein Standard-Theme als Basis ausgew\xE4hlt.
Hier werden zur Anschauung einige CSS-Anweisungen in den Editor-Bereich eingef\xFCgt, deren Wirkung beispielhaft auf die
Standard-Komponente `,(0,e.kt)("b",null,"Button")," angewendet wird.",(0,e.kt)("br",null),`
Wird in das Feld `,(0,e.kt)("b",null,"Theme"),` ein eigener Wert f\xFCr das zu erstellende Theme eingegeben, setzt der KoliBri-Designer s\xE4mtliche
Styling-Anweisungen zur\xFCck und es kann mit einem v\xF6llig leeren Theme begonnen werden.`),(0,e.kt)("p",null,(0,e.kt)("kol-indented-text",null,`Bitte beachten Sie, dass einige KoliBri-Komponenten bei Auswahl eines leeren Standard-Themes naturgem\xE4\xDF entweder
gar nicht, ungewohnt oder mit Browser-Default-Layout angezeigt werden.`)),(0,e.kt)("p",null,(0,e.kt)("kol-heading",{_level:"3"},"Mitte links: Editor")),(0,e.kt)("p",null,"Zur einfachen Eingabe eigener CSS-Anweisungen besitzt der KoliBri-Designer einen ",(0,e.kt)("i",null,"VSCode-Editor"),`. Anweisungen, die Benutzer:innen
in den Editorbereich schreiben, werden nach Dr\xFCcken der Tastenkombination `,(0,e.kt)("code",null,"Strg + S")," bzw. ",(0,e.kt)("code",null,"Command + S"),`
automatisch \xFCbernommen und die Auswirkungen auf die gerade gew\xE4hlte Komponente \xFCbertragen.`),(0,e.kt)("p",null,(0,e.kt)("kol-heading",{_level:"3"},"Oben rechts: Komponenten")),(0,e.kt)("p",null,"\xDCber die Auswwahlbox ",(0,e.kt)("b",null,"Komponenten"),` kann die zu bearbeitende KoliBri-Komponente ausgew\xE4hlt werden. Es stehen alle KoliBri-Komponenten zur Verf\xFCgung,
die eine optische Ausgabe aufweisen. Nicht enthalten sind rein funktionale Komponenten, wie z.B. Modal, InputLeandUpAdapter oder auch SkipNav.`,(0,e.kt)("br",null),`
Nach Auswahl einer Komponente l\xE4dt der KoliBri-Designer eine typische Basisausgabe der Komponente. Bei Komponenten, die unterschiedliche Varianten besitzen, wie z.B.
Button, werden alle Varianten ausgegeben.`),(0,e.kt)("p",null,(0,e.kt)("kol-indented-text",null,"Bitte beachten Sie, dass einige KoliBri-Komponenten Abh\xE4ngigkeiten voneinander besitzen. So besteht die Komponente ",(0,e.kt)("b",null," LinkGroup"),`
beispielweise aus der Link-Komponente, IconIcofont-Komponte und Tooltip-Komponente. Es empfiehlt sich, zun\xE4chst mit der `,(0,e.kt)("i",null,"kleinsten"),`
Komponente zu beginnen und nachfolgend auf die eigentliche Hauptkomponente zu wechseln. Eine detaillierte Beschreibung folgt weiter unten.`)),(0,e.kt)("p",null,(0,e.kt)("kol-heading",{_level:"3"},"Oben mitte: Vorschau")),(0,e.kt)("p",null,`In diesem Bereich wird die aktuell geladene Komponente mit einer typischen Ausgabe dargestellt. Je nach Auswahl des Vorgabe-Theme stellt sich die
Komponente entweder im Default-Browser-Layout dar, oder beitzt bereits Styling-Merkmale, die aus dem Vorgabe-Theme stammen.`,(0,e.kt)("br",null)),(0,e.kt)("p",null,(0,e.kt)("kol-heading",{_level:"3"},"Unten: Importieren / Exportieren / Zur\xFCcksetzen")),(0,e.kt)("p",null,"Der KoliBri-Designer bietet verschiedene M\xF6glichkeiten, Ihre eigenen Einstellungen zu speichern, bzw. sie erneut zur weiteren Bearbeitung zu laden."),(0,e.kt)("p",null,"\xDCber den Button ",(0,e.kt)("b",null," Theme erstellen "),` werden die eigenen CSS-Anweisungen als eigenst\xE4ndiges Theme zusammengefasst und im Editor zur Ansicht, bzw. zum
Kopieren bereitgestellt.`,(0,e.kt)("br",null),`
\xDCber den Button `,(0,e.kt)("b",null," Theme herunterladen")," kann das eigene Theme als JSON-Datei heruntergeladen werden.",(0,e.kt)("br",null),`
\xDCber den Button `,(0,e.kt)("b",null,"Alle \xC4nderungen verwerfen"),` werden alle bisherigen eigenen CSS-Anweisungen verworfen. Der KoliBri-Designer wird auf das
Vorgabe-Theme `,(0,e.kt)("b",null," default")," zur\xFCckgesetzt.",(0,e.kt)("br",null),`
\xDCber das Upload-Feld `,(0,e.kt)("b",null,"Theme laden")," kann eine bereits erzeugte Theme-Datei (JSON-Datei) zur erneuten Bearbeitung in den KoliBri-Designer geladen werden."),(0,e.kt)("p",null,(0,e.kt)("kol-heading",{_level:"2"},"Abh\xE4ngigkeiten der Komponenten voneinander")),(0,e.kt)("p",null,`Die meisten KoliBri-Komponenten bestehen technisch aus einer Sammlung anderer KoliBri-Komponenten, die zusammengenommen dann eine neue
KoliBri-Komponente ergeben und \xE4hnliche, aber weitergehende Anwendungsfelder besitzen.`,(0,e.kt)("br",null),`
Die Kenntnis der technischen Konstruktion der zu bearbeitendenn Komponente ist f\xFCr die richtige Reihenfolge beim Erstellen des eigenen Theme wichtig.`),(0,e.kt)("p",null,(0,e.kt)("kol-indented-text",null,"Die Abh\xE4ngigkeiten der KoliBri-Komponenten voneinander werden im Storybook, im Abschnitt ",(0,e.kt)("b",null,"Beschreibung"),`
der jeweiligen Komponente, im Detail anhand eines Diagramms beschrieben.`)),(0,e.kt)("p",null,(0,e.kt)("b",null,"Beispiel:")),(0,e.kt)("p",null,(0,e.kt)("kol-link-group",{_heading:"\xDCberschrift",_links:"[{'_label':'Link 1', '_icon':'icofont-home','_href':'test'},{'_label':'Link 2', '_icon':'icofont-phone','_href':'test'}]","_list-style-type":"none"})),(0,e.kt)("p",null,"Die in diesem Beispiel verwendete LinkGroup besteht aus den weiteren KoliBri-Komponenten:"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"kol-heading"),(0,e.kt)("li",{parentName:"ul"},"kol-link -> nutzt au\xDFerdem kol-tooltip und kol-badge"),(0,e.kt)("li",{parentName:"ul"},"kol-icon-icofont")),(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"Legen Sie zun\xE4chst die CSS-Anweisungen f\xFCr die \xDCberschrift der LinkGroup fest. Die \xDCberschrift besteht aus der KoliBri-Komponente ",(0,e.kt)("b",null," kol-heading"),`.
Wechsel Sie daher im Auswahlfeld `,(0,e.kt)("b",null,"Komponenten")," zur Komponente ",(0,e.kt)("b",null,"kol-heading"),`. Passen Sie hier im Editor z.B. f\xFCr h1 die Schriftfarbe an. Diese Einstellung gilt
nun f\xFCr alle Komponenten, in denen die Komponente kol-heading genutzt wird. Die Schriftfarbe hat sich also nicht nur f\xFCr die Komponente kol-heading selbst
ver\xE4ndert, sondern synchron f\xFCr alle Komponenten, die `,(0,e.kt)("b",null,"kol-heading")," au\xDFerdem nutzen. Unter anderem die im Beispiel genutzte ",(0,e.kt)("b",null,"kol-link-group"),".",(0,e.kt)("br",null),"Wechseln Sie im Auswahlfeld ",(0,e.kt)("b",null,"Komponenten"),`
zur\xFCck zur Komponente `,(0,e.kt)("b",null,"kol-link-group"),". Auch hier hat sich die Schriftfarbe der \xDCberschrift gem\xE4\xDF der CSS-Anweisung der Komponente ",(0,e.kt)("b",null,"kol-eading")," ge\xE4ndert."),(0,e.kt)("li",{parentName:"ol"},"\xC4ndern Sie nun die Schriftfarbe der Links. Wechseln Sie im Auswahlfeld ",(0,e.kt)("b",null,"Komponenten")," zu ",(0,e.kt)("b",null,"kol-link"),". \xC4ndern Sie im Editor den Color-Wert f\xFCr ",(0,e.kt)("b",null,"a"),". Wechseln Sie zur\xFCck zur Komponente",(0,e.kt)("b",null,"kol-link-group"),". Die Schriftfarbe der einzelnen Links hat sich ebenfalls ge\xE4ndert."),(0,e.kt)("li",{parentName:"ol"},"Wenn Sie versuchen die zuvor genannten Einstellungen direkt in der Komponente ",(0,e.kt)("b",null,"kol-link-group"),` zu \xE4ndern, werden Sie keine Ver\xE4nderungen sehen.
Es w\xE4re hier aber z.B. m\xF6glich, die Hintergrundfarbe der ganzen Komponente `,(0,e.kt)("b",null,"kol-link-group")," zu \xE4ndern."),(0,e.kt)("li",{parentName:"ol"},`Beachten Sie, das Sie \xFCber den KoliBri-Designer nur Komponenten stylen k\xF6nnen, die sich innerhalb eines Shadow-Doms befinden.
Es w\xE4re beim Beispiel `,(0,e.kt)("b",null,"kol-link-group")," nicht m\xF6glich, das Element ",(0,e.kt)("b",null,(0,e.kt)("kol-link-group",null)),` selbst zu stylen, da sich dieses nicht
innerhalb eines Shadow-Doms befindet.`),(0,e.kt)("li",{parentName:"ol"},`Beachten Sie, dass \xC4nderungen im KoliBri-Designer nur solche KoliBri-Komponenten m\xF6glich sind, die beim Rendern einen Shadow-Dom besitzen. Das ist z.B. bei
der Komponente `,(0,e.kt)("b",null,"kol-icon-icofont")," oder ",(0,e.kt)("b",null,"kol-icon-fontawesome")," nicht der Fall.")))}F.displayName="MDXContent",F.isMDXComponent=!0;var U=function(){throw new Error("Docs-only story")};U.parameters={docsOnly:!0};var K={title:"Konzepte/Theming/Designer",id:"designer",includeStories:["__page"]},V={};K.parameters=K.parameters||{},K.parameters.docs=Object.assign({},K.parameters.docs||{},{page:function(){return(0,e.kt)(t.aT,{mdxStoryNameToKey:V,mdxComponentAnnotations:K},(0,e.kt)(F,null))}});const G=K;var H=["__page"]},"./node_modules/core-js/modules/es.array.index-of.js":(a,r,n)=>{"use strict";var l=n("./node_modules/core-js/internals/export.js"),D=n("./node_modules/core-js/internals/function-uncurry-this-clause.js"),v=n("./node_modules/core-js/internals/array-includes.js").indexOf,B=n("./node_modules/core-js/internals/array-method-is-strict.js"),E=D([].indexOf),j=!!E&&1/E([1],1,-0)<0,y=j||!B("indexOf");l({target:"Array",proto:!0,forced:y},{indexOf:function(f){var S=arguments.length>1?arguments[1]:void 0;return j?E(this,f,S)||0:v(this,f,S)}})},"./node_modules/core-js/modules/es.function.bind.js":(a,r,n)=>{var l=n("./node_modules/core-js/internals/export.js"),D=n("./node_modules/core-js/internals/function-bind.js");l({target:"Function",proto:!0,forced:Function.bind!==D},{bind:D})},"./node_modules/@public-ui/react/dist/index.mjs":(a,r,n)=>{"use strict";n.d(r,{$o:()=>he,CO:()=>je,CV:()=>m,CX:()=>ae,Er:()=>I,Gc:()=>K,HA:()=>H,Jl:()=>u,K5:()=>O,Lj:()=>re,MA:()=>fe,Np:()=>se,Nv:()=>pe,O:()=>le,P:()=>Ce,Q4:()=>Ke,QK:()=>ge,Qs:()=>Be,RZ:()=>P,T5:()=>T,TE:()=>g,TQ:()=>me,UD:()=>ve,Ud:()=>be,Vp:()=>we,Vs:()=>_e,WD:()=>ke,WR:()=>xe,Ze:()=>Se,c2:()=>de,cJ:()=>p,ic:()=>N,is:()=>ye,lo:()=>R,m5:()=>G,ox:()=>V,qq:()=>De,r7:()=>Ee,rW:()=>_,sy:()=>ce,u_:()=>Te,uz:()=>W,z5:()=>ue});var l=n("./node_modules/react/index.js"),D=n("./node_modules/react-dom/index.js");const v=i=>i.toLowerCase().split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(""),B=i=>i.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`),E=(i,o,d={})=>{if(i instanceof Element){const c=j(i.classList,o,d);c!==""&&(i.className=c),Object.keys(o).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const b=s.substring(2),k=b[0].toLowerCase()+b.substring(1);y(k)||L(i,k,o[s])}else i[s]=o[s],typeof o[s]==="string"&&i.setAttribute(B(s),o[s])})}},j=(i,o,d)=>{const c=o.className||o.class,s=d.className||d.class,b=f(i),k=f(c?c.split(" "):[]),z=f(s?s.split(" "):[]),w=[];return b.forEach(x=>{k.has(x)?(w.push(x),k.delete(x)):z.has(x)||w.push(x)}),k.forEach(x=>w.push(x)),w.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const y=i=>{if(typeof document=="undefined")return!0;{const o="on"+i;let d=o in document;if(!d){const c=document.createElement("div");c.setAttribute(o,"return;"),d=typeof c[o]=="function"}return d}},L=(i,o,d)=>{const c=i.__events||(i.__events={}),s=c[o];s&&i.removeEventListener(o,s),i.addEventListener(o,c[o]=function(k){d&&d.call(this,k)})},f=i=>{const o=new Map;return i.forEach(d=>o.set(d,d)),o},S=(i,o)=>{typeof i=="function"?i(o):i!=null&&(i.current=o)},Y=(...i)=>o=>{i.forEach(d=>{S(d,o)})},e=(i,o)=>{const d=(c,s)=>l.createElement(i,Q($({},c),{forwardedRef:s}));return d.displayName=o,l.forwardRef(d)},t=(i,o,d,c)=>{c!==void 0&&c();const s=v(i),b=class extends l.Component{constructor(k){super(k),this.setComponentElRef=z=>{this.componentEl=z}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(k){E(this.componentEl,this.props,k)}render(){const ee=this.props,{children:k,forwardedRef:z,style:w,className:x,ref:Pe}=ee,q=ie(ee,["children","forwardedRef","style","className","ref"]);let X=Object.keys(q).reduce((Z,C)=>{const J=q[C];if(C.indexOf("on")===0&&C[2]===C[2].toUpperCase()){const A=C.substring(2).toLowerCase();typeof document!="undefined"&&y(A)&&(Z[C]=J)}else{const A=typeof J;(A==="string"||A==="boolean"||A==="number")&&(Z[B(C)]=J)}return Z},{});d&&(X=d(this.props,X));const Oe=Q($({},X),{ref:Y(z,this.setComponentElRef),style:w});return(0,l.createElement)(i,Oe,k)}static get displayName(){return s}};return o&&(b.contextType=o),e(b,s)},T=t("kol-abbr"),P=t("kol-accordion"),O=t("kol-alert"),I=t("kol-badge"),R=t("kol-breadcrumb"),N=t("kol-button"),W=t("kol-button-group"),F=null,U=null,K=t("kol-card"),V=t("kol-details"),G=t("kol-form"),H=t("kol-heading"),u=t("kol-icon"),p=t("kol-icon-font-awesome"),_=t("kol-icon-icofont"),m=t("kol-indented-text"),h=null,g=t("kol-input-checkbox"),se=t("kol-input-color"),le=t("kol-input-date"),re=t("kol-input-email"),ae=t("kol-input-file"),de=t("kol-input-number"),ue=t("kol-input-password"),ce=t("kol-input-radio"),me=t("kol-input-range"),ke=t("kol-input-text"),_e=t("kol-kolibri"),pe=t("kol-link"),Me=null,he=t("kol-link-group"),ge=t("kol-logo"),be=t("kol-modal"),fe=t("kol-nav"),Ke=t("kol-pagination"),xe=t("kol-progress"),Ee=t("kol-select"),Ce=t("kol-skip-nav"),Le=null,De=t("kol-spin"),ye=t("kol-symbol"),we=t("kol-table"),ve=t("kol-tabs"),Be=t("kol-textarea"),je=t("kol-toast"),Se=t("kol-tooltip"),Te=t("kol-version")}}]);