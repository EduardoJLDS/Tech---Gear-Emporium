import React from "react";
import CartList from "./cartList/CartList";
import CartListButtons from "../cart/cartListButtons/CartListButtons";

export default function Cart() {
  return (
    <>
      <CartList />
      <CartListButtons />
    </>
  );
}
