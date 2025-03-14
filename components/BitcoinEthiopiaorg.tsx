'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BitcoinEthiopia: React.FC = () => {
    return (
        <>
         <h2 className="text-3xl md:text-4xl font-bold text-custom text-left m-20 md:mb-16 px-4 pb-5 pr-10 mt:20">
                01 Bitcoin.org
            </h2>
        <div className="py-16" style={{ backgroundColor: 'var(--custom-color)' }}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div 
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Bitcoin for Ethiopia
                        </h2>
                        <p className="text-white/90 mb-4">
                            Birr means Money in Amharic.
                        </p>
                        <p className="text-white/90 mb-6">
                            It actually means Silver but over the years the two have come to mean the same thing. Pre-1971, 1 Ethiopian Birr had the value and convertibility of 1 silver bullion coin. Over time the Birr has lost an incredible amount of value as compared to foreign currencies. BitcoinBirr strongly believes that the Ethiopian people will gain great strength and value from understanding Bitcoin and making it work for them. Learning comes first. Local languages are respected. Test transactions of 200 Satoshi (or "Sats" - unit of measurement) using lightning wallets are available via our Telegram Group.
                        </p>
                        <p className="text-white/90">
                            BitcoinBirr is an open source initiative to educate and share bitcoin material with populations in all economies. 2021 priorities include translating copies of various books and relevant materials in local Ethiopian and Eritrean languages, beginning with The Little Bitcoin Book. Thank you to all the generous supporters of this initiative.
                        </p>
                        
                        {/* <motion.button
                            className="mt-8 bg-white text-custom px-8 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </motion.button> */}
                    </motion.div>

                    {/* Image Section */}
                    <motion.div 
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden box-shadow">
                            <Image
                                src="/dollar-eyes.jpg"
                                alt="Dollar Eyes"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BitcoinEthiopia;