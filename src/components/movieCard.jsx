import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MovieCard() {

  const [isOpen, setIsOpen] = useState(false);  

  //show movie details
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //play movie trailer
  const handlePlay = () => {
    const trailer = document.getElementById('trailer');
    trailer.play();
  };

 
  return (
    <motion.div transition={{layout: { duration: 1.5, type: "spring"}}} layout="position" className="movieCard" onClick={handleClick} >
      <motion.h2>Framer Motion</motion.h2>
      {isOpen && 
      <motion.div className="expand">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam alias incidunt expedita deleniti a qui, animi ea. Ratione vel assumenda neque laudantium dolor eum incidunt, tempore, rem, amet distinctio molestiae.
        </p>
      </motion.div>}
    </motion.div>
  );
}