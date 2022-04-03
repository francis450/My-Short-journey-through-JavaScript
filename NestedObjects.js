
    //nested objects
    console.log("\nAccessing Nested Objects");
    var myStorage = {
        "car":{
            "inside":{
                "glove box":"maps",
                "passenger seat" : "crumbs",
            }, 
            "outside":{
                "trunk":"jack"
            }
        }

    };
    var myglovebox = myStorage.car.inside["glove box"];//accessing nested objects values
    console.log(myglovebox);