import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HydrodipBackground from './components/HydrodipBackground';
import Home from './pages/Home';
import Metallurgy from './pages/productive/Metallurgy';
import Simulation from './pages/productive/Simulation';
import Neurotech from './pages/productive/Neurotech';
import Sustainability from './pages/productive/Sustainability';
import Creative from './pages/Creative';
import Bhangra from './pages/creative/Bhangra';
import DJ from './pages/creative/DJ';
import Written from './pages/creative/Written';
import Contact from './pages/Contact';
import Inspirations from './pages/Inspirations';

function App() {
    return (
        <Router>
            <div className="app-container">
                <HydrodipBackground />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/metallurgy" element={<Metallurgy />} />
                        <Route path="/simulation" element={<Simulation />} />
                        <Route path="/neurotech" element={<Neurotech />} />
                        <Route path="/sustainability" element={<Sustainability />} />
                        <Route path="/creative" element={<Creative />} />
                        <Route path="/creative/bhangra" element={<Bhangra />} />
                        <Route path="/creative/dj" element={<DJ />} />
                        <Route path="/creative/written" element={<Written />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/inspirations" element={<Inspirations />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
