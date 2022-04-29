import React from 'react';
/* eslint-disable react/prop-types */
const Book = (props) => {
  const { book } = props;

  return (
    <div>
      <li>
        {`${book.title} by ${book.author}`}
      </li>
      <button type="button">Remove</button>
    </div>
  );
};

export default Book;
