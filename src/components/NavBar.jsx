import React from 'react'
import popcorn from '../media/popcorn.svg'

const NavBar = () => {
  return (
    <div className="headerNav">
          <img className="logo" src={popcorn} alt="logo" />
        <nav>
            <ul className="navLinks">
                <li><a href="Movies">Movies</a></li>
                <li><a href="TVShows">TV Shows</a></li>
                <li><a href="aboutUs">About</a></li>
            </ul>
        </nav>
          <input className="search" type="text" placeholder="Search" />
    </div>
  )
}

export default NavBar