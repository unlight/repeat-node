(function(d) {

	d.addEventListener("DOMContentLoaded", main);



	function main() {
		var nodes = d.querySelectorAll("[data-repeat-node]");
		nodes = Array.prototype.slice.call(nodes);
		for (var i = nodes.length - 1; i >= 0; i--) {
			var node = nodes[i];
			var repeatNode = node.dataset.repeatNode;
			var repeatCount = +repeatNode;
			if (!repeatCount) continue;
			node.removeAttribute("data-repeat-node");
			while (--repeatCount) {
				var clonedNode = node.cloneNode(true);
				insertAfter(clonedNode, node);
			}
		}
	}

	function insertAfter(elem, refElem) {
		var parent = refElem.parentNode;
		var next = refElem.nextSibling;
		if (next) {
			return parent.insertBefore(elem, next);
		} else {
			return parent.appendChild(elem);
		}
	}

})(document);