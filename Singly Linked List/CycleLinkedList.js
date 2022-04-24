class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
//Floyd Algorithm hare and turtoise... :D
function checkLoop (head){
    if(!head) return null;
    if(!head.next) return null;

    let hare = head;
    let tortoise = head;

    while (hare && hare.next) {
        hare = hare.next.next;
        tortoise = tortoise.next;
        if (hare===tortoise) break;
    }
    if (hare !== tortoise) return null;
    let pointer = head;
    while (pointer !== tortoise){
        pointer = pointer.next;
        tortoise = tortoise.next;
    }
    return tortoise;
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = two;
let head = one;


