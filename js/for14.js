let n = 3;
let sum = 0;

for(let i = 1, j = 1; j <= n; i+=2, j++){
    sum += i;
    console.log(`${sum} - > ${sum**2}`);
}

console.log(`Umumiy natija -> ${sum**2}`);