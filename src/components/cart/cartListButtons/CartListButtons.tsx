import React from "react";
import useCartListButtons from "./useCartListButtons";
import styles from "./styles.module.scss";

export default function CartListButtons() {
  const { subTotal, checkout, deleteCartList } = useCartListButtons();
  return (
    <>
      <div className={styles["total-cart-list-cost"]}>
        <p>SubTotal</p>
        <p aria-label="total-cost">{subTotal()}€</p>
      </div>
      <div className={styles["buttons-content"]}>
        <button
          className={styles["button-checkout"]}
          onClick={checkout}
          aria-label="checkout-button"
        >
          Checkout
        </button>
        <button
          className={styles["button-delete"]}
          onClick={deleteCartList}
          aria-label="delete-items"
        >
          Delete Items
        </button>
      </div>
    </>
  );
}
