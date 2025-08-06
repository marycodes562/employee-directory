"use client";

import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import styles from "./editUserForm.module.css";

import locations from "@/Data/locationData";
import departments from "@/Data/departmentsData";
import { updateEmployee } from "../../../firebase/employeeService";
import toast from "react-hot-toast";

function EditUserForm({ show, onHide, employee, onUpdateUser }: any) {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		location: "",
		department: "",
	});

	useEffect(() => {
		if (employee) {
			setFormData({
				firstName: employee.firstName,
				lastName: employee.lastName,
				email: employee.email,
				location: employee.location,
				department: employee.department,
			});
		}
	}, [employee]);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			await updateEmployee(employee.id, formData);
			onUpdateUser();
			onHide();
			toast.success("Employee details updated successfully.");
		} catch (err) {
			console.error("Error updating user:", err);
		}
	};

	return (
		<div>
			<Modal
				show={show}
				onHide={onHide}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Edit Employee
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						{/*------------------------- First Name ----------------------------------*/}
						<FloatingLabel
							controlId="floatingInput"
							label="First Name"
							className="mb-1"
						>
							<Form.Control
								type="text"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								required
							/>
						</FloatingLabel>
						<br />

						{/*------------------------- Last Name ----------------------------------*/}
						<FloatingLabel
							controlId="floatingInput"
							label="Last Name"
							className="mb-1"
						>
							<Form.Control
								type="text"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								required
							/>
						</FloatingLabel>
						<br />

						{/*------------------------- Email ----------------------------------*/}
						<FloatingLabel
							controlId="floatingEmail"
							label="Email"
							className="mb-1"
						>
							<Form.Control
								type="text"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</FloatingLabel>
						<br />

						{/*------------------------- Location ----------------------------------*/}
						<Form.Select value="{formData.location}">
							<option>Location</option>
							{locations.map((loc) => (
								<option key={loc.id} value={loc.name}>
									{loc.name}
								</option>
							))}
						</Form.Select>
						<Form.Select
							name="location"
							value={formData.location}
							onChange={handleChange}
						>
							<option>Location</option>
							{locations.map((loc) => (
								<option key={loc.id} value={loc.name}>
									{loc.name}
								</option>
							))}
						</Form.Select>

						<br />

						{/*------------------------- Department ----------------------------------*/}
						<Form.Select
							name="department"
							value={formData.department}
							onChange={handleChange}
						>
							<option>Department</option>
							{departments.map((dep) => (
								<option key={dep.id} value={dep.name}>
									{dep.name}
								</option>
							))}
						</Form.Select>

						<br />

						<Modal.Footer>
							<div className={styles.buttonsContainer}>
								{/*------------------------- Close Button ----------------------------------*/}
								<Button
									variant="secondary"
									onClick={onHide}
									className={styles.button}
								>
									Close
								</Button>
								{/*------------------------- Add User Button ----------------------------------*/}
								<Button type="submit">Save Changes</Button>
							</div>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default EditUserForm;
