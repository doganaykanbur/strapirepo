import{bo as T,u as I,n as A,q as N,cE as v,cJ as D,fb as k,r as w,eW as O,j as s,P as u}from"./strapi-UVslZLdW.js";import{C as R,T as U}from"./Form-BxR6sc29-CB_aJqEF.js";import{u as q}from"./hooks-E5u1mcgM-rMW7M_Ta.js";import{s as G}from"./objects-D6yBsdmx-CJV0zW4p.js";import"./useDragAndDrop-DJ6jqvZN-CpI6lGC_.js";import"./ComponentIcon-u4bIXTFY-60bPNtzx.js";import"./FieldTypeIcon-CMlNO8PE-BHrHrTf_.js";import"./getEmptyImage-CjqolaH3.js";const H=()=>{const{trackUsage:o}=T(),{formatMessage:n}=I(),{toggleNotification:a}=A(),{_unstableFormatAPIError:c}=N(),{isLoading:F,schema:y,model:L}=v(),{isLoading:S,error:h,list:E,edit:g}=D(),{fieldSizes:x,error:d,isLoading:_,isFetching:j}=k(void 0,{selectFromResult:e=>{const l=Object.entries(e.data?.fieldSizes??{}).reduce((r,[t,{default:i}])=>(r[t]=i,r),{});return{isFetching:e.isFetching,isLoading:e.isLoading,error:e.error,fieldSizes:l}}});w.useEffect(()=>{d&&a({type:"danger",message:c(d)})},[d,c,a]);const C=F||S||_||j,[M]=O(),P=async e=>{try{o("willSaveContentTypeLayout");const l=Object.entries(E.metadatas).reduce((t,[i,{mainField:m,...f}])=>{const b=g.metadatas[i],{__temp_key__:J,size:Q,name:V,...z}=e.layout.flatMap(p=>p.children).find(p=>p.name===i)??{};return t[i]={edit:{...b,...z},list:f},t},{}),r=await M({layouts:{edit:e.layout.map(t=>t.children.reduce((i,{name:m,size:f})=>m!==U?[...i,{name:m,size:f}]:i,[])),list:E.layout.map(t=>t.name)},settings:G(e.settings,"displayName",void 0),metadatas:l,uid:L});"data"in r?(o("didEditEditSettings"),a({type:"success",message:n({id:"notification.success.saved",defaultMessage:"Saved"})})):a({type:"danger",message:c(r.error)})}catch{a({type:"danger",message:n({id:"notification.error",defaultMessage:"An error occurred"})})}};return C?s.jsx(u.Loading,{}):d||h||!y?s.jsx(u.Error,{}):s.jsxs(s.Fragment,{children:[s.jsx(u.Title,{children:`Configure ${g.settings.displayName} Edit View`}),s.jsx(R,{onSubmit:P,attributes:y.attributes,fieldSizes:x,layout:g})]})},te=()=>{const o=q(n=>n.admin_app.permissions.contentManager?.collectionTypesConfigurations);return s.jsx(u.Protect,{permissions:o,children:s.jsx(H,{})})};export{H as EditConfigurationPage,te as ProtectedEditConfigurationPage};