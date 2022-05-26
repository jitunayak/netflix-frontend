// import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { moviesDummy } from "./MoviesData";

export default function MovieList({ category }) {
  const BASE_URL = "https://ct9wxby0v1.execute-api.ap-south-1.amazonaws.com";
  const [movies, setMovies] = useState([]);
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    let shuffledMovies = moviesDummy
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setMovies(shuffledMovies);
    return () => {};
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get(BASE_URL + "/movies")
  //       .then((data) => {
  //         console.log(data);
  //         setMovies(data.data.Items);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return () => {};
  //   }, []);

  return (
    <div>
      <h1 className="mx-4 mt-2 px-2 text-left text-xl font-extrabold text-white">
        {category}
      </h1>
      <div className="flex  flex-row justify-start  overflow-x-auto scroll-smooth py-2 scrollbar-hide">
        {movies.map((movie, index) => {
          return (
            <div
              key={movie.movieId}
              className={
                "mx-2 my-4 block w-64 min-w-[180px] flex-shrink-0 cursor-pointer rounded-sm transition ease-out hover:scale-110 md:min-w-[260px]"
              }
              onClick={() => {
                setShowDetails(movie);
              }}
            >
              {showDetails !== movie.movieId ? (
                <img
                  alt="thumbnail"
                  src={movie.thumbnail}
                  className="aspect-video w-72 rounded-lg opacity-100 hover:shadow-lg"
                ></img>
              ) : null}
            </div>
          );
        })}

        {showDetails != null ? (
          <div className="fixed top-1  z-50 transform  overflow-y-auto rounded-lg bg-zinc-900 sm:m-2 lg:left-1/4 lg:right-1/2 lg:w-1/2">
            <ReactPlayer width={-29} url={showDetails.trailerUrl} playing />

            <div className="p-6" onClick={() => setShowDetails(null)}>
              <button className="rounded-sm bg-red-600 px-16 py-2 font-bold text-white">
                Play
              </button>
              <div className="flex justify-between py-2">
                {/* Thumb icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>

                {/* heart icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div className=" py-2 text-xl font-bold text-white">
                {showDetails.title}
              </div>
              <div className=" font-normal text-gray-400">
                {showDetails.description}
              </div>
              <hr className="my-4" />
              <div
                className="py-2 font-black text-gray-200"
                style={{ fontSize: 14 }}
              >
                Rating: {showDetails.rating}
              </div>
              <div
                className="w-min rounded-2xl  bg-zinc-700 p-2 text-xs font-black text-gray-200"
                style={{ fontSize: 14 }}
              >
                {showDetails.genre}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      );
    </div>
  );
}
