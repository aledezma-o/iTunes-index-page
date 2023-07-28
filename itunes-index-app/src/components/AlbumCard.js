import React from "react";

const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <img
        src={album.artworkUrl100 || "default_image_url"} // Use a default image in case the album doesn't have one
        alt={album.collectionName}
      />
      <h3>{album.collectionName}</h3>
      <p>{album.artistName}</p>
      <p>Price: {album.collectionPrice}</p>
    </div>
  );
};

export default AlbumCard;
