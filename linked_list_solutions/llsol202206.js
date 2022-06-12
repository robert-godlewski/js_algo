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

    // Given the head of a linked list, remove the nth node from the end of the list and return its head.
    // head parameter is a node list
    // n is a number of nodes that is away from the tail of the list
    // This solution doesn't work
    removeNthFromEnd(head, n) {
        var current = head;
        var prev = null;
        var len = 1;
        while (current) {
            //console.log(`current node value = ${current.val}`);
            prev = current;
            current = current.next;
            len++;
        }
        var i = 0;
        current = head;
        while (i < len-n) {
            prev = current;
            current = current.next;
            i++;
        }
        prev.next = current.next;
        return head;
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
console.log('Removing the Nth node from the Linked List:');
ll.head = null;
var node1 = new Node(1);
var node2 = new Node(2);
node1.next = node2;
var node3 = new Node(3);
node2.next = node3;
var node4 = new Node(4);
node3.next = node4;
var node5 = new Node(5);
node4.next = node5;
ll.head = node1;
console.log('Original Linked List:');
printLL(ll);
ll.removeNthFromEnd(this, 2);
console.log('Removing the 2nd last node from the list:');
printLL(ll);
