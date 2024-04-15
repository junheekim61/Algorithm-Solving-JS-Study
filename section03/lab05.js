// [문제 3-5] 문자열 압축
function solution(s) {
  let answer = "";
  let same = 1;
  for (let i = 1; i < s.length + 1; i++) {
    if (s[i] == s[i - 1]) same += 1;
    else {
      answer += s[i - 1];
      if (same !== 1) {
        answer += same;
        same = 1;
      }
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
