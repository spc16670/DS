
var DS;

(function(DS){
	'use strict';
	
	var SLL = function(params) {
		
		
		function SLL(params) {
			this.start = null;
			this.end = null;
			this.length = 0;
			this.detach = params;
		}
		
		var Node = function(data) {
			this.next = null;
			this.data = data;
		};
		
		SLL.prototype.add = function(data) {
			if (data === undefined) { throw new Error('data must be valid to add'); }

			var newNode = new Node(data);

			if (this.start === null) {
				this.start = newNode;
			} else {
				this.end.next = newNode;
			}

			this.length++;
			this.end = newNode;
		}
		
		SLL.prototype.remove = function(data) {
			if (data === undefined) { throw new Error('data must be valid to add'); }
			if (this.start === null) { return; }
			
			var previous = null;
			var current = this.start;

			while ((current !== null) && (current.data !== data)) {
				previous = current;
				current = current.next;
			}

			if (current !== null) {
				if (previous === null) {
					this.start = this.start.next;
				}
				if (current.next === null) {
					this.end = previous;
					if (this.end !== null) {
						this.end.next = null;
					}
				}
				if ((previous !== null) && (current.next !== null)) {
					previous.next = current.next;
				}
				this.length--;
			}
		}
		
		SLL.prototype.print = function() {
			var previous = null;
			var current = this.start;

			while (current !== null) {
				console.log(current.data);
				previous = current;
				current = current.next;
			}
		}
		
		return new SLL(params);
	}
	
	DS.makeSLL = function(params) { return SLL(params) };
})(DS || (DS = {}));





var sll1 = DS.makeSLL(true);
sll1.add({ a : "a"});
sll1.add({ b : "b"});
var c = { c : "c"};
sll1.add(c);
sll1.add({ d : "d"});

sll1.remove(c);

sll1.print();
//console.log(sll1);
