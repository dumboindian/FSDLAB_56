# 📚 Full Stack Development Lab (FSDL) - 10 Week Practical Guide

Complete hands-on coding practicals covering **HTML5 → CSS3 → Bootstrap → JavaScript → React → Angular → Node.js**

---

## 📋 Table of Contents

- [Overview](#overview)
- [Week-wise Breakdown](#week-wise-breakdown)
- [How to Use](#how-to-use)
- [Prerequisites](#prerequisites)
- [Installation Instructions](#installation-instructions)

---

## 🎯 Overview

This repository contains **30 practical code files** (3 files per week) covering the complete Full Stack Development curriculum. Each week focuses on a specific technology with hands-on coding examples.

**Total Duration:** 10 Weeks  
**Total Files:** 30 Code Files  
**Technologies Covered:** HTML5, CSS3, Bootstrap, JavaScript, React, AngularJS, Node.js

---

## 📅 Week-wise Breakdown

### **WEEK 1 – HTML5 Essentials**
**Goal:** Learn to structure a webpage with HTML5 tags, media, and forms.

📁 **Files:**
- `index.html` – Complete web page with head, body, text formatting, hyperlinks, lists, tables, and images
- `forms.html` – Form with text fields, radio buttons, dropdowns, and submit button
- `media.html` – Audio, video, and iframe elements with documented attributes

🧠 **Outcome:** Understand HTML5 structure and integrate multimedia + forms

---

### **WEEK 2 – CSS3 Styling**
**Goal:** Apply CSS3 for design, layout, and element styling.

📁 **Files:**
- `style.css` – Colors, fonts, background, and border styles demonstration
- `selectors.html` – CSS selectors, pseudo-classes (`:hover`, `:first-child`), pseudo-elements (`::after`, `::before`)
- `responsive.html` – Responsive design using media queries (layout changes under 768px)

🧠 **Outcome:** Style and control page layout using selectors and responsive techniques

---

### **WEEK 3 – Bootstrap Framework**
**Goal:** Build responsive layouts using Bootstrap components.

📁 **Files:**
- `grid_layout.html` – 12-column grid system with responsive two-section layout
- `forms_navbar.html` – Bootstrap-styled form and responsive navbar
- `ui_components.html` – Button groups, Breadcrumb, Alerts, and Cards

🧠 **Outcome:** Master Bootstrap grid, navigation, and reusable UI components

---

### **WEEK 4 – JavaScript Basics (Part 1)**
**Goal:** Understand JS fundamentals – variables, loops, conditions, and functions.

📁 **Files:**
- `basics.js` – Variables, data types, operators, and loops
- `functions_events.html` – Button click and input events using JS functions
- `oop_demo.js` – Simple JS class (e.g., Car) with methods and object instantiation

🧠 **Outcome:** Develop basic JS-driven interactivity with events and logic

---

### **WEEK 5 – JavaScript Advanced (Part 2)**
**Goal:** Practice arrays, string handling, validation, and error handling.

📁 **Files:**
- `arrays_strings.js` – Array operations (sorting, filtering) and string manipulation
- `form_validation.html` – Validate form fields (email, password) with JS and error messages
- `error_handling.js` – try...catch, custom errors, and console debugging

🧠 **Outcome:** Handle data processing, validations, and exceptions with JS

---

### **WEEK 6 – ReactJS Basics**
**Goal:** Learn React setup, components, props, and state management.

📁 **Files:**
- `App.js` – Functional React component using JSX displaying "Hello React!"
- `Counter.js` – Stateful component with increment/decrement buttons using `useState`
- `FormComponent.js` – Controlled form demonstrating props and state updates

🧠 **Outcome:** Understand React component lifecycle, state, and props

---

### **WEEK 7 – React Advanced (Routing & Refs)**
**Goal:** Implement navigation and references in React.

📁 **Files:**
- `AppRouter.js` – Setup routing with react-router-dom (`/home`, `/about`, `/contact`)
- `RefsDemo.js` – Demonstrate input focus using `useRef`
- `ListKeys.js` – Render list items with unique keys and map function

🧠 **Outcome:** Learn navigation and data mapping in React

---

### **WEEK 8 – AngularJS Fundamentals**
**Goal:** Explore AngularJS basics – data binding, controllers, and expressions.

📁 **Files:**
- `helloAngular.html` – "Hello World" app with `ng-app`, `ng-model`, and `ng-controller`
- `studentController.js` – AngularJS controller with `$scope.students` array
- `binding_demo.html` – One-way and two-way data binding with expressions

🧠 **Outcome:** Use AngularJS for dynamic two-way data updates

---

### **WEEK 9 – AngularJS Events & Validation**
**Goal:** Handle events, forms, and validations in AngularJS.

📁 **Files:**
- `formApp.html` – Student record form using AngularJS `ng-model` and validators
- `eventHandling.js` – Event-based actions (`ng-click`, `ng-change`) and data manipulation
- `studentRecords.html` – Display student list with `ng-repeat`, filter, and `$valid` validation status

🧠 **Outcome:** Validate data and manage UI events in AngularJS

---

### **WEEK 10 – Node.js and Express.js**
**Goal:** Implement backend logic with Node.js, Express, and MongoDB (mocked).

📁 **Files:**
- `server.js` – Basic Express server with two routes: `/` and `/users`
- `callback_demo.js` – Asynchronous JS using callbacks and event loops
- `mongo_mock.js` – Simulate MongoDB CRUD operations (insert/find/update) without real DB setup

🧠 **Outcome:** Understand backend architecture and REST API structure using Node.js

---

## 📊 Summary Table

| Week | Topic | Files | Focus |
|------|-------|-------|-------|
| 1 | HTML5 | 3 | Structure & Media |
| 2 | CSS3 | 3 | Styling & Layout |
| 3 | Bootstrap | 3 | Responsive UI |
| 4 | JS Basics | 3 | Variables & Logic |
| 5 | JS Advanced | 3 | Arrays & Validation |
| 6 | React Basics | 3 | JSX, State, Props |
| 7 | React Advanced | 3 | Router, Refs, Keys |
| 8 | Angular Basics | 3 | Controller & Binding |
| 9 | Angular Events | 3 | Validation & ng-model |
| 10 | Node.js | 3 | Backend & API |
| **Total** | **—** | **30 Files** | **—** |

---

## 🚀 How to Use

### **For HTML/CSS/Bootstrap (Weeks 1-3):**
1. Open `.html` files directly in your browser
2. No additional setup required
3. Edit files in VS Code and refresh browser to see changes

### **For JavaScript (Weeks 4-5):**
1. **For `.js` files:** Run in Node.js
   ```bash
   node basics.js
   node arrays_strings.js
   ```
2. **For `.html` files:** Open directly in browser

### **For React (Weeks 6-7):**
1. Create a new React app:
   ```bash
   npx create-react-app fsdl-react
   cd fsdl-react
   ```
2. Copy the `.js` files to `src/` folder
3. Install React Router (for Week 7):
   ```bash
   npm install react-router-dom
   ```
4. Import and use components in `App.js`
5. Run the app:
   ```bash
   npm start
   ```

### **For AngularJS (Weeks 8-9):**
1. Open `.html` files directly in browser
2. AngularJS is loaded via CDN (no installation needed)
3. Make sure `studentController.js` is in the same folder as HTML files

### **For Node.js (Week 10):**
1. Initialize Node.js project:
   ```bash
   cd Week10_NodeJS
   npm init -y
   ```
2. Install Express:
   ```bash
   npm install express
   ```
3. Run the server:
   ```bash
   node server.js
   ```
4. Run callback demo:
   ```bash
   node callback_demo.js
   ```
5. Run MongoDB mock:
   ```bash
   node mongo_mock.js
   ```

---

## 📋 Prerequisites

### **Software Required:**
- **Text Editor:** VS Code (recommended)
- **Browser:** Chrome, Firefox, or Edge
- **Node.js:** v14+ (for JavaScript, React, and Node.js weeks)
- **npm:** Comes with Node.js

### **Knowledge Prerequisites:**
- Basic understanding of programming concepts
- Familiarity with command line/terminal
- HTML basics (helpful but not required)

---

## 📦 Installation Instructions

### **1. Install Node.js**
Download and install from: https://nodejs.org/

Verify installation:
```bash
node --version
npm --version
```

### **2. Install VS Code**
Download from: https://code.visualstudio.com/

### **3. Clone or Download This Repository**
```bash
git clone <repository-url>
cd FSDLAB_56
```

### **4. Install Dependencies (for React and Node.js)**

**For React (Weeks 6-7):**
```bash
npx create-react-app my-react-app
cd my-react-app
npm install react-router-dom
```

**For Node.js (Week 10):**
```bash
cd Week10_NodeJS
npm install express
```

---

## 🎓 Learning Path

**Recommended Order:**
1. Start with Week 1 (HTML5) - Foundation
2. Progress sequentially through each week
3. Complete all 3 files per week before moving forward
4. Practice by modifying the code
5. Build your own mini-projects using learned concepts

**Tips:**
- ✅ Type the code yourself instead of copy-pasting
- ✅ Experiment with modifications
- ✅ Use browser DevTools to inspect elements
- ✅ Read code comments for explanations
- ✅ Test all examples in your local environment

---

## 📝 File Structure

```
FSDLAB_56/
│
├── Week1_HTML5/
│   ├── index.html
│   ├── forms.html
│   └── media.html
│
├── Week2_CSS3/
│   ├── style.css
│   ├── selectors.html
│   └── responsive.html
│
├── Week3_Bootstrap/
│   ├── grid_layout.html
│   ├── forms_navbar.html
│   └── ui_components.html
│
├── Week4_JavaScript_Basics/
│   ├── basics.js
│   ├── functions_events.html
│   └── oop_demo.js
│
├── Week5_JavaScript_Advanced/
│   ├── arrays_strings.js
│   ├── form_validation.html
│   └── error_handling.js
│
├── Week6_React_Basics/
│   ├── App.js
│   ├── Counter.js
│   └── FormComponent.js
│
├── Week7_React_Advanced/
│   ├── AppRouter.js
│   ├── RefsDemo.js
│   └── ListKeys.js
│
├── Week8_AngularJS/
│   ├── helloAngular.html
│   ├── studentController.js
│   └── binding_demo.html
│
├── Week9_AngularJS_Events/
│   ├── formApp.html
│   ├── eventHandling.js
│   └── studentRecords.html
│
├── Week10_NodeJS/
│   ├── server.js
│   ├── callback_demo.js
│   └── mongo_mock.js
│
└── README.md
```

---

## 🔗 Additional Resources

### **Documentation:**
- **HTML5:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS3:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **Bootstrap:** https://getbootstrap.com/docs/
- **JavaScript:** https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **React:** https://react.dev/
- **AngularJS:** https://docs.angularjs.org/
- **Node.js:** https://nodejs.org/docs/
- **Express:** https://expressjs.com/

### **Practice Platforms:**
- **FreeCodeCamp:** https://www.freecodecamp.org/
- **CodePen:** https://codepen.io/
- **JSFiddle:** https://jsfiddle.net/

---

## 🤝 Contributing

Feel free to:
- Report issues
- Suggest improvements
- Add more examples
- Fix bugs

---

## 📄 License

This project is created for educational purposes as part of the Full Stack Development Lab curriculum.

---

## ✨ Acknowledgments

Created for **FSDL Week 1-10 Practicals**  
Designed to provide hands-on experience with modern web development technologies.

---

**Happy Coding! 🚀**

For questions or support, refer to the documentation links above or consult your instructor.
