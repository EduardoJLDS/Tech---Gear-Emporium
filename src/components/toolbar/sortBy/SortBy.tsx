import React from "react";
import styles from "./style.module.scss";
import useSortBy from "./useSortBy";

export default function ShortBy() {
  const { changeSort } = useSortBy();
  return (
    <select
      className={styles["select"]}
      name="SortBy"
      aria-label="SortBy"
      onChange={changeSort}
    >
      <option value="name asc">Name A-Z</option>
      <option value="name desc">Name Z-A</option>
      <option value="description asc">Description A-Z</option>
      <option value="description desc">Description Z-A</option>
    </select>
  );
}
