let num = 51234;
let sum1 = Math.trunc(num / 10000);
let sum2 = Math.trunc((num / 1000) % 10);
let sum3 = Math.trunc((num / 100) % 10);
let sum4 = Math.trunc((num / 10) % 10);
let sum5 = (num % 10);
let bigNum = sum1;

if(bigNum < sum2){
    bigNum = sum2;
}
if(bigNum < sum3){
    bigNum = sum3;
}
if(bigNum < sum4){
    bigNum = sum4;
}
if(bigNum < sum5){
    bigNum = sum5
}

console.log(bigNum);
