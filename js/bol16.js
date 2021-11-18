let num = 31;
let sum1 = num % 10;
let sum2 = Math.trunc(num / 10);
let result = sum1 + sum2;
console.log(result % 2 == 1);