//Using destructuring Assignment to pass an object as a argument to a function
console.log("\nPassing an object as an argument to a function");
const stats = {
    max: 56.78,
    standard_deviation : 4.34,
    median: 38.54,
    mode:  23.87,
    min: -.75,
    average: 35.85
};
const half = (function(){
    return function half(stats){
        return (stats.max + stats.min) / 2.0;
    };
})();   
console.log(stats);
console.log("Without destructuring\n"+half(stats));

const halfs = (function(){
    return function halfs({max,min}){
        return (max + min) / 2.0;
    };
})();   
//console.log(stats);
console.log("using destructuring\n"+halfs(stats));
