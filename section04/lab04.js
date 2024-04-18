// [문제 4-4] 졸업선물
function solution(m, product) {
  let maxCount = 0,
    count = 0,
    valance = m,
    newArr = product,
    sumArr = [];

  for (let i = 0; i < arr.length; i++) {
    // i번째 거가 할인을 받는다고 쳤을 때
    newArr[i][0] = newArr[i][0] / 2;
    for (let [a, b] of product) {
      sumArr.push(a + b);
    }
    console.log(`[${i}]번 인덱스를 할인했을 때의 sum값들: ${sumArr}`);

    sumArr.sort((a, b) => a - b);
    console.log(`-> 정렬: ${sumArr}`);

    for (let x of sumArr) {
      if (valance > 0 && valance - x >= 0) {
        valance -= x;
        count += 1;
      }
    }
    if (count > maxCount) maxCount = count;
    console.log(`-> ${count}명의 학생에게 선물을 줄 수 있음`);

    count = 0;
    sumArr = [];
    valance = m;

    console.log(
      `-> 현재 전체 max값은 ${maxCount}\n\n-------------------------`
    );
  }
  return maxCount;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
