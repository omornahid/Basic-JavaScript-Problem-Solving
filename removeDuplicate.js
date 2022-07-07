var cars = ['bmw', 'audi', 'alphard','mustang','dodge','audi','bmw','gtr-35','alphard']


function removeDuplicate(names){
    var newArr = []

    for(let i of names) {
        if(newArr.indexOf(i) == -1) {
            newArr.push(i);
        }
    }
    console.log(newArr);
}

removeDuplicate(cars)