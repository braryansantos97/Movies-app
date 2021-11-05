import React, { useState, useEffect } from "react";
import MovieData from "../components/MovieData";

console.log(process.env);


export default function App(props) {


  const [title, setTitle] = useState("");
  const [movie, updateMovie] = useState({});

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    try {
      // make fetch request and store response
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      updateMovie({ ...data });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovie("Thor");
  }, []);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovie(title);
    setTitle("");
  };
  return (
    <div className="MoviePage">
      <h1 className="display-1">Movie Pedia</h1>
        <form onSubmit={handleSubmit} className="">
            <div className="row justify-content-center">
                <input id="title" type="text" className="form-control text-center" placeholder="Enter Movie Title" value={title} onChange={handleChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-outline-primary">Find Movie Info</button>
                </span>
            </div>
        </form>

      <main className="Page">
        {Object.keys(movie).length ? <MovieData movie={movie} /> : ""}
      </main>
    </div>
  );
}
