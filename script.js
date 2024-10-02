import { Questions } from "./question.js";

console.log(Questions);
console.log(Questions[0].Question);

let index = 0;
let number = 0;
let i = 0;
let result = 0;
let question = document.getElementById("Question");
let Time = document.getElementById("time");
let solveQuestion = document.getElementById("solve");
let answerbtn = document.getElementById("answerButton");
let btn = document.getElementsByClassName("btn");
let nextbutton = document.getElementById("nxt");
let StartButton = document.getElementById("start");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
//Start quiz
StartButton.addEventListener("click", showQuestion);
b1.addEventListener("click", check);
b2.addEventListener("click", check);
b3.addEventListener("click", check);
b4.addEventListener("click", check);
function check(e) {
  if (i < 1) {
    let l = e.target.value;
    if (l === "true") {
      e.target.style.backgroundColor = "#12e31275";

      result += 1;
    } else {
      e.target.style.backgroundColor = "rgb(227 35 18 / 55%)";
    }
    i = +1;
  } else {
    nextQuestion();
  }
}
//FNCTION FOR SHOWING QUESTION
let Quizbutton = document.getElementById("quiz");
let ScoreButton = document.getElementById("score");
function showQuestion() {
  solveQuestion.innerHTML = index;
  Quizbutton.style.display = "flex";
  ScoreButton.style.display = "none";
  nextbutton.style.display = "block";
  StartButton.style.display = "none";
  if (index > 9) {
    SCORE();
    result = 0;
    index = 0;
    question.innerHTML = Questions[index].Question;
    answerbtn = Questions[index].Answer.forEach((item) => {
      /* answerbtn.innerHTML=item.text */
      btn[number].innerHTML = item.text;
      number += 1;
    });
  } else {
    nextbutton.innerHTML = "Next";
    question.innerHTML = Questions[index].Question;
    answerbtn = Questions[index].Answer.forEach((item) => {
      btn[number].innerHTML = item.text;
      btn[number].value = item.correct;
      number += 1;
    });
  }
  startCountdown(30);
}
function startCountdown(seconds) {
    let timeRemaining = seconds;
    Time.innerHTML = timeRemaining; // Display the initial time

    const countdown = setInterval(() => {
        timeRemaining--;
        Time.innerHTML = timeRemaining; // Update the UI

        if (timeRemaining <= 0) {
            clearInterval(countdown); // Stop the countdown
            // Enable answer buttons after countdown
            Array.from(btn).forEach(button => {
                button.disabled = false;
            });
            nextQuestion(); // Move to the next question automatically after time runs out
        }
    }, 1000); // Update every second
}

nextbutton.addEventListener("click", nextQuestion);
function nextQuestion() {
  setTimeout(() => {
    // Enable the answer buttons after 1 second
    Array.from(btn).forEach((button) => {
      button.disabled = false;
    });
  }, 1000);
  // Time.innerHTML=Date.now()
  Restart();
  index += 1;
  i = 0;
  number = 0;
  showQuestion();
}
function Restart() {
  btn.b1.style.backgroundColor = "white";
  btn.b2.style.backgroundColor = "white";
  btn.b3.style.backgroundColor = "white";
  btn.b4.style.backgroundColor = "white";
}
function SCORE() {
  ScoreButton.style.display = "flex";
  nextbutton.style.display = "none";
  StartButton.style.display = "block";
  ScoreButton.innerHTML = `Score = ${result}`;
  Quizbutton.style.display = "none";
}
