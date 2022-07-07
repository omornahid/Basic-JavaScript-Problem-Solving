

function largest(numbers){
    var max = numbers[0]
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i]
        }
    }
    console.log(max);
}

var arr = [20,84,6,30,110,10,22]
largest(arr)

