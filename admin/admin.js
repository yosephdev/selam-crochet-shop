import { isImgString, updateCartCount } from "../utils.js";
import {
  addProduct,
  getAndSeedProducts,
  clearProducts,
  removeProduct,
} from "./products-api.js";

updateCartCount();
getAndSeedProducts();

let formElement = document.getElementById("admin-form");
const resetButton = document.getElementById("reset-product-button");
let removeFormElement = document.getElementById("admin-remove-form");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  let myFormData = new FormData(formElement);

  const newGarment = {
    id: Number(myFormData.get('ID')),
    name: myFormData.get("Name"),
    image: isImgString(myFormData.get("Image"))
      ? myFormData.get("Image")
      : "../assets/poncho.jpg",
    description: myFormData.get("Description"),
    category: myFormData.get("Category"),
    price: myFormData.get("Price"),
  };
  addProduct(newCrochet);
  formElement.reset();
});

removeFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  let myFormData = new FormData(removeFormElement);

  removeProduct(Number(myFormData.get("ID")));
});

resetButton.addEventListener("click", () => {
  clearProducts();
});
