import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";

export default function HomeScreen() {
  return (
    <div className="">
      <Navbar />
      <MovieList category="Trending" />
      <MovieList category="New Releases" />
      {/* <MovieList category="Trending" />
      <MovieList category="New Releases" />
      <MovieList category="Trending" />
      <MovieList category="New Releases" />
      <MovieList category="Trending" />
      <MovieList category="New Releases" /> */}
      <Footer />
    </div>
  );
}
