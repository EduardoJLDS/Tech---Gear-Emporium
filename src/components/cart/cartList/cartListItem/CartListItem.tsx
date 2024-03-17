import React from "react";
import styles from "./styles.module.scss";
import IconTrash from "../../../../../assets/icons-trash.svg";
import useCartListItem from "./useCartListItem";
import { ProductInCart } from "../../../../types";

type Props = {
  productInCart: ProductInCart;
};

export default function CartListItem({ productInCart }: Props) {
  const {
    updateProductInCartList,
    deleteProductInCart,
    isDisabled,
    renderTotalPrice
  } = useCartListItem({
    productInCart
  });
  return (
    <li className={styles["cart-items"]}>
      <img className={styles["cart-item-img"]} src={productInCart.image} />
      <div className={styles["cart-item-info"]}>
        <p className={styles["cart-item-name"]} aria-label="cart-list-name">
          {productInCart.name}
        </p>
        <div
          className={styles["cart-item-trash"]}
          onClick={() => deleteProductInCart(productInCart)}
          aria-label="cart-list-remove"
        >
          <IconTrash />
        </div>
        <div className={styles["cart-item-info-buy"]}>
          <p className={styles["cart-item-price"]}>
            {productInCart.quantity > 1 ? `${productInCart.cost}€` : ""}
          </p>
          <div className={styles["plus-minus-button"]}>
            <button
              className={styles["button-minus"]}
              onClick={() => {
                updateProductInCartList({ ...productInCart, quantity: -1 });
              }}
              aria-label="cart-list-decrease"
            >
              -
            </button>
            <p
              className={styles["quantity-per-productInCart"]}
              aria-label="cart-list-quantity"
              role="paragraph"
            >
              {productInCart.quantity}
            </p>
            <button
              className={styles["button-plus"]}
              disabled={isDisabled}
              onClick={() =>
                updateProductInCartList({ ...productInCart, quantity: 1 })
              }
              aria-label="cart-list-increase"
            >
              +
            </button>
          </div>
          <p className={styles["cart-item-total-item"]}>{renderTotalPrice()}</p>
        </div>
      </div>
    </li>
  );
}
