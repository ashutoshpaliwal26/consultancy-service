import React from 'react';

const MeetAstrologersSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
            Meet Our Astrologers – The Experts Behind Lunar Astro
          </h2>
        </div>

        {/* Main Content */}
        <div className="text-gray-800 text-lg leading-relaxed space-y-6">
          <p>
            Not just anyone can be a Lunar Astro astrologer. Shri Deepanshu Giri Ji has personally selected every expert on our panel after rigorous 
            training. We have certain guidelines that astrologers must meet to be qualified for Lunar Astro panel
          </p>

          {/* Qualification List */}
          <div className="my-8">
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span>Astrologers have 5 years of experience</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span>Should have been trained under Shri Deepanshu Giri Ji.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span>Should have successfully passed all the assessments for the Lunar Astro panel and demonstrated the ability to predict accurately.</span>
              </li>
            </ul>
          </div>

          <p>
            We have a strict quality <span className="text-red-600 font-medium">review</span> system where our team evaluates astrologers daily to maintain top-tier standards.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default MeetAstrologersSection;