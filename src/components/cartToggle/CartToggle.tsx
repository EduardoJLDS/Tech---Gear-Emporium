import React from "react";
import Cart from "../cart/Cart";
import styles from "./styles.module.scss";
import useCartMenu from "./useCartToggle";
import IconCart from "../../../assets/icon-cart.svg";

export default function CartToggle() {
  const { updateShowCart, hiddenCartClass, shouldShowCart } = useCartMenu();
  return (
    <>
      <div
        className={styles["icon-car-shop"]}
        onClick={() => updateShowCart(true)}
      >
        <IconCart />
      </div>
      <div className={`${styles["cart-info-content"]} ${hiddenCartClass}`}>
        <Cart />
      </div>
      {shouldShowCart ? (
        <div
          className={styles.blackdrop}
          onClick={() => updateShowCart(false)}
        ></div>
      ) : null}
    </>
  );
}
