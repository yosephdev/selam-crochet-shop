import { crochets } from "../products/crochets.js";
const PRODUCTS = "products";

export function getAndSeedProducts() {
  let products = JSON.parse(localStorage.getItem(PRODUCTS) || "[]");
  if (products.length === 0) products = crochets;
  localStorage.setItem(PRODUCTS, JSON.stringify(products));

  return products;
}
