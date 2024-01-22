const name = [
    "Modi",
    "Shah",
    "Gadkari",
    "Mamta Didi",
    "Rahul",
    "Kharge",
    "Rajnath",
];

function isUserPresent(user) {
    if (name.includes(user)) {
        console.log(`Yes, ${user} is a valid user.`);
    } else {
        console.log(`No, ${user} is not a valid user.`);
    }
};

isUserPresent("Modi");

//OUTPUT: Yes, Modi is a valid user.

isUserPresent("Someone");

//OUTPUT: No, Someone is not a valid user.