import { Auth } from "aws-amplify";
import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

export default function Navbar({ username }) {
  const NETFLIX_URL =
    "http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png";

  // const domain = window.location.href;
  // const loginUrl = `https://netflix.auth.ap-south-1.amazoncognito.com/login?client_id=2v4q07qaad1jlugonm96akg1nk&response_type=token&scope=email+openid&redirect_uri=${encodeURIComponent(
  //   domain
  // )}callback`;

  const [currentSelection, setCurrentSelection] = React.useState("Home");
  const [showSubMenu, setShowSubMenu] = React.useState(false);

  const styles = {
    navbar: "bg-zinc-800 px-4 py-2 rounded-md font-semibold cursor-pointer",
    navbarHidden:
      " px-4 py-2 rounded-md font-semibold cursor-pointer text-zinc-400",
  };

  const navigate = useNavigate();
  const signOut = () => {
    try {
      Auth.signOut();
      navigate("/login");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="flex flex-wrap items-center justify-between px-6  align-middle  text-white">
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
          currentSelection === "TV Shows" ? styles.navbar : styles.navbarHidden
        }
        onClick={() => setCurrentSelection("TV Shows")}
      >
        TV Shows
      </p>
      <p
        className={
          currentSelection === "Watchlist" ? styles.navbar : styles.navbarHidden
        }
        onClick={() => setCurrentSelection("Watchlist")}
      >
        Watchlist
      </p>

      <div className="flex flex-row items-center float-right ">
        <img
          alt="profile"
          className="h-8 w-8"
          src="https://occ-0-2041-3662.1.nflxso.net/art/0d282/eb648e0fd0b2676dbb7317310a48f9bdc2b0d282.png"
        />
        <p
          // onClick={() => signOut()}
          onMouseEnter={() => setShowSubMenu(true)}
          onMouseLeave={() => setShowSubMenu(false)}
          className="cursor-pointer p-4 text-lg font-normal text-white"
        >
          {username?.split("@")[0] ?? "Guest"}
          {showSubMenu && <Menu menuItems={['Account', 'Subscription', 'Logout']} />}
        </p>
      </div>

      {/* <button
          className="text-white  self-center text-sm"
          onClick={() => window.open(loginUrl).focus()}
        >
          Login
        </button> */}
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
