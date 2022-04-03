//Using class keyword to define constructor function
//Normal functions
var spaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new spaceShuttle("jupiter");
console.log("\nWithout using class keyword:\n"+zeus.targetPlanet); 
//using class keyword
class spaceShuttles{
    constructor(targetPlanets){
        this.targetPlanets = targetPlanets;
    }
}
var zeun = new spaceShuttles("Mercury");
console.log("Using class keyword:\n"+zeun.targetPlanets);

//Using getters and setters in class objects
console.log("\nexample of getters and setters");
class book{
    constructor(author){
        this._author = author;
    }
    get writer(){
        return this._author;
    }
    set writer(updateAuthor){
        this._author = newAuthor;
    }
}
var autho = new book("carnegie");
console.log(autho._author);