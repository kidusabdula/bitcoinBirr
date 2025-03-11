'use client';
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className=" text-white py-12" style={{ backgroundColor :'var(--custom-color-dark)' }}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center">
                    {/* Quote Section */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            <span className="text-custom">#SATOSHI</span>
                            <br />
                            <span className="text-white">IS </span>
                            <span className="text-custom">ETHIOPIAN</span>
                        </h2>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <Link href="/" className="hover:text-gray transition-colors">
                            Home
                        </Link>
                        <Link href="/lectures" className="hover:text-gray transition-colors">
                            Lectures
                        </Link>
                        <Link href="/about" className="hover:text-gray transition-colors">
                            About
                        </Link>
                        <Link href="/resources" className="hover:text-gray transition-colors">
                            Resources
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6 mb-8">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-custom transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-custom transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-custom transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-gray-400">
                        © {new Date().getFullYear()} BitcoinBirr. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;