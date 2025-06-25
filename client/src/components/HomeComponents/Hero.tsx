import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

const Hero = () => {
  const [chat, setChat] = useState<boolean>(false);
  
  return (
    <div className="container mx-auto px-4 py-6 md:px-0 md:py-12">
      <div className="flex flex-col md:flex-row">

        <div className="w-full md:w-full md:pl-8">
          <div className="px-8 py-8 flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl md:text-5xl font-bold text-maroon text-center mb-4">
              Talk to Nakshatra Kripaa
            </h1>
            <p className="text-xl md:text-2xl text-maroon text-center mb-8">
              Chat to get an Urgent Astrology Consultation
            </p>
          {chat ? <p className="text-xl md:text-2xl text-maroon text-center mb-8">
              We Will be Connecting with You Soon
            </p> : <button onClick={() => setChat(true)} className="bg-maroon hover:bg-maroon-dark text-white font-bold py-3 px-12 rounded-md transition-all duration-300">
            Let's Chat
          </button>}
          </div>
        </div>
      </div>
      <div className="w-full md:w-full md:pr-8 mb-8 md:mb-0 px-10">
        <div className="flex space-x-8">
          <CategoryCard
            title="CAREER"
            imageSrc="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg"
            position="top"
          />

          <CategoryCard
            title="RELATIONSHIP"
            imageSrc="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg"
            position="bottom"
          />

          <CategoryCard
            title="HEALTH"
            imageSrc="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
            position="bottom"
          />

        </div>
      </div>
    </div>
  );
};

export default Hero;