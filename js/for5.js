let sum = 5000;

for(let i = 0.1; i < 1; i+=0.1){
    console.log(`${i.toFixed(1)} kg kanfet -> ${(i * sum).toFixed(0)}`);
}