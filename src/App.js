import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './components/NavBar';
import MovieCard from './components/movieCard'
import Home from './components/Home'
import Form from './components/Form'


function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const addMovie = (title, description, genre, image) => {
    const newMovie = {
      title: title,
      description: description,
      genre: genre,
      image: image
    }
    setMovies(movies.concat(newMovie))
  }

  return (  
    <Router>
    <div className="navBar">
      <NavBar />
      <Switch>
      <Route exact path="/">
        <Home movies={movies}/>
      </Route>

      <Route path="/Favourite" />

      <Route path="/newMovie" component={Form}>
        <Form addMovie={addMovie}/>
      </Route>        
     </Switch>
    </div> 

    <div className= "App">  
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      
      <div>  
        <Form />
      </div> 
    
    </Router>
);
}

export default App;
