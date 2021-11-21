let temp = 11;
if (temp < 0){
    console.log("Freezing");
}
else if (temp >= 1 && temp <= 10){
    console.log("Very Cold");
}
else if (temp >= 11 && temp <= 20){
    console.log("Cold");
}
else if (temp >= 21 && temp <= 30){
    console.log("Normal");
}
else if (temp >= 31 && temp <= 40){
    console.log("Hot");
}
else if(temp > 40){
    console.log("Very Hot");
}