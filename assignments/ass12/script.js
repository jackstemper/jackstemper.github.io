async function displayMovies(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json");
    let movieJSON = await response.json();
    let contentDiv = document.getElementById("content");
    let h2Elm = document.createElement("h2");
    h2Elm.innerHTML = "Movies";
    contentDiv.append(h2Elm);
    for(i in movieJSON){
        let flexDiv = document.createElement("section");
        flexDiv.className = "flexfix";
        let movieShelf = movieJSON[i];
        let imgElm = document.createElement("img");
        imgElm.src = `https://portiaportia.github.io/csce242/json/${movieShelf.img}`;
        flexDiv.append(imgElm);
        flexDiv.append(getMovieInfo(movieShelf));
        contentDiv.append(flexDiv);
    }

}
function getMovieInfo(movie){
    movieSection = document.createElement("section");
    movieSection.className = "movie";
    let movieTitle = document.createElement("h3");
    movieTitle.innerHTML = movie.title;
    movieSection.append(movieTitle);
    movieSection.append(makeMovieInfo(movie.director, movie.actors, movie.year, movie.genres));
    movieSection.append(movie.description)
    return movieSection;
}
function makeMovieInfo(a,b,c,d){
    let movieList = document.createElement("ul");
    let liElm = document.createElement("li");
    liElm.innerHTML = `<strong>Director:</strong> ${a}`;
    movieList.append(liElm);
    let liElm2 = document.createElement("li");
    liElm2.innerHTML = getActors(b);
    movieList.append(liElm2);
    let liElm3 = document.createElement("li");
    liElm3.innerHTML = `<strong>Year:</strong> ${c}`;
    movieList.append(liElm3);
    let liElm4 = document.createElement("li");
    liElm4.innerHTML = getGenres(d);
    movieList.append(liElm4);
    return movieList;
}
function getActors(a){
    let data = `<strong>Actors:</strong>`;
    for(i in a){
        data += ` ${a[i]},`;
    }
    return data;
}
function getGenres(a){
    let genres = `<strong>Genres:</strong>`;
    for(i in a){
        genres += ` ${a[i]},`;
    }
    return genres;
}
window.onload = function(){
    this.displayMovies();
}