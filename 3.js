const students = [
    {
        name: "Mithun",
        marks: 95
    },
    {
        name: "Prabir",
        marks: 75
    },
    {
        name: "Alka",
        marks: 92
    },
    {
        name: "Shivam",
        marks: 70
    },
    {
        name: "Farman",
        marks: 99
    }
];

function checkResults(name) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            if (students[i].marks > 90) {
                console.log(`Congratulations ${students[i].name}! You have cleared the exam.`);
            } else {
                console.log(`Sorry ${students[i].name}! You have not cleared the exam.`);
            }
            return;
        }
    }
    console.log("Invalid User!");
};


checkResults("Mithun");
//OUTPUT: Congratulations Mithun! You have cleared the exam.

checkResults("Prabir");
//OUTPUT: Sorry Prabir! You have not cleared the exam.

checkResults("Modi");
//OUTPUT: Invalid User!