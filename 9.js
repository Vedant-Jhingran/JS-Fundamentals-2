function uniqueCharactersCheck(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        for (let j = i + 1; j < inputString.length; j++) {
            if (inputString[i] === inputString[j]) {
                console.log("The input string contains duplicates.");
                return;
            }
        }
    }
    console.log("The input string contains only unique characters.");
};

uniqueCharactersCheck('alakh');
//OUTPUT: The input string contains duplicates.

uniqueCharactersCheck('pandey');
// OUTPUT: The input string contains only unique characters.