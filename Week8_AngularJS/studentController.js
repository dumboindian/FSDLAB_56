// ============================================
// WEEK 8 - ANGULARJS CONTROLLER
// File: studentController.js
// Topics: Controllers, $scope, Data Management
// ============================================

// Define AngularJS module
var app = angular.module('studentApp', []);

// Define Student Controller
app.controller('StudentController', function($scope) {
    
    // ========== STUDENT DATA ==========
    $scope.students = [
        { id: 1, name: 'Alice Johnson', course: 'React', marks: 85, city: 'New York' },
        { id: 2, name: 'Bob Smith', course: 'Angular', marks: 78, city: 'Los Angeles' },
        { id: 3, name: 'Charlie Brown', course: 'Node.js', marks: 92, city: 'Chicago' },
        { id: 4, name: 'Diana Prince', course: 'JavaScript', marks: 88, city: 'Houston' },
        { id: 5, name: 'Eve Wilson', course: 'React', marks: 76, city: 'Phoenix' }
    ];

    // ========== NEW STUDENT FORM ==========
    $scope.newStudent = {
        name: '',
        course: '',
        marks: '',
        city: ''
    };

    // ========== SEARCH AND FILTER ==========
    $scope.searchText = '';
    $scope.sortColumn = 'name';
    $scope.sortReverse = false;

    // ========== FUNCTIONS ==========

    // Add new student
    $scope.addStudent = function() {
        if ($scope.newStudent.name && $scope.newStudent.course && $scope.newStudent.marks) {
            var student = {
                id: $scope.students.length + 1,
                name: $scope.newStudent.name,
                course: $scope.newStudent.course,
                marks: parseInt($scope.newStudent.marks),
                city: $scope.newStudent.city || 'Unknown'
            };
            $scope.students.push(student);
            $scope.clearForm();
            $scope.message = 'Student added successfully!';
            $scope.messageType = 'success';
        } else {
            $scope.message = 'Please fill all required fields!';
            $scope.messageType = 'error';
        }
    };

    // Delete student
    $scope.deleteStudent = function(id) {
        var index = $scope.students.findIndex(function(s) {
            return s.id === id;
        });
        if (index !== -1) {
            $scope.students.splice(index, 1);
            $scope.message = 'Student deleted successfully!';
            $scope.messageType = 'success';
        }
    };

    // Update student marks
    $scope.updateMarks = function(student, change) {
        student.marks = Math.max(0, Math.min(100, student.marks + change));
        $scope.message = 'Marks updated for ' + student.name;
        $scope.messageType = 'info';
    };

    // Clear form
    $scope.clearForm = function() {
        $scope.newStudent = {
            name: '',
            course: '',
            marks: '',
            city: ''
        };
    };

    // Sort by column
    $scope.sortBy = function(column) {
        if ($scope.sortColumn === column) {
            $scope.sortReverse = !$scope.sortReverse;
        } else {
            $scope.sortColumn = column;
            $scope.sortReverse = false;
        }
    };

    // Calculate grade
    $scope.getGrade = function(marks) {
        if (marks >= 90) return 'A';
        if (marks >= 80) return 'B';
        if (marks >= 70) return 'C';
        if (marks >= 60) return 'D';
        return 'F';
    };

    // Get grade class for styling
    $scope.getGradeClass = function(marks) {
        var grade = $scope.getGrade(marks);
        return 'grade-' + grade.toLowerCase();
    };

    // Calculate statistics
    $scope.getTotalStudents = function() {
        return $scope.students.length;
    };

    $scope.getAverageMarks = function() {
        if ($scope.students.length === 0) return 0;
        var total = $scope.students.reduce(function(sum, student) {
            return sum + student.marks;
        }, 0);
        return (total / $scope.students.length).toFixed(2);
    };

    $scope.getHighestMarks = function() {
        if ($scope.students.length === 0) return 0;
        return Math.max.apply(Math, $scope.students.map(function(s) {
            return s.marks;
        }));
    };

    $scope.getLowestMarks = function() {
        if ($scope.students.length === 0) return 0;
        return Math.min.apply(Math, $scope.students.map(function(s) {
            return s.marks;
        }));
    };

    // Get students by grade
    $scope.getStudentsByGrade = function(grade) {
        return $scope.students.filter(function(student) {
            return $scope.getGrade(student.marks) === grade;
        }).length;
    };

    // Check if student passed
    $scope.isPassed = function(marks) {
        return marks >= 50;
    };

    // Get pass percentage
    $scope.getPassPercentage = function() {
        if ($scope.students.length === 0) return 0;
        var passedCount = $scope.students.filter(function(s) {
            return $scope.isPassed(s.marks);
        }).length;
        return ((passedCount / $scope.students.length) * 100).toFixed(1);
    };

    // ========== INITIALIZATION ==========
    $scope.message = 'Welcome to Student Management System';
    $scope.messageType = 'info';
    $scope.appTitle = 'AngularJS Student Controller';
    $scope.currentDate = new Date();
});

// Additional Controller for Calculator Demo
app.controller('CalculatorController', function($scope) {
    $scope.num1 = 10;
    $scope.num2 = 5;
    
    $scope.add = function() {
        return $scope.num1 + $scope.num2;
    };
    
    $scope.subtract = function() {
        return $scope.num1 - $scope.num2;
    };
    
    $scope.multiply = function() {
        return $scope.num1 * $scope.num2;
    };
    
    $scope.divide = function() {
        if ($scope.num2 === 0) return 'Cannot divide by zero';
        return ($scope.num1 / $scope.num2).toFixed(2);
    };
});

// Counter Controller Demo
app.controller('CounterController', function($scope) {
    $scope.count = 0;
    
    $scope.increment = function() {
        $scope.count++;
    };
    
    $scope.decrement = function() {
        $scope.count--;
    };
    
    $scope.reset = function() {
        $scope.count = 0;
    };
});

console.log('AngularJS Controllers loaded successfully!');
