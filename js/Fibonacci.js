function fibonacciIterative(num) {
  // Iterative
  if (num < 2) return num;
  let prev = 0;
  let cur = 1;
  for (let i = 1; i <= num; i++) {
    let temp = prev;
    prev = cur;
    cur = temp + cur;
  }
  return cur;
}

function fibonacciRecursive(num) {
  // Recursive
  if (num < 2) {
    return num;
  }
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

console.log(fibonacciIterative(100));
console.log(fibonacciRecursive(40));
