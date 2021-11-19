let num = 101;
let sum1 = num % 10;
let sum2 = Math.trunc(num / 100);
let sum3 = Math.trunc(num / 10 % 10);
let result = sum1 + sum2 + sum3;
console.log(result % 2 == 1);