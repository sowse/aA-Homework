class Person {
  // Your code here
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello ${this.name}!`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if(typeof obj != 'object') {
      throw new TypeError('Please input an object.')
    } else if(obj.name === undefined || obj.age === undefined) {
      throw new TypeError('Object needs to have name and age parameters.')
    }
    this.name = obj.name;
    this.age = obj.age;
    return true;
  }

  tryUpdate(obj) {
    try{
      this.update(obj);
    } catch {
      return false;
    }

    return true;
  }

  static greetAll(obj) {
    let greets = [];
    obj.forEach( ele => greets.push(ele.sayHello()));
    return greets;
  }
}

module.exports = Person;
