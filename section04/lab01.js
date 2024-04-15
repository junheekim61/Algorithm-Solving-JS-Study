// [문제 4-1] 자리수의 합
function solution(n, arr) {
  let answer = 0;
  let maxSum = 0;
  let sumArr = [];
  let maxSumArr = [];

  for (let x of arr) {
    let innerSum = 0;
    let strNum = x.toString();
    for (let y of strNum) {
      innerSum += parseInt(y, 10);
    }
    sumArr.push(innerSum);
  }
  maxSum = Math.max(...sumArr);

  for (let i = 0; i < sumArr.length; i++) {
    if (sumArr[i] == maxSum) maxSumArr.push(arr[i]);
  }
  answer = Math.max(...maxSumArr);

  console.log(`각 자릿수의 합: [${sumArr}]`);
  console.log(`각 자릿수의 합의 최댓값: ${maxSum}`);
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
