/*davaleba 2
//
const students = [
    { name: "Giorgi", grades: [90, 85, 88] },
    { name: "Nino", grades: [100, 95, 98] }
];

students.forEach(student => {
    const { name, grades: [firstGrade] } = student;
    console.log(`moswavle ${name}s pirveli nishania ${firstGrade}`);
});
*/

/*
//challenge 2

const defaultSettings = {
    theme: "light",
    language: "en",
    notifications: true
};

const userSettings = {
    theme: "dark",
    notifications: false
};

const finalSettings = {
    ...defaultSettings,
    ...userSettings
};

console.log(finalSettings);
*/


/*

//davaleba 1

function calculateTotal(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(calculateTotal(1, 2, 3, 4)); // 10

*/