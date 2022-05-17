import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import { useState, useEffect } from "react";
import { isExpired, decodeToken } from "react-jwt";
import { setStoredToken, getStoredToken } from "./Utilities";
import FetchVideo from "./FetchVideo";

function App() {
  const [username, setUsername] = useState("");
  const domain = window.location.href;
  const loginUrl = `https://netflix.auth.ap-south-1.amazoncognito.com/login?client_id=2v4q07qaad1jlugonm96akg1nk&response_type=token&scope=email+openid&redirect_uri=${encodeURIComponent(
    domain
  )}callback`;

  function getTokenFromCallbackUrl() {
    try {
      const url = window.location.href;
      // const access_token = url.match(/(access_token)\=([\S\s]*?)\&/)[2];
      const access_token = window.location.href
        .match(/(access_token)\=([\S\s]*?)\&/)[0]
        .split("=")[1]
        .split("&")[0];
      //const myDecodedToken = decodeToken(pathname[1]);
      //console.log(pathname);
      //setStoredToken(myDecodedToken);
      setStoredToken(access_token);
      console.log(access_token);
      return access_token;
    } catch (err) {
      return null;
    }
  }

  useEffect(() => {
    // if (isExpired(getToken())) {
    //   window.open(loginUrl, "_self");
    // }

    if (getStoredToken() === null && getTokenFromCallbackUrl() === null) {
      window.open(loginUrl, "_self");
      console.log("token is null");
      setUsername("No User was found");
    } else {
      setUsername("hello");
      // if (getTokenFromCallbackUrl() !== null) {
      //   console.log(domain.split("callback")[0]);
      //   window.open(domain.split("callback")[0], "_self");
      // }
    }
    return () => {};
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      <FetchVideo />
      <h1 className="text-white text-lg">Hello, {username}</h1>
      {/* <MovieList /> */}
    </div>
  );
}

export default App;
