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
        gettingStarted.classList.toggle('hidden');
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
// spoonacular api next step is to be able to interact with the data shown in the console.
const recipeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'da507b3d2amsh4153460d232f196p18925bjsn195d14c68c13',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information', recipeOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    //  utelly api. 
    const movieOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'da507b3d2amsh4153460d232f196p18925bjsn195d14c68c13',
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=borat&country=us', movieOptions)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));