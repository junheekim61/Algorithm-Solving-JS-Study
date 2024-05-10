// LRU
function solution(size, arr) {
  let cache = [];
  for (let x of arr) {
    if (cache.includes(x)) {
      cache.splice(cache.indexOf(x), 1);
      cache.unshift(x);
    } else {
      if (cache.length < size) {
        cache.unshift(x);
      } else {
        cache.unshift(x);
        cache.pop();
      }
    }
    console.log(cache);
  }
  return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
