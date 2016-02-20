
var DS;

(function(DS){
	'use strict';
	
	var SLL = function(detach) {
		
		function SLL(detach) {
			this.start = null;
			this.end = null;
			this.length = 0;
			this.detach = detach;
		}
		
		SLL.prototype.add = function() {
			
		}
		
		return new SLL(detach);
	}
	
	DS.makeSLL = function(detach) { return SLL(detach) };
})(DS || (DS = {}));





var sll1 = DS.makeSLL(true);
var sll2 = DS.makeSLL();

sll2.node = "node2";


console.log(sll1);
console.log(sll2);