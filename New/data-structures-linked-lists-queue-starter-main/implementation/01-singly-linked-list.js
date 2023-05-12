// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        let new_node = new SinglyLinkedNode(val);
        if(this.head === null) {
            this.head = new_node;
        } else {
            new_node.next = this.head;
            this.head = new_node;
        }

        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        //O(1) since the same amount of operations is performed regardless of the list's length.
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //O(n) since n amount of nodes need to transversed for a list of length n in order to reach the tail and add a node.
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head) {
            return undefined;
        }
        let removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed;
        // Write your hypothesis on the time complexity of this method here
        //O(1) since it's the same amount of operations regardless of list length.
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.head) {
            return undefined;
        }

        if(this.length === 1) {
            let removed = this.head;
            this.head = null;
            this.length--;
            return removed;
        }
        
        let current = this.head;
        for(let i = 1; i < this.length - 1; i++) {
            current = current.next;
        }

        let removed = current.next;
        current.next = null;
        this.length--;
        return removed;
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    peekAtHead() {
        // Return value of head node
        if(this.head) {
            return this.head.value;
        }
        // Write your hypothesis on the time complexity of this method here
        //O(1);
    }

    print() {
        // Print out the linked list
        if(this.head) {
            let current = this.head;

            while(current.next) {
                console.log(current.value);
                current = current.next;
            }

            console.log(current.value);
        }
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
