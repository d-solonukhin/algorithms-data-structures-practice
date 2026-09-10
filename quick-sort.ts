function quickSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const mid = [];
  const right = [];

  for (const item of arr) {
    if (item < pivot) {
      left.push(item);
    } else if (item > pivot) {
      right.push(item);
    } else {
      mid.push(item);
    }
  }

  return [...quickSort(left), ...mid, ...quickSort(right)];
}

console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));
