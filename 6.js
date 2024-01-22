const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
  };

console.log(productDetails);
// OUTPUT: name: 'Apple 2020 MacBook Air Laptop',
//         price: 82000,
//         color: 'Grey',
//         hardDisk: '256 GB'

// *************OR***************

for (let x in productDetails) {
    console.log(`${x}: ${productDetails[x]}`);
}

// OUTPUT: name: Apple 2020 MacBook Air Laptop
        // price: 82000
        // color: Grey
        // hardDisk: 256 GB