import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="home">
            <motion.div className="name" initial={{x: -300, scale: 0.5}} animate={{x: 0, scale: 1}} transition={{duration: 1}}>
            <font>Hafidz</font> Radhival</motion.div>
            <motion.div className="desc" initial={{x: -300, scale: 0.5}} animate={{x: 0, scale: 1}} transition={{duration: 1}}>
            I am Learn <font>Web Developer, Game Developer, Android Developer, IT Support</font></motion.div>
        </div>
    );
};

export default Home;