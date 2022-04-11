import React from 'react'
import popcorn from '../media/popcorn.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="headerNav">
          <Link to="/"><img className="logo" src={popcorn} alt="logo" /></Link>
        <nav>
            <ul className="navLinks">
                <li><Link to="/">Movies</Link></li>
                <li><Link to="/favourite">Favourite</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar