"use client"

import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import styles from './editUserForm.module.css';
import { updateEmployee } from '../../../firebase/employeeService';
import toast from 'react-hot-toast';

import locations from '@/Data/locationData';
import departments from '@/Data/departmentsData';

function EditUserForm ({ show, onHide, onAddUser, employee }: any)  {

    const initialFormData = {
            employeeId: '',
            firstName: '',
            lastName: '',
            email: '',
            location: '',
            department: ''
        };

    const [formData, setformData] = useState(initialFormData);

    useEffect(() => {
        if(employee) {
            setformData({
            employeeId: employee.id || '',
            firstName: employee.firstName || '',
            lastName: employee.lastName || '',
            email: employee.email || '',
            location: employee.location || '',
            department: employee.department || ''
            })
        }
    }, [employee])

    const handleChange = (e) => {
   
        setformData({...formData, [
        e.target.name    
        ] : e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await updateEmployee(employee.id, formData)
            onAddUser()
            onHide()
            toast.success('Employee details updated successfully')
        } catch(error) {
        
        }

        console.log(formData);
    }

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
                    <Form onSubmit={handleSubmit}>
                        {/*------------------------- First Name ----------------------------------*/}
                        <FloatingLabel
                            controlId='floatingInput'
                            label='FirstName'
                            className='mb-1'
                        >
                            <Form.Control
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                name='FirstName'
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
                                value={formData.lastName}
                                onChange={handleChange}
                                name='Last Name'
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
                                value={formData.email}
                                onChange={handleChange}
                                name='Email'
                                required
                            />
                        </FloatingLabel>
                        <br />

                        {/*------------------------- Location ----------------------------------*/}
                        <Form.Select
                            value={formData.location}
                            onChange={handleChange}
                            name="location"
                        >
                            <option>Location</option>
                            {locations.map((loc) => (
                                <option key={loc.id} value={loc.name}>{loc.name}</option>
                            ))}
                        </Form.Select><br/>


                        {/*------------------------- Department ----------------------------------*/}
                        <Form.Select
                            value={formData.department}
                            onChange={handleChange}
                            name="department"
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