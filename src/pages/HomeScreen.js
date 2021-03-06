import { Auth } from "aws-amplify";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";

function HomeScreen() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const isUserIsAuthenticated = async () => {
    try {
      const currentSession = await Auth.currentAuthenticatedUser();
      setUserName(currentSession.attributes.email.split("@")[0]);
      return currentSession;
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    isUserIsAuthenticated();
  });

  return (
    <>
      <Navbar username={userName} />
      <Banner />
      <div className="lg:mx-8">
        <MovieList category="Trending Now" />
        <MovieList category="New Releases" />
        <MovieList category="Only On Netflix" />
        <MovieList category="High Scholl TV Teem Dramas" />
        <MovieList category="Popular on Netflix" />
        <MovieList category="New Releases" />
        <MovieList category="English Movies" />
        <MovieList category="US TV Dramas" />
        <Footer />
      </div>
    </>
  );
}

export default HomeScreen;
