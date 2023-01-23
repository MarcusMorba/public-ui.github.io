(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[2012],{"./src/components/input-range/0-description/autogen.react.stories.mdx":(f,g,e)=>{"use strict";e.r(g),e.d(g,{__namedExportsOrder:()=>w,__page:()=>y,default:()=>L});var s=e("./node_modules/core-js/modules/es.object.keys.js"),_=e.n(s),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),d=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(d),b=e("./node_modules/core-js/modules/es.function.bind.js"),O=e.n(b),v=e("./node_modules/core-js/modules/es.object.assign.js"),R=e.n(v),B=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),k=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),j=e("./src/components/input-range/0-description/autogen.readme.md"),T=e("./src/components/mermaid.tsx"),C=["components"];function E(){return E=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}return n},E.apply(this,arguments)}function M(n,r){if(n==null)return{};var i=D(n,r),t,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function D(n,r){if(n==null)return{};var i={},t=Object.keys(n),a,l;for(l=0;l<t.length;l++)a=t[l],!(r.indexOf(a)>=0)&&(i[a]=n[a]);return i}var P={},x="wrapper";function h(n){var r=n.components,i=M(n,C);return(0,c.kt)(x,E({},P,i,{components:r,mdxType:"MDXLayout"}),(0,c.kt)(k.h_,{title:"React/InputRange/Beschreibung",mdxType:"Meta"}),(0,c.kt)(k.dk,{mdxType:"Description"},j),(0,c.kt)("script",null,"() =>",(0,T.m)()))}h.displayName="MDXContent",h.isMDXComponent=!0;var y=function(){throw new Error("Docs-only story")};y.parameters={docsOnly:!0};var p={title:"React/InputRange/Beschreibung",includeStories:["__page"]},I={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,c.kt)(k.aT,{mdxStoryNameToKey:I,mdxComponentAnnotations:p},(0,c.kt)(h,null))}});const L=p;var w=["__page"]},"./src/components/mermaid.tsx":(f,g,e)=>{"use strict";e.d(g,{G:()=>d,m:()=>o});var s=e("./node_modules/react/index.js"),_=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=u=>{u&&_.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),_.Z.contentLoaded()},500)},d=({code:u,config:b,children:O})=>((0,s.useEffect)(()=>{o(b)},[]),s.createElement("div",null,s.createElement("div",{className:"mermaid"},u)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{d.displayName="Mermaid",d.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:d.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(f,g,e)=>{var s={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function _(o){var d=m(o);return e(d)}function m(o){if(!e.o(s,o)){var d=new Error("Cannot find module '"+o+"'");throw d.code="MODULE_NOT_FOUND",d}return s[o]}_.keys=function(){return Object.keys(s)},_.resolve=m,f.exports=_,_.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/input-range/0-description/autogen.readme.md":f=>{"use strict";f.exports='# InputRange\n\nDer Input-Typ **Range** erzeugt ein interaktives Element, mit dem Werte durch Verschieben eines Reglers ver\xE4ndert werden k\xF6nnen.\n\n## Konstruktion\n\n### Code\n\n> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.\n\n```tsx\n<kol-input-range _id="meine_range" _name="meine_range" _min={100} _max={200} _step={10}>\n	Wertebereich\n</kol-input-range>\n```\n\n### Beispiel\n\n<kol-input-range _id="meine_range" _name="meine_range" _min={100} _max={200} _step={10}>\n  Wertebereich\n</kol-input-range>\n\n## Verwendung\n\n### Best practices\n\n- Achten sie darauf, die Pflichtfelder `id` und `name` korrekt zu setzen.\n\n## Barrierefreiheit\n\n> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.\n\n### Tastatursteuerung\n\n| Taste          | Funktion                                 |\n| -------------- | ---------------------------------------- |\n| `Tab`          | Fokussiert das Eingabefeld.              |\n| `Pfeil-Tasten` | Ver\xE4ndern den Wert der Range-Komponente. |\n\n## Links und Referenzen\n\n- https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109\n- https://www.jotform.com/blog/html5-datalists-what-you-need-to-know-78024/\n\n<!-- Auto Generated Below -->\n\n\n## Eigenschaften\n\n| Property           | Attribute        | Description                                                                          | Type                                                                                                                                                                                                          | Default     |\n| ------------------ | ---------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `_accessKey`       | `_access-key`    | Gibt an, mit welcher Tastenkombination man das Input ausl\xF6sen oder fokussieren kann. | `string | undefined`                                                                                                                                                                                         | `undefined` |\n| `_alert`           | `_alert`         | Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt.             | `boolean | undefined`                                                                                                                                                                                        | `true`      |\n| `_autoComplete`    | `_auto-complete` | Gibt an, ob das Eingabefeld autovervollst\xE4ndigt werden kann.                         | `"off" | "on" | undefined`                                                                                                                                                                                  | `undefined` |\n| `_disabled`        | `_disabled`      | Gibt an, ob das Eingabefeld aktiviert oder deaktiviert ist.                          | `boolean | undefined`                                                                                                                                                                                        | `undefined` |\n| `_error`           | `_error`         | Gibt den Text f\xFCr eine Fehlermeldung an.                                             | `string | undefined`                                                                                                                                                                                         | `undefined` |\n| `_hideLabel`       | `_hide-label`    | Gibt an, ob das Eingabefeld kein sichtbares Label haben soll.                        | `boolean | undefined`                                                                                                                                                                                        | `undefined` |\n| `_hint`            | `_hint`          | Gibt den Text f\xFCr eine Hinweistext an.                                               | `string | undefined`                                                                                                                                                                                         | `\'\'`        |\n| `_icon`            | `_icon`          | Erm\xF6glicht das Anzeigen von Icons links und/oder rechts am Rand des Eingabefeldes.   | `string | undefined | { right: string | KoliBriCustomIcon; left?: string | KoliBriCustomIcon | undefined; } | { right?: string | KoliBriCustomIcon | undefined; left: string | KoliBriCustomIcon; }` | `undefined` |\n| `_id` _(required)_ | `_id`            | Gibt die technische ID des Eingabefeldes an.                                         | `string`                                                                                                                                                                                                      | `undefined` |\n| `_list`            | `_list`          | Gibt die Liste der Vorschlagsw\xF6rter an.                                              | `Option<number>[] | string | undefined`                                                                                                                                                                     | `undefined` |\n| `_max`             | `_max`           | Gibt den Maximalwert des Eingabefeldes an.                                           | `number | undefined`                                                                                                                                                                                         | `undefined` |\n| `_min`             | `_min`           | Gibt den Minimalwert des Eingabefeldes an.                                           | `number | undefined`                                                                                                                                                                                         | `undefined` |\n| `_name`            | `_name`          | Gibt den technischen Namen des Eingabefeldes an.                                     | `string | undefined`                                                                                                                                                                                         | `undefined` |\n| `_on`              | --               | Gibt die EventCallback-Funktionen f\xFCr das Input-Event an.                            | `InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus | undefined`                                                                                                                      | `undefined` |\n| `_step`            | `_step`          | Gibt die Schrittweite der Wertver\xE4nderung an.                                        | `number | undefined`                                                                                                                                                                                         | `undefined` |\n| `_tabIndex`        | `_tab-index`     | Gibt an, welchen Tab-Index dieses Input hat.                                         | `number | undefined`                                                                                                                                                                                         | `undefined` |\n| `_touched`         | `_touched`       | Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xFChrt wurde.        | `boolean | undefined`                                                                                                                                                                                        | `false`     |\n| `_value`           | `_value`         | Gibt den Wert des Eingabefeldes an.                                                  | `number | undefined`                                                                                                                                                                                         | `undefined` |\n\n\n## Abh\xE4ngigkeiten\n\n### Abh\xE4ngig von\n\n- kol-input\n\n### Graph\n<div class="mermaid">\ngraph TD;\n  kol-input-range --> kol-input\n  kol-input --> kol-icon\n  kol-input --> kol-button-wc\n  kol-input --> kol-alert\n  kol-button-wc --> kol-span-wc\n  kol-button-wc --> kol-tooltip\n  kol-span-wc --> kol-icon\n  kol-tooltip --> kol-badge\n  kol-badge --> kol-span-wc\n  kol-badge --> kol-button-wc\n  kol-alert --> kol-heading-wc\n  kol-alert --> kol-button-wc\n  kol-alert --> kol-icon\n  style kol-input-range fill:#f9f,stroke:#333,stroke-width:4px\n</div>\n\n----------------------------------------------\n\n\n'}}]);