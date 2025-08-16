"use client";
import styles from "./page.module.css";

import EmployeeInfo from "./employeeInfo/page";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<EmployeeInfo />
		</div>
	);
}
