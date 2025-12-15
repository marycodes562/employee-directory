"use client";

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUserLoggedIn } from "../../../firebase/employeeService";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const loadUser = async() => {
      const userItem = await getUserLoggedIn();
      console.log('user item:', userItem)
      setUser(userItem[0]);
  }

  useEffect(() => {
    loadUser();
  }, [])

  return (
    <div>
      <Card className={styles.profileCard} style={{ width: "25rem" }}>
        <h2 className={styles.header}>Profile Page</h2>
        <img src="/profile.png" alt="Profile" className={styles.profileImage} />
        <div>
          {user && (
            <>
              <p><strong>First Name:</strong> {user.firstName}</p>
              <p><strong>Last Name:</strong> {user.lastName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </>
          )}
        </div>

        <Button variant="primary">Edit Profile</Button>
        <Button variant="secondary" onClick={() => router.push("/login")}>
          Logout
        </Button>
      </Card>
    </div>
  );
}
