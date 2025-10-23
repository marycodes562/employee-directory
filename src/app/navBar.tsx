"use client"

import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonComp from '@/components/profile/button';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';

import { Sun } from "@deemlol/next-icons";
import { Settings } from "@deemlol/next-icons";
import { Search } from "@deemlol/next-icons";
import { Moon, Menu } from "@deemlol/next-icons";
import styles from './navBar.module.css';

import { searchQuery } from '../../firebase/employeeService';

function NavBar({onSearch, searchValue}) {
    const today = new Date();

    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();


    return (
        <div>
            <Navbar className={styles.navBar}>
              {/*Logo */}
                        <Image 
                            src="/logo2.png"
                            alt="logo"
                            width={180}
                            height={80}
                        />

              {/*---------------- Date / Day -------------------- 
                <Card className={styles.dateDay}>
                    <p>{`${date} / ${month} / ${year}`}</p>
                </Card>*/}

                {/*---------------- Search Bar -------------------- 
                <Search size={20}/>*/}

                <Form className={styles.form}>
                    
                    <Form.Control 
                        value={searchValue}
                        type="text"
                        placeholder="Search..."
                        onChange={onSearch}
                    />
                </Form>

                {/*<Button className={styles.button}><Search size={20} color="#FFF" /></Button>*/}

                {/*---------------- Buttons Container -------------------- */}

                <div className={styles.buttonsContainer}>

                    {/*---------------- Light / Dark Mode -------------------- 
                    <Button className={styles.button}><Sun size={20} color="#FFF" /> / <Moon size={20} color="#FFF"/></Button>*/}

                    {/*---------------- Menu Button -------------------- */}
                    <Button className={styles.button}><Menu size={20} color="#FFF" /></Button>

                    

                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;