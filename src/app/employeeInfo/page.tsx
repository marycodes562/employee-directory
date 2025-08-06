"use client"

import React, { useState, useEffect } from 'react';
import employees from '@/Data/personnelData';
import AddUserForm from '@/components/profile/addUserForm';
import EditUserForm from '@/components/profile/editUserForm';
import DeleteUser from '@/components/profile/deleteUserForm';
import NavBar from '../navBar';
import SideFilter from '@/components/profile/sideFilter';
import { getEmployees, addEmployees } from '../../../firebase/employeeService';

import Button from 'react-bootstrap/Button';
import styles from './page.module.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function EmployeeInfo() {

    const [personnel, setPersonnel] = useState([]);
    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [showEditUserForm, setShowEditUserForm] = useState(false);
    const [showDeleteUser, setShowDeleteUser] = useState(false);

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

    return (
        <div className={styles.container}>
            <div>
                <NavBar />
            </div>
            <div className={styles.header}>
                {/*------------------------- Employee List Header ----------------------------------*/}
                <h4>Employee List</h4>

                {/*------------------------- Add User Button ----------------------------------*/}
                <Button variant="primary" onClick={() => setShowAddUserForm(true)}>
                    Add New Employee
                </Button>
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
                    onHide={() => setShowEditUserForm(false)}
                />

                {/*------------------------- Delete User Form ----------------------------------*/}
                <DeleteUser
                    show={showDeleteUser}
                    onHide={() => setShowDeleteUser(false)}
                />

            <div className={styles.main}>
                <SideFilter />
                

                {/*------------------------- Employee Table ----------------------------------*/}

                <Table className={styles.table} responsive>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
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
                                <td>{person.employeeId}</td>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td>{person.email}</td>
                                <td>{person.location}</td>
                                <td>{person.department}</td>
                                <td><Button onClick={() => setShowEditUserForm(true)}>Edit</Button></td>
                                <td><Button onClick={() => setShowDeleteUser(true)} variant='danger'>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody> 
                </Table>
            </div>
        </div>
    )
}