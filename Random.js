//Returning Random Fraction
    console.log("\nRandom fractions");
    function randomFraction(){
        var ran = Math.random();
        return ran;
    }
    console.log(randomFraction());
    //Random Whole Number
    console.log("\nRandom Whole Number");
    function randomWholeNumber(){
        return Math.floor(Math.random()*20);
    }
    console.log(randomWholeNumber());

    //Rnadom numbers between ranges
    console.log("\nRandom numbers between a range");
    function randombtwnrange(min , max){
        return Math.floor(Math.random() * (max-min+1))+min;
    }
    console.log(randombtwnrange(9,10));