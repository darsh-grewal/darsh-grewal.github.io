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
    {
        label: 'GitHub',
        display: 'darsh-grewal',
        href: 'https://github.com/darsh-grewal',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.36-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.8c.85.004 1.7.115 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.69.92.69 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
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
            {/* Quote */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ fontSize: '0.95rem', lineHeight: '1.8', fontStyle: 'italic', color: '#666', maxWidth: '640px', marginTop: '60px' }}
            >
                "I found that the earliest evidence of knowledge of the nature and behavior of metals was provided by objects in art museums. Slowly I came to see that this was not a coincidence but a consequence of the very nature of discovery, for discovery derives from aesthetically motivated curiosity and is rarely a result of practical purposefulness."
                <br />
                <span style={{ fontStyle: 'normal', fontWeight: 600, fontSize: '0.88rem', color: '#888' }}>— Cyril Stanley Smith</span>
            </motion.p>
        </div>
    );
};

export default Contact;
