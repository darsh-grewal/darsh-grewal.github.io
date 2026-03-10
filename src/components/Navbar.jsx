import React from 'react';
import { Link } from 'react-router-dom';

const HomeIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" />
        <polyline points="9 21 9 12 15 12 15 21" />
    </svg>
);

const navLink = { textDecoration: 'none', color: 'var(--color-text)', fontWeight: '600' };

const Navbar = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 40px',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)'
        }}>
            <Link to="/" style={{ color: 'var(--color-text)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <HomeIcon />
            </Link>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <Link to="/metallurgy" style={navLink}>Metallurgy</Link>
                <Link to="/simulation" style={navLink}>Simulation</Link>
                <Link to="/neurotech" style={navLink}>Neurotech</Link>
                <Link to="/sustainability" style={navLink}>Sustainability</Link>
                <Link to="/creative" style={navLink}>Creative</Link>
                <Link to="/contact" className="btn" style={{ background: 'var(--color-text)', color: 'white', textDecoration: 'none' }}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
