// ============================================
// WEEK 10 - NODE.JS CALLBACKS & ASYNC
// File: callback_demo.js
// Topics: Callbacks, Async Operations, Event Loop
// ============================================

console.log("=== WEEK 10: Callbacks & Async Demo ===\n");

// ========== SYNCHRONOUS VS ASYNCHRONOUS ==========
console.log("1. SYNCHRONOUS CODE:");
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

console.log("\n2. ASYNCHRONOUS CODE:");
console.log("Step 1");
setTimeout(() => {
    console.log("Step 2 (after 2 seconds)");
}, 2000);
console.log("Step 3 (executes immediately)");

// ========== CALLBACK FUNCTIONS ==========
console.log("\n3. CALLBACK FUNCTIONS:");

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// ========== CALLBACK WITH PARAMETERS ==========
console.log("\n4. CALLBACK WITH PARAMETERS:");

function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log("5 + 3 =", calculate(5, 3, add));
console.log("5 × 3 =", calculate(5, 3, multiply));

// ========== SIMULATING ASYNC OPERATIONS ==========
console.log("\n5. SIMULATING ASYNC OPERATIONS:");

function fetchUserData(userId, callback) {
    console.log(`Fetching user ${userId}...`);
    setTimeout(() => {
        const user = { id: userId, name: "John Doe", email: "john@example.com" };
        callback(null, user);
    }, 1000);
}

fetchUserData(1, (error, user) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("User fetched:", user);
    }
});

// ========== CALLBACK HELL (PYRAMID OF DOOM) ==========
console.log("\n6. CALLBACK HELL EXAMPLE:");

setTimeout(() => {
    console.log("Task 1 completed");
    setTimeout(() => {
        console.log("Task 2 completed");
        setTimeout(() => {
            console.log("Task 3 completed");
        }, 1000);
    }, 1000);
}, 1000);

// ========== ERROR HANDLING IN CALLBACKS ==========
console.log("\n7. ERROR HANDLING:");

function divideNumbers(a, b, callback) {
    if (b === 0) {
        callback("Cannot divide by zero", null);
    } else {
        callback(null, a / b);
    }
}

divideNumbers(10, 2, (error, result) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Result:", result);
    }
});

divideNumbers(10, 0, (error, result) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Result:", result);
    }
});

// ========== PROMISES (MODERN ALTERNATIVE) ==========
console.log("\n8. PROMISES:");

function fetchDataPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "Jane Doe" });
            } else {
                reject("Invalid user ID");
            }
        }, 1000);
    });
}

fetchDataPromise(2)
    .then(user => console.log("Promise resolved:", user))
    .catch(error => console.log("Promise rejected:", error));

// ========== ASYNC/AWAIT ==========
console.log("\n9. ASYNC/AWAIT:");

async function getUserData(userId) {
    try {
        const user = await fetchDataPromise(userId);
        console.log("Async/Await result:", user);
    } catch (error) {
        console.log("Async/Await error:", error);
    }
}

getUserData(3);

console.log("\n=== End of Callback Demo ===");
