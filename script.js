
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

//Removes get started button
function startHere() {
    if (startBttn == startBttn){
        gettingStarted.classList.toggle('hidden');
        console.log('You Guessed it!');
        bringOnTheQuestions.classList.toggle('collapse');
    }
        console.log("test")
        openQuestions();
}
//Cycles through array of questions created in variable above
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


document.querySelector('#btn1').addEventListener('click', setNextQuestion);
document.querySelector('#btn2').addEventListener('click', setNextQuestion);

function getUserCriteria() {
    var ans 
    var userChoseAllergies 
    var userChoseGenre  

}

function generateResults() {

}

function gatherQuestions() {
    
}
// movie/show api 

function findSomethingToWatch(){
    var Options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'da507b3d2amsh4153460d232f196p18925bjsn195d14c68c13',
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        }
    };
var requestUrl = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=Tropic%20Thunder&country=us'
fetch(requestUrl, Options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err))
for(var i = 0; i < data.results.length; i++){
    var movieOrShow = document.createElement('p');
    movieOrShow.textContent = data.results.term[i] // <<< I used .term because this its the parameter used in the api url 
    append(movieOrShow);
} 
};
//^^ function for movie api^^//


function getRecipes(){
const Options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'da507b3d2amsh4153460d232f196p18925bjsn195d14c68c13',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
 };
var requestUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=tacos&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&ignorePantry=true&sort=calories&sortDirection=asc&ranking=2'
fetch( requestUrl, Options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    var ChosenRecipe = document.createElement('p');
    ChosenRecipe.textContent = data.results.query[i] // I used .query because its the parameter used in the url 
    append(ChosenRecipe);
};
    
    

