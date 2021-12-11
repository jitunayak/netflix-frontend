import React from "react";
import MovieList from "./MovieList";

export default function Navbar() {
  return (
    <div>
      <div className="bg-red-800 p-2 justify-between flex flex-row">
        <h1 className="text-3xl font-bold text-red-100">Netflix</h1>
        <div className="text-white  self-center">Login</div>
      </div>
      <img
        className="w-full h-96 object-center"
        src="https://images.thequint.com/thequint%2F2021-09%2Fb9aab177-f368-4185-91b4-b37f15c2b7ee%2Fmoneyheist.png?w=1200&auto=format%2Ccompress&ogImage=true"
      />
      <MovieList />
      <MovieList />
    </div>
  );
}
