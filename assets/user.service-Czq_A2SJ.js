import{i as c}from"./auth.service-Bh8YR8GJ.js";import{V as r}from"./index-CTNc0h0S.js";const d={getUserRoleList:async function(){return await c.get("admin/roles").then(e=>{if(e.data)return e.data.filter(t=>t.name!=="super-admin")}).catch(e=>{console.error(e),r.error("Failed to fetch user roles")})},getUsersList:async function(){return await c.get("admin/accounts").then(e=>e.data.data).catch(e=>{console.error(e),r.error("Failed to fetch users list")})},deleteUser:async function(e){return await c.delete("/admin/accounts/"+e).then(t=>(r.info("Account successfully deleted/removed"),t.data)).catch(t=>{console.log(t),r.error("Failed to delete/remove user account")})},createUser:async function(e,t){return e.userRoleId=+e.userRoleId,e.departmentId=e.departmentId?+e.departmentId:null,await c.post("/admin/accounts",e).then(a=>(r.success("Account successfully created"),t(),a.data)).catch(a=>{var n;((n=a.response)==null?void 0:n.status)===400?r.error("E-mail/Name already associated with another account"):r.error("Failed to add user account")})},updateUser:async function(e,t){return await c.patch("/admin/accounts/"+e,{...t,user_rple_id:+t.user_role_id}).then(a=>(r.info("Account successfully updated"),a.data)).catch(a=>{console.log(a),r.error("Failed to update user account")})},getUserRolesList:async function(){return await c.get("admin/roles").then(e=>e.data.data).catch(e=>{console.error(e),r.error("Failed to fetch user roles")})}};export{d as U};