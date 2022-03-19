import { crochets } from "../products/crochets.js";
import { findByID } from "../utils.js";
const PRODUCTS = "products";

export function getAndSeedProducts() {
  let products = JSON.parse(localStorage.getItem(PRODUCTS) || "[]");
  if (products.length === 0) products = crochets;
  localStorage.setItem(PRODUCTS, JSON.stringify(products));

  return products;
}

export function addProduct(crochet) {
  const crochetArr = getAndSeedProducts();

  if (!findByID(crochet.id, crochetArr)) crochetArr.push(crochet);
  else alert("invalid ID, already taken");

  localStorage.setItem(PRODUCTS, JSON.stringify(crochetArr));
}

export function clearProducts() {
  localStorage.setItem(PRODUCTS, JSON.stringify(crochets));
}

export function removeProduct(id) {
  const garmentArr = JSON.parse(localStorage.getItem(PRODUCTS));
  const removeIndex = garmentArr.indexOf(findByID(id, garmentArr));
  garmentArr.splice(removeIndex, 1);
  localStorage.setItem(PRODUCTS, JSON.stringify(garmentArr));
}