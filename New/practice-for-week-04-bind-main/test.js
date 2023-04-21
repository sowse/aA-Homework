// Your code here
const Employee = require('./employee')

const johnWick = new Employee('John Wick', 'Dog Lover');
const wickHello = johnWick.sayName.bind(johnWick);
setTimeout(wickHello, 2000);

const wickEmployment = johnWick.sayOccupation.bind(johnWick);
setTimeout(wickEmployment, 3000);
