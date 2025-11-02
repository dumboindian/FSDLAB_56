// ============================================
// WEEK 4 - JAVASCRIPT BASICS (PART 1)
// File: basics.js
// Topics: Variables, Data Types, Operators, Loops
// ============================================

console.log("=== WEEK 4: JavaScript Basics ===\n");

// ========== VARIABLES ==========
console.log("1. VARIABLES:");

// var (function-scoped, can be redeclared)
var name = "John Doe";
var age = 25;
console.log("Name:", name);
console.log("Age:", age);

// let (block-scoped, cannot be redeclared)
let city = "New York";
let isStudent = true;
console.log("City:", city);
console.log("Is Student:", isStudent);

// const (block-scoped, cannot be reassigned)
const PI = 3.14159;
const UNIVERSITY = "FSDL University";
console.log("PI:", PI);
console.log("University:", UNIVERSITY);

// ========== DATA TYPES ==========
console.log("\n2. DATA TYPES:");

// String
let firstName = "Alice";
let lastName = 'Smith';
let fullName = `${firstName} ${lastName}`; // Template literal
console.log("String:", fullName);

// Number
let integer = 42;
let decimal = 3.14;
let negative = -10;
console.log("Numbers:", integer, decimal, negative);

// Boolean
let isActive = true;
let isCompleted = false;
console.log("Boolean:", isActive, isCompleted);

// Undefined
let undefinedVar;
console.log("Undefined:", undefinedVar);

// Null
let emptyValue = null;
console.log("Null:", emptyValue);

// Object
let student = {
    name: "Bob",
    age: 20,
    course: "Full Stack Development"
};
console.log("Object:", student);

// Array
let courses = ["HTML", "CSS", "JavaScript", "React"];
console.log("Array:", courses);

// typeof operator
console.log("Type of fullName:", typeof fullName);
console.log("Type of integer:", typeof integer);
console.log("Type of isActive:", typeof isActive);
console.log("Type of student:", typeof student);
console.log("Type of courses:", typeof courses);

// ========== OPERATORS ==========
console.log("\n3. OPERATORS:");

// Arithmetic Operators
let a = 10;
let b = 3;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment/Decrement
let counter = 5;
console.log("Original:", counter);
console.log("Post-increment:", counter++);
console.log("After post-increment:", counter);
console.log("Pre-increment:", ++counter);

// Assignment Operators
let x = 10;
x += 5;  // x = x + 5
console.log("x += 5:", x);
x -= 3;  // x = x - 3
console.log("x -= 3:", x);
x *= 2;  // x = x * 2
console.log("x *= 2:", x);
x /= 4;  // x = x / 4
console.log("x /= 4:", x);

// Comparison Operators
console.log("\nComparison Operators:");
console.log("10 == '10':", 10 == '10');   // Loose equality
console.log("10 === '10':", 10 === '10'); // Strict equality
console.log("10 != '10':", 10 != '10');
console.log("10 !== '10':", 10 !== '10');
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 >= 5:", 5 >= 5);
console.log("5 <= 3:", 5 <= 3);

// Logical Operators
console.log("\nLogical Operators:");
console.log("true && false:", true && false);  // AND
console.log("true || false:", true || false);  // OR
console.log("!true:", !true);                  // NOT

// ========== CONDITIONAL STATEMENTS ==========
console.log("\n4. CONDITIONAL STATEMENTS:");

// if-else
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Ternary operator
let status = (score >= 50) ? "Pass" : "Fail";
console.log("Status:", status);

// switch statement
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    default:
        dayName = "Weekend";
}
console.log("Day:", dayName);

// ========== LOOPS ==========
console.log("\n5. LOOPS:");

// for loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log("  Iteration:", i);
}

// while loop
console.log("\nWhile Loop:");
let count = 1;
while (count <= 5) {
    console.log("  Count:", count);
    count++;
}

// do-while loop
console.log("\nDo-While Loop:");
let num = 1;
do {
    console.log("  Number:", num);
    num++;
} while (num <= 5);

// for...of loop (for arrays)
console.log("\nFor...of Loop (Array):");
let fruits = ["Apple", "Banana", "Orange"];
for (let fruit of fruits) {
    console.log("  Fruit:", fruit);
}

// for...in loop (for objects)
console.log("\nFor...in Loop (Object):");
let person = { name: "Alice", age: 25, city: "NYC" };
for (let key in person) {
    console.log(`  ${key}: ${person[key]}`);
}

// break statement
console.log("\nBreak Statement:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("  Breaking at i =", i);
        break;
    }
    console.log("  i =", i);
}

// continue statement
console.log("\nContinue Statement:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("  Skipping i =", i);
        continue;
    }
    console.log("  i =", i);
}

// ========== ARRAY METHODS ==========
console.log("\n6. BASIC ARRAY METHODS:");

let numbers = [1, 2, 3, 4, 5];
console.log("Original Array:", numbers);

// push - add to end
numbers.push(6);
console.log("After push(6):", numbers);

// pop - remove from end
numbers.pop();
console.log("After pop():", numbers);

// unshift - add to beginning
numbers.unshift(0);
console.log("After unshift(0):", numbers);

// shift - remove from beginning
numbers.shift();
console.log("After shift():", numbers);

// length
console.log("Array Length:", numbers.length);

// indexOf
console.log("Index of 3:", numbers.indexOf(3));

// includes
console.log("Includes 4:", numbers.includes(4));

console.log("\n=== End of Week 4 Basics ===");
