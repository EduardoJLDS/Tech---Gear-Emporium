export type Product = {
  id: number;
  name: string;
  description: string;
  validityDate: Date;
  cost: number;
  image: string;
};

export type ProductInCart = Product & { quantity: number };

export type SortByForProducts = "description" | "name";

export type OrderBy = "asc" | "desc";
