/*! For license information please see 79.effd3114.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[79],{60596:(e,r,t)=>{t.d(r,{c:()=>i});var a={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},o=function(e){var r,t,o=[],i=1;if("string"==typeof e)if(a[e])o=a[e].slice(),t="rgb";else if("transparent"===e)i=0,t="rgb",o=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var n=e.slice(1);i=1,(c=n.length)<=4?(o=[parseInt(n[0]+n[0],16),parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16)],4===c&&(i=parseInt(n[3]+n[3],16)/255)):(o=[parseInt(n[0]+n[1],16),parseInt(n[2]+n[3],16),parseInt(n[4]+n[5],16)],8===c&&(i=parseInt(n[6]+n[7],16)/255)),o[0]||(o[0]=0),o[1]||(o[1]=0),o[2]||(o[2]=0),t="rgb"}else if(r=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=r[1],u="rgb"===s;t=n=s.replace(/a$/,"");var c="cmyk"===n?4:"gray"===n?1:3;o=r[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,r){if(/%$/.test(e))return r===c?parseFloat(e)/100:"rgb"===n?255*parseFloat(e)/100:parseFloat(e);if("h"===n[r]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==l[e])return l[e]}return parseFloat(e)})),s===n&&o.push(1),i=u||void 0===o[c]?1:o[c],o=o.slice(0,c)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(o=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),t=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(o=[e[0],e[1],e[2]],t="rgb",i=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(t="rgb",o=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(t="hsl",o=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),i=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(i/=100)):(t="rgb",o=[e>>>16,(65280&e)>>>8,255&e]);return{space:t,values:o,alpha:i}},l={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};var i=function(e){var r;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var t=o(e);if(!t.space)return[];var a=[0,0,0],l="h"===t.space[0]?[360,100,100]:[255,255,255];return(r=Array(3))[0]=Math.min(Math.max(t.values[0],a[0]),l[0]),r[1]=Math.min(Math.max(t.values[1],a[1]),l[1]),r[2]=Math.min(Math.max(t.values[2],a[2]),l[2]),"h"===t.space[0]&&(r=n(r)),r.push(Math.min(Math.max(t.alpha,0),1)),r};function n(e){var r,t,a,o,l,i=e[0]/360,n=e[1]/100,s=e[2]/100,u=0;if(0===n)return[l=255*s,l,l];for(r=2*s-(t=s<.5?s*(1+n):s+n-s*n),o=[0,0,0];u<3;)(a=i+1/3*-(u-1))<0?a++:a>1&&a--,l=6*a<1?r+6*(t-r)*a:2*a<1?t:3*a<2?r+(t-r)*(2/3-a)*6:r,o[u++]=255*l;return o}},30079:(e,r,t)=>{t.r(r),t.d(r,{kol_badge:()=>h});var a=t(55640),o=t(16105),l=t(39895),i=t(60596);const n=(e,r,t,a=1)=>{const o=[Math.max(Math.min(Math.round(r[0]+a*Math.max(1,r[0]/100)),255),0),Math.max(Math.min(Math.round(r[1]+a*Math.max(1,r[1]/100)),255),0),Math.max(Math.min(Math.round(r[2]+a*Math.max(1,r[2]/100)),255),0)],i=(0,l.c)(l.r.hex(`rgba(${e.join(",")},1)`),l.r.hex(`rgba(${o.join(",")},1)`)),s=o[0]+o[1]+o[2];return 0===s||765===s||i>t?{background:e,foreground:o,contrast:i}:n(e,o,t,a)},s=new Map,u=(e,r=7)=>{let t=[0,0,0,1],a=[255,255,255,1];"string"==typeof e?(t=(0,i.c)(e),a=t):"object"==typeof e&&null!==e&&"string"==typeof e.background&&"string"==typeof e.foreground&&(t=(0,i.c)(e.background),a="string"==typeof e.foreground?(0,i.c)(e.foreground):t);const o=(299*t[0]+587*t[1]+114*t[2])/1e3>=128?-1:1;const u=((e,r,t,a=1)=>{if(s.has(e))return s.get(e);const o=n(e,r,t,a);return s.set(e,o),o})([t[0],t[1],t[2]],[a[0],a[1],a[2]],r,o);return a=[...u.foreground,1],{background:l.r.hex(`rgba(${t.join(",")})`),foreground:l.r.hex(`rgba(${a.join(",")})`),contrast:u.contrast}};(0,o.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const c=/^([a-f0-9]{3}|[a-f0-9]{6})$/,h=class{constructor(e){(0,a.r)(this,e),this.bgColorStr="#000",this.colorStr="#fff",this.handleColorChange=e=>{let r,t=e;"string"==typeof t?(c.test(t)&&((0,o.d)("[KolBadge] Bitte verwenden Sie zuk\xfcnftig nur noch das Standard-Farbformat f\xfcr CSS (https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)."),t=`#${t}`),r=u(t)):r=u({background:t.backgroundColor,foreground:t.color}),r.contrast<7&&(0,o.a)(`[KolBadge] The contrast of ${r.contrast} (\u22657, AAA) is too low, between the color pair ${r.background} and ${r.foreground}.`),this.bgColorStr=r.background,this.colorStr=r.foreground},this._color="#000",this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._smartButton=void 0,this.state={_color:"#000"}}render(){return(0,a.h)(a.H,null,(0,a.h)("span",{class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,a.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this._label}),"object"==typeof this.state._smartButton&&null!==this.state._smartButton&&(0,a.h)("kol-button-wc",{_ariaLabel:this.state._smartButton._ariaLabel,_customClass:this.state._smartButton._customClass,_disabled:this.state._smartButton._disabled,_icon:this.state._smartButton._icon,_iconOnly:!0,_id:this.state._smartButton._id,_label:this.state._smartButton._label,_on:this.state._smartButton._on,_tooltipAlign:this.state._smartButton._tooltipAlign,_variant:this.state._smartButton._variant})))}validateColor(e){(0,l.a)(this,"_color",(e=>"string"==typeof e||"object"==typeof e&&null!==e&&"string"==typeof e.backgroundColor&&"string"==typeof e.color),new Set(["string","KoliBriColor"]),e,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateSmartButton(e){(0,l.o)(e,(()=>{try{e=(0,l.p)(e)}catch(e){}(0,l.s)(this,"_smartButton",e)}))}componentWillLoad(){this.validateColor(this._color),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_smartButton:["validateSmartButton"]}}};h.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}:host>span{display:inline-flex}:host>span>kol-button-wc{border-left:1px solid rgba(0, 0, 0, 0.25)}:host>span>kol-button-wc button{color:inherit}"}}}]);