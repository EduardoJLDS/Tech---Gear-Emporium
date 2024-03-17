import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../../assets/logo.svg";
import CartToggle from "../../components/cartToggle/CartToggle";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles["logo-title-container"]}>
        <Logo />
        <h1>Tech & Gear Emporium</h1>
      </div>
      <CartToggle />
    </header>
  );
}
