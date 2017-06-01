var count=60;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


// Timer
function timer()
{
  count=count-1;
  if (count <= 0)
  {
	console.log("Time's Up!");
	clearInterval(counter);
	updateTimer();
	submitQuiz();
	return;
	}

	updateTimer();
}


function updateTimer() {
	document.getElementById("timer").innerHTML=count + " seconds";
}



function submitQuiz() {
	console.log('submitted');
	
	// get each answer score
	function answerScore (qName) {
		var radiosNo = document.getElementsByName(qName);

		for (var i = 0, length = radiosNo.length; i < length; i++) {
   			if (radiosNo[i].checked) {
				// do something with radiosNo
				var answerValue = Number(radiosNo[i].value);
			}
		}
		// change NaNs to zero
		if (isNaN(answerValue)) {
			answerValue = 0;
		}
		return answerValue;
	}

	// calc score with answerScore function
	var scoreGuessedRight = (answerScore('questionOne') + answerScore('questionTwo') + answerScore('questionThree') + answerScore('questionFour') + answerScore('questionFive'));
	console.log("scoreGuessedRight: " + scoreGuessedRight);

	// calc score with answerScore function
	var scoreGuessedWrong = $('.questions').length - scoreGuessedRight;
	console.log("scoreGuessedWrong: " + scoreGuessedWrong);



	// function to return correct answer string
	function correctAnswer (correctStringNo, qNumber) {
		console.log("qNumber: " + qNumber);  // logs 1,2,3,4,5 after called below
		return ("The correct answer for question " + qNumber + ": &nbsp;<strong>" +
		(document.getElementById(correctStringNo).innerHTML) + "</strong>");
	}

	// print correct answers only if wrong (calls correctAnswer function)
	if (answerScore('questionOne') === 0) {
		document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
		console.log(correctAnswer('correctString1', 1));
	}
	if (answerScore('questionTwo') === 0) {
		document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
	}
	if (answerScore('questionThree') === 0) {
		document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
	}
	if (answerScore('questionFour') === 0) {
		document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
	}
	if (answerScore('questionFive') === 0) {
		document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
	}

	// calculate "possible score" integer
	var questionCountArray = document.getElementsByClassName('question');

	var questionCounter = 0;
	for (var i = 0, length = questionCountArray.length; i < length; i++) {
		questionCounter++;
	}

	// show score as "score/possible score"
	var correctScore = "Answered Correctly: " + scoreGuessedRight; 		//  +"/" + questionCounter
	// if 4/4, "perfect score!"
	/*if (scoreGuessedRight === questionCounter) {
		correctScore = correctScore + "&nbsp; <strong>Perfect Score!</strong>"
	};*/
	document.getElementById('userCorrectScore').innerHTML = correctScore;

	var incorrectScore = "Answered Incorrectly: " + scoreGuessedWrong; 		//  +"/" + questionCounter
	document.getElementById('userIncorrectScore').innerHTML = incorrectScore;

	//var incorrectScore = "Answered Inorrectly: " + scoreGuessedWrong; 		//  +"/" + questionCounter
	//document.getElementById('userIncorrectScore').innerHTML = incorrectScore;
}



$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});