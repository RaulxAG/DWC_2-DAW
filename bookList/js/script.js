
window.onload = () => {
    document.getElementById("submit").addEventListener('click', formSubmit);
}

class BookList {
    constructor() {
      this.Readed = 0;
      this.forRead = 0;
      this.nextBook = null;
      this.currentBook = null;
      this.lastBook = null;
      this.books = [];
    }

    addBook(Book) {
        this.books.push(Book);
        this.forRead++;
        this.currentBook = Book;
        document.getElementById("contadorLibros").innerHTML = this.forRead;
        document.getElementById("restantes").innerHTML = this.books.length;
    }

    finishCurrentBook() {
        this.Readed++;
        this.forRead--;
        this.currentBook.Read = true;
        this.lastBook = this.currentBook;
        this.currentBook = null;
    }
}

class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.Read = false;
        this.readDate = null;
    }
}

function formSubmit() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var genre = document.getElementById("genre").value;

    var book = new Book(title,author,genre);

    var bookDiv = document.createElement("div");

    var divTitleAuthor = document.createElement("div");
    
    var h4Title = document.createElement("h4");
    h4Title.innerHTML = book.title;
    
    var h5Author = document.createElement("h5");
    h5Author.innerHTML = book.author;
    
    divTitleAuthor.appendChild(h4Title);
    divTitleAuthor.appendChild(h5Author);

    divTitleAuthor.style.width = "85%";

    var divState = document.createElement("div");
    var state = document.createElement("h5")
    state.innerHTML = "Not Read";

    divState.appendChild(state);

    bookDiv.appendChild(divTitleAuthor);
    bookDiv.appendChild(divState);

    bookDiv.style.marginTop = "10px";
    bookDiv.style.marginBottom = "10px";
    bookDiv.style.padding = "15px";
    bookDiv.style.color = "white";
    bookDiv.style.backgroundColor = "rgba(200, 200, 200, 0.7)";
    bookDiv.style.borderRadius = "20px";
    bookDiv.style.color = "#333";
    bookDiv.style.boxShadow = "inset 0 0 2px";

    bookDiv.style.display = "flex";
    bookDiv.style.justifyContent = "space-around"

    bookDiv.addEventListener('click', libros.addBook(book));

    var BookList = document.getElementById("lista");

    BookList.appendChild(bookDiv);

    var title = document.getElementById("title").value = '';
    var author = document.getElementById("author").value = '';
    var genre = document.getElementById("genre").value = '';
}

var libros = new BookList();