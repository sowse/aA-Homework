// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    let new_node = new TreeNode(val);
    if(this.root === null) {
      return this.root = new_node;
    }
    
    if(val < currentNode.val) {
      if(currentNode.left === null) {
        currentNode.left = new_node
      } else {
        this.insert(val, currentNode.left)
      }
    } else if(currentNode.right === null) {
      currentNode.right = new_node;
    } else {
      this.insert(val, currentNode.right);
    }

  }

  search(val) {
    // Your code here
    let currentNode = this.root;

    while(currentNode) {
      if(currentNode.val === val) {
        return true;
      } else if(currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    console.log(currentNode.val);
    if(currentNode.left) {
      this.preOrderTraversal(currentNode.left)
    }    
    
    if(currentNode.right) {
      this.preOrderTraversal(currentNode.right)
    }
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode.left) {
      this.inOrderTraversal(currentNode.left)
    }    
    console.log(currentNode.val);
    if(currentNode.right) {
      this.inOrderTraversal(currentNode.right)
    }
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode.left) {
      this.postOrderTraversal(currentNode.left)
    }    
    
    if(currentNode.right) {
      this.postOrderTraversal(currentNode.right)
    }
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    let queue = [this.root];

    while(queue.length > 0) {
      let current_node = queue.shift();
      console.log(current_node.val);
      if(current_node.left) {
        queue.push(current_node.left);
      }

      if(current_node.right) {
        queue.push(current_node.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    let stack = [this.root];

    while(stack.length > 0) {
      let current_node = stack.pop();
      console.log(current_node.val);

      if(current_node.left) {
        stack.push(current_node.left);
      }

      if(current_node.right) {
        stack.push(current_node.right);
      }
    }
}
}

module.exports = { BinarySearchTree, TreeNode };
