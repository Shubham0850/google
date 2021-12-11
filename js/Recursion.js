function findFactorialRecursive(num) {
  // Recursive approch
  if (num === 1) {
    return 1;
  }
  return num * findFactorialRecursive(num - 1);
}

function findFactorialItrative(num) {
  // Itrative approch
  let ans = 1;
  for (let i = 1; i <= num; i++) {
    ans = ans * i;
  }
  return ans;
}

console.log(findFactorialItrative(2));
console.log(findFactorialRecursive(2));
