const person={
    name: "Dev",
    age: 2
};
// console.log(person);
// console.log(person.name);
// console.log(person.age);
const jsonPerson=JSON.stringify(person, null,2);
const parsedPerson=JSON.parse(jsonPerson);
console.log(jsonPerson);
console.log(parsedPerson);