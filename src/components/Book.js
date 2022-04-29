import React from 'react';
/* eslint-disable react/prop-types */
const Book = (props) => {
  const { book } = props;

  return (
    <div>
      <li>
        {book.title}
      </li>
      <button type="button">Remove</button>
    </div>
  );
};

export default Book;
