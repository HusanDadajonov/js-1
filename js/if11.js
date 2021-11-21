let num = 10;

if (num >= 10 &&  num < 100 && num % 2 == 0){
    console.log("Ikki xonali Juft son");
}
else if (num >= 10 && num < 100 && num % 2 == 1){
    console.log("Ikki xonali Toq son");
}
else if (num >= 100 && num < 1000 && num % 2 == 1){
    console.log("Uch xonali Toq son");
}
else if (num >= 100 && num < 1000 && num % 2 == 0){
    console.log("Uch xonali Juft son");
}

else{
    if(num % 2 == 0) console.log("Bir xonali Juft son");
    else console.log("Bir xonali toq son");
}