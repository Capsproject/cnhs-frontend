import http from "@/api/index"
import { toast } from "react-toastify";
export const AnnouncementService = {
    createAnnouncement: async function(announcementData: any) {
        return await http
            .post("admin/announcements", announcementData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then((response) => {
                toast.success("Announcement successfully created");
                return response.data.data;
            })
            .catch((error) => {
                console.error(error);
            })
    },
    getAnnouncementsList: async function() {
        return await http
            .get("/admin/announcements")
            .then((response) => response.data.data)
            .catch((error) => {
                console.error(error);
            })
    },
    updateAnnouncement: async function(announcementData: any) {
        return await http
            .patch("admin/announcements", announcementData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then((response) => {
                toast.success("Announcement successfully updated");
                return response.data.data;
            })
            .catch((error) => {
                toast.error("Failed to update announcement");
                console.error(error);
            })
    },
    deleteAnnouncement: async function(id: number) {
        return await http
            .delete(`admin/announcements/${id}`)
            .then((response) => {
                toast.success("Announcement successfully deleted");
                return response.data.data;
            })
            .catch((error) => {
                toast.error("Failed to delete announcement");
                console.error(error);
            })
    }
}