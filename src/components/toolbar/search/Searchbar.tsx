import React from "react";
import styles from "./style.module.scss";
import useSearchbar from "./useSearchbar";

export default function Searchbar() {
  const { updateSearchQuery } = useSearchbar();
  return (
    <input
      className={styles["input"]}
      onChange={(e) => updateSearchQuery(e.currentTarget.value)}
      placeholder="Search"
      aria-label="products-search"
    />
  );
}
