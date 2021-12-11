function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //set current index as minimum
    let min = i;
    let smallestNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        // Update minimum if current is lower than min
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = smallestNum;
  }
  return arr;
}

console.log(SelectionSort([99, 33, 6, 23, 0, 12, 1, 4, 1000]));
