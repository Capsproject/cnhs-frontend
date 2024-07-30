import http from "@/api/index"
import { toast } from "react-toastify";
export const EventService = {
    createEvent: async function(announcementData: any) {
        return await http
            .post("admin/events", announcementData, {
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
    geteventsList: async function() {
        return await http
            .get("/admin/events")
            .then((response) => response.data.data)
            .catch((error) => {
                console.error(error);
            })
    },
    updateEvent: async function(announcementData: any) {
        return await http
            .patch("admin/events", announcementData, {
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
    deleteEvent: async function(id: number) {
        return await http
            .delete(`admin/events/${id}`)
            .then((response) => {
                toast.success("Event successfully deleted");
                return response.data.data;
            })
            .catch((error) => {
                toast.error("Failed to delete event");
                console.error(error);
            })
    }
}