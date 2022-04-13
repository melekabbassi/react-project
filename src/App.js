import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import MovieCard from './components/movieCard'
import Form from './components/Form'
import Home from './components/Home'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  const [movies, setMovies] = useState([])
  function addMovie(title, year, genre, poster) {
    const newMovie = {
      title: title,
      year: year,
      genre: genre,
      poster: poster,
  };
  setMovies(movies.concat(newMovie));
  }

  return (  
    <Router>
    <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home movies={movies} />
          </Route>
          <Route path="/newMovie" component={Form}>
            <Form addMovie={addMovie} />
          </Route> 
        </Switch>
    </div>    
    </Router>
  );
}

export default App;
