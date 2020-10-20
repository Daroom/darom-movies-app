import React, { useState, useEffect } from "react";
import instance from "../axios";
import "./Banner.css";
function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  const baseImgURL = "https://image.tmdb.org/t/p/original/";

  function restrictText(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    const fetchRandomData = async () => {
      const res = await instance.get(fetchUrl);
      const resdata = res.data.results;
      const randomElement = resdata[Math.floor(Math.random() * resdata.length)];
      setMovie(randomElement);
    };
    fetchRandomData();
  }, [fetchUrl]);

  return (
    <div>
      <header
        className="banner"
        style={{ backgroundImage: `url(${baseImgURL}${movie.backdrop_path})` }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {movie.name || movie.title || movie.original_name}
          </h1>
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
          <h1 className="banner_description">
            {restrictText(movie.overview, 180)}
          </h1>
        </div>
        <div className="fadedDiv"></div>
      </header>
    </div>
  );
}

export default Banner;
