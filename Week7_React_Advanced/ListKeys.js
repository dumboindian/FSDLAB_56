// ============================================
// WEEK 7 - REACT LISTS & KEYS
// File: ListKeys.js
// Topics: Rendering Lists, Keys, map() function
// ============================================

import React, { useState } from 'react';
import './ListKeys.css';

function ListKeys() {
  // State for students list
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', course: 'React', marks: 85, grade: 'A' },
    { id: 2, name: 'Bob Smith', course: 'Angular', marks: 78, grade: 'B' },
    { id: 3, name: 'Charlie Brown', course: 'Node.js', marks: 92, grade: 'A' },
    { id: 4, name: 'Diana Prince', course: 'JavaScript', marks: 88, grade: 'A' },
    { id: 5, name: 'Eve Wilson', course: 'React', marks: 76, grade: 'B' }
  ]);

  // State for new student form
  const [newStudent, setNewStudent] = useState({
    name: '',
    course: '',
    marks: ''
  });

  // State for filter
  const [filterGrade, setFilterGrade] = useState('All');

  // State for sort order
  const [sortBy, setSortBy] = useState('name');

  // Calculate grade based on marks
  const calculateGrade = (marks) => {
    if (marks >= 90) return 'A';
    if (marks >= 80) return 'B';
    if (marks >= 70) return 'C';
    if (marks >= 60) return 'D';
    return 'F';
  };

  // Add new student
  const addStudent = (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.course && newStudent.marks) {
      const student = {
        id: Date.now(), // Unique ID using timestamp
        name: newStudent.name,
        course: newStudent.course,
        marks: parseInt(newStudent.marks),
        grade: calculateGrade(parseInt(newStudent.marks))
      };
      setStudents([...students, student]);
      setNewStudent({ name: '', course: '', marks: '' });
    }
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Update student marks
  const updateMarks = (id, newMarks) => {
    setStudents(students.map(student =>
      student.id === id
        ? { ...student, marks: newMarks, grade: calculateGrade(newMarks) }
        : student
    ));
  };

  // Filter students by grade
  const filteredStudents = filterGrade === 'All'
    ? students
    : students.filter(student => student.grade === filterGrade);

  // Sort students
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'marks') return b.marks - a.marks;
    if (sortBy === 'course') return a.course.localeCompare(b.course);
    return 0;
  });

  // Calculate statistics
  const totalStudents = students.length;
  const averageMarks = students.reduce((sum, s) => sum + s.marks, 0) / totalStudents;
  const highestMarks = Math.max(...students.map(s => s.marks));
  const lowestMarks = Math.min(...students.map(s => s.marks));

  return (
    <div className="list-keys-container">
      <h1>React Lists & Keys Demo</h1>
      <p className="subtitle">Demonstrating list rendering with unique keys</p>

      {/* Statistics */}
      <div className="stats-section">
        <div className="stat-card">
          <h3>{totalStudents}</h3>
          <p>Total Students</p>
        </div>
        <div className="stat-card">
          <h3>{averageMarks.toFixed(1)}</h3>
          <p>Average Marks</p>
        </div>
        <div className="stat-card">
          <h3>{highestMarks}</h3>
          <p>Highest Marks</p>
        </div>
        <div className="stat-card">
          <h3>{lowestMarks}</h3>
          <p>Lowest Marks</p>
        </div>
      </div>

      {/* Add Student Form */}
      <section className="form-section">
        <h2>Add New Student</h2>
        <form onSubmit={addStudent} className="student-form">
          <input
            type="text"
            placeholder="Student Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            required
          />
          <select
            value={newStudent.course}
            onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
            required
          >
            <option value="">Select Course</option>
            <option value="HTML5">HTML5</option>
            <option value="CSS3">CSS3</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Node.js">Node.js</option>
          </select>
          <input
            type="number"
            placeholder="Marks"
            value={newStudent.marks}
            onChange={(e) => setNewStudent({ ...newStudent, marks: e.target.value })}
            min="0"
            max="100"
            required
          />
          <button type="submit" className="btn btn-primary">Add Student</button>
        </form>
      </section>

      {/* Filter and Sort Controls */}
      <section className="controls-section">
        <div className="control-group">
          <label>Filter by Grade:</label>
          <select value={filterGrade} onChange={(e) => setFilterGrade(e.target.value)}>
            <option value="All">All Grades</option>
            <option value="A">Grade A</option>
            <option value="B">Grade B</option>
            <option value="C">Grade C</option>
            <option value="D">Grade D</option>
            <option value="F">Grade F</option>
          </select>
        </div>
        <div className="control-group">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="marks">Marks (High to Low)</option>
            <option value="course">Course</option>
          </select>
        </div>
      </section>

      {/* Students List */}
      <section className="list-section">
        <h2>Students List ({sortedStudents.length})</h2>
        {sortedStudents.length === 0 ? (
          <p className="no-data">No students found</p>
        ) : (
          <div className="students-grid">
            {sortedStudents.map((student) => (
              <div key={student.id} className="student-card">
                <div className="student-header">
                  <h3>{student.name}</h3>
                  <span className={`grade-badge grade-${student.grade}`}>
                    {student.grade}
                  </span>
                </div>
                <div className="student-details">
                  <p><strong>Course:</strong> {student.course}</p>
                  <p><strong>Marks:</strong> {student.marks}/100</p>
                  <p><strong>ID:</strong> {student.id}</p>
                </div>
                <div className="student-actions">
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => updateMarks(student.id, Math.min(student.marks + 5, 100))}
                  >
                    +5 Marks
                  </button>
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => updateMarks(student.id, Math.max(student.marks - 5, 0))}
                  >
                    -5 Marks
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Simple Lists Examples */}
      <section className="examples-section">
        <h2>Simple List Examples</h2>
        
        <div className="example-box">
          <h3>1. Array of Strings</h3>
          {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'].map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="example-box">
          <h3>2. Array of Numbers</h3>
          <ul className="number-list">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <li key={num}>Number: {num} | Square: {num * num}</li>
            ))}
          </ul>
        </div>

        <div className="example-box">
          <h3>3. Nested List</h3>
          {[
            { category: 'Frontend', items: ['HTML', 'CSS', 'React'] },
            { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] }
          ].map((group, index) => (
            <div key={index} className="nested-list">
              <h4>{group.category}</h4>
              <ul>
                {group.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2>📝 Why Keys Are Important</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>🔑 Unique Identification</h3>
            <p>Keys help React identify which items have changed, added, or removed</p>
          </div>
          <div className="info-card">
            <h3>⚡ Performance</h3>
            <p>Keys enable efficient updates by minimizing DOM manipulations</p>
          </div>
          <div className="info-card">
            <h3>✅ Best Practices</h3>
            <p>Use stable, unique IDs (not array index for dynamic lists)</p>
          </div>
          <div className="info-card">
            <h3>🚫 Common Mistakes</h3>
            <p>Avoid using array index as key for lists that can reorder</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListKeys;
