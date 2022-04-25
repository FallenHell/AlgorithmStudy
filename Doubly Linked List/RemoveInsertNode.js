class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

function linkNodes(node1, node2) {
    node1.next = node2;
    node2.prev = node1;
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    remove(node) {
        if (this.head === node) this.head = node.next;
        if (this.tail === node) this.tail = node.prev;

        if(node.prev) node.prev.next = node.next;
        if(node.next)node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
    }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
