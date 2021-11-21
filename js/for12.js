let n = 5;
let sum = 1

for(let i = 1.1, j = 1; j <= n; i+=0.1, j++){
    sum *= i;
}
console.log(sum.toFixed(2));