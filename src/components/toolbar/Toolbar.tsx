import React from "react";
import styles from "./style.module.scss";
import Searchbar from "./search/Searchbar";
import SortBy from "./sortBy/SortBy";

export default function Toolbar() {
  return (
    <div className={styles["search-sort-content"]}>
      <Searchbar />
      <SortBy />
    </div>
  );
}
