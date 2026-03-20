import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpeg';

const Home = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            {/* Top row: name left, photo right */}
            <div className="home-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="home-h1"
                >
                    Hi, I'm <span style={{ color: 'var(--color-paint-1)' }}>Darsh</span>.
                </motion.h1>

                <motion.img
                    src={profilePic}
                    alt="Darsh"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="home-profile-img"
                />
            </div>

            {/* Blurb */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text)', maxWidth: '680px', margin: '32px 0 0 0' }}
            >
                I'm an MIT trained materials engineer with experience in alloy design, DFT, and MD. Currently looking for roles at the intersection of{' '}
                <span style={{ color: 'var(--color-paint-1)', fontWeight: 600 }}>data science</span> and{' '}
                <span style={{ color: 'var(--color-paint-1)', fontWeight: 600 }}>materials science</span>.
                Think computational modeling, ML for materials discovery, or anything that bridges atoms and bits.
            </motion.p>

            {/* Nudge to projects */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                style={{ fontSize: '0.95rem', color: '#888', marginTop: '20px' }}
            >
                👆 Check out my projects in the menu up top!
            </motion.p>
        </div>
    );
};

export default Home;
