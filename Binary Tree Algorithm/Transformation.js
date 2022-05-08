class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function buildBSTFromArray(array, left = 0, right = array.length - 1) {
    if (left > right) return null;

    let middle = Math.floor((left + right)/2);

    const node = new Node(array[middle]);
    node.left = buildBSTFromArray(array, left, middle - 1);
    node.right = buildBSTFromArray(array, middle + 1, right);

    return node;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(buildBSTFromArray(array));