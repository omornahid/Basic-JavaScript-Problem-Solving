var fact = 1;
function factorial(num){
    for(let i = 1;i <num; i++){
        fact *= i; 
    }
    console.log("The factorial of",num, "is :",fact);
}

factorial(5)