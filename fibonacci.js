
function fibonacci(num) {
  
    let fib = [0, 1];
    let data = [];
    
    for(let i = 2; i <= num+1; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; 
      data.push(fib[i]);
    }
    return data;
  }

  console.log(fibonacci(10));