import  http  from '@/api/';

import { toast } from 'react-toastify';
export const UserService = {
    getUserRoleList: async function () {
        return await http
        .get("admin/roles")
        .then((response)=>{
            if(response.data) {
                return response.data.filter((role: { name: string; }) => role.name !== "super-admin");
            }
        })
        .catch((error) =>{
            console.error(error);
            toast.error("Failed to fetch user roles");
        })
    },

    getUsersList: async function () {
        return await http
        .get("admin/accounts")
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            toast.error("Failed to fetch users list");
        })
    },
    deleteUser: async function (id: number) {
        return await http
            .delete("/accounts/" + id)
            .then((response) => {
            toast.info("Account successfully deleted/removed");
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            toast.error("Failed to delete/remove user account");
        });
    },
    createUser: async function (userData: any, closeModal: any) {
        userData.userRoleId = +userData.userRoleId;
        userData.departmentId = userData.departmentId ? +userData.departmentId : null;
    
        return await http
            .post("/accounts", userData)
            .then((response) => {
            toast.success("Account successfully created");
            closeModal();
    
            return response.data;
            })
            .catch((error) => {
                if (error.response?.status === 400) {
                toast.error("E-mail/Name already associated with another account");
                } else {
                toast.error("Failed to add user account");
                }
            });
        },
        updateUser: async function (id: number, userData: any) {
            return await http
                .patch("/accounts/" + id, { ...userData, userRoleId: +userData.userRoleId, departmentId: +userData.departmentId })
                .then((response) => {
                    toast.info("Account successfully updated");
            
                    return response.data;
                })
                .catch((error) => {
                console.log(error);
        
                toast.error("Failed to update user account");
                });
            },
}