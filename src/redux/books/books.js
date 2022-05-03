const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: state.books.concat(action.payload),
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book !== action.payload),
      };
    default: return state;
  }
};

export const addBooks = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

export default booksReducer;
