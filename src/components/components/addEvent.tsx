"use client";

import React, { useState } from "react";
import styles from "./addEvent.module.css";
import ButtonComp from "./button";
import Modal from "react-bootstrap/Modal";

export default function AddEvent({ show, onHide, title, setTitle }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTitle(""); //Reset the title after submission
    onHide(); // Close the modal after submission
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className={styles.modal}
      >
        <div className={styles.addEventContainer}>
          <Modal.Header>
            <Modal.Title>Add New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label htmlFor="title">
                Please enter a title for your event:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <ButtonComp text="Close" style={{}} onClick={onHide} />
            <ButtonComp text="Add" style={{}} onClick={handleSubmit} />
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
