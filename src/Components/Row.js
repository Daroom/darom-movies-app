import React from "react";
import { useState, useEffect } from "react";
import "./Row.css";
import instance from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLarge }) {
  const opts = {
    autoplay: 1,
    height: "600",
    width: "100%",
  };
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setURl] = useState("");
  const handleTrailer = (mov) => {
    if (trailerUrl) {
      setURl("");
    } else {
      movieTrailer(mov.name || mov.title || mov.original_name || "").then(
        (url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setURl(urlParam.get("v"));
        }
      );
    }
  };

  const baseImgURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get(fetchUrl);
      // setMovies(res.data);
      console.log(res.data.results);
      setMovies(res.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  useEffect(() => {}, [trailerUrl]);

  return (
    <div className="Row">
      <h1>{title}</h1>
      <div className="Posters">
        {movies.map((movie) => (
          <img
            className={"Poster " + (isLarge ? "LargePoster" : "others")}
            src={`${baseImgURL}${
              !isLarge ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name || movie.title}
            onClick={() => handleTrailer(movie)}
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
