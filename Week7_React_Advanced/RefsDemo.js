// ============================================
// WEEK 7 - REACT REFS
// File: RefsDemo.js
// Topics: useRef Hook, DOM Manipulation
// ============================================

import React, { useRef, useState } from 'react';
import './RefsDemo.css';

function RefsDemo() {
  // useRef for input focus
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const fileInputRef = useRef(null);

  // useRef for DOM element manipulation
  const boxRef = useRef(null);
  const videoRef = useRef(null);

  // useRef for storing mutable values (doesn't cause re-render)
  const renderCount = useRef(0);
  const previousValue = useRef('');

  // useState for reactive values
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [boxColor, setBoxColor] = useState('#3498db');

  // Increment render count (doesn't cause re-render)
  renderCount.current += 1;

  // Focus on name input
  const focusNameInput = () => {
    nameInputRef.current.focus();
    nameInputRef.current.style.borderColor = '#2ecc71';
    setMessage('Name input focused');
  };

  // Focus on email input
  const focusEmailInput = () => {
    emailInputRef.current.focus();
    emailInputRef.current.style.borderColor = '#3498db';
    setMessage('Email input focused');
  };

  // Get input value using ref
  const getInputValue = () => {
    const value = nameInputRef.current.value;
    setMessage(`Input value: "${value}"`);
  };

  // Clear input using ref
  const clearInput = () => {
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    nameInputRef.current.focus();
    setMessage('Inputs cleared');
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessage(`File selected: ${file.name}`);
    }
  };

  // Change box color using ref
  const changeBoxColor = () => {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    boxRef.current.style.backgroundColor = randomColor;
    setBoxColor(randomColor);
    setMessage(`Box color changed to ${randomColor}`);
  };

  // Scroll to box
  const scrollToBox = () => {
    boxRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setMessage('Scrolled to box');
  };

  // Video controls using ref
  const playVideo = () => {
    videoRef.current.play();
    setMessage('Video playing');
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setMessage('Video paused');
  };

  const resetVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
    setMessage('Video reset');
  };

  // Handle input change (demonstrates difference between ref and state)
  const handleInputChange = (e) => {
    previousValue.current = inputValue;
    setInputValue(e.target.value);
  };

  return (
    <div className="refs-demo-container">
      <h1>React useRef Hook Demo</h1>
      <p className="subtitle">Demonstrating DOM manipulation and persistent values</p>

      {/* Render Count */}
      <div className="info-box">
        <p><strong>Component Render Count:</strong> {renderCount.current}</p>
        <p><small>This counter uses useRef and doesn't cause re-renders</small></p>
      </div>

      {/* Message Display */}
      {message && (
        <div className="message-box">
          {message}
        </div>
      )}

      {/* Section 1: Input Focus */}
      <section className="demo-section">
        <h2>1. Input Focus Control</h2>
        <div className="input-group">
          <input
            ref={nameInputRef}
            type="text"
            placeholder="Name"
            className="demo-input"
          />
          <input
            ref={emailInputRef}
            type="email"
            placeholder="Email"
            className="demo-input"
          />
        </div>
        <div className="button-group">
          <button className="btn btn-primary" onClick={focusNameInput}>
            Focus Name
          </button>
          <button className="btn btn-success" onClick={focusEmailInput}>
            Focus Email
          </button>
          <button className="btn btn-info" onClick={getInputValue}>
            Get Name Value
          </button>
          <button className="btn btn-danger" onClick={clearInput}>
            Clear All
          </button>
        </div>
      </section>

      {/* Section 2: File Input */}
      <section className="demo-section">
        <h2>2. Hidden File Input</h2>
        <p>Click the button to trigger the hidden file input</p>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button className="btn btn-primary" onClick={triggerFileInput}>
          📁 Select File
        </button>
      </section>

      {/* Section 3: DOM Manipulation */}
      <section className="demo-section">
        <h2>3. DOM Element Manipulation</h2>
        <div ref={boxRef} className="color-box">
          <p>Current Color: {boxColor}</p>
        </div>
        <div className="button-group">
          <button className="btn btn-warning" onClick={changeBoxColor}>
            Change Color
          </button>
          <button className="btn btn-info" onClick={scrollToBox}>
            Scroll to Box
          </button>
        </div>
      </section>

      {/* Section 4: Video Controls */}
      <section className="demo-section">
        <h2>4. Video Control with Refs</h2>
        <video
          ref={videoRef}
          width="100%"
          style={{ maxWidth: '600px', borderRadius: '8px' }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="button-group">
          <button className="btn btn-success" onClick={playVideo}>
            ▶️ Play
          </button>
          <button className="btn btn-warning" onClick={pauseVideo}>
            ⏸️ Pause
          </button>
          <button className="btn btn-danger" onClick={resetVideo}>
            🔄 Reset
          </button>
        </div>
      </section>

      {/* Section 5: Ref vs State */}
      <section className="demo-section">
        <h2>5. useRef vs useState</h2>
        <div className="comparison-box">
          <div className="comparison-item">
            <h3>Current Value (useState)</h3>
            <p>{inputValue || 'Empty'}</p>
          </div>
          <div className="comparison-item">
            <h3>Previous Value (useRef)</h3>
            <p>{previousValue.current || 'Empty'}</p>
          </div>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
          className="demo-input"
        />
        <p className="info-text">
          <strong>Note:</strong> Previous value is stored in useRef and persists without causing re-renders
        </p>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2>📝 Key Concepts</h2>
        <div className="concepts-grid">
          <div className="concept-card">
            <h3>useRef Hook</h3>
            <ul>
              <li>Returns a mutable ref object</li>
              <li>Persists across re-renders</li>
              <li>Doesn't trigger re-renders when changed</li>
              <li>Access DOM elements directly</li>
            </ul>
          </div>
          <div className="concept-card">
            <h3>Common Use Cases</h3>
            <ul>
              <li>Accessing DOM elements</li>
              <li>Storing mutable values</li>
              <li>Managing focus, text selection</li>
              <li>Integrating with third-party libraries</li>
            </ul>
          </div>
          <div className="concept-card">
            <h3>Ref vs State</h3>
            <ul>
              <li><strong>Ref:</strong> Mutable, no re-render</li>
              <li><strong>State:</strong> Immutable, triggers re-render</li>
              <li>Use ref for non-visual data</li>
              <li>Use state for UI updates</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RefsDemo;
