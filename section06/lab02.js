// [문제 6-2] 괄호 문자 제거
function solution(s) {
  let strArr = s;
  let answer = "";
  for (let s of strArr) {
    if (s !== "(" && s !== ")") {
      answer += s;
    }
  }
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
