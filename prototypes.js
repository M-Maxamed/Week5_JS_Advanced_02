// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}
// Give it "Name", "Age", "Hobby" properties
const Father = new Person("Maxamed", 60, "playing Chess");
const Mother = new Person("Fatima", 64, "reading Qur'an");
const Brother = new Person("Xasan", 30, "playing football");
const Sister = new Person("Alia", 40, "painting");
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"

Person.prototype.speak = function() {
  console.log("Hello, My name is " + this.name + " and I'm " + this.age + " years old. I love " + this.hobby + ".");
}


// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
const Me = new Person("Maxamud", 25, "playing Coding");
// Call the "Speak" method on the "Me" object
Me.speak();
Father.speak();
Mother.speak();
Brother.speak();
Sister.speak();
// Console log all your results
console.log(Me);
console.log(Father);
console.log(Mother);
console.log(Brother);
console.log(Sister);