/*! For license information please see 1260.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1260],{1260:(e,t,a)=>{a.r(t),a.d(t,{kol_progress:()=>l});var i=a(46266),s=a(73681);const l=class{constructor(e){(0,i.r)(this,e),this._max=void 0,this._type=void 0,this._unit="%",this._value=void 0,this.state={_max:100,_type:"bar",_unit:"%",_value:0,_liveValue:0}}render(){return(0,i.h)(i.H,null,"cycle"===(e=this.state)._type?(0,i.h)("svg",{width:"100",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},(0,i.h)("circle",{fill:"none",stroke:"#efefef",cx:"6px",cy:"6px",r:"5px"}),(0,i.h)("circle",{class:"cycle","stroke-linecap":"round","stroke-dasharray":`${Math.round(e._value/e._max*32)}px 32px`,fill:"none",stroke:"#0075ff",cx:"6px",cy:"6px",r:"5px"})):(0,i.h)("svg",{width:"100",viewBox:"0 0 24 2",xmlns:"http://www.w3.org/2000/svg"},(0,i.h)("line",{"stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:"23",y2:"1",fill:"#efefef",stroke:"#efefef"}),(0,i.h)("line",{class:"bar","stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:`${1+Math.round(e._value/e._max*22)}`,y2:"1",fill:"#0075ff",stroke:"#0075ff"})),(0,i.h)("progress",{"aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),(0,i.h)("span",{"aria-live":"polite","aria-relevant":"removals text"},this.state._liveValue," von ",this.state._max," ",this.state._unit));var e}validateMax(e){"number"!=typeof e&&(e=100),(0,s.d)(this,"_max",e,{required:!0})}validateType(e){"cycle"===e||(e="bar"),this.state=Object.assign(Object.assign({},this.state),{_type:e})}validateUnit(e){(0,s.w)(this,"_unit",e)}validateValue(e){"number"!=typeof e&&(e=0),(0,s.d)(this,"_value",e,{required:!0})}componentWillLoad(){this.validateMax(this._max),this.validateType(this._type),this.validateUnit(this._unit),this.validateValue(this._value),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_max:["validateMax"],_type:["validateType"],_unit:["validateUnit"],_value:["validateValue"]}}};l.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}}}]);