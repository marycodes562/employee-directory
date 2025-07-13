import Image from "next/image";
import styles from "./page.module.css";
import SignUp from "./(auth)/signUp/page";
import LoginPage from "./(auth)/login/page";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<LoginPage />
			</main>
			<footer className={styles.footer}>
				
			</footer>
		</div>
	);
}
