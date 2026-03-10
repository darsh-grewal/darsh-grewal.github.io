import React from 'react';
import { motion } from 'framer-motion';

const contacts = [
    {
        label: 'Email',
        display: 'darshsgrewal@gmail.com',
        href: 'mailto:darshsgrewal@gmail.com',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2,4 12,13 22,4" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        display: 'darshgrewal',
        href: 'https://www.linkedin.com/in/darshgrewal/',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="4" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.5" />
                <path d="M12 16v-5M12 11a3 3 0 0 1 6 0v5" />
            </svg>
        ),
    },
];

const Contact = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contact Me
            </motion.h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px', maxWidth: '480px' }}>
                {contacts.map(({ label, display, href, icon }, i) => (
                    <motion.a
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="card"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            textDecoration: 'none',
                            color: 'var(--color-text)',
                            padding: '20px 24px',
                        }}
                    >
                        <span style={{ color: 'var(--color-paint-1)' }}>{icon}</span>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
                            <div style={{ fontWeight: 600 }}>{display}</div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Contact;
