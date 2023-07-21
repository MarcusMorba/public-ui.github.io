/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-2c046ff1.js";import{b as watchBoolean,w as watchString,s as setState}from"./prop.validators-601f1068.js";import{f as featureHint}from"./a11y.tipps-9f948961.js";import{n as nonce}from"./dev.utils-4290338e.js";import{p as processEnv}from"./reuse-c2156413.js";import{w as watchHeadingLevel}from"./validation-5300d0a1.js";import"./index-37b5cbcf.js";const validateOpen=(t,e)=>{watchBoolean(t,"_open",e)},defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}.accordion kol-heading-wc kol-button-wc button kol-span-wc{justify-items:start}.content{inset:0 0 auto 0;width:100%}.transition{transition:height 0.3s ease-in-out}@media (prefers-reduced-motion){.transition{transition-duration:0s}}";featureHint("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),featureHint("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const KolAccordion=class{constructor(t){registerInstance(this,t),this.nonce=nonce(),this.contentElement=null,this.contentWrapperElement=null,this.contentObserver=null,this.transition=!1,this.catchContentElement=t=>{t&&(this.contentElement=t)},this.catchContentWrapperElement=t=>{t&&(this.contentWrapperElement=t)},this.onClick=t=>{this._open=!this._open,this.resizeWrapper(),setTimeout((()=>{var e;"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&this.state._on.onClick(t,!0===this._open)}))},this._heading=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_heading:"…",_level:1}}resizeWrapper(t){const e=this.contentElement,n=this.contentWrapperElement,i=this.contentObserver;e&&n&&i&&(this._open?(n.style.display="block",setTimeout((()=>{var t;n.style.height=`${null!==(t=null==e?void 0:e.clientHeight)&&void 0!==t?t:0}px`})),t||i.observe(e),n.addEventListener("transitionend",(()=>{n.style.overflow=""}),{once:!0})):(n.style.overflow="hidden",i.unobserve(e),n.style.height="0",this.transition?n.addEventListener("transitionend",(()=>{n.style.display="none"}),{once:!0}):n.style.display="none"))}render(){return h(Host,null,h("div",{class:{accordion:!0,open:!0===this.state._open,close:!0!==this.state._open}},h("kol-heading-wc",{_label:"",_level:this.state._level},h("kol-button-wc",{_ariaControls:this.nonce,_ariaExpanded:this.state._open,_icon:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._heading,_on:{onClick:this.onClick}})),h("div",{class:"header"},h("slot",{name:"header"})),h("div",{ref:this.catchContentWrapperElement,class:{wrapper:!0,transition:this.transition}},h("div",{ref:this.catchContentElement,"aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},h("slot",{name:"content"})," ",h("slot",null)))))}validateHeading(t){watchString(this,"_heading",t,{required:!0})}validateLevel(t){watchHeadingLevel(this,t)}validateOn(t){"object"==typeof t&&null!==t&&"function"==typeof t.onClick&&setState(this,"_on",t)}validateOpen(t){validateOpen(this,t)}componentWillLoad(){this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open),"test"!==processEnv&&(this.contentObserver=new ResizeObserver(this.resizeWrapper.bind(this))),setTimeout((()=>{this.contentObserver&&this.contentElement&&this.contentObserver.observe(this.contentElement)})),setTimeout((()=>{this.transition=!0}),200)}static get watchers(){return{_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};KolAccordion.style={default:defaultStyleCss};export{KolAccordion as kol_accordion};