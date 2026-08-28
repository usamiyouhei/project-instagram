import React from "react";
import styles from "./page.module.scss";
import MagneticButton from "@/components/ui/buttons/MagneticButton/MagneticButton";
import RippleButton from "@/components/ui/buttons/RippleButton";
import GlowButton from "@/components/ui/buttons/GlowButton/GlowButton";

export default function page() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <div className={styles.magnetic}>
          <p className={styles.label}>UI COMPONENT 01</p>

          <h1>Magnetic Button</h1>

          <p className={styles.discription}>
            Move your cursor over the button.
          </p>
          <MagneticButton>Expplore More</MagneticButton>
        </div>
        <div className={styles.ripple}></div>
        <p className={styles.label}>UI COMPONENT 02</p>

        <h1>Ripple Button</h1>

        <p className={styles.discription}>Move your cursor over the button.</p>
        <RippleButton>Ripple Button</RippleButton>
        <RippleButton variant="water">Water Ripple</RippleButton>
        <div className={styles.glow}></div>

        <p className={styles.label}>UI COMPONENT 03</p>

        <h1>Glow Button</h1>

        <p className={styles.discription}>Move your cursor over the button.</p>
        <GlowButton>Glow Button</GlowButton>
        {/* <RippleButton variant="water">Water Ripple</RippleButton> */}
      </div>
    </main>
  );
}
