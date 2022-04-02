//LOOPS
    //DO WHILE
    console.log("\nDo while");
    var anArr = [];
    var i = 10;
    do{
        anArr.push(i);
        i--;
    }while(i>0)
    console.log(anArr);

    //FOR loop
    console.log("\nFOR loop");
    var ourArray = [];

    for(var i = 0; i < 10; i+=2){
        ourArray.push(i);
    }
    console.log(ourArray);
    //NESTED ARRAYS
    console.log("\nNESTED FOR LOOP");
    function multiplyAll(arr){
        var product = 1;
        for(var i=0; i<arr.length; i++){
            for(var j=0; j<arr[i].length; j++){
                product *= arr[i][j];
            }
        }
        return product;
    }
    
    var products = multiplyAll([[1,2],[3,4],[5,6,7]]);
    console.log(products);

    //While loop
    console.log("\nWhile Loop");
    var myArr = [];

    var i = 0;
    while(i<17){
        myArr.push(i);
        i+=2;
    }
    console.log(myArr.length);