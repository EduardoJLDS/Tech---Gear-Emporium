import useShopStore from "../../../store/useShopStore";
import { toast } from "react-toastify";

const useCartListButtons = () => {
  const cartlistadded = useShopStore((state) => state.cartList);
  const deleteCartList = useShopStore((state) => state.deleteCartList);

  const subTotal = () => {
    let subTotal: number = 0;
    cartlistadded.forEach((product) => {
      const productCost = product.cost * product.quantity;
      subTotal = parseFloat((subTotal += productCost).toFixed(2));
    });
    return subTotal;
  };

  const checkout = () => {
    if (cartlistadded.length > 0) {
      const timeout = new Promise((resolve) =>
        setTimeout(resolve, 3000)
      ).finally(() => deleteCartList());

      toast.promise(timeout, {
        pending: "Processing your purchase",
        success: "Purchase completed successfully👌"
      });
    }
  };
  return {
    subTotal,
    checkout,
    deleteCartList
  };
};

export default useCartListButtons;
