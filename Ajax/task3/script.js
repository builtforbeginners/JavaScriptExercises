var categories = document.getElementById("categories");
var randomJoke = document.getElementById("randomJoke");
var categoryJoke = document.getElementById("categoryJoke");
var searchJoke = document.getElementById("searchJoke");

fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(response => randomJoke.innerText = response.value);

fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(response => generateCategories(response));

categories.addEventListener("change", (event) => getJokeByCategory(event.target.value));

function generateCategories(categoriesData) {
    categoriesData.forEach(category => {
        let option = document.createElement("option");
        option.innerText = category;
        categories.append(option);
    });
}

function getJokeByCategory(category) {
    let options = {
        method: 'GET',
        url: `https://api.chucknorris.io/jokes/random?category=${category}`
    };
    axios.request(options)
        .then(response => categoryJoke.innerText = response.data.value);
}

function getJokeByText(event) {
    let query = event.target.value;
    if (query.length < 3 || query.length > 120)
        return;
    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
        .then(response => response.json())
        .then(response => generateJokesByText(response.result));
}

function generateJokesByText(jokes) {
    searchJoke.innerHTML = '';
    if (jokes.length === 0) {
        searchJoke.innerText = 'No jokes for this search';
        return;
    }
    jokes.forEach(joke => {
        let li = document.createElement("li");
        li.innerText = joke.value;
        searchJoke.append(li);
    })
}