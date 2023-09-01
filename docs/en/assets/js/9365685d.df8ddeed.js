"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[31511],{17942:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(50959);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),k=r,g=m["".concat(d,".").concat(k)]||m[k]||p[k]||i;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=k;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},97585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(15882),r=(t(50959),t(17942));const i={},l=void 0,o={unversionedId:"readmes/modal/readme",id:"version-1.6.1/readmes/modal/readme",title:"readme",description:"Vielen Dank, dass Sie diese Komponente zur Umsetzung eines Modals verwenden wollen. Inzwischen ist das native `` Element sehr gut unterst\xfctzt (), barrierefrei, einfach zu benutzen und performanter (da nativ), daher empfehlen wir dieses zu verwenden. Wenn Sie aufgrund von Abw\xe4rtskompatibilit\xe4t, oder weil Sie die Modal-Komponente bereits eingebaut haben, die Dokumentation zu unserem KolModal suchen, finden Sie diese etwas weiter unten. Die Modal-Komponente wird in Version 2 noch zur Verf\xfcgung stehen.",source:"@site/versioned_docs/version-1.6.1/readmes/modal/readme.md",sourceDirName:"readmes/modal",slug:"/readmes/modal/",permalink:"/en/docs/readmes/modal/",draft:!1,tags:[],version:"1.6.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/en/docs/readmes/logo/"},next:{title:"readme",permalink:"/en/docs/readmes/nav/"}},d={},s=[{value:"Verwendung von <code>dialog</code>-Tag",id:"verwendung-von-dialog-tag",level:2},{value:"Modal",id:"modal",level:2},{value:"Funktionsweise",id:"funktionsweise",level:3},{value:"Konstruktion",id:"konstruktion",level:3},{value:"Code",id:"code",level:4},{value:"Verwendung",id:"verwendung",level:3},{value:"Best practices",id:"best-practices",level:4},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:4},{value:"Barrierefreiheit",id:"barrierefreiheit",level:3},{value:"Tastatursteuerung",id:"tastatursteuerung",level:4},{value:"Links und Referenzen",id:"links-und-referenzen",level:3},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2}],u={toc:s},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Vielen Dank, dass Sie diese Komponente zur Umsetzung eines Modals verwenden wollen. Inzwischen ist das native ",(0,r.kt)("inlineCode",{parentName:"p"},"<dialog>")," Element sehr gut unterst\xfctzt (",(0,r.kt)("kol-link",{_href:"https://caniuse.com/?search=dialog",_label:"https://caniuse.com/?search=dialog",_target:"_blank",_label:"caniuse"}),"), barrierefrei, einfach zu benutzen und performanter (da nativ), daher empfehlen wir dieses zu verwenden. Wenn Sie aufgrund von Abw\xe4rtskompatibilit\xe4t, oder weil Sie die ",(0,r.kt)("strong",{parentName:"p"},"Modal"),"-Komponente bereits eingebaut haben, die Dokumentation zu unserem KolModal suchen, finden Sie diese etwas weiter unten. Die ",(0,r.kt)("strong",{parentName:"p"},"Modal"),"-Komponente wird in Version 2 noch zur Verf\xfcgung stehen."),(0,r.kt)("h2",{id:"verwendung-von-dialog-tag"},"Verwendung von ",(0,r.kt)("inlineCode",{parentName:"h2"},"dialog"),"-Tag"),(0,r.kt)("p",null,"Die Dokumentation des ",(0,r.kt)("inlineCode",{parentName:"p"},"<dialog>")," finden Sie ",(0,r.kt)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",_label:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",_target:"_blank",_label:"hier(MDN)"}),".\nDas ",(0,r.kt)("strong",{parentName:"p"},"Dialog"),"-Element kann wie jedes andere HTML-Tag verwendet werden, alle Elemente innerhalb werden wie gewohnt dargestellt.\nDer Dialog ist standardm\xe4\xdfig nicht sichtbar, \xfcber das Setzen des Attributs ",(0,r.kt)("inlineCode",{parentName:"p"},"open"),", oder \xfcber die Funktionen ",(0,r.kt)("inlineCode",{parentName:"p"},"show()")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"showModal()")," wird er sichtbar.\n",(0,r.kt)("inlineCode",{parentName:"p"},"open")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"show()")," \xf6ffnen das Element mit ",(0,r.kt)("inlineCode",{parentName:"p"},"position: absolute"),", w\xe4hrend ",(0,r.kt)("inlineCode",{parentName:"p"},"showModal()")," ",(0,r.kt)("inlineCode",{parentName:"p"},"position: fixed")," setzt."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Beide Varianten haben eine ",(0,r.kt)("inlineCode",{parentName:"li"},"max-width"),", die unter ",(0,r.kt)("inlineCode",{parentName:"li"},"box-sizing: content-box")," der gesamten Bildschirmbreite entspricht (bzw des ",(0,r.kt)("inlineCode",{parentName:"li"},"position")," Elters)"),(0,r.kt)("li",{parentName:"ul"},"Die Modalvariante hat einen Hintergrund, der eine sanfte Abdunklung verursacht (unser Tipp: die Opacity der Hintergrundfarbe erh\xf6hen), der \xfcber ",(0,r.kt)("inlineCode",{parentName:"li"},"::backdrop")," gestylt werden kann und Klickevents auf den Dialog weiterleitet."),(0,r.kt)("li",{parentName:"ul"},"Die Modalvariante ist in der Bildschirmmitte zentriert (via ",(0,r.kt)("inlineCode",{parentName:"li"},"margin: auto"),", kann von CSS Resets \xfcberschrieben werden)")),(0,r.kt)("h2",{id:"modal"},"Modal"),(0,r.kt)("p",null,"Mit Hilfe der ",(0,r.kt)("strong",{parentName:"p"},"Modal"),"-Komponente k\xf6nnen zus\xe4tzliche Informationen oder auch Eingabeformulare in einem Dialogfenster angezeigt werden. Ein offenes ",(0,r.kt)("strong",{parentName:"p"},"Modal")," kann via ",(0,r.kt)("strong",{parentName:"p"},"ESC")," geschlossen werden.\nDie ",(0,r.kt)("strong",{parentName:"p"},"Modal"),"-Komponente ist standardm\xe4\xdfig versteckt. Sie wird i.d.R. erst nach Klick auf einen Button oder sonstigem Trigger angezeigt. Dabei wird der Hintergrund des Fensters deaktiviert und allein der Inhalt des Modal-Fensters ist aktiv."),(0,r.kt)("h3",{id:"funktionsweise"},"Funktionsweise"),(0,r.kt)("p",null,"Das ",(0,r.kt)("strong",{parentName:"p"},"Modal")," realisiert die Basis f\xfcr barrierefreie Overlays und erm\xf6glicht es beliebige HTML-Inhalte anzuzeigen. Beispielsweise w\xe4re eine Dialog-Komponente eine Komposition aus einer Card-Komponente die in einer ",(0,r.kt)("strong",{parentName:"p"},"Modal"),"-Komponente eingef\xfcgt wird."),(0,r.kt)("p",null,"Sobald ein ",(0,r.kt)("strong",{parentName:"p"},"Modal")," ge\xf6ffnet wird, werden alle selektierbaren Elemente in der Webseite deaktiviert, au\xdfer die innerhalb des aktiven Modals."),(0,r.kt)("h3",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h4",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-modal id="test-modal" _label="Beschreibung zur Modalbox">\n    <kol-card _heading="Vorgang l\xf6schen" _has-footer style="background-color: bisque">\n        <p slot="content">Wollen Sie den Vorgang wirklich l\xf6schen?</p>\n        <div slot="footer">\n            <kol-button className="close-modal" _label="Ok" _variant="primary"></kol-button>\n            <kol-button className="close-modal" _label="Abbrechen"></kol-button>\n        </div>\n    </kol-card>\n</kol-modal>\n<kol-button id="modal-open-button" _label="Modal \xf6ffnen"></kol-button>\n<script>\n    const modal = document.querySelector(\'#test-modal\');\n    const modalOpenButton = document.querySelector(\'#modal-open-button\');\n    function openModal() {\n        modal._activeElement = modalOpenButton;\n        modal._open = true;\n    }\n    function closeModal() {\n        modal._activeElement = null;\n    }\n    document.querySelectorAll(\'.close-modal\').forEach((b) => (b._on = { onClick: closeModal }));\n    modalOpenButton._on = { onClick: openModal };\n<\/script>\n')),(0,r.kt)("h3",{id:"verwendung"},"Verwendung"),(0,r.kt)("p",null,"\xdcber das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_width"))," geben Sie die gew\xfcnschte Breite der Modalbox an. Sie wird in der gew\xe4hlten Gr\xf6\xdfe immer mittig auf dem Bildschirm angezeigt."),(0,r.kt)("p",null,"Da das Modal vom eigentlichen Modal entkoppelt ist, aber f\xfcr eine teilweisen Sperrung der Inhalte sorgt. Muss es auch eine M\xf6glichkeit bieten, das Schlie\xdfen (Sperrung aufheben) aus dem Modal-Kontext zu erm\xf6glichen."),(0,r.kt)("p",null,(0,r.kt)("kol-alert",{_type:"info"},"Es wird empfohlen einen Close-Button oben rechts einzubauen.")),(0,r.kt)("p",null,"Das ",(0,r.kt)("strong",{parentName:"p"},"Modal")," hat einen ",(0,r.kt)("inlineCode",{parentName:"p"},"z-index")," von ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,r.kt)("h4",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie die Modalbox, um weiterf\xfchrende Informationen zu einem Thema anzuzeigen."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie die Modalbox, um umfangreiche Inhalte optisch kompakter zu gestalten."),(0,r.kt)("li",{parentName:"ul"},"Vermeiden Sie es, wichtige Informationen wie z.B. rechtliche Themen, auf die Nutzer:innen reagieren m\xfcssen, in Modalboxen zu platzieren.")),(0,r.kt)("h4",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, als Erkl\xe4rungshilfe zu einzelnen Eingabefeldern in Formularen."),(0,r.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, um erg\xe4nzende Informationen erst nach Anforderung durch die Nutzer:innen anzuzeigen."),(0,r.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, um ein Feedback zu Speichervorg\xe4ngen oder \xe4hnliches anzuzeigen, z.B. ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Vielen Dank f\xfcr Ihre R\xfcckmeldung"))," nach Absenden eines Formulars.")),(0,r.kt)("h3",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xe4nkung der Barrierefreiheit f\xfchren.")),(0,r.kt)("p",null,"Das ",(0,r.kt)("strong",{parentName:"p"},"Modal")," ist so realisiert, dass der Fokus darauf liegt, wenn es ge\xf6ffnet wird. Elemente au\xdferhalb des Modals sind dann nicht mehr fokussierbar."),(0,r.kt)("p",null,"Wird das ",(0,r.kt)("strong",{parentName:"p"},"Modal")," geschlossen, liegt der Fokus wieder auf dem Element, welches unter ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_activeElement"))," angegeben wurde."),(0,r.kt)("p",null,"Bei der Realisierung dieser Funktionalit\xe4t haben wir auf die Verwendung der CSS-Properties ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"user-select"))," und ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pointer-events"))," verzichtet, um das Navigieren aus der Webseite in die Browser-Men\xfc's weiterhin zu erm\xf6glichen. Ebenfalls haben wir darauf verzichtet die ",(0,r.kt)("em",{parentName:"p"},"Event-Propagation")," zu manipulieren."),(0,r.kt)("p",null,"Achten Sie f\xfcr eine optimale Ausgabe der ",(0,r.kt)("strong",{parentName:"p"},"Modal"),"-Komponente in Screenreadern darauf, das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"aria-label"))," korrekt zu setzen."),(0,r.kt)("p",null,"Des Weiteren gibt es immer nur maximal ein aktives Modal, welches alle selektierbaren Elemente deaktiviert au\xdfer die innerhalb des eigenen Modals. Hierbei ist zu beachten, dass KoliBri nur Elemente deaktiviert die sich im Browser-Seitenbereich befinden. Das Fokussieren den Browser-Men\xfc's ist weiterhin m\xf6glich."),(0,r.kt)("h4",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taste"),(0,r.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Bei ge\xf6ffnetem Modal werden alle fokussierbaren Elemente der Reihenfolge nach angesprungen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC")),(0,r.kt)("td",{parentName:"tr",align:null},"Schlie\xdft das Modal.")))),(0,r.kt)("h3",{id:"links-und-referenzen"},"Links und Referenzen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal",_label:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal",_target:"_blank"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html",_label:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html",_target:"_blank"}))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_activeElement")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Referenz auf das ausl\xf6sende HTML-Element an, wodurch das Modal ge\xf6ffnet wurde."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HTMLElement")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use ","_","label instead",(0,r.kt)("br",null),(0,r.kt)("br",null),"Deprecated: Setzt die semantische Beschriftung der Komponente."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Function f\xfcr das Schlie\xdfen des Modals an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"{ onClose?: EventCallback<Event>")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_width")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_width")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the width of the modal. (max-width: 100%)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'100%'"))))),(0,r.kt)("h2",{id:"slots"},"Slots"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Slot"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Der Inhalt des Modals.")))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);