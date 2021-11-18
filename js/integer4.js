let num = 123;
let reverseNum1 = Math.trunc(num / 100);
let reverseNum2 = Math.trunc(num % 10);
let reverseNum3 =  Math.trunc(num % 100 / 10);
let sum = (reverseNum1 + (reverseNum3 * 10)) * 10 + reverseNum2;
console.log(sum);