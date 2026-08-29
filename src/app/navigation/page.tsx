import React from "react";
import styles from "./page.module.scss";
import FloatingNavbar from "@/components/ui/navigation/FloatingNavbar";

export default function page() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.label}>UI COMPONENT 02</p>

        <h1>Navigation bar</h1>

        <p className={styles.discription}>
          Move your cursor over the navigation button.
        </p>
        <FloatingNavbar />
      </div>
    </main>
  );
}
