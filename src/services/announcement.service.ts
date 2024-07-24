import http from "@/api/index"
import { Announcement } from "@/types/announcement";
import { toast } from "react-toastify";
export const AnnouncementService = {
    createAnnouncement: async function(announcementData: Announcement, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
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
    }
};