import React from "react";
import styles from "./GlowButton.module.scss";

type GlowButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function GlowButton({ children, onClick }: GlowButtonProps) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <span className={styles.glow} />
      <span className={styles.content}>
        {children}
        <span className={styles.arrow}>→</span>
      </span>
    </button>
  );
}
