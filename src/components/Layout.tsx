import React from "react";
import Header from "./Header";
import styles from "@/styles/layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
