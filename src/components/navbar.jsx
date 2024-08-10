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
            <nav className="flex items-center justify-between p-4 sm:p-6 md:p-8 bg-black bg-opacity-80">
                <div className="flex items-center">
                    <img
                        src={cosmoLogo}
                        alt="company logo"
                        className="w-32 h-12 object-contain self-center"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={scrollToTop}
                        className="text-gray-400 font-extrabold text-lg sm:text-xl md:text-2xl pr-2 hover:border-b-2 hover:border-orange-500"
                    >
                        <FaArrowUp />
                    </button>
                    <button
                        onClick={toggleFullscreen}
                        className="hidden sm:block text-gray-400 font-extrabold text-lg sm:text-xl md:text-2xl pr-2 hover:border-b-2 hover:border-orange-500"
                    >
                        <FaExpand />
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="text-gray-400 font-extrabold text-xl sm:text-2xl md:text-3xl hover:border-b-2 hover:border-orange-500"
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
                        <div className="flex flex-col h-full justify-between">
                            <ul className="mt-10 text-sm sm:text-base md:text-lg">
                                <li className="mb-4">
                                    <Link to="/" className="hover:text-gray-300 hover:border-b-2 hover:border-orange-500" onClick={closeMenu}>
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/cosmo-communication" className="hover:text-gray-300 hover:border-b-2 hover:border-orange-500" onClick={closeMenu}>
                                        Cosmo Communication
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/work" className="hover:text-gray-300 hover:border-b-2 hover:border-orange-500" onClick={closeMenu}>
                                        Work
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/contact-us" className="hover:text-gray-300 hover:border-b-2 hover:border-orange-500" onClick={closeMenu}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                            <div className="text-xs sm:text-sm text-gray-500 border-t border-gray-700 pt-4">
                                <p>Designed by Huzaifa Mahmood</p>
                                <p>Email: <a href="mailto:hzfhzf137@gmail.com" className="hover:text-gray-400">hzfhzf137@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
