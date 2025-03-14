'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhatIsBitcoin: React.FC = () => {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-custom text-left m-20 md:mb-16 px-4 pb-5 pr-10 mt:20">
                02 Bitcoin
            </h2>
            <div className="py-16 ">
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
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                                What is Bitcoin?
                            </h2>
                            <p className="text-black mb-4">
                                Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
                            </p>
                            <ul className="text-black space-y-2 mb-6">
                                <li>• Original author(s): Satoshi Nakamoto</li>
                                <li>• Ledger start: 3 January 2009</li>
                                <li>• Initial release: 0.1.0 / 9 January 2009</li>
                                <li>• Latest release: 0.21.1 / 2 May 2021</li>
                                <li>• Supply limit: 21,000,000</li>
                                <li>• Symbol: BTC</li>
                            </ul>
                            {/* <p className="text-white/90">
                                Bitcoin: A Peer-to-Peer Electronic Cash System -
                                White Paper at https://bitcoin.org
                            </p> */}
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
                                    src="/bitcoin-logo.jpg"
                                    alt="Bitcoin Logo"
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

export default WhatIsBitcoin;