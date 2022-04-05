//using the rest operator
console.log("\nUsing the rest operator");
//original function
const sum = (function() {
    return function sum(x,y,z){
        const args = [x,y,z];
        return args.reduce((a,b) => a + b,0);
    };
})();
console.log("Without rest operator: "+sum(2,3,4));
//using the rest operator
const sums = (function() {
    return function sums(... args){
        //const args = [x,y,z];
        return args.reduce((a,b) => a + b,0);
    };
})();
console.log("Using Rest operator: "+sums(5,3,2,4,5));