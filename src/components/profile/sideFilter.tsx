"use client"

import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import locations from '@/Data/locationData';
import departments from '@/Data/departmentsData';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown'

import styles from "./sideFilter.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function SideFilter() {

        const [location, setLocation] = useState(locations);
        const [department, setDepartments] = useState(departments);

        const [locationFilter, setlocationFilter] = useState([]);
        const [departmentFilter, setdepartmentFilter] = useState([]);


    return (
        <div className={styles.dropdown}>
            <h5>Filter</h5>

            {/* Locations Filter Dropdown */}
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Locations
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {location.map((loc, index) => (
                    <Dropdown.Item key={loc.id}><Card className={styles.tableData}>{loc.name}</Card></Dropdown.Item>
                ))}
                </Dropdown.Menu>
            </Dropdown>

             {/* Departments Filter Dropdown */}
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Departments
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {department.map((dep, index) => (
                    <Dropdown.Item key={dep.id}><Card className={styles.tableData}>{dep.name}</Card></Dropdown.Item>
                ))}
                </Dropdown.Menu>
            </Dropdown>

            {/* Filter Option */}

            <div></div>

        </div>
    )
}

export default SideFilter;