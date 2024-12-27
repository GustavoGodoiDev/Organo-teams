import React from "react";
import { FaHome, FaInfoCircle, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importando os ícones
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <div className="header-logo">
                    <h1>DCBM Data Center</h1>
                </div>

                {/* Navbar */}
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

                    {/* Social Icons */}
                    <div className="navbar-social">
                        <a href="https://www.linkedin.com/company/dcbmdatacenter/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://instagram.com/dcbmdatacenter" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
