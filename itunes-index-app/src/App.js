import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SearchResults from './components/SearchResults';

const Home = () => {
  return (
    <div class="App-header">
      <h1>Index page</h1>
      <Link to="/search">Search Albums</Link>
      <p>Para buscar tu álbum favorito.</p>
    </div>
  );
};

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;