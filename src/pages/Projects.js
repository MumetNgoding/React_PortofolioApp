import React from 'react';
import { Card } from 'react-bootstrap';
import project1 from "../images/1.jpg"
import project2 from "../images/2.jpg"
import { motion } from 'framer-motion';


const Projects = () => {
    const ProjectList = [
    {
        id: 1,
        name: "Create App Android",
        imageUrl: project1,
    },
    {
        id: 2,
        name: "Create App Android",
        imageUrl: project2,
    },
    {
        id: 3,
        name: "Create App Android",
        imageUrl: project1,
    },
    {
        id: 4,
        name: "Create App Android",
        imageUrl: project2,
    },
    {
        id: 5,
        name: "Create App Android",
        imageUrl: project1,
    },
    {
        id: 6,
        name: "Create App Android",
        imageUrl: project2
    },
    ];
    return (
        <motion.div className="projects" 
        animate={{
            scale:[2,1],
            rotate:[90]
        }}
        transition={{
            duration: 0.5,
            ease: "easeInOut",
        }}
        >
            <h2>Projects</h2>
            <div className="wrapper">
                {ProjectList.map((item) => {
                    return (
                    <motion.div key={item.id} whileHover={{
                        scale:1.1,
                        transition: {duration: 0.5},
                    }}
                    key={item.id}>
                        <Card>
                            <Card.Img variant="top" src={item.imageUrl}/>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </motion.div>
                )
                })}
            </div>

        </motion.div>
    );
};

export default Projects;