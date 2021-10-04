import React from "react";
import { useEffect } from "react";


export default function MovieData({ movie }) {
  useEffect(() => {
    console.log("the Movie is here");
  }, []);
  return (
    <div className="MovieData">
      <div className="card">
          <div className="card-body">
            <h1 className="list-group-item"><strong className="text-secondary">Title:</strong> {movie.Title}</h1>
            <h2 className="list-group-item"><strong className="text-secondary">Year:</strong> {movie.Year}</h2>
          </div>
          <div className="">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="card-body">
            <h3 className="list-group-item"><strong className="text-secondary">Genre:</strong> {movie.Genre}</h3>
            <h4 className="list-group-item"><strong className="text-secondary">Plot:</strong> {movie.Plot}</h4>
          </div>
      </div>
    </div>
  );
};