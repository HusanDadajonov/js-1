let num = 8481;

if (num >= 10 && num <= 99){
    let sum1 = num % 10 + Math.trunc(num / 10);
    console.log(sum1);
}

else if (num >= 100 & num <= 999){
    let sum2 = num % 10 + Math.trunc(num / 100) + Math.trunc((num / 10) % 10);
    console.log(sum2);
}

else if (num >= 1000 & num <= 9999){
    let sum3 = num % 10 + Math.trunc(num / 1000) + Math.trunc((num / 10) % 10) + Math.trunc((num / 100) % 10);
    console.log(sum3);
}