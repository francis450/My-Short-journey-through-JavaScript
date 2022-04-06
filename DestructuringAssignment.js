//using Destructuring Assignment
console.log("\nUsing destructuring Assignment");
const avgTemp = {
    today : 77.5,
    tommorow : 79
};
function getTempOfTmrw(avgTemp){
    "use strict";
    const {tommorow : tmrtemp} = avgTemp;
    return tmrtemp;
}
console.log(getTempOfTmrw(avgTemp));