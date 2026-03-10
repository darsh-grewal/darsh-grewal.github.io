import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';

import bondAlloy1 from '../../assets/projects/bond_alloy_1.png';
import bondAlloy2 from '../../assets/projects/bond_alloy_2.png';
import aluminum1 from '../../assets/projects/ultra_high_strength_aluminum_1.png';
import aluminum2 from '../../assets/projects/ultra_high_strength_aluminum_2.png';
import naval1 from '../../assets/projects/naval_hull_steel_1.png';
import naval2 from '../../assets/projects/naval_hull_steel_2.png';
import paper1 from '../../assets/projects/paper_metal_composite_1.png';
import paper2 from '../../assets/projects/paper_metal_composites_2.png';

const projects = [
    {
        title: 'Bond Alloy for Apple Devices',
        for: 'MIT x Apple Inc.',
        acknowledgements: 'Dr. Owain Houghton, Prof. Greg Olson, Mahmudul Islam',
        description: 'Aluminum 6063 is ideal for device exteriors, while Mg AZ91D is well suited for internal structural components where weight reduction is critical. However, these alloys are notoriously incompatible: when joined directly, they form brittle Al–Mg intermetallics at the interface that compromise structural integrity. Our team designed a lightweight, laser-bond alloy that enables reliable joining between 6063 and AZ91D by suppressing intermetallic formation and preserving the toughness of both base materials. Apple is now continuing to iterate on and refine this alloy system as part of ongoing material development.',
        skills: ['CalPhaD', 'ICME', 'Materials Design', 'Metallurgy', 'TC-Python'],
        images: [bondAlloy1, bondAlloy2],
        links: [{ type: 'github', url: 'https://github.com/darsh-grewal/AlloyDesignWork' }],
    },
    {
        title: 'Designing an Ultra High Strength Aluminum Alloy',
        for: 'MIT x DSO Singapore',
        acknowledgements: 'Dr. Margianna Tzini, Prof. Greg Olson, Louise Anderfaas',
        description: 'DSO required an aluminum alloy with extreme strength-to-weight performance for defense applications. We designed a new alloy system by coupling thermodynamic modeling with microstructure optimization to achieve high strength without sacrificing manufacturability. This design won first place in the national undergraduate materials design competition hosted by ASM-International.',
        skills: ['CalPhaD', 'ICME', 'Materials Design', 'Metallurgy', 'DFT'],
        images: [aluminum1, aluminum2],
        links: [{ type: 'news', url: 'https://news.mit.edu/2024/mit-students-win-materials-design-competition-0208' }],
    },
    {
        title: 'Optimizing Heat Treatment for Naval Hull Steel',
        for: 'MIT x US Navy',
        acknowledgements: 'Prof. Greg Olson, Cole Kuehmann',
        description: 'Naval steels must balance strength and fracture toughness under harsh loading, but existing heat schedules underperformed. For my senior thesis, I developed optimized heat-treatment pathways that improve microstructural stability and enhance hull durability.',
        skills: ['Heat Treatment for Metals', 'Charpy Testing', 'Hardness Testing'],
        images: [naval1, naval2],
    },
    {
        title: 'Paper-Metal Composites (B.S. Capstone)',
        for: 'Undergraduate Capstone',
        acknowledgements: 'Kimberely Cheng, Sravani Duggirala, Ally Darnton',
        description: 'Paper-metal composites have potential applications in soft robotics, flexible electronics, and fashion-tech. As a part of our undergraduate capstone course, my team created paper–metal composites with liquid metals to create a conductive paper.',
        skills: [],
        images: [paper1, paper2],
    },
];

const Metallurgy = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Metals & Materials
            </motion.h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '40px' }}>
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>
        </div>
    );
};

export default Metallurgy;
