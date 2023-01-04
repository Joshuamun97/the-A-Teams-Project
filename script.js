
var startBttn = document.getElementById('#Start')
var gettingStarted = document.querySelector('.startingHere')
var bringOnTheQuestions = document.querySelector('#hidden')

var titleDiv = document.querySelector('.question');
document.getElementById('Start').addEventListener('click', startHere);
var userChoseYes = document.getElementById('btn1')

let food;
let movie;
let arrindex = 0

//Removes get started button
function startHere() {
    if (startBttn == startBttn) {
        gettingStarted.classList.toggle('hidden');
        console.log('You Guessed it!');
        bringOnTheQuestions.classList.toggle('hidden');
    }
    openQuestions();
}
//Cycles through array of questions created in variable above
function openQuestions() {
    titleDiv.textContent = 'Please Enter a meal';
}

async function getData() {
    if (arrindex === 0) {
        arrindex = 1;
        food = document.getElementById('answer').value;
        titleDiv.textContent = 'Please enter a movie or show';
        document.getElementById('answer').value = ""
        return;
    }

    movie = document.getElementById('answer').value;
    titleDiv.textContent = 'Please Enter a meal'
    document.getElementById('answer').value = ""

    // Hide the questions
    bringOnTheQuestions.classList.toggle('hidden');

    let recipes = await getRecipes();
    let movies = await findSomethingToWatch();

    document.getElementById('recipeTitle').textContent = recipes.results[0].title
    document.getElementById('recipeImage').setAttribute("src", recipes.results[0].image)
    document.getElementById('movieImage').setAttribute("src", movies.results[0].picture)
    document.getElementById('movieURL').setAttribute("href", movies.results[0].locations[0].url)
    document.getElementById('results').classList.remove('hidden')
    arrindex = 0;
}


//document.querySelector('#btn1').addEventListener('click', toggleCriteriaOptions);
document.querySelector('#mealBtn').addEventListener('click', getData);
document.querySelector('#resetFormBtn').addEventListener('click', resetForm);

function getUserCriteria() {
    var ans
    var userChoseFoodtype
    var userChoseGenre

}

function generateResults() {

}

function gatherQuestions() {

}

function resetForm() {
    document.getElementById('results').classList.add('hidden')
    bringOnTheQuestions.classList.toggle('hidden');
}
// movie/show api 

async function findSomethingToWatch() {
    var Options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'da507b3d2amsh4153460d232f196p18925bjsn195d14c68c13',
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        }
    };
    var requestUrl = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${movie}&country=us`

    let response = await fetch(requestUrl, Options);
    let jsonResponse = await response.json();

    return jsonResponse;
};
//^^ function for movie api^^//


async function getRecipes() {
    const Options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'da507b3d2amsh4153460d232f196p18925bjsn195d14c68c13',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };


    var requestUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${food}&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&ignorePantry=true&sort=calories&sortDirection=asc&ranking=2`

    let response = await fetch(requestUrl, Options);
    let jsonResponse = await response.json();

    return jsonResponse;
};



