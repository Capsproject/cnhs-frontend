import{R as x,r as u,j as e,V as s,G as p,u as g,X as k}from"./index-CTNc0h0S.js";import{u as y}from"./index.esm-vrORIAiX.js";import{U as F}from"./user.service-Czq_A2SJ.js";import{P as f}from"./PageHeader-Ct09w8tj.js";import{i as h}from"./auth.service-Bh8YR8GJ.js";import{u as j}from"./useQuery-DDZH6T-k.js";import{F as w}from"./Table-BMFh8mbt.js";import{B as S}from"./button-hEMNqgW3.js";import"./context-l6_uxjmp.js";import"./index-0_C_ea6x.js";import"./useIcons-n8VDLauN.js";import"./index-CsVpOp7q.js";import"./index-B3SLH_HF.js";import"./EyeOutlined-DzsZdUem.js";const T=t=>{x.useState(!1);const[r,c]=u.useState([]),{handleSubmit:n,register:d,formState:{errors:i}}=y();u.useEffect(()=>{(async()=>{try{const m=(await F.getUsersList()).filter(b=>b.user_role.id===3);console.log(m),c(m)}catch(l){console.error("Failed to fetch teachers",l)}})()},[]);const o=n(async a=>{console.log("submit",a)});return e.jsx(e.Fragment,{children:e.jsx("form",{onSubmit:o,children:e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Teacher"}),e.jsxs("select",{...d("teacher",{required:!0}),className:"mt-1 mb-5 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm",children:[e.jsx("option",{value:"",children:"Select Teacher"}),r.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Feedback"}),e.jsx("textarea",{...d("feedback",{required:!0}),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"}),i.feedback&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:"This field is required"})]})})})},v={createFeedback:async function(t){return await h.post("admin/feedbacks",t,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>(s.success("Feedback successfully created"),r.data.data)).catch(r=>{r.response.status===500?s.error("Failed to create feedback"):s.error(r.response.data.message)})},getFeedbackList:async function(){return await h.get("/admin/feedbacks").then(t=>t.data.data).catch(t=>{t.response.status===500?s.error("Failed to fetch feedback"):s.error(t.response.data.message)})}};function N(t){return p({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"},child:[]},{tag:"path",attr:{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"},child:[]}]})(t)}const H=()=>{var o;const t=(o=g.getState().user)==null?void 0:o.user_role.id;console.log(t);const r=async()=>{try{const a=await v.getFeedbackList();return console.log(a),a}catch(a){throw console.error("Failed to fetch feedbacks",a),a}},{data:c,isFetching:n,refetch:d}=j({queryKey:["data-feedbacks-list",t],queryFn:t===1?r:()=>Promise.reject(k)}),i=[{title:"Feedback",key:"feedback",dataIndex:"feedback"},{title:"Rating",key:"rating",dataIndex:"rating"},{title:"Created At",key:"created_at",dataIndex:"created_at"},{title:"Actions",key:"actions",render:a=>e.jsx("div",{className:"flex flex-row gap-2",children:e.jsx(S,{type:"primary",onClick:()=>{console.log(a)},children:e.jsx(N,{})})})}];return e.jsxs(e.Fragment,{children:[t===1&&e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Feedbacks"}),e.jsx(w,{dataSource:c||[],loading:n,columns:i})]}),t===4&&e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Make a Teacher Feedback"}),e.jsx(T,{})]})]})};export{H as FeedbacksPage,H as default};