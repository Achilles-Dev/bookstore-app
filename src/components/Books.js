import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
// import { getBooks } from '../redux/books/books';
import Book from './Book';
import InputBook from './InputBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  const newBooks = books.books;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="books-container">
      <ul className="books-card d-col-flex">
        { newBooks.length > 0
          ? newBooks.map((book) => (
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
