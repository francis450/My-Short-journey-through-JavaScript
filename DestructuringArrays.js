//Destructuring Arrays

const [z,,,x,y] = [1,2,3,4,5,6,7];
console.log("Destructuring an array: \n"+z,x,y);
const [,,...arr7] = [1,2,3,4,5,6];
console.log("Removing elements using destructuring assignment and rest operator\n"+arr7);
const [a,,b,,,c,...arr0] = [344,22,14,1,32,13,543,13,53,65]
console.log("Reassigning variables using de and retsop:\n"+arr0);
console.log("\n"+a,b,c);