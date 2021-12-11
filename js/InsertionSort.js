function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        // swap item
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else {
        break;
      }
    }

    return array;
  }
}

console.log(insertionSort([99, 33, 6, 23, 0, 12, 1, 4, 1000]));
console.log("hello");
