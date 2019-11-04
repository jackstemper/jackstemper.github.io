function book(title, author, genre, date, rating, img){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.date = date;
    this.rating = rating;
    this.img = img;
    this.bookElm = function(){
        pElm = document.createElement("p");
        imgElm = document.createElement("img");
        divElm = document.createElement("div");
        divElm.classList.add("flexneed");
        pElm.innerHTML = `<p><strong>${this.title}</strong> by ${this.author}, genre: ${this.genre}, written in ${this.date}, rated ${this.rating} stars</p>`;
        imgElm.src = this.img;
        divElm.append(imgElm);
        divElm.append(pElm);
        secElm = document.getElementById("book-shelf");
        secElm.append(divElm);
    }
}
function makeBookshelf(bookshelf){
    for(items of bookshelf){
        this.bookElm();
    }
}

let bookshelf = [];
bookshelf.push(new book("Catcher in the Rye", "J. D. Salinger", "Coming-Of-Age Fiction", 1952, 3, "../images/rye"));
bookshelf.push(new book("Slaughterhouse Five", "Kurt Vonnegut", "Dark Comedy", 1969, 5, "../images/five"));
bookshelf.push(new book("Binging with Babish", "Andrew Rea", "Cookbook", 2019, 4, "../img/binging"));
makeBookshelf(bookshelf);