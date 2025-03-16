'use client';

import React from 'react';
import Image from 'next/image';

const AddValue: React.FC = () => {
    return (
        <div className="relative w-full h-[100vh]  overflow-hidden">
            <Image
                src="/addvalue.jpg"
                alt="Add Value"
                fill
                className="object-cover"
                priority
                sizes="100vw"
                quality={100}
            />
        </div>
    );
};

export default AddValue;