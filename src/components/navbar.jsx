import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaExpand, FaBars } from 'react-icons/fa';
import cosmoLogo from '../assets/images/cosmoLogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isOpen]);

    return (
        <div className="bg-cover bg-center fixed top-0 left-0 w-full z-50">
            <nav className="flex items-center justify-between p-2 sm:p-4 md:p-6 bg-black bg-opacity-80">
                <div className="flex items-center flex-shrink-0">
                    <img
                        src={cosmoLogo}
                        alt="company logo"
                        className="w-32 h-8 sm:w-48 sm:h-12 md:w-56 md:h-14 object-contain"
                    />
                </div>
                <div className="flex-grow flex items-center justify-end space-x-4">
                    <button
                        onClick={scrollToTop}
                        className="text-gray-400 font-extrabold text-lg sm:text-xl md:text-2xl pr-2"
                    >
                        <FaArrowUp />
                    </button>
                    <button
                        onClick={toggleFullscreen}
                        className="text-gray-400 font-extrabold text-lg sm:text-xl md:text-2xl pr-2"
                    >
                        <FaExpand />
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="text-gray-400 font-extrabold text-xl sm:text-2xl md:text-3xl pr-5"
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                        onClick={closeMenu}
                    ></div>
                    <div
                        className={`fixed top-0 right-0 w-64 md:w-80 h-full bg-gray-800 text-white p-5 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <button
                            onClick={toggleMenu}
                            className="absolute top-5 right-5 text-2xl sm:text-3xl md:text-4xl text-white"
                        >
                            &times;
                        </button>
                        <ul className="mt-10 text-sm sm:text-base md:text-lg">
                            <li className="mb-4">
                                <Link to="/" className="hover:text-gray-300" onClick={closeMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/cosmo-communication" className="hover:text-gray-300" onClick={closeMenu}>
                                    Cosmo Communication
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/work" className="hover:text-gray-300" onClick={closeMenu}>
                                    Work
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/contact-us" className="hover:text-gray-300" onClick={closeMenu}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
