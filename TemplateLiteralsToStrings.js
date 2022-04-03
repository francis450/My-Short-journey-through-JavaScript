//using template literals to create strings
const person = {
    name: "Njoroge Francis",
    age: 20
};
//template literal
const greetings = `Hello there, my name is ${person.name}!
I am ${person.age} years old.`;
console.log("Template literal string:\n"+greetings);