// ============================================
// WEEK 6 - REACT STATE MANAGEMENT
// File: Counter.js
// Topics: useState Hook, State Management
// ============================================

import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  // useState Hook - Manages component state
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');

  // Increment function
  const increment = () => {
    setCount(count + step);
    setMessage(`Incremented by ${step}`);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - step);
    setMessage(`Decremented by ${step}`);
  };

  // Reset function
  const reset = () => {
    setCount(0);
    setMessage('Counter reset to 0');
  };

  // Double function
  const double = () => {
    setCount(count * 2);
    setMessage('Counter doubled');
  };

  // Handle step change
  const handleStepChange = (e) => {
    const newStep = parseInt(e.target.value) || 1;
    setStep(newStep);
    setMessage(`Step changed to ${newStep}`);
  };

  // Get color based on count value
  const getCountColor = () => {
    if (count > 0) return '#2ecc71'; // Green for positive
    if (count < 0) return '#e74c3c'; // Red for negative
    return '#3498db'; // Blue for zero
  };

  return (
    <div className="counter-container">
      <h1>React Counter App</h1>
      <p className="subtitle">Demonstrating useState Hook</p>

      {/* Counter Display */}
      <div className="counter-display" style={{ color: getCountColor() }}>
        <h2>Count: {count}</h2>
      </div>

      {/* Message Display */}
      {message && (
        <div className="message-box">
          {message}
        </div>
      )}

      {/* Control Buttons */}
      <div className="button-group">
        <button className="btn btn-success" onClick={increment}>
          ➕ Increment
        </button>
        <button className="btn btn-danger" onClick={decrement}>
          ➖ Decrement
        </button>
        <button className="btn btn-warning" onClick={reset}>
          🔄 Reset
        </button>
        <button className="btn btn-info" onClick={double}>
          ✖️ Double
        </button>
      </div>

      {/* Step Control */}
      <div className="step-control">
        <label htmlFor="step">Step Value:</label>
        <input
          type="number"
          id="step"
          value={step}
          onChange={handleStepChange}
          min="1"
          max="10"
        />
        <span className="step-info">Current step: {step}</span>
      </div>

      {/* Statistics */}
      <div className="stats-section">
        <h3>Statistics</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-label">Current Value</p>
            <p className="stat-value">{count}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Absolute Value</p>
            <p className="stat-value">{Math.abs(count)}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Is Even?</p>
            <p className="stat-value">{count % 2 === 0 ? 'Yes' : 'No'}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Is Positive?</p>
            <p className="stat-value">{count > 0 ? 'Yes' : count < 0 ? 'No' : 'Zero'}</p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <h3>About useState Hook</h3>
        <ul>
          <li>useState is a React Hook for managing component state</li>
          <li>It returns an array with current state and setter function</li>
          <li>State updates trigger component re-render</li>
          <li>Initial state is set when component first mounts</li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
