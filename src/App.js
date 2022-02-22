import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieDetails from "./movies/MovieDetails";
import MovieList from "./movies/MovieList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MovieList />}></Route>
          <Route path="/movie-details/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
