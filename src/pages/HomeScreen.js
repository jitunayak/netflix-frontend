import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";

export default function HomeScreen() {
  return (
    <div className="mx-4">
      <Navbar />
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
