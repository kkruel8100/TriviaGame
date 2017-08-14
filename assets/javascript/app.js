// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(function() {


var trivia = [{
	question: "Destiny's Child",
	choices: ["Girl's Tyme", "Deadly Divas", "Miss B. Natural", "Rotating Child"],
	answer: "Girl's Tyme"
	},{
	question: "Fifth Harmony",
	choices: ["Knot Insane", "Pizza Friday", "Lylas", "R.U. Nutts"],
	answer: "Lylas"	
	},{
	question: "Maroon 5",
	choices: ["Yes No Maybe", "Dog Walkers", "Kara's Flowers", "Dysfunction"],
	answer: "Kara's Flowers"
	}	
];

var time = 8; //variable for countdown per question.  if change time changes, update here and in reset function
var interval; //variable for countdown by 1 second increments
var unanswered = 0; //variable for unanswered questions
var currentQuestion = false;
var correct = 0;
var incorrect = 0;
var i=0;
var gameOver = false;

$("#start").on("click", start);
$("#restart").on("click", reset);

	function start () {
		getQuestion(i);
		// countdown(time);
		$("#start").hide();

	}

	function reset () {
		countdown(8);
	}

	//function to countdown by 1 second increments
	function countdown (setTimer) {
		time=setTimer;
		interval = setInterval(decrease, 1000);
	}

	//function to decrease the timer and update the display; if zero is reached, countdown stops & unanswered questions increase by 1
	function decrease (setTimer) {
		time--;
		$("#timer").html("<p>Time Remaining: " + time + "</p>");

		if (time === 0 && i<trivia.length) {
			stop();
			unanswered++;
			console.log(unanswered);
			$("#game").html("<p>The correct answer is " + trivia[i].answer + ".</p>");
			$("#timer").hide();
			console.log(trivia[i].answer);
			setTimeout(empty, 4000);	
		}
	}

	//function to stop the countdown 
	function stop () {
		clearInterval(interval);
	}

	function getQuestion (i) {
		if (i<trivia.length && gameOver===false) {
		countdown(8);
		$("#game").append("<p>What was " + trivia[i].question + " original group name?</p>");			
			for (a=0; a<trivia[i].choices.length; a++) {
				$("#game").append("<p>" + trivia[i].choices[a] + "</p>" );
			}
		currentQuestion===true;	
		}	
		else {
			gameOver=true;
		}	
	}//get question

	function empty () {		
		$("#timer").show();
 		time=4;
 		i++;
    	$("#game").empty();
    	getQuestion(i);
	}

});//document ready
