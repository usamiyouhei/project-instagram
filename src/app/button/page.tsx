import React from "react";
import styles from "./page.module.scss";

export default function page() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.label}>UI COMPONENT 01</p>

        <h1>Magnetic Button</h1>

        <p className={styles.discription}>Move your cursor over the button.</p>
      </div>
    </main>
  );
}
