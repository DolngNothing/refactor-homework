const { Employee } = require('../src/Employee');
const deliveryTest = require('ava');

deliveryTest('Rush in MA',t => {
    const employee =new Employee("jack","engineer");
    t.is("jack (engineer)",employee.toString())
})