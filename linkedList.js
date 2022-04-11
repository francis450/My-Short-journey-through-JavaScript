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


	}




</script>