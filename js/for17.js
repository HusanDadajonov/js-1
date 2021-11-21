let n = 3;
let a = 2;
let sum = 0;

for(let i = 0; i <= n; i++){
    console.log(`${a}ning  ${i} darajasi - > ${a**i}`);
    sum += a**i;
}
console.log(`Umumiy yig'ind - > ${sum}`);