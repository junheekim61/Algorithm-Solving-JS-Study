// [문제 4-2] 뒤집은 소수
// : 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력

function reverseNum(arr) {
  let reversedNumArr = [];
  for (let x of arr) {
    let strNum = x.toString();
    let newStrNum = "";
    for (let i = strNum.length; i > 0; i--) {
      newStrNum += strNum[i - 1];
    }
    reversedNumArr.push(parseInt(newStrNum, 10));
  }
  return reversedNumArr;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  let reversedNumArr = reverseNum(arr);
  console.log(`뒤집은 수 배열: [${reversedNumArr}]`);
  for (let x of reversedNumArr) {
    if (isPrime(x)) answer.push(x);
  }
  console.log(`이 중 소수는: [${answer}]`);
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
