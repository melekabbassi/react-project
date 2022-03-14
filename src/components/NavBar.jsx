import React from 'react'
import popcorn from '../media/popcorn.svg'

const NavBar = () => {
  return (
    <div className="headerNav">
        <img className="logo" src={popcorn} alt="logo" />
        <nav>
            <ul className="navLinks">
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar