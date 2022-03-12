import React from 'react'

const NavBar = () => {
  return (
    <div>
        <img className="logo" src="" alt="logo" />
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