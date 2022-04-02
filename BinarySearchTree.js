<script>
	//Binary Search Tree
console.log("I'm in!");
	//A blueprint of a class
	class Node{
		constructor(data,left = null,right = null){
			this.data = data;
			this.left = left;
			this.right = right;
		}
	}

console.log("I'm in!");
	class BST{
		constructor(){
			this.root = null;
		}

		//consolelog("I'm In");

		add(data){
			const node = this.root;
			if(node === null){
				this.root = new Node(data);
				return;
			}else{
				const searchTree = function(node){
					if(data < node.data){
						if(node.left === null){
							node.left = new Node(data);
							return;
						}else if(node.left !== null){
							return searchTree(node.left);
						}
					}else if(data > node.data){
						if(node.right === null){
							node.right = new Node(data);
							return;
						}else if(node.right !== null){
							return searchTree(node.right);
						}
					}else{
						return null;
					}
				};
				return searchTree(node);
			}

			const findmin = function(){
				let current = this.root;
				while(current.left != null){
					current = current.left;
				}
				return current.data;
			}

			const findmax = function(){
				let current = this.root;
				while(current.right !== null){
					current = current.right;
				}
				return current.data;
			}

			const find = function(data){
				let current = this.root;
				while(current.data !== data){
					if(data < current.data){
						current = current.left;
					}else{
						current = current.right;
					}
					if(current === null){
						return null;
					}
				}
				return current;
			}

			const isPresent = function(data){
				let current = this.root;
				while(current){
					if(data === current.data){
						return true;
					}
					if(data<current.data){
						current = current.left;
					}else{
						current = current.right;
					}
				}
				return current;
			}

			const remove = function(data){
				const removeNode = function(node,data){
					
					if(node == null){
						return null;
					}
					if(data == node.data){
						//if the node has no children
						if(node.left == null && node.right == null){
							return null;
						}
						//node has no left child
						if(node.left == null){
							return node.right;
						}
						//node has no right child
						if(node.right == null){
							return node.left;
						}
						//node has two children
						var tempNode = node.right;
						while(tempNode.left !== null){
							tempNode = tempNode.left;
						}
						node.data = tempNode.data;
						node.right = removeNode(node.right, tempNode.data);
						return node;
					}else if(data < node.data){
						node.left = removeNode(node.left, data);
						return node;
					}else{
						node.right = removeNode(node.right, data);
						return node;
					}
				}
				this.root = removeNode(this.root,data);
			}
		}
	}
	console.log("I'm in!");

	const bst = new BST();

	bst.add('a');
	bst.add('b');
	bst.add('c');
	bst.add('d');
	bst.add('e');
	bst.add('f');
	bst.add('g');
	bst.add('h');






</script>