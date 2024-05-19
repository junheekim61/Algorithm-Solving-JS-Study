// 재귀함수
function solution(n) {
  function recursion(N) {
    if (N == 0) return;
    else {
      recursion(N - 1);
      console.log(N);
    }
  }
  recursion(n);
}

solution(3);
