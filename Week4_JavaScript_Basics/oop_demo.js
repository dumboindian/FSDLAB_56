// ============================================
// WEEK 4 - JAVASCRIPT OOP (Object-Oriented Programming)
// File: oop_demo.js
// Topics: Classes, Objects, Methods, Inheritance
// ============================================

console.log("=== WEEK 4: JavaScript OOP Demo ===\n");

// ========== CREATING OBJECTS (Object Literals) ==========
console.log("1. OBJECT LITERALS:");

const student1 = {
    name: "Alice",
    age: 20,
    course: "Full Stack Development",
    displayInfo: function() {
        return `${this.name}, Age: ${this.age}, Course: ${this.course}`;
    }
};

console.log(student1.displayInfo());
console.log("Student Name:", student1.name);
console.log("Student Age:", student1.age);

// ========== CLASSES (ES6) ==========
console.log("\n2. CLASSES:");

// Define a Car class
class Car {
    // Constructor
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0;
    }

    // Methods
    displayInfo() {
        return `${this.year} ${this.brand} ${this.model} (${this.color})`;
    }

    accelerate(amount) {
        this.speed += amount;
        return `Accelerating... Current speed: ${this.speed} km/h`;
    }

    brake(amount) {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0;
        return `Braking... Current speed: ${this.speed} km/h`;
    }

    honk() {
        return `${this.brand} ${this.model} says: Beep! Beep!`;
    }
}

// Create instances (objects) of Car class
const car1 = new Car("Toyota", "Camry", 2022, "Silver");
const car2 = new Car("Honda", "Civic", 2023, "Blue");
const car3 = new Car("Tesla", "Model 3", 2024, "White");

console.log("\nCar 1:", car1.displayInfo());
console.log(car1.accelerate(50));
console.log(car1.accelerate(30));
console.log(car1.brake(20));
console.log(car1.honk());

console.log("\nCar 2:", car2.displayInfo());
console.log(car2.accelerate(60));
console.log(car2.honk());

console.log("\nCar 3:", car3.displayInfo());

// ========== ANOTHER CLASS EXAMPLE: Student ==========
console.log("\n3. STUDENT CLASS:");

class Student {
    constructor(name, rollNo, course, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
        this.marks = marks;
    }

    calculateGrade() {
        if (this.marks >= 90) return 'A';
        else if (this.marks >= 80) return 'B';
        else if (this.marks >= 70) return 'C';
        else if (this.marks >= 60) return 'D';
        else return 'F';
    }

    displayDetails() {
        return `Student: ${this.name} (Roll No: ${this.rollNo})
Course: ${this.course}
Marks: ${this.marks}
Grade: ${this.calculateGrade()}`;
    }

    isPass() {
        return this.marks >= 50;
    }
}

// Create student objects
const student2 = new Student("Bob Smith", 101, "Web Development", 85);
const student3 = new Student("Charlie Brown", 102, "JavaScript", 92);
const student4 = new Student("Diana Prince", 103, "React", 78);

console.log(student2.displayDetails());
console.log("Pass Status:", student2.isPass() ? "PASS" : "FAIL");

console.log("\n" + student3.displayDetails());
console.log("Pass Status:", student3.isPass() ? "PASS" : "FAIL");

console.log("\n" + student4.displayDetails());

// ========== INHERITANCE ==========
console.log("\n4. INHERITANCE:");

// Parent class
class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    start() {
        return `${this.brand} vehicle started!`;
    }

    stop() {
        return `${this.brand} vehicle stopped!`;
    }
}

// Child class inheriting from Vehicle
class Motorcycle extends Vehicle {
    constructor(brand, year, type) {
        super(brand, year); // Call parent constructor
        this.type = type;
    }

    wheelie() {
        return `${this.brand} motorcycle doing a wheelie!`;
    }

    displayInfo() {
        return `${this.year} ${this.brand} ${this.type} Motorcycle`;
    }
}

// Create motorcycle object
const bike = new Motorcycle("Harley-Davidson", 2023, "Cruiser");
console.log(bike.displayInfo());
console.log(bike.start());      // Inherited method
console.log(bike.wheelie());    // Own method
console.log(bike.stop());       // Inherited method

// ========== STATIC METHODS ==========
console.log("\n5. STATIC METHODS:");

class MathHelper {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static square(n) {
        return n * n;
    }
}

// Call static methods without creating an instance
console.log("Add 5 + 3:", MathHelper.add(5, 3));
console.log("Multiply 4 * 7:", MathHelper.multiply(4, 7));
console.log("Square of 6:", MathHelper.square(6));

// ========== GETTERS AND SETTERS ==========
console.log("\n6. GETTERS AND SETTERS:");

class BankAccount {
    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this._balance = initialBalance; // Private-like property
    }

    // Getter
    get balance() {
        return `$${this._balance.toFixed(2)}`;
    }

    // Setter
    set balance(amount) {
        if (amount < 0) {
            console.log("Error: Balance cannot be negative!");
        } else {
            this._balance = amount;
        }
    }

    deposit(amount) {
        this._balance += amount;
        return `Deposited $${amount}. New balance: ${this.balance}`;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            return "Insufficient funds!";
        }
        this._balance -= amount;
        return `Withdrew $${amount}. New balance: ${this.balance}`;
    }
}

const account = new BankAccount("John Doe", 1000);
console.log("Account Holder:", account.accountHolder);
console.log("Initial Balance:", account.balance);
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log("Final Balance:", account.balance);

// ========== OBJECT METHODS ==========
console.log("\n7. OBJECT METHODS:");

const person = {
    firstName: "Emma",
    lastName: "Watson",
    age: 28,
    city: "London"
};

// Object.keys() - Get all keys
console.log("Keys:", Object.keys(person));

// Object.values() - Get all values
console.log("Values:", Object.values(person));

// Object.entries() - Get key-value pairs
console.log("Entries:", Object.entries(person));

console.log("\n=== End of Week 4 OOP Demo ===");
