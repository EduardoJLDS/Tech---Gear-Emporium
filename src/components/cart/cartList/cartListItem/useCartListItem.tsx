import useShopStore from "../../../../store/useShopStore";
import { ProductInCart } from "../../../../types";

type Props = {
  productInCart: ProductInCart;
};

const useCartListItem = ({ productInCart }: Props) => {
  const updateProductInCartList = useShopStore(
    (state) => state.updateProductInCartList
  );
  const deleteProductInCart = useShopStore(
    (state) => state.deleteProductInCart
  );
  const isDisabled = productInCart && productInCart.quantity >= 10;

  const renderTotalPrice = () => {
    return `${parseFloat(
      (productInCart.cost * productInCart.quantity).toFixed(2)
    )}€`;
  };

  return {
    updateProductInCartList,
    deleteProductInCart,
    isDisabled,
    renderTotalPrice
  };
};

export default useCartListItem;
