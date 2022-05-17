import React from "react";
import MovieList from "./MovieList";

export default function Navbar() {
  const domain = window.location.href;
  const loginUrl = `https://netflix.auth.ap-south-1.amazoncognito.com/login?client_id=2v4q07qaad1jlugonm96akg1nk&response_type=token&scope=email+openid&redirect_uri=${encodeURIComponent(
    domain
  )}callback`;
  return (
    <div>
      <div className="bg-black p-2 justify-between flex flex-row">
        <img
          src="http://localhost:4000/image/Netflix-Logo.png"
          className="w-28"
          alt="netflix"
        />{" "}
        <button
          className="text-white  self-center font-bold"
          onClick={() => window.open(loginUrl).focus()}
        >
          Login
        </button>
      </div>
    </div>
  );
}
