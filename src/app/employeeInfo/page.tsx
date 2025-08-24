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
import { Edit3 } from "@deemlol/next-icons";
import { Trash2 } from "@deemlol/next-icons";
import { Plus } from "@deemlol/next-icons";
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

    const handleEditEmployee = async(user: any) => {
        const employee = await getEmployees();
    }

    return (
        <div className={styles.container}>
            <header>
                <NavBar />
            </header>
            <div className={styles.header}>
                {/*------------------------- Employee List Header ----------------------------------
                <h5>Employee List</h5>*/}

                {/*------------------------- Add Employee Button ----------------------------------*/}
                <Button variant="primary" onClick={() => setShowAddUserForm(true)}>
                    <Plus size={24} color="#FFFFFF" /> Add New Employee
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
                 {/* Side Filter */}
                <div className={styles.side}>
                    <SideFilter />
                </div>
                                

                {/*------------------------- Employee Table ----------------------------------*/}
                <div className={styles.table} >
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
                                <td><Button onClick={() => setShowEditUserForm(true)}><Edit3 size={20} color="#FFFFFF"/></Button></td>
                                <td><Button onClick={() => setShowDeleteUser(true)} variant='danger'><Trash2 size={20} color="#FFFFFF"/></Button></td>
                            </tr>
                        ))}
                    </tbody> 
                </Table>
                </div>
            </div>
        </div>
    )
}