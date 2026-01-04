"use client";

import React, { useState, useEffect } from "react";
import SideMenu from "@/components/components/sideMenu";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Styles from "./page.module.css";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import {
  getEvents,
  addEvent,
  updateEvent,
} from "../../../firebase/employeeService";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AddEvent from "@/components/components/addEvent";

export default function Calender() {
  const [events, setEvents] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [title, setTitle] = useState("");

  // Fetch events from Firestore on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEvents();

        const formattedEvents = eventsData.map((event) => ({
          id: event.id,
          title: event.title,
          start: event.date?.toDate
            ? event.date.toDate() // Firestore Timestamp
            : event.date, // ISO string
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  // Enhanced date click handler to add event with Firestore integration
  const handleDateClick = async (info) => {
    try {
      setModalShow(true);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  // Enhanced event click handler to edit event title
  const handleEventClick = async (clickInfo) => {
    const eventId = clickInfo.event.id;
    const currentTitle = clickInfo.event.title;

    const newTitle = prompt("Edit event title:", currentTitle);

    if (!newTitle || newTitle === currentTitle) return;

    try {
      // 1. Update Firestore
      await updateEvent(eventId, { title: newTitle });

      // 2. Update React state
      setEvents((prev) =>
        prev.map((event) =>
          event.id === eventId ? { ...event, title: newTitle } : event
        )
      );

      // 3. Update FullCalendar UI instantly
      clickInfo.event.setProp("title", newTitle);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div>
      <SideMenu />

      <AddEvent
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        setTitle={setTitle}
      />

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
          eventClick={handleEventClick}
          eventContent={(eventInfo) => {
            return (
              <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
