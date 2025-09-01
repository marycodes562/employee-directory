"use client"

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './deleteUserForm.module.css';
import { deleteEmployees } from '../../../firebase/employeeService';
import toast from 'react-hot-toast';

function DeleteUser({show, onHide, employee, onDeleted}: any)  {

    const handleDelete = async(e: React.FormEvent) => {
        e.preventDefault();
        try {
            await deleteEmployees(employee.id)
            toast.success('Employee details deleted successfully');
            onDeleted();
            onHide();
        } catch(error) {
            toast.error('Failed to delete employee');

        }
    }


    return (
        <div>
            <Modal
                className={styles.modalContent}
                aria-labelledby='contained-modal-title-vcenter'
                show={show}
                onHide={onHide}
                centered
            >

                <Form className={styles.form} onSubmit={handleDelete}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <p>Are you sure you want to delete {' '}
                            <strong>{employee?.firstName} {employee?.lastName}</strong>?</p>

                    </Modal.Body>
                    <Modal.Footer>
                        {/*------------------------- Close Button ----------------------------------*/}
                        <Button variant='secondary' onClick={onHide} className={styles.button}>Close</Button>
                        {/*------------------------- Delete User Button ----------------------------------*/}
                        <Button variant='danger' type="submit">Delete</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default DeleteUser;