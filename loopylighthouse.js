let x = 100;

while (x < 201) {
  //using some nested ternerary operators to see if the number is divisible by 3 and/or by 4
  console.log((x % 3 !== 0) ? (x % 4 !== 0 ? x : "Lighthouse") : (x % 4 !== 0 ? "Loopy" : "LoopyLighthouse"));
  x = x + 1;
}