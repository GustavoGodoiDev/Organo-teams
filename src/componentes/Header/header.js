import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaLinkedin, FaInstagram, FaSun, FaMoon } from "react-icons/fa"; 
import "./header.css";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode", !isDarkMode);
    };

    return (
        <header className={`header ${isDarkMode ? "dark" : "light"}`}>
            <div className="header-container">
                <div className="header-logo">
                    <h1>DCBM Data Center | </h1>
                </div>
                <nav className="navbar">
                    <ul className="navbar-links">
                        <li>
                            <a href="/home">
                                <FaHome size={24} />
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="https://dcbmdatacenter.com/en/homeeng/" target="_blank" rel="noopener noreferrer">
                                <FaInfoCircle size={24} />
                                Sobre nós
                            </a>
                        </li>
                    </ul>
                    <div className="navbar-social">
                        <a href="https://www.linkedin.com/company/dcbmdatacenter/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://instagram.com/dcbmdatacenter" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                    </div>

                    {/* Botão de alternância de tema */}
                    <div className="theme-switch">
                        <input 
                            type="checkbox" 
                            id="themeToggle" 
                            onChange={toggleTheme} 
                            checked={isDarkMode} 
                        />
                        <label htmlFor="themeToggle" className="slider">
                            <FaSun className="icon-sun" />
                            <FaMoon className="icon-moon" />
                        </label>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
