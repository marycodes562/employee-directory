"use client";
import styles from "./page.module.css";

import Button from 'react-bootstrap/Button';
import { useRouter } from "next/navigation";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {

	const router = useRouter();

	return (
		<div className={styles.page}>
			<div className={styles.overlay}></div>
			
			<main className={styles.main}>
				<h1>Welcome!</h1>
				<p>Search, update, and manage employees in one place.</p>
				<div className={styles.buttonsContainer}>
					<Button className={styles.buttons} onClick={() => router.push("/login")}>Login</Button>
					<Button className={styles.buttons} onClick={() => router.push("/signUp")}>Sign Up</Button>
				</div>
			</main>
			<footer className={styles.footer}>
				
			</footer>

		</div>
	);
}
