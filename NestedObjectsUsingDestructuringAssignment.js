//Accessing variables in nested objects using destructuring assignment
const LOCAL_FORECAST = {
    today : {min: 72, max: 83},
    tomorrow : {min: 73.3, max: 84.6}
};
function getMaxOfTmrw(forecast){
    "use strict";
    const {tomorrow : {max : maxOfTmrw}} = forecast;
    return maxOfTmrw;
}
console.log("Destructuring nested objects: \n"+getMaxOfTmrw(LOCAL_FORECAST));