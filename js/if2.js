let num1 = 40;
let num2 = -20;
let num3 = 23;

if (num1 > num2 && num1 < num3 || num1 < num2 && num1 > num3){
    console.log(num1);
}

else if(num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3){
    console.log(num2);
}

else if(num3 > num2 && num3 < num1 || num3 < num2 && num3 > num1){
    console.log(num3);
}