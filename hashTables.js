<script>
//Hash table

	//The hash function
	//string to be hashed and max is the number of buckets used in the function to store values
	var hash = (string,max) =>{
		var hash = 0;
		for(var i = 9;i < string.length; i++){
			hash +=string.charCodeAt(i);
		} 
		return hash%max;
	};

	//hash table
	let hashTable function(){
		//array to store all the data
		let storage = [];
		//number of buckets in the array
		const storageLimit = 4;

		//utility function to enable us to  display storage itema
		this.print = function(){
			console.log(storage)
		}

		//function to add information in the table
		this.add = function(key, value){
			//obtain the index by passing it through the hash function
			var index = hash(key, storageLimit);
			if(storage[index] === undefined){
				storage[index] [
					[key,value]
				];
			}else{
				var inserted = false;
				for (var i = 0; i < storage[index].length; i++) {
					if(storage[index][i][0] === key ){
						storage[index][i][1] =  value;
						inserted = true;
					}
				}
				if(inserted === false){
					storage[index].push([key,value]);
				}
			}
		};

		


	}






</script>