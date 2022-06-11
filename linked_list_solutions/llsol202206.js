class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        //this.prev = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        // this.tail = null;
    }

    // Parameter is an actual node
    // Cannot use prev function
    // Solved under 12 min but not sure why leet code is not accepting this?
    deleteNode(node) {
        var current = this.head;
        var prev = null;
        while (current) {
            console.log(`current node value = ${current.val}`);
            if (current.val == node.val) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                break;
            } else {
                prev = current;
                current = current.next;
            }
        }
    }
}


// Testing grounds

// Will be used to print out the whole linked list
var printLL = function(ll) {
    var current = ll.head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

console.log('#############');
console.log('Linked List Algorithms');
// Problem 1
console.log('Deleting a Node from a list');
var node1 = new Node(4);
//console.log(`node1 = ${node1.val}`);
var node2 = new Node(5);
node1.next = node2;
var node3 = new Node(1);
node2.next = node3;
var node4 = new Node(9);
node3.next = node4;
var ll = new LinkedList();
ll.head = node1;
//console.log(`ll head = ${ll.head.val}`);
console.log('Original Linked List:');
printLL(ll);
console.log('Removing 5 from the list');
ll.deleteNode(node2);
printLL(ll);
