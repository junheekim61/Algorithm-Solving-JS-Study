// [문제 4-3] 멘토링

function makeCanMento(test, lineLen) {
  let CanMento = [];

  for (let i = 1; i < lineLen + 1; i++) {
    CanMento.push(i);
  }
  for (let i = 0; i < test.length; i++) {
    let idx = CanMento.indexOf(test[i][lineLen - 1]);
    if (idx !== -1) {
      CanMento.splice(idx, 1);
    }
  }
  return CanMento;
}

function countCanMenti(test, lineLen, canMento) {
  let CanMenti = [];
  let counter = 0;

  for (let x of canMento) {
    for (let i = 0; i < test.length; i++) {
      let mentoIdx = test[i].indexOf(x);
      for (let j = mentoIdx + 1; j < lineLen; j++) {
        CanMenti.push(test[i][j]);
      }
    }

    let SameCount = Array(lineLen).fill(0);
    for (let x of CanMenti) SameCount[x - 1] += 1;
    for (let x of SameCount) {
      if (x === test.length) counter += 1;
    }
    CanMenti = [];
    SameCount = Array(lineLen).fill(0);
  }
  return counter;
}

function solution(t) {
  let lineLen = t[0].length;

  let canMento = makeCanMento(t, lineLen); // 멘토가 될 수 있는 수의 배열
  let answer = countCanMenti(t, lineLen, canMento); // 멘토가 될 수 있는 경우의 수 count
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
