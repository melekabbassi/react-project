import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MovieCard() {

  const [isOpen, setIsOpen] = useState(false);  

  //show movie details
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <div>
      
    </div>
  );
}