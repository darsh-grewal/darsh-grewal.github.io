import React from 'react';
import { Link } from 'react-router-dom';

const Productive = () => {
    return (
        <div className="container" style={{ paddingTop: '120px' }}>
            <h1>Productive Work</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
                <Link to="/productive/metallurgy" className="card">
                    <h2>Metallurgy</h2>
                    <p>Explore my work in metallurgy.</p>
                </Link>
                <Link to="/productive/simulation" className="card">
                    <h2>Simulation</h2>
                    <p>View my simulation projects.</p>
                </Link>
                <Link to="/productive/neurotech" className="card">
                    <h2>Neurotech</h2>
                    <p>Discover my neurotech research.</p>
                </Link>
                <Link to="/productive/sustainability" className="card">
                    <h2>Sustainability</h2>
                    <p>See my sustainability initiatives.</p>
                </Link>
            </div>
        </div>
    );
};

export default Productive;
