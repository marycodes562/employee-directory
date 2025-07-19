"use client"

import React, { useState } from 'react';
import employees from '@/Data/personnelData';
import AddUserForm from '@/components/profile/addUserForm';

export default function EmployeeInfo() {

    const [personnel, setPersonnel] = useState(employees);

    const handleAddUser = (newUser: any) => {
        setPersonnel([...personnel, newUser]);
    }

    return (
        <div>
            <h1>Personnel Table</h1>
            <AddUserForm onAddUser={handleAddUser}/>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Location</th>
                        <th>Department</th>
                    </tr>
                </thead> 
                <tbody>
                    {employees.map((personnel, index) => (
                        <tr key={personnel.employeeId}>
                            <td>{personnel.employeeId}</td>
                            <td>{personnel.firstName}</td>
                            <td>{personnel.lastName}</td>
                            <td>{personnel.location}</td>
                            <td>{personnel.department}</td>
                        </tr>
                    ))}
                </tbody> 
            </table>
        </div>
    )
}