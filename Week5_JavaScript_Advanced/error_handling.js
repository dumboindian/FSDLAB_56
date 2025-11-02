// ============================================
// WEEK 5 - ERROR HANDLING & DEBUGGING
// File: error_handling.js
// Topics: try-catch, throw, custom errors, debugging
// ============================================

console.log("=== WEEK 5: Error Handling & Debugging ===\n");

// ========== TRY-CATCH BASICS ==========
console.log("1. TRY-CATCH BASICS:");

try {
    console.log("Trying to execute code...");
    let result = 10 / 2;
    console.log("Result:", result);
    
    // This will cause an error
    let x = undefinedVariable;
    
} catch (error) {
    console.log("Error caught:", error.message);
    console.log("Error type:", error.name);
}

console.log("Program continues after error handling\n");

// ========== DIFFERENT ERROR TYPES ==========
console.log("2. DIFFERENT ERROR TYPES:");

// ReferenceError
try {
    console.log(nonExistentVariable);
} catch (error) {
    console.log("ReferenceError:", error.message);
}

// TypeError
try {
    let num = 5;
    num.toUpperCase(); // Numbers don't have toUpperCase method
} catch (error) {
    console.log("TypeError:", error.message);
}

// SyntaxError (caught at parse time, not runtime)
try {
    eval("let x = ;"); // Invalid syntax
} catch (error) {
    console.log("SyntaxError:", error.message);
}

// RangeError
try {
    let arr = new Array(-1); // Negative array length
} catch (error) {
    console.log("RangeError:", error.message);
}

// ========== THROWING CUSTOM ERRORS ==========
console.log("\n3. THROWING CUSTOM ERRORS:");

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

try {
    console.log("10 / 2 =", divide(10, 2));
    console.log("10 / 0 =", divide(10, 0)); // This will throw error
} catch (error) {
    console.log("Caught error:", error.message);
}

// ========== CUSTOM ERROR CLASSES ==========
console.log("\n4. CUSTOM ERROR CLASSES:");

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "DatabaseError";
    }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError("Age cannot be negative!");
    }
    if (age < 18) {
        throw new ValidationError("Age must be 18 or older!");
    }
    if (age > 120) {
        throw new ValidationError("Please enter a valid age!");
    }
    return true;
}

try {
    validateAge(15);
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation Error:", error.message);
    } else {
        console.log("Unknown Error:", error.message);
    }
}

// ========== FINALLY BLOCK ==========
console.log("\n5. FINALLY BLOCK:");

function processData(data) {
    try {
        console.log("Processing data:", data);
        if (!data) {
            throw new Error("No data provided!");
        }
        console.log("Data processed successfully");
        return true;
    } catch (error) {
        console.log("Error:", error.message);
        return false;
    } finally {
        console.log("Cleanup: Finally block always executes");
    }
}

processData("Sample data");
console.log();
processData(null);

// ========== NESTED TRY-CATCH ==========
console.log("\n6. NESTED TRY-CATCH:");

try {
    console.log("Outer try block");
    
    try {
        console.log("Inner try block");
        throw new Error("Inner error");
    } catch (innerError) {
        console.log("Inner catch:", innerError.message);
        throw new Error("Re-throwing from inner catch");
    }
    
} catch (outerError) {
    console.log("Outer catch:", outerError.message);
}

// ========== ASYNC ERROR HANDLING ==========
console.log("\n7. ASYNC ERROR HANDLING:");

// Simulating async operation
function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
}

// Using async/await with try-catch
async function getData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData(true);
        console.log(data);
    } catch (error) {
        console.log("Async error:", error.message);
    }
}

getData();

// ========== DEBUGGING TECHNIQUES ==========
console.log("\n8. DEBUGGING TECHNIQUES:");

// console.log() - Basic debugging
let debugVar = "Debug value";
console.log("Debug variable:", debugVar);

// console.error() - Log errors
console.error("This is an error message");

// console.warn() - Log warnings
console.warn("This is a warning message");

// console.table() - Display data in table format
let students = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 22, grade: "B" },
    { name: "Charlie", age: 21, grade: "A" }
];
console.table(students);

// console.time() and console.timeEnd() - Measure execution time
console.time("Loop execution");
for (let i = 0; i < 1000000; i++) {
    // Some operation
}
console.timeEnd("Loop execution");

// console.assert() - Assert condition
let x = 5;
console.assert(x === 5, "x should be 5");
console.assert(x === 10, "x should be 10 (this will fail)");

// ========== PRACTICAL ERROR HANDLING EXAMPLE ==========
console.log("\n9. PRACTICAL EXAMPLE:");

class Calculator {
    static add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Both arguments must be numbers");
        }
        return a + b;
    }

    static divide(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Both arguments must be numbers");
        }
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }

    static sqrt(n) {
        if (typeof n !== 'number') {
            throw new TypeError("Argument must be a number");
        }
        if (n < 0) {
            throw new RangeError("Cannot calculate square root of negative number");
        }
        return Math.sqrt(n);
    }
}

// Test calculator with error handling
function testCalculator() {
    try {
        console.log("10 + 5 =", Calculator.add(10, 5));
        console.log("10 / 2 =", Calculator.divide(10, 2));
        console.log("sqrt(16) =", Calculator.sqrt(16));
        
        // These will throw errors
        console.log("10 + 'five' =", Calculator.add(10, "five"));
    } catch (error) {
        console.log(`Error: ${error.name} - ${error.message}`);
    }

    try {
        console.log("10 / 0 =", Calculator.divide(10, 0));
    } catch (error) {
        console.log(`Error: ${error.name} - ${error.message}`);
    }

    try {
        console.log("sqrt(-4) =", Calculator.sqrt(-4));
    } catch (error) {
        console.log(`Error: ${error.name} - ${error.message}`);
    }
}

testCalculator();

console.log("\n=== End of Week 5: Error Handling ===");
