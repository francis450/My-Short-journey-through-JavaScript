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
		


	}






</script>