(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8010],{"./src/components/input-file/0-description/autogen.wc.stories.mdx":(f,b,e)=>{"use strict";e.r(b),e.d(b,{__namedExportsOrder:()=>x,__page:()=>y,default:()=>A});var r=e("./node_modules/core-js/modules/es.object.keys.js"),_=e.n(r),l=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(l),i=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(i),g=e("./node_modules/core-js/modules/es.function.bind.js"),O=e.n(g),C=e("./node_modules/core-js/modules/es.object.assign.js"),L=e.n(C),K=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),h=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),j=e("./src/components/input-file/0-description/autogen.readme.md"),v=e("./src/components/mermaid.tsx"),D=["components"];function k(){return k=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var t in d)Object.prototype.hasOwnProperty.call(d,t)&&(n[t]=d[t])}return n},k.apply(this,arguments)}function T(n,a){if(n==null)return{};var d=M(n,a),t,s;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(s=0;s<m.length;s++)t=m[s],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(d[t]=n[t])}return d}function M(n,a){if(n==null)return{};var d={},t=Object.keys(n),s,m;for(m=0;m<t.length;m++)s=t[m],!(a.indexOf(s)>=0)&&(d[s]=n[s]);return d}var B={},I="wrapper";function E(n){var a=n.components,d=T(n,D);return(0,c.kt)(I,k({},B,d,{components:a,mdxType:"MDXLayout"}),(0,c.kt)(h.h_,{title:"Web Components/InputFile/Beschreibung",mdxType:"Meta"}),(0,c.kt)(h.dk,{mdxType:"Description"},j),(0,c.kt)("script",null,"() =>",(0,v.m)()))}E.displayName="MDXContent",E.isMDXComponent=!0;var y=function(){throw new Error("Docs-only story")};y.parameters={docsOnly:!0};var p={title:"Web Components/InputFile/Beschreibung",includeStories:["__page"]},P={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,c.kt)(h.aT,{mdxStoryNameToKey:P,mdxComponentAnnotations:p},(0,c.kt)(E,null))}});const A=p;var x=["__page"]},"./src/components/mermaid.tsx":(f,b,e)=>{"use strict";e.d(b,{G:()=>i,m:()=>o});var r=e("./node_modules/react/index.js"),_=e("./node_modules/mermaid/dist/mermaid.core.mjs");let l;const o=u=>{u&&_.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(l),l=setTimeout(()=>{clearTimeout(l),_.Z.contentLoaded()},500)},i=({code:u,config:g,children:O})=>((0,r.useEffect)(()=>{o(g)},[]),r.createElement("div",null,r.createElement("div",{className:"mermaid"},u)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{i.displayName="Mermaid",i.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:i.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(f,b,e)=>{var r={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function _(o){var i=l(o);return e(i)}function l(o){if(!e.o(r,o)){var i=new Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}return r[o]}_.keys=function(){return Object.keys(r)},_.resolve=l,f.exports=_,_.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/input-file/0-description/autogen.readme.md":f=>{"use strict";f.exports='# InputFile\n\nDer Input-Typ **File** erzeugt ein Eingabefeld f\xFCr Uploads. Es k\xF6nnen eine oder auch mehrere Dateien ausgew\xE4hlt werden.\n\n## Konstruktion\n\n### Code\n\n> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.\n\n```tsx\n<kol-input-file _id="mein_upload" _name="mein_upload" _accept="image/png, image/jpeg, application/pdf">\n	Bild hochladen\n</kol-input-file>\n```\n\n### Beispiel\n\n<kol-input-file _id="mein_upload" _name="mein_upload" _accept="image/png">Bild hochladen</kol-input-file>\n\n## Verwendung\n\nGeben Sie \xFCber das Attribut **`_accept`** an, welche Dateitypen zur Auswahl erlaubt sind. Wird das Attribut nicht oder leer \xFCbergeben, sind alle Dateitypen erlaubt.\n\n### Best practices\n\n- Lassen Sie nur die Dateitypen zum Upload zu, die f\xFCr die Programmausf\xFChrung ben\xF6tigt werden. Eine fehlende Einschr\xE4nkung der hochladbaren Dateitypen kann ein erhebliches Sicherheitsrisiko sein.\n- Begrenzen Sie die Gr\xF6\xDFe der Dateien, die Sie zum Upload zulassen m\xF6chten.\n\n## Barrierefreiheit\n\n> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.\n\n### Tastatursteuerung\n\n| Taste | Funktion                                                        |\n| ----- | --------------------------------------------------------------- |\n| `Tab` | Fokussiert das Eingabefeld und ruft den Dateiauswahldialog auf. |\n\n## Links und Referenzen\n\n- https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109\n\n<!-- Auto Generated Below -->\n\n\n## Eigenschaften\n\n| Property           | Attribute     | Description                                                                                              | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Default     |\n| ------------------ | ------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `_accept`          | `_accept`     | Gibt an, welche Dateiformate erlaubt sind.                                                               | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined` |\n| `_accessKey`       | `_access-key` | Gibt an, mit welcher Tastenkombination man das Input ausl\xF6sen oder fokussieren kann.                     | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined` |\n| `_alert`           | `_alert`      | Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt.                                 | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `true`      |\n| `_disabled`        | `_disabled`   | Gibt an, ob das Eingabefeld aktiviert oder deaktiviert ist.                                              | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `undefined` |\n| `_error`           | `_error`      | Gibt den Text f\xFCr eine Fehlermeldung an.                                                                 | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined` |\n| `_hideLabel`       | `_hide-label` | Gibt an, ob das Eingabefeld kein sichtbares Label haben soll.                                            | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `undefined` |\n| `_hint`            | `_hint`       | Gibt den Text f\xFCr eine Hinweistext an.                                                                   | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `\'\'`        |\n| `_icon`            | `_icon`       | Erm\xF6glicht das Anzeigen von Icons links und/oder rechts am Rand des Eingabefeldes.                       | `string | undefined | { right: string | KoliBriCustomIcon; left?: string | KoliBriCustomIcon | undefined; } | { right?: string | KoliBriCustomIcon | undefined; left: string | KoliBriCustomIcon; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `undefined` |\n| `_id` _(required)_ | `_id`         | Gibt die technische ID des Eingabefeldes an.                                                             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined` |\n| `_multiple`        | `_multiple`   | Gibt an, ob mehrere Werte eingegeben werden k\xF6nnen.                                                      | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `undefined` |\n| `_name`            | `_name`       | Gibt den technischen Namen des Eingabefeldes an.                                                         | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined` |\n| `_on`              | --            | Gibt die EventCallback-Funktionen f\xFCr das Input-Event an.                                                | `InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined` |\n| `_required`        | `_required`   | Gibt an, ob das Eingabefeld ein Pflichtfeld ist.                                                         | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `undefined` |\n| `_smartButton`     | --            | Erm\xF6glicht einen Schalter ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xFCgen (nur Icon-Only). | `undefined | { _label: string; } & { _ariaControls?: string | undefined; _ariaCurrent?: AriaCurrent | undefined; _ariaExpanded?: boolean | undefined; _ariaLabel?: string | undefined; _ariaSelected?: boolean | undefined; _disabled?: boolean | undefined; _icon?: Stringified<KoliBriIconProp> | undefined; _iconAlign?: Alignment | undefined; _iconOnly?: boolean | undefined; _role?: "tab" | undefined; _tabIndex?: number | undefined; _tooltipAlign?: TooltipAlignment | undefined; _accessKey?: string | undefined; _id?: string | undefined; _on?: KoliBriButtonCallbacks | undefined; _type?: KoliBriButtonType | undefined; _customClass?: string | undefined; _variant?: KoliBriButtonVariant | undefined; }` | `undefined` |\n| `_tabIndex`        | `_tab-index`  | Gibt an, welchen Tab-Index dieses Input hat.                                                             | `number | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined` |\n| `_touched`         | `_touched`    | Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xFChrt wurde.                            | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `false`     |\n| `_value`           | `_value`      | Gibt den Wert des Eingabefeldes an.                                                                      | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined` |\n\n\n## Abh\xE4ngigkeiten\n\n### Abh\xE4ngig von\n\n- kol-input\n\n### Graph\n<div class="mermaid">\ngraph TD;\n  kol-input-file --> kol-input\n  kol-input --> kol-icon\n  kol-input --> kol-button-wc\n  kol-input --> kol-alert\n  kol-button-wc --> kol-span-wc\n  kol-button-wc --> kol-tooltip\n  kol-span-wc --> kol-icon\n  kol-tooltip --> kol-badge\n  kol-badge --> kol-span-wc\n  kol-badge --> kol-button-wc\n  kol-alert --> kol-heading-wc\n  kol-alert --> kol-button-wc\n  kol-alert --> kol-icon\n  style kol-input-file fill:#f9f,stroke:#333,stroke-width:4px\n</div>\n\n----------------------------------------------\n\n\n'}}]);