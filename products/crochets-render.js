export function renderCrochets(garment) {
  const crochetLi = document.createElement("li");

  const crochetH3 = document.createElement("h3");
  crochetH3.classList.add("item-name");
  crochetH3.textContent = garment.name;
  crochetLi.append(crochetH3);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  crochetLi.append(imgContainer);

  const crochetImg = document.createElement("img");
  crochetImg.src = garment.image;
  crochetImg.alt = garment.description;
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

  const addButton = document.createElement("button");
  addButton.textContent = "Add to cart";
  addButton.classList.add("add-button");
  crochetLi.append(addButton);

  return crochetLi;
}
