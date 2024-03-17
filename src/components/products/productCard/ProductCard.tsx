import React from "react";
import styles from "./style.module.scss";
import "react-toastify/dist/ReactToastify.css";
import UseProductCard from "./useProductCard";
import { Product } from "../../../types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const {
    changeQuantity,
    selectedQuantity,
    isDisabledClass,
    isDisabled,
    updateChartList
  } = UseProductCard({ product });
  return (
    <div className={styles["div-content-product"]} data-testid="product-card">
      <img
        className={styles["img-product"]}
        src={product.image}
        alt={product.name}
      />
      <p className={styles["name-product"]}>{product.name}</p>
      <p className={styles["description-product"]}>{product.description}</p>
      <div className={styles["buy-content"]}>
        <span> {product.cost}€</span>
        <div className={styles["card-shop"]}>
          <select
            className={styles["select-many"]}
            onChange={(e) => {
              changeQuantity(parseInt(e.target.value));
            }}
            value={selectedQuantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            className={`${styles["button-add"]} ${isDisabledClass}`}
            disabled={isDisabled}
            onClick={updateChartList}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
