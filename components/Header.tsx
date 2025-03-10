'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'shadow-md' : ''
        }`} style={{ backgroundColor: isScrolled ? 'var(--custom-color)' : 'white' }}>
            <nav className="px-4 lg:px-6 py-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center">
                        <img 
                            src={isScrolled ? "/bitcoinbirrw.png" : "/bitcoinbirr.png"} 
                            className="mr-3 h-6 sm:h-9" 
                            alt="bitcoin-birr" 
                        />
                        <span className={`text-xl font-semibold ${
                            isScrolled ? 'text-white' : 'text-custom'
                        } transition-colors duration-300`}>
                            BitcoinBirr
                        </span>
                    </a>

                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop and Mobile Menu */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`}>
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:items-center">
                            <li>
                                <a href="#" className={`block py-2 pr-4 pl-3 ${
                                    isScrolled ? 'text-white' : 'text-black'
                                } lg:p-0`}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`block py-2 pr-4 pl-3 ${
                                    isScrolled ? 'text-white' : 'text-black'
                                } lg:p-0`}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`block py-2 pr-4 pl-3 ${
                                    isScrolled ? 'text-white' : 'text-black'
                                } lg:p-0`}>
                                    Lectures
                                </a>
                            </li>
                            <li className="relative">
                                <button 
                                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                                    className={`flex items-center py-2 pr-4 pl-3 ${
                                        isScrolled ? 'text-white' : 'text-black'
                                    } lg:p-0`}
                                >
                                    Resources
                                    <svg 
                                        className={`ml-1 w-4 h-4 transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isResourcesOpen && (
                                    <div className="lg:absolute lg:left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resource 1</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resource 2</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resource 3</a>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;