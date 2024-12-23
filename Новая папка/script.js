function solution(roman) {
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let number = 0;
  let array = roman.split("");
  for (let i = 0; i < array.length; i++) {
    let a = dictionary[array[i]];
    let b = dictionary[array[i]];
    if (a < b) {
      number += b - a;
      i++;
    } else {
      number += dictionary[array[i]];
    }
  }
  return number;
}
console.log(solution("III"));
console.log(solution("MM"));
