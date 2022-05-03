import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const Books = () => {
  const books = useSelector((state) => state.books);

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
      <InputBook />
    </div>
  );
};

export default Books;
