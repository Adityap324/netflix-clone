// pages/index.tsx
import { GetServerSideProps } from 'next';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface HomeProps {
  movies: Movie[];
}

const Home = ({ movies }: HomeProps) => {
  return (
    <div>
      <div className="header">
        <img src="/netflixlogo.png" alt="Netflix Logo" style={{ width: '150px', height: 'auto' }} />
        <h1>Welcome to Netflix Clone</h1>
      </div>
      {movies.length > 0 ? (
        <ul className="movie-list">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p className="movie-title">{movie.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`);
  const data = await res.json();

  return {
    props: {
      movies: data.results,
    },
  };
};

export default Home;
