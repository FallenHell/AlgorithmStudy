class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
//LIFO
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    addAtBeginning(value){
        const node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        }else{
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        this.size++;
        return this;
    }

    removeFromBeginning(){
        if(!this.first) return null;
        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        if(this.size === 0){
            this.last = null;
        }
        return temp;
    }

}

const stack = new Stack();
stack.addAtBeginning(1);
stack.addAtBeginning(2);
stack.addAtBeginning(3);

console.log(stack);