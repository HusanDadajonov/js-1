let n = 5;
let a = 4;
let sum = 0

for(let i = 1, j = a**2,k = a**3;  i < n; i++,j++,k++){
    console.log(`${a} ning ${i} -> darajasi ${a**i}`);
    sum = sum + (a**j - a**k);
    console.log(sum);
}