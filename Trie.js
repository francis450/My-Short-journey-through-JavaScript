
//Trie data structure

//Used to check information in each node using ES6 Map structure
let Node = function(){
	this.key = new Map();
	this.end = false;
	this.setEnd = function(){
		this.end = true;
	};
	this.isEnd = function(){
		return this.end;
	};
};