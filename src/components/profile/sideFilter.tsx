"use client"

import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import locations from '@/Data/locationData';
import departments from '@/Data/departmentsData';
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/Button';

import styles from "./sideFilter.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function SideFilter({ onCountryChange } : any) {

        const [location, setLocation] = useState(locations);
        const [department, setDepartments] = useState(departments);

        const [locationFilter, setlocationFilter] = useState("");
        const [departmentFilter, setdepartmentFilter] = useState("");

        /* Location Change Function */

        const handleLocationChange = async(e: React.ChangeEvent<HTMLSelectElement>) => {
            e.preventDefault()
            const locationValue = e.target.value;
            try {
                toast.success("Location successfully selected");
                setlocationFilter(locationValue)
                await onCountryChange(locationValue, departmentFilter);
            } catch(error) { 
                toast.error("Error selecting location")
            }
        }

        /* Department Change Function */

        const handleDepartmentChange = async(e: React.ChangeEvent<HTMLSelectElement>) => {
            e.preventDefault()
            const departmentValue = e.target.value;
            try {
                toast.success("Department selected successfully");
                setdepartmentFilter(departmentValue);
                await onCountryChange(locationFilter, departmentValue);
            } catch(error) {
                toast.error("Error selecting department");
            }
        }

        /* Clear Filter Function */
        const clearFilter = () => {
            setlocationFilter("");
            setdepartmentFilter("");
            onCountryChange("", "");
        }

    return (
        <div className={styles.dropdown}>
            <h5>Filter</h5>

            {/* Locations Filter */}
            
            <Form.Select aria-label="Default select example" onChange={handleLocationChange}>
                <option value="">Select Location</option>
                {location.map((loc, index) => (
                    <option key={loc.id} value={loc.name} className={styles.tableData} >{loc.name}</option>
                ))}
            </Form.Select>

             {/* Departments Filter */}
           
            <Form.Select aria-label="Default select example" onChange={handleDepartmentChange}>
                <option value="">Select Department</option>
               {department.map((dep, index) => (
                    <option key={dep.id} value={dep.name} className={styles.tableData}>{dep.name}</option>
                ))}
            </Form.Select>

            {/* Filter Option */}

            <Button className={styles.button} onClick={clearFilter}>Clear</Button>

 

        </div>
    )
}

export default SideFilter;