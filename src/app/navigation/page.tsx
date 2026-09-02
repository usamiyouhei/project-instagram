import React from "react";
import styles from "./page.module.scss";
import LiquidGlassNavbar from "@/components/ui/navigation/LiquidGlassNavbar/LiquidGlassNavbar";
import FloatingNavbar from "@/components/ui/navigation/FloatingNavbar/FloatingNavbar";

export default function page() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.label}>UI COMPONENT 02</p>

        <div className={styles.floating}>
          <h1>Navigation bar 1</h1>

          <p className={styles.description}>
            Move your cursor over the navigation button.
          </p>
          <FloatingNavbar />
        </div>

        <div className={styles.liquid}>
          <LiquidGlassNavbar />
        </div>
      </div>
    </main>
  );
}
