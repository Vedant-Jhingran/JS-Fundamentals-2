function calculateTotalCartValue() {
    let totalPrice = 0;
    for (let i = 0; i < arguments.length; i++) {
        totalPrice = totalPrice + arguments[i];
    };
    console.log(`The total cart value is ${totalPrice}.`);
}

calculateTotalCartValue(125, 20, 30);

//OUTPUT: The total cart value is 175.


