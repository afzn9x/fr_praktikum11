/**
 * Import AddMovieForm module css
 */

import { nanoid } from "nanoid";
import { useState } from "react";
import Button from "../ui/button";
import styles from "./AddMovieForm.module.css";

// membuat komponen add movie form

const AddMovieForm = (props) => {
  // melakukan props dari home.js
  const { movies, setMovies } = props;

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    genre: "horror",
  });

  const { title, date, poster, genre } = formData;

  const addMovies = () => {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: genre,
      poster: poster,
    };

    // melakukan push data ke setmovies
    setMovies([...movies, movie]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle form
  const handleSubmit = (e) => {
    //melakukan default agar form tidak tersubmit
    e.preventDefault();

    addMovies();
  };

  return (
    <div className={styles.container}>
      <section className={styles.addmovieform}>
        <div className={styles.addmovieform__left}>
          <img className={styles.addmovieform__image} src={poster} alt="" />
        </div>

        <div className={styles.addmovieform__right}>
          <div>
            <form
              onSubmit={handleSubmit}
              className={styles.addmovieform__form}
              action=""
            >
              <div className={styles.addmovieform__formControl}>
                <label htmlFor="title" className={styles.addmovieform__label}>
                  Add Title
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="title"
                  className={styles.addmovieform__input}
                  value={title}
                />
              </div>
              <div className={styles.addmovieform__formControl}>
                <label htmlFor="year" className={styles.addmovieform__label}>
                  Add Year
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="date"
                  value={date}
                  className={styles.addmovieform__input}
                />
              </div>
              <div className={styles.addmovieform__formControl}>
                <label htmlFor="type" className={styles.addmovieform__label}>
                  Pilih Genre
                </label>
                <select
                  name="genre"
                  id="type"
                  value={genre}
                  onChange={handleChange}
                  className={styles.addmovieform__selectType}
                >
                  <option value="Horror">Horror</option>
                  <option value="Action">Action</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Drama">Drama</option>
                  <option value="Survival">Survival</option>
                </select>
              </div>
              <div className={styles.addmovieform__formControl}>
                <label htmlFor="poster" className={styles.addmovieform__label}>
                  Add Poster
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="poster"
                  value={poster}
                  className={styles.addmovieform__input}
                />
              </div>
              <div className={styles.addmovieform__formButton}>
                <Button variant="secondary" full>Add Movie</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
