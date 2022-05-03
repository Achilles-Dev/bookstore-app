import API from '../services/api';

const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore-app/books/GET_BOOKS';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  let books;
  switch (action.type) {
    case GET_BOOKS:
      books = Object.keys(action.payload).map((id) => ({
        id,
        title: action.payload[id][0].title,
        author: action.payload[id][0].author,
        category: action.payload[id][0].category,
      }));
      return {
        ...state,
        books,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: state.books.concat(action.payload),
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default: return state;
  }
};

export const getBooks = () => (dispatch) => {
  API.getBooks((res) => {
    dispatch({
      type: GET_BOOKS,
      payload: res.data,
    });
  });
};

export const addBook = (book) => (dispatch) => {
  API.addBook(book, () => {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  });
};

export const removeBook = (bookId) => (dispatch) => {
  API.removeBook(bookId, () => {
    dispatch({
      type: REMOVE_BOOK,
      payload: bookId,
    });
  });
};

export default booksReducer;
