"use client";

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./deleteUserForm.module.css";
import { deleteEmployee } from "../../../firebase/employeeService";
import toast from "react-hot-toast";

function DeleteUser({ show, onHide, employee, onDeleted }: any) {
	const handleDelete = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await deleteEmployee(employee.id); // Firestore doc id
			toast.success("Employee deleted successfully");
			onDeleted(); // refresh list
			onHide();
		} catch (err) {
			toast.error("Failed to delete employee");
		}
	};

	return (
		<div>
			<Modal
				className={styles.modal}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={onHide}
			>
				<Form onSubmit={handleDelete} className={styles.form}>
					<Modal.Header closeButton>Delete User</Modal.Header>
					<p>
						Are you sure you want to delete{" "}
						<strong>
							{employee?.firstName} {employee?.lastName}
						</strong>
						?
					</p>

					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={onHide}
							className={styles.button}
						>
							Close
						</Button>
						<Button variant="danger" type="submit">
							Delete
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</div>
	);
}

export default DeleteUser;
