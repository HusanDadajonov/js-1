let num = 12;
let fx = 0;

if(num <= 0){
    fx = -num;
}
else if(0 < num && num < 2){
    fx = num**2;
}
else if(num >= 2){
    fx = 4
}

console.log(fx);