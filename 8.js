function calculateRemainingDays(eventDate) {
    let currentDate = new Date();
    let eventDate1 = new Date(eventDate);
    let timeDifference = eventDate1 - currentDate;
    let x = Math.ceil(timeDifference/(1000 * 60 * 60 * 24));
    return x;
};

console.log(`The number of remaining days are ${calculateRemainingDays("2024-2-29")}`);
// OUTPUT: The number of remaining days are 39