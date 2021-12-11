// You are given an array of positive integers where each integer represents the heigth of a vertical line on a chart.Find two line which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.

// Step 1 :- Verify the constraints

// Does the thickness of the line affect the area --> no
// Does the left and right side of the graph count as walls --> no
// Does a higher line inside our container affect our area --> no

// Step 2 :- Write out some test cases

// Step 3 :- Figure out the working solution without code.( think )

// Step 4 :- Write out the solution in code || Brute Force Solution

function containerWithMostWater(array) {
  let area = 0;

  for (let a = 0; a < array.length; a++) {
    for (let b = a + 1; b < array.length; b++) {
      const heigth = array[a] < array[b] ? array[a] : array[b];

      const width = b - a;

      const newArea = heigth * width;

      if (newArea > area) {
        area = newArea;
      }
    }
  }

  return area;
}

// Step 5 :- Double check for errors. (typo, logic, .....)

// Step 6 :- Test our code with test cases

console.log(containerWithMostWater([1, 7, 2, 0, 1, 3]));
console.log(containerWithMostWater([7, 1, 2, 3, 9]));

// Step 7 :- Analyze space and time complexity

// Time Complexity --> O(n^2)
// Space Complexity --> O(1)

// Step 8 :- Optimize our solution ( if required )

// Step 9 :- Code optimal solution

function newContainerWithMostWater(array) {
  let maxArea = 0;
  let p1 = 0;
  let p2 = array.length - 1;

  while (p2 > p1) {
    const height = Math.min(array[p1], array[p2]);
    const width = p2 - p1;
    const area = width * height;
    maxArea = Math.max(maxArea, area);

    if (array[p2] >= array[p1]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}

// Step 10 :- Double check for errors. (typo, logic, .....)

// Step 11 :- Test our code with test cases

// console.log(newContainerWithMostWater([1, 7, 2, 0, 1, 3]));
// console.log(newContainerWithMostWater([7, 1, 2, 3, 9]));
console.log(newContainerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// Step 12 :- Analyze space and time complexity

// Time Complexity --> O(n)
// Space Complexity --> O(1)
