import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 0 }, // start off-screen left
  animate: { opacity: 1, y: 0 }, // center screen
  exit: { opacity: 0, x: 100 }, // exit off-screen right
};

const AnimatedPages = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }} // control speed
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPages;
