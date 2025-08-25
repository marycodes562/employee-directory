"use client"

import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import locations from '@/Data/locationData';
import departments from '@/Data/departmentsData';
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';

import styles from "./sideFilter.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { findByCountry } from '../../../firebase/employeeService';


function SideFilter({ onCountryChange }) {

        const [location, setLocation] = useState(locations);
        const [department, setDepartments] = useState(departments);

        const [locationFilter, setlocationFilter] = useState("");
        const [departmentFilter, setdepartmentFilter] = useState("");

        const handleLocationChange = async(e: React.ChangeEvent<HTMLSelectElement>) => {
            e.preventDefault()
            const locationValue = e.target.value;
            try {
                toast.success("Location successfully selected");
                setlocationFilter(locationValue)
                await onCountryChange(locationValue);
            } catch(error) { 
                toast.error("Error selecting location")
            }
        }



    return (
        <div className={styles.dropdown}>
            <h5>Filter</h5>

            {/* Locations Filter */}
            
            <Form.Select aria-label="Default select example" onChange={handleLocationChange}>
                <option>Select Location</option>
                {location.map((loc, index) => (
                    <option key={loc.id} value={loc.name} className={styles.tableData} >{loc.name}</option>
                ))}
            </Form.Select>

             {/* Departments Filter */}
           
            <Form.Select aria-label="Default select example">
                <option>Select Department</option>
               {department.map((dep, index) => (
                    <option key={dep.id} className={styles.tableData}>{dep.name}</option>
                ))}
            </Form.Select>

            {/* Filter Option */}

            <div>{locationFilter}</div>

        </div>
    )
}

export default SideFilter;