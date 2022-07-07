var products = [
    {name : 'nahid', pen: 10, quantity : 9},
    {name : 'zahid', pen: 5, quantity : 50},
    {name : 'pachu', pen: 25, quantity : 13},
    {name : 'firoz', pen: 50, quantity : 15},
]

var total = 0;

for(let i of products){
   total = total + (i.pen * i.quantity)
}
console.log("Total cost of pen is :", total);


/* for(let i = 0; i<products.length; i++){
    total = total + (products[i].pen * products[i].quantity)
}
console.log("Total cost of pen is :", total); */