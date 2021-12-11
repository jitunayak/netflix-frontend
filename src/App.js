import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import ScrollImages from "./components/ScrollImages";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
