
// variable  >> 
var startBtn = document.querySelector("#startBtn");
var question = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var timeEl = document.querySelector(".time");
var nextchoice = document.getElementById("next-btn");
var result = document.querySelector(".result");
var score = document.querySelector(".score") ;
var highest ;

startBtn.addEventListener("click", showQuestions)


// timer code starts
var secondsLeft = 50;
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
// timer code ends

// array for the question created>>
var quesArray = [
  {
    question:"How many planets are in our solar system?",
    choices:["1","8","9","5"],
    correct: "8",
  },
  {
    question:"Name of the planet which is not part of the solar system? ",
    choices:["Mars","Neptune","Pluto","Earth"],
    correct: "Pluto",
  },
  {
    question:" how many drawf planets are there in the universe ? ",
    choices:["4","1","10","5"],
    correct: "5",
  },
  {
    question:"Gravity of moon? ",
    choices:["162 m/s2","0","1.62 m/s2","16.2 m/s2"],
    correct: "1.62 m/s2",
  },
  {
    question: "Name of the planet with maximum numbers of moon?",
    choices : ["Mars","Neptune","Saturn","Jupiter"],
    correct: "Jupiter",
  }];
  // array for the question ENDED>>

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

function nextQuestions(){
  console.log ("Answer clicked: " + this.value)
  console.log ("Correct answer " + quesArray[currentIndex].correct)
if (this.value === quesArray[currentIndex].correct){
  score += 5;
  innerHeight += score;
  result.textContent = "Correct";
}
else {
  secondsLeft -= 5;
  result.textContent = "Wrong Answer";
};

  currentIndex++;
  console.log(currentIndex)

  if(quesArray.length === currentIndex ){
    //Call the function to end the quiz
    secondsLeft -= secondsLeft;
    sendMessage();
  }
  else{
    showQuestions();
  }
}

var highestScore = "" ;
// $("highestScore").val() = score

  // once all questions are answered or the timer reaches 0 - game over
  // WHEN the game is over, user gets his score displayed and gets prompted to add his initials. 
  // add click event . once user submit his initials>>
  // screen displays the highest score from its local store. 
  // if new highscore is more than highest stored score, than its displayed or else, old highest score gets displayed.


