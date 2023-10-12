// // // playtest
// // const movieList = document.getElementById("movie-list");
// // movieList.style['backgroundColor'] = "red";
// // movieList.style.direction = "block";

// // const userChosenKeyName = 'level';

// // let person = {
// //     "first-name": "Mark",
// //     age: 26,
// //     hobbies: ["Music", "Sports"],
// //     [userChosenKeyName]: '...',
// //     greet: function () {
// //         alert("Hi there!");
// //     },
// //     1.5: 'Hello',
// // };

// // // ...

// // delete person.age;
// // person.isAdmin = true;

// // const keyName = 'first-name';

// // // console.log(person["first-name"]);
// // console.log(person[keyName]);
// // console.log(person[1.5]);
// // console.log(person);

// --- Spread operator example
// const person = { name: "Mark", hobbies: ["Music", "Sports"] };
// const anotherPerson = person;

// person.age = 30;

// const person2 = { ...person };
// person.age = 31;

// const person3 = { ...person, age: 29, hobbies: [...person.hobbies]};

// --- object.assign example

// const person = {name: 'Mark'};
// const person2 = object.assing({}, person);
// person2.name = 'Marco'

// --- this and arrow function

const members = {
    teamName: "Blue Rockets",
    people: ["Mark", "Irina"],
    getTeamMembers() {
        this.people.forEach(p => {
            console.log(p + ' - ' + this.teamName);
        })
    },
};

members.getTeamMembers()