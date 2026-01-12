"use client";

import React, { useState } from "react";
import SideMenu from "@/components/components/sideMenu";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Styles from "./page.module.css";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { tree } from "next/dist/build/templates/app-page";

export default function Calender() {
  const [events, setEvents] = useState([
    { title: "Meeting", start: new Date() },
  ]);

  return (
    <div>
      <SideMenu />

      <div className={Styles.calendarContainer}>
        <FullCalendar
          events={events}
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            bootstrap5Plugin,
          ]}
          initialView="dayGridMonth"
          weekends={true}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          themeSystem="bootstrap5"
          dateClick={(info) => {
            const title = prompt("Enter Event Title:");
            if (title) {
              setEvents((prev) => [...prev, { title, start: info.dateStr }]);
            }
          }}
        />
      </div>
    </div>
  );
}
