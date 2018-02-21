const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
// PROBLEM 4 - determine the average age of customers

const firstLetters = fruits.map(n => n.slice(0,1));

const patrons = customers.map(n => {
    return {
        name: n.name,
        age: n.age
    };
});

const publicGuardians = customers.filter(n => {
    return n.occupation === 'Police Officer' || n.occupation === 'Teacher';
});

const avgAge = customers.reduce((average, person) => {
    return Math.round((average + person.age) / customers.length);
}, 0);