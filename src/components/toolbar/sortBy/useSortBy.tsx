import { toast } from "react-toastify";
import useShopStore from "../../../store/useShopStore";

const useSortBy = () => {
  const updateSortProduct = useShopStore((state) => state.updateSortProduct);
  const updateOrderProduct = useShopStore((state) => state.updateOrderProduct);
  const changeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value.split(" ")[0];
    const order = e.target.value.split(" ")[1];
    if (sort === "description" || sort === "name") {
      updateSortProduct(sort);
      if (order === "asc" || order === "desc") {
        updateOrderProduct(order);
      }
    } else {
      toast.error("Sort by option is not valid", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light"
      });
    }
  };
  return { changeSort };
};

export default useSortBy;
