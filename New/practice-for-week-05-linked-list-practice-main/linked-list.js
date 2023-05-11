class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    let new_node = new LinkedListNode(val);

    if(this.head) {
      new_node.next = this.head;
    }

    this.head = new_node;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let new_node = new LinkedListNode(val);

    if(this.head === null) {
      this.head = new_node;
    } else {
      let curr_node = this.head;
      for(let i = 0; i < this.length - 1; i++) {
        curr_node = curr_node.next;
      }

      curr_node.next = new_node;
    }

    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
