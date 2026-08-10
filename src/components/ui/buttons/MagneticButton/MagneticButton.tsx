"use client";
import React, { PointerEvent, useRef } from "react";

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

  const handlePointMove = (event: PointerEvent<HTMLButtonElement>) => {
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

  const handlePointLeave = () => {
    const button = buttonRef.current;

    if (!button) return;

    button.style.transform = "translate(0,0)";
  };
  return <div></div>;
}
