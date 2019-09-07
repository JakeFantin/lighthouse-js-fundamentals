const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("First time through with a while loop\n")
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[[i]]);
  i++
}
// Write a for loop that prints out the contents of ingredients:
console.log("\nA second time with a for loop\n")
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[[j]]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nLastly, backwards\n")
for (let k = ingredients.length - 1; k > -1; k--) {
  console.log(ingredients[[k]]);
}