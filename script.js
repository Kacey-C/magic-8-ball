$(document).ready(function(){

var magic8Ball = {};
magic8Ball.listOfAnswers = ["Absolutely", "Without a doubt", "I guess so", "Yes", "Possibly", "I dunno maybe", "Not now please", "Why?", "Sorry, not a chance", "Of course!", "uh... What did you say?"];

$("#answer").hide();

magic8Ball.askQuestion = function(question) {
	$("#answer").fadeIn(4000);

	var random = Math.random();
	var array = random * this.listOfAnswers.length;
	var index = Math.floor(array);
	var answer = this.listOfAnswers[index];
	$("#answer").text(answer);

	console.log(question);
	console.log(answer);

	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
};

$("#answer").hide();


var onClick = function(){
	$("#answer").hide();

	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	
	setTimeout(
		function(){
	var question = prompt("What is your question?")

	$("#8ball").effect("shake")
	magic8Ball.askQuestion(question)}, 500);
	
};

$("#questionButton").click(onClick);


});