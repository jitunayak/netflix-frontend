import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    isUserIsAuthenticated();
  });

  return (
    <div className="mx-4">
      <Navbar username={userName} />
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
  );
}

export default HomeScreen;
