"use client"

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './deleteUserForm.module.css';

function DeleteUser({show, onHide}: any)  {

    return (
        <div>
            <Modal
                className={styles.modal}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
                show={show}
                onHide={onHide}
            >

                <Form className={styles.form}>
                    <Modal.Header closeButton>Delete User</Modal.Header>
                    <p>Are you sure you want to delete this user?</p>

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