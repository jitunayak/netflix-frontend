import React from "react";

export default function Navbar({ username }) {
  const NETFLIX_URL =
    "https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1";
  const domain = window.location.href;
  const loginUrl = `https://netflix.auth.ap-south-1.amazoncognito.com/login?client_id=2v4q07qaad1jlugonm96akg1nk&response_type=token&scope=email+openid&redirect_uri=${encodeURIComponent(
    domain
  )}callback`;

  const [currentSelection, setCurrentSelection] = React.useState("Home");
  const styles = {
    navbar: "bg-zinc-800 px-4 py-2 rounded-md font-semibold cursor-pointer",
    navbarHidden:
      "bg-black px-4 py-2 rounded-md font-semibold cursor-pointer text-zinc-500",
  };
  return (
    <div>
      <div className=" justify-between items-center flex sm:flex-row flex-col align-middle  text-white">
        {/* <div className="text-2xl font-extrabold text-red-100">NETFLIX</div> */}
        <img alt="netflix logo" src={NETFLIX_URL} className="w-48"></img>

        <p
          className={
            currentSelection === "Home" ? styles.navbar : styles.navbarHidden
          }
          onClick={() => setCurrentSelection("Home")}
        >
          Home
        </p>
        <div
          className={
            currentSelection === "Movies" ? styles.navbar : styles.navbarHidden
          }
          onClick={() => setCurrentSelection("Movies")}
        >
          Movies
        </div>
        <p
          className={
            currentSelection === "New & Popular"
              ? styles.navbar
              : styles.navbarHidden
          }
          onClick={() => setCurrentSelection("New & Popular")}
        >
          New & Popular
        </p>
        <p
          className={
            currentSelection === "TV Shows"
              ? styles.navbar
              : styles.navbarHidden
          }
          onClick={() => setCurrentSelection("TV Shows")}
        >
          TV Shows
        </p>
        <p
          className={
            currentSelection === "Watchlist"
              ? styles.navbar
              : styles.navbarHidden
          }
          onClick={() => setCurrentSelection("Watchlist")}
        >
          Watchlist
        </p>

        <p className="text-white p-4 text-lg font-normal">
          Hello, {username?.split("@")[0] ?? "Guest"}
        </p>

        {/* <button
          className="text-white  self-center text-sm"
          onClick={() => window.open(loginUrl).focus()}
        >
          Login
        </button> */}
      </div>
      {/*      <img
         className="w-64"
         src="https://netflix-videos.s3.ap-south-1.amazonaws.com/Netflix-Logo.png"
       />
    */}
      {/* <img
        className="w-full h-96 object-center"
        src="https://images.thequint.com/thequint%2F2021-09%2Fb9aab177-f368-4185-91b4-b37f15c2b7ee%2Fmoneyheist.png"
      /> */}
    </div>
  );
}
