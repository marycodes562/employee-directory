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
import { FloatingLabel, Form } from "react-bootstrap";
import ButtonComp from "@/components/components/button";
import Calender from "../calender/page";

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
                {/* User Avatar Section */}
                <div>
                  <UserAvatar
                    alt="User profile image"
                    user={user}
                    avatarStyle={{ width: 145, height: 145 }}
                  />
                  <br />
                  {/* User Information Section */}
                  <h2 className={styles.name}>
                    {user.firstName} {user.lastName}
                  </h2>

                  <span className={styles.roleBadge}>{user.role}</span>
                </div>
                <br />
                <br />

                <div className={styles.profileText}>
                  {/* Form displaying user details */}
                  <div className={styles.formContainer}>
                    <form>
                      {/* First Name Field */}
                      <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          value={user.firstName}
                          className={styles.input}
                          onChange={(e) => e.target.value}
                        />
                      </FloatingLabel>

                      {/* Last Name Field */}
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                      >
                        <Form.Control type="text" value={user.lastName} />
                      </FloatingLabel>

                      {/* Email Field */}
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                      >
                        <Form.Control type="text" value={user.email} />
                      </FloatingLabel>

                      {/* Role Field */}
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Role"
                        className="mb-3"
                      >
                        <Form.Control type="text" value={user.role} />
                      </FloatingLabel>
                    </form>
                  </div>

                  <div className={styles.meta}>
                    <span>Last login: 2 days ago</span>
                    <span>Status: Active</span>
                  </div>
                  <br />
                  {/* Action Buttons */}
                  <div className={styles.buttonGroup}>
                    {/* Close Button */}
                    <ButtonComp
                      text="Close"
                      onClick={() => router.push("/profile")}
                      style={{
                        width: "auto",
                        color: "#fff",
                        background: "grey",
                        marginRight: "0.5rem",
                      }}
                    />
                    {/* Edit Profile Button */}
                    <ButtonComp
                      text="Update"
                      style={{
                        width: "auto",
                        color: "#fff",
                        background: "linear-gradient(135deg, #6fc7c2, #a185ff)",
                      }}
                      onClick={() => router.push("/profile/editProfile")}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className={styles.calendarContainer}>
        <Calender />
      </div>
    </div>
  );
}
