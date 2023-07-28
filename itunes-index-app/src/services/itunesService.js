const BASE_URL = "https://itunes.apple.com/search?entity=album&limit=25&term=";

async function fetchAlbums(searchTerm) {
  const response = await fetch(BASE_URL + searchTerm); // Add the terms at the end of the URL
  const data = await response.json();
  return data.results;
}

export default fetchAlbums;
