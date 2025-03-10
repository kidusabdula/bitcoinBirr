import React from 'react';

const VideoSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-24 min-h-screen bg-white">
            {/* YouTube Video */}
            <div className="w-full max-w-[90vw] md:max-w-6xl aspect-w-16 aspect-h-9 rounded-lg overflow-hidden px-4 md:px-0">
                <iframe
                    className="w-full h-[200px] sm:h-[350px] md:h-[450px] lg:h-[600px]"
                    src="https://www.youtube.com/embed/Wf0PQMwfVT8"
                    title="Bitcoin 101"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Content Underneath */}
            <div className="mt-8 md:mt-12 text-center max-w-4xl px-4 md:px-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Bitcoin 101</h2>
                <p className="text-lg md:text-xl text-gray-700">
                    Kal Kassa gives presentation and Q/A discussion to audience in Addis Ababa. 
                </p>
            </div>
        </div>
    );
};

export default VideoSection;