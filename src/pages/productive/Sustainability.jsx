import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';

import supercapacitor1 from '../../assets/projects/supercapacitor_1.png';
import supercapacitor2 from '../../assets/projects/supercapacitor_2.png';
import mongolia1 from '../../assets/projects/Mongolia_1.png';
import mongolia2 from '../../assets/projects/Mongolia_2.png';
import mongolia3 from '../../assets/projects/Mongolia_3.png';

const projects = [
    {
        title: 'Supercapacitor from Conductive Concrete',
        for: 'MIT EC³',
        acknowledgements: 'Dr. Damian Stefaniuk, Prof. Admir Masic, Prof. Franz Ulm',
        description: 'What if the wall inside your home was also a battery? By using MIT EC³\'s proprietary conductive concrete, I helped design pillars that can be used as a supercapacitor for energy storage. I applied my materials science knowledge to optimize electrolyte containment, select a corrosion-free conduction layer, and test shrinkage in the concrete. I also found that mixing and pouring concrete for hours can be meditative.',
        skills: [],
        images: [supercapacitor1, supercapacitor2],
    },
    {
        title: 'Modeling Thermal Batteries for Heat Storage in Mongolia',
        for: 'MIT NEET',
        acknowledgements: 'Dr. Nathan Melenbrink, Dr. Mike Short',
        description: 'Rural Mongolian communities require reliable heat storage to survive extreme winters. We modeled phase-change thermal batteries to evaluate efficiency, stability, and system design for off-grid deployment. I got to go to Mongolia to test these out!',
        skills: [],
        images: [mongolia1, mongolia2, mongolia3],
        links: [{ type: 'news', url: 'https://neet.mit.edu/power-the-future-article' }],
    },
];

const Sustainability = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Sustainability
            </motion.h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '40px' }}>
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>
        </div>
    );
};

export default Sustainability;
