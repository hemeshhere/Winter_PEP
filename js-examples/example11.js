// js object named user that :-
// p1-> age:- given age
// p2-> a function that takes no parameter
// task-> inside name function write a statement thjat access and print age of that person


const person=[
    {
        name: "Dev",
        age: 2
    },
    {

        name: "Sam",
        age: 2
    }
];
const names=person.map((p,i)=>{
    return i+". "+p.name;
}).forEach(p => console.log(p));
// console.log(names);