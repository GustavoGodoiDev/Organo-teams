import React from "react";
import { FaLinkedin, FaInstagram, FaHome, FaInfoCircle } from "react-icons/fa";  // Importando os ícones
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>DCBM Data Center</h2>
                </div>

                <div className="footer-links">
                    <a href="https://dcbmdatacenter.com/en/homeeng/" target="_blank" rel="noopener noreferrer">
                        <FaInfoCircle size={20} /> {/* Ícone para "Sobre nós" */}
                        Sobre nós
                    </a>

                    <a href="/Home">
                        <FaHome size={20} /> {/* Ícone para "Home" */}
                        Home
                    </a>
                </div>

                <div className="footer-social">
                    <a href="https://www.linkedin.com/company/dcbmdatacenter/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} /> {/* Ícone do LinkedIn */}
                        Linkedin
                    </a>

                    <a href="https://instagram.com/dcbmdatacenter" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} /> {/* Ícone do Instagram */}
                        Instagram
                    </a>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} DCBM Data Center. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
