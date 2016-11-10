// Javascript Entry Point
var app = angular.module('quizApp', []);

app.directive('quiz', function(testFactory) {
 	return {
		restrict: 'EA',
		scope: {},
		templateUrl: 'template.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				scope.id= 0;
				scope.testOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			}
			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}
			scope.getQuestion = function() {
				var q = testFactory.getQuestion(scope.id);
				if (q) {
						scope.question = q.question;
						scope.choices = q.choices;
						scope.answer = q.answer;
						scope.answerMode = true;
				} else {
						scope.testOver = true;
				}
			}
		}
		
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
	return {
		getQuestion: function(id) {
			if (id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
})
