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
      <li>
        {`${book.title} by ${book.author}`}
      </li>
      <button type="button" onClick={handleClick}>Remove</button>
    </div>
  );
};

export default Book;
