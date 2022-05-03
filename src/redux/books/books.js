const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';

const initialState = {
  books: [
    {
      id: '1',
      author: 'Solo',
      title: 'First book',
    },
    {
      id: '2',
      author: 'Solo 2',
      title: 'Second book',
    },
    {
      id: '3',
      author: 'Solo 3',
      title: 'Third book',
    },
  ],
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
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default: return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

export default booksReducer;
