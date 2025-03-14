'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero2: React.FC = () => {
    const listItems = [
        { number: "01", text: "BITCOINBIRR.ORG" },
        { number: "02", text: "BITCOIN" },
        { number: "03", text: "STORE OF VALUE" },
        { number: "04", text: "PAST AND PRESENT" },
        { number: "05", text: "STORAGE EDUCATION" },
        { number: "06", text: "SOVEREIGNTY, LIQUIDITY AND LEGAL" },
        { number: "07", text: "RELATED MEDIA AND LEARNING CHANNELS" },
        { number: "08", text: "WHAT IS OPEN SOURCE?" }
    ];

    return (
        <div className="bg-white min-h-screen py-16 mt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                    {/* Left Section with Title */}
                    <motion.div 
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8">
                            <span className="text-[#0a0a0a]">#SATOSHI</span>
                            <br />
                            <span className="text-[#0a0a0a]">IS</span>
                            <span className="text-[#1d9374]">ETHIOPIAN</span>
                        </h1>
                        
                        {/* Placeholder for Image */}
                        <div className="w-full h-[200px] bg-gray-200 rounded-lg mb-8">
                        <img src="/satoshi.jpg" alt="Satoshi" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </motion.div>

                    {/* Right Section with List */}
                    <motion.div 
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="space-y-6">
                            {listItems.map((item, index) => (
                                <motion.div 
                                    key={item.number}
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <span className="text-[#1d9374] font-medium w-8">{item.number}</span>
                                    <span className="text-[#0a0a0a] font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;