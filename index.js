/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
let dateShow = document.getElementById('date-show');
let date = new Date();
console.log(date)
dateShow.innerText = `${date}`
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.books = this.loadBooksFromLocalStorage();
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    this.saveBooksToLocalStorage();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.saveBooksToLocalStorage();
  }

  // Save updated collection to localStorage
  saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  loadBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  }

  getBooks() {
    return this.books;
  }
}

const bookCollection = new BookCollection();

// Display books in the collection
function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  bookCollection.getBooks().forEach((book, index) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
      <div class="book-info">
        <span>"${book.title}"</span>
        <span> by ${book.author}</span>
      </div>
      <div class="btn-container">
        <button onclick="removeBook(${index})">Remove</button>
      </div>
    `;
    bookList.appendChild(bookElement);
  });
}

// Add a new book to the collection
function addBook() {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    bookCollection.addBook(title, author);
    titleInput.value = '';
    authorInput.value = '';
    displayBooks();
  }
}

// Remove a book from the collection
function removeBook(index) {
  bookCollection.removeBook(index);
  displayBooks();
}

displayBooks();

// Control which section to show
const list = document.getElementById('list');
const listAdd = document.getElementById('list-add-new');
const listContact = document.getElementById('list-contact');
// Three main sections
const mainSection = document.getElementById('main');
const addBookSection = document.getElementById('add-new');
const contactSection = document.getElementById('contact');

list.addEventListener('click', () => {
  mainSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

listAdd.addEventListener('click', () => {
  addBookSection.style.display = 'block';
  mainSection.style.display = 'none';
  contactSection.style.display = 'none';
});

listContact.addEventListener('click', () => {
  contactSection.style.display = 'block';
  addBookSection.style.display = 'none';
  mainSection.style.display = 'none';
});
