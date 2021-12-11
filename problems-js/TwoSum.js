// Question asked by Google.

// Given an array of integers, return the
// indices of the two numbers that add up
// to a given integer.

// Step 1 :- Verify the constraints

//  All numbers (elements) are positive.
//  There is not any duplicate numbers (elements).
//  No, there may not always be a solution.
//  return null, if there is no any solution.
//  There can't be multiple pairs that add up to the target.

// Step 2 :- Write out some test cases

// Step 3 :- Figure out the working solution without code.( think )

// Step 4 :- Write out the solution in code || Brute Force Solution

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    let toFind = target - array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === toFind) {
        return [i, j];
      }
    }
  }
  return null;
}

// Step 5 :- Double check for errors. (typo, logic, .....)

// Step 6 :- Test our code with test cases

console.log(twoSum([1, 3, 7, 6], 10));
console.log(twoSum([1, 3, 7, 9, 2], 11));

// Step 7 :- Analyze space and time complexity

// Time Complexity --> O(n^2)
// Space Complexity --> O(1)

// Step 8 :- Optimize our solution ( if required )

// Step 9 :- Code optimal solution

function twoSumNew(array, target) {
  const hashMap = {};

  for (let i = 0; i < array.length; i++) {
    const currentMapVal = hashMap[array[i]];

    if (currentMapVal >= 0) {
      return [currentMapVal, i];
    } else {
      const numToFind = target - array[i];
      hashMap[numToFind] = i;
    }
  }

  return null;
}

// solve same problem using set

function setTwoSum(array, target) {
  let searchValue = new Set();

  searchValue.has(target - array[0]);

  for (let i = 0; i < array.length; i++) {
    let searchVal = target - array[i];
    if (searchValue.has(array[i])) return true;
    else searchValue.add(searchVal);
  }

  return false;
}

// Step 10 :- Double check for errors. (typo, logic, .....)

// Step 11 :- Test our code with test cases

console.log(twoSumNew([1, 3, 7, 9, 2], 11));
console.log(twoSumNew([1, 3, 7, 6], 10));

console.log(setTwoSum([1, 3, 7, 9, 2], 11));
console.log(setTwoSum([1, 3, 7, 6], 10));

// Step 12 :- Analyze space and time complexity

// Time Complexity --> O(n)
// Space Complexity --> O(n)
