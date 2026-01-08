"use client";

import React from "react";
import SideMenu from "@/components/components/sideMenu";
import styles from "./page.module.css";

export default function Announcements() {
  return (
    <div>
      <SideMenu />
      <div className={styles.announcementsPage}>
        <h1>Announcements</h1>
      </div>
    </div>
  );
}
