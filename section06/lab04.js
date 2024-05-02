// [문제 6-4] 후위식 연산
function solution(s) {
  let answer, first, second;
  let operand = [];
  let operator = [];
  //   let operator = ["+", "-", "*", "/"];
  for (let x of str) {
    if (x === "+" || x === "-" || x === "*" || x === "/") {
      second = operand.pop();
      first = operand.pop();

      switch (x) {
        case "+":
          operand.push(first + second);
          break;
        case "-":
          operand.push(first - second);
          break;
        case "*":
          operand.push(first * second);
          break;
        case "/":
          operand.push(first / second);
          break;
        default:
          console.log("오류");
      }
    } else operand.push(parseInt(x));
    console.log(operand);
  }
  answer = operand.pop();
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
