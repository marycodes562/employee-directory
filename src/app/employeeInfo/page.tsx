"use client"

import React, { useState, useEffect } from 'react';
import employees from '@/Data/personnelData';
import AddUserForm from '@/components/profile/addUserForm';
import EditUserForm from '@/components/profile/editUserForm';
import DeleteUser from '@/components/profile/deleteUserForm';
import NavBar from '../navBar';
import SideFilter from '@/components/profile/sideFilter';
import { getEmployees, addEmployees, findByCountry } from '../../../firebase/employeeService';

import Button from 'react-bootstrap/Button';
import styles from './page.module.css';
import Table from 'react-bootstrap/Table';
import { Edit3 } from "@deemlol/next-icons";
import { Trash2 } from "@deemlol/next-icons";
import { Plus } from "@deemlol/next-icons";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function EmployeeInfo() {

    const [personnel, setPersonnel] = useState([{  
        employeeId: '',
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        department: ''
    }]);
    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [showEditUserForm, setShowEditUserForm] = useState(false);
    const [showDeleteUser, setShowDeleteUser] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [filteredLocations, setFilteredLocation] = useState([]);

    async function loadEmployees() {
         const data = await getEmployees();
         setPersonnel(data);
    }

    useEffect(() => {
        loadEmployees();
    }, [])

    /*------------------------- Handle Add User Function ----------------------------------*/
    const handleAddUser = async(newUser: any) => {
        //setPersonnel([...personnel, newUser]);
        await addEmployees(newUser);
        loadEmployees();
    }

    const handleEditEmployee = async(user: any) => {
        const employee = await getEmployees();
    }

    const handleCountryChange = async(country: any, department: any) => {
        const countries = await findByCountry(country, department);
        setFilteredLocation(countries);
        console.log(countries);
        return countries
    }

    const content = () => {
        
    if (filteredLocations.length > 0) {
        return (
            < div className={styles.table} >
                <Table responsive>
                    <thead>
                        <tr>
                            <th className={styles.personId}>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Department</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead> 
                    <tbody>
                        {filteredLocations.map((person, index) => (
                            <tr key={person.employeeId}>
                                <td className={styles.personId}>{person.employeeId}</td>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td>{person.email}</td>
                                <td>{person.location}</td>
                                <td>{person.department}</td>
                                <td><Button onClick={() => {setSelectedEmployee(person); setShowEditUserForm(true)}}><Edit3 size={20} color="#FFFFFF"/></Button></td>
                                <td><Button onClick={() => {setSelectedEmployee(person) ;setShowDeleteUser(true)}} variant='danger'><Trash2 size={20} color="#FFFFFF"/></Button></td>
                            </tr>
                        ))}
                    </tbody> 
                </Table>
                </div>
        )
    } else {
        return (
            < div className={styles.table} >
                <Table responsive>
                    <thead>
                        <tr>
                            <th className={styles.personId}>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Department</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead> 
                    <tbody>
                        {personnel.map((person, index) => (
                            <tr key={person.employeeId}>
                                <td className={styles.personId}>{person.employeeId}</td>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td>{person.email}</td>
                                <td>{person.location}</td>
                                <td>{person.department}</td>
                                <td><Button onClick={() => {setSelectedEmployee(person); setShowEditUserForm(true)}}><Edit3 size={20} color="#FFFFFF"/></Button></td>
                                <td><Button onClick={() => {setSelectedEmployee(person) ;setShowDeleteUser(true)}} variant='danger'><Trash2 size={20} color="#FFFFFF"/></Button></td>
                            </tr>
                        ))}
                    </tbody> 
                </Table>
                </div>
        )
    }

    }

    return (
        <div className={styles.container}>

            <div className={styles.headerContainer}>
                <NavBar />
            
                <div className={styles.header}>
                    {/*------------------------- Employee List Header ----------------------------------*/}

                    {/*------------------------- Add Employee Button ----------------------------------*/}
                    <Button className={styles.addEmployeeBtn} variant="primary" onClick={() => setShowAddUserForm(true)}>
                        
                        <Plus size={24} color="#FFFFFF" /> Add New Employee
                    </Button>
                </div>
            </div>

                {/*------------------------- Add User Form ----------------------------------*/}
                <AddUserForm 
                    onAddUser={handleAddUser}
                    show={showAddUserForm}
                    onHide={() => setShowAddUserForm(false)}
                />

                {/*------------------------- Edit User Form ----------------------------------*/}
                <EditUserForm 
                    show={showEditUserForm}
                    employee={selectedEmployee}
                    onAddUser={loadEmployees}
                    onHide={() => setShowEditUserForm(false)}
                />

                {/*------------------------- Delete User Form ----------------------------------*/}
                <DeleteUser
                    show={showDeleteUser}
                    onHide={() => setShowDeleteUser(false)}
                    employee={selectedEmployee}
                    onDeleted={loadEmployees}
                />

            <div className={styles.main}>
                 {/* Side Filter */}
                <div className={styles.side}>
                    <SideFilter 
                        onCountryChange={handleCountryChange}
                    />
                </div>
                                

                {/*------------------------- Employee Table ----------------------------------*/}
                
               {content()}
            </div>
                        
        </div>
    )
}