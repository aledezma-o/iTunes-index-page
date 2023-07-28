import './App.css';
import React from 'react';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import SearchResults from './components/SearchResults';

const Home = () => {
  return (
    <div>
      <h1>INDEX Page</h1>
      <Link to="/search">Search Albums</Link>
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