import { useState } from "react";
import { toast } from "react-toastify";
import useShopStore from "../../../store/useShopStore";

import styles from "./style.module.scss";
import { Product } from "../../../types";
type Props = {
  product: Product;
};
const UseProductCard = ({ product }: Props) => {
  const addToCartList = useShopStore((state) => state.updateProductInCartList);
  const cartList = useShopStore((state) => state.cartList);
  const productCart = cartList.find(
    (cartInProduct) => cartInProduct.id === product.id
  );
  const isOverTenProducts = productCart && productCart.quantity >= 10;
  const isDisabled = product.validityDate < new Date() || isOverTenProducts;
  const isDisabledClass = isDisabled ? styles.disabled : "";
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const message =
    selectedQuantity > 1
      ? "Your products has been successfully added to the cart."
      : "Your product has been successfully added to the cart.";
  const changeQuantity = (value: number) => {
    const quantity = value;
    setSelectedQuantity(quantity);
  };

  const updateChartList = () => {
    addToCartList({ ...product, quantity: selectedQuantity });

    toast.success(
      `${message}`,

      {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light"
      }
    );
  };
  return {
    changeQuantity,
    selectedQuantity,
    isDisabledClass,
    isDisabled,
    updateChartList
  };
};

export default UseProductCard;
