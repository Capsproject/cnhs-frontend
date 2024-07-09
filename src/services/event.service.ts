import http from "@/api/index"
export const EventService = {
    createEvent: async function (eventData: Event, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
        return await http
            .post("/events", eventData)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
            })
            
    }
}