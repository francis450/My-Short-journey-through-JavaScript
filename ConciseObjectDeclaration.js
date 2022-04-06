//concise object declaration using simple fields
//Normal object declaration
console.log("\nConcise Object Literals declaration using simple fields\n")
console.log("Normal declaration");
const createPerson = (name,age,gender) => {

    return{
        name:name,
        age:age,
        gender:gender
    };

};
console.log(createPerson("Francis",20,"male"));
//concise declaration
console.log("Concise declaration");
const craetePerson = (name,age,gender) => ( {name,age,gender} );
const persons = craetePerson("Niki",8,"female");
console.log(persons)

//concise declarative 
//original object function declaration
const bike = {
    gear : 2,
    setgear : function(newgear){
        "use strict"
        this.gear = new gear;
    }
}
//concise declarative functions
const bikes = {
    gear : 2,
    setgear(newgear){//we got rid of function keyword and the :
        this.gear = new gear;
    }
}