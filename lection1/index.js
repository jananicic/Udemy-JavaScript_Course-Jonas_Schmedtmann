/**
 * Object literals vs Object constructor
 */

// Object Literals
let employee = {
  name: "Jan"
};

let newEmployee = employee;

document.write("Prije" + "</br>");
document.write("employee -> " + employee.name + "</br>");
document.write("NewEmployee -> " + newEmployee.name + "</br></br>");

newEmployee.name = "Josip";

document.write("Poslije" + "</br>");
document.write("employee -> " + employee.name + "</br>");
document.write("NewEmployee  -> " + newEmployee.name + "</br></br>");

// Object Constructor

let Emp = function() {
  this.name = "Anja";
};

let emp = new Emp();
let newEmp = new Emp();

document.write("Prije" + "</br>");
document.write("employee -> " + emp.name + "</br>");
document.write("NewEmployee -> " + newEmp.name + "</br></br>");

newEmp.name = "Srdan";

document.write("Poslije" + "</br>");
document.write("employee -> " + emp.name + "</br>");
document.write("NewEmployee  -> " + newEmp.name + "</br></br>");
