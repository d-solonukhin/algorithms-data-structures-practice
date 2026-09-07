function factorial(n: number): number {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

function cycleSumArray(arr: number[]) {
  let sum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(cycleSumArray([1, 2, 3, 4, 5]));

function recursionSumArray(arr: number[], i = 0): number {
  if (i >= arr.length) {
    return 0;
  }

  return arr[i] + recursionSumArray(arr, i + 1);
}

console.log(recursionSumArray([1, 2, 3, 4, 5]));
