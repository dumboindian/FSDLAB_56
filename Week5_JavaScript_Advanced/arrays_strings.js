// ============================================
// WEEK 5 - JAVASCRIPT ADVANCED (PART 2)
// File: arrays_strings.js
// Topics: Array Methods, String Operations
// ============================================

console.log("=== WEEK 5: Arrays & Strings ===\n");

// ========== ARRAY METHODS ==========
console.log("1. ARRAY METHODS:");

let numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6];
console.log("Original Array:", numbers);

// sort() - Sort array
let sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted (ascending):", sorted);

let sortedDesc = [...numbers].sort((a, b) => b - a);
console.log("Sorted (descending):", sortedDesc);

// reverse() - Reverse array
let reversed = [...numbers].reverse();
console.log("Reversed:", reversed);

// map() - Transform each element
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter() - Filter elements
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

let greaterThan5 = numbers.filter(num => num > 5);
console.log("Greater than 5:", greaterThan5);

// reduce() - Reduce to single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

let product = numbers.reduce((acc, num) => acc * num, 1);
console.log("Product:", product);

// find() - Find first matching element
let firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

// findIndex() - Find index of first match
let indexOfEight = numbers.findIndex(num => num === 8);
console.log("Index of 8:", indexOfEight);

// some() - Check if at least one element matches
let hasEven = numbers.some(num => num % 2 === 0);
console.log("Has even numbers:", hasEven);

// every() - Check if all elements match
let allPositive = numbers.every(num => num > 0);
console.log("All positive:", allPositive);

// forEach() - Iterate over array
console.log("ForEach iteration:");
numbers.forEach((num, index) => {
    console.log(`  Index ${index}: ${num}`);
});

// slice() - Extract portion of array
let sliced = numbers.slice(2, 5);
console.log("Sliced (2 to 5):", sliced);

// splice() - Add/remove elements
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 10, 11); // Remove 1 element at index 2, add 10 and 11
console.log("After splice:", arr);

// concat() - Merge arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log("Concatenated:", merged);

// join() - Convert array to string
let joined = numbers.join(", ");
console.log("Joined:", joined);

// ========== STRING METHODS ==========
console.log("\n2. STRING METHODS:");

let text = "  Hello World from JavaScript  ";
console.log("Original:", `"${text}"`);

// length
console.log("Length:", text.length);

// trim() - Remove whitespace
let trimmed = text.trim();
console.log("Trimmed:", `"${trimmed}"`);

// toUpperCase() / toLowerCase()
console.log("Uppercase:", trimmed.toUpperCase());
console.log("Lowercase:", trimmed.toLowerCase());

// charAt() - Get character at index
console.log("Char at index 0:", trimmed.charAt(0));
console.log("Char at index 6:", trimmed.charAt(6));

// indexOf() - Find first occurrence
console.log("Index of 'World':", trimmed.indexOf("World"));
console.log("Index of 'xyz':", trimmed.indexOf("xyz")); // -1 if not found

// lastIndexOf() - Find last occurrence
let repeated = "hello hello hello";
console.log("Last index of 'hello':", repeated.lastIndexOf("hello"));

// includes() - Check if string contains substring
console.log("Includes 'World':", trimmed.includes("World"));
console.log("Includes 'Python':", trimmed.includes("Python"));

// startsWith() / endsWith()
console.log("Starts with 'Hello':", trimmed.startsWith("Hello"));
console.log("Ends with 'Script':", trimmed.endsWith("Script"));

// slice() - Extract substring
let slicedStr = trimmed.slice(0, 5);
console.log("Sliced (0 to 5):", slicedStr);

let slicedNegative = trimmed.slice(-10);
console.log("Sliced (last 10 chars):", slicedNegative);

// substring() - Extract substring
let substr = trimmed.substring(6, 11);
console.log("Substring (6 to 11):", substr);

// replace() - Replace first occurrence
let replaced = trimmed.replace("World", "Universe");
console.log("Replaced:", replaced);

// replaceAll() - Replace all occurrences
let replaceAllDemo = "cat cat cat".replaceAll("cat", "dog");
console.log("Replace all:", replaceAllDemo);

// split() - Split string into array
let words = trimmed.split(" ");
console.log("Split by space:", words);

let chars = "a,b,c,d".split(",");
console.log("Split by comma:", chars);

// repeat() - Repeat string
let repeated2 = "Ha".repeat(3);
console.log("Repeated:", repeated2);

// padStart() / padEnd() - Pad string
let num = "5";
console.log("Pad start:", num.padStart(3, "0")); // "005"
console.log("Pad end:", num.padEnd(3, "0"));     // "500"

// ========== STRING CONCATENATION ==========
console.log("\n3. STRING CONCATENATION:");

let firstName = "John";
let lastName = "Doe";

// Using + operator
let fullName1 = firstName + " " + lastName;
console.log("Using +:", fullName1);

// Using concat()
let fullName2 = firstName.concat(" ", lastName);
console.log("Using concat():", fullName2);

// Using template literals (ES6)
let age = 25;
let fullName3 = `${firstName} ${lastName}, Age: ${age}`;
console.log("Using template literal:", fullName3);

// ========== ADVANCED ARRAY OPERATIONS ==========
console.log("\n4. ADVANCED ARRAY OPERATIONS:");

// Flatten nested array
let nested = [1, [2, 3], [4, [5, 6]]];
let flattened = nested.flat(2);
console.log("Flattened:", flattened);

// flatMap() - Map and flatten
let nums = [1, 2, 3];
let flatMapped = nums.flatMap(num => [num, num * 2]);
console.log("FlatMapped:", flatMapped);

// Array.from() - Create array from iterable
let str = "hello";
let charArray = Array.from(str);
console.log("Array from string:", charArray);

// Array.of() - Create array from arguments
let arr3 = Array.of(1, 2, 3, 4, 5);
console.log("Array.of():", arr3);

// Spread operator
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
let combined = [...arr4, ...arr5];
console.log("Spread operator:", combined);

// Destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("Destructured - first:", first);
console.log("Destructured - second:", second);
console.log("Destructured - rest:", rest);

console.log("\n=== End of Week 5: Arrays & Strings ===");
