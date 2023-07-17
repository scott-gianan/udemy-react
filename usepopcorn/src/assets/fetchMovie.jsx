export const fetchMovie = async (id) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=5abe5097&i=${id}`
  );
  const data = await response.json();
  return data;
};
