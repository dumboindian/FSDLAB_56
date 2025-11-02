// ============================================
// WEEK 9 - ANGULARJS EVENT HANDLING
// File: eventHandling.js
// Topics: ng-click, ng-change, Events
// ============================================

var app = angular.module('formApp', []);

// Form Controller
app.controller('FormController', function($scope) {
    $scope.student = {
        name: '',
        email: '',
        age: '',
        course: ''
    };
    
    $scope.submitted = false;
    
    $scope.submitForm = function() {
        if ($scope.studentForm.$valid) {
            $scope.submitted = true;
            console.log('Form submitted:', $scope.student);
        }
    };
});

// Event Controller
app.controller('EventController', function($scope) {
    $scope.clickCount = 0;
    $scope.message = '';
    $scope.inputValue = '';
    
    $scope.handleClick = function() {
        $scope.clickCount++;
        $scope.message = 'Button clicked ' + $scope.clickCount + ' times';
    };
    
    $scope.handleChange = function() {
        $scope.message = 'Input changed to: ' + $scope.inputValue;
    };
    
    $scope.handleMouseEnter = function() {
        $scope.message = 'Mouse entered!';
    };
    
    $scope.handleMouseLeave = function() {
        $scope.message = 'Mouse left!';
    };
});
