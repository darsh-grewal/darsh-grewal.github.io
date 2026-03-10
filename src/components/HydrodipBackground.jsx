import React from 'react';
import { motion } from 'framer-motion';

const HydrodipBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            pointerEvents: 'none'
        }}>
            {/* Paint Blob 1 - Pink */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 20, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'var(--color-paint-1)',
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                    opacity: 0.1,
                    filter: 'blur(60px)'
                }}
            />

            {/* Paint Blob 2 - Cyan */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                    rotate: [0, -30, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '700px',
                    height: '700px',
                    background: 'var(--color-paint-2)',
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                    opacity: 0.1,
                    filter: 'blur(80px)'
                }}
            />

            {/* Paint Blob 3 - Yellow */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '30%',
                    width: '400px',
                    height: '400px',
                    background: 'var(--color-paint-3)',
                    borderRadius: '50%',
                    opacity: 0.08,
                    filter: 'blur(50px)'
                }}
            />
        </div>
    );
};

export default HydrodipBackground;
