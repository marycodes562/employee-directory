'use client' 

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { forgotPassword } from '../../../firebase/employeeService';
import toast from 'react-hot-toast';

export default function ForgotPasswordModal({show, handleClose}) {

    const [email, setEmail] = useState("");

    const handleSubmit = async() => {
        const response = await forgotPassword(email); 
        if (response.success) {
            toast.success('Link to reset your password has been sent, check your inbox.');
            setEmail("");
            handleClose();
        } else {
            toast.error(response.message);
        }
    }

    return (
        <div>
            <Modal
            show={show}
            onHide={handleClose}
            centered
            >
             <Modal.Header  closeButton>
                    <Modal.Title>Reset Password</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Form  onSubmit={handleSubmit}>    

                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder="email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <div>
                        <button onClick={handleClose}>Cancel</button>
                        <button type="submit" onClick={() => console.log('button pressed')}>Send reset link</button>
                    </div>

                    </Form>        

                    </Modal.Body>
            </Modal>
        </div>
    )
}