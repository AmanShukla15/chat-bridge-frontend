import{r as b,y as k,x as A,z as C,B as s,E,F as H,D as d,G as R,j as $,H as S}from"./index-zoCVIjJL.js";import{b as G}from"./Modal-D8Ubx5EF.js";const V=o=>{const a=b.useRef({});return b.useEffect(()=>{a.current=o}),a.current};function er(o){const{badgeContent:a,invisible:r=!1,max:t=99,showZero:n=!1}=o,l=V({badgeContent:a,max:t});let e=r;r===!1&&a===0&&!n&&(e=!0);const{badgeContent:i,max:g=t}=e?l:o,c=i&&Number(i)>g?`${g}+`:i;return{badgeContent:i,invisible:e,max:g,displayValue:c}}function lr(o){return A("MuiBadge",o)}const p=k("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),cr=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],y=10,P=4,gr=o=>{const{color:a,anchorOrigin:r,invisible:t,overlap:n,variant:l,classes:e={}}=o,i={root:["root"],badge:["badge",l,t&&"invisible",`anchorOrigin${s(r.vertical)}${s(r.horizontal)}`,`anchorOrigin${s(r.vertical)}${s(r.horizontal)}${s(n)}`,`overlap${s(n)}`,a!=="default"&&`color${s(a)}`]};return S(i,lr,e)},pr=C("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,a)=>a.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),dr=C("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.badge,a[r.variant],a[`anchorOrigin${s(r.anchorOrigin.vertical)}${s(r.anchorOrigin.horizontal)}${s(r.overlap)}`],r.color!=="default"&&a[`color${s(r.color)}`],r.invisible&&a.invisible]}})(({theme:o})=>{var a;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:y*2,lineHeight:1,padding:"0 6px",height:y*2,borderRadius:y,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),variants:[...Object.keys(((a=o.vars)!=null?a:o).palette).filter(r=>{var t,n;return((t=o.vars)!=null?t:o).palette[r].main&&((n=o.vars)!=null?n:o).palette[r].contrastText}).map(r=>({props:{color:r},style:{backgroundColor:(o.vars||o).palette[r].main,color:(o.vars||o).palette[r].contrastText}})),{props:{variant:"dot"},style:{borderRadius:P,height:P*2,minWidth:P*2,padding:0}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${p.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${p.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${p.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${p.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${p.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${p.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${p.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${p.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}}]}}),Or=b.forwardRef(function(a,r){var t,n,l,e,i,g;const c=E({props:a,name:"MuiBadge"}),{anchorOrigin:u={vertical:"top",horizontal:"right"},className:Z,component:q,components:B={},componentsProps:T={},children:J,overlap:z="rectangular",color:_="default",invisible:K=!1,max:Q=99,badgeContent:N,slots:v,slotProps:f,showZero:M=!1,variant:m="standard"}=c,X=H(c,cr),{badgeContent:L,invisible:Y,max:w,displayValue:rr}=er({max:Q,invisible:K,badgeContent:N,showZero:M}),or=V({anchorOrigin:u,color:_,overlap:z,variant:m,badgeContent:N}),j=Y||L==null&&m!=="dot",{color:ar=_,overlap:tr=z,anchorOrigin:nr=u,variant:D=m}=j?or:c,I=D!=="dot"?rr:void 0,h=d({},c,{badgeContent:L,invisible:j,max:w,displayValue:I,showZero:M,anchorOrigin:nr,color:ar,overlap:tr,variant:D}),U=gr(h),W=(t=(n=v==null?void 0:v.root)!=null?n:B.Root)!=null?t:pr,F=(l=(e=v==null?void 0:v.badge)!=null?e:B.Badge)!=null?l:dr,O=(i=f==null?void 0:f.root)!=null?i:T.root,x=(g=f==null?void 0:f.badge)!=null?g:T.badge,ir=G({elementType:W,externalSlotProps:O,externalForwardedProps:X,additionalProps:{ref:r,as:q},ownerState:h,className:R(O==null?void 0:O.className,U.root,Z)}),sr=G({elementType:F,externalSlotProps:x,ownerState:h,className:R(U.badge,x==null?void 0:x.className)});return $.jsxs(W,d({},ir,{children:[J,$.jsx(F,d({},sr,{children:I}))]}))});function ur(o){return A("MuiToolbar",o)}k("MuiToolbar",["root","gutters","regular","dense"]);const vr=["className","component","disableGutters","variant"],fr=o=>{const{classes:a,disableGutters:r,variant:t}=o;return S({root:["root",!r&&"gutters",t]},ur,a)},br=C("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,!r.disableGutters&&a.gutters,a[r.variant]]}})(({theme:o,ownerState:a})=>d({position:"relative",display:"flex",alignItems:"center"},!a.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}},a.variant==="dense"&&{minHeight:48}),({theme:o,ownerState:a})=>a.variant==="regular"&&o.mixins.toolbar),xr=b.forwardRef(function(a,r){const t=E({props:a,name:"MuiToolbar"}),{className:n,component:l="div",disableGutters:e=!1,variant:i="regular"}=t,g=H(t,vr),c=d({},t,{component:l,disableGutters:e,variant:i}),u=fr(c);return $.jsx(br,d({as:l,className:R(u.root,n),ref:r,ownerState:c},g))});export{Or as B,xr as T,V as u};
