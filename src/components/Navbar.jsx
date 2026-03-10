import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" />
        <polyline points="9 21 9 12 15 12 15 21" />
    </svg>
);

const HamburgerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const navLinks = [
    { to: '/metallurgy', label: 'Metallurgy' },
    { to: '/simulation', label: 'Simulation' },
    { to: '/neurotech', label: 'Neurotech' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/creative', label: 'Creative' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <Link to="/" onClick={closeMenu} style={{ color: 'var(--color-text)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <HomeIcon />
            </Link>

            {/* Desktop links */}
            <div className="navbar-links">
                {navLinks.map(({ to, label }) => (
                    <Link key={to} to={to} className="navbar-link">{label}</Link>
                ))}
                <Link to="/contact" className="btn navbar-link" style={{ background: 'var(--color-text)', color: 'white' }}>Contact</Link>
            </div>

            {/* Hamburger button (mobile only) */}
            <button className="navbar-hamburger" onClick={() => setMenuOpen(prev => !prev)} aria-label="Toggle menu">
                {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>

            {/* Mobile dropdown menu */}
            <div className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`}>
                {navLinks.map(({ to, label }) => (
                    <Link key={to} to={to} className="navbar-mobile-link" onClick={closeMenu}>{label}</Link>
                ))}
                <Link to="/contact" className="navbar-mobile-link" onClick={closeMenu} style={{ color: 'var(--color-paint-1)', fontWeight: 700 }}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
