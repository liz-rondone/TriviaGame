/******************* VARIABLES *******************/
var count=60;
var counter;
var right;
var wrong;
var questions = [
{
	question: "What does TBT stand for?",
	answer: [" Nothing, it’s not an acronym", "Throwback Thursday", "Take Back Tuesday", "Ten Bad Turkeys"],
	correctAnswer: "Throw Back Thursday"
},
{
	question: "Someone who is “basic” is defined by enjoying which of the following?",
	answer: ["Pumpkin lattes", " UGG boots", "Brunch", "All of the above"],
	correctAnswer: "All of the above"        
},
{
	question: "Someone who naturally looks angry or annoyed without meaning to most likely has what?",
	answer: ["A wedgie", "Constipation", "Resting b****face", "A bad personality"],
	correctAnswer: "Resting b****face"        
},
{
	question: "What decade do Millennials like to reminisce about?",
	answer: ["00’s", "90’s", "80’s", "70’s"],
	correctAnswer: "90’s"        
},
{
	question: "Cutting off all communication with someone without any notice is known as what?",
	answer: ["Ghosting", "Zombied", "Werewolfing", "Vampired"],
	correctAnswer: "Ghosting"        
},];


/******************* FUNCTIONS *******************/
$('#start').click(function() {
	startGame();
	// timer
	counter=setInterval(timer, 1000); //1000 will  run it every 1 second
	
	$('.js-check').on('click', function(){
		console.log($(this).attr('data-name')); //alert radio button clicked
		questions[0].correctAnswer;
		console.log(questions[this.name].correctAnswer); //alert right answer
		var correct = (questions[this.name].correctAnswer); //alert right answer
		if (answerChosen === correct){
			console.log("good");
			right++;
		}
		else{
			console.log("bad");
			wrong++;
		}
	})
	$(this).addClass('hide');
});


$('#submitButton').click(function() {
	results();
	$(this).addClass('hide');

});


function results() {
	$('.submitter').html(right + ' out of 5 correct.');
	$('.submitter').html( wrong + ' out of 5 wrong.');
}


function startGame() {
	var j = 0;
	var questionString = '';
	for(var i=0; i < questions.length; i++) {
		j++;
		var answerString = '';
        //classes for question div
		questionString = '<div class="text-success"><h4>' + j + '. ' + questions[i].question + '</h4></div>';
		//classes for answer div
		for(var a=0; a < questions[i].answer.length; a++) {
			answerString += '<div class="answer js-check"><input type="radio" name="'+ i +'" data-name="'+ questions[i].answer[a] +'">' + questions[i].answer[a] + '</input></div>';
		}

		var questionDiv = $('<div></div>')
		questionDiv.addClass('question')
		questionDiv.attr('questionNum', i.toString())	//adding value and converting string to number
		questionDiv.append(questionString)
		questionDiv.append(answerString)
		$('#questions').append(questionDiv)
		//$('#questions').append('<div class="question">' + questionString + answerString + '</div>');
	}
	// create submit button
	var submitter = '';
    submitter = $('<div class="submitter"><input class="quizSubmit btn btn-info" id="submitButton" onClick="submitQuiz()" type="submit" value="Submit" /></div>')
	$('#submitButton').append(submitter)

}


function timer() {
	count=count-1;
	if (count <= 0) {
		console.log("Time's Up!");
		clearInterval(counter);
		results();
		updateTimer();
		return;
	}
	updateTimer();
}


function updateTimer() {
	//document.getElementById("timer").innerHTML=count + " seconds";
	$('#timer').html(count + ' seconds');
}


/*function checkAnswer() {
	console.log('submitted');

	var correct;

	for (var i = 0; i < questions.length; i++) {
		if (radio[i].checked === questions.correctAnswer) {
			correct++;
			console.log(correct);
		}
	}
	$('#results').click('You answered ' correct ' out of 5 correctly.');
}
*/
/*
function checkAnswer() {
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

if (calcScore === questionCounter) {
	showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
};
document.getElementById('userScore').innerHTML = showScore;

	// show score as "score/possible score"
	var correctScore = "Answered Correctly: " + scoreGuessedRight; 		//  +"/" + questionCounter
	
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
*/