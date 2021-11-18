let num = 234;
let reverseNum1 = Math.trunc(num / 100);
let reverseNum2 = Math.trunc(num % 10);
let reverseNum3 =  Math.trunc(num % 100 / 10) * 10;
let sum = reverseNum2 * 100 + reverseNum1 + reverseNum3;
console.log(sum);