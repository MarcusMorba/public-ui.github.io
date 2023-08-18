/*! For license information please see 2407.cad68088.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2407],{53704:(t,e,n)=>{n.d(e,{v:()=>i});var o=n(95054);const i=(t,e)=>{(0,o.v)(t,"_align",e)}},95054:(t,e,n)=>{n.d(e,{v:()=>l});var o=n(56398);const i=new Set(['"left", "right"']),r=new Set(['"bottom", "top"']),s=new Set([...i,...r]),l=(t,e,n)=>{(0,o.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),s,n,{defaultValue:"top"})}},28047:(t,e,n)=>{n.d(e,{a:()=>T,b:()=>rt,c:()=>st,f:()=>k,o:()=>R,s:()=>A});const o=Math.min,i=Math.max,r=Math.round,s=Math.floor,l=t=>({x:t,y:t}),a={left:"right",right:"left",bottom:"top",top:"bottom"},c={start:"end",end:"start"};function u(t,e,n){return i(t,o(e,n))}function f(t,e){return"function"==typeof t?t(e):t}function h(t){return t.split("-")[0]}function d(t){return t.split("-")[1]}function p(t){return"x"===t?"y":"x"}function m(t){return"y"===t?"height":"width"}function g(t){return["top","bottom"].includes(h(t))?"y":"x"}function y(t){return p(g(t))}function v(t){return t.replace(/start|end/g,(t=>c[t]))}function b(t){return t.replace(/left|right|bottom|top/g,(t=>a[t]))}function w(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function x(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function E(t,e,n){let{reference:o,floating:i}=t;const r=g(e),s=y(e),l=m(s),a=h(e),c="y"===r,u=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,p=o[l]/2-i[l]/2;let v;switch(a){case"top":v={x:u,y:o.y-i.height};break;case"bottom":v={x:u,y:o.y+o.height};break;case"right":v={x:o.x+o.width,y:f};break;case"left":v={x:o.x-i.width,y:f};break;default:v={x:o.x,y:o.y}}switch(d(e)){case"start":v[s]-=p*(n&&c?-1:1);break;case"end":v[s]+=p*(n&&c?-1:1)}return v}async function L(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:d=!1,padding:p=0}=f(e,t),m=w(p),g=l[d?"floating"===h?"reference":"floating":h],y=x(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(g)))||n?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),v="floating"===h?{...s.floating,x:o,y:i}:s.reference,b=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),E=await(null==r.isElement?void 0:r.isElement(b))&&await(null==r.getScale?void 0:r.getScale(b))||{x:1,y:1},L=x(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:b,strategy:a}):v);return{top:(y.top-L.top+m.top)/E.y,bottom:(L.bottom-y.bottom+m.bottom)/E.y,left:(y.left-L.left+m.left)/E.x,right:(L.right-y.right+m.right)/E.x}}const T=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:l,elements:a}=e,{element:c,padding:h=0}=f(t,e)||{};if(null==c)return{};const p=w(h),g={x:n,y:i},v=y(r),b=m(v),x=await l.getDimensions(c),E="y"===v,L=E?"top":"left",T=E?"bottom":"right",k=E?"clientHeight":"clientWidth",R=s.reference[b]+s.reference[v]-g[v]-s.floating[b],A=g[v]-s.reference[v],O=await(null==l.getOffsetParent?void 0:l.getOffsetParent(c));let S=O?O[k]:0;S&&await(null==l.isElement?void 0:l.isElement(O))||(S=a.floating[k]||s.floating[b]);const P=R/2-A/2,C=S/2-x[b]/2-1,F=o(p[L],C),_=o(p[T],C),z=F,H=S-x[b]-_,D=S/2-x[b]/2+P,W=u(z,D,H),B=null!=d(r)&&D!=W&&s.reference[b]/2-(D<z?F:_)-x[b]/2<0?D<z?z-D:H-D:0;return{[v]:g[v]-B,data:{[v]:W,centerOffset:D-W+B}}}}),k=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:s,platform:l,elements:a}=e,{mainAxis:c=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:x=!0,...E}=f(t,e),T=h(o),k=h(s)===s,R=await(null==l.isRTL?void 0:l.isRTL(a.floating)),A=p||(k||!x?[b(s)]:function(t){const e=b(t);return[v(t),e,v(e)]}(s));p||"none"===w||A.push(...function(t,e,n,o){const i=d(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}(h(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(v)))),r}(s,x,w,R));const O=[s,...A],S=await L(e,E),P=[];let C=(null==(n=i.flip)?void 0:n.overflows)||[];if(c&&P.push(S[T]),u){const t=function(t,e,n){void 0===n&&(n=!1);const o=d(t),i=y(t),r=m(i);let s="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=b(s)),[s,b(s)]}(o,r,R);P.push(S[t[0]],S[t[1]])}if(C=[...C,{placement:o,overflows:P}],!P.every((t=>t<=0))){var F,_;const t=((null==(F=i.flip)?void 0:F.index)||0)+1,e=O[t];if(e)return{data:{index:t,overflows:C},reset:{placement:e}};let n=null==(_=C.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:_.placement;if(!n)switch(g){case"bestFit":{var z;const t=null==(z=C.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:z[0];t&&(n=t);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}};const R=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),s=h(n),l=d(n),a="y"===g(n),c=["left","top"].includes(s)?-1:1,u=r&&a?-1:1,p=f(e,t);let{mainAxis:m,crossAxis:y,alignmentAxis:v}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&"number"==typeof v&&(y="end"===l?-1*v:v),a?{x:y*u,y:m*c}:{x:m*c,y:y*u}}(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},A=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=f(t,e),c={x:n,y:o},d=await L(e,a),m=g(h(i)),y=p(m);let v=c[y],b=c[m];if(r){const t="y"===y?"bottom":"right";v=u(v+d["y"===y?"top":"left"],v,v-d[t])}if(s){const t="y"===m?"bottom":"right";b=u(b+d["y"===m?"top":"left"],b,b-d[t])}const w=l.fn({...e,[y]:v,[m]:b});return{...w,data:{x:w.x-n,y:w.y-o}}}}};function O(t){return C(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function P(t){var e;return null==(e=(C(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function C(t){return t instanceof Node||t instanceof S(t).Node}function F(t){return t instanceof Element||t instanceof S(t).Element}function _(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function z(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof S(t).ShadowRoot)}function H(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=I(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function D(t){return["table","td","th"].includes(O(t))}function W(t){const e=B(),n=I(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function B(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function V(t){return["html","body","#document"].includes(O(t))}function I(t){return S(t).getComputedStyle(t)}function M(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function $(t){if("html"===O(t))return t;const e=t.assignedSlot||t.parentNode||z(t)&&t.host||P(t);return z(e)?e.host:e}function N(t){const e=$(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:_(e)&&H(e)?e:N(e)}function j(t,e){var n;void 0===e&&(e=[]);const o=N(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=S(o);return i?e.concat(r,r.visualViewport||[],H(o)?o:[]):e.concat(o,j(o))}function q(t){const e=I(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=_(t),s=i?t.offsetWidth:n,l=i?t.offsetHeight:o,a=r(n)!==s||r(o)!==l;return a&&(n=s,o=l),{width:n,height:o,$:a}}function X(t){return F(t)?t:t.contextElement}function Y(t){const e=X(t);if(!_(e))return l(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=q(e);let a=(s?r(n.width):n.width)/o,c=(s?r(n.height):n.height)/i;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}const Z=l(0);function G(t){const e=S(t);return B()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Z}function J(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=X(t);let s=l(1);e&&(o?F(o)&&(s=Y(o)):s=Y(t));const a=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==S(t))&&e}(r,n,o)?G(r):l(0);let c=(i.left+a.x)/s.x,u=(i.top+a.y)/s.y,f=i.width/s.x,h=i.height/s.y;if(r){const t=S(r),e=o&&F(o)?S(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=Y(n),e=n.getBoundingClientRect(),o=I(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;c*=t.x,u*=t.y,f*=t.x,h*=t.y,c+=i,u+=r,n=S(n).frameElement}}return x({width:f,height:h,x:c,y:u})}function K(t){return J(P(t)).left+M(t).scrollLeft}function Q(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=S(t),o=P(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,a=0;if(i){r=i.width,s=i.height;const t=B();(!t||t&&"fixed"===e)&&(l=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:l,y:a}}(t,n);else if("document"===e)o=function(t){const e=P(t),n=M(t),o=t.ownerDocument.body,r=i(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=i(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+K(t);const a=-n.scrollTop;return"rtl"===I(o).direction&&(l+=i(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:l,y:a}}(P(t));else if(F(e))o=function(t,e){const n=J(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=_(t)?Y(t):l(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=G(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return x(o)}function U(t,e){const n=$(t);return!(n===e||!F(n)||V(n))&&("fixed"===I(n).position||U(n,e))}function tt(t,e){const n=e.get(t);if(n)return n;let o=j(t).filter((t=>F(t)&&"body"!==O(t))),i=null;const r="fixed"===I(t).position;let s=r?$(t):t;for(;F(s)&&!V(s);){const e=I(s),n=W(s);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||H(s)&&!n&&U(t,s))?o=o.filter((t=>t!==s)):i=e,s=$(s)}return e.set(t,o),o}function et(t,e,n){const o=_(e),i=P(e),r="fixed"===n,s=J(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const c=l(0);if(o||!o&&!r)if(("body"!==O(e)||H(i))&&(a=M(e)),o){const t=J(e,!0,r,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=K(i));return{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}function nt(t,e){return _(t)&&"fixed"!==I(t).position?e?e(t):t.offsetParent:null}function ot(t,e){const n=S(t);if(!_(t))return n;let o=nt(t,e);for(;o&&D(o)&&"static"===I(o).position;)o=nt(o,e);return o&&("html"===O(o)||"body"===O(o)&&"static"===I(o).position&&!W(o))?n:o||function(t){let e=$(t);for(;_(e)&&!V(e);){if(W(e))return e;e=$(e)}return null}(t)||n}const it={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=_(n),r=P(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},a=l(1);const c=l(0);if((i||!i&&"fixed"!==o)&&(("body"!==O(n)||H(r))&&(s=M(n)),_(n))){const t=J(n);a=Y(n),c.x=t.x+n.clientLeft,c.y=t.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-s.scrollLeft*a.x+c.x,y:e.y*a.y-s.scrollTop*a.y+c.y}},getDocumentElement:P,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:s}=t;const l=[..."clippingAncestors"===n?tt(e,this._c):[].concat(n),r],a=l[0],c=l.reduce(((t,n)=>{const r=Q(e,n,s);return t.top=i(r.top,t.top),t.right=o(r.right,t.right),t.bottom=o(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),Q(e,a,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:ot,getElementRects:async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||ot,r=this.getDimensions;return{reference:et(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return q(t)},getScale:Y,isElement:F,isRTL:function(t){return"rtl"===I(t).direction}};function rt(t,e,n,r){void 0===r&&(r={});const{ancestorScroll:l=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:f=!1}=r,h=X(t),d=l||a?[...h?j(h):[],...j(e)]:[];d.forEach((t=>{l&&t.addEventListener("scroll",n,{passive:!0}),a&&t.addEventListener("resize",n)}));const p=h&&u?function(t,e){let n,r=null;const l=P(t);function a(){clearTimeout(n),r&&r.disconnect(),r=null}return function c(u,f){void 0===u&&(u=!1),void 0===f&&(f=1),a();const{left:h,top:d,width:p,height:m}=t.getBoundingClientRect();if(u||e(),!p||!m)return;const g={rootMargin:-s(d)+"px "+-s(l.clientWidth-(h+p))+"px "+-s(l.clientHeight-(d+m))+"px "+-s(h)+"px",threshold:i(0,o(1,f))||1};let y=!0;function v(t){const e=t[0].intersectionRatio;if(e!==f){if(!y)return c();e?c(!1,e):n=setTimeout((()=>{c(!1,1e-7)}),100)}y=!1}try{r=new IntersectionObserver(v,{...g,root:l.ownerDocument})}catch(t){r=new IntersectionObserver(v,g)}r.observe(t)}(!0),a}(h,n):null;let m,g=-1,y=null;c&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===h&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{y&&y.observe(e)}))),n()})),h&&!f&&y.observe(h),y.observe(e));let v=f?J(t):null;return f&&function e(){const o=J(t);!v||o.x===v.x&&o.y===v.y&&o.width===v.width&&o.height===v.height||n(),v=o,m=requestAnimationFrame(e)}(),n(),()=>{d.forEach((t=>{l&&t.removeEventListener("scroll",n),a&&t.removeEventListener("resize",n)})),p&&p(),y&&y.disconnect(),y=null,f&&cancelAnimationFrame(m)}}const st=(t,e,n)=>{const o=new Map,i={platform:it,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),a=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:f}=E(c,o,a),h=o,d={},p=0;for(let m=0;m<l.length;m++){const{name:n,fn:r}=l[m],{x:g,y:y,data:v,reset:b}=await r({x:u,y:f,initialPlacement:o,placement:h,strategy:i,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});u=null!=g?g:u,f=null!=y?y:f,d={...d,[n]:{...d[n],...v}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(h=b.placement),b.rects&&(c=!0===b.rects?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),({x:u,y:f}=E(c,h,a))),m=-1)}return{x:u,y:f,placement:h,strategy:i,middlewareData:d}})(t,e,{...i,platform:r})}},42407:(t,e,n)=>{n.r(e),n.d(e,{kol_tooltip:()=>f});var o=n(72209),i=n(28047),r=n(53704),s=n(56398),l=n(49399),a=n(89519),c=n(56186);const u=new Set;const f=class{constructor(t){(0,o.r)(this,t),this.alignTooltip=()=>{var t;if("test"!==c.p&&this.previousSibling&&this.tooltipElement){const e=this.previousSibling,n=this.tooltipElement,o=this.arrowElement,r=[(0,i.o)(null!==(t=null==o?void 0:o.offsetHeight)&&void 0!==t?t:10),(0,i.f)(),(0,i.s)()];o&&r.push((0,i.a)({element:o})),(0,i.c)(e,n,{placement:this.state._align,middleware:r}).then((({x:t,y:e,middlewareData:i,placement:r})=>{var s,l;Object.assign(n.style,{left:`${t}px`,top:`${e}px`,visibility:"visible"}),o&&((null===(s=i.arrow)||void 0===s?void 0:s.x)?Object.assign(o.style,{left:`${i.arrow.x}px`,top:"bottom"===r?-o.offsetHeight/2+"px":"",bottom:"top"===r?-o.offsetHeight/2+"px":""}):(null===(l=i.arrow)||void 0===l?void 0:l.y)&&Object.assign(o.style,{left:"right"===r?-o.offsetWidth/2+"px":"",right:"left"===r?-o.offsetWidth/2+"px":"",top:`${i.arrow.y}px`}))}))}},this.showTooltip=()=>{if(this.previousSibling&&this.tooltipElement){(function(t){u.forEach((t=>{t.style.setProperty("z-index","999")})),u.add(t),t.style.setProperty("z-index","1000")})(this.tooltipElement),this.tooltipElement.style.setProperty("display","block"),(0,a.g)().body.addEventListener("keyup",this.hideTooltipByEscape);const t=this.previousSibling,e=this.tooltipElement;this.cleanupAutoPositioning=(0,i.b)(t,e,this.alignTooltip)}},this.hideTooltip=()=>{this.tooltipElement&&(function(t){if(u.delete(t),u.size>0){const t=Array.from(u).pop();t&&t.style.setProperty("z-index","1000")}}(this.tooltipElement),this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),this.cleanupAutoPositioning&&(this.cleanupAutoPositioning(),this.cleanupAutoPositioning=void 0))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&((0,a.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,a.n)(),_label:"\u2026"}}render(){return(0,o.h)(o.H,{ref:this.catchHostElement},""!==this.state._label&&(0,o.h)("div",{class:"tooltip-floating",ref:this.catchTooltipElement},(0,o.h)("div",{class:"tooltip-area tooltip-arrow",ref:this.catchArrowElement}),(0,o.h)("kol-span-wc",{class:"tooltip-area tooltip-content",id:this.state._id,_label:this.state._label})))}validateAlign(t){(0,r.v)(this,t)}validateId(t){((t,e)=>{(0,s.d)(t,"_id",e)})(this,t)}validateLabel(t){(0,l.v)(this,t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement),this.cleanupAutoPositioning&&this.cleanupAutoPositioning()}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};f.style=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-tooltip .tooltip-floating{animation-duration:0.5s;animation-iteration-count:1;animation-name:fadeInOpacity;animation-timing-function:ease-in;box-sizing:border-box;display:none;position:absolute;visibility:hidden;top:0;left:0;max-width:90vw;max-height:90vh}kol-tooltip .tooltip-area{background-color:#fff;color:#000}kol-tooltip .tooltip-arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip .tooltip-content{position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"},49399:(t,e,n)=>{n.d(e,{a:()=>d,c:()=>a,h:()=>l,v:()=>f});var o=n(55726),i=n(56398);const r=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(r))||void 0===e?void 0:e.length)||0}(t)>=e}function a(t){return s.test(t)}function c(t){var e;return{hooks:{afterPatch:(e,n,i,r)=>{var s,c;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=t.hooks)||void 0===c||c.afterPatch(e,n,i,r)),"string"==typeof e&&!1===l(e,3)&&!1===a(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const u=new Set(["string"]),f=(t,e,n={})=>{(0,i.w)(t,"_label",(t=>"string"==typeof t),u,e,c(n))},h=new Set(["string","false"]),d=(t,e,n={})=>{""!==e&&"false"!==e||(e=!1),(0,i.w)(t,"_label",(t=>!1===t||"string"==typeof t),h,e,c(n))}}}]);