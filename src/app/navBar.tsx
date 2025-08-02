"use client"

import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import styles from './navBar.module.css';

function NavBar() {

    return (
        <div>
            <Navbar className={styles.navBar}>
                <div></div>

              {/*---------------- Date / Day -------------------- */}
                <div className={styles.dateDay}>
                    <p>29 July 2025</p>
                    <p>Tuesday</p>
                </div>
                <div></div>
                {/*---------------- Search Bar -------------------- */}
                <Form className={styles.form}>
                    <Form.Control 
                        type="text"
                        placeholder="Search"
                    />
                </Form>
                {/*---------------- Light / Dark Mode + Profile Picture -------------------- */}

                <div className={styles.buttonsContainer}>

                    {/*---------------- Light / Dark Mode -------------------- */}
                    <Button className={styles.button}>Light / Dark</Button>

                    {/*---------------- Profile Picture -------------------- */}
                    <Button>Profile Pic</Button>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;