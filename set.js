<script>
	//Set -> Its a kind of an array but does not accept duplicate value
	function mySet(){
		//the var collection will hold the set
		var collection = [];

		//this method will check for the presence of an element and return true or false
		this.has = function(element){
			return (collection.indexOf(element) !== -1);
		};

		//this method will return all the values in the set
		this.values = function(){
			return collection;
		};

		//this method will add an element to the set
		this.add = function(element){
			if(!this.has(element)){
				collection.push(element);
				return true;
			}
			return false;
		};

		//this method will remove an element from the sett
		this.remove = function(element){
			if(this.has(element)){
				index = collection.indexOf(element);
				collection.splice(index,1);
				return true;
			}
			return false;
		};

		//this mwthod wil return the size of the collection
		this.size = function(){
			return collection.length;
		};

		//this method will return the union of two sets
		this.union = function(otherSet){
			var unionset = new Set();
			var firstset = this.values();
			var secondset = otherSet.values();
			firstset.forEach(function(e){
				unionset.add(e);
			});
			secondset.forEach(function(e){
				unionset.add(e);
			});
			return unionset;
		};

		//this method will return the intersection of two sets as a new set
		this.intersection = function(otherSet){
			var intersectionSet = new Set();
			var firstset = this.values();
			firstset.forEach(function(e){
				if(otherSet.has(e)){
					intersectionSet.add(e);
				}
			});
			return intersectionSet;
		};

		//this method will return the difference of two sets as a new set
		this.difference = function(otherSet){
			var differenceSet = new Set();
			var firstset = this.values();

			firstset.forEach(function(e){
				if(!otherSet.has(e)){
					differenceSet.add(e);
				}
			});
			return differenceSet;
		};

		//This method will test if the set is a subset of a different set
		this.subset = function(otherSet){
			var firstset = this.values;

			return firstset(function(value){
				return otherSet.has(value);
			});
		};

	}

	var setA = new mySet();
	var setB = new mySet();

	setA.add("a");
	setA.add("b");
	setA.add("c");
	setA.add("d");
	setA.add("e");
	setA.add("f");

	setB.add(1);
	setB.add(2);
	setB.add(3);
	setB.add(4);
	setB.add(5);

	setA.remove("c");
	var yeah = setB.union(setA);
	console.log(yeah);

</script>