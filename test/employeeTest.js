const { Employee } = require('../src/Employee');
const employeeTest = require('ava');

employeeTest('toString',t => {
    const employee =new Employee("jack","engineer");
    t.is("jack (engineer)",employee.toString())
})