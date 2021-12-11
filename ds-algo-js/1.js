//  Reverse the array
//  First approch
const ReverseArray = (arr) => {
  var temp;

  var arrSize = arr.length - 1;

  for (let i = 0; i <= arrSize; arrSize--, i++) {
    temp = arr[arrSize];
    arr[arrSize] = arr[i];
    arr[i] = temp;
  }

  console.log(arr);
};

ReverseArray([1, 2, 3, 4, 5]);

//  Second Approch
var myArray = [1, 2, 3, 4, 5];
console.log("Original Array is : ");
console.log(myArray);
var revArray = myArray.reverse();
console.log("Reversed Array is : ");
console.log(revArray);
