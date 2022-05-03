import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const appId = 'XlJOxZFZuoUCMHkjVObL';

const API = {
  getBooks: (success) => {
    axios.get(`${baseURL}/apps/${appId}/books`)
      .then((res) => {
        success(res);
      });
  },

  addBook: (book, success) => {
    axios.post(`${baseURL}/apps/${appId}/books`, {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    })
      .then((res) => {
        success(res);
      });
  },

  removeBook: (bookId, success) => {
    axios.delete(`${baseURL}/apps/${appId}/books/${bookId}`)
      .then((res) => {
        success(res);
      });
  },
};

export default API;
