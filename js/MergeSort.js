function MergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle);

  //   console.log("leftArr: ", leftArr);
  //   console.log("rightArr: ", rightArr);

  return Merge(MergeSort(leftArr), MergeSort(rightArr));
}

function Merge(left, right) {
  const newArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      newArr.push(left.shift());
    } else {
      newArr.push(right.shift());
    }
  }
  console.log(left, right, newArr);

  return newArr.concat(left).concat(right);
}

console.log(MergeSort([99, 33, 600000, 12, 1, 4, 1000]));
