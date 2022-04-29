import React from 'react';

const Books = () => {
  const books = [];

  return (
    <div className="books-container">
      <ul>
        { books.length > 0
          ? books.map((book) => (
            <li key={book.id}>
              {book.title}
            </li>
          ))
          : ''}
      </ul>
    </div>
  );
};

export default Books;
