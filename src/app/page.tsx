"use client";
import styles from "./page.module.css";
import Image from "next/image";

import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <div className={styles.overlay}></div>

      <main className={styles.main}>
        {/*Logo */}
        <Image src="/logo2.png" alt="logo" width={310} height={120} />
        {/*--------- Slogan -------------- */}
        <p>Search, update, and manage employees in one place.</p>

        {/*--------- Login and Sign up buttons -------------- */}
        <div className={styles.buttonsContainer}>
          <Button
            className={styles.buttons}
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
          <Button
            className={styles.buttons}
            onClick={() => router.push("/signUp")}
          >
            Sign Up
          </Button>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
