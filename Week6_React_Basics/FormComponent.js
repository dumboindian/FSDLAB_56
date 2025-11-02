// ============================================
// WEEK 6 - REACT FORMS & PROPS
// File: FormComponent.js
// Topics: Controlled Forms, Props, State
// ============================================

import React, { useState } from 'react';
import './FormComponent.css';

// Child Component - Display User Info (demonstrates Props)
function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>User Information</h3>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Course:</strong> {user.course}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Skills:</strong> {user.skills.join(', ') || 'None'}</p>
        <p><strong>Comments:</strong> {user.comments || 'No comments'}</p>
      </div>
    </div>
  );
}

// Main Form Component
function FormComponent() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    course: '',
    gender: '',
    skills: [],
    comments: '',
    subscribe: false
  });

  // State for submitted user data
  const [submittedUser, setSubmittedUser] = useState(null);

  // State for form errors
  const [errors, setErrors] = useState({});

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Handle checkbox changes (for skills)
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedSkills = [...formData.skills];
    
    if (checked) {
      updatedSkills.push(value);
    } else {
      updatedSkills = updatedSkills.filter(skill => skill !== value);
    }
    
    setFormData({
      ...formData,
      skills: updatedSkills
    });
  };

  // Handle subscribe checkbox
  const handleSubscribeChange = (e) => {
    setFormData({
      ...formData,
      subscribe: e.target.checked
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age < 18) {
      newErrors.age = 'Must be 18 or older';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select gender';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmittedUser(formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        age: '',
        course: '',
        gender: '',
        skills: [],
        comments: '',
        subscribe: false
      });
      setErrors({});
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      age: '',
      course: '',
      gender: '',
      skills: [],
      comments: '',
      subscribe: false
    });
    setErrors({});
    setSubmittedUser(null);
  };

  return (
    <div className="form-container">
      <h1>React Controlled Form</h1>
      <p className="subtitle">Demonstrating Props and State Updates</p>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="registration-form">
          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Age Input */}
          <div className="form-group">
            <label htmlFor="age">Age *</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="18"
              min="18"
              className={errors.age ? 'error' : ''}
            />
            {errors.age && <span className="error-message">{errors.age}</span>}
          </div>

          {/* Course Select */}
          <div className="form-group">
            <label htmlFor="course">Select Course *</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className={errors.course ? 'error' : ''}
            >
              <option value="">-- Choose a course --</option>
              <option value="HTML5">HTML5</option>
              <option value="CSS3">CSS3</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Node.js">Node.js</option>
            </select>
            {errors.course && <span className="error-message">{errors.course}</span>}
          </div>

          {/* Gender Radio Buttons */}
          <div className="form-group">
            <label>Gender *</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleInputChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleInputChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === 'Other'}
                  onChange={handleInputChange}
                />
                Other
              </label>
            </div>
            {errors.gender && <span className="error-message">{errors.gender}</span>}
          </div>

          {/* Skills Checkboxes */}
          <div className="form-group">
            <label>Skills</label>
            <div className="checkbox-group">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'].map(skill => (
                <label key={skill}>
                  <input
                    type="checkbox"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleCheckboxChange}
                  />
                  {skill}
                </label>
              ))}
            </div>
          </div>

          {/* Comments Textarea */}
          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              placeholder="Any additional comments..."
              rows="4"
            />
          </div>

          {/* Subscribe Checkbox */}
          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.subscribe}
                onChange={handleSubscribeChange}
              />
              Subscribe to newsletter
            </label>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>

        {/* Display Submitted Data using Props */}
        {submittedUser && (
          <div className="result-section">
            <UserCard user={submittedUser} />
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="info-box">
        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Controlled Components:</strong> Form inputs controlled by React state</li>
          <li><strong>Props:</strong> Data passed from parent to child component (UserCard)</li>
          <li><strong>State Updates:</strong> Using setState to update form data</li>
          <li><strong>Event Handling:</strong> onChange, onSubmit events</li>
        </ul>
      </div>
    </div>
  );
}

export default FormComponent;
