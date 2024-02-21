const questions = [
    {
        Question:"Which is the Largest Animal in the World ?",
        answers:[
            {text:"Shark" , correct:false},
            {text:"BlueWhale" , correct:true},
            {text:"Elephant" , correct:false},
            {text:"Giraffe", correct:false}
        ]
    },

    {
        Question:"Which is the Smallest Country in the World ?",
        answers:[
            {text:"Vatican City" , correct:true},
            {text:"Bhutan" , correct:false},
            {text:"Nepal" , correct:false},
            {text:"Srilanka", correct:false}
        ]
    },

    {
        Question:"Which is the Smallest Continent in the World ?",
        answers:[
            {text:"Asia" , correct:false},
            {text:"Australia" , correct:true},
            {text:"Arctic" , correct:false},
            {text:"Antartica", correct:false}
        ]
    },
    {
        Question:"Which is the Largest Desert in the World ?",
        answers:[
            {text:"Kalahari" , correct:false},
            {text:"Gobi" , correct:false},
            {text:"Arctic" , correct:false},
            {text:"Antartica", correct:true}
        ]
    }

];


let questionElement = document.getElementById("Question");
let answerOptions = document.getElementById("options");
let nextBtn = document.getElementById("boot1");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + ". " + currentQuestion.Question;

  currentQuestion.answers.forEach((answer) =>{
    let button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("option");
     answerOptions.appendChild(button);
     if(answer.correct){
        button.dataset.correct = answer.correct;
     }
     button.addEventListener("click", selectAnswer);
  })

}


function resetState()
{
    nextBtn.style.display = "none";
    while(answerOptions.firstChild){
        answerOptions.removeChild(answerOptions.firstChild);
    }
}


function selectAnswer(event){
let selectedBtn = event.target;
let correctBtn = selectedBtn.dataset.correct === "true";
if(correctBtn){
    selectedBtn.classList.add("correct");
    score++;
}
else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerOptions.children).forEach(button =>{
     
    if(button.dataset.correct === "true")
    {
        button.classList.add("correct");
    }
      button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


nextBtn.addEventListener("click",()=>{
     if(currentQuestionIndex < questions.length)
     {
        handleNextButton();
     }
     else{
        startQuiz();
     }
});
startQuiz();