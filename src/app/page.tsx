"use client";
import styles from "./page.module.css";

import EmployeeInfo from "./employeeInfo/page";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<EmployeeInfo />
			</main>
			<footer className={styles.footer}></footer>
		</div>
	);
}
