
// variable decleration >> 
var startBtn = document.querySelector("#startBtn");
var question = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var score = document.querySelector("score");
var timeEl = document.querySelector(".time");
var nextchoice = document.getElementById("next-btn");



startBtn.addEventListener("click", showQuestions)


// timer code starts
var secondsLeft = 40;
  function setTime() {
    console.log ("start quiz")
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds Left.";
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  };
  function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img"); //created the image element to display the image once time ends.
    imgEl.setAttribute("src", "assets/gameover.jpg"); // image source  
    timeEl.appendChild(imgEl); //appending image.
  }
  setTime();

  // function next (){
  //   console.log ( showQuestion);
  //   showQuestion ++;
  // }

// timer code ends
 
// 2. this questions will be presented once the user clicks on the start.
// created a variable called questions to store an array of all the multiple choice questions, its choices and corect answers. 

  //{} key-value pairs
//quesArray[0].question will return "how many planets in our solar system?"
//[0] is the index of the first question
//To move up to the next question, we need to increase the array index

// array for the question created>>
var quesArray = [
  {
    question:"How many planets are in our solar system?",
    choices:["1","8","9","5"],
    correct: "8",
  },
  {
    question:"which planet is not part of our solar system? ",
    choices:["Mars","Neptune","Pluto","Earth"],
    correct: "Pluto",
  },
  {
    question:"is there any Gravity of moon ? ",
    choices:["162 m/s2","0","1.62 m/s2","16.2"],
    correct: "1.62 m/s2",
  },
  {
    question: "Which planet have the maximum numbers of moon, in our solar system ",
    choices : ["Mars","Neptune","Saturn","Jupiter"],
    correct: "Jupiter",
  }];
  // array for the question ENDED>>

  var currentIndex = 0

function showQuestions (){
question.textContent = quesArray[currentIndex].question //this is putting a question that matches the current Index into question no. 1
quesArray[currentIndex].choices.forEach(function(choiceName, choiceIndex){ // this is looping thru all the choicenames using its index and displaying them on the screen
  // write a code for the loop to run more than once. 
 var choiceBtn = document.createElement("button"); // this is creating a choice button for each choice 
  choiceBtn.textContent = choiceName;  // this is updating the text Content of each ChoiceBtn to display its NAME.
  choiceName.textContent ="";
  choices.appendChild(choiceBtn) //ths is display the choices with the actual content usind appendchild
  choiceBtn.addEventListener ("click", chooseAnswer);
  console.log (choices.appendChild(choiceBtn))
})
};

function chooseAnswer (e){
  console.log (e.target.textContent);
  nextQuestions();
}

function nextQuestions(){
  currentIndex++;
  showQuestions();
}



  // once user clicks on a choice..store that value...and check if that value equals the value of correct answer of that question.
  // choiceBtn.addEventListener("click", function(event) {
  //   event.preventDefault();
    // if(choiceBtn.matches === quesArray.correct) {
    //   var correctAnswer = document.createElement("div");
    //   correctAnswer.textContent = correct;
    //   score +=5
    //   score.append(correct);
    // }
    // currentIndex++
  // });
  // quesArray.correct= correctAnswer 
  // function correctAnswer (){
  //   console.log ("works till now")
    
  // }

  // if (choiceBtn.textContent === quesArray.choiceIndex()){
  //   
  // }
  // else {
  //   score +=0
  //   timeEl -= 5
  // }

//  if (choiceBtn === correct) // if choiceBtn clicked is equal to correct 
// textContent : correct  // display string Correct at the bottom of the choices
//   score +=5 
  // else {
  //   // textContent : wrong 
  //   score += 0;
  //   time -= 10 ;
  // } 
  
// next question2
// 

//  user get presented with a new questions after answering each question. so may be a loop for next question to be prompted. 
// once either user answer 1 q correctly or incorrectly (-5 sec) or time per question runs out, call for the next question. 

  // once all questions are answered or the timer reaches 0 - game over

  // WHEN the game is over, user gets his score displayed and gets prompted to add his initials. 

  // add click event . once user submit his initials>>

  // screen displays the highest score from its local store. 
  // if new highscore is more than highest stored score, than its displayed or else, old highest score gets displayed.


// var highestScore = "#highestScore"
//submitButton.addEventListener('click', showResults);

// Event.preventDefault();
// choices.addEventListener("click", correctAnswer)
// startBtn.addEventListener("click", setTime)
//startBtn.onclick = showQuestions;
