function min (num1 ,num2, num3){
    if (num1<num2 && num1<num3){
        console.log("Number 1 is smalller");
    }else if(num2<num1 && num2<num3)
    {
        console.log("Number 2 is smaller");
    }else{
        console.log("Number 3 is smaller");
    }
}

min(21,2,10)


function max (num1 ,num2, num3){
    if (num1>num2 && num1>num3){
        console.log("Number 1 is Greater");
    }else if(num2>num1 && num2>num3)
    {
        console.log("Number 2 is Greater");
    }else{
        console.log("Number 3 is Greater");
    }
}

max(21,2,10)