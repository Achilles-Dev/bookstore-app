import API from "../services/api";

const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore-app/books/GET_BOOKS';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload
      }
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

export const getBooks = () => {
  return dispatch => {
    API.getBooks(res => {
        dispatch({
            type: GET_BOOKS,
            payload: res.data
        })
    })
}
}

export const addBook = (book) => {
  return dispatch => {
    API.addBook(book, res => {
      dispatch({
        type: ADD_BOOK,
        payload: res.data,
      })
    })
  }
};

export const removeBook = (bookId) => {
  return dispatch => {
    API.removeBook(bookId, res => {
      dispatch({
        type: REMOVE_BOOK,
        payload: res.data,
      })
    })
  }
};

export default booksReducer;
