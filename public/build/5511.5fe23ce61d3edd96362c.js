"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5511],{95511:(ce,W,h)=>{h.d(W,{F:()=>tt});var r=h(74848),v=h(32196),A=h(46942),D=h.n(A),g=h(96540),de=h(71473),H=h(40845),ue=h(62930),V=h(14578);function K({id:t="triangle",fill:n=X,headHeight:e=10}){return(0,r.jsx)("defs",{children:(0,r.jsx)("marker",{id:t,viewBox:"0 0 10 10",refX:"1",refY:"5",markerUnits:"userSpaceOnUse",markerWidth:e,markerHeight:e,orient:"auto",children:(0,r.jsx)("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:n})})})}var w=h(67004),$=h(48543);const ge="#a00",X="#999",fe=(0,g.memo)(function(n){const{edge:e,onClick:s,onMouseEnter:o,onMouseLeave:i,hovering:c,svgIdNamespace:l}=n,{source:d,target:f,sourceNodeRadius:a,targetNodeRadius:u}=e,m=10+e.thickness*2,x=(0,$.a0)({x1:d.x,y1:d.y,x2:f.x,y2:f.y},a+(0,w.Hj)(a)/2||w.h,u+(0,w.Hj)(u)/2||w.h,m),M=e.color||X,y=e.color||ge,p=`triangle-${l}-${e.id}`,L=`triangle-colored-${l}-${e.id}`;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(K,{id:p,fill:M,headHeight:m}),(0,r.jsx)(K,{id:L,fill:y,headHeight:m}),(0,r.jsxs)("g",{onClick:N=>s(N,e),style:{cursor:"pointer"},"aria-label":`Edge from: ${d.id} to: ${f.id}`,children:[(0,r.jsx)("line",{strokeWidth:(c?1:0)+(e.highlighted?1:0)+e.thickness,stroke:e.highlighted?y:M,x1:x.x1,y1:x.y1,x2:x.x2,y2:x.y2,strokeDasharray:e.strokeDasharray,markerEnd:`url(#${e.highlighted?L:p})`}),(0,r.jsx)("line",{stroke:"transparent",x1:x.x1,y1:x.y1,x2:x.x2,y2:x.y2,strokeWidth:20,onMouseEnter:()=>{o(e.id)},onMouseLeave:()=>{i(e.id)}})]})]})}),me=t=>({mainGroup:(0,v.css)`
      pointer-events: none;
      font-size: 8px;
    `,background:(0,v.css)`
      fill: ${t.components.tooltip.background};
    `,text:(0,v.css)`
      fill: ${t.components.tooltip.text};
    `}),he=(0,g.memo)(function(n){const{edge:e}=n,{source:s,target:o,sourceNodeRadius:i,targetNodeRadius:c}=e,l=(0,$.a0)({x1:s.x,y1:s.y,x2:o.x,y2:o.y},i||w.h,c||w.h),d={x:l.x1+(l.x2-l.x1)/2,y:l.y1+(l.y2-l.y1)/2},f=(0,H.of)(me),a=[e.mainStat,e.secondaryStat].filter(y=>y),u=a.length>1?"30":"15",m=a.length>1?15:7.5;let x=a.length>1?-5:2.5;const M=[];return a.forEach((y,p)=>{M.push((0,r.jsx)("text",{className:f.text,x:d.x,y:d.y+x,textAnchor:"middle",children:y},p)),x+=15}),(0,r.jsxs)("g",{className:f.mainGroup,children:[(0,r.jsx)("rect",{className:f.background,x:d.x-40,y:d.y-m,width:"80",height:u,rx:"5"}),M]})});var J=h(24293),xe=h(52622),ye=h(96516),ve=h(34375);function pe(){return{item:(0,v.css)`
      label: LegendItem;
      flex-grow: 0;
    `,legend:(0,v.css)`
      label: Legend;
      pointer-events: all;
    `}}const Me=function(n){const{nodes:e,onSort:s,sort:o,sortable:i}=n,c=(0,H.$j)(),l=(0,H.of)(pe),d=je(e,c),f=(0,g.useCallback)(a=>{s({field:a.data.field,ascending:a.data.field===o?.field?!o?.ascending:!1})},[o,s]);return(0,r.jsx)(ye.t,{className:l.legend,displayMode:xe.lm.List,placement:"bottom",items:d,itemRenderer:a=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ve.M,{item:a,className:l.item,onLabelClick:i?f:void 0}),i&&(o?.field===a.data.field?(0,r.jsx)(V.I,{name:o.ascending?"arrow-up":"arrow-down"}):"")]})})};function je(t,n){if(!t.length)return[];const e=[t[0].mainStat,t[0].secondaryStat].filter(o=>!!o),s=t.find(o=>o.arcSections.length>0);return s&&s.arcSections[0].config?.color?.mode===J.Y.Fixed&&e.push(...new Set(t.map(o=>o.arcSections).flat())),t[0].color&&e.push(t[0].color),e.map(o=>{const i={label:o.config.displayName||o.name,yAxis:0,data:{field:o}};return o.config.color?.mode===J.Y.Fixed&&o.config.color?.fixedColor?i.color=n.visualization.getColorByName(o.config.color?.fixedColor||""):o.config.color?.mode&&(i.gradient=o.config.color?.mode),i.color||i.gradient||(i.color=n.visualization.getColorByName("")),i})}const Ce=40,Le=t=>({mainGroup:(0,v.css)`
    cursor: pointer;
    font-size: 10px;
  `,mainCircle:(0,v.css)`
    fill: ${t.components.panel.background};
    stroke: ${t.colors.border.strong};
  `,text:(0,v.css)`
    width: 50px;
    height: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `}),be=(0,g.memo)(function(n){const{marker:e,onClick:s}=n,{node:o}=e,i=(0,H.of)(Le);return o.x!==void 0&&o.y!==void 0?(0,r.jsxs)("g",{"data-node-id":o.id,className:i.mainGroup,onClick:c=>{s?.(c,e)},"aria-label":`Hidden nodes marker: ${o.id}`,children:[(0,r.jsx)("circle",{className:i.mainCircle,r:Ce,cx:o.x,cy:o.y}),(0,r.jsx)("g",{children:(0,r.jsx)("foreignObject",{x:o.x-25,y:o.y-25,width:"50",height:"50",children:(0,r.jsx)("div",{className:i.text,children:(0,r.jsxs)("span",{children:[e.count>100?">100":e.count," nodes"]})})})})]}):null});var Y=h(66864),F=h(55852);function Se(){return{wrapper:(0,v.css)`
      label: wrapper;
      pointer-events: all;
    `}}function Ie(t){const{config:n,onConfigChange:e,onPlus:s,onMinus:o,disableZoomOut:i,disableZoomIn:c}=t,[l,d]=(0,g.useState)(!1),f=!1,a=(0,H.of)(Se);return(0,r.jsxs)("div",{className:a.wrapper,children:[(0,r.jsxs)(Y.gW,{spacing:"sm",children:[(0,r.jsxs)(Y.Gy,{spacing:"xs",children:[(0,r.jsx)(F.$n,{icon:"plus-circle",onClick:s,size:"md",title:"Zoom in",variant:"secondary",disabled:c}),(0,r.jsx)(F.$n,{icon:"minus-circle",onClick:o,size:"md",title:"Zoom out",variant:"secondary",disabled:i})]}),(0,r.jsxs)(Y.Gy,{spacing:"xs",children:[(0,r.jsx)(F.$n,{icon:"code-branch",onClick:()=>e({...n,gridLayout:!1}),size:"md",title:"Default layout",variant:"secondary",disabled:!n.gridLayout}),(0,r.jsx)(F.$n,{icon:"apps",onClick:()=>e({...n,gridLayout:!0}),size:"md",title:"Grid layout",variant:"secondary",disabled:n.gridLayout})]})]}),f&&(0,r.jsx)(F.$n,{size:"xs",fill:"text",onClick:()=>d(u=>!u),children:l?"Hide config":"Show config"}),f&&l&&Object.keys(n).filter(u=>u!=="show").map(u=>(0,r.jsxs)("div",{children:[u,(0,r.jsx)("input",{style:{width:50},type:"number",value:n[u],onChange:m=>{e({...n,[u]:parseFloat(m.target.value)})}})]},u))]})}var O=h(2543),Ee=h(64305),Z=h(13876),Ne=h(32264),Q=h(67278);const ke=()=>new Q.c(new URL(h.p+h.u(8896),h.b)),$e=()=>new Q.c(new URL(h.p+h.u(1183),h.b));function He(t,n,e,s,o){const[i,c]=(0,g.useMemo)(()=>{if(!(t.length&&n.length))return[{},{}];const l=n.reduce((f,a)=>(f[a.source.id]=[...f[a.source.id]??[],a],f[a.target.id]=[...f[a.target.id]??[],a],f),{}),d=t.reduce((f,a)=>(f[a.id]=a,f),{});return[l,d]},[n,t]);return(0,g.useMemo)(()=>t.length<=e?{nodes:t,edges:n}:s.gridLayout?Re(t,e,o):we(t,n,c,i,e,o),[n,i,e,t,c,o,s.gridLayout])}function we(t,n,e,s,o,i){let c;i?c=[e[i]]:(c=t.filter(m=>m.incoming===0),c.length||(c=[t[0]]));const{visibleNodes:l,markers:d}=Pe(o,c,e,s),f=ze(d,l,e,s),a=(0,O.fromPairs)(f.map(m=>[m.node.id,m]));for(const m of f)m.count===1&&(delete a[m.node.id],l[m.node.id]=m.node);const u=n.filter(m=>(l[m.source.id]||a[m.source.id])&&(l[m.target.id]||a[m.target.id]));return{nodes:Object.values(l),edges:u,markers:Object.values(a)}}function Re(t,n,e){let s=0,o=n,i=[];if(e){const c=t.findIndex(f=>f.id===e),l=Math.floor(n/2);let d=l;s=c-l,s<0&&(d+=Math.abs(s),s=0),o=c+d+1,o>t.length&&(s>0&&(s=Math.max(0,s-(o-t.length))),o=t.length),s>1&&i.push({node:t[s-1],count:s}),t.length-o>1&&i.push({node:t[o],count:t.length-o})}else t.length-n>1&&(i=[{node:t[n],count:t.length-n}]);return{nodes:t.slice(s,o),edges:[],markers:i}}function Pe(t,n,e,s){const o={};let i=[...n];for(;Object.keys(o).length<t&&i.length>0;){let l=i.shift();if(o[l.id])continue;o[l.id]=l;const f=(s[l.id]||[]).map(a=>{const u=a.source.id===l.id?a.target.id:a.source.id;return e[u]});i=i.concat(f)}const c=(0,O.uniq)(i.filter(l=>!o[l.id]));return{visibleNodes:o,markers:c}}function ze(t,n,e,s){return t.map(o=>{const i={};let c=0,l=[o];for(;l.length>0&&c<=101;){let d=l.shift();if(n[d.id]||i[d.id])continue;i[d.id]||c++,i[d.id]=d;const a=(s[d.id]||[]).map(u=>{const m=u.source.id===d.id?u.target.id:u.source.id;return e[m]});l=l.concat(a)}return{node:o,count:c}})}const B={linkDistance:150,linkStrength:.5,forceX:2e3,forceXStrength:.02,forceCollide:100,tick:300,gridLayout:!1};function Fe(t,n,e=B,s,o,i,c){const[l,d]=(0,g.useState)([]),[f,a]=(0,g.useState)([]),[u,m]=(0,g.useState)(!1),x=(0,Z.default)(),M=(0,g.useRef)();(0,Ee.A)(()=>{M.current&&M.current()}),(0,g.useEffect)(()=>{if(t.length===0){d([]),a([]),m(!1);return}if(c){d(t);const j=(0,O.fromPairs)(t.map(C=>[C.id,C]));a(n.map(C=>({...C,source:j[C.source],target:j[C.target]}))),m(!1);return}const b=Ne.$.featureToggles.nodeGraphDotLayout&&t.length<=500?"layered":"default";m(!0);const S=Ge(t,n,b,({nodes:j,edges:C})=>{x()&&(d(j),a(C),m(!1))});return M.current=S,S},[c,t,n,x]);const[y,p]=(0,g.useMemo)(()=>{if(t.length===0)return[[],[]];const b=t.map(j=>({...j})),S=n.map(j=>({...j}));return De(b,o,e.sort),[b,S]},[e.sort,t,n,o]),{nodes:L,edges:N,markers:E}=He(e.gridLayout?y:l,e.gridLayout?p:f,s,e,i),G=(0,g.useMemo)(()=>(0,$._d)([...L,...(E||[]).map(b=>b.node)]),[L,E]);return{nodes:L,edges:N,markers:E,bounds:G,hiddenNodesCount:t.length-L.length,loading:u}}function Ge(t,n,e,s){const o=e==="default"?ke():$e();return o.onmessage=i=>{const c=(0,O.fromPairs)(t.map(l=>[l.id,l]));i.data.nodes=i.data.nodes.map(l=>({...c[l.id],...l})),s(i.data)},o.postMessage({nodes:t.map(i=>({id:i.id,incoming:i.incoming})),edges:n,config:B}),()=>{o.terminate()}}function De(t,n,e){const c=Math.min(Math.floor((n-120)/140),t.length),l=Math.floor((c-1)*120/2);e&&t.sort((d,f)=>{const a=e.field.values[d.dataFrameRowIndex],u=e.field.values[f.dataFrameRowIndex];return e.ascending?a-u:u-a});for(const[d,f]of t.entries()){const a=Math.floor(d/c),u=d%c;f.x=u*120-l,f.y=-60+a*140}}var Oe=h(94382),Te=h(28122),We=h(59093),Ae=h(64539);function Ye(t,n,e,s,o,i){const[c,l]=(0,g.useState)(void 0),d=(0,g.useCallback)((a,u)=>{const[m,x]=s.gridLayout?["Show in Graph layout",!1]:["Show in Grid layout",!0],M=[{label:m,onClick:L=>{i(L.id),o({...s,gridLayout:x}),l(void 0)}}],y=n?t(n,u.dataFrameRowIndex):[],p=_(y,u,M);l(q((0,r.jsx)(Be,{node:u,nodes:n}),a,l,p))},[s,n,t,l,o,i]);return{onEdgeOpen:(0,g.useCallback)((a,u)=>{if(!e)return;const m=t(e,u.dataFrameRowIndex),x=_(m,u);l(q((0,r.jsx)(Ue,{edge:u,edges:e}),a,l,x))},[e,t,l]),onNodeOpen:d,MenuComponent:c}}function q(t,n,e,s){return(0,r.jsx)(Te.t,{renderHeader:()=>t,renderMenuItems:s,onClose:()=>e(void 0),x:n.pageX,y:n.pageY})}function _(t,n,e){if(!(t.length||e?.length))return;const s=Ze(t);return()=>{let o=s?.map((i,c)=>(0,r.jsx)(We.r,{label:i.label,children:(i.items||[]).map(ee(n))},`${i.label}${c}`));return e&&(o=[...e.map(ee(n)),...o]),o}}function ee(t){return function(e){return(0,r.jsx)(Ae.D,{url:e.url,label:e.label,ariaLabel:e.ariaLabel,onClick:e.onClick?s=>{s?.ctrlKey||s?.metaKey||s?.shiftKey||(s?.preventDefault(),s?.stopPropagation(),e.onClick?.(t))}:void 0,target:"_self"},e.label)}}function Ze(t){const n="Open in Explore",e=t.reduce((s,o)=>{let i,c;return o.title.indexOf("/")!==-1?(i=o.title.split("/")[0],c=o.title.split("/")[1],s[i]=s[i]||[],s[i].push({l:o,newTitle:c})):(s[n]=s[n]||[],s[n].push({l:o})),s},{});return Object.keys(e).map(s=>({label:s,ariaLabel:s,items:e[s].map(o=>({label:o.newTitle||o.l.title,ariaLabel:o.newTitle||o.l.title,url:o.l.href,onClick:o.l.onClick}))}))}function te({field:t,index:n}){return(0,r.jsx)(T,{label:t.config?.displayName||t.name,value:(0,$.Xq)(t.config,t.values[n]||"")})}function T({label:t,value:n}){const e=(0,H.of)(Ve);return(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{className:e.label,children:[t,": "]}),(0,r.jsx)("td",{className:e.value,children:n})]})}function Be({node:t,nodes:n}){const e=[];if(n){const s=(0,$.AG)(n);for(const o of[s.title,s.subTitle,s.mainStat,s.secondaryStat,...s.details])o&&o.values[t.dataFrameRowIndex]&&e.push((0,r.jsx)(te,{field:o,index:t.dataFrameRowIndex},o.name))}else t.title&&e.push((0,r.jsx)(T,{label:"Title",value:t.title},"title")),t.subTitle&&e.push((0,r.jsx)(T,{label:"Subtitle",value:t.subTitle},"subtitle"));return(0,r.jsx)("table",{style:{width:"100%"},children:(0,r.jsx)("tbody",{children:e})})}function Ue(t){const n=t.edge.dataFrameRowIndex,e=(0,$.tF)(t.edges),s=e.source?.values[n]||"",o=e.target?.values[n]||"",i=[];s&&o&&i.push((0,r.jsx)(T,{label:"Source \u2192 Target",value:`${s} \u2192 ${o}`},"header-row"));for(const c of[e.mainStat,e.secondaryStat,...e.details])c&&c.values[n]&&i.push((0,r.jsx)(te,{field:c,index:n},`field-row-${n}`));return(0,r.jsx)("table",{style:{width:"100%"},children:(0,r.jsx)("tbody",{children:i})})}const Ve=t=>({label:(0,v.css)`
      label: Label;
      line-height: 1.25;
      color: ${t.colors.text.disabled};
      font-size: ${t.typography.size.sm};
      font-weight: ${t.typography.fontWeightMedium};
      padding-right: ${t.spacing(1)};
    `,value:(0,v.css)`
      label: Value;
      font-size: ${t.typography.size.sm};
      font-weight: ${t.typography.fontWeightMedium};
      color: ${t.colors.text.primary};
    `});var ne=h(80292);function Ke(t,n,e){const s=(0,ne.A)(t.gridLayout);let o;if(s===!0&&!t.gridLayout&&e){const i=n.find(c=>c.id===e);i&&(o={x:-i.x,y:-i.y})}return o}function Xe(t){const[n,e]=(0,g.useState)(),s=(0,Z.default)();return(0,g.useEffect)(()=>{t&&(e(t),setTimeout(()=>{s()&&e(void 0)},500))},[t,s]),n}function Je({scale:t=1,bounds:n,focus:e}={}){const s=(0,Z.default)(),o=(0,g.useRef)(!1),i=(0,g.useRef)(0),c=(0,g.useRef)(null),l={x:0,y:0},d=(0,g.useMemo)(()=>({right:n?-n.left:1/0,left:n?-n.right:-1/0,bottom:n?-n.top:-1/0,top:n?-n.bottom:1/0}),[n]),f=(0,g.useRef)(l),a=(0,g.useRef)(l),u=(0,g.useRef)(l),[m,x]=(0,g.useState)({isPanning:!1,position:l});(0,g.useEffect)(()=>{const p=j=>{!o.current&&s()&&(o.current=!0,f.current=oe(j),a.current={...u.current},x(C=>({...C,isPanning:!0})),E())},L=()=>{o.current&&s()&&(o.current=!1,x(j=>({...j,isPanning:!1})),G())},N=j=>{p(j),b(j)},E=()=>{document.addEventListener("mousemove",b),document.addEventListener("mouseup",L),document.addEventListener("touchmove",b),document.addEventListener("touchend",L)},G=()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",L)},b=j=>{cancelAnimationFrame(i.current);const C=oe(j);i.current=requestAnimationFrame(()=>{if(s()&&c.current){let P=C.x-f.current.x,U=C.y-f.current.y;u.current={x:R(a.current.x+P/t,d.left,d.right),y:R(a.current.y+U/t,d.top,d.bottom)},x(z=>({...z,position:{...u.current}}))}})},S=c.current;return S&&(S.addEventListener("mousedown",N),S.addEventListener("touchstart",N)),()=>{S&&(S.removeEventListener("mousedown",N),S.removeEventListener("touchstart",N))}},[t,d,s]);const M=(0,ne.A)(e);(0,g.useEffect)(()=>{if(e&&M?.x!==e.x&&M?.y!==e.y){const p={x:R(e.x,d.left,d.right),y:R(e.y,d.top,d.bottom)};x({position:p,isPanning:!1}),u.current=p,a.current=p}},[e,M,d,u,a]);let y=m.position;return e&&M?.x!==e.x&&M?.y!==e.y&&(y=e),{state:{...m,position:{x:R(y.x,d.left,d.right),y:R(y.y,d.top,d.bottom)}},ref:c}}function R(t,n,e){return Math.min(Math.max(t,n??-1/0),e??1/0)}function oe(t){return"changedTouches"in t&&t instanceof TouchEvent?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:{x:0,y:0}}const Qe={stepDown:t=>t/1.5,stepUp:t=>t*1.5,min:.13,max:2.25};function qe({stepUp:t,stepDown:n,min:e,max:s}=Qe){const o=(0,g.useRef)(null),[i,c]=(0,g.useState)(1),l=(0,g.useCallback)(()=>{i<(s??1/0)&&c(t(i))},[i,t,s]),d=(0,g.useCallback)(()=>{i>(e??-1/0)&&c(n(i))},[i,n,e]),f=(0,g.useCallback)(function(a){if(a.ctrlKey||a.metaKey){if(a.preventDefault(),c(Math.min(Math.max(e??-1/0,i+Math.min(a.deltaY,2)*-.01),s??1/0)),a.deltaY<0){const u=i+Math.max(a.deltaY,-4)*-.015;c(Math.max(e??-1/0,u))}else if(a.deltaY>0){const u=i+Math.min(a.deltaY,4)*-.015;c(Math.min(s??1/0,u))}}},[e,s,i]);return(0,g.useEffect)(()=>{if(!o.current)return;const a=o.current;return a.addEventListener("wheel",f,{passive:!1}),()=>{a&&a.removeEventListener("wheel",f)}},[f]),{onStepUp:l,onStepDown:d,scale:Math.max(Math.min(i,s??1/0),e??-1/0),isMax:i>=(s??1/0),isMin:i<=(e??-1/0),ref:o}}const _e=t=>({wrapper:(0,v.css)`
    label: wrapper;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
  `,svg:(0,v.css)`
    label: svg;
    height: 100%;
    width: 100%;
    overflow: visible;
    font-size: 10px;
    cursor: move;
  `,svgPanning:(0,v.css)`
    label: svgPanning;
    user-select: none;
  `,noDataMsg:(0,v.css)`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: ${t.typography.h4.fontSize};
    color: ${t.colors.text.secondary};
  `,mainGroup:(0,v.css)`
    label: mainGroup;
    will-change: transform;
  `,viewControls:(0,v.css)`
    label: viewControls;
    position: absolute;
    left: 2px;
    bottom: 3px;
    right: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    pointer-events: none;
  `,legend:(0,v.css)`
    label: legend;
    background: ${t.colors.background.secondary};
    box-shadow: ${t.shadows.z1};
    padding-bottom: 5px;
    margin-right: 10px;
  `,viewControlsWrapper:(0,v.css)`
    margin-left: auto;
  `,alert:(0,v.css)`
    label: alert;
    padding: 5px 8px;
    font-size: 10px;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    border-radius: ${t.shape.radius.default};
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    background: ${t.colors.warning.main};
    color: ${t.colors.warning.contrastText};
  `,loadingWrapper:(0,v.css)`
    label: loadingWrapper;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}),et=200;function tt({getLinks:t,dataFrames:n,nodeLimit:e,panelId:s}){const o=e||et,{edges:i,nodes:c}=(0,Oe.d)(n),[l,{width:d,height:f}]=(0,de.A)(),[a,u]=(0,g.useState)(B),m=c[0],x=i[0],M=s||"nodegraphpanel",y=(0,g.useMemo)(()=>(0,$.BJ)(m,x),[x,m]),{nodeHover:p,setNodeHover:L,clearNodeHover:N,edgeHover:E,setEdgeHover:G,clearEdgeHover:b}=at(),[S,j]=(0,g.useState)([]);(0,g.useEffect)(()=>{let I=[];p?I=(0,$.Tl)(y.nodes,y.edges,p):E&&(I=(0,$.K0)(y.nodes,y.edges,E)),j(I)},[p,E,y]);const[C,P]=(0,g.useState)(),U=(0,g.useCallback)((I,Lt)=>P(Lt.node.id),[P]),{nodes:z,edges:se,markers:lt,bounds:ct,hiddenNodesCount:ie,loading:dt}=Fe(y.nodes,y.edges,a,o,d,C,y.hasFixedPositions),ut=Ke(a,z,C),{panRef:gt,zoomRef:re,onStepUp:ft,onStepDown:mt,isPanning:ht,position:ae,scale:le,isMaxZoom:xt,isMinZoom:yt}=rt(ct,ut),{onEdgeOpen:vt,onNodeOpen:pt,MenuComponent:Mt}=Ye(t,m,x,a,u,P),k=(0,H.of)(_e),jt=(0,g.useCallback)(I=>{l(I),re.current=I},[l,re]),Ct=Xe(C);return(0,r.jsxs)("div",{ref:jt,className:k.wrapper,children:[dt?(0,r.jsxs)("div",{className:k.loadingWrapper,children:["Computing layout\xA0",(0,r.jsx)(ue.y,{})]}):null,n.length&&y.nodes.length?(0,r.jsx)("svg",{ref:gt,viewBox:`${-(d/2)} ${-(f/2)} ${d} ${f}`,className:D()(k.svg,ht&&k.svgPanning),children:(0,r.jsxs)("g",{className:k.mainGroup,style:{transform:`scale(${le}) translate(${Math.floor(ae.x)}px, ${Math.floor(ae.y)}px)`},children:[!a.gridLayout&&(0,r.jsx)(st,{edges:se,nodeHoveringId:p,edgeHoveringId:E,onClick:vt,onMouseEnter:G,onMouseLeave:b,svgIdNamespace:M}),(0,r.jsx)(nt,{nodes:z,onMouseEnter:L,onMouseLeave:N,onClick:pt,hoveringIds:S||[Ct]}),(0,r.jsx)(ot,{markers:lt||[],onClick:U}),!a.gridLayout&&(0,r.jsx)(it,{edges:se,nodeHoveringId:p,edgeHoveringId:E})]})}):(0,r.jsx)("div",{className:k.noDataMsg,children:"No data"}),(0,r.jsxs)("div",{className:k.viewControls,children:[z.length?(0,r.jsx)("div",{className:k.legend,children:(0,r.jsx)(Me,{sortable:a.gridLayout,nodes:z,sort:a.sort,onSort:I=>{u({...a,sort:I})}})}):null,(0,r.jsx)("div",{className:k.viewControlsWrapper,children:(0,r.jsx)(Ie,{config:a,onConfigChange:I=>{I.gridLayout!==a.gridLayout&&P(void 0),u(I)},onMinus:mt,onPlus:ft,scale:le,disableZoomIn:xt,disableZoomOut:yt})})]}),ie>0&&(0,r.jsxs)("div",{className:k.alert,"aria-label":"Nodes hidden warning",children:[(0,r.jsx)(V.I,{size:"sm",name:"info-circle"})," ",ie," nodes are hidden for performance reasons."]}),Mt]})}const nt=(0,g.memo)(function(n){return(0,r.jsx)(r.Fragment,{children:n.nodes.map(e=>(0,r.jsx)(w.bP,{node:e,onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave,onClick:n.onClick,hovering:!n.hoveringIds||n.hoveringIds.length===0?"default":n.hoveringIds?.includes(e.id)?"active":"inactive"},e.id))})}),ot=(0,g.memo)(function(n){return(0,r.jsx)(r.Fragment,{children:n.markers.map(e=>(0,r.jsx)(be,{marker:e,onClick:n.onClick},"marker-"+e.node.id))})}),st=(0,g.memo)(function(n){return(0,r.jsx)(r.Fragment,{children:n.edges.map(e=>(0,r.jsx)(fe,{edge:e,hovering:e.source.id===n.nodeHoveringId||e.target.id===n.nodeHoveringId||n.edgeHoveringId===e.id,onClick:n.onClick,onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave,svgIdNamespace:n.svgIdNamespace},e.id))})}),it=(0,g.memo)(function(n){return(0,r.jsx)(r.Fragment,{children:n.edges.map((e,s)=>{const o=e.source.id===n.nodeHoveringId||e.target.id===n.nodeHoveringId||n.edgeHoveringId===e.id,i=e.mainStat||e.secondaryStat;return o&&i&&(0,r.jsx)(he,{edge:e},e.id)})})});function rt(t,n){const{scale:e,onStepDown:s,onStepUp:o,ref:i,isMax:c,isMin:l}=qe(),{state:d,ref:f}=Je({scale:e,bounds:t,focus:n}),{position:a,isPanning:u}=d;return{zoomRef:i,panRef:f,position:a,isPanning:u,scale:e,onStepDown:s,onStepUp:o,isMaxZoom:c,isMinZoom:l}}function at(){const[t,n]=(0,g.useState)(void 0),e=(0,g.useCallback)(()=>n(void 0),[n]),[s,o]=(0,g.useState)(void 0),i=(0,g.useCallback)(()=>o(void 0),[o]);return{nodeHover:t,setNodeHover:n,clearNodeHover:e,edgeHover:s,setEdgeHover:o,clearEdgeHover:i}}},94382:(ce,W,h)=>{h.d(W,{d:()=>A});var r=h(96540),v=h(48543);function A(D){return(0,r.useMemo)(()=>(0,v.CP)(D),[D])}}}]);

//# sourceMappingURL=5511.5fe23ce61d3edd96362c.js.map