//array of quiz questions, multiple choices and correct answers
var questions =[
    {  
        question: "Inside which HTML element do we put the JavaScript?",
        Option: ["<script></script>", "<scripting></scripting>", "<javascript></javascript>" ]     
        answer: "<script></script>"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        Option: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct"]
        answer: "Both the <head> section and the <body> section are correct"  
    },

    {
        question: "How to write an IF statement in JavaScript?"
        Option: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
        answer: "if (i == 5)"  
    },

    {
        question: "JavaScript is the same as Java."
        Option: ["True", "False"],
        answer: "True"
    },

    {
        question: "Is JavaScript case-sensitive?"
        Option: ["Yes", "No"]
        answer: "No"
    }
];

//setting scores and timers
var scores =0;
var currenQuestion = -1;
var timeLeft; = 0
var timers;

//Timer Set Up
var timeInterval = setInterval(function) {
var timeLeft =75;
countDown = "Time Left:" + timeLeft;
    if (timeLeft <= 0 ) {
        TextTrack = "Time's Up!";
        alert("The Quiz is Over!")
        clearInterval(timers); 
        endQuiz();
    } 
    else if (currenQuestion === 5) {
        clearInterval(timers);
    timeLeft;
}, 1000;
}
