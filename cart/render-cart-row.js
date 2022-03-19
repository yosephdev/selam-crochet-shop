export function renderCartRow(cartItem, crochet) {
  const tr = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.textContent = crochet.name;
  tr.append(tdName);

  const tdQuantity = document.createElement("td");
  tdQuantity.textContent = cartItem.quantity;
  tr.append(tdQuantity);

  const tdPrice = document.createElement("td");
  tdPrice.textContent = `$${crochet.price}`;
  tr.append(tdPrice);

  return tr;
}
