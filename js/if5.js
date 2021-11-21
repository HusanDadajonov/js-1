let num = -5;
let fx = 0;

if(num > 0){
    fx = 2 * Math.sin(num);
}
else if(num <= 0){
    fx = num - 6;
}

console.log(fx);