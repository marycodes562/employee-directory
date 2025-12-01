"use client";

import React, { useState } from "react";
import Styles from "./sideMenu.module.css";
import Link from "next/link";

export default function SideMenu() {
  const [isActive, setIsActive] = useState();


  return (
    <div className={Styles.sideMenucontainer}>
      {/*Logo */}

      <img src="/logo3nobg.png" className={Styles.logo} />

      <ul className={Styles.listContainer}>
        <li className="nav-item active">
          <img src="/icons8-home-24.png" />
          <Link href="/employeeInfo"> Dashboard</Link>
        </li>
        <li className="nav-item">
          <img src="/icons8-profile-24.png" />
          <Link href="/profile"> Profile</Link>
        </li>
        <li className="nav-item">
          <img src="/icons8-date-24.png" />
          <Link href="/calender"> Calender</Link>
        </li>
        <li className="nav-item">
          <img src="/icons8-document-24.png" />
          <Link href="/documents"> Documents</Link>
        </li>
      </ul>
    </div>
  );
}
