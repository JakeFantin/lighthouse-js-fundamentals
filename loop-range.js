// Function makes array given defining parameters
function range(start, end, step) {
  let array = [];
  let size = (end - start) / step;
  for (let i = 0; i <= size; i++) {
    array.push(start);
    start += step;
  }
  return array;
}

console.log(range(-5, 2, 3));