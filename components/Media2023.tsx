'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Media2023: React.FC = () => {
    const mediaItems = [
        {
            title: "Ethiopia's Perspective On Bitcoin: Finance & Economics Kassa Weigh's In, Dawdu",
            source: "The Bitcoin Source",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Interview with Kal Kassa - Fountain",
            source: "Tokyo Citadel Builders",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Empowering Africa through Bitcoin: A Conversation with Kal Kassa",
            source: "African Gold Growers Academy",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Bitcoin Adoption in Ethiopia with Kal Kassa, New Renaissance Capital",
            source: "F. Corva",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Africa: The New Land of the Free",
            source: "Bitcoin Magazine",
            author: "F. Corva",
            href: "https://bitcoinmagazine.com/culture/africa-new-land-of-free"
        },
        {
            title: "Bitcoin mining በ አቢሲኒያ | Kal Kassa",
            source: "Gugut Podcast",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Bitcoin Mining Around the World: Africa",
            source: "Hashrate Index",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Building with Bitcoin @ALX Ethiopia Pt1",
            source: "Student of Bitcoin",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Bitcoin for Ethiopia",
            source: "Addis Block Podcast",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Russia to build crypto mining hub in Africa",
            source: "Russia Today",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Ethiopian-Born Former Google Engineer Ventures into Bitcoin Mining in Ethiopia",
            source: "Shega",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Bitcoin Presentation to INSA in Addis Ababa",
            source: "YouTube",
            author: "Kal Kassa",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Work and Earn in Bitcoin",
            source: "DevFest '23",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "The State of Bitcoin Mining in Ethiopia",
            source: "BitcoinBirr",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
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
                    2023 Media Coverage
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

export default Media2023;