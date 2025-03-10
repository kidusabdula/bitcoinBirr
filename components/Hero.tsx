import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <div className="relative h-screen">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/Hero.png')",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-Emerald-600 mb-6">
                        Hello World!
                        </h1>
                        <p className="text-lg md:text-xl text-black mb-8">
                        I’m BitcoinBirr 🇪🇹
<br/>
<br className='p-4'/>
Tinkering with bitcoin for Ethiopia and Africa. Currently learning about money, bitcoin and mining/ energy. Looking to collaborate on open source initiatives, particularly digital wallet education and open source financial services
                        </p>
                        <button  style={{ backgroundColor: 'var(--custom-color)' }} className=" hover:bg-grey-900 text-white font-medium px-6 py-3 rounded-md flex items-center space-x-2">
                            Learn more !
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Stats Section */}
                        {/*
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                            <div className="text-black">
                                <h3 className="text-xl font-bold mb-2">Fourth quarter 2021</h3>
                                <p className="text-gray-300">We announced fourth quarter 2021 results</p>
                                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center mt-2">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <div className="text-black">
                                <h3 className="text-xl font-bold mb-2">Zero emissions</h3>
                                <p className="text-gray-300">Flowbite aims to achieve net-zero emissions</p>
                                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center mt-2">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <div className="text-black">
                                <h3 className="text-xl font-bold mb-2">New York</h3>
                                <p className="text-gray-300">Plans for net zero emissions in New York</p>
                                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center mt-2">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <div className="text-black">
                                <h3 className="text-xl font-bold mb-2">2022 plans</h3>
                                <p className="text-gray-300">Investing in the future of Africa</p>
                                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center mt-2">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;