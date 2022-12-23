//var showQuestions = document.getElementById()
var startBttn = document.getElementById('#Start')
var gettingStarted = document.querySelector ('.startingHere')
var bringOnTheQuestions = document.querySelector ('#hidden')
var questionArray = [
    {
        title: 'In a Rush?',
        answers: ['Yes', 'No']
    },
    {
        title: 'Looking For Something Fancy?',
        answers: ['Yes', 'No']
    }
]
var arrindex = 0
var titleDiv = document.getElementById('question');
document.getElementById('Start').addEventListener('click', startHere);


function startHere() {
    if (startBttn == startBttn){
        gettingStarted.classList.toggle('collapse');
        console.log('You Guessed it!');
    }
        console.log("test")
        openQuestions();
}

function openQuestions() {
    bringOnTheQuestions.classList.toggle('collapse');
    if (questionArray[arrindex] !== undefined) {
        console.log('yurp')
        var titleDiv = document.querySelector('.question');
        titleDiv.textContent = questionArray[arrindex].title;
        var ans = document.querySelectorAll('.btn');
        ans.forEach(function (element, index) {
            element.textContent = question[arrindex].answers[index]
        })
    }
}
console.log(questionArray[arrindex])




