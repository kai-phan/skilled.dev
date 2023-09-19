export function productArray(arr: number[]): number[] {
  // brute force
  let result: number[] = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    let product = 1;

    for (let j = 0; j <= arr.length - 1; j++) {
      if (i !== j) {
        product = product * arr[j];
      }
    }

    result[i] = product;
  }

  return result;
}
