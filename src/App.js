import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import MovieCard from './components/movieCard'
import Form from './components/Form'

function App() {

  return (  
    <div className="navBar">
      <NavBar />
      <div className= "App">  
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      {/* <div>  
        <Form />
      </div> */}
    </div> 
  );
}

export default App;
