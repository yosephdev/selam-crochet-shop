import { findByID } from "../utils.js";

export function getCart(cartKey) {
  const cart = JSON.parse(localStorage.getItem(cartKey) || "[]");
  return cart;
}
export function addToCart(crochet, cartKey) {
  const cart = JSON.parse(localStorage.getItem(cartKey) || "[]");
  const matchingCartItem =
    findByID(crochet.id, cart) !== null ? findByID(crochet.id, cart) : null;

  const newLineItem = {
    id: crochet.id,
    quantity: 1,
  };

  if (matchingCartItem) matchingCartItem.quantity += 1;
  else cart.push(newLineItem);

  localStorage.setItem(cartKey, JSON.stringify(cart));
  const newCart = JSON.parse(localStorage.getItem(cartKey) || "[]");
  return newCart;
}
