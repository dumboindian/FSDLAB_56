// ============================================
// WEEK 10 - MONGODB CRUD OPERATIONS (MOCK)
// File: mongo_mock.js
// Topics: Simulated MongoDB CRUD without real DB
// ============================================

console.log("=== WEEK 10: MongoDB CRUD Operations (Mock) ===\n");

// Simulated database (in-memory array)
let database = {
    students: []
};

// Auto-increment ID
let nextId = 1;

// ========== CREATE (INSERT) ==========
console.log("1. CREATE OPERATIONS:");

function insertOne(collection, document) {
    const newDocument = { _id: nextId++, ...document };
    database[collection].push(newDocument);
    console.log("Inserted:", newDocument);
    return newDocument;
}

function insertMany(collection, documents) {
    const inserted = documents.map(doc => {
        const newDoc = { _id: nextId++, ...doc };
        database[collection].push(newDoc);
        return newDoc;
    });
    console.log(`Inserted ${inserted.length} documents`);
    return inserted;
}

// Insert single student
insertOne('students', {
    name: 'Alice Johnson',
    course: 'React',
    marks: 85
});

// Insert multiple students
insertMany('students', [
    { name: 'Bob Smith', course: 'Angular', marks: 78 },
    { name: 'Charlie Brown', course: 'Node.js', marks: 92 },
    { name: 'Diana Prince', course: 'JavaScript', marks: 88 }
]);

// ========== READ (FIND) ==========
console.log("\n2. READ OPERATIONS:");

function find(collection, query = {}) {
    let results = database[collection];
    
    // Apply filters
    if (Object.keys(query).length > 0) {
        results = results.filter(doc => {
            return Object.keys(query).every(key => doc[key] === query[key]);
        });
    }
    
    return results;
}

function findOne(collection, query) {
    const results = find(collection, query);
    return results.length > 0 ? results[0] : null;
}

// Find all students
console.log("All students:");
console.log(find('students'));

// Find students by course
console.log("\nStudents in React course:");
console.log(find('students', { course: 'React' }));

// Find one student
console.log("\nFind one student:");
console.log(findOne('students', { name: 'Bob Smith' }));

// ========== UPDATE ==========
console.log("\n3. UPDATE OPERATIONS:");

function updateOne(collection, query, update) {
    const doc = findOne(collection, query);
    if (doc) {
        Object.assign(doc, update);
        console.log("Updated:", doc);
        return doc;
    }
    console.log("No document found to update");
    return null;
}

function updateMany(collection, query, update) {
    const docs = find(collection, query);
    docs.forEach(doc => Object.assign(doc, update));
    console.log(`Updated ${docs.length} documents`);
    return docs;
}

// Update single student
updateOne('students', { name: 'Alice Johnson' }, { marks: 90 });

// Update multiple students
updateMany('students', { course: 'React' }, { course: 'React Advanced' });

console.log("\nAfter updates:");
console.log(find('students'));

// ========== DELETE ==========
console.log("\n4. DELETE OPERATIONS:");

function deleteOne(collection, query) {
    const index = database[collection].findIndex(doc => {
        return Object.keys(query).every(key => doc[key] === query[key]);
    });
    
    if (index !== -1) {
        const deleted = database[collection].splice(index, 1)[0];
        console.log("Deleted:", deleted);
        return deleted;
    }
    console.log("No document found to delete");
    return null;
}

function deleteMany(collection, query) {
    const initialLength = database[collection].length;
    database[collection] = database[collection].filter(doc => {
        return !Object.keys(query).every(key => doc[key] === query[key]);
    });
    const deletedCount = initialLength - database[collection].length;
    console.log(`Deleted ${deletedCount} documents`);
    return deletedCount;
}

// Delete one student
deleteOne('students', { name: 'Bob Smith' });

console.log("\nAfter deletion:");
console.log(find('students'));

// ========== AGGREGATE OPERATIONS ==========
console.log("\n5. AGGREGATE OPERATIONS:");

function count(collection, query = {}) {
    return find(collection, query).length;
}

function average(collection, field) {
    const docs = database[collection];
    if (docs.length === 0) return 0;
    const sum = docs.reduce((acc, doc) => acc + (doc[field] || 0), 0);
    return sum / docs.length;
}

function max(collection, field) {
    const docs = database[collection];
    if (docs.length === 0) return null;
    return Math.max(...docs.map(doc => doc[field] || 0));
}

function min(collection, field) {
    const docs = database[collection];
    if (docs.length === 0) return null;
    return Math.min(...docs.map(doc => doc[field] || 0));
}

console.log("Total students:", count('students'));
console.log("Average marks:", average('students', 'marks').toFixed(2));
console.log("Highest marks:", max('students', 'marks'));
console.log("Lowest marks:", min('students', 'marks'));

// ========== FINAL DATABASE STATE ==========
console.log("\n6. FINAL DATABASE STATE:");
console.log(JSON.stringify(database, null, 2));

console.log("\n=== End of MongoDB Mock Demo ===");

/* 
NOTE: This is a mock implementation for learning purposes.
In real applications, use the official MongoDB driver:

npm install mongodb

const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
*/
