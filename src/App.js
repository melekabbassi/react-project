import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import MovieCard from './components/movieCard'
import Form from './components/Form'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (  
    <Router>
    <div className="App">
        <NavBar />
    </div>    
      
    <Form />
  

    </Router>
    
  );
}

export default App;
