const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, salary, title, manager=null, employees=[]) {
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        return (this.salary + this._totalSubSalary()) * multiplier;
    }

    _totalSubSalary() {
        let sum = 0;

        for(let i = 0; i < this.employees.length; i++) {
            let employee = this.employees[i];
            if(employee instanceof Manager) {
                sum += (employee._totalSubSalary() + employee.salary)
            } else {
                sum += employee.salary;
            }
        }
        return sum;
    }
}

module.exports = Manager;
