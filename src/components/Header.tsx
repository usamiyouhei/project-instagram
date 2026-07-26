import React from "react";
import styles from "@/styles/header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Next Instagram Apps
      </Link>
    </header>
  );
}
