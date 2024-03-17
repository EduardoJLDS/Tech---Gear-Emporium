import products from "../data/products";
import { create } from "zustand";
import { Product, SortByForProducts, OrderBy, ProductInCart } from "../types";

type ShopState = {
  products: Product[];
  searchQuery: string;
  sortProduct: SortByForProducts;
  orderProduct: OrderBy;
  shouldShowCart: boolean;
  cartList: ProductInCart[];
};

type Actions = {
  updateSearchQuery: (search: ShopState["searchQuery"]) => void;
  updateSortProduct: (sort: ShopState["sortProduct"]) => void;
  updateOrderProduct: (sort: ShopState["orderProduct"]) => void;
  updateShowCart: (isShowCart: ShopState["shouldShowCart"]) => void;
  updateProductInCartList: (product: ProductInCart) => void;
  deleteCartList: () => void;
  deleteProductInCart: (product: ProductInCart) => void;
};

const useShopStore = create<ShopState & Actions>((set) => ({
  products: products,
  searchQuery: "",
  sortProduct: "name",
  orderProduct: "asc",
  shouldShowCart: false,
  updateShowCart: (shouldShowCart) =>
    set(() => ({ shouldShowCart: shouldShowCart })),
  updateSortProduct: (sortProduct) => set(() => ({ sortProduct: sortProduct })),
  updateOrderProduct: (orderProduct) =>
    set(() => ({ orderProduct: orderProduct })),
  updateSearchQuery: (searchQuery) => set(() => ({ searchQuery: searchQuery })),
  cartList: [],
  updateProductInCartList: (product) =>
    set((state) => {
      const { cartList } = state;
      const newCartList = [...cartList];
      const indexOfProductInCart = newCartList.findIndex(
        (productInCart) => productInCart.id === product.id
      );
      if (indexOfProductInCart >= 0) {
        const productInCart = newCartList[indexOfProductInCart];
        productInCart.quantity += product.quantity;
        if (productInCart.quantity <= 0) {
          newCartList.splice(indexOfProductInCart, 1);
        }
      } else {
        newCartList.push(product);
      }
      return {
        cartList: newCartList
      };
    }),
  deleteCartList: () => set(() => ({ cartList: [] })),
  deleteProductInCart: (product) =>
    set((state) => {
      const { cartList } = state;
      const newCartList = [...cartList];
      const indexOfProductInCart = newCartList.findIndex(
        (productInCart) => productInCart.id === product.id
      );
      if (indexOfProductInCart >= 0) {
        newCartList.splice(indexOfProductInCart, 1);
      }
      return {
        cartList: newCartList
      };
    })
}));

export default useShopStore;
