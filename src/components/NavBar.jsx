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
        <a className="btn" href="#"><button>Contact</button></a>
    </div>
  )
}

export default NavBar