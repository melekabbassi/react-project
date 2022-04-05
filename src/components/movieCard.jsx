import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, updateStarCount} from "firebase/database";
import firebaseConfig from '../config';

export default function MovieCard() {

  const [isOpen, setIsOpen] = useState(false);  


  const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    
    const db = getDatabase();
    const starCountRef = ref(db, 'posts/' + db.postId + '/starCount');
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    //updateStarCount(db.postElement, data);
    }
    );

  //show movie details
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //play movie trailer
  const handlePlay = () => {
    const trailer = document.getElementById('trailer');
    trailer.play();
  };

  //get data from firebase
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const movieRef = ref(db, 'posts/' + db.postId);
    onValue(movieRef, (snapshot) => {
      const data = snapshot.val();
      setMovie(data);
    });
  }, []);

 
  return (
    <motion.div transition={{layout: { duration: 1.5, type: "spring"}}} layout="position" className="movieCard" onClick={handleClick} >
      <motion.h2>{movie.title}</motion.h2>
      {isOpen && 
      <motion.div className="expand">
        <motion.img src={movie.image} alt={movie.title} />
      </motion.div>}
    </motion.div>
  );
}