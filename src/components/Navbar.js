import React from "react";
import MovieList from "./MovieList";

export default function Navbar() {
  const loginUrl =
    "https://netflix.auth.ap-south-1.amazoncognito.com/login?client_id=2v4q07qaad1jlugonm96akg1nk&response_type=token&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback";
  return (
    <div>
      <div className="bg-red-700 p-2 justify-between flex flex-row">
        <div className="text-2xl font-extrabold text-red-100">NETFLIX</div>
        <button
          className="text-white  self-center"
          onClick={() => window.open(loginUrl).focus()}
        >
          Login
        </button>
      </div>
      <img
        className="w-64"
        src="https://netflix-videos.s3.ap-south-1.amazonaws.com/Netflix-Logo.png"
      />
      <img
        className="w-full h-96 object-center"
        src="https://images.thequint.com/thequint%2F2021-09%2Fb9aab177-f368-4185-91b4-b37f15c2b7ee%2Fmoneyheist.png"
      />
    </div>
  );
}
