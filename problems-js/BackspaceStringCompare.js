// Step 1 :- Verify the constraints

// Does case sensitivity matter?

//  s = "ab#c", t = "ad#c" return true;
//  s = "ab##", t = "c#d#" return true;
//  s = "a##c", t = "#a#c" return true;
//  s = "a#c", t = "b" return false;

// Step 2 :- Write out some test cases

// Step 3 :- Figure out the working solution without code.( think )

// Step 4 :- Write out the solution in code || Brute Force Solution

function buildString(string) {
  let builtString = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "#") {
      builtString.push(string[i]);
    } else {
      builtString.pop();
    }
  }

  return builtString;
}

function stringCompare(s, t) {
  const finalS = buildString(s);
  const finalT = buildString(t);

  return JSON.stringify(finalS) == JSON.stringify(finalT) ? true : false;
}

// Step 5 :- Double check for errors. (typo, logic, .....)

// Step 6 :- Test our code with test cases

console.log(stringCompare("ab#c", "ad#c"));
console.log(stringCompare("a##c", "#a#c"));

// Step 7 :- Analyze space and time complexity

// Time complexity --> O(s + t)
// Space complexity --> O(s + t)

// Step 8 :- Optimize our solution ( if required )

// Step 9 :- Code optimal solution

function newStringCompare(s, t) {
  let s1 = s.length - 1;
  let t1 = t.length - 1;

  while (s1 >= 0 || t1 >= 0) {
    if (s[s1] === "#" || t[t1] === "#") {
      // for s
      if (s[s1] === "#") {
        // we found hash
        let skipStep = 2;

        while (skipStep > 0) {
          s1--;
          skipStep--;

          if (s[s1] === "#") {
            skipStep += 2;
          }
        }
      }

      // for t
      if (t[t1] === "#") {
        // we found hash
        let skipStep = 2;

        while (skipStep > 0) {
          t1--;
          skipStep--;

          if (t[t1] === "#") {
            skipStep += 2;
          }
        }
      }
    } else {
      if (s[s1] !== t[t1]) {
        return false;
      } else {
        s1--;
        t1--;
      }
    }
  }

  return true;
}

// Step 10 :- Double check for errors. (typo, logic, .....)

// Step 11 :- Test our code with test cases

console.log(newStringCompare("ab#c", "ad#c"));
console.log(newStringCompare("a##c", "#a#c"));

// Step 12 :- Analyze space and time complexity

// Time complexity --> O(s+t)
// Space complexity --> O(1)
