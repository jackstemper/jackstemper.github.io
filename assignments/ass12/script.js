async function displayMovies(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json");
    let movieJSON = await response.json();
    let contentDiv = document.getElementById("content");
    contentSec.className = "poster";
    for(i in movieJSON){
        let movieShelf = movieJSON[i];
        contentDiv.append(movieShelf.im)
        contentDiv.append(getMovieInfo(movieShelf));
    }

}
function getMovieInfo(movie){
    movieSection = document.createElement("section");
    movieSection.className = "movie";
    let movieTitle = document.createElement("h3");
    movieTitle.innerHTML = movie.title;
    movieSection.append(movieTitle);
    movieSection.append(makeMovieList(movie.director, movie.actors, movie.year, movie.genres));
    movieSection.append(movie.description);
    return movieSection;
}

function makeMovieList(a,b,c,d){
    movieList = document.createElement("ul");
    movieItem = document.createElement("li");

}

window.onload = function(){
    this.displayMovies;
}