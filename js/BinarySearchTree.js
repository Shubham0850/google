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

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  lookup(value) {
    if (this.root === null) return null;
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return true;
      if (value < currentNode.value) {
        // Left
        currentNode = currentNode.left;
      }
      if (value > currentNode.value) {
        // Right
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    // This queue is the downside of the BFS.
    // Because it became large, according to input data.
    let queue = [];

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();

      console.log(currentNode.value);

      list.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      console.log(queue);
    }
    console.log(queue);
    return list;
  }

  breadthFirstSearchR(queue, list) {
    // Because it is Recursicve
    // We need to define base case first
    if (!queue.length) return list;

    let currentNode = queue.shift();

    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchR(queue, list);
  }

  dfsInorder() {
    return traverseInorder(this.root, []);
  }

  dfsPreorder() {
    return traversePreorder(this.root, []);
  }

  dfsPostorder() {
    return traversePostorder(this.root, []);
  }
}

function traverseInorder(node, list) {
  // Recursion logic goes here
  console.log(node.value);
  if (node.left) {
    traverseInorder(node.left, list);
  }

  list.push(node.value);

  if (node.right) {
    traverseInorder(node.right, list);
  }

  return list;
}

function traversePreorder(node, list) {
  // Recursion logic goes here

  list.push(node.value);

  if (node.left) {
    traversePreorder(node.left, list);
  }
  if (node.right) {
    traversePreorder(node.right, list);
  }

  return list;
}

function traversePostorder(node, list) {
  // Recursion logic goes here

  if (node.left) {
    traversePostorder(node.left, list);
  }
  if (node.right) {
    traversePostorder(node.right, list);
  }

  list.push(node.value);

  return list;
}

BinarySearchTree.addValues = function (...values) {
  let tree = new BinarySearchTree();
  for (let i = 0; i < values.length; i++) {
    tree.insert(values[i]);
  }
  return tree;
};

const tree = BinarySearchTree.addValues(9, 4, 1, 6, 20, 15, 170);

console.log(JSON.stringify(traverse(tree.root)));

// BFS
console.log(tree.breadthFirstSearch());

// BFS using Recursion
console.log(tree.breadthFirstSearchR([tree.root], []));

// DFS InOrder
console.log(tree.dfsInorder());

// DFS PreOrder
console.log(tree.dfsPreorder());

// DFS PostOrder
console.log(tree.dfsPostorder());

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
