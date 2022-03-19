export function findByID(id, array) {
  for (const item of array) {
    if (item.id === id) return item;
  }
  return;
}
