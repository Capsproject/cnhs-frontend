import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { PageHeader } from "@/components/shared/PageHeader";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useQuery } from "@tanstack/react-query";
import { EventService } from "@/services/event.service";
import dayjs from "dayjs";
import { EventFormModal } from "@/components/domain/events/EventModal";
import { FormModal } from "@/types/shared";

const CalendarPage: React.FC = () => {
  const { data, refetch } = useQuery({
    queryKey: ["data-events-list"],
    queryFn: async () => await EventService.geteventsList(),
  });

  const [formModal, setFormModal] = React.useState<FormModal>({
    show: false,
    selectedData: undefined,
    formType: undefined,
  });

  const [events, setEvents] = React.useState<any[]>([]);
  React.useEffect(() => {
    if (data) {
      setEvents(data);
    }
  }, [data]);

  const mapEvents = (events: any) => {
    return events.map((event: any) => {
      const date = dayjs(event.event_date).format("YYYY-MM-DD");
      return {
        title: event.title,
        start: date,
        extendedProps: {
          title: event.title,
          event_date: event.event_date,
          event_time: event.event_time,
          banner_img: event.banner_img,
          message: event.message,
        },
      };
    });
  };
  const eventsData = mapEvents(events);
  const handleFormModal = (data: FormModal) => {
    setFormModal(data);
  };
  const handleEventClick = (info: any) => {
    handleFormModal({
      show: true,
      selectedData: info.event.extendedProps,
      formType: "view",
    });
  };
  return (
    <>
      <PageHeader title="Calendar" />
      <EventFormModal
        show={formModal.show}
        formType={formModal.formType}
        data={formModal.selectedData}
        refetch={refetch}
        handleClose={() =>
          setFormModal({ show: false, selectedData: undefined })
        }
      />
      <div className="min:h-[400px] bg-white border-t-2 border-gray-100 p-3">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="auto"
          initialView="dayGridMonth"
          events={eventsData}
          eventClick={handleEventClick}
        />
      </div>
    </>
  );
};

export default CalendarPage;
