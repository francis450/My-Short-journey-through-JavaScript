<script>
	//Linked list
	function linkedList(){
		var length = 0;
		var head = null;

		//A function to create a node
		var Node = function(element){
			this.element = element;
			this.next = null;
		};

		//to determine the number of nodes on the list
		this.size = function(){
			return length;
		};

		//function to return the head node
		this.head = function(){
			return head;
		}

		//function to add a node to the list
		this.add  = function(){
			var node = new Node(element);
			if(head === null){
				head = node;
			}else{
				currentNode = head;

				while(currentNode.next){
					currentNode = currentNode.next;
				} 

				currentNode.next = node;
			}

			length++;
		};

		//function to remove and rearrange the remaining nodes
		this.remove = function(element){
			var currentNode = head;
			var previousNode;
			if(currentNode.element === element){
				head = currentNode.next;
			}else{
				while(currentNode.element != element){
					previousNode = currentNode;
					currentNode = currentNode.next;
				}
				previousNode.next = currentNode.next;
			}
			length--;
		};

		//this function returns true if the size of the list is zero
		this.isEmpty = function(){
			return length === 0;
		}

		//returns the position of a node in the list
		this.indexOf = function(index){
			var currentNode = head;
			var index = -1;

			while(currentNode){
				index++;
				if(currentNode.element === element){
					return index;
				}
				currentNode	= currentNode.next
			}

			return -1;
		};

		//returns the data in the named node
		this.elementAt = function(index){
			var currentNode = head;
			var count = 0;

			while(count < index){
				count++;
				currentNode = currentNode.next;
			}
			return currentNode.element;
		};

		//to add at n position
		this.addAt = function(index,element){
			var node = new Node(element);

			var currentNode = head;
			var previousNode;
			var currentIndex = 0;

			if(index > length){
				return false;
			}

			if(index === 0){
				node.next = currentNode;
				head = node;
			}else{
				while(currentIndex < index){
					currentIndex++;
					previousNode = currentNode;
					currentNode = currentNode.next;
				}
				node.next = currentNode;
				previousNode.next = node;
			}
			length++;
		}


	}




</script>