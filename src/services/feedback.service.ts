import  http from '@/api/index';
import {toast} from 'react-toastify';
export const FeedbackService =  {
    createFeedback: async function(feedbackData: any) {
        return await http
            .post("admin/feedbacks", feedbackData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then((response) => {
                toast.success("Feedback successfully created");
                return response.data.data;
            })
            .catch((error) => {
                if(error.response.status === 500) {
                    toast.error("Failed to create feedback");
                } else {
                    toast.error(error.response.data.message);
                }
            })
    },
    getFeedbackList: async function() {
        return await http
            .get("/admin/feedbacks")
            .then((response) => response.data.data)
            .catch((error) => {
                if(error.response.status === 500) {
                    toast.error("Failed to fetch feedback");
                } else {
                    toast.error(error.response.data.message);
                }
            })
    }
}