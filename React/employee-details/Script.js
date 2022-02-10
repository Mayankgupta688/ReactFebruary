class Employee {
    constructor(name, age) {
        this.empName = name;
        this.empAge = age
    }

    getName() {
        console.log(this.empName)
    }
}

var employeeOne = new Employee("Mayank", 10);
console.log(employeeOne.empName)
console.log(employeeOne.empAge)
employeeOne.getName();


var employeeTwo = new Employee("Anshul, 13");

console.log(employeeOne.empName);
console.log(employeeTwo.employeeName);
console.log(employeeTwo.employeeName);