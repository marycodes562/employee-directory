"use client"

import React from 'react';
import Styles from './sideMenu.module.css';

export default function SideMenu() {


    return (
        <div>
            <div className={Styles.sideMenucontainer}>
              <ul className={Styles.listContainer}>
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Employees</li>
                <li>Documents</li>  
              </ul>  
            </div>        
        </div>
    )
}