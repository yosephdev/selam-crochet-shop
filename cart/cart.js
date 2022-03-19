//import functions
import { clearCart, getCart } from "../cart/cart-api.js";
import { crochets } from "../products/crochets.js";
import { renderCartRow } from "./render-cart-row.js";
import { findByID, calcOrderTotal } from "../js/utils.js";

// grab storage data
const cartData = JSON.parse(localStorage.getItem("cart"));

//grab dom elements

const table = document.querySelector("table");
const orderButton = document.getElementById("order-button");
const clearCartButton = document.getElementById("clear-cart-button");

for (const cartItem of cartData) {
  const crochet = findByID(cartItem.id, crochets);

  const newTr = renderCartRow(cartItem, crochet);
  table.append(newTr);
}

const totalTr = document.createElement("tr");

const totalTd1 = document.createElement("td");
const totalTd2 = document.createElement("td");
const totalTd3 = document.createElement("td");
totalTr.append(totalTd1, totalTd2, totalTd3);

totalTd1.textContent = "Total:";
totalTd3.textContent = `$${calcOrderTotal(cartData, crochets)}`;

table.append(totalTr);

if (cartData.length === 0) orderButton.disabled = true;
else orderButton.disabled = false;

orderButton.addEventListener("click", () => {
   const parsedCart = JSON.stringify(cartData, true, 2);
   alert(`Thank you for your order! you ordered ` + parsedCart);
   clearCart(CART);
});

clearCartButton.addEventListener("click", () => {
  clearCart(CART);
});
