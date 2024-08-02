import React from "react";
import MovieCard from "./MovieCard";
import styles from "../styles/MovieList.module.css";

interface MovieListProps {
  movies: Array<{ title: string; poster_path: string }>;
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
