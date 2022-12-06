//1. We will implement different file handler for different types of files such as text, image
//and xml files. Which design pattern will be preferred for this problem. Provide suitable
//code snippet for this.
var Node = function (name) {
this.children = []; this.name =
name;
}
Node.prototype = {
add: function (child) {
this.children.push(child);
},
remove: function (child) {
var length = this.children.length; for (var i =
0; i &lt; length; i++) {
if (this.children[i] === child) {
this.children.splice(i, 1); return;
}
}
},
getChild: function (i) {
return this.children[i];
},
hasChildren: function () {
return this.children.length &gt; 0;
}
}
// recursively traverse a (sub)tree
function traverse(indent, node) { console.log(Array(indent++).join(&quot;--&quot;)
+ node.name);
for (var i = 0, len = node.children.length; i &lt; len; i++) {
traverse(indent, node.getChild(i));
}
}
function run() {
var tree = new Node(&quot;root&quot;); var left =
new Node(&quot;left&quot;) var right = new
Node(&quot;right&quot;);

var leftleft = new Node(&quot;leftleft&quot;); var leftright =
new Node(&quot;leftright&quot;); var rightleft = new
Node(&quot;rightleft&quot;); var rightright = new
Node(&quot;rightright&quot;);
tree.add(left);
tree.add(right);
tree.remove(right); // note: remove
tree.add(right);
left.add(leftleft);
left.add(leftright);
right.add(rightleft);
right.add(rightright);
traverse(1, tree);
}