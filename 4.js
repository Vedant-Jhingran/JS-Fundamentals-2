const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 }
  ];

let maxValue = -Infinity;
let minValue = Infinity;

let x = "";
let y = "";

for (let product of products) {
    if (product.price > maxValue) {
        maxValue = product.price;
        y = product.name;
    }

    if (product.price < minValue) {
        minValue = product.price;
        x = product.name;
    }
}

console.log(`The product with maximum amount is ${y} which is priced at Rs. ${maxValue}`);
//OUTPUT: The product with maximum amount is Laptop which is priced at Rs. 120000

console.log(`The product with minimum amount is ${x} which is priced at Rs. ${minValue}`);
//OUTPUT: The product with minimum amount is Mobile Charger which is priced at Rs. 1500