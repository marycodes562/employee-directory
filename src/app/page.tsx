"use client";
import styles from "./page.module.css";

import EmployeeInfo from "./employeeInfo/page";
import Button from 'react-bootstrap/Button';
import { useRouter } from "next/router";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {

	return (
		<div className={styles.page}>

			<main className={styles.main}>
				<h3>Welcome!</h3>
				<p>Please select one of the options below</p>
				<Button>Login</Button><br /><br />
				<Button>Sign Up</Button>
			</main>
			<footer className={styles.footer}>
				
			</footer>

		</div>
	);
}
