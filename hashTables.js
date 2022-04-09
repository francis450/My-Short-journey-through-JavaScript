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

	






</script>