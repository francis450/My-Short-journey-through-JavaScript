//Trial example of getters and setters
function makeClass(){
    class thermostat{
        constructor(farenheits){
            this.farenheit = 5/9 * (farenheits);
        }
        get temp(){
            return this.farenheit;
        }
        set temp(celcius){
            this.farenheit = celcius;
        }
    }
    return thermostat;
}
const thermostat = makeClass();
const thermos = new thermostat(372);
let tmp = thermos.temp;
thermos.temp = 26;
tmp = thermos.temp;
console.log("Trial on getters and setters\n"+tmp);