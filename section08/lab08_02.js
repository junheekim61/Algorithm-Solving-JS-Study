// 이진수 출력(재귀)
function solution(n) {
  let answer = "";

  function recur(n) {
    if (n === 0) return;
    else {
      recur(parseInt(n / 2));
      answer += String(n % 2);
    }
  }

  recur(n);
  return answer;
}

console.log(solution(11));
