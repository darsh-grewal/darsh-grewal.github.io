import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';

import metalCoord1 from '../../assets/projects/metal_coordinate_bonds_1.png';
import metalCoord2 from '../../assets/projects/metal_coordinate_bonds_2.png';
import bandStructures1 from '../../assets/projects/band_structures_1.png';
import bandStructures2 from '../../assets/projects/band_structures_2.png';
import thermalCoating1 from '../../assets/projects/thermal_barrier_coating_1.png';
import voxelAutoencoder1 from '../../assets/projects/voxel_autoencoder_1.png';

const projects = [
    {
        title: 'Metal-Coordination Bonds Responding to Shear Forces',
        for: 'MIT Lab for Atomistic and Molecular Mechanics',
        acknowledgements: 'Dr. Eesha Khare, Prof. Markus Buehler',
        description: 'Bioinspired coordination bonds can dissipate mechanical energy, but their atomistic response — especially coordination between bonds under shear — was poorly understood. We used first-principles MD simulations of various ensembles of metal-coordinate bonds to reveal force–extension behavior and rupture forces. The results indicate increased collective shear strength in metal-coordinate bonds.',
        skills: ['Molecular Dynamics (LAMMPS, CHARMM)', 'Python'],
        images: [metalCoord1, metalCoord2],
        links: [{ type: 'paper', url: 'https://pubs.rsc.org/en/content/articlepdf/2023/NR/D3NR01287E' }],
    },
    {
        title: 'Band Structures of 2D Materials via Deep-Learned Tight-Binding Models',
        for: 'Mostofi Group, Imperial College London',
        acknowledgements: 'Prof. Arash Mostofi',
        description: 'DFT is too slow for large-scale exploration of 2D electronic materials. I implemented and benchmarked ML-enhanced tight-binding models to generate accurate band structures at orders-of-magnitude lower computation cost.',
        skills: ['DFT (Siesta, OpenMX, DeepH)', 'Shell'],
        images: [bandStructures1, bandStructures2],
    },
    {
        title: 'Decision Tree Model for Coating Degradation in Jet Engines',
        for: 'Questek Innovations LLC',
        acknowledgements: 'Dr. Amit Behra, Dr. Noriaki Arai',
        description: 'Coating failures in jet engines stem from complex metallurgical interactions that were difficult to diagnose. As a part of my internship, I built an interpretable decision-tree model that pinpointed key degradation drivers and guided redesign. Additionally, I conducted metallography analysis on 3D-printable alloys designed for O-Rings in NASA\'s rockets.',
        skills: [],
        images: [thermalCoating1],
    },
    {
        title: 'Autoencoder for STL Files (Decoded as Voxels)',
        for: 'MIT 1.052',
        acknowledgements: 'Rishi Komalapati',
        description: 'Engineering geometry datasets are hard to compress and compare at scale. We built an autoencoder (3D CNN) that encodes STL meshes into latent vectors and reconstructs them as voxels for shape analysis.',
        skills: [],
        images: [voxelAutoencoder1],
        links: [{ type: 'github', url: 'https://github.com/darsh-grewal/STL-Voxel-VAE' }],
    },
];

const Simulation = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Simulation & Data Science
            </motion.h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '40px' }}>
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>
        </div>
    );
};

export default Simulation;
