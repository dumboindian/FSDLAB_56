// ============================================
// WEEK 10 - NODE.JS & EXPRESS.JS
// File: server.js
// Topics: Basic Express Server, Routes
// ============================================

// Import Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample data
let users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Manager' }
];

// ========== ROUTES ==========

// Home Route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to FSDL Week 10 - Node.js & Express</h1>
        <p>Available routes:</p>
        <ul>
            <li><a href="/users">GET /users</a> - Get all users</li>
            <li>POST /users - Create new user</li>
            <li>GET /users/:id - Get user by ID</li>
            <li>PUT /users/:id - Update user</li>
            <li>DELETE /users/:id - Delete user</li>
        </ul>
    `);
});

// Get all users
app.get('/users', (req, res) => {
    res.json({
        success: true,
        count: users.length,
        data: users
    });
});

// Get user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json({ success: true, data: user });
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});

// Create new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    };
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
});

// Update user
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.role = req.body.role || user.role;
        res.json({ success: true, data: user });
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});

// Delete user
app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index !== -1) {
        const deleted = users.splice(index, 1);
        res.json({ success: true, data: deleted[0] });
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

/* 
INSTALLATION:
1. Initialize project: npm init -y
2. Install Express: npm install express
3. Run server: node server.js

TEST ROUTES:
- GET http://localhost:3000/
- GET http://localhost:3000/users
- GET http://localhost:3000/users/1
- POST http://localhost:3000/users (with JSON body)
- PUT http://localhost:3000/users/1 (with JSON body)
- DELETE http://localhost:3000/users/1
*/
