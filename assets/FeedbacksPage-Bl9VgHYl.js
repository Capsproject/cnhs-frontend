import{B as t,j as s}from"./index-9I8Vq2C0.js";import{P as d}from"./PageHeader-DA3r9hgs.js";import{i as r}from"./auth.service-BBShxZoF.js";import{u as n}from"./context-BQzbsc9v.js";import{F as i}from"./Table-lFXHhcc9.js";import"./button-CsR1mtr1.js";import"./index-DK0UCihG.js";import"./EyeOutlined-BzOZsb0q.js";const o={createFeedback:async function(e){return await r.post("admin/feedbacks",e,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>(t.success("Feedback successfully created"),a.data.data)).catch(a=>{a.response.status===500?t.error("Failed to create feedback"):t.error(a.response.data.message)})},getFeedbackList:async function(){return await r.get("/admin/feedbacks").then(e=>e.data.data).catch(e=>{e.response.status===500?t.error("Failed to fetch feedback"):t.error(e.response.data.message)})}},h=()=>{const{data:e,isFetching:a,refetch:m}=n({queryKey:["data-feedbacks-list"],queryFn:async()=>await o.getFeedbackList()}),c=[{title:"Feedback",key:"feedback",dataIndex:"feedback"},{title:"Rating",key:"rating",dataIndex:"rating"},{title:"Created At",key:"created_at",dataIndex:"created_at"},{title:"Actions",key:"actions",render:u=>{}}];return s.jsxs(s.Fragment,{children:[s.jsx(d,{title:"Feedbacks"}),s.jsx(i,{dataSource:e,loading:a,columns:c})]})};export{h as FeedbacksPage,h as default};