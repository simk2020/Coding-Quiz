
// variable  >> 
var startBtn = document.querySelector("#startBtn");
var question = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var timeEl = document.querySelector(".time");
var nextchoice = document.getElementById("next-btn");
var score = document.querySelector(".score") ;
var result= document.querySelector ("#result");
var highestScore = document.querySelector(".highestScore");
var name = document.querySelector (".name");
var scorestore = 0;
var highscore = localStorage.getItem("highscore");
var nameDisplay = localStorage.getItem("askname");
name.textContent = "Name : " + nameDisplay;
highestScore.textContent = "Saved Highest Score : " + highscore;

startBtn.addEventListener("click", function (event) {
  startBtn.style.display = 'none'
  showQuestions();
  setTime();
});

// timer code starts
var secondsLeft = 25;
  function setTime() {
    console.log ("start quiz")
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft + " seconds Left.";
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  };
  function sendMessage() {
    timeEl.textContent = " ";
    scorestore.textContent = " "
    var imgEl = document.createElement("img"); //created the image element to display the image once time ends.
    imgEl.setAttribute("src", "assets/gameover.jpg"); // image source  
    timeEl.appendChild(imgEl); //appending image.

    var askname = prompt("Please write your name?");  
    localStorage.setItem("nameDisplay", askname)
    console.log (localStorage)

    if(highscore !== null){
      if(scorestore > highscore){
        localStorage.setItem("highscore", scorestore)
      }
    }
    else{
      localStorage.setItem("highscore", scorestore)
    }
  }
// timer code ends

// array for the question created>>
var quesArray = [
  {
    question:"Question 1: How many planets are in our solar system?",
    choices:["1","8","9","5"],
    correct: "8",
  },
  {
    question:"Question 2: Name of the planet which is not part of the solar system? ",
    choices:["Mars","Neptune","Pluto","Earth"],
    correct: "Pluto",
  },
  {
    question:"Question 3: How many drawf planets are there in the universe ? ",
    choices:["4","1","10","5"],
    correct: "5",
  },
  {
    question:"Question 4:Gravity of moon? ",
    choices:["162 m/s2","0","1.62 m/s2","16.2 m/s2"],
    correct: "1.62 m/s2",
  },
  {
    question: "Question 5:Name of the planet with maximum numbers of moon?",
    choices : ["Mars","Neptune","Saturn","Jupiter"],
    correct: "Jupiter",
  }];
  // array for the question ENDED>>

  //begins the quiz
var currentIndex = 0
function showQuestions (){
question.textContent = quesArray[currentIndex].question //this is putting a question that matches the current Index into question no. 1
//clear our old choices first before loading new choices
choices.textContent = "" ;
quesArray[currentIndex].choices.forEach(function(choiceName, choiceIndex){ // this is looping thru all the choicenames using its index and displaying them on the screen
  // write a code for the loop to run more than once. 

 var choiceBtn = document.createElement("button"); // this is creating a choice button for each choice 
 choiceBtn.setAttribute("value", choiceName)
 choiceBtn.textContent = choiceName;  // this is updating the text Content of each ChoiceBtn to display its NAME.
  //choiceName.textContent ="";
  choices.appendChild(choiceBtn) //ths is display the choices with the actual content usind appendchild
//choiceBtn.addEventListener ("click", nextQuestions);
  choiceBtn.onclick = nextQuestions;
  console.log (choices.appendChild(choiceBtn))
})
};

//this function calculate and stores the score after each question
function nextQuestions(){
  console.log ("Answer clicked: " + this.value)
  console.log ("Correct answer " + quesArray[currentIndex].correct)
if (this.value === quesArray[currentIndex].correct){
  scorestore += 5;
  score.textContent = "Score: "+ scorestore ;
  result.textContent = "Correct";
}
else {
  secondsLeft -= 5;
  result.textContent = "Wrong Answer";
};
  currentIndex++;
  console.log(currentIndex)
//here are the condition which decides when quix ends
  if(quesArray.length === currentIndex || secondsLeft === 0 ){
    //Call the function to end the quiz
    secondsLeft = 0;
    sendMessage();
  }
  else{
    showQuestions();
  }
}