import{R as o,j as e,u as y,C as M}from"./index-B2A_dhZ5.js";import{u as j}from"./index.esm-dEOXNBEE.js";import{M as A}from"./index-D0k4vE_1.js";import{B as x}from"./button-BUarhM2B.js";import{P as _}from"./PageHeader-BAusoJSn.js";import{t as Q,D as z,a as S}from"./dummy-BQvDEWUX.js";import"./context-a4nKkfeA.js";import"./auth.service-D2VlV1wt.js";const w=t=>{const[p,u]=o.useState(!1),[n,f]=o.useState(),[l,a]=o.useState(""),{setValue:g,handleSubmit:r,register:c,reset:d,formState:{errors:h}}=j(),m=r(async s=>{if(u(!0),t.formType==="add"){const i=new FormData;i.append("title",s.title),i.append("description",s.description),i.append("due_date",s.due_date),i.append("url",s.url),i.append("file",n),d(),t.refetch()}else{const i=new FormData;i.append("title",s.title),i.append("description",s.description),i.append("due_date",s.due_date),i.append("url",s.url),i.append("file",n),d(),t.handleClose()}u(!1),t.handleClose()});return e.jsx(e.Fragment,{children:e.jsx(A,{loading:p,onClose:t.handleClose,open:t.show,title:t.formType==="add"?"Post Module":"Update Module",onCancel:t.handleClose,...t.formType!=="view"?{okText:"Submit",onOk:m}:{footer:null},children:e.jsx("form",{className:"flex flex-col gap-2",onSubmit:m,children:e.jsx("div",{className:"flex flex-row",children:e.jsx(x,{className:l==="file"?"":"bg-gray",onClick:()=>a("file"),children:"File"})})})})})},N=()=>{var c;const t=(c=y.getState().user)==null?void 0:c.user_role.name,[p,u]=o.useState(),[n,f]=o.useState(),[l,a]=o.useState({show:!1,selectedData:void 0}),g=d=>{a(d)},r=[{id:1,title:"Module 1",description:"Math Quiz",due_date:"August 12, 2021"},{id:2,title:"Module 2",description:"Science Quiz",due_date:"August 12, 2021"},{id:3,title:"Module 3",description:"English Quiz",due_date:"August 12, 2021"},{id:4,title:"Module 4",description:"Filipino Quiz",due_date:"August 12, 2021"},{id:5,title:"Module 5",description:"PE Quiz",due_date:"August 12, 2021"},{id:6,title:"Module 6",description:"Health Quiz",due_date:"August 12, 2021"},{id:7,title:"Module 7",description:"Music Quiz",due_date:"August 12, 2021"},{id:8,title:"Module 8",description:"Art Quiz",due_date:"August 12, 2021"},{id:9,title:"Module 9",description:"Home Economics Quiz",due_date:"August 12, 2021"},{id:10,title:"Module 10",description:"Technology and Livelihood Education Quiz",due_date:"August 12, 2021"},{id:11,title:"Module 11",description:"Araling Panlipunan Quiz",due_date:"August 12, 2021"},{id:12,title:"Module 12",description:"Values Education Quiz",due_date:"August 12, 2021"},{id:13,title:"Module 13",description:"Physical Education Quiz",due_date:"August 12, 2021"},{id:14,title:"Module 14",description:"Health Quiz",due_date:"August 12, 2021"},{id:15,title:"Module 15",description:"Music Quiz",due_date:"August 12, 2021"},{id:16,title:"Module 16",description:"Art Quiz",due_date:"August 12, 2021"},{id:17,title:"Module 17",description:"Home Economics Quiz",due_date:"August 12, 2021"}];return o.useEffect(()=>{if(t==="student"){const d=z;d.grades===void 0&&(d.grades=[]),d.grades.map(h=>({...h,grades:S})),u(d)}else t==="teacher"&&f(Q)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(_,{title:t==="student"?"Modules":"Manage Modules"}),e.jsx(w,{show:l.show,formType:l.formType,data:l.selectedData,disableDC:!1,refetch:()=>{},handleClose:()=>a({show:!1,selectedData:void 0})}),e.jsxs(e.Fragment,{children:[t==="teacher"&&e.jsx("div",{className:"flex mb-4",children:e.jsx(x,{className:"flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90",type:"primary",onClick:()=>g({show:!0,formType:"add"}),children:"Post Module"})}),e.jsx("div",{className:"flex flex-wrap xl:gap-9 md:gap-4 justify-center gap-3 over-flow-auto  md:overflow-auto sm:overflow-auto",children:r&&r.map(d=>e.jsxs(M,{hoverable:!0,style:{width:300},children:[e.jsx("div",{className:"flex mb-5",children:e.jsx("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",className:"h-40 object-cover w-full"})}),e.jsx(M.Meta,{title:d.title,description:d.description})]},d.id))})]})]})};export{N as default};