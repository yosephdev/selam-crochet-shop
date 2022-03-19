import { getCart } from "../cart/cart-api.js";

export function findByID(id, array) {
  for (const item of array) {
    if (item.id === id) return item;
  }
  return;
}

export function calcItemTotal(quantity, price) {
  return quantity * price;
}

export function calcOrderTotal(cart, crochets) {
  let total = 0;
  for (const cartItem of cart) {
    let crochetPrice = findByID(cartItem.id, crochets).price;
    let cartItemPrice = calcItemTotal(cartItem.quantity, crochetPrice);
    total += cartItemPrice;
  }
  return total;
}

export function updateCartCount() {
  const cartCountSpan = document.getElementById("cart-amount");
  const CART = "cart";
  const cartData = getCart(CART);
  let finalCount = 0;
  for (const item of cartData) {
    finalCount += item.quantity;
  }

  cartCountSpan.textContent = finalCount;
}

export function isImgString(string) {
  const supportedImages = [".png", ".jpg", ".gif"];

  for (const item of supportedImages) {
    if (item === string.slice(string.length - 4)) return true;
  }
  return false;
}
