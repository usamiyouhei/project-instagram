"use client";
import React, { useState } from "react";
import styles from "./home.module.scss";
import { CountHistory } from "@/types/counter";

export default function Home() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(30);
  const [history, setHistory] = useState<CountHistory[]>([]);
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <div className={styles.brand}>
            <span className={styles.brandIcon}>+</span>
            <h1>FOCUS COUNTER</h1>
          </div>

          <p>Stay focused. Keep Counting. Achieve more.</p>
        </div>

        <button type="button" className={styles.themeButton}>
          Light
          <span>|</span>
          Dark
        </button>
      </header>

      <div className={styles.dashboard}>
        <section className={styles.controlPannel}>
          <div className={styles.sectionLabel}>
            <span />
            <p>CURRENT COUNT</p>
          </div>
        </section>
      </div>
    </main>
  );
}
