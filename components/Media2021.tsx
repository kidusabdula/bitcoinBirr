'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Media2021: React.FC = () => {
    const mediaItems = [
        {
            title: "Shitcoin Millionaire",
            source: "Medium",
            author: "K. Kassa",
            href: "https://medium.com/@kalkassa/shitcoin-millionaire-d9a6112fa706"
        },
        {
            title: "Number of User Go Up",
            source: "Lightning Labs",
            author: "R. Gentry",
            href: "https://lightning.engineering/posts/2021-07-27-network-data/"
        },
        {
            title: "The Rise Of Open-Source Software",
            source: "CNBC - YouTube",
            author: "D. Zuegal",
            href: "https://www.youtube.com/watch?v=SpeDK1TPbew"
        },
        {
            title: "Check Your Financial Privilege",
            source: "Bitcoin Audible",
            author: "G. Swann",
            href: "https://bitcoinaudible.com/check-your-financial-privilege/"
        },
        {
            title: "Check Your Financial Privilege",
            source: "Bitcoin Magazine",
            author: "A. Gladstein",
            href: "https://bitcoinmagazine.com/culture/check-your-financial-privilege"
        },
        {
            title: "The Marathon - Ethiopia and Bitcoin",
            source: "Bitcoin Magazine",
            author: "K. Kassa",
            href: "https://bitcoinmagazine.com/culture/bitcoin-ethiopia-the-marathon"
        },
        {
            title: "The Bitcoin Revolution in Africa: Explained",
            source: "Power Laws: Bitcoin Documentaries",
            href: "https://www.youtube.com/watch?v=UXFRaG5c_7w"
        },
        {
            title: "Financial Inclusion - BitcoinBirr and BitcoinNakfa",
            source: "S. Gomez/Fleury",
            href: "https://www.youtube.com/watch?v=8zYG5-kcqxY"
        },
        {
            title: "The Promised Land with Kal Kassa (Ethiopia)",
            source: "One Love Bitcoin, YouTube",
            author: "B. Dread",
            href: "https://www.youtube.com/watch?v=kKKqD4dev5k"
        },
        {
            title: "The Lightning Network Is Going to Change How You Think About Bitcoin",
            source: "Coindesk",
            author: "J. Wiser",
            href: "https://www.coindesk.com/tech/2021/07/12/the-lightning-network-is-going-to-change-how-you-think-about-bitcoin/"
        },
        {
            title: "Renewed Hope: How Bitcoin and Green Energy Can Save Ethiopia's Economy",
            source: "Forbes",
            author: "M.L. Rivers",
            href: "https://www.forbes.com/sites/martinrivers/2021/06/15/renewed-hope-how-bitcoin-and-green-energy-can-save-ethiopias-economy/"
        },
        {
            title: "Kal Kassa, Bitcoin in Ethiopia: Episode 4, Changing the Tide",
            source: "J. Crabtree",
            href: "https://www.youtube.com/watch?v=9g_ycC1HB9Y"
        },
        {
            title: "Bringing Bitcoin to Ethiopia with Kal Kassa",
            source: "Bitcoin Magazine Podcast",
            author: "C.Keroles",
            href: "https://www.youtube.com/watch?v=RYGHxN9v93Q"
        },
        {
            title: "#ETH Ethiopia and Bitcoin (Part 1)",
            source: "Genesis Block Education",
            author: "bitcoinbymalx",
            href: "https://www.youtube.com/watch?v=X2qK7Hh-2Yk"
        },
        {
            title: "#ETH Ethiopia and Lightning (Part 2)",
            source: "Genesis Block Education",
            author: "bitcoinbymalx",
            href: "https://www.youtube.com/watch?v=X2qK7Hh-2Yk"
        },
        {
            title: "Bitcoin in Ethiopia with @KalKassa",
            source: "A Boy Named Pseu",
            author: "P. Gibson",
            href: "https://www.youtube.com/watch?v=X2qK7Hh-2Yk"
        },
        {
            title: "Cryptocurrency & related technologies with Kal Kassa",
            source: "Habesha in Tech, YouTube",
            author: "T. Kassa",
            href: "https://www.youtube.com/watch?v=X2qK7Hh-2Yk"
        },
        {
            title: "2-3 pm - Bitcoin in Sudan and Ethiopia with SudanHODL and Kal Kassa",
            source: "SoundCloud (Global Bitcoin Fest)",
            href: "https://soundcloud.com/user-221236226/2-3-pm-bitcoin-in-sudan-and-ethiopia-with-sudanhodl-and-kal-kassa"
        },
        {
            title: "Bitcoin in the Developing World",
            source: "Bitcoin Academy - YouTube",
            author: "Human Rights Foundation",
            href: "https://www.youtube.com/watch?v=X2qK7Hh-2Yk"
        }
    ];

    return (
        <div className="py-16 px-4 md:px-6 bg-white">
            <div className="max-w-screen-xl mx-auto">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-12 text-center text-custom"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    2021 Media Coverage
                </motion.h2>
                
                <div className="grid gap-6 md:gap-8">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <a 
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:opacity-80 transition-opacity"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-custom">
                                    {item.title}
                                </h3>
                                <div className="flex items-center text-gray-600">
                                    <span className="mr-2">{item.source}</span>
                                    {item.author && (
                                        <>
                                            <span className="mx-2">•</span>
                                            <span>{item.author}</span>
                                        </>
                                    )}
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Media2021;