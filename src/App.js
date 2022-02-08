import { useState } from 'react';
import './App.css';
import Tweet from "./Tweet"
import Button from "@mui/material/Button"

function App() {
  
  const [users, setUser] = useState([
    {name: 'Melek', message:'Hello'},
    {name: "Octo", message:"Hello Back"},
    {name: "Octopus", message:"AAAA"}
  ])

  return (
    <div className= "App">  
      {users.map(user=>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
