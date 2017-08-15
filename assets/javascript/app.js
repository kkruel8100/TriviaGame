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
var correct = 0;
var incorrect = 0;
var i=0;

	$("#start").on("click", start);
	$("#restart").on("click", reset);

	function start () {
		getQuestion(i);
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
			$("#game").html("<p>The correct answer is " + trivia[i].answer + ".</p>");
			$("#timer").hide();
			setTimeout(empty, 4000);//set timeout of 4 seconds before empty function	
		}
	}

	//function to stop the countdown 
	function stop () {
		clearInterval(interval);
	}

	//function to get next question
	function getQuestion (i) {
		if (i<trivia.length) {	
		countdown(8);
		$("#game").append("<h3>What was the original group name of " + trivia[i].question + "?</h3>");			
			for (a=0; a<trivia[i].choices.length; a++) {
				$("#game").append("<p>" + trivia[i].choices[a] + "</p>" );
			}
		}		
	}

	//function to check for end of game or get next question
	function empty () {	
		i++;
		if (i===trivia.length) {
			endGame();
		}
		else {	
			$("#timer").show();
	 		$("#game").empty();
	    	getQuestion(i);
    	}
	}

	//function to display end of game stats
	function endGame () {
		$("#timer").empty();
		$("#game").html("<h2>Game Over! Next stop the Musicians Hall of Fame.</h2>")
		$("#game").append("<p>Correct answers: " + correct + "</p>");
		$("#game").append("<p>Incorrect answers: " + incorrect + "</p>");
		$("#game").append("<p>A bad guess is better than no guess. Unanswered: " + unanswered + "</p>");
	}	

	$("#game").on("click", "p", function() {
		var correctanswer = trivia[i].answer;
		var userguess = ($(this).text());
		stop();

		if (correctanswer === userguess) {
			correct++;
			$("#game").html("<p>You're Correct. The correct answer is " + trivia[i].answer + ".</p>");
			$("#timer").hide();
			setTimeout(empty, 4000);
		}

		else {
			incorrect++;
			$("#game").html("<p>Wrong! The correct answer is " + trivia[i].answer + ".</p>");
			$("#timer").hide();		
			setTimeout(empty, 4000);

		}

	});

});//document ready
