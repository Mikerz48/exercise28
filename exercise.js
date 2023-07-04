function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(...nums));