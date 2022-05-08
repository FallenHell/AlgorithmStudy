class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
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

function checkIfValidBST(root){
    return helper(root, -Infinity, Infinity);
}

function helper(node, min, max){
    if (node=null) return true;
    let value = node.value;
    if(value <= min || value >= max) return false;

    const isLeftBST = helper(node.left, min, value);
    const isRightBST = helper(node.right, value, max);
    return isLeftBST&&isRightBST;
}

const tree = new BinaryTree();
tree.insert([10,5,20,3,7,15,30,null,4,null,null,null,17,null,null,null,null,null,null,18]);
