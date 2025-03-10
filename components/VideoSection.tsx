import React from 'react';

const VideoSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-24 min-h-screen bg-white"> {/* Increased padding and min-height */}
            {/* YouTube Video */}
            <div className="w-full max-w-6xl aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"> {/* Increased max width */}
                <iframe
                    className="w-full h-150"
                    src="https://www.youtube.com/embed/Wf0PQMwfVT8"
                    title="Bitcoin 101"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Content Underneath */}
            <div className="mt-12 text-center max-w-4xl"> {/* Increased margin-top and max-width */}
                <h2 className="text-3xl font-bold mb-6">Bitcoin 101</h2> {/* Increased text size and margin */}
                <p className="text-xl text-gray-700">
                Kal Kassa gives presentation and Q/A discussion to audience in Addis Ababa. 
                </p>
            </div>
        </div>
    );
};

export default VideoSection;