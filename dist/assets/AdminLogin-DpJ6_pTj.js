import{c as r,u as s,r as d,ai as l,j as e,aj as c,ak as p}from"./index-zoCVIjJL.js";import{u as m}from"./index-BqsNzaDg.js";import{C as u}from"./Container-MXTZrV9A.js";import{P as x,T as f}from"./Modal-D8Ubx5EF.js";import{T as g}from"./TextField-qgC9iujP.js";import{B as h}from"./Button-DiAwvBb8.js";import"./ButtonBase-Cn_JI8Ky.js";import"./isMuiElement-BG5RyRtW.js";import"./Menu-BjFoS8hj.js";const T=()=>{const{isAdmin:i}=r(t=>t.auth),o=s(),n=m(""),a=t=>{t.preventDefault(),o(p(n.value))};return d.useEffect(()=>{o(l())},[o]),i?e.jsx(c,{to:"/admin/dashboard"}):e.jsx("div",{style:{backgroundImage:`
    linear-gradient(90deg, #fbeee0 0%, #fbefe3 25%, #fbf1e6 50%, #fcf3e9 75%, #fcf4ec 100%)
  `},children:e.jsx(u,{component:"main",maxWidth:"xs",sx:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs(x,{elevation:3,sx:{padding:4,display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#F5F5FA"},children:[e.jsx(f,{sx:{fontWeight:"bold",color:"#2a1f62",fontFamily:'"Cascadia Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',fontSize:"2rem"},children:"Login As Admin"}),e.jsxs("form",{style:{width:"100%",marginTop:"1rem"},onSubmit:a,children:[e.jsx(g,{required:!0,fullWidth:!0,label:"Secret Key",margin:"normal",variant:"outlined",type:"password",value:n.value,onChange:n.changeHandler}),e.jsx(h,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,sx:{marginTop:"1rem",backgroundColor:"#fbeee0",border:"2px solid #422800",borderRadius:"30px",boxShadow:"4px 4px 0 0 #422800",color:"#422800",cursor:"pointer",display:"inline-block",fontWeight:600,fontSize:"18px",padding:"0 18px",lineHeight:"50px",textAlign:"center",textDecoration:"none",userSelect:"none",WebkitUserSelect:"none",touchAction:"manipulation","&:hover":{backgroundColor:"#fff"},"&:active":{boxShadow:"2px 2px 0 0 #422800",transform:"translate(2px, 2px)"},"@media (min-width: 768px)":{minWidth:"120px",padding:"0 25px"}},children:"Login"})]})]})})})};export{T as default};
