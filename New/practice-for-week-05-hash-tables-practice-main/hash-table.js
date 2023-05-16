const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
    this.count = 0;
  }

  hash(key) {
    // Your code here
    let sha = sha256(key).substring(0,8);
    let result = 0;
    let last_idx = 7;
  
    let hex = {
      "0" : 0,
      "1" : 1,
      "2" : 2,
      "3" : 3,
      "4" : 4,
      "5" : 5,
      "6" : 6,
      "7" : 7,
      "8" : 8,
      "9" : 9,
      "a" : 10,
      "b" : 11,
      "c" : 12,
      "d" : 13,
      "e" : 14,
      "f" : 15,
    }
        
    for(let i = last_idx; i >= 0; i--) {
      let curr_pwr = last_idx - i;
      result += 16 ** curr_pwr * hex[sha[i]]; 
    }
  
    return result;
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    if(this.data[this.hashMod(key)]) {
      throw new Error('hash collision or same key/value pair already exists!')
    } else {
      this.data[this.hashMod(key)] = {key, value};
    }

    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    let current_bucket = this.hashMod(key);
    let new_pair = new KeyValuePair(key, value);

    if(this.data[current_bucket]) {
      new_pair.next = this.data[current_bucket];
      this.data[current_bucket] = new_pair;
    } else {
      this.data[current_bucket] = new_pair;
    }

    this.count++;
  }

  insert(key, value) {
    // Your code here
    let current_bucket = this.hashMod(key);
    let current_node = this.data[current_bucket]

    while(current_node) {
      if(current_node.key === key) {
        return current_node.value = value
      }

      current_node = current_node.next;
    }

    this.insertWithHashCollisions(key,value);
  }

}


module.exports = HashTable;
