import { renderCrochets } from "./crochets-render.js";
import { updateCartCount } from "../utils.js";
import { getAndSeedProducts } from "../admin/products-api.js";

updateCartCount();

const crochets = getAndSeedProducts();
const productsUl = document.getElementById("product-list");

for (const crochet of crochets) {
  const newCrochet = renderCrochets(crochet);
  productsUl.append(newCrochet);
}

 