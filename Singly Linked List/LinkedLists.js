class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    get(index) {
        if (index < 0 || index >= this.size) return -1;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    addAtHead(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        return this;
    }

    addAtTail(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this;
    }

    addAtIndex(index, value) {

        if (index < 0 || index > this.size) return 'invalid index';
        if (index === this.size) return this.addAtTail(value);
        if (index === 0) return this.addAtHead(value);

        const node = new Node(value);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = node;
        node.next = temp;
        this.size++;
        return this;
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return 'invalid index';
        if (index === 0) {
            let temp = this.head;
            this.head = temp.next;
            this.size--;
            if (this.size === 0) {
                this.tail = null;
            }
            return temp;
        }
        if (index === this.size - 1) {
            let oldTail = this.tail;
            let newTail = this.get(index - 1);
            this.tail = newTail;
            newTail.next = null;
            return oldTail
        }

        let prev = this.get(index-1);
        let deletedNode = prev.next;
        prev.next = deletedNode.next;
        this.size--;
        return deletedNode;
    }

}

const sl = new SinglyLinkedList();
sl.addAtHead(1);
sl.addAtTail(2);
sl.get(1);

console.log(sl.get(1));