'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Media2022: React.FC = () => {
    const mediaItems = [
        {
            title: "Why Are We Bullish (Kal Kassa, Chris Smith, Pierre Corbin, Ben Gagnon)",
            source: "BTC Sessions",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Episode 12: Satoshi is Ethiopian with Kal Kassa, Progressive Bitcoiner",
            source: "M. Stephany",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Ethiopia's Best Chance at Adopting Bitcoin",
            source: "BTC Times",
            author: "A. Kohnhorst",
            href: "https://www.btctimes.com/news/ethiopias-best-chance-at-adopting-bitcoin"
        },
        {
            title: "Bitcoin 101, Flawless Events",
            source: "YouTube",
            author: "K. Kassa",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Cardano: Social Credit Scores For Kids",
            source: "Bitcoin University",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Life By Design with Kal Kassa",
            source: "LinkUp",
            author: "A. Abraham",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Bitcoin is Freedom - Bitcoin 2022 Conference",
            source: "Bitcoin Magazine",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "የአገሮች ቁና ልደ እንግዳ.... ተወዳጅ ሰለሞን ካሳ ... ከስነ ሚዲያተኛ እስክንድር አስቻለ ጋር የስተዋወቁበት",
            source: "Seifu on EBS",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "2022-07-03 - meet the Ethiopia ፐ Bitcoin community",
            source: "Global Bitcoin Fest",
            href: "https://soundcloud.com/user-221236226/2022-07-03-meet-the-ethiopia-bitcoin-community"
        },
        {
            title: "A Sovereign Education",
            source: "Medium",
            author: "K.Kassa",
            href: "https://medium.com/@kalkassa/a-sovereign-education"
        },
        {
            title: "Altcoins like Cardano are Here to Steal Your Bitcoin: Bitconer's Guide Episode 22",
            source: "Meme Factory TM",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Bitcoin Advocacy with Kal Kassa",
            source: "Superlunar",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "110 Million Bitcoiners in Ethiopia?: Bitcoiner's Guide Episode 26 w/ @Kal Kassa",
            source: "Meme Factory TM",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Black Blockchain Summit: Unlocking Access",
            source: "I Love Black People",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Cardano Guy Says Turn Off Bitcoin",
            source: "Bitcoin University",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "The Injera Premium, Satoshi's Journal",
            source: "K.Kassa",
            href: "https://www.youtube.com/watch?v=Wf0PQMwfVT8"
        },
        {
            title: "Recounting Ethiopia's Bitcoin Developments in 2022",
            source: "Bitcoin Magazine",
            author: "K.Kassa",
            href: "https://bitcoinmagazine.com/culture/recounting-ethiopias-bitcoin-developments-in-2022"
        }
    ];

    return (
        <div className="py-16 px-4 md:px-6" style={{ backgroundColor: 'var(--custom-color)' }}>
            <div className="max-w-screen-xl mx-auto">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    2022 Media Coverage
                </motion.h2>
                
                <div className="grid gap-6 md:gap-8">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow border border-white/20"
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
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {item.title}
                                </h3>
                                <div className="flex items-center text-white/70">
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

export default Media2022;