// declare questions variable.
var questions = [
    {
        q: "String values must be enclosed within _________ when being asigned to variables.", 
        c: ["quotes", "curly brackets", "parenthesis", "commas"], 
        a: "quotes"
    },
    {
        q: "The condition in an if/else statement is enclosed within _______.",
        c: ["quotes", "curly brackets", "square brackets", "parenthesis"],
        a: "parenthesis"
    },
    {
        q: "A very useful tool for use during development and debugging for printing content to the debugger is _______.",
        c: ["javascrpt", "terminal/bash", "for loops","console.log"],
        a: "console.log"
    },
    {
        q: "Commonly used data types do not include _________. ",
        c: ["strings", "booleans", "alerts", "number"],
        a: "alerts"
    },
    {
        q: "Arrays in javascript can be used to store ________.",
        c: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        a: "all of the above"
    }
];
var score = 0 
var currentQuestion = 0
var timeLeft = 60;
// function to start the quiz 
function startQuiz(){
    // points towords the html section "starter" 
    currentQuestion++;
    var questionBody = questions[currentQuestion].q + "<br>";

for (var i = 0; i < questions[currentQuestion].c.length; i++){
    var playerChoice = "<button onclick = [A]>[C]</button>";
    playerChoice = playerChoice.replace("[C]", questions[currentQuestion].c[i]);
    
    if (questions[currentQuestion].c[i]===questions[currentQuestion.a]) {
        playerChoice = playerChoice.replace("[A]", "correct()")
    }
    else {playerChoice = playerChoice.replace("[A]", "incorrect()")}
    questionBody += playerChoice
    }
    document.getElementById("starter").innerHTML = questionBody;

};
function correct (){
    score += 1;
    startQuiz();
}
function incorrect (){
    timeLeft -=10;
    startQuiz();
}