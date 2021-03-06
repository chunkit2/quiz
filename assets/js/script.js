// declare questions variable.
var questions = [
    {
        headline: "String values must be enclosed within _________ when being asigned to variables.", 
        options: ["quotes", "curly brackets", "parenthesis", "commas"], 
        answer: "quotes"
    },
    {
        headline: "The condition in an if/else statement is enclosed within _______.",
        options: ["quotes", "curly brackets", "square brackets", "parenthesis"],
        answer: "parenthesis"
    },
    {
        headline: "A very useful tool for use during development and debugging for printing content to the debugger is _______.",
        options: ["javascrpt", "terminal/bash", "for loops","console.log"],
        answer: "console.log"
    },
    {
        headline: "Commonly used data types do not include _________. ",
        options: ["strings", "booleans", "alerts", "number"],
        answer: "alerts"
    },
    {
        headline: "Arrays in javascript can be used to store ________.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    }
];
var score = 0; 
var currentQuestion = 0;
var timeLeft = 60;
var timer;

function startTimer(){
    document.getElementById("timeLeft").innerHTML=timeLeft;

    timer=setInterval(function(){
        timeLeft--;
        document.getElementById("timeLeft").innerHTML=timeLeft;
        if (timeLeft<=0){
            clearInterval(timer);
            endQuiz();
        }
    },1000);
    startQuiz();
}
// function to start the quiz 
function startQuiz(){
     
    currentQuestion++;
    if (currentQuestion>questions.length){
        endQuiz();
    }
    var questionBody = questions[currentQuestion].headline + "<br>";

for (var i = 0; i < questions[currentQuestion].options.length; i++){
    var playerChoice = "<button onclick=[ANSWER]>[C]</button>";
    playerChoice = playerChoice.replace("[C]", questions[currentQuestion].options[i]);
    
    if (questions[currentQuestion].options[i]===questions[currentQuestion].answer) {
        playerChoice = playerChoice.replace("[ANSWER]", "correct()")
    }
    else {playerChoice = playerChoice.replace("[ANSWER]", "incorrect()")
    }
    questionBody += playerChoice
    }
    document.getElementById("starter").innerHTML = questionBody;

};

function incorrect(){
    timeLeft -= 10;
    startQuiz();
}

function correct(){
    score += 1;
    startQuiz();
}


function endQuiz(){
    clearInterval(timer);
    var gameOver = "GAME OVER" + "<br>" + "you got " + score + "/5" + "<br>" + 
    `<input type="text" id="name" placeholder ="Enter Name">
    <button onclick="finalScore()">Save</button> `
    document.getElementById("starter").innerHTML = gameOver;
}
function finalScore(){
    var codeName = document.getElementById("name").value;
    var topScore = score;
    var scoreList = {name: codeName, score: topScore};
    var highScore = localStorage.getItem("highScore");
    if(highScore === null){
        highScore=[];
    }
    else{
        highScore = JSON.parse(highScore);
    }
    highScore.push(scoreList);
    var newScore = JSON.stringify(highScore);
    localStorage.setItem("highScore", newScore);

    window.location.replace("./highscore.html");
}
function returnIndex(){
    window.location.replace("./index.html");
}
function clearScore(){
    localStorage.clear();
    location.reload();
}

var scorePlacement = document.querySelector("#scorePlacement");
var highScore = localStorage.getItem("highScore");
highScore=JSON.parse(highScore);
if(highScore!==null){
    for (i=0; i<highScore.length; i++){
        var showScore = document.createElement("li");
        showScore.textContent=highScore[i].name + " / " + highScore[i].score;
        scorePlacement.appendChild(showScore);
    }
}