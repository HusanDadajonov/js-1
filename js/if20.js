let num = 11354;
let sum1 = Math.trunc(num / 10000);
let sum2 = Math.trunc((num / 1000) % 10);
let sum3 = Math.trunc((num / 100) % 10);
let sum4 = Math.trunc((num / 10) % 10);
let sum5 = (num % 10);
let num1 = 5;
let bigNum = sum1;

if(bigNum < sum2){
    bigNum = sum2;
    num1 = 4;
}
if(bigNum < sum3){
    bigNum = sum3;
    num1 = 3;
}
if(bigNum < sum4){
    bigNum = sum4;
    num1 = 2;
}
if(bigNum < sum5){
    bigNum = sum5;
    num1 = 1;
}
console.log(bigNum,num1);


