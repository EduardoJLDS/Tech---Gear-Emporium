import React from "react";
import useShopStore from "../../../store/useShopStore";
import CartListItem from "./cartListItem/CartListItem";
import styles from "./styles.module.scss";
import IconClose from "../../../../assets/icon-close.svg";

export default function CartList() {
  const cartlistadded = useShopStore((state) => state.cartList);
  const updateShowCart = useShopStore((state) => state.updateShowCart);
  return (
    <>
      <div className={styles["cart-close-icon-container"]}>
        <h1 className={styles["title-cart-menu"]}>Cart</h1>
        <button
          className={styles["cart-close-icon"]}
          onClick={() => updateShowCart(false)}
          aria-label="cart-toggle"
        >
          <IconClose />
        </button>
      </div>

      <ul style={{ margin: 0, padding: 0 }}>
        {cartlistadded.map((productInCart) => (
          <CartListItem productInCart={productInCart} key={productInCart.id} />
        ))}
      </ul>
    </>
  );
}
