


  // 1. click the start button to start the game. So create an  event listener 


// 2. this questions will be presented once the user clicks on the start.
// created a variable called questions to store an array of all the multiple choice questions, its choices and corect answers. 

var questions = [
  {
    ques:"how many planets in our solar system?"
    choices:["1","8","9","5"]
    ans: "8"
  },
  {
    ques:"which planet is not in our solar system? "
    choices:["Mars","Neptune","Pluto","Earth"]
    ans: "pluto"
  },
  {
    ques:"Gravity of moon ? "
    choices:["162 m/s2","0","1.62 m/s2","16.2"]
    ans: "1.62 m/s2"
  },
  {
    ques : "Which planet in our solar system have the most amount of moons"
    choices : ["Mars","Neptune","Saturn","Jupiter"]
    ans: "Jupiter"
  }]



 
//  user get presented with a new questions after answering each question. so may be a loop for next question to be prompted. 
// once either user answer 1 q correctly or incorrectly (-5 sec) or time per question runs out, call for the next question. 


  // once all questions are answered or the timer reaches 0 - game over

  // WHEN the game is over, user gets his score displayed and gets prompted to add his initials. 

  // add click event . once user submit his initials>>

  // screen displays the highest score from its local store. 
  // if new highscore is more than highest stored score, than its displayed or else, old highest score gets displayed.


// var highestScore = "#highestScore"