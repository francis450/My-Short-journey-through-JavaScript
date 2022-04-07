//Profile LookUP
    console.log("\nProfile Lookup");
    //setup
    var contacts = [
        {
            "firstname" : "Akira",
            "lastname" : "Laine",
            "number" : "0543236543",
            "likes" : ["Pizza","Coding","Brownie Points"]
        },
        {
            "firstname" : "Harry",
            "lastname" : "Potter",
            "number" : "0994372684",
            "likes" : ["Hogwarts","Magic","Hagrid"]
        },
        {
            "firstname" : "Sherlok",
            "lastname" : "Holmes",
            "number" : "0487345643",
            "likes" : ["Intriguing Cases","Violin"]
        },
        {
            "firstname" : "Kristian",
            "lastname" : "vos",
            "number" : "unknown",
            "likes" : ["JavaScript","gaming","foxes"]
        },
    ];
    //console.log(contacts.length);
    function lookUpProfile(fname, prop){
        for(var i = 0; i < contacts.length ; i++){
            if(fname === contacts[i]["firstname"]){
            return contacts[i][prop] || "property no found";
            }
        }
        return "contact not found";
    }
    var data = lookUpProfile("Sherlok","likes");
    console.log(data);