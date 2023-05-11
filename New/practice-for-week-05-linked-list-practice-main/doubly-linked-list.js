class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    let new_node = new DoublyLinkedListNode(val);
    if(this.head === null) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.next = this.head; 
      this.head.prev = new_node; 
      this.head = new_node;
    }

    this.length++;
  }

  addToTail(val) {
    // Your code here
    let new_node = new DoublyLinkedListNode(val);
    if(this.tail === null) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.prev = this.tail; 
      this.tail.next = new_node; 
      this.tail = new_node;
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
