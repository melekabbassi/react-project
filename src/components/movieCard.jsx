import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MovieCard() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div transition={{layout: { duration: 1.5, type: "spring"}}} layout="position" className="movieCard" onClick={() => setIsOpen(!isOpen)} >
      <motion.h2>Framer Motion</motion.h2>
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