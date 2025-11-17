"use client"

import React from 'react';
import Styles from './sideMenu.module.css';
import Image from 'next/image';

export default function SideMenu() {


    return (
        <div className={Styles.sideMenucontainer}>
           {/*Logo */}

              <img src='/logo3nobg.png' className={Styles.logo}/>
            
              <ul className={Styles.listContainer}>
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Employees</li>
                <li>Calender</li>
                <li>Documents</li>  
              </ul>      
        </div>
    )
}