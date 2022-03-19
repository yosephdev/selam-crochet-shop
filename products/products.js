import { crochets } from "./crochets.js";
import { renderCrochets } from "./crochets-render.js";

const productsUl = document.getElementById("product-list");

for (const crochet of crochets) {
  const newCrochet = renderCrochets(crochet);
  productsUl.append(newCrochet);
}