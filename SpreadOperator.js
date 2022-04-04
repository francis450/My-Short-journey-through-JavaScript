//Using spread opereator-> Spreads an array into its individual parts
console.log("\nSpread Operator")
//Without spread operator
const arr1 = ['jan','feb','mar','apr','may'];
let arr2;
(function() {
    arr2 = arr1;
    arr1[0] = 'potato';
})();
console.log("Without spread operator\n"+arr2);
//using spread operator
const arr3 = ['jan','feb','mar','apr','may'];
let arr4;
(function() {
    arr4 = [...arr3];//spread operator
    arr3[0] = 'potato';
})();
console.log("using spread operator\n"+arr4);
