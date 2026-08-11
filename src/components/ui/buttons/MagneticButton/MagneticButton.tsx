"use client";
import React, { PointerEvent, useRef } from "react";
import styles from "./MagneticButton.module.scss";

type MagneticButtonProps = {
  children: React.ReactNode;
  strength?: number;
  onClick?: () => void;
};

export default function MagneticButton({
  children,
  strength = 0.25,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distanceX = event.clientX - buttonCenterX;
    const distanceY = event.clientY - buttonCenterY;

    button.style.transform = `
    translate(
      ${distanceX * strength}px,
      ${distanceY * strength}px
    )
    `;
  };

  const handlePointerLeave = () => {
    const button = buttonRef.current;

    if (!button) return;

    button.style.transform = "translate(0,0)";
  };
  return (
    <button
      ref={buttonRef}
      type="button"
      className={styles.button}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
    >
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </button>
  );
}
