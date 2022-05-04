import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
/* eslint-disable react/prop-types */
const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div>
      <li className="book-card">
        <ul>
          <li className="book-category">{book.category}</li>
          <li className="book-title">{book.title}</li>
          <li className="book-author">{book.author}</li>
        </ul>
        <>
          <button type="button">Comments</button>
          <button type="button" onClick={handleClick}>Remove</button>
          <button type="button">Edit</button>
        </>
      </li>
    </div>
  );
};

export default Book;
