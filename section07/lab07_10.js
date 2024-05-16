// 이분검색
function solution(target, arr) {
  let answer, midIdx;
  arr.sort((a, b) => a - b);
  console.log(arr);
  midIdx = arr.length - 1;
  while (true) {
    if (target === arr[midIdx]) {
      return midIdx + 1;
    } else if (target < arr[midIdx]) {
      midIdx = Math.ceil(midIdx / 2) - 1;
    } else {
      midIdx += Math.ceil(midIdx / 2);
    }
  }
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
