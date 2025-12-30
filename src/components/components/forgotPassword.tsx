"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { forgotPassword } from "../../../firebase/employeeService";
import toast from "react-hot-toast";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import ButtonComp from "./button";
import Styles from './forgotPassword.module.css';

export default function ForgotPasswordModal({ show, handleClose }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const response = await forgotPassword(email);
    if (response.success) {
      toast.success(
        "Link to reset your password has been sent, check your inbox."
      );
      setEmail("");
      handleClose();
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <FloatingLabel
                controlId="emailAddress"
                label="Email Address"
                >
                <Form.Control
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className={Styles.buttonCont}>
            <ButtonComp text="Cancel" style={{}} onClick={handleClose}/>
            <ButtonComp text="Submit" style={{}} onClick={handleSubmit}/>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
