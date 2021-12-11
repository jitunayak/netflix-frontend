import { data } from "autoprefixer";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

export default function MovieList() {
  const BASE_URL = "https://ct9wxby0v1.execute-api.ap-south-1.amazonaws.com";
  const [movies, setMovies] = useState([]);
  const [showDetails, setShowDetails] = useState("");
  const items = [
    {
      rating: 9.6,
      movieId: "3081a600-de7b-4982-b1fa-2b1d0c346d41",
      description:
        "A pregnant woman from a primitive tribal community…rt to find her husband and seek justice for them.",
      thumbnail:
        "https://www.livelaw.in/h-upload/2021/11/03/403473-jai-bhim.jpg",
      genre: "Drama",
      title: "Jay Bhim",
    },
    {
      rating: 9.6,
      movieId: "3081a600-de7b-4982-b1fa-2b1d0c346d51",
      description:
        "A pregnant woman from a primitive tribal community…rt to find her husband and seek justice for them.",
      thumbnail:
        "https://www.livelaw.in/h-upload/2021/11/03/403473-jai-bhim.jpg",
      genre: "Drama",
      title: "Jay Bhim",
    },
    {
      rating: 8.7,
      movieId: "5aa47842-3c8d-4567-b539-d92ee9085d99",
      description:
        "The Twilight Saga is a series of five vampire-them…ten Stewart, Robert Pattinson and Taylor Lautner.",
      thumbnail:
        "https://www.denofgeek.com/wp-content/uploads/2021/07/the-twilight-saga-movie-watch-order.jpeg?fit=1280%2C720",
      genre: "Fiction",
      title: "Twilight Saga",
    },
    {
      rating: 9.6,
      movieId: "3081a600-de7b-4982-b1fa-2b1d0c346d52",
      description:
        "A pregnant woman from a primitive tribal community…rt to find her husband and seek justice for them.",
      thumbnail:
        "https://www.livelaw.in/h-upload/2021/11/03/403473-jai-bhim.jpg",
      genre: "Drama",
      title: "Jay Bhim",
    },
    {
      rating: 8.7,
      movieId: "5aa47842-3c8d-4567-b539-d92ee9085d98",
      description:
        "The Twilight Saga is a series of five vampire-them…ten Stewart, Robert Pattinson and Taylor Lautner.",
      thumbnail:
        "https://www.denofgeek.com/wp-content/uploads/2021/07/the-twilight-saga-movie-watch-order.jpeg?fit=1280%2C720",
      genre: "Fiction",
      title: "Twilight Saga",
    },
  ];

  useEffect(() => {
    setMovies(items);
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

  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <button
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
        className="text-white"
      >
        Left
      </button>
    );
  };

  const RightArrow = () => {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <button
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
        className="text-white"
      >
        Right
      </button>
    );
  };

  return (
    <div>
      <h1 className="text-xl font-extrabold text-left p-2 text-white">
        Trending Movies
      </h1>

      <div className="flex  flex-row justify-start  overflow-x-auto scrollbar-hide scroll-smooth ">
        {movies.map((movie, index) => {
          return (
            <div
              key={movie.movieId}
              className={"flex-shrink-0 w-72 m-2 block rounded-lg "}
              onMouseEnter={() => setShowDetails(movie.movieId)}
              onMouseLeave={() => setShowDetails(null)}
            >
              {showDetails !== movie.movieId ? (
                <img
                  src={movie.thumbnail}
                  className={"aspect-video w-72"}
                ></img>
              ) : null}

              {showDetails === movie.movieId ? (
                <div className="absolute w-72 text-left  scale-150 bg-gray-800 p-2 rounded-sm delay-700 transition ease-in-out">
                  <img src={movie.thumbnail} className={"aspect-video w-72"} />

                  <div className="flex justify-between">
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
                  <div
                    className=" font-bold text-white"
                    style={{ fontSize: "10pt" }}
                  >
                    {movie.title}
                  </div>
                  <div
                    className=" font-bold text-gray-400"
                    style={{ fontSize: "8pt" }}
                  >
                    {movie.description}
                  </div>
                  <div
                    className="font-black text-gray-200"
                    style={{ fontSize: "8pt" }}
                  >
                    Rating: {movie.rating}
                  </div>
                  <div
                    className="text-xs font-black  text-gray-200"
                    style={{ fontSize: "8pt" }}
                  >
                    {movie.genre}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
