let n = 8;
let sum = 1;

for(let i = 1; i <= n; i++){
    sum += 1 / (!i);
    console.log(i);
}
console.log(sum);