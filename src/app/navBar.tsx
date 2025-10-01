"use client"

import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Sun } from "@deemlol/next-icons";
import { Settings } from "@deemlol/next-icons";
import { Search } from "@deemlol/next-icons";
import { Moon } from "@deemlol/next-icons";
import styles from './navBar.module.css';

import { searchQuery } from '../../firebase/employeeService';

function NavBar() {
    const today = new Date();

    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const handleChange = (e: any) => {
        e.preventDefault();
        let value = e.target.value;
        searchQuery(value);
        
    }

    return (
        <div>
            <Navbar className={styles.navBar}>

              {/*---------------- Date / Day -------------------- */}
                <Card className={styles.dateDay}>
                    <p>{`${date} / ${month} / ${year}`}</p>
                </Card>

                {/*---------------- Search Bar -------------------- 
                <Search size={20}/>*/}

                <Form className={styles.form}>
                    
                    <Form.Control 
                        type="text"
                        placeholder="Search"
                        onChange={handleChange}
                    />
                </Form>

                {/*---------------- Light / Dark Mode + Profile Picture -------------------- */}

                <div className={styles.buttonsContainer}>

                    {/*---------------- Light / Dark Mode -------------------- */}
                    <Button className={styles.button}><Sun size={20} color="#FFF" /> / <Moon size={20} color="#FFF"/></Button>

                    {/*---------------- Profile Picture -------------------- */}
                    <Button><Settings size={20} color="#FFFFFF"/></Button>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;