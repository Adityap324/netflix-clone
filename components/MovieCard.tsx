import React from "react";
import styles from "../styles/MovieCard.module.css";

interface MovieCardProps {
  movie: {
    title: string;
    poster_path: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.image}
      />
      <div className={styles.info}>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
