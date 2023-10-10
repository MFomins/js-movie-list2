// playtest
const movieList = document.getElementById("movie-list");
movieList.style['backgroundColor'] = "red";
movieList.style.direction = "block";

const userChosenKeyName = 'level';

let person = {
    "first-name": "Mark",
    age: 26,
    hobbies: ["Music", "Sports"],
    [userChosenKeyName]: '...', 
    greet: function () {
        alert("Hi there!");
    },
    1.5: 'Hello',
};

// ...

delete person.age;
person.isAdmin = true;

const keyName = 'first-name';

// console.log(person["first-name"]);
console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);


