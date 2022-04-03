//Returning Early Pattern from functions
    console.log("\nAND & OR")
    function abtest(a,b)
    {
        if(a<0 || b<0){ /*Makes the fxn exit instead of waiting for it to 
        execute the other return statement*/
            return undefined;
        }
        return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
    }
    console.log(abtest(2,2));