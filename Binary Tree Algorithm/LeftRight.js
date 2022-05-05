class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(array){
        if(array.length === 0) return;
        let i = 0;
        if(!this.root){
            if(array[0] ===  null) return;
            else{
                let node = new Node(array[0]);
                this.root = node;
                i++;
                if(i === array.length) return this;
            }
        }

        const queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            if(!current.left){
                if (array[i] !== null){
                    let node = new Node(array[i]);
                    current.left = node;
                    i++;
                    if(i === array.length) return this;
                }
            }
            if (current.left) queue.push(current.left);
            if(!current.right) {
                if (array[i] !== null){
                    let node = new Node(array[i]);
                    current.right = node;
                    i++;
                    if (i === array.length) return this;
                }
            }
            if (current.right) queue.push(current.right);
        }

    }
}

function rightView(root){
    if(!root) return [];
    const right = [];
    const queue = [];

    while(queue.length){
        let length = queue.length;
        let count = 0;
        while (count < length) {
            count ++;
            const current = queue.shift();
            if(count === length) right.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }
    return right;
}

let bst = new BinarySearchTree();
bst.insert([7,11,1,null,7,2,8,null,null,null,3,null,null,5,null]);


console.log(rightView(bst.root));
