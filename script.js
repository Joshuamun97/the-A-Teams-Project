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
    bringOnTheQuestions.classList.toggle('collapse')
}



