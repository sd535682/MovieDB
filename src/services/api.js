const API_URL = 'https://api.tvmaze.com/search/shows';

export const fetchAllMovies = () => {
  return fetch(`${API_URL}?q=all`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data =>
      data.filter(show => show.show.image && show.show.image.original),
    )
    .catch(error => {
      console.error('Error fetching movies:', error);
      throw error;
    });
};

export const searchMovies = searchTerm => {
  return fetch(`${API_URL}?q=${searchTerm}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error searching movies:', error);
      throw error;
    });
};
