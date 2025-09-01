"use client";

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './addUserForm.module.css';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Modal from 'react-bootstrap/Modal';

import locations from '@/Data/locationData';
import departments from '@/Data/departmentsData';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function AddUserForm({ show, onHide, onAddUser }: any) {

    const [formData, setFormData] = useState({
        employeeId: '',
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        department: ''
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Here you would typically send the formData to your backend or API
        console.log("Form submitted:", formData);
        onAddUser(formData); // Call the parent function to add the user
        
        //Reset the form after submission
        setFormData({
            employeeId: '',
            firstName: '',
            lastName: '',
            email: '',
            location: '',
            department: ''
        });
        
        onHide(); // Close the modal after submission
    }

    return (
        <div>
          <Modal 
                 show={show} 
                 onHide={onHide}
                 size= "lg"
                 className={styles.modal} 
                 aria-labelledby="contained-modal-title-vcenter"
                 centered
                 scrollable
            >
            <Modal.Body>
             {/*------------------------- Modal Title ----------------------------------*/}
             <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Add Employee</Modal.Title>
             </Modal.Header>
                {/*------------------------- Add User Form ----------------------------------*/}
              <Form onSubmit={handleSubmit}>
                {/*------------------------- Employee ID ----------------------------------*/}
                <FloatingLabel
                    controlId='floatingInput'
                    label='Employee ID'
                    className='mb-1'
                >
                    <Form.Control
                        type="text"
                        value={formData.employeeId}
                        onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                        required
                    />
                </FloatingLabel>
                <br />

                {/*------------------------- First Name ----------------------------------*/}
                <FloatingLabel
                    controlId='floatingInput'
                    label='First Name'
                    className='mb-1'
                    >
                    <Form.Control
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                </FloatingLabel>
                <br />

                {/*------------------------- Last Name ----------------------------------*/}
                <FloatingLabel
                    controlId='floatingInput'
                    label='Last Name'
                    className='mb-1'
                    >
                    <Form.Control
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                </FloatingLabel>
                <br />

                {/*------------------------- Email ----------------------------------*/}
                <FloatingLabel
                    controlId='floatingEmail'
                    label='Email'
                    className='mb-1'
                    >
                    <Form.Control
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </FloatingLabel>
                <br />

                {/*------------------------- Location ----------------------------------*/}
                <Form.Select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                >
                    <option>Location</option>
                    {locations.map((loc) => (
                        <option key={loc.id} value={loc.name}>{loc.name}</option>
                    ))}
                </Form.Select><br/>


                {/*------------------------- Department ----------------------------------*/}
                <Form.Select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                >
                    <option>Department</option>
                    {departments.map((dep) => (
                        <option key={dep.id} value={dep.name}>{dep.name}</option>
                    ))}
                </Form.Select>

                {/*------------------------------------------------------------------------*/}
                <br />
                <div className={styles.buttonsContainer}>
                    {/*------------------------- Close Button ----------------------------------*/}
                    <Button variant='secondary' onClick={onHide} className={styles.button}>Close</Button>
                    {/*------------------------- Add User Button ----------------------------------*/}
                    <Button type="submit">Add User</Button>
                </div>
            </Form>
          </Modal.Body>
        </Modal>
            <br />
        </div>
    )
}