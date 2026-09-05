const arr1 = [1, 3, 5, 6, 7, 8];

function simpleSearch(arr: number[], item: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
}

console.log(simpleSearch(arr1, 6));
