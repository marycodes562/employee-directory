"use client"

import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import locations from '@/Data/locationData';
import Card from 'react-bootstrap/Card';

import styles from "./sideFilter.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function SideFilter() {

        const [location, setLocation] = useState(locations);


    return (
        <div className={styles.list}>
            <h5>Locations</h5>
            <ListGroup className={styles.list}>
                {location.map((loc, index) => (
                    <ListGroup.Item action  key={loc.id}><Card className={styles.tableData}>{loc.name}</Card></ListGroup.Item>
                ))}
            </ListGroup>

        </div>
    )
}

export default SideFilter;