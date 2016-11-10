// Javascript Entry Point
var app = angular.module('quizApp', []);

app.directive('quiz', function(testFactory) {
 	return {
		restrict: 'EA',
		scope: {},
		templateUrl: 'template.html',
		
	 };
 });

app.factory('testFactory', function() {
	var questions = [
		{
			question: "Which one has the most vitamin C?",
			choices: ['Oranges', 'Strawberries', 'Mangos', 'Dragonfruit'],
			answer: [1]
		},
		{
			question: "Which male actor has been nominated for the Oscar the most times without winning?",
			choices: ['Richard Burton', 'Samuel L. Jackson', "Peter O'Toole", 'James Dean'],
			answer: [2]
		},
		{
			question: "What year did Zachary Taylor become president of the United States?",
			choices: ['1849', '1853', '1902', '1910'],
			answer: [0]
		},
		{
			question: "Which country consumes the most ice cream per year?",
			choices: ['Finland', 'Austrailia', 'Unites States', 'New Zealand'],
			answer: [3]
		},
		{
			question: "'Human beings like success, but they hate succsessful people'... Who said it?",
			choices: ['Bill Hicks', 'Miley Cyrus', 'Carrot Top', 'Frank Sinatra'],
			answer: [2]
		}
	]
})
