// Dynamic Programming used in Fibonacci
// Which convert O(2^n) to O(n)
let calculation1 = 0;
let calculation2 = 0;

// Recursive Fibonacci Function -- O(2^n)
function Fibonacci(n) {
  calculation1++;
  if (n < 2) {
    return n;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// Recursive Fibonacci Using Dynamic Programming -- O(n)
function FibonacciDP(n) {
  const cache = {};

  return function fib(n) {
    calculation2++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = FibonacciDP();

console.log(Fibonacci(20));
console.log(calculation1);

console.log(fasterFib(20));
console.log(calculation2);
