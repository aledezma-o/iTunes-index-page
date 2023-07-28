import React from "react";
import './AlbumCard.css';

const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <div className="album-image">
        <img src={album.artworkUrl100} alt={album.collectionName} />
      </div>
      <div className="album-details">
        <div className="album-title">{album.collectionName}</div>
        <div className="album-text">
          <div className="artist-name">{album.artistName}</div>
          <div className="album-price">{album.collectionPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
