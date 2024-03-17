import useShopStore from "../../../store/useShopStore";

const useSearchbar = () => {
  const updateSearchQuery = useShopStore((state) => state.updateSearchQuery);

  return { updateSearchQuery };
};

export default useSearchbar;
