"use client";

import React, { useState, useEffect } from "react";
import AddUserForm from "@/components/profile/addUserForm";
import EditUserForm from "@/components/profile/editUserForm";
import DeleteUser from "@/components/profile/deleteUserForm";
import NavBar from "../navBar";
import SideFilter from "@/components/profile/sideFilter";
import {
	getEmployees,
	addEmployee,
	findByCountry,
} from "../../../firebase/employeeService";

import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Table from "react-bootstrap/Table";
import { Edit3 } from "@deemlol/next-icons";
import { Trash2 } from "@deemlol/next-icons";
import { Plus } from "@deemlol/next-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";

const Employee = [
	{
		firstName: "",
		lastName: "",
		email: "",
		location: "",
		department: "",
	},
];

export default function EmployeeInfo() {
	const [personnel, setPersonnel] = useState(Employee);
	const [showAddUserForm, setShowAddUserForm] = useState(false);
	const [showEditUserForm, setShowEditUserForm] = useState(false);
	const [showDeleteUser, setShowDeleteUser] = useState(false);

	const [selectedEmployee, setSelectedEmployee] =
		useState<typeof Employee>(Employee);

	async function loadEmployees() {
		const data = await getEmployees();
		setPersonnel(data);
	}

	useEffect(() => {
		loadEmployees();
	}, []);

	/*------------------------- Handle Add User Function ----------------------------------*/
	const handleAddUser = async (newUser: typeof personnel) => {
		//setPersonnel([...personnel, newUser]);
		await addEmployee(newUser);
		toast.success("Employee added successfully.");
		loadEmployees();
	};

	// const handleEditEmployee = async(user: any) => {
	//     const employee = await getEmployees();
	// }

	const handleCountryChange = async (country: any, department: any) => {
		const countries = await findByCountry(country, department);

		if ((country || department) && countries.length === 0) {
			toast.error("No employees found for the selected filter");
		}

		// setFilteredLocation(countries);
		setPersonnel(countries);
		console.log(countries);
		return countries;
	};

	const content = () => {
		if (personnel.length > 0) {
			return (
				<div className={styles.table}>
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
								<tr key={index}>
									{/* <td className={styles.personId}>{person.employeeId}</td> */}
									<td>{person.firstName}</td>
									<td>{person.lastName}</td>
									<td>{person.email}</td>
									<td>{person.location}</td>
									<td>{person.department}</td>
									<td>
										<Button
											onClick={() => {
												setSelectedEmployee(person);
												setShowEditUserForm(true);
											}}
										>
											<Edit3 size={20} color="#FFFFFF" />
										</Button>
									</td>
									<td>
										<Button
											onClick={() => {
												setSelectedEmployee(person);
												setShowDeleteUser(true);
											}}
											variant="danger"
										>
											<Trash2 size={20} color="#FFFFFF" />
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			);
		} else {
			return (
				<p>
					No employees found. Please adjust your filter or add new employees.
				</p>
			);
		}
	};

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
				employee={selectedEmployee}
				onUpdateUser={loadEmployees}
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
					<SideFilter onCountryChange={handleCountryChange} />
				</div>

				{/*------------------------- Employee Table ----------------------------------*/}

				{content()}
			</div>
		</div>
	);
}
