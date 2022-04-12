import React from 'react'
import popcorn from '../media/popcorn.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="headerNav">
        <img className="logo" src={popcorn} alt="logo" />
        <nav>
            <ul className="navLinks">
                <li><a href="Home">Home</a></li>
                <li><a href="Favorites">Favorites</a></li>
                <li><a href="Form">Form</a></li>
                {/* <li><Link to='/' style={{textDecoration: 'none'}}>Home</Link></li>
                <li><Link to='/Favorites' style={{textDecoration: 'none'}}>Favorites</Link></li>
                <li><Link to='/newMovie' style={{textDecoration: 'none'}}>New Movie</Link></li> */}
            </ul>
        </nav>
          <input className="search" type="text" placeholder="Search" />
    </div>
  )
}

export default NavBar