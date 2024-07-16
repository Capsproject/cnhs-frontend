import http from "@/api/index"
export const AnnouncementService = {
    createAnnouncement: async function(announcementData: any, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
        console.log(announcementData);
        return await http
            .post("admin/announcements", announcementData,{
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
            })
    },
    getAnnouncementsList: async function() {
        return await http
            .get("/admin/announcements")
            .then((response) => response.data)
            .catch((error) => {
                console.error(error);
            })
    }
};