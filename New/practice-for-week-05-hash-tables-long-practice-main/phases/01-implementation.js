class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    let current_bucket = this.hashMod(key);
    let current_node = this.data[current_bucket];

    if(!current_node) {
      this.count++;
      return this.data[current_bucket] = new KeyValuePair(key, value);
    } 
    
    while(current_node.next) {
      if(current_node.key === key) {
          return current_node.value = value;
      }
        current_node = current_node.next;
    }

    let new_node = new KeyValuePair(key, value);
    new_node.next = this.data[current_bucket];
    this.data[current_bucket] = new_node;

    this.count++;
  }


  read(key) {
    // Your code here
  }


  resize() {
    // Your code here
  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;
