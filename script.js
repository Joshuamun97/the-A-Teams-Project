
var startBttn = document.getElementById('#Start')
var gettingStarted = document.querySelector ('.startingHere')
var bringOnTheQuestions = document.querySelector ('#hidden')
var questionArray = [
    {
        title: 'Any Food Allergies?',
        answers: ['Yes', 'No']
    },
    {
        title: 'Have A Specific Movie Genre In Mind?',
        answers: ['Yes', 'No']
    }
]
var arrindex = 0
var titleDiv = document.querySelector('.question');
document.getElementById('Start').addEventListener('click', startHere);


function startHere() {
    if (startBttn == startBttn){
        gettingStarted.classList.toggle('hidden');
        console.log('You Guessed it!');
        bringOnTheQuestions.classList.toggle('collapse');
    }
        console.log("test")
        openQuestions();
}

function openQuestions() {
    if (questionArray[arrindex] !== undefined) {
        console.log('yurp')
        titleDiv.textContent = questionArray[arrindex].title;
        var ans = document.querySelectorAll('.btn');
        ans.forEach(function (element, index) {
            element.textContent = question[arrindex].answers[index]
        })
    }
}


function setNextQuestion() {
    arrindex++;
    titleDiv.textContent = questionArray[arrindex].title;
}
console.log(questionArray[arrindex])

document.querySelector('#btn1').addEventListener('click', setNextQuestion);
document.querySelector('#btn2').addEventListener('click', setNextQuestion);



function getUserCriteria() {

}

function generateResults() {

}

function gatherQuestions() {
    
}