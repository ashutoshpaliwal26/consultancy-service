import React from 'react';

const ConsultationSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            HOW DO WE CONSULT?
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Video Section */}
          <div className="order-2 md:order-1">
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video placeholder with YouTube-style play button */}
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
                  {/* Zodiac circle background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border-4 border-yellow-400 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-red-600 font-bold text-lg">Lunar</div>
                          <div className="text-red-600 font-bold text-lg italic">Astro</div>
                          <div className="text-xs text-gray-600">Experience True Astrology</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute top-4 left-4 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold">GLIMPSE OF</h3>
                    <h3 className="text-2xl md:text-3xl font-bold">Nakshatra Kripaa</h3>
                    <h3 className="text-2xl md:text-3xl font-bold">CONSULTATION</h3>
                  </div>
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* YouTube branding */}
                  <div className="absolute bottom-4 left-4 flex items-center text-white text-sm">
                    <div className="bg-red-600 px-2 py-1 rounded mr-2 font-bold">
                      YouTube
                    </div>
                    <span>Watch on</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <div className="text-gray-800 text-sm leading-relaxed space-y-2">
              <p>
                At Nakshatra Kripaa, we have a proper Vedic Online astrology consultation 
                system set for consultations. It starts with booking your astrology 
                consultation services. Once confirmed, you get a Zoom meeting link to{' '}
                <span className="font-semibold text-red-800">talk to our astrologers</span>{' '}
                for your personalized horoscope reading. The meeting is recorded so you can 
                listen to your astrology predictions again in the future.
              </p>
              
              <p>
                Our main motto is to give you astrological solutions to problems and peace 
                of mind. Hence, we get to the root of your issues through detailed birth 
                chart analysis and suggest appropriate astrology remedies needed to resolve 
                the problem. If you have any questions regarding the consultation, we provide 
                post-consultation guidance through email too.
              </p>
            </div>
            
            {/* Call to Action Button */}
            <div className="mt-8">
              <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
                Book Consultation Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationSection;