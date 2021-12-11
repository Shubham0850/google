// Step 1 :- Verify the constraints

// is the substring contiguous?
// does case sensitivity matters?

// Step 2 :- Write out some test cases

// Step 3 :- Figure out the working solution without code.( think )

// Step 4 :- Write out the solution in code || Brute Force Solution

function longestSubstring(s) {
  let ans = 0;
  let subString = new Set();
  let p = 0;

  while (p < s.length) {
    if (subString.has(s[p])) {
      // found element before
    } else {
      // element not found
      subString.add(s[p]);
      p--;
    }
  }
}

// Step 5 :- Double check for errors. (typo, logic, .....)

// Step 6 :- Test our code with test cases

// Step 7 :- Analyze space and time complexity

// Step 8 :- Optimize our solution ( if required )

// Step 9 :- Code optimal solution

// Step 10 :- Double check for errors. (typo, logic, .....)

// Step 11 :- Test our code with test cases

// Step 12 :- Analyze space and time complexity
