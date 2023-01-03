
var startBttn = document.getElementById('#Start')
var gettingStarted = document.querySelector ('.startingHere')
var bringOnTheQuestions = document.querySelector ('#hidden')
var fetchButton = document.getElementById("dropDownMenu");
var questionArray = [
    {
        title: 'Have a specific Meal Type in Mind?',
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
var userChoseYes = document.getElementById('btn1')

//Removes get started button
function startHere() {
    if (startBttn == startBttn){
        gettingStarted.classList.toggle('hidden');
        console.log('You Guessed it!');
        bringOnTheQuestions.classList.toggle('hidden');
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
    //possibly create if statement here to state that if user chose yes to the questions then bring up dropdown menu
}

function toggleCriteriaOptions () {
    var Menu = document.getElementById('dropDownMenu')
    Menu.classList.toggle('hidden');
    bringOnTheQuestions.classList.toggle('hidden');

}
//need to create event listeners for yes to toggle drop down menu
document.querySelector('#btn1').addEventListener('click', toggleCriteriaOptions);
document.querySelector('#btn2').addEventListener('click', setNextQuestion);

function getUserCriteria() {
    var ans 
    var userChoseFoodtype 
    var userChoseGenre  

}

function generateResults() {

}

function gatherQuestions() {
    
}
// --- below is movie/show api function ----

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
.then(function (response){
    return response.json();
})
.then (function(data) {
    console.log(data);
    for(var i=0; i < data.results.locations; i++) {
        var movieOrShow = document.createElement('p');
            movieOrShow.textContent = data.results.locations[i] 
            append(movieOrShow);

    }
});
}



// --- recipe api function below ---// 

function getRecipes(){
var  recipeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'da507b3d2amsh4153460d232f196p18925bjsn195d14c68c13',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
 };
var requestUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=tacos&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&ignorePantry=true&sort=calories&sortDirection=asc&ranking=2'
fetch( requestUrl, recipeOptions)
    .then(function (response){
        return response.json(); 
    })
    .then(function (data) {
        console.log(data);
        for ( var i = 0; i < data.results.results; i++ ) {
            var ChosenRecipe =  document.createElement ("p");
            ChosenRecipe.textContent = data.results[i]
            append(ChosenRecipe)
        }
    })

};
    fetchButton.addEventListener('click',findSomethingToWatch, getRecipes);
    