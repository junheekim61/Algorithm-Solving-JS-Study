// 두 배열 합치기 (오름차순 정렬)
function solution(arr1, arr2) {
  let answer = [];
  for (let x of arr1) answer.push(x);
  for (let x of arr2) answer.push(x);
  answer.sort((a, b) => a - b);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
