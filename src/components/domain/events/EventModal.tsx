import { EventService } from "@/services/event.service";
import React from "react";
import { useForm } from "react-hook-form";
type Props = {
    show: boolean;
    formType: "add" | "update";
    data?: any;
    refetch: () => void;
    handleClose: () => void;
};


export const  EventFormModal: React.FC<Props> = (props) => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { handleSubmit, register, reset } = useForm();
    const handleFormSubmit = handleSubmit(async (data: any) => {
        setLoading(true);
        
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("description", data.description);
            formData.append("image", data.image[0]);
        if(props.formType === "add") {
            await EventService.createEvent(formData);
            reset();
            props.refetch();
        } else {
            await EventService.updateEvent(formData);
            reset();
            props.handleClose();
        }
        setLoading(false);
        props.handleClose();
    })
    return (
        <div>
            <h1>Event Form Modal</h1>
        </div>
    )
};