export default function updateItemById(array, item) {
  const indexOfItemToBeUpdated = array.indexOf(
    ...array.filter(items => item.id === items.id)
  );
  return [
    ...array.slice(0, indexOfItemToBeUpdated),
    item,
    ...array.slice(indexOfItemToBeUpdated + 1, array.length)
  ];
}
