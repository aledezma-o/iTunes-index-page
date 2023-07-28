import React, { useState } from 'react';
import fetchAlbums from '../services/itunesService';
import AlbumCard from './AlbumCard';

const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [albums, setAlbums] = useState([]);

  const handleSearch = async () => {
    const data = await fetchAlbums(searchTerm);
    setAlbums(data);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="album-list">
        {albums.map((album) => (
          <AlbumCard key={album.collectionId} album={album} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
