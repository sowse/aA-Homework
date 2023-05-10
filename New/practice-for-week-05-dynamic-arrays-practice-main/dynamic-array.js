class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.data = new Array(defaultSize)
    this.capacity = defaultSize;
    // Your code here

  }

  read(index) {
    return this.data[index];
    // Your code here
  }

  unshift(val) {
    let new_last_idx = this.length;
    for(let i = new_last_idx; i > 0; i--) {
      [this.data[i], this.data[i-1]] = [this.data[i-1],[this.data[i]]]
    }
    this.data[0] = val;
    this.length += 1;
    // Your code here
  }

}


module.exports = DynamicArray;
