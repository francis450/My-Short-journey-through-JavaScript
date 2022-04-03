//updating an object
    console.log("\nUpdating an object");
    function updateobj(id,prop,value){
        if(value === ""){
            delete collection.id[prop];
        }else if(prop === "tracks"){
            collection[id][prop] = collection[id][prop] || [];
            collection[id][prop].push(value);
        }else{
            collection[id][prop] = value;
        }

        return collection[id][prop];
    }
    console.log(updateobj("5439","tracks","wakioi"));