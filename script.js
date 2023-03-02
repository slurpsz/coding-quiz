var questions = [
  {
    title:'What is the correct way to write a variable?',
    choices: [ 'var myvariable = (name)', 'var myVariable = {variable}', 'var myvariable = "name"','var myVariable = "name"'],
    answer: 'var myVariable = "name"',
  },
  {
    title:'Which symbol represents a strict equal?',
    choices: ['==', '+', '===', '='],
    answer: '===',
  },
  {
    title: "Inside which HTML element do we put the Javascript?",
    choices: ['<js>','<script>','<java>','<javascripting>'],
    answer: '<script>',
  },
  {
    title:'What is the correct way to write a Javascript array?',
    choices:['var colors = ["red", "green","yellow"]','var colors = (1:"red",2:"green", 3:"yellow")','var colors = {"red","blue","yellow}','var colors = "red","green","yellow"'],
    answer: 'var colors = ["red","green","yellow"]',
  },
  {
    title:'Which event occurs when the user clicks on an HTML element?',
    choices: ['onpress', 'onenter','onclick','onstart'],
    answer:'onclick'
  },
];

var quizQuestionIndex = 0;
var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var timeEl = document.querySelector(".timer")
var time = questions.length * 15;
var quizTimer;
var startScreen = document.getElementById("start-page");
var choicesBtn = document.getElementById("choices-btn");

startBtn.addEventListener("click", function () {
  console.log("start event listener");
  questionsEl.classList.remove("hidden");
  // display first questions and timer
  //hide start-screen
  startScreen.style.display = 'none';



  userQuestions();
});



function userQuestions () {
  var questionTitle = document.querySelector("#question-title")

  questionTitle.textContent = questions[0].title 
  // buttons for choices
  //data-choices:${questions[]}

  var choicesEl = document.querySelector("#choices-btn");

  choicesEl.textContent = questions[0].choices

  quizTimer = setInterval(setTimer,1000);

  timeEl.textContent = time;

  for (var i = 0; i < questions[0].choices.length; i++);
}


function setTimer() {
  time--;
  timeEl.textContent = time;

  if (time == 0) {
    stopQuiz();
  }
}

function stopQuiz (){
  clearInterval(quizTimer);

}

