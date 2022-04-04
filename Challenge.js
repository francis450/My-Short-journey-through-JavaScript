//Challenge
 const result = {
     success: ["max-length","no-amd","prefer-arrow-functions"],
     failure: ["no-var","var-on-top","linebreak"],
     skipped: ["id-blacklist","no-dup-keys"]
 };

 function makelist(arr){
     const resulDisplayArray = [];
     for(let i = 0;i<arr.length;i++){
         resulDisplayArray.push(`<li class = "text-wrning"> ${arr[i]} </li>`);
     }
     return resulDisplayArray;  
 }
const resul = makelist(result.skipped);
console.log(resul);