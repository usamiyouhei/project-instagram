import React from "react";
import styles from "@/styles/header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Next Instagram Apps
      </Link>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/todo">Todo</Link>
        <Link href="/memo">Memo</Link>
        <Link href="/weather">Weather</Link>
      </nav>
    </header>
  );
}
