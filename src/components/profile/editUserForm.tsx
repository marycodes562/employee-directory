"use client"

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import styles from './editUserForm.module.css';

import locations from '@/Data/locationData';
import departments from '@/Data/departmentsData';

function EditUserForm ({ show, onHide, onAddUser }: any)  {

    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/*------------------------- First Name ----------------------------------*/}
                        <FloatingLabel
                            controlId='floatingInput'
                            label='First Name'
                            className='mb-1'
                        >
                            <Form.Control
                                type="text"
                                value=''

                                required
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
                                value=''

                                required
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
                                value=''

                                required
                            />
                        </FloatingLabel>
                        <br />

                        {/*------------------------- Location ----------------------------------*/}
                        <Form.Select
                            value='{formData.location}'

                        >
                            <option>Location</option>
                            {locations.map((loc) => (
                                <option key={loc.id} value={loc.name}>{loc.name}</option>
                            ))}
                        </Form.Select><br/>


                        {/*------------------------- Department ----------------------------------*/}
                        <Form.Select
                            value=''

                        >
                            <option>Department</option>
                            {departments.map((dep) => (
                                <option key={dep.id} value={dep.name}>{dep.name}</option>
                            ))}
                        </Form.Select><br/>

                        <Modal.Footer>
                            <div className={styles.buttonsContainer}>
                                    {/*------------------------- Close Button ----------------------------------*/}
                                    <Button variant='secondary' onClick={onHide} className={styles.button}>Close</Button>
                                    {/*------------------------- Add User Button ----------------------------------*/}
                                    <Button type="submit">Save Changes</Button>
                            </div>
                        </Modal.Footer>

                    </Form>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default EditUserForm;