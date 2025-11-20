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
                <li><img src="/icons8-home-24.png"/> Dashboard</li>
                <li><img src="/icons8-profile-24.png"/> Profile</li>
                <li><img src="/icons8-date-24.png"/> Calender</li>
                <li><img src="/icons8-document-24.png"/> Documents</li>  
              </ul>      
        </div>
    )
}