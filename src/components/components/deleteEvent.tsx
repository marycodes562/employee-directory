"use client";

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { deleteEvent } from "../../../firebase/employeeService";
import styles from "./deleteEvent.module.css";

export default function DeleteEvent({ eventId, onHide, setEvents }: any) {
  const handleDelete = async (eventId: any) => {
    try {
      await deleteEvent(eventId);
      setEvents((prev: any[]) => prev.filter((event) => event.id !== eventId));
      onHide();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <>
      <div>
        <Button variant="danger" onClick={() => handleDelete(eventId)}>
          Delete Event
        </Button>
      </div>
    </>
  );
}
