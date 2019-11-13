/*
  TASK 1
    ✅- Write a Person Constructor that initializes `name` and `age` from arguments.
    ✅- All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        ✅+ When eating an edible, it should be pushed into the `stomach`.
        ✅+ The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        ✅+ When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(args) {
  this.name = args.name,
  this.age = args.age,
  this.stomach = []
}

Person.prototype.eat = function (food){
  console.log(`${this.name} just ate some ${food}`);
  if (this.stomach.length < 10){
    this.stomach.push(`${food}`);
    console.log(this.stomach);
  } else {
    console.log('im too full 🤢')
  }
}

Person.prototype.poop = function (){
  console.log(`${this.name} just pooped 💩`);
  this.stomach = [];
}

Person.prototype.toString = function (){
  console.log(`${this.name}, ${this.age}`);
  return `${this.name}, ${this.age}`;
}


let shawn = new Person({name: 'Shawn', age: 26});

shawn.eat('pumpkins');
shawn.eat('tomatoes');
shawn.eat('pumpkins');
shawn.eat('tomatoes');
shawn.eat('pumpkins');
shawn.eat('tomatoes');
shawn.eat('pumpkins');
shawn.eat('tomatoes');


