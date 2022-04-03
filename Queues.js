
    //QUEUE
function next(arr,item)
{
    arr.push(item);//Adds an item on the end of the array
    //return item; Returns the last added item
    return arr.shift();//Removes an item from the front of the array
}
var testArr = [1,2,3,4,5];
console.log("Before: "+JSON.stringify(testArr));
console.log(next(testArr,6));
console.log("After: " + JSON.stringify(testArr));