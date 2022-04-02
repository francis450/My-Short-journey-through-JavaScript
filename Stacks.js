<script>
 //The stack class

 console.log("The stack class:\n");

//create a stack
 	var stack = function(){
 		this.count = 0
 		this.storage = {};


 		//Add a value onto the end of the stack
 		this.pussh = function(value){
 			this.storage[this.count] = value;
 			this.count++;
 		}

 		//Remove and return the value at the end of the stack
 		this.pop = function(){
 			if(this.count == 0){
 				return undefined;
 			}

 			this.count--;
 			var result = this.storage[this.count];
 			delete this.storage[this.count];
 			return result;
 		}


 		this.size = function(){
 			return this.count;
 		}


 		//Return the value at the end of the stack
 		this.peek = function(value){
 			return this.storage[this.count-1];
 		}
 	}

 	var stacks = stack();
 	// stacks.pussh(67);
 	// stacks.pussh(23);
 	// stacks.pussh(44);
 	// console.log(stacks.peek());
 	// console.log(stacks.pop())
 	// console.log(stacks.peek());
</script>