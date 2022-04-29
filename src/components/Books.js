import React from 'react';
import Book from './Book';

const Books = () => {
  const books = [{
    id: '1',
    title: '1st',
    author: 'Solo',
  }];

  return (
    <div className="books-container">
      <ul>
        { books.length > 0
          ? books.map((book) => (
            <Book
              key={book.id}
              book={book}
            />
          ))
          : ''}
      </ul>
    </div>
  );
};

export default Books;
