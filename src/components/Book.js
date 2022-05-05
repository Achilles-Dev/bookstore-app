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

  const progress = `${Math.floor(Math.random() * 90) + 10}%`;
  const circleProgress = {
    backgroundImage: `conic-gradient(#379cf6 ${progress}, #e8e8e8 0)`,
  };

  return (
    <div className="book-card-container d-flex grey-border">
      <li className="book-card">
        <ul>
          <li className="book-category black-2">{book.category}</li>
          <li className="book-title black-2">{book.title}</li>
          <li className="book-author blue-2">{book.author}</li>
        </ul>
        <>
          <button type="button">Comments</button>
          <button type="button" onClick={handleClick}>Remove</button>
          <button type="button">Edit</button>
        </>
      </li>

      <div className="progress-circle d-flex">
        <div className="circle" style={circleProgress}>
          <div className="inner" />
        </div>
        <div className="progress d-col-flex">
          <h3 className="progress-value black-2">{progress}</h3>
          <p className="progress-completed black-2">Completed</p>
        </div>
      </div>

      <div className="progress-update d-col-flex black-2">
        <h3>CURRENT CHAPTER</h3>
        <h4>Chapter 5</h4>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
