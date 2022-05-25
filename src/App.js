import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact="true"
          path="/"
          element={<Books />}
        />
        <Route
          exact="true"
          path="/categories"
          element={<Categories />}
        />
      </Routes>

    </div>
  );
}

export default App;
