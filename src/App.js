import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import ScrollImages from "./components/ScrollImages";
import { useState, useEffect } from "react";
import { isExpired, decodeToken } from "react-jwt";
import { setStoredToken, getStoredToken } from "./Utilities";

function App() {
  const [username, setUsername] = useState("");
  const domain = window.location.href;
  const loginUrl = `https://netflix.auth.ap-south-1.amazoncognito.com/login?client_id=2v4q07qaad1jlugonm96akg1nk&response_type=token&scope=email+openid&redirect_uri=${encodeURIComponent(
    domain
  )}callback`;

  const currentDomain = encodeURIComponent(window.location.href);

  function getTokenFromCallbackUrl() {
    try {
      const pathname = window.location.href.split("=");
      const myDecodedToken = decodeToken(pathname[1]);
      setStoredToken(myDecodedToken);
      return myDecodedToken;
    } catch (err) {
      return null;
    }
  }

  useEffect(() => {
    // if (isExpired(getToken())) {
    //   window.open(loginUrl, "_self");
    // }

    //https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-browser-credentials-cognito.html

    if (getStoredToken() === null && getTokenFromCallbackUrl() === null) {
      window.open(loginUrl, "_self");
      console.log("token is null");
      setUsername("No User was found");
    } else {
      setUsername(getStoredToken().email);
      if (getTokenFromCallbackUrl() !== null) {
        console.log(domain.split("callback")[0]);
        window.open(domain.split("callback")[0], "_self");
      }
    }
    return () => {};
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      <h1 className="text-white text-lg">Hello, {username}</h1>
      <MovieList />
    </div>
  );
}

export default App;
