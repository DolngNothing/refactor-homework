const { Employee } = require('../src/Employee');
const employeeTest = require('ava');

employeeTest('test toString',t => {
    const employee =new Employee("jack","engineer");
    t.is("jack (engineer)",employee.toString())
})

employeeTest('test validateType throw',t => {
    try{
        new Employee("jack","6666");
        t.fail();
    }catch(e){
        t.is('Employee cannot be of type 6666',e.message)
    }
})