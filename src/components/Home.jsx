import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Home = (props) => {
    console.log(props)

    const [isOpen, setIsOpen] = useState(false);  
  
    //show movie details
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  return props.movies.map((movie) => (
    
    <motion.div transition={{layout: { duration: 1.5, type: "spring"}}} layout="position" className="movieCard" onClick={handleClick} >
        <motion.h3>{movie.author}</motion.h3>
        {isOpen && 
        <motion.div className="expand">
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            <p>{movie.genre}</p>
        </motion.div>}
    </motion.div>
    ))
}

export default Home