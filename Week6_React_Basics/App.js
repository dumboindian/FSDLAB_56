// ============================================
// WEEK 6 - REACT BASICS
// File: App.js
// Topics: Functional Components, JSX
// ============================================

import React from 'react';
import './App.css';

// Functional Component using JSX
function App() {
  // JavaScript variables
  const appName = "Full Stack Development Lab";
  const weekNumber = 6;
  const topic = "React Basics";
  
  // Array of features
  const features = [
    "Component-based architecture",
    "Virtual DOM for performance",
    "JSX syntax",
    "Unidirectional data flow",
    "Reusable components"
  ];

  // Object data
  const student = {
    name: "John Doe",
    course: "React Development",
    level: "Beginner"
  };

  // Function to handle button click
  const handleClick = () => {
    alert("Hello from React! 🚀");
  };

  // Function to get current date
  const getCurrentDate = () => {
    return new Date().toLocaleDateString();
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1>Welcome to React! 🎉</h1>
        <p className="subtitle">Week {weekNumber}: {topic}</p>
      </header>

      {/* Main Content */}
      <main className="App-main">
        {/* JSX Expression */}
        <section className="card">
          <h2>JSX Expressions</h2>
          <p>App Name: <strong>{appName}</strong></p>
          <p>Current Date: <strong>{getCurrentDate()}</strong></p>
          <p>Calculation: 10 + 20 = <strong>{10 + 20}</strong></p>
        </section>

        {/* Conditional Rendering */}
        <section className="card">
          <h2>Conditional Rendering</h2>
          {weekNumber === 6 ? (
            <p className="success">✓ You are in Week 6</p>
          ) : (
            <p className="error">✗ This is not Week 6</p>
          )}
        </section>

        {/* List Rendering */}
        <section className="card">
          <h2>React Features</h2>
          <ul className="feature-list">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Object Data Display */}
        <section className="card">
          <h2>Student Information</h2>
          <div className="info-grid">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Level:</strong> {student.level}</p>
          </div>
        </section>

        {/* Event Handling */}
        <section className="card">
          <h2>Event Handling</h2>
          <button className="btn-primary" onClick={handleClick}>
            Click Me!
          </button>
        </section>

        {/* Inline Styles */}
        <section className="card">
          <h2>Inline Styles</h2>
          <p style={{ color: '#3498db', fontSize: '18px', fontWeight: 'bold' }}>
            This text uses inline styles
          </p>
          <div style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            marginTop: '10px'
          }}>
            Gradient background with inline styles
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; 2024 FSDL Week 6 - React Basics</p>
      </footer>
    </div>
  );
}

export default App;
