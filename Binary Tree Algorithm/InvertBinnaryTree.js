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

function invertIterative(root){
    if (root === null) return;
    const queue = [root];
    while(queue.length){
        const current = queue.shift();
        let temp = current.right;
        current.right = current.left;
        current.left = temp;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return root;
}

function invertRecursive(node){
    if (node === null) return;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    invertRecursive(node.left);
    invertRecursive(node.right);
    return node;
}

const tree = new BinarySearchTree();
tree.insert([1,2,3,4,null,null,5,6,null,7]);

console.log(invertRecursive(tree.root));