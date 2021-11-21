let x = 0;
let y = 0;

if(x > 0 && y > 0){
    console.log("1 - chorak");
}
else if(x < 0 && y > 0){
    console.log("2 - chorak");
}
else if(x < 0 && y < 0){
    console.log("3 - chorak");
}
else if(x > 0 && y < 0){
    console.log("4 - chorak");
}
else if ((x == 0 && y > 0 )|| (x == 0 && y < 0)){
    console.log("nuqta y o'qida yotadi");
}
else if (x == 0 && y == 0){
    console.log("nuqta koordinata markazida yotadi");
}
else if ((x < 0 && y == 0) || (y == 0 && x > 0)){
    console.log("nuqta x o'qida yotadi");
}