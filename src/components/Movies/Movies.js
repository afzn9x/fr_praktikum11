
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies(props) {
  const { movies } = props;

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>
          <u>Latest Movies</u>
        </h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Movies;
