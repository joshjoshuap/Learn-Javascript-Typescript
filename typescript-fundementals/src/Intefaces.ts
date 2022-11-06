// Basic Interface
interface Person {
  name: string;
  age: number;

  displayInfo(info: string): void;
}

let user1: Person;

user1 = {
  name: "Joshua",
  age: 22,
  displayInfo(info: string) {
    console.log(`${info} : ${this.name} ${this.age}`);
  },
};

user1.displayInfo("Full Information :"); // Full Information : : Joshua 22

// Interface, Extends & Classes
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");
// user1.name = 'Manu';

user1.greet("Hi there - I am"); // Hi there - I am Max
console.log(user1); // Object - Person {age: 30, name: 'Max'}
