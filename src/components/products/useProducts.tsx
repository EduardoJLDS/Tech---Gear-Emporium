import useShopStore from "../../store/useShopStore";
import { Product, SortByForProducts, OrderBy } from "../../types";

const useProducts = () => {
  const order = useShopStore((state) => state.orderProduct);
  const sortProducts = (
    products: Product[],
    property: SortByForProducts,
    order: OrderBy
  ) => {
    if (order === "asc") {
      return products.sort((a, b) => a[property].localeCompare(b[property]));
    } else if (order === "desc") {
      return products.sort((b, a) => a[property].localeCompare(b[property]));
    }
    return products;
  };
  const sortProduct = useShopStore((state) => state.sortProduct);
  const products = useShopStore((state) => state.products);
  const searchQuery = useShopStore((state) => state.searchQuery);
  const sortedProducts = sortProducts(products, sortProduct, order);
  const productsDisplay = sortedProducts.filter(
    (product: Product) =>
      searchQuery.trim().length === 0 ||
      product.name.includes(searchQuery) ||
      product.description.includes(searchQuery)
  );
  return { productsDisplay };
};
export default useProducts;
