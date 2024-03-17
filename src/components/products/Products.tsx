import React from "react";
import ProductCard from "./productCard/ProductCard";
import styles from "./styles.module.scss";
import UseProducts from "./useProducts";
import { Product } from "../../types";

export default function Products() {
  const { productsDisplay } = UseProducts();
  return (
    <div className={styles["products-container"]}>
      {productsDisplay.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
