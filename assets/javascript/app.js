/******************* VARIABLES *******************/
var count=60;
var counter;
var right = 0;
var wrong = 0;
var questions = [
{
	question: "What does TBT stand for?",
	answer: ["Nothing, it’s not an acronym", "Throwback Thursday", "Take Back Tuesday", "Ten Bad Turkeys"],
	correctAnswer: "Throwback Thursday"
},
{
	question: 'Someone who is “basic” is defined by enjoying which of the following?',
	answer: ["Pumpkin lattes", "Lulu Lemon yoga pants", "Brunch", "All of the above"],
	correctAnswer: "All of the above"        
},
{
	question: "What decade do Millennials like to reminisce about?",
	answer: ["00’s", "90’s", "80’s", "70’s"],
	correctAnswer: "90’s"        
},
{
	question: "Someone who naturally looks angry or annoyed without meaning to most likely has what?",
	answer: ["A wedgie", "Constipation", "Resting b****face", "A bad personality"],
	correctAnswer: "Resting b****face"        
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
		//alert($(this).attr('data-name')); //alert radio button clicked
		//alert(questions[this.name].correctAnswer); //alert right answer
		var answerChosen = ($(this).attr('data-name')); //this is the actual thing you check
		var correct = (questions[this.name].correctAnswer); 
		if (answerChosen === correct){
			console.log("CORRECT");
			right++;
		}
		else{
			console.log("INCORRECT");
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
	$('#right').html(right + '/5 Correct');
	$('#wrong').html(wrong + '/5 Wrong');
	$('#resultsContainer').addClass('well');

	if (right === 5) {
		$('#results').html("For the win! You're Millennial AF.");
	}
	else if (right === 4) {
		$('#results').html("Yaaaaaaas! #blessed");
	}
	else if (right === 3) {
		$('#results').html("You're on fleek. You did well but do you really want to be labeled by a term only Kardashians use?");
	}
	else if (right === 2) {
		$('#results').html("SMH \u2014 you could have tried harder.");
	}
	else if (right === 1) {
		$('#results').html("The struggle is real.");
	}
	else if (right === 0) {
		$('#results').html("You're so fetch. Stop trying to make fetch happen! It's not going to happen!");
	}
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
			answerString += '<div class="answer"><input class="js-check" type="radio" name="'+ i +'" data-name="'+ questions[i].answer[a] +'">' + questions[i].answer[a] + '</input></div>';
		}

		var questionDiv = $('<div></div>')
		questionDiv.addClass('question well')
		questionDiv.attr('questionNum', i.toString())	//adding value and converting string to number
		questionDiv.append(questionString)
		questionDiv.append(answerString)
		$('#questions').append(questionDiv)
		//$('#questions').append('<div class="question">' + questionString + answerString + '</div>');
	}
	// create submit button
	var submitter = '';
    submitter = $('<div class="submitter"><input class="quizSubmit btn btn-default btn-lg" id="submitButton" onClick="results()" type="submit" value="Submit" /></div>')
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