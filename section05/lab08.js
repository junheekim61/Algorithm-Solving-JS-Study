// [문제 5-8] 모든 아나그램 찾기
function solution(s, t) {
  let answer = 0;
  let strArr = s.split("");
  let find = t.split("");
  let findLen = find.length;
  let splitedArr = [];

  for (let i = 0; i <= strArr.length - findLen; i++) {
    splitedArr.push(strArr.slice(i, i + findLen));
  }
  console.log(splitedArr);

  for (let z of splitedArr) {
    let compare = z.slice(); // compare 배열을 새로운 배열로 복사
    for (let x of find) {
      for (let y of compare) {
        if (x === y) {
          compare.splice(compare.indexOf(y), 1);
          break;
        }
      }
    }
    if (compare.length === 0) {
      console.log(z);
      answer += 1;
    }
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
