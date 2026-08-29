"use client";
import React, { useState } from "react";
import styles from "./FloatingNavbar.module.scss";

const navItems = ["Home", "Work", "About", "Contact"];

export default function FloatingNavbar() {
  const [activeItem, setActiveItem] = useState("Home");
  return (
    <nav className={styles.navbar}>
      {navItems.map((item) => (
        <button
          key={item}
          type="button"
          className={`${styles.navItem} ${activeItem === item ? styles.active : ""}`}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
