import '../App.css';
import React, { useState } from 'react';
import fetchAlbums from '../services/itunesService';
import AlbumCard from './AlbumCard';

const pageSize = 5;

const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [albums, setAlbums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [seeAll, setSeeAll] = useState(false);

  const handleSearch = async () => {
    const data = await fetchAlbums(searchTerm);
    setAlbums(data);
    setCurrentPage(1); // reset to 1 after new search
  };

  const replaceMissingText = (text) => {
    return text ? text : "<N/A>";
  };

  const handleMissingImage = (e) => {
    e.target.src =
      "https://lakehouserecoverycenter.com/wp-content/uploads/2014/09/gray-question-mark.png"; // Question mark image URL
  };

  // range of albums to display for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the albums array to get only the ones for the current page
  let albumsToShow = seeAll ? albums : albums.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(albums.length / pageSize)));
  };

  const handleToggleSeeAll = () => {
    setCurrentPage(1); // reset  1 when toggling SeeAll
    setSeeAll((prevSeeAll) => !prevSeeAll);
  };

  return (
    <div className="App-header">
      <div>
      <div className="Search-box-button">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <input
          type="checkbox"
          checked={seeAll}
          onChange={handleToggleSeeAll}
          id="seeAll"
        />
        <label htmlFor="seeAll"
          style={{fontSize: '16px'}}>See All</label>
      </div>
      </div>
      <div>
        {albumsToShow.map((album) => (
          <div className="album-list" key={album.collectionId}>
            <AlbumCard album={album}>
              <h2>{replaceMissingText(album.collectionName)}</h2>
              <p>Artist: {replaceMissingText(album.artistName)}</p>
              <p>Price: {replaceMissingText(album.collectionPrice)}</p>
              <img
                src={album.artworkUrl100}
                alt={album.collectionName}
                onError={handleMissingImage}
              />
            </AlbumCard>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1 || seeAll} id="prevButton">
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(albums.length / pageSize) || seeAll}
          id="nextButton"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
