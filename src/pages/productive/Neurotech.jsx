import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';

import eog1 from '../../assets/projects/EOG_1.png';

const projects = [
    {
        title: 'Playing Video Games Using Eye-Tracking with EOG',
        for: 'Neurobionics Lab, University of Melbourne',
        acknowledgements: 'Prof. Sam John',
        description: 'Users with limited mobility needed a low-cost, intuitive control interface. We built an EOG-based system that converts eye-movement signals into commands for video games (such as SNAKE) and robotic manipulators. We hope this can eventually be used for cursor control through eye-tracking.',
        skills: [],
        images: [eog1],
        links: [
            { type: 'github', url: 'https://github.com/darsh-grewal/EOG' },
            { type: 'news', url: 'https://misti.mit.edu/darshdeep-nz' },
        ],
    },
];

const Neurotech = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Neurotech
            </motion.h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '40px' }}>
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>
        </div>
    );
};

export default Neurotech;
