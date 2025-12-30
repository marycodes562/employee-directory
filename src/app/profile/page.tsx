"use client";

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUserLoggedIn } from "../../../firebase/employeeService";
import UserAvatar from "@/components/components/userAvatar";
import SideMenu from "@/components/components/sideMenu";
import Loading from "@/components/components/loading";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async () => {
    const userItem = await getUserLoggedIn();
    console.log("user item:", userItem);
    setUser(userItem[0]);
    if (!userItem) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className={styles.profilePage}>
      <SideMenu />
      <div className={styles.profileCard}>
        <div>
          {user ? (
            <>
              <div className={styles.profileContent}>
                <UserAvatar
                  alt="User profile image"
                  user={user}
                  avatarStyle={{ width: 120, height: 120 }}
                />
                <br />
                <div className={styles.profileText}> 
                  <p>
                    <strong>First Name:</strong> {user.firstName}
                  </p>
                  <p>
                    <strong>Last Name:</strong> {user.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Role:</strong> {user.role}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div><br />

        <Button variant="primary">Edit Profile</Button><br />
        <Button variant="secondary" onClick={() => router.push("/login")}>
          Logout
        </Button>
      </div>
    </div>
  );
}
