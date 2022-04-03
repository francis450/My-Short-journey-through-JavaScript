//checking if object contains a certain property
    console.log("\nCheck for prop");
    var comrade = {
        name : "njoroge",
        course : "computer science",
        dob : 2001,
        units : 8
    };
    function checkprop(prop)
    {
        if(comrade.hasOwnProperty(prop))
        {
            return comrade[prop];
        }else{
            return "not found";
        }
        
    }
    console.log(checkprop("name"));