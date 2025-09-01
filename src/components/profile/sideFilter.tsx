"use client";

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import locations from "@/Data/locationData";
import departments from "@/Data/departmentsData";
// import Card from 'react-bootstrap/Card';
import toast from "react-hot-toast";

import styles from "./sideFilter.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function SideFilter({ onCountryChange }) {
	// const [location, setLocation] = useState(locations);
	// const [department, setDepartments] = useState(departments);

	const [locationFilter, setlocationFilter] = useState("");
	const [departmentFilter, setdepartmentFilter] = useState("");

	const handleLocationChange = async (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		e.preventDefault();
		const locationValue = e.target.value;
		try {
			toast.success("Location successfully selected");
			setlocationFilter(locationValue);
			await onCountryChange(locationValue, departmentFilter);
		} catch (error) {
			toast.error("Error selecting location");
		}
	};

	const handleDepartmentChange = async (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		e.preventDefault();
		const departmentValue = e.target.value;
		try {
			toast.success("Department selected successfully");
			setdepartmentFilter(departmentValue);
			await onCountryChange(locationFilter, departmentValue);
		} catch (error) {
			toast.error("Error selecting department");
		}
	};

	return (
		<div className={styles.dropdown}>
			<h5>Filter</h5>

			{/* Locations Filter */}

			<Form.Select
				aria-label="Default select example"
				onChange={handleLocationChange}
				value={locationFilter}
			>
				<option value="">Select Location</option>
				{locations.map((loc, index) => (
					<option key={loc.id} value={loc.name} className={styles.tableData}>
						{loc.name}
					</option>
				))}
			</Form.Select>

			{/* Departments Filter */}

			<Form.Select
				aria-label="Default select example"
				onChange={handleDepartmentChange}
				value={departmentFilter}
			>
				<option value="">Select Department</option>
				{departments.map((dep, index) => (
					<option key={dep.id} value={dep.name} className={styles.tableData}>
						{dep.name}
					</option>
				))}
			</Form.Select>

			{/* Filter Option */}

			<div>{locationFilter}</div>

			<div>{departmentFilter}</div>

			<Button
				variant="primary"
				onClick={() => {
					setdepartmentFilter("");
					setlocationFilter("");
					onCountryChange("", "");
				}}
			>
				Clear Filter
			</Button>
		</div>
	);
}

export default SideFilter;
