import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { PageHeader } from "@/components/shared/PageHeader";
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
const CalendarPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Calendar" />
      <div className="min:h-[400px] bg-white border-t-2 border-gray-100 p-3">
        <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        height="auto"
        initialView='dayGridMonth'
        />
      </div>
    </>
  );
};

export default CalendarPage;
