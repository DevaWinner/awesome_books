let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || { books: [] };

    // Display books in the collection
    function displayBooks() {
      const bookList = document.getElementById('bookList');
      bookList.innerHTML = '';

      bookCollection.books.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
          <span>${book.title}</span>
          <span>${book.author}</span>
          <button onclick="removeBook(${index})">Remove</button>
        `;
        bookList.appendChild(bookElement);
      });
    }
