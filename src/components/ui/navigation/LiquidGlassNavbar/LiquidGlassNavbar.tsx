"use client";
import React from "react";
import styles from "./LiquidGlassNavbar.module.scss";

const navItems = ["Home", "Work", "About", "Contact"];

export default function LiquidGlassNavbar() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.glassLayer}>
        <div className={styles.content}>
          <a href="#" className={styles.logo}>
            USAMI
          </a>

          <div className={styles.menu}>
            {navItems.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
