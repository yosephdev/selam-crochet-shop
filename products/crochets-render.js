import { addToCart } from "../cart/cart-api.js";
import { findByID } from "../utils.js";

export function renderCrochets(crochet) {
  const crochetLi = document.createElement("li");

  const crochetH3 = document.createElement("h3");
  crochetH3.classList.add("item-name");
  crochetH3.textContent = crochet.name;
  crochetLi.append(crochetH3);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  crochetLi.append(imgContainer);

  const crochetImg = document.createElement("img");
  crochetImg.src = crochet.image;
  crochetImg.alt = crochet.description;
  imgContainer.append(crochetImg);

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  crochetLi.append(textContainer);

  const crochetCategoryP = document.createElement("p");
  crochetCategoryP.classList.add("item-category");
  crochetCategoryP.textContent = `Category: ${crochet.category}`;
  textContainer.append(crochetCategoryP);

  const crochetPriceP = document.createElement("p");
  crochetPriceP.classList.add("item-price");
  crochetPriceP.textContent = `Price: $${crochet.price}`;
  textContainer.append(crochetPriceP);

  const crochetDescriptionP = document.createElement("p");
  crochetDescriptionP.classList.add("item-description");
  crochetDescriptionP.textContent = crochet.description;
  textContainer.append(crochetDescriptionP);

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.min = 1;
  quantityInput.placeholder = "quantity";
  crochetLi.append(quantityInput);

  const addButton = document.createElement("button");
  addButton.textContent = "Add to cart";
  addButton.classList.add("add-button");
  crochetLi.append(addButton);

  addButton.addEventListener("click", () => {
    const crochetQuantity = quantityInput.value
      ? Number(quantityInput.value)
      : 1;
    addToCart(crochet, "cart", crochetQuantity);
    quantityInput.value = quantityInput.placeholder;
  });

  return crochetLi;
}
