import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export default function MovieList() {
  const BASE_URL = "https://ct9wxby0v1.execute-api.ap-south-1.amazonaws.com";
  const [movies, setMovies] = useState([]);
  const [showDetails, setShowDetails] = useState(null);
  const items = [
    {
      rating: 9.6,
      movieId: "3081a600-de7b-4982-b1fa-2b1d0c346d51",
      description:
        "The film commences with a portrait of society's caste divide, with the police checking the caste of detainees to determine who should be released. Only inmates from the upper and middle castes get released. The police blame people from lower caste accusing them of perpetrating crimes in multiple pending cases.[6] Rajakannu and Sengeni are a couple from the Irula tribe who labour in the fields of upper-caste men to control rat infestation and catch venomous snakes. Rajakannu is called to a rich man's dwelling to catch a snake that sneaked inside a room. The next day, a case of burglary is reported when the wife of the man reports missing jewellery pieces from her closet and raises doubt on Rajakannu. The police invade Rajakannu's home to find evidence. Rajakannu had left the town earlier for work. During the invasion, the police brutally beat and unlawfully detains his pregnant wife. The police arrest other relatives, Rajakannu's brother, Iruttupan, his sister Pachaiammal and his brother-in-law, Mosukutty and torture them to confess the whereabouts of Rajakannu. The police find Rajakannu and imprison him. They brutally torture him to confess the crime but releases his wife. Later, Sengeni is informed that all three men in detention are absconding and police threaten her furthermore to tell them about their whereabouts.",
      thumbnail:
        "https://www.livelaw.in/h-upload/2021/11/03/403473-jai-bhim.jpg",
      genre: "Drama",
      title: "Jay Bhim (2021)",
      trailerUrl: "https://www.youtube.com/watch?v=nnXpbTFrqXA",
    },
    {
      rating: 8.7,
      movieId: "5aa47842-3c8d-4567-b539-d92ee9085d99",
      description:
        "The Twilight Saga is a series of five vampire-themed romance fantasy films from Summit Entertainment based on the four novels published by author Stephenie Meyer. The films star Kristen Stewart, Robert Pattinson and Taylor Lautner. The series has grossed over $3.4 billion worldwide",
      thumbnail:
        "https://www.denofgeek.com/wp-content/uploads/2021/07/the-twilight-saga-movie-watch-order.jpeg?fit=1280%2C720",
      genre: "Fiction",
      title: "Twilight Saga",
      trailerUrl: "https://www.youtube.com/watch?v=kX2DKZcDM-o",
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
      trailerUrl: "https://www.youtube.com/watch?v=nnXpbTFrqXA",
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
      trailerUrl: "https://www.youtube.com/watch?v=kX2DKZcDM-o",
    },
    {
      rating: 9.6,
      movieId: "3081a600-de7b-4982-b1fa-2b1d0c346d41",
      description:
        "A pregnant woman from a primitive tribal community…rt to find her husband and seek justice for them.",
      thumbnail:
        "https://www.livelaw.in/h-upload/2021/11/03/403473-jai-bhim.jpg",
      genre: "Drama",
      title: "Jay Bhim",
      trailerUrl: "https://www.youtube.com/watch?v=nnXpbTFrqXA",
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
              className={"flex-shrink-0 w-72 m-2 block rounded-sm "}
              // onMouseEnter={() => {
              //   setShowDetails(movie);
              // }}
              // onMouseLeave={() => setShowDetails(null)}
              onClick={() => {
                setShowDetails(movie);
              }}
            >
              {showDetails !== movie.movieId ? (
                <img
                  src={movie.thumbnail}
                  className={"aspect-video w-72"}
                ></img>
              ) : null}
            </div>
          );
        })}

        {showDetails != null ? (
          <div className="absolute lg:left-1/4  lg:right-1/2  lg:w-1/2 sm:m-2 transform bg-gray-800 rounded-sm">
            <ReactPlayer width={-29} url={showDetails.trailerUrl} />
            {/* <img src={movie.thumbnail} className={"aspect-video w-72"} /> */}

            <div className="p-2" onClick={() => setShowDetails(null)}>
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

              <div
                className=" font-bold text-white py-2"
                style={{ fontSize: "12pt" }}
              >
                {showDetails.title}
              </div>
              <div
                className=" font-bold text-gray-400"
                style={{ fontSize: "8pt" }}
              >
                {showDetails.description}
              </div>
              <div
                className="font-black text-gray-200 py-2"
                style={{ fontSize: "8pt" }}
              >
                Rating: {showDetails.rating}
              </div>
              <div
                className="text-xs font-black  text-gray-200"
                style={{ fontSize: "8pt" }}
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
