import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './components/Bar'
import MovieCard from './components/movieCard'

function App() {
  return (  
    <div className="searchBar">
      <SearchBar />
      
    <div className= "App">  
    
    <MovieCard />
    <MovieCard />
    <MovieCard />
    
    </div>
    </div> 
  );
}

export default App;
