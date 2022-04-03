import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
import NavBar from './components/NavBar';
import MovieCard from './components/movieCard'

function App() {

 /*  // our state hook
   const [movies, setMovies] = useState([])

   useEffect(() => {
     console.log('effect')
     axios
       .get('http://localhost:3001/movies')
       .then(response => {
         console.log('promise fulfilled')
         setMovies(response.data)
       })
   }, [])
    console.log('render', movies.length, 'movies')

    const hook = () => {
      axios.get('http://localhost:3001/movies')
      .then(response => {
        setMovies(response.data)
      })
    }
    useEffect(hook, [])

const express = require('express')
const app = express()

let movie = [
  {
    id: 1,
    title: 'Harry Potter',
    year: 2001,
    rating: 4.5
  },
  {
    id: 2,
    title: 'The Dark Knight',
    year: 2008,
    rating: 4.5
  },

  {
    id: 3,
    title: 'Inception',
    year: 2010,
    rating: 4.5
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Movies</h1>')
})

app.get('/api/people', (request, response) => {
  response.json(movie)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})*/


  return (  
    <div className="navBar">
      <NavBar />
      <div className= "App">  
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div> 
  );
}

export default App;
