// Step 0 :- Write down the question.

// Step 1 :- Verify the constraints

// Input is positive integer
// Does the left and right side of the graph count as walls --> no
// Does a higher line inside our container affect our area --> yes

// Step 2 :- Write out some test cases

// Step 3 :- Figure out the working solution without code.( think )

// Step 4 :- Write out the solution in code || Brute Force Solution

function trapRainwater(heights) {
  let totalWater = 0;

  for (let p = 0; p < heights.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }

    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[p];

    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }

  return totalWater;
}

// Step 5 :- Double check for errors. (typo, logic, .....)

// Step 6 :- Test our code with test cases

console.log(trapRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trapRainwater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

// Step 7 :- Analyze space and time complexity

// Time Complexity --> O(n^2)
// Space Complexity --> O(1)

// Step 8 :- Optimize our solution ( if required )

// Step 9 :- Code optimal solution

function newTrapRainwater(heights) {
  let totalWater = 0;

  let leftP = 0,
    rightP = heights.length - 1,
    maxLeft = 0,
    maxRight = 0;

  while (leftP < rightP) {
    if (heights[leftP] <= heights[rightP]) {
      if (heights[leftP] < maxLeft) {
        // calculate water
        totalWater += maxLeft - heights[leftP];
      } else {
        // update maxLeft and move the pointer
        maxLeft = heights[leftP];
      }

      leftP++;
    } else {
      if (heights[rightP] < maxRight) {
        // calculate water
        totalWater += maxRight - heights[rightP];
      } else {
        //  update maxRight and move the pointer
        maxRight = heights[rightP];
      }

      rightP--;
    }
  }

  return totalWater;
}

// Step 10 :- Double check for errors. (typo, logic, .....)

// Step 11 :- Test our code with test cases

console.log(trapRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trapRainwater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

// Step 12 :- Analyze space and time complexity

// Time Complexity --> O(n)
// Space Complexity --> O(1)
