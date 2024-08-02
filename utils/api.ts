import axios from "axios";

const API_KEY = "YOUR_TMDB_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (endpoint: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
