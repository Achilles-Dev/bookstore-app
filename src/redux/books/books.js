const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';

const initialState = [];

export const booksReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_BOOK: 
      return {
        ...state,
        books: books.concat(action.payload)
      }
    case REMOVE_BOOK:
      return {
        ...state,
        books: books.filter(book => book !== action.payload)
      }
    default: return state
  }
}

export const addBooks = (book) => {
  return {
    type: ADD_BOOK,
    payload: book
  }
}

export const removeBook = (bookId) => {
  return {
    type: REMOVE_BOOK,
    payload: bookId
  }
}