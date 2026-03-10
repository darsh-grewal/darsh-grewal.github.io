import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpeg';

const Home = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            {/* Top row: name left, photo right */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '60px', marginBottom: '48px' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '4rem', fontWeight: '800', margin: 0, flex: '1 1 0' }}
                >
                    Hi, I'm <span style={{ color: 'var(--color-paint-1)' }}>Darsh</span>.
                </motion.h1>

                <motion.img
                    src={profilePic}
                    alt="Darsh"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    style={{
                        width: '360px',
                        height: '360px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        flexShrink: 0,
                        boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                    }}
                />
            </div>

            {/* Quote at the bottom */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ fontSize: '0.95rem', lineHeight: '1.8', fontStyle: 'italic', color: '#666', maxWidth: '780px', margin: 0 }}
            >
                "I found that the earliest evidence of knowledge of the nature and behavior of metals was provided by objects in art museums. Slowly I came to see that this was not a coincidence but a consequence of the very nature of discovery, for discovery derives from aesthetically motivated curiosity and is rarely a result of practical purposefulness."
                <br />
                <span style={{ fontStyle: 'normal', fontWeight: 600, fontSize: '0.88rem', color: '#888' }}>— Cyril Stanley Smith</span>
            </motion.p>
        </div>
    );
};

export default Home;
