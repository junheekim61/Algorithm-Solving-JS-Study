// 이진트리순회
function solution(n) {
  let answer = "";
  function recur(v) {
    if (v > 7) return;
    else {
      answer += v + " ";
      recur(v * 2);
      recur(v * 2 + 1);
    }
  }
  recur(n);
  return answer;
}

console.log(solution(1));
