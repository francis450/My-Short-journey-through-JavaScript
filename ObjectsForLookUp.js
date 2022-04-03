//Objects use for lookup
    console.log("\nUse of Objects for Lookup");
    function mylookup(val)
    {
        var result;
        var lookup = {
            "alpha" : "Adams",
            "bravo" : "Boston",
            "charlie" : "chicago",
            "delta" : "Denver",
            "echo" : "Easy",
            "foxtrot" : "Frank" 
        };
        result = lookup[val];
        return result;
    }
    console.log(mylookup("charlie"));