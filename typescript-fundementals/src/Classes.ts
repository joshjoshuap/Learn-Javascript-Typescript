// Class - Methods
class Department {
  public name: string; // accessible outside department class
  readonly employeeId: string; // can only access but cannot change - public readonly, private readonly

  private employees: string[] = []; // access only in department class

  constructor(name: string, id: string) {
    this.name = name;
    this.employeeId = id;
  }

  displayInfo() {
    console.log(this.name);
  }

  displayListEmployees() {
    console.log(this.employees);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

let accounting = new Department("Accounting Department", "12345");

accounting.addEmployee("Joshua");
accounting.addEmployee("Jose");

accounting.displayInfo();
accounting.displayListEmployees();
accounting.name; // Accounting Department
// accounting.employees[1]; // error

/* 
Accounting
['Joshua', 'Jose']
*/

// Shorhands Initialization
class Departments {
  private employees: string[] = [];

  // for shorthand can directly to intialize public/private & property into constructor
  constructor(public name: string, readonly employeeId: string) {
    this.name = name;
    this.employeeId = employeeId;
  }
}
