//Record collection
    console.log("\nRecord collection");
    var collection = {
        "2548": {
            "album" : "Slipperly When Wet",
            "artist" : "Bon Jovi",
            "tracks" : [
                "Let It Rock",
                "You give Love A Basd Name"
            ]
        },
        "2468" : {
            "album" : "1999",
            "artist" : "Prince",
            "tracks" : [
                "1999",
                "Little Red Corvette"
            ]
        },
        "1245" : {
            "artist" : "Robert Palmer",
            "tracks" : []
        },
        "5439" : {
             "album": "ABBA Gold"
        }
    };
    console.log("The tracks: "+collection["2468"]["tracks"][1]);
    //make a copy of the object before any updates for tests
    var collectionCopy = JSON.parse(JSON.stringify(collection));