import{d as c,b3 as h,a3 as u,u as x,b4 as g,j as s,b8 as j,b9 as p,ba as f,bb as m,bc as v,bd as b,B as t,T as a,F as n,aS as w,S,c as L,a4 as C}from"./strapi-UVslZLdW.js";import{S as y}from"./SSOProviders-BD7LHrkI-BJV3EP3t.js";const k=()=>{const d=u(),{formatMessage:i}=x(),{isLoading:e,data:r=[]}=g(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)}),l=()=>{d("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!e&&r.length===0?s.jsx(j,{to:"/auth/login"}):s.jsx(p,{children:s.jsxs(f,{children:[s.jsxs(m,{children:[s.jsxs(v,{children:[s.jsx(b,{}),s.jsx(t,{paddingTop:6,paddingBottom:1,children:s.jsx(a,{tag:"h1",variant:"alpha",children:i({id:"Auth.form.welcome.title"})})}),s.jsx(t,{paddingBottom:7,children:s.jsx(a,{variant:"epsilon",textColor:"neutral600",children:i({id:"Auth.login.sso.subtitle"})})})]}),s.jsxs(n,{direction:"column",alignItems:"stretch",gap:7,children:[e?s.jsx(n,{justifyContent:"center",children:s.jsx(w,{children:i({id:"Auth.login.sso.loading"})})}):s.jsx(y,{providers:r}),s.jsxs(n,{children:[s.jsx(o,{}),s.jsx(t,{paddingLeft:3,paddingRight:3,children:s.jsx(a,{variant:"sigma",textColor:"neutral600",children:i({id:"or"})})}),s.jsx(o,{})]}),s.jsx(S,{fullWidth:!0,size:"L",onClick:l,children:i({id:"Auth.form.button.login.strapi"})})]})]}),s.jsx(n,{justifyContent:"center",children:s.jsx(t,{paddingTop:4,children:s.jsx(L,{tag:C,to:"/auth/forgot-password",children:s.jsx(a,{variant:"pi",children:i({id:"Auth.link.forgot-password"})})})})})]})})},o=c(h)`
  flex: 1;
`,F={providers:k};export{F as FORMS};
