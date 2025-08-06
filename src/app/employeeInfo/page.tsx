"use client";

import React, { useEffect, useState } from "react";
import employees from "@/Data/personnelData";
import AddUserForm from "@/components/profile/addUserForm";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import EditUserForm from "@/components/profile/editUserForm";
import DeleteUser from "@/components/profile/deleteUserForm";
import {
	addEmployee,
	getEmployees,
	isEmailOrIdTaken,
} from "../../../firebase/employeeService";

import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";

export default function EmployeeInfo() {
	const [personnel, setPersonnel] = useState([]);
	const [showAddUserForm, setShowAddUserForm] = useState(false);
	const [showEditUserForm, setShowEditUserForm] = useState(false);
	const [showDeleteUser, setShowDeleteUser] = useState(false);
	const [selectedEmployee, setSelectedEmployee] = useState(null);

	async function loadEmployees() {
		const data = await getEmployees();
		setPersonnel(data);
	}

	useEffect(() => {
		loadEmployees();
	}, []);

	/*------------------------- Handle Add User Function ----------------------------------*/
	// const handleAddUser = (newUser: any) => {
	// 	setPersonnel([...personnel, newUser]);
	// };
	const handleAddUser = async (newEmp: any) => {
		if (await isEmailOrIdTaken(newEmp.email, newEmp.employeeId)) {
			toast.error("Email or Employee ID already exists.");
			return;
		}
		await addEmployee(newEmp);
		loadEmployees();
	};

	const handleEditUser = (emp) => {
		setSelectedEmployee(emp);
		setShowEditUserForm(true);
	};

	return (
		<div>
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
				employee={selectedEmployee}
				onUpdateUser={loadEmployees}
			/>

			{/*------------------------- Delete User Form ----------------------------------*/}
			<DeleteUser
				show={showDeleteUser}
				onHide={() => setShowDeleteUser(false)}
			/>

			{/*------------------------- Employee Table ----------------------------------*/}

			<table id="employeeTable" className="table table-striped responsive">
				<thead>
					<tr>
						<th>Employee ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Location</th>
						<th>Department</th>
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
							<td>
								<Button onClick={() => handleEditUser(person)}>Edit</Button>
							</td>
							<td>
								<Button
									onClick={() => setShowDeleteUser(true)}
									variant="danger"
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
