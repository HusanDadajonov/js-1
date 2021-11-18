let num = 241;

let num1 = Math.trunc(num / 100);
let num2 = num % 10;
let num3 = Math.trunc(num % 100 / 10);
let yigindi = num1 + num2 + num3;
let kopaytma = num1 * num2 * num3;
console.log(yigindi,kopaytma);