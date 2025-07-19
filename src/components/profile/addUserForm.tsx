"use client";

import React, { useState } from 'react';

export default function AddUserForm({onAddUser}: any) {
    const [formData, setFormData] = useState({
        employeeId: '',
        firstName: '',
        lastName: '',
        location: '',
        department: ''
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Here you would typically send the formData to your backend or API
        console.log("Form submitted:", formData);
        onAddUser(formData); // Call the parent function to add the user
        
        //Reset the form after submission
        setFormData({
            employeeId: '',
            firstName: '',
            lastName: '',
            location: '',
            department: ''
        });
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add New User</h2>
                <label>
                    Employee ID:
                    <input
                        type="text"
                        value={formData.employeeId}
                        onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                        required
                    />
                </label>
                <br />
                <label>
                    First Name:
                    <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Location:
                    <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Department:
                    <input
                        type="text"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    />
                </label>
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}