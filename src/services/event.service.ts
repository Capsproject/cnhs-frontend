import http from "@/api/index"
import { toast } from "react-toastify";
export const EventService = {
    createEvent: async function(eventsData: any) {
        return await http
            .post("admin/events", eventsData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then((response) => {
                toast.success("Announcement successfully created");
                return response.data.data;
            })
            .catch((error) => {
                if(error.response.status === 500) {
                    toast.error("Failed to create announcement");
                } else {
                    toast.error(error.response.data.message);
                }
            })
    },
    geteventsList: async function() {
        return await http
            .get("/admin/events")
            .then((response) => response.data.data)
            .catch((error) => {
                if(error.response.status === 500) {
                    toast.error("Failed to fetch event");
                } else {
                    toast.error(error.response.data.message);
                }
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