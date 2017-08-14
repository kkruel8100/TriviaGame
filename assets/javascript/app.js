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

var time = 4; //variable for countdown per question.  if change time changes, update here and in reset function
var interval; //variable for countdown by 1 second increments
var unanswered = 0; //variable for unanswered questions
var currentQuestion = false;
var correct = 0;
var incorrect = 0;
var i=0;


$("#start").on("click", start);
$("#restart").on("click", reset);

	function start () {
		getQuestion(i);
		countdown(time);
	}

	function reset () {
		countdown(4);
	}

	//function to countdown by 1 second increments
	function countdown (setTimer) {
		time=setTimer;
		interval = setInterval(decrease, 1000);
	}

	//function to decrease the timer and update the display; if zero is reached, countdown stops & unanswered questions increase by 1
	function decrease (setTimer) {
		time--;
		$("#timer").text("Time Remaining: " + time);

		if (time === 0 && i<trivia.length) {
			stop();
			unanswered++;
			console.log(unanswered);
			$("#game").text("The correct answer is " + trivia[i].answer + ".");
	//		i++;
	//		currentQuestion=false;
			empty();
	//		console.log("what is i" + i);
	//		console.log(trivia.length);
	//		console.log(time);
			
			
		}
	
	

	}

	//function to stop the countdown 
	function stop () {
		clearInterval(interval);
	}




	function getQuestion (i) {
		if (currentQuestion===false) {
		countdown(4);
		$("#game").append("What was " + trivia[i].question + " original group name?");
			
		console.log(trivia[i].question);
		console.log(trivia[i].choices.length);
			for (a=0; a<trivia[i].choices.length; a++) {
				$("#game").append("<p>" + trivia[i].choices[a] + "</p>" );

			}
		currentQuestion===true;	
		}		
	}//get question



	function empty () {
		if (i<trivia.length) {
		console.log("what is i in empty " + i);
		console.log(currentQuestion);
//		$("#timer").hide();
		i++;
		$("#game").empty();
 		time=4;
		console.log(time);
		getQuestion(i);
//		countdown(time);
		}
		else {
				stop();
				console.log("Game over");
			}

		
	}

});//document ready
