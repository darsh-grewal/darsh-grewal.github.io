import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GitHubIcon = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
);

const PaperIcon = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
);

const NewsIcon = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a4 4 0 0 1-4-4V6"/>
        <line x1="9" y1="7" x2="15" y2="7"/>
        <line x1="9" y1="11" x2="15" y2="11"/>
        <line x1="9" y1="15" x2="12" y2="15"/>
    </svg>
);

const ICONS = { github: GitHubIcon, paper: PaperIcon, news: NewsIcon };
const TOOLTIPS = { github: 'GitHub', paper: 'Paper', news: 'Article' };

const ImageCarousel = ({ images, title }) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (images.length < 2) return;
        const timer = setInterval(() => {
            setDirection(1);
            setIndex(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const goTo = (i) => {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
    };

    if (images.length === 1) {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                background: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}>
                <img
                    src={images[0]}
                    alt={title}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                />
            </div>
        );
    }

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                    key={index}
                    src={images[index]}
                    alt={`${title} ${index + 1}`}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.4 }}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
                />
            </AnimatePresence>
            <div style={{
                position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: '6px', zIndex: 2,
            }}>
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        style={{
                            width: i === index ? '20px' : '8px', height: '8px', borderRadius: '4px',
                            border: 'none', background: i === index ? 'white' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer', padding: 0, transition: 'width 0.3s ease, background 0.3s ease',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            style={{ display: 'flex', gap: '28px', alignItems: 'stretch' }}
        >
            {/* Text */}
            <div style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ margin: '0 0 4px' }}>{project.title}</h2>
                <p style={{ margin: '0 0 12px', fontWeight: 600, color: '#555', fontSize: '0.95rem' }}>
                    {project.for}
                </p>
                <p style={{ margin: '0 0 16px', lineHeight: 1.7 }}>{project.description}</p>
                {project.skills.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                        {project.skills.map(skill => (
                            <span key={skill} style={{
                                background: 'rgba(255, 0, 85, 0.08)',
                                color: 'var(--color-paint-1)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
                <p style={{ margin: '0 0 0', fontSize: '0.82rem', color: '#888' }}>
                    With thanks to: {project.acknowledgements}
                </p>
                {project.links && project.links.length > 0 && (
                    <div style={{ display: 'flex', gap: '14px', marginTop: 'auto', paddingTop: '16px' }}>
                        {project.links.map(({ type, url }) => {
                            const Icon = ICONS[type];
                            return (
                                <a
                                    key={url}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={TOOLTIPS[type]}
                                    style={{ color: '#555', display: 'flex', alignItems: 'center', transition: 'color 0.2s ease' }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-paint-1)'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#555'}
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Image(s) */}
            {project.images && project.images.length > 0 && (
                <div style={{ flex: '0 0 340px', height: '240px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                    <ImageCarousel images={project.images} title={project.title} />
                </div>
            )}
        </motion.div>
    );
};

export default ProjectCard;
