const arr2: number[] = [1, 3, 4, 6, 7, 8, 10];

function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = (left + right) / 2;

    if (mid === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

console.log(binarySearch(arr2, 3));
