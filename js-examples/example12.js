const person=[
    [
        {
            name: "Dev",
            age: 2
        },
        {
            
            name: "Sam",
            age: 3
        }
    ],
    [
        {
            name: "Sundae",
            age: 2
        },
        {
            
            name: "German",
            age: 2
        }
    ]

];
const names=person.flatMap((arr,i)=>{
    return arr.map(p=>p.name);
}).forEach(p => console.log(p));