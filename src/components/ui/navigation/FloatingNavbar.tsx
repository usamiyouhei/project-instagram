"use client";
import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

import styles from "./FloatingNavbar.module.scss";

const navItems = ["Home", "Work", "About", "Contact"];

export default function FloatingNavbar() {
  const [activeItem, setActiveItem] = useState("Home");
  return (
    <LayoutGroup>
      <nav className={styles.navbar}>
        {navItems.map((item) => (
          <button
            key={item}
            type="button"
            className={`${styles.navItem} ${activeItem === item ? styles.active : ""}`}
            onClick={() => setActiveItem(item)}
          >
            {activeItem === item && (
              <motion.span
                layoutId="active-pill"
                className={styles.activePill}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <span
              className={`${styles.label} ${
                activeItem === item ? styles.activeLabel : ""
              }`}
            >
              {item}
            </span>
          </button>
        ))}
      </nav>
    </LayoutGroup>
  );
}
