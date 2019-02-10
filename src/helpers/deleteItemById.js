export default function deleteItemById(array, id) {
  const indexOfInputToBeDeleted = array.indexOf(
    ...array.filter(items => id === items.id)
  );
  return [
    ...array.slice(0, indexOfInputToBeDeleted),
    ...array.slice(indexOfInputToBeDeleted + 1, array.length)
  ];
}
