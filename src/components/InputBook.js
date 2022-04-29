import React from 'react';

const InputBook = () => (
  <form className="form-container">
    <input
      type="text"
      className="input-text"
      placeholder="Add title..."
      name="title"
    />
    <input
      type="text"
      className="input-text"
      placeholder="Add author..."
      name="author"
    />
    <button type="submit" className="input-submit">ADD BOOK</button>
  </form>
);

export default InputBook;
