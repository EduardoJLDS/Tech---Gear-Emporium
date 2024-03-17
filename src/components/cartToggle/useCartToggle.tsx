import { useEffect } from "react";
import useShopStore from "../../store/useShopStore";
import styles from "./styles.module.scss";

const useCartToggle = () => {
  const updateShowCart = useShopStore((state) => state.updateShowCart);
  const shouldShowCart = useShopStore((state) => state.shouldShowCart);
  const hiddenCartClass = shouldShowCart
    ? ""
    : styles["display-cart-info-none"];
  useEffect(() => {
    if (shouldShowCart) {
      document.querySelector("body")?.classList.add("scroll-disabled");
    } else {
      document.querySelector("body")?.classList.remove("scroll-disabled");
    }
    return () => {
      document.querySelector("body")?.classList.remove("scroll-disabled");
    };
  }, [shouldShowCart]);
  return { updateShowCart, hiddenCartClass, shouldShowCart };
};

export default useCartToggle;
