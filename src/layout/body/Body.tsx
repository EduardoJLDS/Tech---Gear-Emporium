import React from "react";
import Products from "../../components/products/Products";
import styles from "./styles.module.scss";
import Toolbar from "../../components/toolbar/Toolbar";

export default function Body() {
  return (
    <main className={styles.mainContainer}>
      <Toolbar />
      <Products />
    </main>
  );
}
