import { p as products } from "../../../../chunks/products.js";
import { error } from "@sveltejs/kit";
import { g as get } from "../../../../chunks/index.js";
const load = ({ params }) => {
  const allProducts = get(products);
  const product = allProducts.find((p) => p.id === params.productId);
  if (!product) {
    throw error(404, "Product not found");
  }
  return {
    product
  };
};
export {
  load
};
