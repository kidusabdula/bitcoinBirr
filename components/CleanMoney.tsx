'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CleanMoney: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white py-10">
            <motion.div 
                className="max-w-4xl text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-6xl md:text-7xl font-bold mb-8">
                    <span className="text-gray-400">CLEAN AND</span>
                    <br />
                    <span className="text-gray-400">UNTAMPERED</span>
                    <br />
                    <span className="text-gray-400">MONEY.</span>
                    <br />
                    <span className="text-custom">PERIODT.</span>
                </h1>
            </motion.div>
        </div>
    );
};

export default CleanMoney;