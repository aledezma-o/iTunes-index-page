const BASE_URL = "https://itunes.apple.com/search?term=";

async function fetchAlbums(searchTerm) {
  const response = await fetch(BASE_URL + searchTerm); // Add the terms at the end of the URL
  const data = await response.json();

  if (!data || !data.results || !Array.isArray(data.results)) {
    throw new Error("Invalid server response.");
  }

  // Set for unique album IDs
  const uniqueAlbumIds = new Set();

  // Filter duplicates with album ID
  const filteredResults = data.results.filter((album) => {
    if (uniqueAlbumIds.has(album.collectionId)) {
      return false; // Skip duplicate album
    } else {
      uniqueAlbumIds.add(album.collectionId);
      return true; // Keep unique album
    }
  });
  return filteredResults;
}

export default fetchAlbums;
