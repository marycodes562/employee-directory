"use client"

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonComp from '@/components/profile/button';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';

import { Sun } from "@deemlol/next-icons";
import { Settings } from "@deemlol/next-icons";
import { XCircle } from "@deemlol/next-icons";
import { Moon, Menu } from "@deemlol/next-icons";
import styles from './navBar.module.css';

import { searchQuery } from '../../firebase/employeeService';

function NavBar({onSearch, searchValue, clear}) {
    const [showX, setShowX] = useState(false);

    const today = new Date();

    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();


    return (
        <div>
            <Navbar className={styles.navBar}>
              {/*Logo */}
              <div>
                <h4>Dashboard</h4>
              </div>

              {/*---------------- Date / Day -------------------- 
                <Card className={styles.dateDay}>
                    <p>{`${date} / ${month} / ${year}`}</p>
                </Card>*/}

                {/*---------------- Search Bar -------------------- */}

                <div>
                        <Form className={styles.form}>
                            
                            <Form.Control 
                                value={searchValue}
                                type="text"
                                placeholder="Search..."
                                onChange={onSearch}
                            />
                            {searchValue ? 
                                <button 
                                    type='button'
                                    className={styles.searchx} 
                                    onClick={clear}><XCircle size={20} color="#090909ff" /></button> : ""
                            }
                            
                        </Form>


                </div>

                {/*---------------- Buttons Container -------------------- */}

                <div className={styles.buttonsContainer}>

                    {/*---------------- Light / Dark Mode -------------------- 
                    <Button className={styles.button}><Sun size={20} color="#FFF" /> / <Moon size={20} color="#FFF"/></Button>*/}

                    {/*---------------- Menu Button -------------------- 
                    <ButtonComp text={<Menu size={20} color="#FFF" />} style={{width: "auto"}}onClick={null}/><br />*/}
                    
                    <button className={styles.logout}>Logout</button>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;