// Finds the index of the last time the value was used, or returns negatives
function lastIndexOf(array, value) {
  let index = -1;
  for (let i = array.length - 1; i > -1; i--) {
    if (array[i] === value) {
      index = i;
      break;
    }
  }
  return index;
}