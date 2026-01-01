"use client";

import React, { useState, useEffect } from "react";
import SideMenu from "@/components/components/sideMenu";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Styles from "./page.module.css";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { getEvents, addEvent } from "../../../firebase/employeeService";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Calender() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEvents();
        eventsData.map((event) => {
          console.log("Event Title: ", event.title, "Event Date: ", event.date);
          setEvents((prev) => [
            ...prev,
            { title: event.title, start: event.date },
          ]);
        });
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  const handleDateClick = async (info) => {
    const title = prompt("Please enter a title for your event");
    if (title) {
      await addEvent({ title, date: info.dateStr });
      setEvents((prev) => [...prev, { title, start: info.dateStr }]);
    }
  };

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
          dateClick={handleDateClick}
        />
      </div>
    </div>
  );
}
