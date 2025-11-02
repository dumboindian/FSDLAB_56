// ============================================
// WEEK 7 - REACT ROUTING
// File: AppRouter.js
// Topics: React Router, Navigation
// ============================================

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import './AppRouter.css';

// Home Component
function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      <h1>🏠 Home Page</h1>
      <p>Welcome to React Router demonstration!</p>
      <div className="info-box">
        <h3>What is React Router?</h3>
        <ul>
          <li>Library for routing in React applications</li>
          <li>Enables navigation between different views/components</li>
          <li>Maintains browser history</li>
          <li>Supports dynamic routing</li>
        </ul>
      </div>
      <button className="btn btn-primary" onClick={() => navigate('/about')}>
        Go to About Page
      </button>
    </div>
  );
}

// About Component
function About() {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      <h1>ℹ️ About Page</h1>
      <p>This is the About page of our React application.</p>
      <div className="card">
        <h3>About FSDL</h3>
        <p>Full Stack Development Lab covers:</p>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>JavaScript & ES6+</li>
          <li>React & Angular</li>
          <li>Node.js & Express</li>
        </ul>
      </div>
      <button className="btn btn-success" onClick={() => navigate('/contact')}>
        Go to Contact Page
      </button>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div className="page-content">
      <h1>📧 Contact Page</h1>
      <p>Get in touch with us!</p>
      <div className="contact-info">
        <div className="contact-card">
          <h3>Email</h3>
          <p>fsdlab@example.com</p>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <p>+1 (234) 567-8900</p>
        </div>
        <div className="contact-card">
          <h3>Address</h3>
          <p>123 React Street, JS City</p>
        </div>
      </div>
    </div>
  );
}

// User Profile Component with URL Parameters
function UserProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const users = {
    '1': { name: 'Alice Johnson', role: 'Developer', email: 'alice@example.com' },
    '2': { name: 'Bob Smith', role: 'Designer', email: 'bob@example.com' },
    '3': { name: 'Charlie Brown', role: 'Manager', email: 'charlie@example.com' }
  };

  const user = users[userId];

  if (!user) {
    return (
      <div className="page-content">
        <h1>❌ User Not Found</h1>
        <p>The user with ID {userId} does not exist.</p>
        <button className="btn btn-primary" onClick={() => navigate('/users')}>
          Back to Users
        </button>
      </div>
    );
  }

  return (
    <div className="page-content">
      <h1>👤 User Profile</h1>
      <div className="profile-card">
        <h2>{user.name}</h2>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {userId}</p>
      </div>
      <button className="btn btn-secondary" onClick={() => navigate('/users')}>
        Back to Users List
      </button>
    </div>
  );
}

// Users List Component
function UsersList() {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' }
  ];

  return (
    <div className="page-content">
      <h1>👥 Users List</h1>
      <p>Click on a user to view their profile (demonstrates dynamic routing)</p>
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card" onClick={() => navigate(`/users/${user.id}`)}>
            <h3>{user.name}</h3>
            <p>User ID: {user.id}</p>
            <button className="btn btn-sm">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 404 Not Found Component
function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-content not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <button className="btn btn-primary" onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>React Router Demo</h2>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Main App Router Component
function AppRouter() {
  return (
    <Router>
      <div className="app-router">
        <Navigation />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:userId" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2024 FSDL Week 7 - React Router</p>
        </footer>
      </div>
    </Router>
  );
}

export default AppRouter;

/* 
INSTALLATION INSTRUCTIONS:
To use React Router in your project, install it first:

npm install react-router-dom

KEY CONCEPTS:
1. BrowserRouter - Wraps the entire app for routing
2. Routes - Container for all Route components
3. Route - Defines a path and component to render
4. Link - Navigation without page reload
5. NavLink - Link with active state styling
6. useNavigate - Hook for programmatic navigation
7. useParams - Hook to access URL parameters
*/
