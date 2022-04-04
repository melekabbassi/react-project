import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function MovieCard() {

  const [isOpen, setIsOpen] = useState(false);

  const axios = require("axios");

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://movie-database-alternative.p.rapidapi.com/',
        {
          params: {
            s: 'Avengers Endgame',
            r: 'json',
            page: '1'
          },
          headers: {
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
            'X-RapidAPI-Key': 'f0b37ab954mshfc4a8677f14d73ap1d970ejsn10304caf731e'
          }
        }
      )
      .then(response => {
        setData(response.data.Search);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  //show movie details
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  //close movie details
  const handleClose = () => {
    setIsOpen(false);
  };
  //render movie details
  const renderMovieDetails = () => {
    const { Title, Year, imdbID, Type, Poster } = data;
    console.log(data);
  };




  return (
    <motion.div transition={{layout: { duration: 1.5, type: "spring"}}} layout="position" className="movieCard" onClick={() => setIsOpen(!isOpen)} >
      <motion.h2>{data.Title}</motion.h2>
      {isOpen && 
      <motion.div className="expand">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptatum vel quidem quas officiis nihil deleniti sit eligendi ipsum corporis quaerat, 
          excepturi perspiciatis placeat possimus dolore ratione aspernatur et maiores! Quae!
        </p>
        <p layout>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, delectus!</p>
      </motion.div>}
    </motion.div>
  );
}