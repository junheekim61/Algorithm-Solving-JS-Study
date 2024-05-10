// 장난꾸러기 함수
function solution(arr) {
  let answer = [];
  let normal = arr.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      answer.push(i + 1);
      for (let j = i + 1; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          answer.push(j + 1);
          break;
        }
      }
      break;
    }
  }
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
