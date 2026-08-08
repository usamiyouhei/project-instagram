"use client";
import React, { useState } from "react";
import styles from "./home.module.scss";
import { CountHistory } from "@/types/counter";
import { Minus, Pencil, Plus } from "lucide-react";

const INITIAL_COUNT = 0;
const INITIAL_GOAL = 30;

export default function Home() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(30);
  const [history, setHistory] = useState<CountHistory[]>([]);

  const progress =
    goal > 0 ? Math.min(Math.round((count / goal) * 100), 100) : 0;

  const addHistory = (nextCount: number) => {
    const newHistory: CountHistory = {
      id: crypto.randomUUID(),
      value: nextCount,
      createdAt: new Date().toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setHistory((prevHistory) => [newHistory, ...prevHistory].slice(0, 6));
  };

  const updateCount = (amount: number) => {
    setCount((prevCount) => {
      const nextCount = Math.max(prevCount + amount, 0);
      addHistory(nextCount);
      return nextCount;
    });
  };

  const resetCount = () => {
    setCount(INITIAL_COUNT);
    setHistory([]);
  };

  const changeGoal = () => {
    const input = window.prompt("Enter your new goal", String(goal));

    if (!input) {
      return;
    }

    const nextGoal = Number(input);
    if (!Number.isInteger(nextGoal) || nextGoal <= 0) {
      window.alert("Please enter a positive whole number.");
      return;
    }

    setGoal(nextGoal);
  };

  const getProgressMessage = () => {
    if (count >= goal) {
      return "Goal achived!";
    }

    if (progress >= 75) {
      return "Almost there!";
    }

    if (progress >= 50) {
      return "You're doing great!";
    }

    if (progress > 0) {
      return "Keep going!";
    }

    return "Start counting!";
  };

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

          <div className={styles.counterArea}>
            <button
              type="button"
              className={styles.roundButton}
              aria-label="Decrease count"
              onClick={() => updateCount(-1)}
              disabled={count === 0}
            >
              <Minus />
            </button>

            <strong className={styles.count}>{count}</strong>

            <button
              className={`${styles.roundButton} ${styles.primaryButton}`}
              type="button"
              aria-label="Increase count"
              onClick={() => updateCount(1)}
            >
              <Plus />
            </button>
          </div>

          <button
            className={styles.goalButton}
            type="button"
            onClick={changeGoal}
          >
            GOAL:<strong>{goal}</strong>
            <Pencil size={16} />
          </button>

          <section className={styles.progressCard}>
            <div className={styles.progressHeader}>
              <strong>{progress}%</strong>
              <span>
                {count}/{goal}
              </span>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
