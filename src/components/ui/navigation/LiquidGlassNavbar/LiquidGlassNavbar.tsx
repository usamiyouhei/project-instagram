"use client";
import React from "react";
import styles from "./LiquidGlassNavbar.module.scss";
import { div } from "framer-motion/client";

const navItems = ["Home", "Work", "About", "Contact"];

export default function LiquidGlassNavbar() {
  return (
    <div className={styles.navContent}>
      <nav className={styles.navbar}>
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
    </div>
  );
}
