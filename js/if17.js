let num = 8481;
    
if (num >= 10 && num <= 99){
    if(Math.trunc(num / 10) % 2 == 1 && (num % 10) % 2 == 1){
        console.log(Math.trunc(num / 10) + (num % 10));
    }

    else if(Math.trunc(num / 10) % 2 == 1){
        console.log(Math.trunc(num / 10));
    }

    else if((num % 10) % 2 == 1){
        console.log((num % 10));
    }
}

else if (num >= 100 & num <= 999){
    if((num % 10) % 2 == 1 &&  Math.trunc(num / 100) % 2 == 1 && Math.trunc((num / 10) % 10) % 2 ==1){
        console.log((num % 10) + Math.trunc(num / 100) + Math.trunc((num / 10) % 10));
    }
    else if ((num % 10) % 2 == 0 &&  Math.trunc(num / 100) % 2 == 1 && Math.trunc((num / 10) % 10) % 2 == 1){
        console.log(Math.trunc(num / 100) + Math.trunc((num / 10) % 10));
    }
    else if ((num % 10) % 2 == 1 &&  Math.trunc(num / 100) % 2 == 1 && Math.trunc((num / 10) % 10) % 2 == 0){
        console.log(Math.trunc(num / 100) + (num % 10));
    }

    else if ((num % 10) % 2 == 1 &&  Math.trunc(num / 100) % 2 == 0 && Math.trunc((num / 10) % 10) % 2 == 1){
        console.log((num % 10) + Math.trunc((num / 10) % 10));
    }
}

else if (num >= 1000 & num <= 9999){
    let sum1 = Math.trunc(num / 1000);
    let sum2 = Math.trunc((num / 100) % 10);
    let sum3 = Math.trunc((num / 10) % 10);
    let sum4 = (num % 10);
    if (sum1 % 2 == 1 && sum2 % 2 == 1 && sum3 % 2 == 1 && sum4 % 2 == 1){
        console.log(sum1 + sum2 + sum3 + sum4);
    }
    else if (sum1 % 2 == 1 && sum3 % 2 == 1  && sum4 % 2 == 1 && sum2 % 2 == 0){
        console.log(sum1 + sum4 + sum3);
    }
    else if (sum2 % 2 == 1 && sum3 % 2 == 1  && sum4 % 2 == 1 && sum1 % 2 == 0){
        console.log(sum2 + sum3 + sum4);
    }
    else if (sum1 % 2 == 1 && sum2 % 2 == 1  && sum3 % 2 == 1 && sum4 % 2 == 0){
        console.log(sum1 + sum2 + sum3);
    }

    else if (sum1 % 2 == 1 && sum2 % 2 == 1  && sum3 % 2 == 0 && sum4 % 2 == 1){
        console.log(sum1 + sum2 + sum4 );
    }

    else if (sum1 % 2 == 1 && sum4 % 2 == 1 && sum2 % 2 == 0 && sum3 % 2 == 0){
        console.log(sum1 + sum4);
    }
    else if (sum2 % 2 == 1 && sum4 % 2 == 1 && sum1 % 2 == 0 && sum3 % 2 == 0){
        console.log(sum2 + sum4);
    }
    else if (sum1 % 2 == 1 && sum3 % 2 == 1 && sum4 % 2 == 0 && sum2 % 2 == 0){
        console.log(sum1 + sum3);
    }
    else if (sum3 % 2 == 1 && sum4 % 2 == 1 && sum2 % 2 == 0 && sum1 % 2 == 0){
        console.log(sum3 + sum4);
    }
    else if (sum2% 2 == 1 && sum3 % 2 == 1  && sum1 % 2 == 0  && sum4 % 2 == 0){
        console.log(sum2 + sum3);
    }
    else if (sum1 % 2 == 1 && sum2 % 2 == 1  && sum3 % 2 == 0  && sum4 % 2 == 0){
        console.log(sum1 + sum2);
    }
    else if (sum4 % 2 == 1  && sum1 % 2 == 0  && sum3 % 2 == 0  && sum2 % 2 == 0){
        console.log(sum4);
    }
    else if (sum3 % 2 == 1  && sum4 % 2 == 0  && sum1 % 2 == 0  && sum2 % 2 == 0){
        console.log(sum3);
    }
    else if (sum2 % 2 == 1  && sum4 % 2 == 0  && sum1 % 2 == 0  && sum3 % 2 == 0) {
        console.log(sum2);
    }
    else if (sum1 % 2 == 1  && sum4 % 2 == 0  && sum2 % 2 == 0  && sum3 % 2 == 0){
        console.log(sum1);
    }
}