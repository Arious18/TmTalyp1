import React, { useState } from 'react';
import { Search, Globe, Bell, Sun, Moon } from 'lucide-react';
import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isDark, setIsDark] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <header className="head-header">
            <div className="head-container">
                <div className="head-header-content">
                    {/* Logo */}
                    <div className="head-logo">
                        <span className="head-logo-text">KuvvatlyEyyam</span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="head-nav-links">
                        <a href="#" className="head-nav-link">Home</a>
                        <a onClick={() => navigate('/University')} className="head-nav-link">University</a>
                        <a href="#" className="head-nav-link">Services</a>
                        <a href="#" className="head-nav-link">About</a>
                        <a href="#" className="head-nav-link">Contact</a>
                    </nav>

                    {/* Search Bar */}
                    <div className="head-search-container">
                        <Search className="head-search-icon" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="head-search-input"
                        />
                    </div>

                    {/* Right Icons */}
                    <div className="head-icon-group">
                        <button className="head-icon-btn">
                            <Globe className="head-icon" />
                        </button>
                        <button className="head-icon-btn">
                            <Bell className="head-icon" />
                        </button>
                        <button onClick={toggleDarkMode} className="head-icon-btn">
                            {isDark ? <Sun className="head-icon" /> : <Moon className="head-icon" />}
                        </button>

                        {/* Auth Buttons */}
                        <div className="head-auth-buttons">
                            <button className="head-signin-btn" onClick={() => navigate('/Auth')}>
                                Sign In
                            </button>
                            <button className="head-signup-btn" onClick={() => navigate('/Auth')}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;