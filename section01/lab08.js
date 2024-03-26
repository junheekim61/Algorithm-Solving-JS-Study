// 일곱난쟁이: 옳은 배열의 전체 합은 100이라고 가정
// 여기서 잘못 들어가 있는 원소 2개 찾아서 제외하고 옳은 배열 출력하기
function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0); // reduce함수: 배열의 요소를 합산하여 반환
  let stop = false;
  for (let i = 0; i < answer.length; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (stop) break;
      else {
        if (sum - (answer[i] + answer[j]) == 100) {
          answer.splice(j, 1); // 인덱스 i에서부터 1개의 요소를 제거
          answer.splice(i, 1); // 인덱스 j에서부터 1개의 요소를 제거
          // 여기서 j가 항상 i보다 뒤에 있기 때문에, j를 먼저 splice 해줘야 i 인덱스의 값이 변하지 않고 유지된다.
          stop = true;
          break;
        }
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log("[문제 8] 일곱난쟁이");
console.log("solution(arr)");
console.log(solution(arr));

// // 모범답안
// function solution(arr) {
//     let answer = arr;
//     let sum = answer.reduce((a, b) => a + b, 0);
//     let flag = 0;
//     for (let i = 0; i < 8; i++) {
//       for (let j = i + 1; j < 9; j++) {
//         if (sum - (answer[i] + answer[j]) == 100) {
//           answer.splice(j, 1);
//           answer.splice(i, 1);
//           flag = 1;
//           break;
//         }
//       }
//       if (flag == 1) break;
//     }
//     return answer;
//   }
