import React from 'react';
import { Link } from 'react-router-dom';
import bhangra from '../assets/projects/Bhangra.png';
import dj from '../assets/projects/DJ.png';

const Creative = () => {
    return (
        <div className="container" style={{ paddingTop: '120px' }}>
            <h1>Creative Pursuits</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
                <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <img src={bhangra} alt="Bhangra" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: '20px' }}>
                        <h2>Bhangra</h2>
                        <p>Check out my dance performances.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                            {[
                                { title: 'Maryland Mauj 2025', url: 'https://youtu.be/pWQ0spOP0Wg?si=sPTtrUNKNxA5sM5R' },
                                { title: 'Dhamaka Tamasha 2025', url: 'https://youtu.be/7yYSivVnvfs?si=XAUfwccuV099wZVc' },
                                { title: 'Footwork XVII', url: 'https://youtu.be/2X7g0SYiMcw?si=hszeJI2UxgFPoex8' },
                            ].map(({ title, url }) => (
                                <a
                                    key={title}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'block',
                                        padding: '10px 16px',
                                        borderRadius: '10px',
                                        background: 'rgba(255, 0, 85, 0.06)',
                                        color: 'var(--color-paint-1)',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                        transition: 'background 0.2s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 0, 85, 0.14)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 0, 85, 0.06)'}
                                >
                                    ▶ {title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <img src={dj} alt="DJ" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: '20px' }}>
                        <h2>DJ</h2>
                        <p>Listen to my mixes.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                            {[
                                { title: 'Xenia (House Mix)', url: 'https://soundcloud.com/darsh-grewal-154163084/xenia-house-mix' },
                                { title: 'Ubuntu (Amapiano Mix)', url: 'https://soundcloud.com/darsh-grewal-154163084/amapiano-mix' },
                                { title: 'House Tikka Masala (Indo-House)', url: 'https://soundcloud.com/darsh-grewal-154163084/house-tikka-masala' },
                            ].map(({ title, url }) => (
                                <a
                                    key={title}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'block',
                                        padding: '10px 16px',
                                        borderRadius: '10px',
                                        background: 'rgba(255, 0, 85, 0.06)',
                                        color: 'var(--color-paint-1)',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                        transition: 'background 0.2s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 0, 85, 0.14)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 0, 85, 0.06)'}
                                >
                                    ▶ {title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Creative;
