/**
 * Se ejecuta cuando la ventana se carga.
 */
window.onload = () => {
    document.getElementById("submit").addEventListener('click', formSubmit);
}

/**
 * Clase que representa una lista de libros.
 * @class
 */
class BookList {
    /**
     * Constructor de la clase BookList.
     * @constructor
     */
    constructor() {
        this.Readed = 0;             // Número de libros leídos
        this.forRead = 0;            // Número de libros por leer
        this.nextBook = null;        // Próximo libro
        this.currentBook = null;     // Libro actual
        this.lastBook = null;        // Último libro
        this.books = [];             // Array de libros
    }

    /**
     * Función para agregar un libro a la lista.
     * @param {Book} Book - El libro que se va a agregar.
     * @returns {boolean} - Devuelve true si se agregó correctamente, false si ya existe un libro con el mismo ISBN.
     */
    addBook(Book) {
        // Verificar si ya hay un libro con el mismo ISBN
        const libroExistente = this.books.find(existingBook => existingBook.isbn === Book.isbn);

        if (libroExistente) {
            alert("Ya existe un libro con el mismo ISBN. No se agregará a la lista.");
            return false;
        } else {
            // Agregar el libro a la lista
            this.books.push(Book);
            this.forRead++;
            this.currentBook = Book;

            var numContador = parseInt(document.getElementById("contadorLibros").innerHTML);
            var numRestantes = parseInt(document.getElementById("restantes").innerHTML);

            document.getElementById("contadorLibros").innerHTML = numContador + 1;
            document.getElementById("restantes").innerHTML = numRestantes + 1;
            return true;
        }
    }

    /**
     * Función para marcar el libro actual como leído.
     */
    finishCurrentBook() {
        this.Readed++;
        this.forRead--;
        this.currentBook.Read = true;
        this.lastBook = this.currentBook;
        this.currentBook = null;
    }
}

/**
 * Clase que representa un libro.
 * @class
 */
class Book {
    /**
     * Constructor de la clase Book.
     * @constructor
     * @param {string} isbn - ISBN del libro.
     * @param {string} title - Título del libro.
     * @param {string} genre - Género del libro.
     * @param {string} author - Autor del libro.
     */
    constructor(isbn, title, genre, author) {
        this.isbn = isbn;
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.Read = false;
        this.readDate = null;
    }
}

/**
 * Función que se ejecuta al enviar el formulario.
 */
function formSubmit() {
    var isbn = document.getElementById("isbn").value;
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var genre = document.getElementById("genre").value;

    var book = new Book(isbn, title, author, genre);

    // Intentar agregar el libro
    if (libros.addBook(book)) {
        // Crear y agregar un elemento para el libro en la interfaz
        var bookDiv = document.createElement("div");
        // ... (código para crear y estilizar el div)

        bookDiv.addEventListener('click', () => leerLibro(book, bookDiv));

        var BookList = document.getElementById("lista");
        BookList.appendChild(bookDiv);

        // Limpiar los campos del formulario
        var isbn = document.getElementById("isbn").value = '';
        var title = document.getElementById("title").value = '';
        var author = document.getElementById("author").value = '';
        var genre = document.getElementById("genre").value = '';
    }
}

/**
 * Función para marcar un libro como leído.
 * @param {Book} selectedBook - El libro que se va a marcar como leído.
 * @param {HTMLDivElement} bookDiv - El div correspondiente al libro en la interfaz.
 */
function leerLibro(selectedBook, bookDiv) {
    var libroEncontrado = libros.books.find(function (book) {
        return book.isbn === selectedBook.isbn;                 // buscamos en el array de libros el libro solicitado y guardamos el objeto en una variable
    });

    if (libroEncontrado) {
        libroEncontrado.Read = true;                    // si se ha encontrado, cambiamos los valores que veamos necesarios
        libroEncontrado.readDate = new Date();

        // Actualizar la interfaz con la fecha de lectura
        bookDiv.querySelector('.fechaLectura').innerHTML = "Read on " + libroEncontrado.readDate.toLocaleDateString();

        // Decrementar el contador de libros por leer
        var restantesElement = document.getElementById("restantes");
        if (restantesElement) {
            restantesElement.innerHTML = restantesElement.innerHTML - 1;
        }

        console.log("\n\nmodificado: " + libroEncontrado.title);

        console.log("\n\nListando libros:")
        libros.books.forEach(element => {
            console.log(element);
        });
    }
}