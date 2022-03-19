//import functions

import { cartData } from "./cart-data.js";
import { renderCartRow } from "./render-cart-row.js";
import { crochets } from "../products/crochets.js";
import { findByID, calcOrderTotal } from "../utils.js";

//grab dom elements

const table = document.querySelector("table");
const orderButton = document.getElementById("order-button");

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

orderButton.addEventListener("click", () => {
  alert("Thank you for your order!");
});
