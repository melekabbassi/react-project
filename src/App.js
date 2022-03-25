import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import MovieCard from './components/movieCard'

function App() {
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
