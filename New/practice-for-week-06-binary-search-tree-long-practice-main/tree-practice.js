const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  let current_node = rootNode;

  while(current_node.left) {
    current_node = current_node.left;
  }

  return current_node.val;
}

function findMaxBST (rootNode) {
  // Your code here
  let current_node = rootNode;

  while(current_node.right) {
    current_node = current_node.right;
  }

  return current_node.val;
}

function findMinBT (rootNode) {
  // Your code here
  let min = rootNode.val;
  let queue = [rootNode];
  while(queue.length > 0) {
    let current_node = queue.pop();
    if(current_node.val < min) {
      min = current_node.val;
    }

    if(current_node.left) {
      queue.push(current_node.left);
    }

    if(current_node.right) {
      queue.push(current_node.right)
    }
  }

  return min;
}

function findMaxBT (rootNode) {
  // Your code here
  let max = rootNode.val;
  let queue = [rootNode];
  while(queue.length > 0) {
    let current_node = queue.pop();
    if(current_node.val > max) {
      max = current_node.val;
    }

    if(current_node.left) {
      queue.push(current_node.left);
    }

    if(current_node.right) {
      queue.push(current_node.right)
    }
  }


  return max;
}

function getHeight (rootNode) {
  // Your code here
  let height = -1;
  if(rootNode === null) {
    return height;
  }

  let current_level = [rootNode];

  while(current_level.length > 0) {
    height++;
    let next_level = []
    for(let i = 0; i < current_level.length; i++) {
      if(current_level[i].left) {
        next_level.push(current_level[i].left)
      }

      if(current_level[i].right) {
        next_level.push(current_level[i].right)
      }
    }
    current_level = next_level;
  }

  return height;
}

function balancedTree (rootNode) {
  // Your code here
  let queue = [rootNode];

  while(queue.length > 0) {
    let current_node = queue.pop();
    if(Math.abs(((getHeight(current_node.left) + 1) - (getHeight(current_node.right) + 1))) > 1){
      return false;
    }

    if(current_node.left) {
      queue.push(current_node.left);
    }

    if(current_node.right) {
      queue.push(current_node.right)
    }

  }

  return true;
}

function countNodes (rootNode) {
  // Your code here
  let stack = [rootNode];
  let count = 0;

  if(!rootNode) {
    return count;
  }
  while(stack.length > 0) {
    let current_node = stack.pop();
    count++;

    if(current_node.left) {
      stack.push(current_node.left);
    }

    if(current_node.right) {
      stack.push(current_node.right);
    }
  }
  return count;
}

function getParentNode (rootNode, target) {
  // Your code here
  if(rootNode.val === target) {
    return null;
  }

  let queue = [rootNode];


  while(queue.length > 0) {
    let current_node = queue.pop();

    if(current_node.left) {
      if(current_node.left.val === target) {
        return current_node;
      }
      queue.push(current_node.left);
    }

    if(current_node.right) {
      if(current_node.right.val === target) {
        return current_node;
      }
      queue.push(current_node.right)
    }

  }

  return undefined;
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
  let order = [];
  let found = false;
  debugger;

  function inOrderTraversalWithPush (node) {
    let currentNode = node;

    if(found) {
      return;
    }

    if(currentNode.left) {
      inOrderTraversalWithPush(currentNode.left)
    }

    order.push(currentNode);
    if(currentNode.val === target) {
      found === true;
    }
    if(currentNode.right) {
      inOrderTraversalWithPush(currentNode.right)
    }
  }

  inOrderTraversalWithPush(rootNode);

  for(let i = 0; i < order.length; i++) {
    if(order[i].val === target) {
      if(i === 0) {
        return null; 
      } else {
        return order[i-1].val;
      }
    }
  }
}

let bstRoot = new TreeNode(4);
bstRoot.left = new TreeNode(2);
bstRoot.left.left = new TreeNode(1);
bstRoot.left.right = new TreeNode(3);
bstRoot.right = new TreeNode(6);
bstRoot.right.left = new TreeNode(5);
bstRoot.right.right = new TreeNode(7);

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  //debugger;
  let current_node = rootNode;
  let parent;
  let children = 0;

  while(target != current_node.val) {
    if(target > current_node.val) {
      if(!current_node.right) {
        return undefined;
      } else {
        parent = current_node;
        current_node = current_node.right; 
      }
    }

    if(target < current_node.val) {
      if(!current_node.left) {
        return undefined;
      } else {
        parent = current_node;
        current_node = current_node.left; 
      }
    }
  }
  // Undefined if the target cannot be found
  
  // Set target based on parent
  if(target === current_node.val) {

    if(current_node.left) {
      children++;
    }
    if(current_node.right) {
      children++;
    }
      // Case 0: Zero children and no parent:
      //   return null
    if(children === 0) {
      if(!parent){
        return null;
      } else {
      // Case 1: Zero children:
      //   Set the parent that points to it to null
        return current_node.val > parent.val ? parent.right = null : parent.left = null;
      }
    } 
  // Case 2: One child:
  //   Make the parent point to the child
    if(children === 1) {
      let child = current_node.left ? current_node.left : current_node.right;
      return current_node.val > parent.val ? parent.right = child : parent.left = child;
    }
  // Case 3: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
    if(children === 2) {
      let preVal = inOrderPredecessor(rootNode, current_node.val);
      deleteNodeBST(rootNode, preVal);
      current_node.val = preVal;
    }
  }

}
console.log(deleteNodeBST(bstRoot, 1));

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
