const person={
    name: 'John',
    email: 'john@gmail.com',
    password: '123424',
    city: 'delhi',
    isAdmin: true
}
function handleSignup(){
    const {name, email, ...metadata}=person;
    return{
        name,
        email,
        username: 'admin123',
        metadata:{
            ...metadata
        }
    };
}
const res=handleSignup(person);
console.log(res);