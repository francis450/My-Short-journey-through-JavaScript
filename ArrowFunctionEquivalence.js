//Arrow function equivalence
const magic = () => new Date();

let myConcat = (arr1,arr2) => arr1.concat(arr2);//concatenates two arrays into one 

console.log(magic());
console.log(myConcat([1,2],[3,4,5]));
