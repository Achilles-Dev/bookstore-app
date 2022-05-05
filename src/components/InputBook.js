import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: 'First category',
  });
  const dispatch = useDispatch();
  const onTitleChange = (e) => setBook({ ...book, title: e.target.value });
  const onAuthorChange = (e) => setBook({ ...book, author: e.target.value });
  const handleClick = () => {
    if (book.author && book.title) {
      book.id = uuidv4();
      dispatch(addBook(book));
      setBook({
        title: '',
        author: '',
      });
    }
  };

  return (
    <div className="form-section">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="form-container">
        <input
          type="text"
          className="input-title"
          placeholder="Book title"
          name="title"
          value={book.title}
          onChange={onTitleChange}
        />
        <input
          type="text"
          className="input-author"
          placeholder="Add author..."
          name="author"
          value={book.author}
          onChange={onAuthorChange}
        />
        <button
          type="submit"
          className="input-submit"
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default InputBook;
