'use client'

import React from 'react';
import Styles from './dashboardStats.module.css';


export default function DashboardStats() {


    return (
        <div className={Styles.dashContainer}>
            <div className={Styles.employees}>
                <p>10</p>
                <p>Employees</p>
            </div>
            <div className={Styles.departments}>
                <p>12</p>
                <p>Departments</p>
            </div>
            <div className={Styles.locations}>
                <p>20</p>
                <p>Locations</p>
            </div>
        </div>
    )
}