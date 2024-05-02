// [문제 6-3] 크레인 인형뽑기(카카오)
function solution(board, moves) {
  let answer = 0;
  let b = board;
  let toyList = [];
  let pick = -1;
  for (let x of moves) {
    for (let i = 0; i < 5; i++) {
      if (b[i][x - 1] !== 0) {
        pick = b[i][x - 1];
        b[i][x - 1] = 0;
        toyList.push(pick);
        if (toyList.length > 2) {
          if (toyList[toyList.length - 1] == toyList[toyList.length - 2]) {
            answer += 2;
            toyList.pop();
            toyList.pop();
          }
        }
        
        console.log(toyList);
        break;
      }
    }
  }
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
