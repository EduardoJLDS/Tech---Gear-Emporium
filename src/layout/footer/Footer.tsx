import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles["footer-text"]}>
          &copy; {new Date().getFullYear()} Tech & Gear Emporium. All rights
          reserved.
        </p>
        <nav className={styles["footer-nav"]}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
