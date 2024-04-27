// [문제 5-7] 아나그램
function solution(str1, str2) {
  let original = str1;
  let compare = str2.split(""); // 문자열을 배열로 변환
  let answer = "NO";

  for (let x of original) {
    for (let y of compare) {
      if (x === y) {
        compare.splice(compare.indexOf(y), 1);
        console.log(compare);
        break;
      }
    }
  }

  if (compare.length === 0) answer = "YES";
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
