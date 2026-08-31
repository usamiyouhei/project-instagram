"use client";
import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

import styles from "./FloatingNavbar.module.scss";

const navItems = ["Home", "Work", "About", "Contact"];

export default function FloatingNavbar() {
  const [activeItem, setActiveItem] = useState("Home");
  return (
    <LayoutGroup>
      <motion.nav
        className={styles.navbar}
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item}
            type="button"
            className={`${styles.navItem} ${activeItem === item ? styles.active : ""}`}
            onClick={() => setActiveItem(item)}
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
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
          </motion.button>
        ))}
      </motion.nav>
    </LayoutGroup>
  );
}
