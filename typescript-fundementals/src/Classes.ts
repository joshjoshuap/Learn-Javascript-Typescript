// Class - Methods
class Department {
  public name: string; // accessible outside department class
  readonly employeeId: string; // can only access but cannot change - public readonly, private readonly

  public employees: string[] = [];

  constructor(id: string, name: string) {
    this.employeeId = id;
    this.name = name;
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

let accounting = new Department("1234", "Accounting Department");

accounting.addEmployee("Maria");
accounting.displayInfo();
accounting.displayListEmployees();
// accounting.name; // Accounting Department
// accounting.employees[1]; // error

/* 
Accounting Department
['Joshua', 'Jose']
*/

// Inheritance
class ITDepartment extends Department {
  constructor(id: string) {
    super(id, "IT Department");
  }
}

let IT = new ITDepartment("000");
IT.displayInfo();

/* 
IT Department
*/

// Shorhands Initialization
class Departments {
  //   private employees: string[] = [];

  // for shorthand can directly to intialize public/private & property into constructor
  constructor(public name: string, readonly employeeId: string) {
    this.name = name;
    this.employeeId = employeeId;
  }
}
