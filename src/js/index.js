// Javascript Entry Point
var app = angular.module('quizApp', []);

app.directive('quiz', function() {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'template.html'
	}
});
