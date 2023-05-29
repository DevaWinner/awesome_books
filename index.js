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

    // Add a new book to the collection
    function addBook() {
      const titleInput = document.getElementById('title');
      const authorInput = document.getElementById('author');
      const title = titleInput.value.trim();
      const author = authorInput.value.trim();

      if (title && author) {
        const newBook = {
          title: title,
          author: author
        };

        bookCollection.books.push(newBook);

        // Save updated collection to localStorage
        localStorage.setItem('bookCollection', JSON.stringify(bookCollection));

        // Clear input fields
        titleInput.value = '';
        authorInput.value = '';

        displayBooks();
      }
    }

    // Remove a book from the collection
    function removeBook(index) {
      bookCollection.books.splice(index, 1);

      // Save updated collection to localStorage
      localStorage.setItem('bookCollection', JSON.stringify(bookCollection));

      displayBooks();
    }

    displayBooks();