let n = 4;
let sum = 0;

for (let i = 1.1, j = 1.2, k = 1; k <= n; i+=0.2, j+=0.2 , k++){
    sum += (i - j);
}
console.log(sum.toFixed(2));